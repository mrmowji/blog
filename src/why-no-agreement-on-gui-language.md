---
layout: post.njk
tags: post
title: "چرا یه زبان جامع برای GUI نداریم؟ والا!"
description: "چرا یه زبان جامع و استاندارد برای GUI نداریم؟ چرا هر کسی ساز خودشو میزنه؟ چرا یه زبان نداریم که هم مرورگرها بفهمن، هم سیستم‌عامل، هم من؟ این تنوع واقعا لازمه؟ خودم هنوز به جواب قانع‌کننده‌ای نرسیدم."
date: 2019-10-30
---

بعضی اوقات سوالاتی برام پیش میاد که احتمالا خیلی محبوب نیستن؛ شاید از دید بقیه خیلی بدیهی یا مضحک باشه، شاید کسی حوصله نداره بهشون فکر کنه، چیزی که هست رو قبول کردن و ... ولی من می‌پرسم. تا یه مدت قبل فقط توی ذهن خودم نگه می‌داشتم. جدیدا سعی می‌کنم بعضیاشونو پخش کنم حداقل بار ذهنم کمتر بشه.

این سوال هم محبوب نیست. اصلا نتونستم توی اینترنت، مطلبی در موردش پیدا کنم. توی Reddit پرسیدم و متاسفانه منطقی‌ترین جوابی که گرفتم این بود که **توی دنیای واقعی معمولا نمی‌تونیم یه چیز ایده‌آل و استاندارد رو داشته باشیم**. درست هم می‌گفت؛ مثلا آمریکا به صورت پیش‌فرض از سیستم متریک استفاده نمی‌کنه. ولی برای خودم عجیبه که چرا توی دنیای کامپیوتر، نباید روی امور مشترک، یه چیز ایده‌آل و استاندارد داشته باشیم.

**چرا یه زبان جامع و استاندارد برای GUI نداریم؟ چرا هر کسی ساز خودشو میزنه؟ چرا یه زبان نداریم که هم مرورگرها بفهمن، هم سیستم‌عامل، هم من؟**

این متن، بیشتر، یه سواله. دنبال جوابم.

```html
<!-- HTML -->
<input type="text" style="text-align: left;"
  title="Title" value="TextBox with ToolTip" />

<!-- XAML -->
<TextBox HorizontalAlignment="Left"
  ToolTip="Title">TextBox with ToolTip</TextBox>
```

توی دنیای کامپیوتر و کدنویسی، رابط کاربری گرافیکی (GUI) رو باید با یه کد، مشخص کنیم، مثل خیلی از چیزهای دیگه. GUI زیرمجموعه‌ی رابط کاربری (UI) هست؛ برای مثال، طراحی دستورات متنی یا صوتی، توی UI قرار می‌گیره، ولی جزو GUI نیست.

تا الآن، تجربه‌ی کار با زبان‌های کدنویسی HTML، XAML، و زبان‌های برنامه‌نویسی مثل سی‌شارپ و جاوا، رو داشتم و باهاشون GUI رو تعریف کردم. واقعا حس می‌کنم وجود یه زبان استاندارد، خیلی بهتر از این تنوع ظاهرا غیرضروریه. البته این رو هم اضافه کنم که زبان‌هایی مثل XAML و HTML، خودشون اساسا از یه زبان دیگه به اسم SGML مشتق شدن، و جالب اینجاس که SGML مخفف Standard Generalized Markup Language هست، ولی باز هم ازش استفاده نمیشه (من ندیدم) یا نیومدن همونو ارتقا بدن یا بهش بها بدن، حتی خود HTML هم بعد از HTML5، از اون زبان فاصله گرفته.

## لازمه؟ استاندارد آره، تنوع نه
به نظرم خیلی از توسعه‌دهندگان نرم‌افزار (به معنی عام)، فقط با یه زبان کار نمی‌کنن. مثلا ممکنه امروز روی یه وبسایت کار کنن، و یه ماه بعد روی یه پروژه‌ی اپلیکیشن موبایل.

از طرفی تعداد وبسایت‌ها خیلی بیشتر از تعداد نرم‌افزارهاست. یعنی دنیا داره به این سمت میره. دیگه نیازی نیست چیزی رو نصب کنید. کافیه آدرس رو وارد کنید و از خدمات ارائه‌شده استفاده کنید. هم چیزیه که کاربر می‌خواد، و هم چیزی که توسعه‌دهنده و صاحبان کسب‌وکارها می‌خوان.
یکی از دلایل این قضیه، از دید توسعه‌دهنده، می‌تونه قدرتی باشه که کار با زبان‌های HTML/CSS بهش میده. نمی‌گم زبان‌های خوبین یا نه. منظورم اینه که با یادگیری این دو تا زبان، می‌تونید هم روی وبسایت کار کنید، هم روی اپلیکیشن موبایل و هم روی نرم‌افزارهای دسکتاپ. باز هم می‌گم، اینجا، به این که نتیجه‌ی کار اون توسعه‌دهنده، خوبه یا بد، کاری نداریم (مثلا این که خروجی، یه نرم‌افزار Electron باشه). فقط می‌خوام به خواسته‌های توسعه‌دهنده توجه کنیم.

