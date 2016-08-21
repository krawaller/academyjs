---
title: Basic styles
tagline: lipstick on a p
draft: true
---

We spent a lot of time talking about selectors. Now for the **style rules**!

![](resources/diagrams/css-split-style.svg)

~~

The **syntax** is simple enough:

```css
font-weight: bold;
```

1. You type out the **property** you want to style,
1. then a **colon separator**,
1. followed by the **value** for the property,
1. and finally an **ending semicolon**.

~~~

We can have **as many rules as we want** within the brackets:

```css
.article p {
  font-weight: normal;
  background-color: #EEE;
  margin-bottom: 1.5em;
}
```

~~~

So, **what properties** can we style? Lots and lots! For this **basic section**, here follows a few you need to know!

~~~

<div style="float:right;width:300px;background-color:white;margin-left:1em;margin-bottom:2em;">
  <div style="background-color: magenta; padding-left: 20px; margin-left:10px">
    Alea Jacta Est
  </div>
</div>

In all four cardinal directions you can apply **padding** and **margin** to an element. The inner div has:

```css
div {
  background-color: magenta;
  padding-left: 2em;
  margin-left: 1em;
}
```

~~~

In essence, **padding becomes part of the element** while **margin sizes the void around it** that no other element can enter.

~~~

<div style="float:right;width:300px;background-color:white;margin-left:1em;margin-bottom:2em;">
  <div style="background-color: magenta; padding-left: 20px; margin-left:10px;border-left: 3px solid red;">
    Alea Jacta Est
  </div>
</div>

**Between the margin and padding** you can apply a **border**.

```css
div {
  background-color: magenta;
  padding-left: 2em;
  margin-left: 1em;
  border-left: 3px solid red;
}
```

~~~

If you want the same margin/padding/border in all directions, there is a **shorthand**:

```
border: 3px solid red;
```

~~~

You've already seen **`background-color`** - the good twin to that is **`color` which colours the text**.

The `color` property is **inherited** to children, a trait it shares with some other properties.

~~~

As we said there are many more properties, but now you **have enough to get started**.

Note that **these properties were all for looks** - next chapter we'll talk more about **layout**!

