---
title: Inclusion
tagline: plugging it in
---

There are **three ways to include JS in a web app**

* script element containing code
* script element referencing a file
* inline event handler in an element attribute

~~~

A **script element with code** might look like this:

```html
<script type="text/javascript">
    /* ...javascript code here... */
</script>
```

~~~

While a **script element referencing a separate file** might look like this:

```html
<script type="text/javascript" src="/js/mycode.js"></script>
```

Note that you **should not self-close the script element**, as that might cause weird behaviour!

~~~

An **inline event handler** looks like this:

```html
<button onclick="alert('You clicked, OMG!');">Don't click me</button>
```

As you might have guessed, **inline handlers are a bad idea**.

~~~

**Question**: Wasn't all of this **extremely similar** to how **CSS inclusion** works?

~~~

**Answer**: Yes! :)

~~~

Btw - remember that we now just talked about **including JS in a web app**, that is, a HTML + CSS + JS app that runs in the browser.

But **JS can run in other places too** - in Node, servers, IoT - anywhere!

