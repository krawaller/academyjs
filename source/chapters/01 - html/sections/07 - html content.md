---
title: HTML content
tagline: let's talk body parts
---

As we said before the `<body>` element contains the actual **contents** of the document, that the browser will show on screen.

So, what does that look like?

~~~

Basically, the browser will display the **leaf text nodes**.

So let's say we feed it this **nonsense**:

```html
<!DOCTYPE html>
<html>
    <head></head>
    <body>
       <foo>BAR BAZ! <bin gnu="wee">boo</bin></foo>
       <laj boo="foo">gnork.</laj>
       Amen.
    </body>
</html>
```

~~~

...then the browser would display this:

![](resources/images/nonsense.png)

~~~

This means we can deduce that...

* the **element types and attributes are simply ignored**,
* as are the **linebreaks**.
* Sequences of **spaces are collapsed** into a single space.

~~~

But of course, there are **elements with special meaning** to the browser. These fall into **two categories**:

* **Block level** elements that take up the full width of the document.
* **Inline** elements that flow with the text. This is the default, as we saw with our nonsense elements.

~~~

The perhaps **most common elements** are...

* the **`<div>`**, short for divider, which is a generic block level element.
* the **`<span>`**, which is a generic inline element.

~~~

**Quiz**: Knowing what you just learned, what would this look like?

```html
<!DOCTYPE html>
<html>
    <head></head>
    <body>
       <div>Thorin Fili <span Kili="Balin">Dwalin</span></div>
       <div Oin="Gloin">Dori <div>Nori</div> Ori</div>
       Bifur
       <span>Bombur</span>
    </body>
</html>
```

~~~

**Answer**: Well, like this of course!

![](resources/images/dwarves.png)

~~~

On the subject of generic elements - there are also some **generic attributes** that we can set on all elements. MDN has a full list here:

[https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

We'll take a look at a few of them now:

~~~

The **`id` attribute** allows us to give a unique name to an element that for some reason is special:

```html
<div id="app-wrapper">...</div>
```

The id allows us to **easily target the element** from CSS or JavaScript.

~~~

The **`class` attribute** is a bit special: in that string of text you can list a number of "classes" separated by spaces. Many elements can share the same class(es), allowing us to **group elements together** in themed categories.

```html
<div class="wrapper article">...</div>
```

These **groups can then be targeted** in CSS or JavaScript.

~~~

And just to show an example that doesn't have to do with targeting - the **`lang` attribute**...

```
<div lang="en">...</div>
```

...allows the browser to **provide spell checking and dictionary lookup** for the correct language.

~~~

Finally - if for whatever reason you want to insert a **comment** into HTML, or temporarily exclude some elements from the flow, just wrap it within `<!--` and `-->`:

```html
<div>a paragraph of text</div>
<!-- <div>a paragraph which has been commented out</div>
<div>this paragraph too is outcommented</div>-->
<div>but this one is still visible!</div>
```

~~~

Beware that these **comments still shows up in the source code**, so no cursing!

![](resources/images/comments.png)
