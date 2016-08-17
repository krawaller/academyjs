---
title: HTML basics
tagline: finally getting to the point
---

Now, finally - **HTML**! HyperText Markup Language is a **flavour of XML** for **encoding documents meant to be consumed on the web**.

Much like Photoshop expects a `.psd` file, your favourite **web browser wants `.html`**.

~~~

An **HTML document** has the following structure:

![](resources/diagrams/htmldoc.svg)

~~~

Translated to **actual HTML**, that becomes the following:

```
<html>
  <head>...</head>
  <body>...</body>
</html>
```

~~~

By adding an optional leading `<!DOCTYPE html>` thingie, we tell the browser that this is a modern **HTML5** document.

```
<!DOCTYPE html>
<html>
  <head>...</head>
  <body>...</body>
</html>
```

We won't go into (too) much detail, but suffice to say that **you should always include it**.

~~~

So, **what metadata** goes into the `<head>` tag?

A heck of a lot of stuff, but we'll now cover **two common examples**.

~~~

First off, we set the **document title** as a text node in a `<title>` tag:

```
<title>My AWESOME site</title>
```

The browser will then bubble that title up in different ways when your page is displayed.

~~~

We can also set the **character set** as a `charset` attribute on a `<meta>` tag:

```
<meta charset="utf8">
```

This (hopefully) prepares the browser to show **Unicode characters**. Without this, for example Swedish characters like `å`, `ä` and `ö` might be displayed wrongly.

~~~

**Question**: Did you notice something weird on the previous slide?

~~~

**Answer**: The `<meta>` element wasn't closed!

```
<meta charset="utf8">
```

While XML is very strict, HTML takes a looser approach; **elements which never have children do not have to be closed**.

~~~

There was a **stricter flavour called XHTML** which enforced well-formed XML, but that never took off.

~~~


