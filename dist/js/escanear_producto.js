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






        //funcionalidad cantidad de uniades para agregar a stock
        const contenedorCantidadProductos = document.getElementById("contenedor_cantidad_unidades");
        const labelsCantidadProductos = contenedorCantidadProductos.querySelectorAll("label");

        const cantidadProductoSeleccionada = document.getElementById("cantidad_de_unidades_seleccionada");
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






});