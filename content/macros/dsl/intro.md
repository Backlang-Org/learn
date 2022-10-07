# Writing a Domain Specific Language with macros

A domain specific language is a language besides the general purpose for specific domains eg. SQL, HTML, ...

Backlang supports a special syntax of macros to use it like language constructs.

## A Basic Example

For now we will write a simple example to represent an object structure and convert it automaticly to a XML file.

The DSL looks like this:

```back
public static func main() {
    let xmlDoc = xml {
        settings {
            general {
                autoUpdate = true;
                titlePrefix = "Sample - ";
            }
        }
    };
}
```

The resulting object:
```back
public static func main() {
    let xmlDoc = "<settings><general><autoUpdate>true</autoUpdate><titlePrefix>Sample - </titlePrefix></general></settings>";
}
```