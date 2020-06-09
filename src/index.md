---
layout: layout.njk
title: مسترموجی
---

  <p>
    من مجتبی‌م. مجتبی جوان. برنامه‌نویس و طراح گرافیک. مینیمالیستم.
    <br>
    <span style="text-align: center;">
      <a href="/about">درباره</a> / 
      <a href="/cv">رزومه</a> / 
      <a class="js-copy" data-value="javan.mojtaba@gmail.com">ایمیل</a> / 
      <a href="https://instagram.com/mrmowji" target="_blank" rel="nofollow">Instagram</a> / 
      <a href="https://t.me/mrmowji" target="_blank" rel="nofollow">Telegram</a> / 
      <a href="https://linkedin.com/in/mrmowji" target="_blank" rel="nofollow">Linkedin</a> / 
      <a href="https://github.com/mrmowji" target="_blank" rel="nofollow">GitHub</a> / 
      <a href="https://dribbble.com/mrmowji" target="_blank" rel="nofollow">Dribbble</a> / 
      <a href="https://behance.net/mrmowji" target="_blank" rel="nofollow">Behance</a>
    </span>
  </p>


  <h2>نوشته‌ها</h2>
  <p>
    تا این لحظه،
    <strong>{{ collections.post.length }}</strong>
    مطلب نوشته شده.
    مطالب بر اساس زمان و به صورت نزولی مرتب شدن (جدیدترین پست‌ها بالاترن).
  </p>
  <ul class="list-none compact">
  {%- for post in collections.post -%}
    <li>
      <span>
        <time datetime="{{ post.data.date }}">{{ post.data.date | date: '%Y/%m/%d' }}</time>
      </span>
      <a href="{{ post.url }}">{{ post.data.title }}</a>  
    </li>
  {%- endfor -%}
  </ul>