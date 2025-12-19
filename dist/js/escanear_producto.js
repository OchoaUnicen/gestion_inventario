document.addEventListener("DOMContentLoaded", function() {

    let input_precio_del_producto_a_agregar = document.getElementById("input_precio_del_producto_a_agregar");
    let total_con_unidades = document.getElementById("total_con_unidades");
    let precio_por_unidad = document.getElementById("precio_por_unidad");
    let cantidad = document.getElementById("cantidad_de_unidades_seleccionada");

    function actualizarPrecios() {
        let precio = parseFloat(input_precio_del_producto_a_agregar.value) || 0;
        let unidades = parseInt(cantidad.value) || 1;

        precio_por_unidad.textContent = precio.toFixed(2);
        total_con_unidades.textContent = (precio * unidades).toFixed(2);
    }

    // Se ejecuta cada vez que cambia el valor del input
    input_precio_del_producto_a_agregar.addEventListener("input", actualizarPrecios);
    cantidad.addEventListener("input", actualizarPrecios);
    




    const contenedor = document.getElementById("contenedor_de_cantidad_de_unidades");
    const labels = contenedor.querySelectorAll("label");

    const cantidadSeleccionada = document.getElementById("cantidad_de_unidades_seleccionada");
    const inputPrecio = document.getElementById("input_precio_del_producto_a_agregar");
    const totalConUnidades = document.getElementById("total_con_unidades");

    // 🔁 FUNCIÓN CENTRAL
    function actualizarTotal() {
        const precio = parseFloat(inputPrecio.value) || 0;
        const cantidad = parseInt(cantidadSeleccionada.textContent) || 1;
        totalConUnidades.textContent = (precio * cantidad).toFixed(2);
    }

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
                input.min = "0";
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











});