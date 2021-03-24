# Configuração de testes no NODE

## Instalar o JEST e Dependencias
```
    yarn add jest -D
    yarn add @types/jest
    yarn add @sucrase/jest-plugin
    yarn add sqlite3 -D
    yarn add supertest -D
    yarn add dotenv
    yarn add cross-env -D
```

## Configurar o JEST
```
    yarn jest --init
    y
    n
    node
    y
    v8
    y
```

## Alterar o arquivo jest.config.js
### Parando ao encontrar a primeira falha
```
    bail: true,
```

### Alterar o filtro de arquivos de teste
```
  testMatch: [
     "**/__tests__/**/*.test.js?(x)",
  ],
```
### Configurar para dotenv no nodemon.json
```
    {
        "execMap": {
        "js": "node -r sucrase/register -r dotenv/config"
        }
        
    }
```

### Configurar para funcionar com os imports do ES6
```
    transform: { '.(js|jsx|ts|tsx)': '@sucrase/jest-plugin' },
```


## Testes unitários

Vamos testar nossas funções puras, sem acesso a banco de dados, acessos a APIs externas.


## Testes de integração

Testa funções com acesso a BD e APIs.

## DESCRIBE

Categoria dos meus testes

## IT 

Define o teste em si, ou seja, isso deve retornar a soma de dois algarismos.


## Coverage

```
collectCoverage: true,
coverageDirectory: "__tests__/coverage",
collectCoverageFrom: ["src/**"],
```