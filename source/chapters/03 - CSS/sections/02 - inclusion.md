---
title: Inclusion
tagline: smuggling in the paint
---


There are **3 different ways** in which we can **apply CSS** to our content:

* linking to a **separate `.css` file**
* putting it into a **`style` tag**
* inlining it in the **`style` attribute** of an element

(We can also **mutate styles dynamically** with JavaScript, but that comes later!)

~~~

A separate file means using a **`<link>` element**:

```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="styles/mystyles.css">
    </head>
    <body>
        <!-- lots of HTML content here -->
    </body>
</html>
```

~~~

The **`<style>` element** simply **wraps the CSS code**. It can go anywhere, but customarily in the head:

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
/* Lots of CSS code here */
        </style>
    </head>
    <body>
        <!-- lots of HTML content here -->
    </body>
</html>
```

~~~

**Inlining in the `style` attribute** means we don't need selectors, since the style rules are applied to this particular element.

```html
<p style="font-weight: bold;">It will never happen again.</p>
```

~~~

**Quiz**: Which method do you think is the most common, and why?

~~~

**Answer**: In almost all situations **a separate file is preferred**, since that gives us a good separation of concerns. Style tags arguably gives us that too, so the primary thing is to **be careful with inlining styles**.
