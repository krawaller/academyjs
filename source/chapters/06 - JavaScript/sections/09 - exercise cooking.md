---
title: Exercise - cooking time!
tagline: getting functional
---

Now that you've gotten to know **objects**, **arrays** and **functions** - let's **throw them into the mixer** and see what happens!

~~~

Create another **barebones html page** with a **script element to house your code**.

~~~

In that script element, **define at least 3 recipe objects** using different ingredients:

```
var supersoup = {
  potato: 3,
  onion: 1,
  corn: 1
};
```

The **keys are ingredients**, and the values are **how many of the ingredient is needed**.

~~~

Now define a **shop object** containing all used **ingredients as keys** and the corresponding **price per ingredient as value**.

```
var ICA = {
  potato: 12,
  tomato: 7,
  cucumber: 3,
  corn: 5,
  // ...
};
```

~~~

Now **create a function** that **calculates the cost for a recipe**...

![](resources/diagrams/recipecostcalc.svg)


~~~

...and **try it for a few of them**:

```
console.log("Supersoup costs "+costOfRecipe(supersoup,ICA));
console.log("My famous stew costs "+costOfRecipe(stew,ICA));
```

~~~

**Challenge**: Too easy? How about this:

* Create **a few other shops with different prices**
* **Collect all shops** in a `shops` object: `{ICA: {...}, coop: {...}, ...}`;

And **THEN**:

~~~

Create a **`findCheapestStore` function** that takes the `shops` object and a recipe, and tells you which store is the chepest for that recipe!

![](resources/diagrams/beststore.svg)

Now demonstrate that for a few recipes:

```
console.log("Shop for supersoup at "+findCheapestStore(supersoup,stores));
console.log("Shop for stew at "+costOfRecipe(stew,stores));
```
