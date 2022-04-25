# EPUB v3 generator with 11ty

You can generate your very own EPUB book with this little utility, which lets you author your book using markdown sytax, then when you have finished adding images and CSS styling to your book, you can validate and generate an epub archive ready to upload to your ebook device or send to your online book seller.

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

## Example short story

The repository uses a sample short story to illustrate the workings and file locations.

- Add your own chapters to the `source/chapters/` folder. 

- Add and reference image assets from the `source/images` folder. Because epub is strich XHML you will need a closed image tag, and typical markdown will not work for images, so use HTML image tag instead eg. `<img src="my/image.jpg" />`

- Add styling to the `source/css` folder, and to import your css onto a page you will need to add `cssPath` to the front matter for those pages.  See an example of this on `titlepage.md` which uses it's own CSS stylesheet.

Each save will render the `source` files into a root level folder `output`

---

## Generate the ebook

When you are done with writing and ready to publish, you can use these two comands to validate your epub, and generate an EPUB archive for distribution.

##### Pagckage for distrubution:

This command will use the folder named `output` to package an ePUB3 file, and validate the archive too.

```bash
./pack-single output
```

##### Validate the package:

```bash
./validate-single output
```

This command will only validate. First it will generate the ePUB (like) above, show the validation warnings and errors for you to correct, then delete the `.epub` when it is finished.

---

## EPUB resources

**Understanding the EPUB structure.**

A knowledge of the structure and standards for EPUBs is necessary to complete the process of adapting your content to an accessible ePub. Many of the authoring tools that produce EPUBs require further editing after export to make the EPUB fully accessible. Read about the anatomy of an EPUB and learn the internal structure.



![](https://www.edrlab.org/wp-content/uploads/2016/12/edrlab_epub_the-structure-of-an-EPUB-file.png)



**Resourses that made this utility possible:**

- [A variety of EPUB 3 sample documents](https://github.com/IDPF/epub3-samples)
- [Summary of creating a epub](https://www.accessibletextbooksforall.org/stories/creating-accessible-epub)
- [EDR lab’s anatomy of an EPUB](https://www.edrlab.org/epub/anatomy-of-an-epub-3-file/)
- [IDPFs ePub Standard](http://www.idpf.org/epub/301/spec/epub-publications.html) (3.0.1)
- [w3c’s new ePub 3.2 standard](https://www.w3.org/publishing/epub3/epub-contentdocs.html)
- - [EPUB document with pandoc and markdown](https://pandoc.org/MANUAL.html#epubs)