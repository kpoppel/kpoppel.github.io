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

    # Initialize an image counter to keep track of image position
    image_counter = 1

    # Extract image URLs from markdown file
    image_urls = []
    with open(markdown_file, 'r') as f:
        markdown_content = f.read()

    # Match alt text and image urls not already referencing the assets directory (they don't need to be moved)
    image_pattern = r'!\[([^]]*)]\((?!/assets/)([^)]*)\)'
    matches = re.findall(image_pattern, markdown_content)
    for match in matches:
        image_urls.append(match[1])

    print(f"Images in md file: {image_urls}")

    # Map image URLs to corresponding image files
    image_files_dict = {}
    for image_url in image_urls:
        # Extract image filename from the URL
        image_filename = pathlib.Path(image_url).name

        # Find the corresponding image file in the markdown directory
        image_file = None
        for root, _, files in os.walk(markdown_directory):
            for file in files:
                if file.endswith(('.png', '.jpg', '.jpeg', '.gif')) and file.startswith(image_filename):
                    image_file = os.path.join(root, file)
                    break

        if image_file is not None:
            image_files_dict[image_url] = image_file

    print(f"Images to process: {image_files_dict}")

    # Process each image file
    image_names_dict = {}  # Dictionary to store (image_base, image_name) pairs
    for image_url, image_file in image_files_dict.items():
        # Extract the base filename of the image without the extension
        image_base = os.path.basename(image_file).split('.')[0]
        # Generate a unique image name if one doesn't exist
        if image_base not in image_names_dict:
            #image_name = f'{image_base}-{image_counter}{os.path.splitext(image_file)[1]}'
            image_name = f'image-{image_counter}{os.path.splitext(image_file)[1]}'
            image_names_dict[image_file] = image_name
            image_counter += 1
        else:
            image_name = image_names_dict[image_file]

        # Move the image file to the images directory and update the image name
        image_destination = os.path.join(images_directory, image_name)
        shutil.move(image_file, image_destination)
        print(f"want to move {image_file} -> {image_destination}")

    print(f"{len(image_files_dict)} new image to curent path: {image_names_dict}")

    # Update image tags in the markdown file if any images were moved
    if len(image_files_dict) > 0:
        with open(markdown_file, 'r') as f:
            markdown_content = f.read()

        new_markdown_content = re.sub(image_pattern, lambda match: f'!['+match.group(1)+'](/assets/images/' + markdown_basename + '/' + image_names_dict[image_files_dict[match.group(2)]] + ')', markdown_content)

        print(new_markdown_content)
        with open(markdown_file, 'w') as f:
            f.write(new_markdown_content)


if __name__ == '__main__':
    if len(sys.argv) == 1:
        print("Please provide the markdown file path as a command-line argument.")
        print("Usage: python3 update_images.py <markdown_file_path>")
        sys.exit(1)

    markdown_file = sys.argv[1]  # Get the markdown file path from the command line argument
    process_markdown_file(markdown_file)