/*
* 1. Variables
*/
const PRECIO_ENTRADA = 20;
const DESCUENTO_ESTUDIANTE = 0.3;
const DESCUENTO_DOCENTE = 0.15;
const DESCUENTO_GENERAL = 0;
const MAX_ENTRADAS = 5;

let cupos = 50;
let entradasVendidas = 0;
let ingresos = 0;
let compras = 0;

// Funcion que devuelve el porcentaje de descuento segun el tipo
const obtenerDescuento = (tipo) => {
    if (tipo === "estudiante") {
        return DESCUENTO_ESTUDIANTE;
    } else if (tipo === "docente") {
        return DESCUENTO_DOCENTE;
    } else if (tipo === "publico general" || tipo === "público general" || tipo === "general") {
        return DESCUENTO_GENERAL;
    }
    return null;
};

// Funcion que pide un texto al usuario y evita errores si presiona [Cancelar]
const pedirTexto = (mensaje) => {
    const respuesta = prompt(mensaje);
    return respuesta === null ? "" : respuesta.trim();
};