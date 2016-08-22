---
title: Order
tagline: let the race begin!
draft: true
---

**Question**: So, styles can be defined in many different places. But, **what happens when the same style is applied in different ways**?

~~~

**Answer**: The browser follows a strict pecking order:

![](resources/diagrams/css-order.svg)

~~~

There were some things in there that we don't yet know about. First, `!important` - this is a keyword you can **add to the end of a rule** to bring it to the top of the pecking order.

```css
.special {
   background: yellow !important;
}
```

But as noted this is **considered bad practice**, just as **inline styles are considered harmful**.

~~~

So if we **avoid those two**...

![](resources/diagrams/css-order-ok.svg)

...the primary order decider is **specificity**. But, what is that?

~~~

Specificity is the **"weight" of the rule**, which is calculated according to a formula. The gist;

* **`#id`** selectors are the heaviest
* then **`.class`**, **`[attributes]`** and **`:pseudo`**
* and finally **type**.

~~~

Say you have this style...

```
p:first-line {
  margin-left: 2em;
}
```

...but you are also using an **external CSS sheet** which **overrides your style**.

~~~

Then you need to **make your style more specific**, often by **prefixing it with ancestor specifications** that you otherwise don't need: 

```
body div#app-wrapper p:first-line {
  margin-left: 2em;
}
```

~~~

A final note; since **browser defaults can vary**, it is common to use a **reset sheet** to be (more) sure that everything looks the same in different browsers.

An **old but popular sheet** is the one by CSS guru Eric Meyer which you can find here: [http://meyerweb.com/eric/tools/css/reset/](http://meyerweb.com/eric/tools/css/reset/)