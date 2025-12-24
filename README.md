# Playwright Prueba Técnica - API & E2E

Este repositorio contiene la solución a una prueba técnica implementada con **Playwright + TypeScript**, que incluye:

- Pruebas de **integración API**
- Prueba **E2E (end to end)** de un flujo de compra

---

## Tecnologías utilizadas

- Playwright
- TypeScript
- Node.js

---

## Estructura del proyecto

├── tests/
│ ├── api/ # Pruebas de integración API
│ └── e2e/ # Pruebas end to end
│
├── lib/
│ ├── pages/ # Page Object Model
│ └── locators/ # Definición de selectores
│ └── utils/ # Funciones a manera de helpers
│
├── data/ # Datos de prueba
│
├── playwright.config.ts
├── package.json
└── README.md


## Prueba 1 - Integración API (PokéAPI)

### Objetivo
Validar el recurso de **evolución de Pokémon** usando la API pública **PokéAPI**.

### Qué se valida
- Respuesta **HTTP 200** en cada request
- Obtención de la **cadena de evolución de Squirtle**
- Extracción de:
  - Nombre del Pokémon
  - Peso (`weight`)
- Ordenamiento **alfabético sin usar**
- Impresión de resultados en consola


## Prueba 2 - E2E (Flujo de compra)

### Escenario cubierto
Flujo completo de compra en **SauceDemo**:

1. Acceso a la aplicación con credenciales válidas
2. Localización del producto **Sauce Labs Fleece Jacket**
3. Captura de nombre y precio
4. Adición al carrito
5. Validación de nombre y precio en el carrito
6. Checkout completo
7. Validación del mensaje final

---

## Ejecución de pruebas

### Pruebas de API
```bash
npx playwright test tests/api
```
### Pruebas E2E (ejemplo chromium)
``` bash
npx playwright test --project=e2e-chromium
```
### Ejecución visual
``` bash
npx playwright test --project=e2e-chromium --headed
```

### Reporte

Después de ejecutar:
```bash
npx playwright show-report
```


## Inicialización del proyecto

### Si **clonas** este repo
```bash
git clone https://github.com/Aleja01/ts-playwright-technical-test.git
cd ts-playwright-technical-test
npm install
npx playwright install
```

### Si **inicias desde cero**
Esta sección es solo informativa y describe cómo fue creado el proyecto originalmente.

**Ruta**
```bash
npm init -y
npm i -D @playwright/test
npx playwright install
```

## Despliegue

Este proyecto no requiere un proceso de despliegue, ya que se trata de una suite de pruebas automatizadas que se ejecuta localmente.


**Autor:** Alejandra Fiscal  
Proyecto de pruebas automatizadas con Playwright y TypeScript 