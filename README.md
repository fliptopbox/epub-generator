# EPUB v3 generator with 11ty

You can generate your very own EPUB book with this little utility, which lets you author your book using markdown syntax, then when you have finished adding images and CSS styling to your book, you can validate and generate an epub archive ready to upload to your ebook device or send to your online book seller.

I mean, yes you could use a GUI and have very easy experience converting your word processor document in literally minutes ... or ... you could enjoy a world full of pain, I guess that since you are reading this sentence you are a pain person, like me. You are welcome.

Just a reminder you can always walk the broad path with [Calibre](https://calibre-ebook.com/).

---

## Eleventy static site generator

This tool uses Eleventy to render the components for an epub3 book, to get set up you will need NodeJS, and then from you terminal do the following:

```
npm install
```

To run the eleventy preview website with hot reloading

```
npm start
```

Each save will prompt a live reload, and you can see a preview on `localhost:8080`

## Configure the epub

The majority of the configuration is in `source/source.json` these values are important when packaging the archive, and contain variables related to you book, and other specifics regarding the epub format.

| Key          | Description                                 |
| ------------ | ------------------------------------------- |
| title        | Book title (manditory)                      |
| cover        | the cover page JPG `images/cover-image.jpg` |
| identifier   | ISBN or URL or ...                          |
| language     | ISO lang code eg `en`                       |
| dateCreated  | initial date of publication                 |
| dateModified | the last date the document was modified     |
| creator      | the author's name                           |
| publisher    | the publishing entity                       |
| rights       | legal copy right statement                  |

JSON key value pairs that are used in the XML manifest file `package.opf`

| Key             | Description                                  |
| --------------- | -------------------------------------------- |
| summary         | a book jacket short summary                  |
| cssPath         | the path to CSS used by a page template      |
| outputDirectory | where the static HTML is rendered `/output/` |

These values are configuration values, used to customise the rendering.

These are some of the most common XML metadata tags used in an EPUB. This is not an exhaustive list, but it should take care of most cases.
You are welcome to add more or subtract unneeded keys from the source JSON, but you should also check the `package.md` to ensure that the metadata reference is add/removed too.

## Example short story (Wizard of Oz)

The repository uses a sample short story to illustrate the workings and file locations.

- Add your own chapters to the `source/chapters/` folder.
- Add and reference image assets from the `source/images` folder. Because epub is strict XHML you will need a closed image tag, and typical markdown will not work for images, so use HTML image tag instead eg. `<img src="my/image.jpg" />`
- Add styling to the `source/css` folder, and to import your CSS onto a page you will need to add `cssPath` to the front matter for those pages. See an example of this on `titlepage.md` which uses it's own CSS stylesheet.
- Warning: be aware of the markdown parser, most errors will be cause by non-closing tags (like IMG or HR) a better person would have modified the parser to catch these annoyances, alas I did not. (by all meand send me a PR)

Each save will render the `source` files into a root level folder `output`

---

## Generate the ebook

When you are done with writing and ready to publish, you can use these two commands to validate your EPUB, and generate an EPUB archive for distribution.

##### Pagckage for distribution:

This command will use the folder named `output` to package an EPUB-3 file, and validate the archive too.

```bash
./pack-single output
```

##### Validate the EPUB package:

```bash
./validate-single output
```

This command will only validate your package. First, it will generate the EPUB, and in the terminal show the validation warnings and errors, for you to correct. The script will delete the generated `.epub` when it is finished.

---

## EPUB resources

**Understanding the EPUB structure.**

A knowledge of the structure and standards for EPUBs is necessary to complete the process of adapting your content to an accessible EPUB. Many of the authoring tools that produce EPUBs require further editing after export to make the EPUB fully accessible. Read about the anatomy of an EPUB and learn the internal structure.

![](https://www.edrlab.org/wp-content/uploads/2016/12/edrlab_epub_the-structure-of-an-EPUB-file.png)

**Resources that made this utility possible:**

- [A variety of EPUB 3 sample documents](https://github.com/IDPF/epub3-samples)
- [Summary of creating a epub](https://www.accessibletextbooksforall.org/stories/creating-accessible-epub)
- [EDR lab’s anatomy of an EPUB](https://www.edrlab.org/epub/anatomy-of-an-epub-3-file/)
- [IDPFs ePub Standard](http://www.idpf.org/epub/301/spec/epub-publications.html) (3.0.1)
- [w3c’s new ePub 3.2 standard](https://www.w3.org/publishing/epub3/epub-contentdocs.html)
- - [EPUB document with pandoc and markdown](https://pandoc.org/MANUAL.html#epubs)
