---
title: Catching DOM events
tagline: True interaction at last!
---

With CSS, the only interaction we could offer was some animations using `:hover` and `:active`.

But now is the time for some **true user interaction**!

~~~

The DOM lets us **add event listeners to elements**. These are **functions that will be called whenever that particular event happen** on that element.

~~~

Say we **have this button** in our document:

```html
<button id="doomsdaybtn">Don't click me!</button>
```

And a **reference** to the corresponding node:

```javascript
var btn = document.getElementById("doomsdaybtn");
```

~~~

We now **create a function to be used as an event listener**...

```javascript
var listener = function(){
  alert("BOOM!");
}
```

...and **attach it using the `addEventListener` method** on the node:

```javascript
btn.addEventListener("click",listener);
```

~~~

We could also **add the anonymous function directly**:

```javascript
btn.addEventListener("click",function(){
  alert("BOOM!");
});
```

~~~

Now **when the user clicks the button, the event handler function will run**!

The handler will be called with an **event object** that describes what just happened. These differ depending on what event we were listening to.

~~~

What you just saw is the **cornerstone of user interaction**. We **add event listeners** to **make things happen when the user does stuff**!

~~~

There is a **full list of events** at MDN:

[https://developer.mozilla.org/en-US/docs/Web/Events](https://developer.mozilla.org/en-US/docs/Web/Events)
 
~~~

Although we can add listener to any elements, the **most common use case is with form elements**. We've mentioned buttons and inputs, but there are many more! MDN again has a **full list**:

[https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms)