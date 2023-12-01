Repository to allow ScratchX to load extensions from here.

# Håndtering af Jekyll site på Github pages

Installer ruby + bundle på en Linux PC for at kunne køre lokal test.  Det er ikke rigtig nødvendigt, hvis man ikke skal andet end at skrive en ny side, men meget nyttigt til rettelser på skabeloner, layouts mv.

Kør en lokal server med:

    cd < katalog >
    bundle exec jekyll serve --verbose

VScode kommer op med et link til eks.: http://127.0.0.1:4000/

# Jinja2

Vis en variabels indhold med `inspect`:

    {{ site.posts | inspect }}



# Tip til sider

Text can be **bold**, _italic_, ~~strikethrough~~ or `keyword`.

[Link to another page](./another-page.html).

# Header 1
## Header 2
### Header 3
### Header 4
#### Header 5
##### Header 6
###### Header 7

> Blockquote
>
> Skriver tekst som skrevet

Kodeblok med syntaks-highlight:
```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```
* Uordnet liste
* Uordnet liste
  * under
    * under igen

1. Ordnet liste
   1. under
1. Ordnet liste (ja tallet er ligegyldigt)
   1. under
   2. under igen
2. Ordnet liste

Tabel

| head1        | head two| three |
|:-------------|:--------|:------|
| celle        | celle   | nice  |
| ok           | `oreos` | hmm   |

Vandret linje:
* * *

Billede:
![Octocat](https://github.githubassets.com/images/icons/emoji/octocat.png)

Definitionsliste:

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dd>Godrilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>