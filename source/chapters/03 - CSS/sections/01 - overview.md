---
title: Overview
tagline: CSS from a chopper
---

CSS, or Cascading Style Sheets, is a language to control **style** and **layout** of HTML content.

~~~

It **wasn't really designed to do much more beyond formatting text**, so regarding the layout part it can feel like a bad fit and has a **bad rep**.

![](resources/images/cssawesome.jpg)

~~~

When we say **CSS**, we are actually talking about **two different languages**. Take a look at this blob:


```CSS
div > p:first-child, .first, h4 {
  margin-left: 2 em;
  text-style: italic;
}
```

~~~

If we "zoom out", it could be transcribed as this:

```CSS
Selector, Selector, Selector {
  Style rule;
  Style rule;
}
```

~~~

Essentially, CSS consists of **selectors** and **style rules**. All elements matching the selectors will get the style rules.

![](resources/diagrams/css-split.svg)

So learning CSS means **learning both** of these!


