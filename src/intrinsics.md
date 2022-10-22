# Intrinsics

An intrinsic is a function that compiles directly to the targeted platform as an instruction instead of calling it.
In Backlang you can specify which block of instrinsic instructions are compiled based on the target. Every intrinsic instruction is a simple function call without a return value.

```back
inline(dotnet) {
    ld_str("Hello {0}");
    ldc_i4(42);
    call(System.Console::WriteLine(string, obj));
}
```

A list of available [Dotnet](/intrinsics/dotnet.md) intrinsics
