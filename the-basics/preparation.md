# Preparation

Back is integrated to the msbuild eco system and can be installed and used easily. To start with Back follow this guide.

## 1. Install DotNet 7

Download the installers of the .NET SDK and runtime for your operating system from the [.NET Download Page](https://dotnet.microsoft.com/en-us/download/dotnet/7.0)

After the installation type `dotnet --list-sdks` in the terminal to check if the sdk is correctly installed.

To verify if you have installed the right runtime use `dotnet --version`

## 2. Tooling

To have an easier start install `viking` with `dotnet tool install --global viking` in the terminal. This application can easily install plugins, create and build projects. To run viking type `viking` in the terminal. Socordia source files have the .back file extension.


To Install other useful resources like templates and the vscode extension:

```bash
dotnet new install Socordia.Templates
code --install-extension furesoft.back --force
```


## 3. Building and Running

To build an executable use the `viking build` command in the project folder. If you have selected the .Net target you can run it directly with `dotnet TestConsole.dll`. To combine those steps together you can simply use `viking run`. 