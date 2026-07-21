const assert = require('assert');
const { validateEmail } = require('./emailValidator');

assert.strictEqual(validateEmail('usuario@dominio.com'), true);
assert.strictEqual(validateEmail('usuario@.com'), false);
assert.strictEqual(validateEmail('usuario@dominio..com'), false);
assert.strictEqual(validateEmail('usuario@-dominio.com'), false);

console.log('Todos los tests de validateEmail pasaron correctamente.');
