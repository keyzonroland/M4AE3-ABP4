// ===== EJERCICIO 1: CREAR ARREGLO CON DOBLES =====
/**
 * Función que dado un número n crea un arreglo de largo n,
 * donde en cada posición del arreglo está el doble del anterior.
 * El primer elemento del arreglo es 1.
 * @param {number} n - Tamaño del arreglo
 * @returns {Array} Arreglo con la secuencia de dobles
 */
function crearArregloConDobles(n) {
    if (n <= 0) {
        return [];
    }
    
    const arreglo = [];
    arreglo[0] = 1; // El primer elemento es 1
    
    for (let i = 1; i < n; i++) {
        arreglo[i] = arreglo[i - 1] * 2;
    }
    
    return arreglo;
}

// ===== EJERCICIO 2: ENCONTRAR EL MAYOR NÚMERO =====
/**
 * Función que dado un arreglo de números de largo 10
 * permite obtener el mayor número contenido en el arreglo.
 * @param {Array} arreglo - Arreglo de 10 números
 * @returns {number} El mayor número del arreglo
 */
function encontrarMayorNumero(arreglo) {
    if (!Array.isArray(arreglo) || arreglo.length !== 10) {
        throw new Error("El arreglo debe tener exactamente 10 elementos");
    }
    
    let mayor = arreglo[0];
    
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }
    
    return mayor;
}

// ===== EJERCICIO 3: OBTENER DÍA DE LA SEMANA =====
/**
 * Dado un arreglo de strings que contiene los días de la semana,
 * función que permite obtener un día en particular si se recibe su número correspondiente.
 * Ej: 1 = Lunes, 7 = Domingo.
 * @param {number} numeroDia - Número del día (1-7)
 * @returns {string} Nombre del día de la semana
 */
function obtenerDiaSemana(numeroDia) {
    const diasSemana = [
        "Lunes",    // 1
        "Martes",   // 2
        "Miércoles", // 3
        "Jueves",   // 4
        "Viernes",  // 5
        "Sábado",   // 6
        "Domingo"   // 7
    ];
    
    if (numeroDia < 1 || numeroDia > 7) {
        throw new Error("El número debe estar entre 1 y 7");
    }
    
    return diasSemana[numeroDia - 1];
}

// ===== EJERCICIO 4: BUSCAR ELEMENTO EN ARREGLO =====
/**
 * Función que permite buscar un elemento contenido en el arreglo.
 * El arreglo solo contendrá números, y tendrá un largo máximo de 100.
 * @param {Array} arreglo - Arreglo de números (máximo 100 elementos)
 * @param {number} elemento - Elemento a buscar
 * @returns {Object} Objeto con información de la búsqueda
 */
function buscarElementoEnArreglo(arreglo, elemento) {
    if (!Array.isArray(arreglo)) {
        throw new Error("El primer parámetro debe ser un arreglo");
    }
    
    if (arreglo.length > 100) {
        throw new Error("El arreglo no puede tener más de 100 elementos");
    }
    
    const posicionesEncontradas = [];
    
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === elemento) {
            posicionesEncontradas.push(i);
        }
    }
    
    return {
        encontrado: posicionesEncontradas.length > 0,
        posiciones: posicionesEncontradas,
        cantidadEncontrada: posicionesEncontradas.length
    };
}

// ===== EJERCICIO 5: ORDENAR ARREGLO ASCENDENTEMENTE =====
/**
 * Programa que dado un arreglo de números desordenados
 * los ordena ascendentemente.
 * @param {Array} arreglo - Arreglo de números desordenados
 * @returns {Array} Arreglo ordenado ascendentemente
 */
function ordenarArregloAscendente(arreglo) {
    if (!Array.isArray(arreglo)) {
        throw new Error("El parámetro debe ser un arreglo");
    }
    
    // Crear una copia del arreglo para no modificar el original
    const arregloOrdenado = [...arreglo];
    
    // Implementación del algoritmo de ordenamiento burbuja
    for (let i = 0; i < arregloOrdenado.length - 1; i++) {
        for (let j = 0; j < arregloOrdenado.length - i - 1; j++) {
            if (arregloOrdenado[j] > arregloOrdenado[j + 1]) {
                // Intercambiar elementos
                const temp = arregloOrdenado[j];
                arregloOrdenado[j] = arregloOrdenado[j + 1];
                arregloOrdenado[j + 1] = temp;
            }
        }
    }
    
    return arregloOrdenado;
}

