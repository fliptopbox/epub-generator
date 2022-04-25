---
layout: xml.njk
permalink: "OPS/titlepage.xhtml"
cssPath: css/titlepage.css
---

<div class="frontmatter titlepage" epub:type="frontmatter titlepage">

# {{title}}

## by {{creator}}

### published on {{dateCreated}} by {{publisher}}

{{summary}}

### contributors

{% for item in contributor %}

- {{item}}
  {% endfor %}

**{{rights}}**

</div>
