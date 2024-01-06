## let 声明块变量

- `let` declarations are scoped to blocks as well as functions.  
    `let` 声明的作用域为块和函数。
- `let` declarations can only be accessed after the line of declaration is reached (see [temporal dead zone](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)). For this reason, `let` declarations are commonly regarded as [non-hoisted](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting).  
    `let` 声明只能在到达声明行后才能访问（请参阅临时死区）。因此， `let` 声明通常被视为非提升声明。
- `let` declarations do not create properties on [`globalThis`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis) when declared at the top level of a script.  
    在脚本顶层声明时， `let` 声明不会在 `globalThis` 上创建属性。
- `let` declarations cannot be [redeclared](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#redeclarations) by any other declaration in the same scope.  
    `let` 声明不能被同一范围内的任何其他声明重新声明。
- `let` begins [_declarations_, not _statements_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations). That means you cannot use a lone `let` declaration as the body of a block (which makes sense, since there's no way to access the variable).  
    `let` 开始声明，而不是语句。这意味着您不能使用单独的 `let` 声明作为块的主体（这是有道理的，因为无法访问该变量）。