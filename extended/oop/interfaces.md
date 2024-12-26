# Interfaces

An interface describes a contract between different objects. If a class implements an interface the instanciator knows that all members are implemented. You can also inherit from other interfaces to combine many interfaces into one name. Interface names should start with an `I`.

The syntax of an interface:
```ebnf
<interface_list> ::= <name> "," <interface_list> | <name>
<interface_declaration> ::= <modifiers> "interface" <name> (":" <interface_list>)? "{" <declarations> "}"
```

Here a little example:

```sc
public interface IComparable {
    func Compare(left : obj, right : obj) -> bool;
}

public class MyCustomObject implements IComparable {
    
}

implement MyCustomObject {
    public func Compare(left : obj, right : obj) -> bool {
        return left == right;
    }
}
```

## Exercices

1. Can you implement more than one interfaces?
2. What happens if you implement the same interface twice?
3. Can you make an instance of an interface?