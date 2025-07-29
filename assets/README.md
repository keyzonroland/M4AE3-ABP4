# Tarea 3 - Módulo 4 - Bootcamp UNAB Frontend

## Descripción del Proyecto

Este proyecto implementa cinco ejercicios de manipulación de arreglos en JavaScript como parte de la Tarea 3 del Módulo 4 del Bootcamp de Frontend de la Universidad Andrés Bello (UNAB).

## Ejercicios Implementados

### Ejercicio 1: Crear Arreglo con Dobles
Función que dado un número n crea un arreglo de largo n, donde en cada posición del arreglo está el doble del anterior. El primer elemento del arreglo es 1.

**Funcionalidad:**
- Recibe un parámetro n (tamaño del arreglo)
- Genera un arreglo donde cada elemento es el doble del anterior
- El primer elemento siempre es 1
- Ejemplo: n=5 genera [1, 2, 4, 8, 16]

### Ejercicio 2: Encontrar Mayor Número
Función que dado un arreglo de números de largo 10 permite obtener el mayor número contenido en el arreglo.

**Funcionalidad:**
- Valida que el arreglo tenga exactamente 10 elementos
- Encuentra y retorna el mayor número del arreglo
- Incluye botón para generar 10 números aleatorios automáticamente
- Muestra el resultado de forma visual

### Ejercicio 3: Obtener Día de la Semana
Función que permite obtener un día de la semana en particular si se recibe su número correspondiente (1 = Lunes, 7 = Domingo).

**Funcionalidad:**
- Mapea números del 1 al 7 con los días de la semana
- Valida que el número esté en el rango correcto
- Retorna el nombre del día correspondiente

### Ejercicio 4: Buscar Elemento en Arreglo
Función que permite buscar un elemento contenido en el arreglo. El arreglo solo contiene números y tiene un largo máximo de 100.

**Funcionalidad:**
- Busca un elemento específico en un arreglo de números
- Valida que el arreglo no exceda 100 elementos
- Retorna las posiciones donde se encuentra el elemento
- Indica la cantidad de veces que aparece el elemento
- Incluye botón para generar arreglo aleatorio de prueba

### Ejercicio 5: Ordenar Arreglo Ascendentemente
Programa que dado un arreglo de números desordenados los ordena ascendentemente.

**Funcionalidad:**
- Implementa algoritmo de ordenamiento burbuja
- No modifica el arreglo original
- Retorna un nuevo arreglo ordenado de menor a mayor
- Muestra tanto el arreglo original como el ordenado

## Características del Frontend

### Diseño y Estilo
- Interfaz web moderna con gradientes y efectos visuales
- Diseño responsive que funciona en dispositivos móviles
- Animaciones y transiciones suaves
- Visualización gráfica de arreglos con elementos coloridos

### Funcionalidades Adicionales
- Validación completa de entradas del usuario
- Mensajes de error descriptivos y claros
- Botones para generar datos aleatorios de prueba
- Efectos visuales en campos de entrada
- Limpieza automática de resultados anteriores

### Tecnologías Utilizadas
- HTML5 semántico
- CSS3 con gradientes, flexbox y animaciones
- JavaScript vanilla (ES6+)
- Diseño responsive sin frameworks externos

## Estructura del Proyecto

```
assets/
├── index.html          # Página principal con la interfaz
├── css/
│   └── style.css      # Estilos CSS del proyecto
└── script.js/
    └── ejercicios.js  # Funciones JavaScript implementadas
```

## Funciones JavaScript Principales

1. `crearArregloConDobles(n)` - Genera arreglo con secuencia de dobles
2. `encontrarMayorNumero(arreglo)` - Encuentra el mayor número en arreglo de 10 elementos
3. `obtenerDiaSemana(numeroDia)` - Convierte número a día de la semana
4. `buscarElementoEnArreglo(arreglo, elemento)` - Busca elemento y retorna posiciones
5. `ordenarArregloAscendente(arreglo)` - Ordena arreglo usando algoritmo burbuja

## Funciones Auxiliares

- `mostrarArregloVisual(arreglo)` - Renderiza arreglos de forma gráfica
- `validarNumero(valor)` - Valida entrada numérica
- `parsearArreglo(texto)` - Convierte texto a arreglo de números
- `generarNumerosAleatoriosArray(cantidad, min, max)` - Genera números aleatorios

## Validaciones Implementadas

- Verificación de tipos de datos de entrada
- Validación de rangos numéricos
- Control de tamaños máximos de arreglos
- Manejo de errores con mensajes informativos
- Prevención de entradas vacías o inválidas

## Uso del Proyecto

1. Abrir el archivo `assets/index.html` en un navegador web
2. Interactuar con cada ejercicio usando los controles proporcionados
3. Utilizar los botones de generación aleatoria para pruebas rápidas
4. Observar los resultados en las secciones de respuesta de cada ejercicio

Este proyecto demuestra el manejo de arreglos en JavaScript, implementación de algoritmos básicos, validación de datos y creación de interfaces web interactivas.
