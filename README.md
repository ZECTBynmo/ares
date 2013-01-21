A very simple wrapper around childProcess.exec that just executes commands. It doesn't give you any option to respond to errors or return values. It's useful for launching scripts or executables and keeping code clean.

Installation
```
npm install ares
```

Usage
```JavaScript
var ares = require('ares');

ares("python C:/MyScript.py");
ares("C:/SomeProgram.exe --option='yup'");
```

An optional second parameter logs everything from stdout and stderr 
```JavaScript
var ares = require('ares');
ares("python C:/MyScript.py"m, true);
```

Note: The name doesn't mean anything, it's just short and easy to type