No Node.js, `"type": "module"` é uma configuração no arquivo `package.json` que indica que o código deve ser interpretado como módulos ECMAScript (ESM) ao invés de módulos CommonJS, que é o formato padrão no Node.js.

### Módulos ECMAScript (ESM)
O formato ESM usa `import` e `export` para importar e exportar módulos, enquanto o CommonJS usa `require` e `module.exports`. Quando você define `"type": "module"` no `package.json`, você pode usar a sintaxe ESM no seu código, como:

```javascript
// Importando um módulo
import express from 'express';

// Exportando uma função
export function myFunction() {
  // código
}
```

### Efeito de `"type": "module"`
- Com essa configuração, o Node.js trata todos os arquivos `.js` como módulos ECMAScript.
- Arquivos `.mjs` e `.cjs` também podem ser usados para diferenciar explicitamente módulos ESM e CommonJS.

### Exemplo do `package.json`:
```json
{
  "type": "module"
}
```

Sem essa configuração, o Node.js usa o formato CommonJS por padrão, e você precisaria usar `require` e `module.exports`.