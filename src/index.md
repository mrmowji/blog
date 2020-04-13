---
layout: layout.njk
title: مسترموجی
---

  {%- assign posts = collections.post | reverse -%}
  {% for post in posts limit:1 %}
  <div class="last-post">
    <h2>
      <a class="last-post-title" href="{{ post.url }}">
        آخرین پست:
        {{ post.data.title }}
      </a>
    </h2>
    <p>
      {{ post.data.description }}
    </p>
  </div>
  {% endfor %}