---
title: Animations
tagline: ACTUAL animations, that is!
---

With **transitions** we can do **simple animations from one state to another**.

But CSS also provides **actual animations** where we **change between predefined frames**!

~~~

Behold **this beautiful example**!

<div id="animationexample">
  <div></div>
</div>

~~~

An animation consists of **two parts**. First we **name the animation** and **define the keyframes**, which contain **property values** to be reached at **various points during the animation timeline**. These values will **transition** from one point to the next.

~~~

The earlier animation was **defined like this**:

```css
@keyframes looparound {
  0% {
    top: 0;
    left: 0;
  }
  25% {
    top: 0;
    left: 470px;
  }
  50% {
    top: 170px;
    left: 470px;
  }
  75% {
    top: 170px;
    left: 0;
  }
  100% {
    top: 0;
    left: 0;
  }
}
```

~~~

And our element then **used the animation** by specifying **name**, **duration** and **repeats**:

```css
#animationexample > div {
  animation-name: looparound;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}
```

~~~

If we only want to **go from one set of property values to another**, then we **might as well just use transitions**.

But there are **more than two frames involved** we must **use animations instead**!