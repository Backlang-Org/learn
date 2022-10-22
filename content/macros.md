# Macros

A macro is a function which is called at compile time and replaces the macro-call with a new sub-tree.
Macros can match different properties of the tree. A macro call can look like integrated language constructs to hide complextity from the caller.

Here are some examples of how macros can be called:

```back
quote(hello);

quote {
    hello;
}

quote(simplyfy) {
    hello;
}

quote;
```

If a macro is called with a block the block will be treated as the last argument. If no arguments are specified the parentheses can be left out.

Macros can be used to generate object graphs from resources such as files, to generate boilerplate code for design patterns, or as a simple domain specific language.
