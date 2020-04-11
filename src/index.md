---
layout: layout.njk
title: مسترموجی
---

  {%- assign posts = collections.post | reverse -%}
  {% for post in posts limit:1 %}
  <div class="mb-3">
    <h2 class="">
      <a class="text-xl text-blue-500 hover:text-blue-600 mb-2" href="{{ post.url }}">
        آخرین پست:
        {{ post.data.title }}
      </a>
    </h2>
    <p class="">
      {{ post.data.description }}
    </p>
  </div>
  {% endfor %}