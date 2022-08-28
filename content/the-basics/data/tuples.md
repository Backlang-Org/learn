## Tuples

A tuple is like an anonymous struct. It can hold values but it doesn't have a name. Tuples can be used to map or return multiple values. A tuple can hold up to 8 values. 

Here is a simple example:

```back
let myTuple : (i32, bool) = (42, true);
```

```back
func doSomething() -> (i32, string) {
    return (1, "Some Error Occured");
}
```