// ===== FUNCIONES AUXILIARES PARA LA INTERFAZ =====

/**
 * Función auxiliar para mostrar arreglos de forma visual
 * @param {Array} arreglo - Arreglo a mostrar
 * @returns {string} HTML con la representación visual del arreglo
 */
function mostrarArregloVisual(arreglo) {
    if (!Array.isArray(arreglo)) return '';
    
    const items = arreglo.map(item => 
        `<span class="array-item">${item}</span>`
    ).join('');
    
    return `<div class="array-visual">${items}</div>`;
}

/**
 * Función auxiliar para validar entrada numérica
 * @param {string} valor - Valor a validar
 * @returns {number} Número válido o lanza error
 */
function validarNumero(valor) {
    const numero = Number(valor);
    if (isNaN(numero)) {
        throw new Error("Debe ingresar un número válido");
    }
    return numero;
}

/**
 * Función auxiliar para parsear arreglo desde string
 * @param {string} texto - Texto con números separados por comas
 * @returns {Array} Arreglo de números
 */
function parsearArreglo(texto) {
    if (!texto.trim()) {
        throw new Error("Debe ingresar al menos un número");
    }
    
    const arreglo = texto.split(',').map(item => {
        const numero = Number(item.trim());
        if (isNaN(numero)) {
            throw new Error(`"${item.trim()}" no es un número válido`);
        }
        return numero;
    });
    
    return arreglo;
}

/**
 * Función auxiliar para generar números aleatorios
 * @param {number} cantidad - Cantidad de números a generar
 * @param {number} min - Valor mínimo (por defecto 1)
 * @param {number} max - Valor máximo (por defecto 100)
 * @returns {Array} Arreglo con números aleatorios
 */
function generarNumerosAleatoriosArray(cantidad, min = 1, max = 100) {
    const numeros = [];
    for (let i = 0; i < cantidad; i++) {
        const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        numeros.push(numeroAleatorio);
    }
    return numeros;
}

// ===== FUNCIONES DE LA INTERFAZ WEB =====

/**
 * Función conectada al botón del ejercicio 1
 */
function crearArregloDobles() {
    const resultadoDiv = document.getElementById('resultado1');
    
    try {
        const tamano = validarNumero(document.getElementById('tamano').value);
        
        if (tamano < 1 || tamano > 20) {
            throw new Error("El tamaño debe estar entre 1 y 20");
        }
        
        const arreglo = crearArregloConDobles(tamano);
        
        resultadoDiv.className = 'result success';
        resultadoDiv.innerHTML = `
            <div>
                <strong>Arreglo generado (tamaño ${tamano}):</strong><br>
                ${mostrarArregloVisual(arreglo)}
                <br><strong>Valores:</strong> [${arreglo.join(', ')}]
            </div>
        `;
    } catch (error) {
        resultadoDiv.className = 'result error';
        resultadoDiv.innerHTML = `<strong>Error:</strong> ${error.message}`;
    }
}

/**
 * Función conectada al botón del ejercicio 2
 */
function encontrarMayor() {
    const resultadoDiv = document.getElementById('resultado2');
    
    try {
        const textoArreglo = document.getElementById('arreglo10').value;
        const arreglo = parsearArreglo(textoArreglo);
        
        if (arreglo.length !== 10) {
            throw new Error("El arreglo debe tener exactamente 10 elementos");
        }
        
        const mayor = encontrarMayorNumero(arreglo);
        
        resultadoDiv.className = 'result success';
        resultadoDiv.innerHTML = `
            <div>
                <strong>Arreglo analizado:</strong><br>
                ${mostrarArregloVisual(arreglo)}
                <br><strong>Mayor número encontrado:</strong> <span class="array-item highlight">${mayor}</span>
            </div>
        `;
    } catch (error) {
        resultadoDiv.className = 'result error';
        resultadoDiv.innerHTML = `<strong>Error:</strong> ${error.message}`;
    }
}

/**
 * Función conectada al botón para generar números aleatorios del ejercicio 2
 */
