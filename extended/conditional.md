## Switch Statements

Our Switch Statements got a lot of rework from normal switch statements you see in other languages.
Normal features from the switch statement behave as expected

```sc
switch element {
    case value: { print("its the value"); break; }
    default: print("its not the value :c");
}
```

The example is great for one of our new features. Do you see how annoying it is that we had to use curly braces just because we need a break?
For these things, we can just type break before our case like so

```sc
switch element {
    break case value: print("its the value");
    default: print("its not the value :c");
}
```

But look! What if we want an `if` clause after the first `case` so that it only gets executed when the first `case` failed and couldn't break.
Yeah, _normally_ we would end the `switch`, then make the `if` statement and then put the `default` code in the `else` branch. But doesn't that sound complicated? Yes, cause it is! In Back, you can just put `if` statements into a `switch` statement and also break in them like so

```sc
switch element {
    break case value: print("its the value");
    break if myFunction(element): print("my function likes it :D");
    default: print("its not the value :c");
}
```

Ok, but we got even more to show you. For example, you can check **two values** in one `case` by just typing

```sc
switch element {
    break case value: print("its the value");
    break if myFunction(element): print("my function likes it :D");
    break case value1 || value2: print("its one of those values");
    default: print("its not the value :c");
}
```

But what's when you want to check a method of the element? And the element changes? For example `switch (getRandomUUID()) { /*...*/ }`
Of course we have a solution for that! The `when` keyword

```sc
switch element {
    break case value: print("its the value");
    break if myFunction(element): print("my function likes it :D");
    break case value1 || value2: print("its one of those values");
    when >= 17: {
        print("element is greater or equal to 17.");
        break;
    }
    break when isCool(): print("converts to if element.isCool()");
    default: print("its not the value :c");
}
```

## Exercices

1. Why you would use an switch-statement instead of an if-statement?

And now, a _quiz_:

{{#quiz ../../quizzes/switch.toml}}