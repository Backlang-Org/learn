# Loops

Now I will introduce you the concept of loops. A loop repeats code.

We will start with the simplest loop.

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

## ForEach Loops
