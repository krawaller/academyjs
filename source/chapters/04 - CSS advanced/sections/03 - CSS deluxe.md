---
title: CSS Deluxe
tagline: bells and whistles
---

Although CSS has grown more powerful, there is still **a lot to be desired**.

* **variables**
* **computations**
* **mixins**
* **nested declarations**

~~~

This has driven many to try to **add a layer on top of CSS**. The two most popular solutions are **SASS and LESS**.

<div class="equality">
  ![js](resources/images/sass.svg)
  <span></span>
  ![heart](resources/images/less.png)
</div>


Read more at [http://sass-lang.com/](http://sass-lang.com/) and [http://lesscss.org/](http://lesscss.org/).

~~~

The idea is that we write in a language that **compiles down to regular CSS**.

![](resources/diagrams/css-compile.svg)

~~~

The LESS homepage shows **this LESS code**:

```less
@base: #f938ab;

.box-shadow(@style, @c) when (iscolor(@c)) {
  -webkit-box-shadow: @style @c;
  box-shadow:         @style @c;
}
.box-shadow(@style, @alpha: 50%) when (isnumber(@alpha)) {
  .box-shadow(@style, rgba(0, 0, 0, @alpha));
}
.box {
  color: saturate(@base, 5%);
  border-color: lighten(@base, 30%);
  div { .box-shadow(0 0 5px, 30%) }
}
```

~~~

...which **compiles to this CSS**:

```css
.box {
  color: #fe33ac;
  border-color: #fdcdea;
}
.box div {
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
```

~~~

Of course, using something like this means that we require a **build step**!

But as you will find, this is something that is **regularly used** in the web world, even though HTML, CSS and JS are all interpreted.

~~~

Why? **Many reasons**, three of which are:

* use **preprocess languages** for CSS or JS
* write in the **latest tech**, dumb it down for the browser
* **minification** (strip whitespace and comments)

