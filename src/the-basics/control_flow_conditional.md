# Conditional Control Flow

What would a program be without any decisions? Really boring. There are two kinds of conditional statements available in Backlang, `if` and `switch`. But what is a condition and conditional control flow? Let's figure it out.

## Conditions

A condition always evaluates to `true` or `false`. Conditions can be combined with relational operators. Here is a list:

| operator | description                                                                                    |
|----------|------------------------------------------------------------------------------------------------|
| ! not    | The logical not operator inverts the result. `true => false` and `false => true`               |
| && and   | The logical and combines two conditions. It evaluates to true only if both conditions are true |
| \|\| or  | The logical or operator evaluates to true if one of the operands are true                      |

## If-Statements

If-statements allow you to brnch the flow of control. 

Here is the syntactic structure of a full if-statement:
```ebnf
<if_statement> ::= "if" <condition> "{" <trueBody> "}" ("else" "{" <falseBody> "}")?
```

If only one statement is given for the body the curly braces can be left out.

Here is a simple example:

```back
public static func main() {
    let isHappy = true;

    if isHappy {
        print("You are happy.");
    }
    else {
        print("You are not happy");
    }
}
```

## Exercices

Given the following expression: `x and !b`. 

1. Is this valid code?
2. Under which conditions is this code semantically incorrect?
