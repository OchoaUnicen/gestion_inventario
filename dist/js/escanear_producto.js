document.addEventListener("DOMContentLoaded", function() {

    let input_precio_del_producto_a_agregar_nuevo = document.getElementById("input_precio_del_producto_a_agregar_nuevo");
    let total_con_unidades = document.getElementById("total_con_unidades_nuevo_producto");
    let precio_por_unidad = document.getElementById("precio_por_unidad");
    let cantidad = document.getElementById("cantidad_de_unidades_seleccionada");

    function actualizarPrecios() {
        let precio = parseFloat(input_precio_del_producto_a_agregar_nuevo.value) || 0;
        let unidades = parseInt(cantidad.value) || 1;

        precio_por_unidad.textContent = precio.toFixed(2);
        total_con_unidades.textContent = (precio * unidades).toFixed(2);
    }

    // Se ejecuta cada vez que cambia el valor del input
    input_precio_del_producto_a_agregar_nuevo.addEventListener("input", actualizarPrecios);
    cantidad.addEventListener("input", actualizarPrecios);
    



    const contenedor = document.getElementById("contenedor_de_cantidad_de_unidades");
    const labels = contenedor.querySelectorAll("label");

    const cantidadSeleccionada = document.getElementById("cantidad_de_unidades_seleccionada");
    const inputPrecio = document.getElementById("input_precio_del_producto_a_agregar_nuevo");
    const totalConUnidades = document.getElementById("total_con_unidades_nuevo_producto");
    const precioPorUnidad = document.getElementById("precio_por_unidad");

    // 🔁 FUNCIÓN CENTRAL
    function actualizarTotal() {
        const precio = parseFloat(inputPrecio.value) || 0;
        const cantidad = parseInt(cantidadSeleccionada.textContent) || 1;
        
        const total = precio * cantidad;

        // Actualizar DOM
        totalConUnidades.textContent = total.toLocaleString('es-CL', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        precioPorUnidad.textContent = precio.toLocaleString('es-CL', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    }

    // Inicializa total y precio
    actualizarTotal();

    labels.forEach(label => {
        label.addEventListener("click", function (e) {

            // 🎨 Manejo visual
            labels.forEach(l => l.classList.remove("bg-info"));
            this.classList.add("bg-info");

            const span = this.querySelector("span");
            const valor = span.dataset.valor || span.textContent.trim();

            // ✏️ ELEGIR OTRA CANTIDAD (X)
            if (valor === "X") {
                e.preventDefault();

                if (span.querySelector("input")) return;

                const input = document.createElement("input");
                input.type = "number";
                input.min = "1";
                input.value = "";
                input.className = "form-control text-center";
                input.style.width = "60px";

                span.textContent = "";
                span.appendChild(input);
                input.focus();

                // 🔴 Tiempo real
                input.addEventListener("input", () => {
                    cantidadSeleccionada.textContent = input.value || 1;
                    actualizarTotal();
                });

                // ⏎ ENTER
                input.addEventListener("keydown", (ev) => {
                    if (ev.key === "Enter") {
                        input.blur();
                    }
                });

                // ✔ Confirmar valor
                input.addEventListener("blur", () => {
                    const valorFinal = input.value || 1;
                    span.textContent = valorFinal;
                    span.dataset.valor = "X";
                    cantidadSeleccionada.textContent = valorFinal;
                    actualizarTotal();
                });

            } else {
                // 🔢 1 / 5 / 10
                cantidadSeleccionada.textContent = valor;
                actualizarTotal();
            }
        });
    });

    // 💲 Cambio de precio
    inputPrecio.addEventListener("input", actualizarTotal);







    const contenedor_realizar_movimiento = document.getElementById("contenedor_realizar_movimiento");
    const labels_de_movimiento = contenedor_realizar_movimiento.querySelectorAll("label");
    const input_movimiento = document.getElementById("movimiento_a_realizar");

    labels_de_movimiento.forEach(label => {
    label.addEventListener("click", () => {
        // quitar bg-info a todos
        labels_de_movimiento.forEach(l => l.classList.remove("bg-info"));

        // agregar bg-info al clickeado
        label.classList.add("bg-info");

        // actualizar el input oculto con el texto del label
        const texto = label.querySelector("span").innerText;
        input_movimiento.value = texto;
        });
    });






        //funcionalidad cantidad de unidades para agregar a stock
        const contenedorCantidadProductos = document.getElementById("contenedor_cantidad_unidades");
        const labelsCantidadProductos = contenedorCantidadProductos.querySelectorAll("label");

        const cantidadProductoSeleccionada = document.getElementById("cantidad_de_unidades_seleccionada_en_producto_existente");
        const inputPrecioProductoAgregar = document.getElementById("input_precio_del_producto_a_agregar");
        const totalProductoConCantidad = document.getElementById("total_con_unidades");

        // 🔁 FUNCIÓN CENTRAL: calcular total
        function actualizarTotalProducto() {
            const precio = parseFloat(inputPrecioProductoAgregar.value) || 0;
            const cantidad = parseInt(cantidadProductoSeleccionada.textContent) || 1;
            totalProductoConCantidad.textContent = `$${(precio * cantidad).toLocaleString('es-CL')},00`;
        }

        labelsCantidadProductos.forEach(label => {
            label.addEventListener("click", function (e) {

                // 🎨 Manejo visual
                labelsCantidadProductos.forEach(l => l.classList.remove("bg-info"));
                this.classList.add("bg-info");

                const span = this.querySelector("span");
                const valor = span.dataset.valor || span.textContent.trim();

                // ✏️ ELEGIR OTRA CANTIDAD (X)
                if (valor === "X") {
                    e.preventDefault();

                    if (span.querySelector("input")) return;

                    const input = document.createElement("input");
                    input.type = "number";
                    input.min = "1";
                    input.value = "";
                    input.className = "form-control text-center";
                    input.style.width = "60px";

                    span.textContent = "";
                    span.appendChild(input);
                    input.focus();

                    // 🔴 Tiempo real
                    input.addEventListener("input", () => {
                        cantidadProductoSeleccionada.textContent = input.value || 1;
                        actualizarTotalProducto();
                    });

                    // ⏎ ENTER
                    input.addEventListener("keydown", (ev) => {
                        if (ev.key === "Enter") {
                            input.blur();
                        }
                    });

                    // ✔ Confirmar valor
                    input.addEventListener("blur", () => {
                        const valorFinal = input.value || 1;
                        span.textContent = valorFinal;
                        span.dataset.valor = "X";
                        cantidadProductoSeleccionada.textContent = valorFinal;
                        actualizarTotalProducto();
                    });

                } else {
                    // 🔢 1 / 5 / 10
                    cantidadProductoSeleccionada.textContent = valor;
                    actualizarTotalProducto();
                }
            });
        });

        // 💲 Cambio de precio
        inputPrecioProductoAgregar.addEventListener("input", actualizarTotalProducto);













        // JSON de productos para pruebas
        const productos = [
            {
                "codigo_de_barras": "1234567890123",
                "id_producto": 1,
                "nombre": "Producto Ejemplo 1",
                "precio": 100,
                "stock_actual": 50,
                "stock_minimo": 10,
                "categoria": "Categoría 1",
                "img_url": "imagen1.jpg"
            },
            {
                "codigo_de_barras": "9876543210987",
                "id_producto": 2,
                "nombre": "Producto Ejemplo 2",
                "precio": 200,
                "stock_actual": 30,
                "stock_minimo": 5,
                "categoria": "Categoría 2",
                "img_url": "imagen2.jpg"
            }
        ];

        // Obtener elementos
        const input = document.getElementById('input_codigo_de_barras_ingresado');
        const cartaProducto = document.getElementById('carta_de_producto_escaneado');
        const cartaNoEncontrado = document.getElementById('carta_contenedora_de_no_se_encontro_producto');

        // Ocultar ambas cartas inicialmente
        cartaProducto.style.display = 'none';
        cartaNoEncontrado.style.display = 'none';

        let timeoutId = null;

        // Función para buscar producto
        function buscarProducto(codigo) {
            return productos.find(p => p.codigo_de_barras === codigo.trim());
        }

        // Función principal
        function procesarBusqueda() {
            const codigo = input.value.trim();
            
            // Ocultar ambas cartas primero
            cartaProducto.style.display = 'none';
            cartaNoEncontrado.style.display = 'none';
            
            if (codigo) {
                const producto = buscarProducto(codigo);
                
                if (producto) {
                    cartaProducto.style.display = 'block';
                } else {
                    cartaNoEncontrado.style.display = 'block';
                }
            }
        }

        // Event listener para el input
        input.addEventListener('input', function() {
            if (timeoutId) clearTimeout(timeoutId);
            
            timeoutId = setTimeout(procesarBusqueda, 1000);
        });



        // Obtener elementos adicionales
        const cartaEscaneo = document.getElementById('carta_de_escaneo');
        const botonAgregar = document.getElementById('boton_agregar_nuevo_producto');
        const input_codigo_de_barras_ingresado_para_agregar_nuevo = document.getElementById('input_codigo_de_barras_ingresado_para_agregar_nuevo');
        

        // Modificar la función procesarBusqueda
        function procesarBusqueda() {
            const codigo = input.value.trim();
            
            // Ocultar carta de escaneo y botón agregar
            cartaEscaneo.style.display = 'none';
            botonAgregar.style.display = 'none';
            
            // Ocultar ambas cartas de resultados
            cartaProducto.style.display = 'none';
            cartaNoEncontrado.style.display = 'none';
            
            if (codigo) {
                const producto = buscarProducto(codigo);
                
                if (producto) {
                    cartaProducto.style.display = 'block';
                } else {
                    input_codigo_de_barras_ingresado_para_agregar_nuevo.value = input.value;
                    cartaNoEncontrado.style.display = 'block';                    
                }
            }
        }

        // Función para volver a escanear
        function volverAEscanear() {
            // Mostrar carta de escaneo y botón agregar
            cartaEscaneo.style.display = 'block';
            // botonAgregar.style.display = 'block';
            
            // Ocultar cartas de resultados
            cartaProducto.style.display = 'none';
            cartaNoEncontrado.style.display = 'none';
            
            // Limpiar input y enfocar
            input.value = '';
            input.focus();
        }

        // Agregar event listeners a botones con clase boton_volver_a_escanear
        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('boton_volver_a_escanear')) {
                volverAEscanear();
            }
        });











});