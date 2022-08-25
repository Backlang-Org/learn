# Classes

A class is like a template for objects and classes can inherit from each other to represent a hierarchical structure. Classes can also have an implement block to append functions. These functions are called `member functions`. If a function is not in an implement block it is called `free function`. All Properties/Fields/Methods are inheritet from the base class. An `abstract` function has to be implemented by the inherentor but a `virtual` function can be overriden by the inherentor. To use a class it has to be fully implemented, that means that all abstract members have to be implemented.

> 💡 You can only inherit from one base class but you can implement as many interfaces as you want. See [Interfaces](/oop/interfaces).

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
<class_declaration> ::= <modifiers> "class" <name> (":" <inheritances>) "{" <class_members> "}"
```

A class instance can be created like a struct with the static `new` function. Here is a little sample of a class hierarchie:

```back
public abstract class Animal {

}

public class Mammal : Animal {

}

public class Bird : Animal {

}

public class Dog : Mammal {

}

public class Kiwi : Bird {

}

public static func main() {
    let animal = Dog::new();

    if animal is Dog {
        print("Wuff");
    }
    else {
        print("I don't know how the animal communicate");
    }
}
```

As from the example above you can see that we create an immutable instance of `Dog` and set it to the variable `animal`. We can check if an instance is of a specific type with the `is` keyword which returns a boolean.
So, if the instance created is of type `Dog` we print a specific message to the console otherwise we print an error message.

## Exercices

1. What is the difference between a class and a struct?
2. Create a class hierarchie for any car brand you know. With the property `color` and one virtual function `GetDescription`.
3. Create some instances of your classes and call the `GetDescription` member function. Does this print that what you expect?