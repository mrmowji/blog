---
layout: post.njk
tags: post
title: "از مزایای Colocation در برنامه‌نویسی"
description: "Colocation چیست؟ چه کرد؟ چرا خوب است؟ و چرا صابون دستشویی رو نمی‌ذاریم توی ‌اشپزخونه؟"
date: 2021-01-07
---

چند وقت پیش امیراشکان یه مقاله درباره‌ی React رو واسم فرستاد. مفید بود. در اون بین چند تا لینک وجود داشت به سایر مقالات اون نویسنده. یکی از مقالاتش در مورد Colocation بود. احتمالا خیلی خیلی باهاش آشنا باشید بدون این که این اسم رو شنیده باشید. حتی توی فرهنگ لغات انگلیسی هم چیز زیادی در موردش پیدا نمیشه.

سرویس ترجمه‌ی گوگل، Colocation رو «همسایگی» ترجمه می‌کنه. بقیه‌ی سرویس‌ها مثل
<a href="https://www.thefreedictionary.com/Colocation" target="_blank">The Free Dictionary</a>
فقط عبارت مرتبط با محاسبات ابری رو شامل میشن. بهتره فعل Colocate رو بررسی کنیم. سرویس گوگل، این فعل رو به شکل اسم می‌بینه و «همبستگی» ترجمه می‌کنه. حتی Chocolate رو پیشنهاد میده. The Free Dictionary برای این فعل میگه «قرار دادن دو یا چند چیز در یک جا».

این مفهوم خیلی کلیه. ولی وقتی وارد یه متن خاص میشیم برامون واضح‌تر میشه. برای مثال در زندگی، ما صابون دستشویی رو می‌ذاریم توی دستشویی، نه توی آشپزخونه، چون ارتباط بینشون و راحتی خودمون رو در نظر می‌گیریم (یعنی مثال دیگه‌ای به ذهنم نرسید).

و اما چرا توی برنامه‌نویسی، این مفهوم مهمه؟ نتیجه‌ی اعمال Colocation توی پروژه‌ها، برمی‌گرده به نگهداری (راحت‌تر) کد.

معمولا هممون ترجیح میدیم پروژه‌ها و کدهامون جوری باشه که نگهداری ازش مثل آب خوردن باشه. اون اوایلی که پروژه رو شروع کردیم معمولا همینظوره، ولی وقتی فایل‌ها (اسکریپ‌ها، استایل‌ها، تصاویر، و ...) زیاد میشن و افراد تیم هم بیشتر میشن ممکنه این قضیه از دستمون در بره.

وقتی پروژه بزرگتر میشه، ممکنه بخش زیادی از کدتون به «دانش قبلیه‌ای» (Tribal Knowledge؛ دانشی که به صورت مکتوب وجود نداره و فقط عده‌ی کمی از افراد یه تیم ازش اطلاع دارن) تبدیل میشه، و همین قضیه باعث به وجود اومدن «بدهی فنی» (Technical Debt) میشه.

بهتره کدهامون نه تنها برای خودمون (کسایی که نوشتنشون)، بلکه برای هم‌تیمی‌هامون، کدنویس‌های آینده، و حتی خودمون در چند ماه بعد هم قابل مدیریت باشه. یعید می‌دونم کسی با این اصل مشکلی داشته باشه. راه‌ها و ابزارهای زیادی برای رسیدن به این سطح وجود داره و Colocation یکی از این موارده.

## نظرات (یا همون Comments)

مستند کردن کدها شاید یکی از مهم‌ترین کارهایی باشه که باید به شکل درستی انجام بشه. البته اگه کدتون ناطق باشه :دی شاید به مستند کردن و توضیح دادنش نیازی نداشته باشید.

کامنت‌ها (در جاهایی که ضروری به نظر می‌رسن) یکی از راه‌هایی هستن که باعث میشن کدتون بهتر خونده بشه. مسلما همه‌جا به کامنت احتیاجی ندارید. ولی اون جاهایی که لازم دارید باید بدونید چطور کامنت بذارید. مثلا وقتی از دستورات عجیب‌وغریبی برای رسیدن به یه منطق خاص استفاده کردید بهتره کامنت بذارید تا خودتون یا شخص بعدی که داره کد رو می‌خونه درگیر بررسی جزئی کد نشه و راحت‌تر اونو بفهمه.

اما کامنت‌ها رو کجا باید قرار بدیم؟ معمولا توصیه میشه کامنت‌ها رو «در همسایگی» کدی قرار داشته باشن که دارن توضیحش میدن؛ بهتره تا جایی که میشه این فاصله‌ی همسایگی رو کم کنید. مثلا کامنت مربوط به یه تابع رو بچسبونید به خط اول تابع. خیلی بدیهیه فک کنم.

حالا فرض کنید قرار بود این توضیحات مربوط به کدها رو داخل یه فایل کاملا جدا (مثل documentation.md) قرار بدیم. یا اصلا یه پوشه‌ی مخصوص برای تمام توضیحات کدهامون داشته باشیم، مثل `docs/`، که ساختارش شبیه ساختار کدمون توی پوشه‌ی `src/` باشه. فک نکنم برای شما هم خوشایند باشه. با این روش چه مشکلاتی خواهیم داشت؟

