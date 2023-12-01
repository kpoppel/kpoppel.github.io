---
layout: splash
title: "Splash plage with feature rows"
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: https://github.com/mmistakes/minimal-mistakes/blob/master/docs/assets/images/unsplash-gallery-image-1-th.jpg?raw=true
  actions:
    - label: "Download"
      url: "https://github.com/mmistakes/minimal-mistakes/"
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
excerpt: "Bacon ipsum dolor sit amet salami ham hock ham, hamburger corned beef short ribs kielbasa biltong t-bone drumstick tri-tip tail sirloin pork chop."
intro: 
  - excerpt: 'Nullam suscipit et nam, tellus velit pellentesque at malesuada, enim eaque. Quis nulla, netus tempor in diam gravida tincidunt, *proin faucibus* voluptate felis id sollicitudin. Centered with `type="center"`'
feature_row:
  - image_path: https://github.com/mmistakes/minimal-mistakes/blob/master/docs/assets/images/unsplash-gallery-image-1-th.jpg?raw=true
    alt: "placeholder image 1"
    title: "Placeholder 1"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
  - image_path: https://github.com/mmistakes/minimal-mistakes/blob/master/docs/assets/images/unsplash-gallery-image-2-th.jpg?raw=true
    alt: "placeholder image 2"
    title: "Placeholder 2"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: https://github.com/mmistakes/minimal-mistakes/blob/master/docs/assets/images/unsplash-gallery-image-3-th.jpg?raw=true
    title: "Placeholder 3"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
feature_row2:
  - image_path: https://github.com/mmistakes/minimal-mistakes/blob/master/docs/assets/images/unsplash-gallery-image-2-th.jpg?raw=true
    alt: "placeholder image 2"
    title: "Placeholder Image Left Aligned"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Left aligned with `type="left"`'
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row3:
  - image_path: https://github.com/mmistakes/minimal-mistakes/blob/master/docs/assets/images/unsplash-gallery-image-2-th.jpg?raw=true
    alt: "placeholder image 2"
    title: "Placeholder Image Right Aligned"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Right aligned with `type="right"`'
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row4:
  - image_path: https://github.com/mmistakes/minimal-mistakes/blob/master/docs/assets/images/unsplash-gallery-image-2-th.jpg?raw=true
    alt: "placeholder image 2"
    title: "Placeholder Image Center Aligned"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Centered with `type="center"`'
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--primary"
---


{% include feature_row id="intro" type="center" %}

{% include feature_row %}

{% include feature_row id="feature_row2" type="left" %}

{% include feature_row id="feature_row3" type="right" %}

{% include feature_row id="feature_row4" type="center" %}

## More content

Here are some examples of what a post with images might look like. If you want to display two or three images next to each other responsively use `figure` with the appropriate `class`. Each instance of `figure` is auto-numbered and displayed in the caption.

[Placeholder images](https://placehold.co/)

### Figures (for images or video)

#### One Up

<figure>
	<a href="http://farm9.staticflickr.com/8426/7758832526_cc8f681e48_b.jpg"><img src="http://farm9.staticflickr.com/8426/7758832526_cc8f681e48_c.jpg"></a>
	<figcaption><a href="http://www.flickr.com/photos/80901381@N04/7758832526/" title="Morning Fog Emerging From Trees by A Guy Taking Pictures, on Flickr">Morning Fog Emerging From Trees by A Guy Taking Pictures, on Flickr</a>.</figcaption>
</figure>

Vero laborum commodo occupy. Semiotics voluptate mumblecore pug. Cosby sweater ullamco quinoa ennui assumenda, sapiente occupy delectus lo-fi. Ea fashion axe Marfa cillum aliquip. Retro Bushwick keytar cliche. Before they sold out sustainable gastropub Marfa readymade, ethical Williamsburg skateboard brunch qui consectetur gentrify semiotics. Mustache cillum irony, fingerstache magna pour-over keffiyeh tousled selfies.

#### Two Up

Apply the `half` class like so to display two images side by side that share the same caption.

```html
<figure class="half">
    <a href="https://placehold.co/600x400/000000/FFFFFF"><img src="https://placehold.co/600x400/000000/FFFFFF"></a>
    <a href=https://placehold.co/600x400/00DD00/123456?text=Hello+this\nworld&font=playfair-display"><img src="https://placehold.co/600x400/00DD00/123456?text=Hello+this\nworld&font=playfair-display></a>
    <figcaption>Caption describing these two images.</figcaption>
</figure>
```

And you'll get something that looks like this:

<figure class="half">
	<a href="https://placehold.co/600x400/000000/FFFFFF"><img src="https://placehold.co/600x400/000000/FFFFFF"></a>
	<a href="https://placehold.co/600x400/00DD00/1233456?text=Hello+this\nworld&font=playfair-display"><img src="https://placehold.co/600x400/00DD00/123456?text=Hello+this\nworld&font=playfair-display"></a>
	<figcaption>Two images.</figcaption>
</figure>

#### Three Up

Apply the `third` class like so to display three images side by side that share the same caption.

```html
<figure class="third">
	<img src="http://placehold.co/600x300.jpg">
	<img src="http://placehold.co/600x300.jpg">
	<img src="http://placehold.co/600x300.jpg">
	<figcaption>Caption describing these three images.</figcaption>
</figure>
```

And you'll get something that looks like this:

<figure class="third">
	<img src="http://placehold.co/600x300.jpg">
	<img src="http://placehold.co/600x300.jpg">
	<img src="http://placehold.co/600x300.jpg">
	<figcaption>Three images.</figcaption>
</figure>


## Gallery
https://mmistakes.github.io/minimal-mistakes/post%20formats/post-gallery/