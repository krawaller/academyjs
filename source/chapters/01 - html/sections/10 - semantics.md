---
title: Semantics
tagline: say what you mean
---

You just met `<div>` and `<span>` which are generic elements. But, most elements you use will be **semantic**.

And this is important - the primary purpose of HTML is to **explain to the browser what the content is**, so that the browser can make informed decisions on how to display it.

~~~

Here are some **common elements** useful for **marking up text**:

* A **`<p>`** element represents a **paragraph** of text. It will be displayed as a block with a bottom margin.
* The **`<h1> - <h6>`** elements are **headlines**. 1 is the most important. They are blocks, with a bottom margin and a bigger and bolder look the lower the number.

~~~

Some more;

* A **`<strong>`** element is used for an inline section of text that you want to **highlight**. Typically displayed in bold.
* Similarly there is an **`<em>`** element for **emphasis**, typically displayed in italics.

~~~

So feeding the browser this:

```
<!DOCTYPE html>
<html>
    <head></head>
    <body>
       <h2>Monday 24/3</h2>
       <p>Ashley was so <strong>annoying</strong> today, OMG!!</p>
       <p>When I badmouth someone, I do it to their <em>FACE</em>!
    </body>
</html>
```

~~~

...we get this:

![](resources/images/textstyle.png)

~~~

There are **rules on where in the structure an element can appear**, which all depend on their semantic meaning. 

For example, it makes no sense to nest a paragraph inside another paragraph, so that is forbidden.

~~~

In earlier HTML, many elements dealt with **appearance**. For example;

* there was a `<bold>` element
* and an `<i>` element (short for italics).

~~~

Now they are **deprecated in favour of semantic versions**:

![](resources/diagrams/evolve.svg)

This is typical for HTML as a whole.

~~~

So, what **other elements** we can use? 

Too many to mention, but check the full reference at MDN:

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

~~~

The fact that HTML content is semantic is also the reason why we haven't mentioned **layout** or **style** yet.

Those things should **only live in CSS-land**. HTML is content, CSS is style and layout, and never the two shall meet, lest sadness and pandemonium ensues.