به نظرم تنوع توی این زمینه، ضروری به نظر نمیاد. چرا؟

چون GUI یه مفهومه که بر اساس المان میره جلو، حداقل تا الآن اینطور بوده. هر چیزی توی GUI رو میشه به صورت یه موجودیت دید که می‌تونه به صورت جدا برای خودش زندگی کنه. مفاهیم شی‌گرایی هم برای همین به وجود اومدن. نتیجه این شد که خیلی وقت پیش تونستیم المان‌ها رو با «نشانه‌گذاری» یا همون Markup مشخص کنیم؛ مثلا بگیم از فلان‌جا تا فلان‌جا میشه المان پاراگراف. اون که اونجاست، آره همون، اون عکسه.

پس کافیه یه زبان جامع داشته باشیم که بتونه المان‌ها رو مشخص کنه. مهم هم نیست اون GUI مربوط به وبسایت باشه یا اپلیکیشن موبایل یا یه نرم‌افزار ویندوز. در بدترین حالت ما یه مجموعه‌ی نه‌چندان کوچیک از المان‌های اولیه داریم که توی همه‌ی محیط‌ها به کار میرن؛ پاراگراف، دکمه، لینک، تصویر، لیست‌باکس، چک‌باکس، ویدئو و ... هر محیط هم اگه خواست می‌تونه اون زبان رو بر اساس نیاز خودش توسعه بده (در حال حاضر هم این کار توی توسعه‌ی وب با تعریف کامپوننت انجام میشه). مثلا اگه ویندوز توی پنجره‌هاش به منو نیاز داره می‌تونه یه المان مخصوص که فقط توی ویندوز تعریف شده‌س به زبان اضافه کنه، ولی باز بهتر اینه که این المان، برای تمام سیستم‌عامل‌ها به صورت استاندارد تعریف بشه. بهش فکر کنید، **چند تا المان داریم که مخصوص یه محیط باشن؟**

چیزی نیست که شاخ و دم داشته باشه. یه زبانه که همه می‌فهمن.

