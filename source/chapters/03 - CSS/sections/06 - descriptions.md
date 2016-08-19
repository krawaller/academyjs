---
title: Element descriptions
tagline: The wanted poster
---

The most important part of a CSS selector is to **describe elements** that should be selected.

![](resources/diagrams/css-selectors-desc.svg)

~~~

There are **five different aspects** that we can describe, each with its own syntax:

![](resources/diagrams/css-descriptions.svg)

~~~

These **can be combined** however you see fit. Here is an (exaggerated) example using all of them:

```
button[disabled]#deletemsg.big:first-child
```

~~~

This would match all 

* nodes of **type** buttons
* that has a disabled **attribute**
* and **id** is `deletemsg`
* and **class** attribute contains 'big'
* and it is the **first child** of its parent

~~~

As per usual the **details can be found on MDN**:

[https://developer.mozilla.org/en-US/docs/Glossary/CSS_Selector](https://developer.mozilla.org/en-US/docs/Glossary/CSS_Selector)

However, we will now make a few observations for each of the five aspects.

~~~

Some notes on the **type** description:

```
div
```

* There's no special syntax, just **write out the type**.
* They are **optional**, we can make a description with just other aspects.
* An **asterisk `*` is a wildcard** (sometimes called "universal selector"), but rarely useful.

~~~

The **id** description...

```
#app-wrapper
```

* refers to the **generic attribute** we saw in the HTML chapter
* is **prefixed with a `#`**
* will (or should) only ever **match 1** (or 0) elements.

~~~

The **class** description...

```
.container
```

* again refers to a **generic attribute**
* is **prefixed with a `.`**
* can have **multiple classes**: `.container.highlight`

~~~

The **attributes** description...

```
[disabled]   [foo="bar"]   [href^="http"]
```

* is probably the **most complex** description aspect
* matches elements depending on **attributes and their values**
* is **surrounded by brackets**
* can test simply for **attribute existence** by just mentioning the attribute
* can test **attribute value** by using `=` and the wanted value
* can match **value beginning** by using `^=`

~~~

**Quiz**: Ok, so `^=` allows us to match against the **beginning of an attribute value**. But what would be the point of that last example we saw?

```
[href^="http"]
```

~~~

**Answer**: If all local links are relative, which is normally the case, then this would be an excellent way to **catch all external links**, to make them look or behave differently.

~~~

Finally some notes on the pseudo-classes:

```
:first-child    :nth-child(2)    :active
```

* They are **prefixed with `:`**
* They allow matching on **position or state**
* Some take **arguments** which are **given within parenthesis**
* The **`:not()` class takes a full CSS selector**
* They are obscure but **really powerful**, so worth getting to know!



