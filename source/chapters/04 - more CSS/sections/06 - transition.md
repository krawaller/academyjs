---
title: Transitions
tagline: Slowing things down
---

Normally, if a **style property of an element changes value**, the **change is instantaneous**.

~~~

For example, we apply this style...

```css
#instantexample:hover {
  transform: rotate(45deg);
}
```

...to this `div`, so **try hovering over it**!

<div id="instantexample"></div>

~~~

This div is exactly the same as before, but with **one additional rule**:

```
#transitionexample {
  transition: transform 1s ease;
}
```

Try **hovering again**!

<div id="transitionexample"></div>

~~~

As you probably figure, transitions are **a really powerful way to do CSS-only animations**.

Some notes;

* The **full shorthand syntax** is `transition: <property> <duration> <timing function> <delay>`
* We can transition **more than one property** by separating them with `,`: `transition: width 2s, height 2s`
* As with many new / experimental technologies some browsers might require **vendor prefixes** still: `-webkit-transition`, `-ms-transition`, etc. Although the need is growing less and less frequent.

~~~

As per usual there are **lots more detail on MDN**:

[https://developer.mozilla.org/en-US/docs/Web/CSS/transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

~~~


Btw, the **`transform` property** that we used as a transition example is really powerful, and worthy of looking up for its own sake!

[https://developer.mozilla.org/en-US/docs/Web/CSS/transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)