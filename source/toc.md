---
layout: xml.njk
permalink: "OPS/toc.xhtml"
---

<section class="frontmatter TableOfContents" epub:type="frontmatter toc">
    <header>
        <h1>Contents</h1>
        <h2>{{title}}</h2>
    </header>
    <nav xmlns:epub="http://www.idpf.org/2007/ops" epub:type="toc" id="toc">
        <ol>
            <li class="toc-BookTitlePage-rw" id="cover">
                <a href="cover.xhtml">Cover Page</a>
            </li>
            <li class="toc-BookTitlePage-rw" id="id-titlepage">
                <a href="titlepage.xhtml">Title Page</a>
            </li>
            {% for page in collections.chapter -%}
            <li class="toc-Chapter-rw" id="id-{{ page.fileSlug }}">
                <a href="chapters/{{ page.fileSlug }}.xhtml">
                {{ page.data.title }} {{ page.data.subtitle }}
                </a>
            </li>
            {%- endfor %}
        </ol>
    </nav>
</section>
