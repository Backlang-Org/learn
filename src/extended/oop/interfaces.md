# Interfaces

An interface describes a contract between different objects. If a class implements an interface the instanciator knows that all members are implemented. You can also inherit from other interfaces to combine many interfaces into one name. Interface names should start with an `I`.

The syntax of an interface:
```ebnf
<interface_list> ::= <name> "," <interface_list> | <name>
<interface_declaration> ::= <modifiers> "interface" <name> (":" <interface_list>)? "{" <declarations> "}"
```

Here a little example:

```back
public interface IComparable {
    bool Compare(left : obj, right : obj);
}

public class MyCustomObject : IComparable {
    
}

implement MyCustomObject {
    public bool Compare(left : obj, right : obj) {
        return left == right;
    }
}
```

## Exercices

1. Can you implement more than one interfaces?
2. What happens if you implement the same interface twice?
3. Can you make an instance of an interface?

And now, a _quiz_:

{{#quiz ../../../quizzes/interfaces.toml}}