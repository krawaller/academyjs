---
title: Good behaviour
tagline: Our code of conduct
---

We've touched upon most of these points already, but let's **gather up the stone tablets of CSS behaviour rules**!

~~~

> Thou shalt not use visual elements

* `<br>` for a linebreak
* `<hr>` for a horisontal ruler

These are **FORBIDDEN**!

~~~

> Thou shalt not use visual attributes

* `<div bgcolor="red">`
* `<div height="300">`

These are **VERBOTEN**!

~~~

> Thou shalt keep the `html` as clean as possible

Instead of doing this...

```html
<p class="firstParagraph">Little red riding hood...</p>
<p>Then came the big bad wolf...</p>
```

...and this...

```css
.firstParagraph {
  background-color: #CCC;
}
```

~~~

...you should **skip the class** and just do this:

```css
p:first-child {
  background-color: #CCC;
}
```

Try to **solve the selection without cluttering the html**, as much as possible.

~~~

> Thou shalt keep your selectors simple

Don't make your selectors more specific than they need to be!

~~~

**Question**: Ehm, doesn't that commandment collide with the previous one? Isn't it **easier to avoid cluttering the html if we have more complex selectors**?

~~~

**Answer**: Yes. :D

~~~

And now for the **most important commandment of all**.

~~~

Are you ready?

~~~

> Thou must be patient!

You now **know the basic rules**, but probably feel a **whole lot of frustration**.

This is because **I have taught you the grammar**, but you still have to **learn the vocabulary**. To this, alas, there are **no shortcuts**.