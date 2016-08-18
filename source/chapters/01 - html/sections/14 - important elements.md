---
title: Two special elements
tagline: Tweedle-dum, tweedle-dee
---

In this section we'll take a quick look at **two important elements**. First out is the **`<img>`** element, which lets us insert images into our documents:

```html
<img src="resources/images/6074.png" title="sooo pretty">
```

<img src="resources/images/6074.png" title="sooo pretty">

~~~

We control the image mainly through two attributes:

* `src` which is an **address to the image file**. It can be either
  * **relative**, pointing to a resource on the same server, or
  * **absolute**, pointing anywhere
* `title`, which will be displayed as a tooltip in most browsers

~~~

Note that as **an image will never have a child**, just like the meta element, we **don't need to close it**.

~~~

When you need all **details about a specific element** such as the `img` element, MDN again has you covered:

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)

~~~

**Quiz**: Now for the second important element, which is arguably the **most important of all**. Can you think of which it is?

~~~

**Answer**: The *anchor*, or `<a>` element as we know it! Without that, there would be no inter**net**.

~~~

The anchor has a **`href` attribute** which control what page it leads to. 

```html
<a href="http://bit.ly/hespeaksthetruth">the truth</a>
```

Just like image sources it can be **relative or absolute**.

~~~

Here is MDN:s full spec for the anchor element:

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)


~~~

**Quiz**: The image tooltip is controlled by a title attribute, but for the link text we used the element children. Why didn't they go for something like this...

```html
<a href="https://www.boardgamegeek.com/" title="best site ever">
```

...instead of the current syntax which requires a closing tag?

```html
<a href="https://www.boardgamegeek.com/">best site ever</a>
```

~~~

**Answer**: We might want to make images or big chunks of text or html into a link, but inside an attribute we can only enter text!

But be careful looking for meaning in syntax details; most of it has just kind of happened. 

~~~

A final short note; before the anchor, all elements we saw just meant

* **semantic meaning** and some
* **default styling**, most importantly whether they are
* **block or inline**.

But the anchor is the first example of an element that has **behaviour**.

~~~

There are others, but they work mostly in conjunction with JavaScript, so we leave them be for now.
