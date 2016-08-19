---
title: XML
tagline: not quite as cool as it used to be?
---

Before we talk about HTML, let's **look at how XML (eXtensible Markup Language) has solved the exercise** you just did!

There is a lot more to be said about XML, but we don't care about that - only the syntax.

~~~

Starting with the **encapsulation** - XML delimits objects by an **opening and closing tag** which **contains the type**.

```xml
<shelf></shelf>
```

The opening tag is `<type>`, the closing is `</type>` - the same but with a forward slash before the type.

~~~

Now, **attributes**! They...

* are put **inside the opening tag**.
* are **separated with whitespace**
* uses an **equal sign before the value**
* has the **value within quotes**

~~~

So if we have a heavy oaken shelf, we get: 

```xml
<shelf wood="oak" weight="85kg"></shelf>
```

~~~

What about **children**? They are simply listed **between the opening and closing tags**!

```xml
<shelf wood="oak" weight="85kg">
  <animal race="Hieraatus Spilogaster" taxidermist="Bob"></animal>
</shelf>
```

**Whitespace is allowed** wherever, which lets us space out the information in a readable way.

~~~

For an element with no children, XML has an alternative shorthand with **self-closing tags**. So instead of this:

```xml
<animal race="Hieraatus Spilogaster" taxidermist="Bob"></animal>
```

we could have done this:

```xml
<animal race="Hieraatus Spilogaster" taxidermist="Bob"/>
```

~~~

Finally something that our discussion on nested data didn't touch: XML allows **leaf text nodes** as children, by simply typing normal text instead of an element within the tags:

```xml
<famous-quote>Alea Jacta Est</famous-quote>
```

~~~

Although powerful this also gives rise to **ambiguity**. For example, should we encode a book like this...

```xml
<book title="Naiv Super" author="Erlend Loe"></book>
```

~~~

...or like this?

```xml
<book>
  <title>Naiv Super</title>
  <author>Erlend Loe</author>
</book>
```

Also, we **lied before** - whitespace within the tags does have meaning, as they 
**become text nodes**! So the definition above...

~~~

...will actually be interpreted as this:

![](resources/diagrams/book.svg)

(although the interpreter can be made to skip those whitespace nodes)

~~~

This does however allow us to do stuff like this, which can be quite useful:

```xml
<truth>I am <emphasis>really</emphasis> good at this!</truth>
```

![](resources/diagrams/truth.svg)

~~~

As a final note, learn the **vocabulary**:

* an **element** is an object / entity / thing / whatever you want to call it.
* an element is defined using an opening and a closing **tag** (or a self-closing tag).

In essence: the **element is the object**, while the **tags are the delimiters** for the object.

