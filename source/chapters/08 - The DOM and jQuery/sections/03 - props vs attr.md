---
title: Attributes VS properties
tagline: You say potato
---

Two important words: HTML elements have **attributes** but DOM nodes have **properties**.

Usually, but not always, the **former initializes the latter**:

![](resources/diagrams/attrprop.svg)

~~~

To showcase the difference, let's play with the **search field on [http://github.com](http://github.com)**:

![](resources/images/githubsearch.png)

~~~

If we **snoop on the source code**, we can see that the `placeholder` attribute is set to the text we saw in the image:

```html
 <input type="text"
        class="form-control header-search-input js-site-search-focus "
        data-hotkey="s"
        name="q"
        placeholder="Search GitHub"
        aria-label="Search GitHub"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
```

~~~

The search field is the **second `input` element in the page**, so we can **get a reference to the node** like this:

```javascript
var field = document.getElementsByTagName("input")[1];
```

~~~

Using that reference we can confirm the value of the **`placeholder` attribute**:

```javascript
field.getAttribute("placeholder") // "Search GitHub";
```

We can also see that a **`placeholder` property** was initialized to the same value:

```javascript
field.placeholder // "Search GitHub";
```

~~~

Now for the fun part - if we **change the property to something else**...

```javascript
field.placeholder = "shout into the void";
```

...we will **immediately see the browser update**:

![](resources/images/githubsearchmanip.png)

~~~

But! If we **query the `placeholder` attribute again**, we'll see that it hasn't changed!

```javascript
field.getAttribute("placeholder") // "Search GitHub";
```

~~~

To wit:

* **HTML elements have attributes**, and **DOM nodes have properties**.
* **Attributes often initialize properties** (but not always)
* **Attributes never change**, but **properties can change**.