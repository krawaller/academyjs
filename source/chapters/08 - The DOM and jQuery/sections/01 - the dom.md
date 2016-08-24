---
title: Introducing the DOM
tagline: DOM DOM DOM!
---

In a nutshell: **the DOM is the bridge between JS and HTML**:

![](resources/diagrams/dom.svg)

~~~

Another way of putting it: **the HTML is the recipe** and **the DOM is the dish**.

The DOM is the **browser's internal representation of the HTML**.

~~~

We've **already seen the DOM in the Elements tab in the dev tools**, and noted it looks an awful lot like our HTML.

But that's just because **we haven't involved JavaScript** yet. JavaScript can manipulate the DOM. **The DOM is not constant**.

~~~

We **interact with the DOM** from JS space through the **global `document` variable**. Go to a website and try this in the console:

```
document.body.setAttribute("style","background-color:red;")
```

~~~

Through `document.body` we got an **HTML node**, an **object that represents an element**. On that we can...

* call the **`setAttribute`** method like we just did
* query attributes using the **`getAttribute`** method
* change its content by assigning to **`innerHTML`** or **`textContent`**
* iterate over child nodes using the **`children`** property, allowing us to walk down the tree.
* go back up the tree using the **parent** property.

~~~

We don't have to walk the tree from `body`, there are **several methods** for **find a specific node or set of nodes** on `document`:

* **`getElementById("someId")`**
* **`getElementsByClassName("someClass")`**
* **`getElementsByTagName("div")`**

~~~

And, there are **two new methods** which **gets elements using CSS selectors**:

* **`querySelector("#someId")`
* **`querySelectorAll("article > p")`**

The only difference is that **`querySelector` always return 0 or 1 elements**, while **`querySelectorAll` returns a list**.

~~~

**Question**: All those words, but we still don't know **what DOM stands for**?

~~~

**Answer**: Sorry! The **D**ocument **O**bject **M**odel.