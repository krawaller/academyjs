---
title: HTML content
tagline: let's talk body parts
---

As we said before the `<body>` element contains the actual **contents** of the document, that the browser will show on screen.

So, what does that look like?

~~~

Basically, the browser will display the **leaf text nodes**.

So let's say we feed it this **nonsense**:

```
<!doctype html>
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

```
<!doctype html>
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

On the subject of generic elements - there are also some **generic attributes** that we can set on all elements.

For example the **`lang` attribute**...

```
<div lang="en">...</div>
```

...allows the browser to provide checking and dictionary lookup for the correct language.

~~~

MDN has a **full list of generic attributes** here:

[https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

We'll meet a few of them later.