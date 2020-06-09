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
      رو بررسی کنید. اگه به هر دلیلی خواستید با من ارتباط برقرار کنید
      می‌تونید از
      <a href="/contact">
        لینک‌های تماس
      </a>
      استفاده کنید.
      من اینجا می‌نویسم.
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