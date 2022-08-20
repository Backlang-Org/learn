# Loops

Now I will introduce you the concept of loops. A loop can repeat code. There are several kind of loops but we will start with the simplest loop - The `while` loop.

## While Loops

The while loop is a head controlled loop. That means that the body will only be executed if the condition is true, otherwise the body will be skipped.

Here is the syntactic structure:
```ebnf
<while_loop> ::= "while" <condition> "{" <body> "}"
```

Here is a simple example:
```back
public static func main() {
    let mut number = 42;

    while number > 0 { //only execute if number is greater than zero
        print(number); //prints the number

        numer = number + 1; //increses number by 1
    }
}
```

## For-Loop

A for loop can be used to iterate over arrays/iterators. To repeat code a certain amount of iterations you can use ranges. 

The definition of a for-loop:

```ebnf
<for_loop> ::= "for" <name> "in" <iterable> "{" <body> "}"
```

A simple example to repeat code:

```back
for x in 1..12 {
    print("index: " + x);
}
```

You can also use ranges to reverese the index:

```back
for x in 12..1 {
    print("index: " + x);
}
```

## Exercices

1. 