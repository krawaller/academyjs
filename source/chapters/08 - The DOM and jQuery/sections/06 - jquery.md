---
title: jQuery
tagline: What is the fuss about?
---

As life on Earth is based on carbon, so is the **internet based on jQuery**.

![](resources/images/jquery.png)

~~~

The library functionality is **exposed through a global `jQuery` object** created when we run the code. It **also has `$` alias** if you want to be more succinct.

```
jQuery === $ // true
```

~~~

jQuery achieved its popularity through **four good ideas**:

![](resources/diagrams/jquery.svg)

We'll now talk through them one by one!

~~~

First off, **using CSS selectors to match elements**.

```
var firstParagraph = $("p:first-child");
```

The success of this idea was what **caused `querySelector(All)` to be added to regular CSS**.

~~~

Second, the **façade** - jQuery made **better methods to interact with the DOM**, and ensures that they **work the same in all browsers**:

```
firstParagraph.addClass("fadeanim");
```

~~~

The **jQuery façade has less value now** since

* **browsers are much more standards compliant**
* **the DOM has been much improved**

But it is **still pretty nice**!

~~~

Third, **implicit looping** - if a jQuery selection catches multiple elements, we can still **act on all elements** with a single method call:

```
var buttons = $("button");
buttons.setAttribute("disabled");
```

~~~

Some methods **make no sense to use on many elements** at once - they will **operate on the first element** in the selection.

~~~

Finally, **chaining**. All jQuery methods **return the selection we were working on** which means that instead of this:

```
var buttons = $("button");
buttons.setAttribute("disabled");
```

We can do this:

```
$("button").setAttribute("disabled");
```

~~~

Although **the need for jQuery has diminished**, it is still very popular.

And as its API is rather easy, using jQuery can be a better way to learn the DOM than the DOM itself!

~~~

So: definitely **learn jQuery**, but make sure to **also understand what is actually going on**. 

Practice from time to time to **do it without jQuery**.