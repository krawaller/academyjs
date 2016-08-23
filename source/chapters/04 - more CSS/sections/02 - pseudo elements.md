---
title: Pseudo Elements
tagline: Where did you come from?!
---

You've already met pseudo classes. However, the **pseudo elements** do something we haven't yet seen - they **add new elements** to the document!

~~~

Say we have this `p` element:

```html
<p>Eeexiiit <em>light!</em> Eeenteeer <em>niiiight!</em></p>
```

~~~

And we target it with this CSS:

```css
p:before {
  content: "♬ ";
}
p:after {
  content: " ♫♩"
}
```

~~~

Then we get this **output**:

![](resources/images/sandman.png)

~~~

Note however that the notes **don't actually come before and after** the `p` element, but rather **become the youngest and oldest children**:

![](resources/diagrams/sandman.svg)

~~~

In other words, `:before` and `:after` are **misleading names**, they should have been called something else. Also there should be an *actual* before and after, but there isn't.

~~~

But still, the **pseudo elements are a powerful tool** when the moment is right.

Note that you don't have to use it for text content - we can also set `display` to `block`, add background images and all sort of shenanigans!


