/*
* VARIABLES Y FUNCIONES AUXILIARES
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

/*
* SECCION DE COMPRAS DE ENTRADAS
*/
const comprarEntradas = () => {
    const nombre = pedirTexto("Ingrese el nombre del comprador:");
    if (nombre === "") {
        alert("Compra rechazada: el nombre no puede estar vacío.");
        return;
    }

    const tipo = pedirTexto("Tipo de participante (estudiante, docente o público general):").toLowerCase();
    const porcentaje = obtenerDescuento(tipo);
    if (porcentaje === null) {
        alert("Compra rechazada: tipo de participante no válido.");
        return;
    }

    const textoCantidad = pedirTexto("Cantidad de entradas (1 a " + MAX_ENTRADAS + "):");
    if (!/^\d+$/.test(textoCantidad)) {
        alert("Compra rechazada: la cantidad debe ser un número entero.");
        return;
    }
    const cantidad = Number(textoCantidad);

    if (cantidad < 1 || cantidad > MAX_ENTRADAS) {
        alert("Compra rechazada: solo puede comprar entre 1 y " + MAX_ENTRADAS + " entradas.");
        return;
    }

    // Valida que existan cupos
    if (cantidad > cupos) {
        alert("Compra rechazada: solo quedan " + cupos + " cupos disponibles.");
        return;
    }

    const subtotal = cantidad * PRECIO_ENTRADA;
    const descuento = subtotal * porcentaje;
    const total = subtotal - descuento;

    cupos -= cantidad;
    entradasVendidas += cantidad;
    ingresos += total;
    compras++;

    const resumen =
        "RESUMEN DE COMPRA\n" +
        "Nombre: " + nombre + "\n" +
        "Tipo de participante: " + tipo + "\n" +
        "Cantidad de entradas: " + cantidad + "\n\n" +
        "Subtotal: $" + subtotal.toFixed(2) + "\n" +
        "Descuento (" + porcentaje * 100 + " %): $" + descuento.toFixed(2) + "\n" +
        "Total a pagar: $" + total.toFixed(2) + "\n\n" +
        "Compra realizada exitosamente.\n" +
        "Cupos restantes: " + cupos;

    alert(resumen);
    console.log(resumen);
};

/*
* CONSULTA DE CUPOS 
*/
const consultarCupos = () => {
    let mensaje;

    if (cupos > 10) {
        mensaje = "Cupos disponibles";
    } else if (cupos >= 1) {
        mensaje = "Últimos cupos disponibles";
    } else {
        mensaje = "Evento agotado";
    }

    const texto = "Cupos disponibles: " + cupos + "\n" + mensaje;
    alert(texto);
    console.log(texto);
};

/**
* CONSULTA DE INGRESOS 
*/
const consultarIngresos = () => {
    const texto =
        "Total de entradas vendidas: " + entradasVendidas + "\n" +
        "Total de ingresos acumulados: $" + ingresos.toFixed(2) + "\n" +
        "Número de compras realizadas: " + compras;

    alert(texto);
    console.log(texto);
};

/*
* RESUMEN FINAL
*/
const mostrarResumenFinal = () => {
    const texto =
        "RESUMEN FINAL - INNOVA ESPE 2026\n" +
        "Entradas vendidas: " + entradasVendidas + "\n" +
        "Ingresos acumulados: $" + ingresos.toFixed(2) + "\n" +
        "Compras realizadas: " + compras + "\n" +
        "Cupos restantes: " + cupos + "\n\n" +
        "Gracias por usar el sistema.";

    alert(texto);
    console.log(texto);
};