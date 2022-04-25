---
layout: package.njk
permalink: "OPS/package.opf"
---

<metadata>
<dc:identifier id="pub-identifier">{{identifier}}</dc:identifier>
<dc:title id="pub-title">{{title}}</dc:title>
<dc:language id="pub-language">{{language}}</dc:language>
<dc:date>{{dateCreated | isodate}}</dc:date>
<dc:creator id="pub-creator12">{{ creator }}</dc:creator>
{%- for item in contributor %}
<dc:contributor>{{item}}</dc:contributor>
{%- endfor %}
{%- for item in subject %}
<dc:subject>{{item}}</dc:subject>
{%- endfor %}
<dc:publisher>{{publisher}}</dc:publisher>
<dc:rights>{{rights}}</dc:rights>
<meta property="dcterms:modified">{{dateModified | isodate}}</meta>
<meta property="dcterms:created">{{dateCreated | isodate}}</meta>
{%- for item in accessMode %}
<meta property="schema:accessMode">{{item}}</meta>
{%- endfor %}
{%- for item in accessModeSufficient %}
<meta property="schema:accessModeSufficient">{{item}}</meta>
{%- endfor %}
<meta property="schema:accessibilityHazard">{{accessibilityHazard}}</meta>
{%- for item in accessibilityFeature %}
<meta property="schema:accessibilityFeature">{{item}}</meta>
{%- endfor %}
<meta property="schema:accessibilitySummary">{{accessibilitySummary}}</meta>
<link rel="dcterms:conformsTo" href="{{dcTermsConformsTo}}"/>
</metadata>

<!-- do not delete -->
<manifest />
<spine />
