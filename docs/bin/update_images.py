#!/usr/bin/python3
import re
import os
import sys
import shutil
import pathlib

def process_markdown_file(markdown_file):
    # Extract the directory path and basename of the markdown file
    markdown_directory = os.path.dirname(markdown_file)
    markdown_basename = os.path.basename(markdown_file).split('.')[0]

    # Create the directory for the images if it doesn't exist
    images_directory = os.path.join('assets', 'images', markdown_basename)
    if not os.path.exists(images_directory):
        os.makedirs(images_directory)

    # Extract image URLs from markdown file
    with open(markdown_file, 'r') as f:
        markdown_content = f.read()

    # Match alt text and image urls not already referencing the assets directory (they don't need to be moved)
#    image_pattern = r'!\[([^]]*)]\((?!/assets/)([^)]*)\)'
    image_pattern = r'!\[([^]]*)]\(([^)]*)\)'
    matches = re.findall(image_pattern, markdown_content)

    # Initialize an image counter to keep track of image position
    image_counter = 1
    # Initialise data structure to hold mappings
    image_urls = {}
    for match in matches:
        image_urls[match[1]] = { "pos": image_counter}
        #image_urls[match[1]] = { "md_name": match[1], "pos": image_counter}
        image_counter += 1

    print(f"Images in md file: {image_urls}")

    # Map image URLs to corresponding image files
    image_files_dict = {}
    for image_url, value in image_urls.items():
        # Extract image filename from the URL
        image_filename = pathlib.Path(image_url).name

        # Find the corresponding image file in the markdown directory
        image_file = None
        for root, _, files in os.walk(markdown_directory):
            for file in files:
                if file.endswith(('.png', '.jpg', '.jpeg', '.gif', '.svg')) and file.startswith(image_filename):
                    image_file = os.path.join(root, file)
                    break

        if image_file is not None:
            image_urls[image_url]['from'] = image_file
        else:
            image_urls[image_url]['from'] = image_url

        # Calculate destination path:
        file_dir = os.path.dirname(image_urls[image_url]['from'])
        if file_dir.startswith('/'):
            # Don't attempt to move files already fetched from "/somewhere"
            image_urls[image_url]['dest'] = image_urls[image_url]['from']
        else: 
            # Designate new filename and destination for other files
            file_name_components = os.path.basename(image_urls[image_url]['from']).split('.')
            extension = ".".join(file_name_components[1:])
            image_name = f"image-{image_urls[image_url]['pos']}.{extension}"
            image_urls[image_url]['dest'] = "/" + os.path.join(images_directory, image_name)

        print(f"Images at position {image_urls[image_url]['pos']}:")
        print(f"  md  : {image_url}")
        print(f"  from: {image_urls[image_url]['from']}")
        print(f"  dest: {image_urls[image_url]['dest']}")
 
        # Move the file if from and dest are different:
        if image_urls[image_url]['from'] != image_urls[image_url]['dest']:
            #print(f"Moving that file {image_urls[image_url]['dest'][1:]}")
            shutil.move(image_urls[image_url]['from'], image_urls[image_url]['dest'][1:])

    # Update image tags in the markdown file if any images were moved
    if len(image_urls) > 0:
        with open(markdown_file, 'r') as f:
            markdown_content = f.read()

        new_markdown_content = re.sub(image_pattern, lambda match: f'!['+match.group(1) + ']('+image_urls[match.group(2)]['dest'] + ')', markdown_content)
        #print(new_markdown_content)
        with open(markdown_file, 'w') as f:
            f.write(new_markdown_content)

if __name__ == '__main__':
    if len(sys.argv) == 1:
        print("Please provide the markdown file path as a command-line argument.")
        print("Usage: python3 update_images.py <markdown_file_path>")
        sys.exit(1)

    markdown_file = sys.argv[1]  # Get the markdown file path from the command line argument
    process_markdown_file(markdown_file)