## نظرات
جواب‌هایی که گرفتم رو میذارم که هم دید بهتری نسبت به قضیه داشته باشیم و هم این که ترجیحا نظر تکراری ثبت نشه.
- **«کی حوصله داره این همه نرم‌افزار رو بازنویسی کنه؟».** این رو نمیشه یه دلیل خوب در نظر گرفت. طرف واقفه، ولی حوصله نداره. با این دیدگاه، حتی نباید از فریم‌ورک‌ها استفاده کرد. حتی نباید هیچ‌وقت یه زبان یا پلتفرم جدید رو برای پروژه‌مون انتخاب کنیم. تا ابد باید با چیزی که داریم کار کنیم. این رو هم در نظر بگیرید که معمولا توی پروژه‌های موجود، چند تیم روی نرم‌افزارهای مربوط به محیط‌های مختلف کار می‌کنن، وب، موبایل، دسکتاپ. هر کدوم هم احتمالا به زبان متفاوتی برای کدنویسی GUI نیاز دارن. از طرفی، به نظرم، اهمیت این نوع تغییرات که احتمالا از دید خیلیا مفیده و همین الآن هم بخوان، از اهمیت زمان و هزینه‌ی تغییر کدهای موجود خیلی بیشتره. آینده‌نگریه. اصن شاید نیاز به تغییر زیادی توی کد نباشه. کدهای مربوط به GUI معمولا یه ساختار مشابه دارن و حتی اگه یه زبان استاندارد بخواد به وجود بیاد یا یکی از همین زبان‌های موجود به عنوان زبان استاندارد در نظر گرفته بشه، احتمالا تغییرات عجیب و غریبی توی کدها لازم نباشه. این که ممکنه تغییر زیادی لازم نداشته باشیم، بیشتر، همسو با ضرورتِ رفتن به سمت استاندارده، و نه پذیرش زبان‌هایی که وجود دارن.
- **«ترجمه‌ی کدهای GUI به زبان ماشین خیلی ناکارآمده.»** این جمله وقتی درسته که محیط بخواد به صورت بلادرنگ، کد GUI رو بخونه، بفهمه، و المان‌ها رو رسم کنه. مثلا توی بارگذاری صفحات وب، همین اتفاق میفته. پس تا این جای کار، اگه یه زبان استاندارد (که احتمالا شبیه HTML هست) بیاد بیرون، توی برنامه‌نویسی و بارگذاری صفحات وب، تغییر خاصی رو حس نخواهیم کرد. از اونور، وقتی داریم اپلیکیشن موبایل یا نرم‌افزارهای ویندوز/مک/لینوکس رو توسعه می‌دیم، قبل از اجرا باید کامپایلش کنیم؛ اگه مشکلی هم توی پردازش کد GUI وجود داشته باشه، کاربر نهایی حسش نمی‌کنه. برای مثال توی برنامه‌نویسی ویندوز با استفاده از .NET، بعد از کامپایل، کدهای GUI به زبان میانی (IL) تبدیل می‌شن و در زمان اجرا، اون کد میانی به زبان ماشین تبدیل و اجرا میشه؛ دیگه کد GUI نداریم. کسایی که توی .NET با WinForms کار کردن و بعدش رفتن به سمت WPF، احتمالا با این قضیه آشنا هستن.
- **«اونجوری، همه‌ی GUIها شبیه هم میشن و کاربر خوشش نمیاد.»** این، درست نیست و ربطی به زبان نداره اصن. وجود یه زبان استاندارد برای GUI به این معنی نیست که در صورت استفاده، پنجره‌های ویندوز و پنجره‌های مک یا لینوکس، شبیه به هم میشن. اون به خود سیستم‌عامل مربوطه. حتی اگه سیستم‌عامل‌ها بخوان یه روزی، GUI رو به صورت بلادرنگ بخونن و بارگذاری کنن، می‌تونن از همون زبان استاندارد برای تعریف GUIی خودشون و نرم‌افزارهاشون استفاده کنن، ولی ظاهر پیش‌فرض المان‌ها رو از قبل تعریف کنن، مثل کاری که مرورگرها انجام میدن.
- **«هر زبانی، برای یه هدف خاصی به وجود اومده»** یا **«بعضی چیزها برای موقعیت‌های خاصی مناسبن»** یا **«چکش لازم نیست دیگه، از دسته‌ی پیچ‌گوشتی استفاده می‌کنم!»**. اینا رو هم واقعا زیاد شنیدم. معمولا هم این جمله رو در جواب سوال مشابهی که زبان‌های برنامه‌نویسی (و نه کدنویسی GUI) رو هدف قرار میده، میگن. اینجا هدف خاص چیه؟ اینه که یه GUI رو بر اساس المان‌هاش مشخص کنیم. بالاتر هم گفتم، المان‌های پرکاربرد مشخصن. هر محیطی هم می‌تونه المان‌های جدیدی رو بر اساس نیاز، به زبان استاندارد اضافه کنه. شخصا اگه چکش هم داشته باشم، ابزاری که چندین کار رو با هم انجام بده، دقیقا برای اون کارها به وجود اومده باشه، فقط یه بار باید با طرز کارش آشنا بشم، و هزینه‌ی کمتری داشته باشه رو بیشتر ترجیح میدم. برای همینه که ابزارهایی که کاربردهای مختلفی دارن اختراع میشن. با اون دیدگاه، گوشی دیگه نباید آهنگ پخش کنه، فقط باید باهاش زنگ بزنی. درسته که بعضی از چیزها برای موارد خاصی مناسبن، ولی بعضی از چیزها هم می‌تونن برای تمام موارد حوزه‌ی خودشون مناسب باشن.
- **«نظرات متفاوته»**. آره خوب. ولی همین الآن هم ما داریم بر اساس تصمیمات یه کمیته، صفحات وب رو کد می‌کنیم. اونا تصمیم می‌گیرن چه چیزی به عنوان المان تعریف بشه و چه خصیصه‌هایی براش قابل تعریف باشه. البته بعید می‌دونم که اون کمیته صرفا بر اساس نظرات خودشون تصمیماتی رو اتخاذ کنن. احتمالا نظرات توسعه‌دهنده‌ها هم براشون مهمه. خلاصه این که، به نظر می‌رسه وجود یه کمیته که بخواد یه زبان جامع و استاندارد رو برای تمام GUIها تعریف کنه مشکلی نداشته باشه. بهتره پشت نظرات متفاوت هم دلیل و منطق باشه، و متاسفانه هنوز دلیل قانع‌کننده‌ای برای این که چرا روی این قضیه اتفاق نظر نداریم، پیدا نکردم.

در مجموع، شاید چیزی که من میگم یه تغییر خیلی بزرگ و هزینه‌بر باشه، ولی شدنیه و به نظرم خیلی لذت‌بخشه. شاید فقط برای افراد مینیمالیست اینطور باشه. شاید هم اشتباه میگم. واقعا خوشحال میشم نظر شما رو هم بدونم.