---
layout: page.njk
title: کارها
description: کارها و پروژه‌هایی که انجام دادم رو می‌تونید اینجا ببینید.
---

  <p>
    تعداد کل:
    <strong>{{ works.length }}</strong>
  </p>
  <ul class="gallery">
  {%- for work in works -%}
    <li>
      <img src="{{ work.image }}" alt="{{ work.alt }}" /> 
    </li>
  {%- endfor -%}
  </ul>