function generarNumerosAleatorios() {
    const inputArreglo = document.getElementById('arreglo10');
    const resultadoDiv = document.getElementById('resultado2');
    
    try {
        // Generar 10 números aleatorios entre 1 y 100
        const numerosAleatorios = generarNumerosAleatoriosArray(10, 1, 100);
        
        // Colocar los números en el input
        inputArreglo.value = numerosAleatorios.join(',');
        
        // Limpiar el resultado anterior
        resultadoDiv.className = 'result success';
        resultadoDiv.innerHTML = `
            <div>
                <strong>🎲 Números aleatorios generados:</strong><br>
                ${mostrarArregloVisual(numerosAleatorios)}
                <br><em>Ahora puedes hacer clic en "Encontrar Mayor" para encontrar el número más grande.</em>
            </div>
        `;
        
        // Agregar un pequeño efecto visual
        inputArreglo.style.background = '#e6fffa';
        setTimeout(() => {
            inputArreglo.style.background = '';
        }, 1000);
        
    } catch (error) {
        resultadoDiv.className = 'result error';
        resultadoDiv.innerHTML = `<strong>Error:</strong> ${error.message}`;
    }
}

/**
 * Función conectada al botón del ejercicio 3
 */
function obtenerDia() {
    const resultadoDiv = document.getElementById('resultado3');
    
    try {
        const numeroDia = validarNumero(document.getElementById('numeroDia').value);
        const dia = obtenerDiaSemana(numeroDia);
        
        resultadoDiv.className = 'result success';
        resultadoDiv.innerHTML = `
            <div>
                <strong>Número:</strong> ${numeroDia} → <strong>Día:</strong> <span class="array-item highlight">${dia}</span>
            </div>
        `;
    } catch (error) {
        resultadoDiv.className = 'result error';
        resultadoDiv.innerHTML = `<strong>Error:</strong> ${error.message}`;
    }
}

/**
 * Función conectada al botón del ejercicio 4
 */
function buscarElemento() {
    const resultadoDiv = document.getElementById('resultado4');
    
    try {
        const textoArreglo = document.getElementById('arregloBusqueda').value;
        const arreglo = parsearArreglo(textoArreglo);
        const elemento = validarNumero(document.getElementById('elementoBuscar').value);
        
        const resultado = buscarElementoEnArreglo(arreglo, elemento);
        
        resultadoDiv.className = 'result success';
        
        if (resultado.encontrado) {
            resultadoDiv.innerHTML = `
                <div>
                    <strong>Arreglo:</strong><br>
                    ${mostrarArregloVisual(arreglo)}
                    <br><strong>Elemento ${elemento} encontrado!</strong>
                    <br><strong>Posiciones:</strong> ${resultado.posiciones.join(', ')}
                    <br><strong>Cantidad de veces:</strong> ${resultado.cantidadEncontrada}
                </div>
            `;
        } else {
            resultadoDiv.innerHTML = `
                <div>
                    <strong>Arreglo:</strong><br>
                    ${mostrarArregloVisual(arreglo)}
                    <br><strong>Elemento ${elemento} NO encontrado en el arreglo</strong>
                </div>
            `;
        }
    } catch (error) {
        resultadoDiv.className = 'result error';
        resultadoDiv.innerHTML = `<strong>Error:</strong> ${error.message}`;
    }
}

/**
 * Función conectada al botón para generar arreglo aleatorio del ejercicio 4
 */
function generarArregloAleatorio() {
    const inputArreglo = document.getElementById('arregloBusqueda');
    const resultadoDiv = document.getElementById('resultado4');
    
    try {
        // Generar un tamaño aleatorio entre 5 y 100
        const tamanoAleatorio = Math.floor(Math.random() * 96) + 5; // 5 a 100
        
        // Generar números aleatorios entre 1 y 50 para el arreglo
        const arregloAleatorio = generarNumerosAleatoriosArray(tamanoAleatorio, 1, 50);
        
        // Colocar los números en el input
        inputArreglo.value = arregloAleatorio.join(',');
        
        // Generar un elemento aleatorio que probablemente esté en el arreglo
        const elementoSugerido = arregloAleatorio[Math.floor(Math.random() * arregloAleatorio.length)];
        document.getElementById('elementoBuscar').value = elementoSugerido;
        
        // Limpiar el resultado anterior y mostrar información
        resultadoDiv.className = 'result success';
        resultadoDiv.innerHTML = `
            <div>
                <strong>🎲 Arreglo aleatorio generado!</strong><br>
                <strong>Tamaño:</strong> ${tamanoAleatorio} elementos<br>
                <strong>Rango de valores:</strong> 1 a 50<br>
                ${mostrarArregloVisual(arregloAleatorio)}
                <br><em>Se sugiere buscar el elemento <strong>${elementoSugerido}</strong> (uno que está en el arreglo)</em>
                <br><em>También puedes cambiar el número a buscar y hacer clic en "Buscar".</em>
            </div>
        `;
        
        // Agregar efectos visuales
        inputArreglo.style.background = '#f0fff4';
        document.getElementById('elementoBuscar').style.background = '#e6fffa';
        
        setTimeout(() => {
            inputArreglo.style.background = '';
            document.getElementById('elementoBuscar').style.background = '';
        }, 1500);
        
    } catch (error) {
        resultadoDiv.className = 'result error';
        resultadoDiv.innerHTML = `<strong>Error:</strong> ${error.message}`;
    }
}

