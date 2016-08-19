---
title: Combinators
tagline: Many wanted posters!
---

Let's now look at the other half of selectors, namely how we **combine** descriptions!

![](resources/diagrams/css-selectors-comb.svg)

~~~

There are **four different ways** that descriptions can be combined, which we'll look at one at a time:

![](resources/diagrams/css-combinators.svg)

~~~

The perhaps most common one is the **descendant combinator**. By having **two descriptions with space between**...

```
div p
```

...we match all elements that

* **match the last description**
* have an **ancestor matching the first description**. This can be any number of generations up the tree.

~~~

I think it is **unfortunate that the descendant combinators doesn't have a non-space symbol**, something like this:

```
div _ p
```

Whitespace elsewhere in CSS doesn't have meaning, but here it suddenly does. To help with this, **think of descendant combinators as invisible symbols**!

~~~


```
div > p
```

The **child combinator** is very similar to descendant selector, but here the first selector must match the **parent** and not just any ancestor.

Thus the child combinator is **smaller in scope** than the descendant combinator.

~~~

```
div ~ p
```

The **sibling combinator** is similar to the descendant combinator, but **works horisontally** instead: it matches elements that...

* **match the last description**
* have an **older sibling that matches the first description**

~~~

```
div + p
```

Finally the **adjacent sibling combinator** works in the exact same way, but requires the **neighbouring older sibling to match the first description**.

~~~

The two **sibling combinators are not often used**, but they are **good at what they do**.

Solving that problem with other means would require **brittle workarounds**, something you often see from web developers who don't know about them.


