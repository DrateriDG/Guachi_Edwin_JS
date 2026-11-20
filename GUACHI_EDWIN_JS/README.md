# Sistema Innova ESPE 2026

Prototipo en JavaScript nativo para registrar la compra de entradas, calcular descuentos y controlar los cupos del evento Innova ESPE 2026.

## Autor
David APELLIDO - Universidad de las Fuerzas Armadas ESPE

## Cómo ejecutarlo
1. Clonar o descargar el repositorio.
2. Abrir `index.html` en el navegador.
3. Abrir la consola (F12) para ver los resultados.
4. Interactuar con los `prompt()` y `alert()`.

## Configuración
| Concepto | Valor |
|---|---|
| Precio por entrada | $20 |
| Cupos iniciales | 50 |
| Descuento estudiantes | 30 % |
| Descuento docentes | 15 % |
| Público general | 0 % |
| Máximo por compra | 5 |

## Funcionalidades
1. Comprar entradas (con validaciones y descuentos)
2. Consultar cupos disponibles
3. Consultar ingresos acumulados
4. Salir (resumen final)

## Estructura
```
APELLIDO_NOMBRE_JS/
├── index.html
├── js/
│   └── app.js
└── README.md
```

## Pruebas realizadas
| Escenario | Resultado |
|---|---|
| 3 entradas, estudiante | $42.00 |
| 2 entradas, docente | $34.00 |
| 1 entrada, público general | $20.00 |
| 0 entradas | Rechazada |
| 6 entradas | Rechazada |
| Texto en cantidad | Rechazada |
| Más entradas que cupos | Rechazada |
| Opción de menú inexistente | Mensaje de error |
| Opción 4 | Finaliza el sistema |