/**
 * Función conectada al botón del ejercicio 5
 */
function ordenarArreglo() {
    const resultadoDiv = document.getElementById('resultado5');
    
    try {
        const textoArreglo = document.getElementById('arregloDesordenado').value;
        const arregloOriginal = parsearArreglo(textoArreglo);
        const arregloOrdenado = ordenarArregloAscendente(arregloOriginal);
        
        resultadoDiv.className = 'result success';
        resultadoDiv.innerHTML = `
            <div>
                <strong>Arreglo original:</strong><br>
                ${mostrarArregloVisual(arregloOriginal)}
                <br><strong>Arreglo ordenado:</strong><br>
                ${mostrarArregloVisual(arregloOrdenado)}
                <br><strong>Resultado:</strong> [${arregloOrdenado.join(', ')}]
            </div>
        `;
    } catch (error) {
        resultadoDiv.className = 'result error';
        resultadoDiv.innerHTML = `<strong>Error:</strong> ${error.message}`;
    }
}

/**
 * Función para ejecutar todas las pruebas automáticamente
 */
function ejecutarPruebas() {
    const resultadoDiv = document.getElementById('resultadoPruebas');
    
    try {
        let resultados = '<div><h3>🧪 Resultados de las Pruebas:</h3>';
        
        // Prueba 1: Arreglo con dobles
        const arreglo1 = crearArregloConDobles(6);
        resultados += `<p><strong>✅ Ejercicio 1:</strong> Arreglo de 6 elementos → [${arreglo1.join(', ')}]</p>`;
        
        // Prueba 2: Mayor número
        const arregloTest = [3, 7, 2, 9, 1, 8, 5, 4, 6, 10];
        const mayor = encontrarMayorNumero(arregloTest);
        resultados += `<p><strong>✅ Ejercicio 2:</strong> Mayor de [${arregloTest.join(', ')}] → ${mayor}</p>`;
        
        // Prueba 3: Día de la semana
        const dia = obtenerDiaSemana(5);
        resultados += `<p><strong>✅ Ejercicio 3:</strong> Día 5 → ${dia}</p>`;
        
        // Prueba 4: Buscar elemento
        const busqueda = buscarElementoEnArreglo([1, 5, 3, 5, 9, 5], 5);
        resultados += `<p><strong>✅ Ejercicio 4:</strong> Buscar 5 en [1,5,3,5,9,5] → Encontrado ${busqueda.cantidadEncontrada} veces en posiciones: ${busqueda.posiciones.join(', ')}</p>`;
        
        // Prueba 5: Ordenar arreglo
        const arregloDesordenado = [9, 3, 7, 1, 5];
        const arregloOrdenado = ordenarArregloAscendente(arregloDesordenado);
        resultados += `<p><strong>✅ Ejercicio 5:</strong> Ordenar [${arregloDesordenado.join(', ')}] → [${arregloOrdenado.join(', ')}]</p>`;
        
        resultados += '</div>';
        
        resultadoDiv.className = 'result success';
        resultadoDiv.innerHTML = resultados;
    } catch (error) {
        resultadoDiv.className = 'result error';
        resultadoDiv.innerHTML = `<strong>Error en las pruebas:</strong> ${error.message}`;
    }
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Ejercicios de Arreglos - JavaScript cargado correctamente');
    
    // Llenar algunos campos con valores por defecto
    document.getElementById('arreglo10').value = '3,7,2,9,1,8,5,4,6,10';
    document.getElementById('arregloBusqueda').value = '1,5,3,5,9,2,8,4,7,5';
    document.getElementById('arregloDesordenado').value = '9,3,7,1,5,2,8,4,6';
});