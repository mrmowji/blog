---
layout: layout.njk
title: مسترموجی
---

  <p>
  من مجتبی‌م. مجتبی جوان. برنامه‌نویس و طراح گرافیک. مینیمالیستم.
  اگه می‌خواید بیشتر منو بشناسید،
  <a href="/about">
        درباره
      </a>
      رو بخونید.
      اگه تمایل به همکاری داشتید، لطفا
      <a href="/cv">
        رزومه
      </a>
      رو بررسی کنید.
      ایمیلم اینه: <span onclick="copyToClipboard('javan.mojtaba@gmail.com')">javan.mojtaba@gmail.com</a>.
      توی
      <a href="https://instagram.com/mrmowji" target="_blank" rel="nofollow">Instagram</a>،
      <a href="https://t.me/mrmowji" target="_blank" rel="nofollow">Telegram</a>،
      <a href="https://linkedin.com/in/mrmowji" target="_blank" rel="nofollow">Linkedin</a>،
      <a href="https://github.com/mrmowji" target="_blank" rel="nofollow">GitHub</a>،
      <a href="https://dribbble.com/mrmowji" target="_blank" rel="nofollow">Dribbble</a> و
      <a href="https://behance.net/mrmowji" target="_blank" rel="nofollow">Behance</a>
      هم هستم.
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