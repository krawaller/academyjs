---
title: Nested data
tagline: Matryoshka time!
---

Understanding HTML requires understanding the concept of **nested data**. So that is where we'll start!

~~~

We will approach this in a roundabout way by **designing our own language**. 

Let's first consider how we **describe a single object**!

~~~

We need some kind of **divider**, so that people can tell where the description **starts and ends**. Why not go with **opening and closing brackets**?

```
[   ]
```

~~~

Most systems involve their objects being classified by **type**, so let's introduce that. We'll simply put the type within the brackets:

```
[apple]   [pear]   [banana]
```

~~~

But objects can also have **other characteristics** apart from their type. These are often called **attributes**. They come in two flavours:

* **attributes with a value** (`length` has a number)
* **attributes with no value** (`disabled`, `leaf-node`)

We could forbid the no-value option, but that would be cowardly.

~~~

How should we **mark up the attributes** in our language? Let's...

* **list them inside curly braces** after the type.
* use `:` to **separate attribute and value** (if there is a value)
* use `,` to **separate between different attributes**.

~~~

So if we have this:

![](resources/diagrams/apple.svg)

~~~

...then we mark it up like this:


```
[apple{tastiness:7,ease:8,forbidden}]
```

(btw: [https://xkcd.com/388/](https://xkcd.com/388/))

~~~

Finally, objects can **contain other objects**. Otherwise it wouldn't be *nested* data!

For our toy language we decide to...

* **list children inside parenthesis** after the type and attributes
* **separate children** with `,` to be consistent

~~~

So with this data:

![](resources/diagrams/fruits.svg)

~~~

...we would get this markup:

```
[basket{price:15}([apple{price:8}],[banana{price:9}])]
```

If we **allowed filler whitespace** it could be made more readable, but where's the sport in that?

~~~

To recap - an **object** can have...

![](resources/diagrams/object.svg)

...so any expression language for nested data must be able to handle these things.

~~~

Regarding **object relations** we have so far only discussed parent-child.

But conceivably there could also be **other relations**! However, this is outside of the scope of our definition of nested data.
