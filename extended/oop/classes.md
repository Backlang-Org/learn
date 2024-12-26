# Classes

A class is like a template for objects and classes can inherit from each other to represent a hierarchical structure. Classes can also have an implement block to append functions. These functions are called `member functions`. If a function is not in an implement block it is called `free function`. All Properties/Fields/Methods are inherited from the base class. An `abstract` function has to be implemented by the inherentor but a `virtual` function can be overriden by the inherentor. To use a class it has to be fully implemented, that means that all abstract members have to be defined.

> 💡 You can only inherit from one base class but you can implement as many interfaces as you want. See [Interfaces](/extended/oop/interfaces.md).

The syntax of a class:

```ebnf
<inheritances> ::= <name> "," <inheritances> | <name>
<field> ::= <modifiers> <variable_declaration>

<function_body> ::= "{" <statements> "}"

<get_block> ::= "get" (<function_body> | ";")
<set_block> ::= "set" (<function_body>) | ";")
<get_and_set_block> ::= <get_block> <set_block>

<property> ::= <modifiers> "prop" <name> "{" <get_block> | <get_and_set_block> "}"

<class_members> ::= <field> | <property>
<class_declaration> ::= <modifiers> "class" <name> (("implements" <inheritances>) | "extends" <typename>)? "{" <class_members> "}"
```

A class instance can be created like a struct with the static `new` function. Here is a little sample of a class hierarchie:

```back
public abstract class Animal {

}

public class Mammal extends Animal {

}

public class Bird extends Animal {

}

public class Dog extends Mammal {

}

public class Kiwi extends Bird {

}

func main() {
    let animal = Dog::new();

    if animal is Dog {
        print("Wuff");
    }
    else {
        print("I don't know how the animal communicate");
    }
}
```

As from the example above you can see that we create an immutable instance of `Dog` and set it to the variable `animal`. We can check if an instance is of a specific type with the `is` operator which returns a boolean.
So, if the instance created is of type `Dog` we print a specific message to the console otherwise we print an error message.

## The implement construct
The `implement` block seperates data from functionality. So if you want to add functions to a type you can use the implement block. This language feature can also be used to extend existing types from other assemblys. This are called `extension functions`.

The structure of an implement block:
```ebnf
<typeOrTypeRange> ::= <typename> | <typename> ".." <typeOrTypeRange> | <typename> "," <typeOrTypeTange>
<implement> ::= "implement" <typeOrTypeRange> <functionBlock>
```

The implement block can also be used to save code. If you use a typerange instead a typename all functions will be expanded to all types of the range. To use the expanded type in the function you can use the `SELF` type.

An example of an expandable implement block:
```back
implement u8..u64, string {
    public static function printValue(src: SELF) {
        print(src);
    }
}
```

## Exercices

1. What is the difference between a class and a struct?
2. Create a class hierarchie for any car brand you know. With the property `color` and one virtual function `GetDescription`.
3. Create some instances of your classes and call the `GetDescription` member function. Does this print what you expect?
4. Rewrite the class hierarchie from the sample above with [Discrimated Unions](/extended/unions.md)