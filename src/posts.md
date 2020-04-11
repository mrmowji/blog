---
layout: page.njk
title: تمام پست‌ها
description: لیست تمام مطالبی رو که توی این وبلاگ منتشر شده اینجا ببینید.
---

  <p>
    اینجا تمام پست‌ها رو می‌تونید ببینید. تا این لحظه،
    <strong>{{ collections.post.length }}</strong>
    مطلب نوشته شده.
    مطالب بر اساس زمان و به صورت نزولی مرتب شدن (جدیدترین پست‌ها بالاترن).
    با سال انتشار تفکیک شدن و روز و ماه هم مشخصه.
  </p>
  <ul class="list-none">
  {%- for post in collections.post -%}
    <li>
      <span>
        <time datetime="{{ post.data.date }}">{{ post.data.date | date: '%Y/%m/%d' }}</time>
      </span>
      <a href="{{ post.url }}">{{ post.data.title }}</a>  
    </li>
  {%- endfor -%}
  </ul>