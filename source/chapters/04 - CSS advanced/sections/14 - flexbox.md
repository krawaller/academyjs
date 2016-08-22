---
title: Flexbox
tagline: solving the age-old riddle
---

There are **two common problems** that are embarrasingly hard to solve using regular CSS:

* **centering things vertically**
* having **columns of equal height**

CSS3 finally brought us a remedy: **Flexbox**!

~~~

The basic idea is simple; in this **new display mode** you select...

* opt in to the **new display mode** (`display: flex`)
* choose **vertical or horisontal direction** (`flex-direction`)
* how the **content should be aligned along the direction axis** (`justify-content`)
* and also **perpendicular to the direction axis** (`align-items`)

~~~

There are **some more flex properties**, and also some **for the children** in a box, which gives you **even more control**.

~~~

This is **hard to visualise from textual explanations**, so try out an interactive tutorial here: [http://blog.krawaller.se/flexboxdemo/](http://blog.krawaller.se/flexboxdemo/)

There are also **two popular games** that demonstrate the concept:

* Flexbox Froggy @ [http://flexboxfroggy.com/](http://flexboxfroggy.com/)
* Flexbox Defence @ [http://www.flexboxdefense.com/](http://www.flexboxdefense.com/)

~~~

Remember how CSS selectors were so good at what they did that they leaked over into JS? It is **the same with flexbox** - it turned out to be such an efficient way to lay out things that it is **used in many frameworks**, most noteably by **React Native**.