- **نگهداری.** نظراتی که خواهیم داشت، خیلی سریع‌تر از حالت معمول قدیمی میشه. اینکه بخوایم هر وقت کد رو تغییر دادیم، نظراتش رو هم به‌روز کنیم، کار سختیه و احتمالا فراموش میشه. حالا فرض کنید کلا یه فایل کد رو پاک کردید و توضیحات مربوط بهش هنوز توی فایل نظرات هست.
- **کاربردپذیری.** ممکنه وقتی داریم یه کد رو اصلاح می‌کنیم، توضیحات مربوط بهش رو که می‌تونن مهم هم باشن از دست بدیم.
- **راحتی در استفاده.** اینکه هی بخوایم از یه پوشه/فایل بریم یه پوشه/فایل دیگه کلا امر پسندیده‌ای نیست. توی حالتی که بخوایم همه‌ی توضیحات کل کد رو توی یه فایل قرار بدیم که اوضاع خیلی بدتره. فرض کنید می‌خواید یه کامپوننت رو توسعه بدید. کامپوننت معمولا این صفت رو با خودش داره که تمام المان‌های وابسته به خودش رو توی دل خودش داره. توضیحات هم بخشی از کامپوننت حساب میشن.

احتمالا بتونیم واسه این نحوه‌ی ثبت توضیحات، روی یه سری از قوانین به توافق برسیم. ولی واقعا چرا؟ وقتی می‌تونیم خیلی راحت توضیحات/نظرات رو «در همسایگی» کد مرتبطشون قرار بدیم، چرا؟

تا اینجا خیلی خیلی بدیهی بود احتمالا. بعید می‌دونم کسی/تیمی اینجوری ساختار پروژه‌شو چیده باشه. هدف از بیان این چیزا این بود که بگم مزایای Colocation شاید در جاهای دیگه‌ای از پروژتون هم دیده بشن.

HTML/View
Take HTML for example. All the benefits of co-locating our comments translate over to our templates as well. Before modern frameworks like React, you'd have your view logic and your view templates in totally separate directories. This falls prey to the same problems described above. These days it's far more common to put these things in the exact same file with React and Vue for example. With Angular if it's not in the same file, the template file is at least right next to the JS file with which it is associated.

CSS
Another concept this applies well to is CSS. I'm not going to argue with you about the merits of CSS-in-JS (it's fantastic), but the benefits are out of this world. Learn more here. https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660

Tests
This concept of file co-location applies great to unit tests as well. How common is it to find a project with a src/ directory and a test/ directory filled with unit tests that attempts to mirror the src/ directory? All the pitfalls described above apply here as well. I probably wouldn't go as far as putting the unit tests in the exact same file, but I don't totally rule that out as an interesting idea either (the implementation is left as an exercise to the reader).

To help enable a more maintainable codebase, we should co-locate our tests files with the file or group of files they are testing. This ensures that when new people (or myself in 6 months) come to the code, they can see immediately that the module is tested and use those tests as a reference to learn about the module. When they make changes, it reminds them to update (add/remove/modify) the tests to account for their changes.

State
Application/Component state experiences the same benefits. The more disconnected/indirect your state is from the UI that's using it, the harder it is to maintain. Localizing state has even more benefits than maintainability, it also improves the performance of your application. A state change in one corner of your application component tree will re-render a lot fewer components than a state change at the top of the tree. Localize your state.

"Reusable" utility files
This applies to "utility" files and functions as well. Imagine you're writing a component and see a nice bit of code that could be extracted into its own function. You extract it and think: "Huh... I'll bet a lot of people could use this." So you pull it out and put it into your app's utils/ directory and move on with your life.

Later, your component is deleted, but the utility you wrote is out of sight, out of mind and it remains (along with its tests) because the person who deleted it assumed it was more widely used. Over the years, engineers work hard to make sure that the function and its tests continue to run and function properly without even realizing that it's no longer needed at all. Wasted effort and cognitive load.

If instead you had just left that function directly in the file that used it, the story would be completely different. I'm not saying don't bother unit testing complex utility functions (please do), but keeping them closer to where they're needed helps you avoid problems.

And for heaven's sake, please DELETE THIS ESLINT RULE https://github.com/yannickcr/eslint-plugin-react/blob/e6b4c33a1db4cc94c3e9223b09fb92b1dbddc00d/docs/rules/no-multi-comp.md and all rules like it.

The principle
The concept of co-location can be boiled down to this fundamental principle:

Place code as close to where it's relevant as possible

You might also say: "Things that change together should be located as close as reasonable." (Dan Abramov said something like this to me once).

Open Source made easy(-er)
Aside from avoiding the problems discussed earlier, there are other benefits to structuring your projects this way. Taking a component and turning it into an open source project is often as simple as copy/pasting the folder to another project and publishing that to npm. Then you just install it in your project and update your require/import statements and you're good to go.

Exceptions
Sure there's a good argument for documentation that spans the whole or part of a system and how things integrate together. And where would you put integration or end-to-end tests that span across components? You might think those are exceptions, but they can actually subscribe nicely to the principle mentioned above

If I have a part of my app associated with user authentication and I want to document that flow, I can put a README.md file in the folder that has all of the modules associated with user authentication. If I need to write integration tests for that flow, I could place the file for those tests in that same folder.

For end-to-end tests, those generally make more sense to go at the root of the project. They span beyond the project itself and into other parts of the system, so it makes sense to me for those to be in a separate directory. They don't really map to the src/ files. In fact, E2E tests don't really care how the src/ is organized at all. Refactoring and moving around files in the src/ directory should not necessitate changing the E2E tests at all.

Conclusion
Our goal here is to build software that is as simple to maintain as possible. The same benefits of maintainability, applicability, and ease of use we get from co-locating our comments we get by co-location of other things as well. If you've never tried it out, I recommend you give it a shot.

P.S. If you're concerned about violating "separation of concerns" I recommend you check out this talk https://youtu.be/x7cQ3mrcKaY by Pete Hunt and re-evaluate what that means 😀.

P.P.S. I should also note that this applies great to images and really any other resource as well. And when you use a tool like webpack, co-locating those resources is crazy easy too. Honestly, this is one of the core value propositions of webpack IMO.
