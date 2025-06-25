"use strict";

const itemData = {
    item1: {
        name: 'Finalista 01',
        image: 'https://picsum.photos/seed/animal/250/200',
        photographer: 'John Doe',
        description: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        score: 42
    },
    item2: {
        name: 'Finalista 2',
        image: 'https://picsum.photos/seed/beach/250/200',
        photographer: 'Jane Smith',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        score: 84
    },
    item3: {
        name: 'Finalista 3',
        image: 'https://picsum.photos/seed/mountain/250/200',
        photographer: 'Alice Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        score: 36
    }
};

// Llenar el select con los nombres de los ítems al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    const select = document.getElementById('items');
    // Limpiar opciones existentes excepto la primera
    while (select.options.length > 1) {
        select.remove(1);
    }
    Object.entries(itemData).forEach(([key, item]) => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = item.name;
        select.appendChild(option);
    });

    // Función para mostrar los datos del ítem seleccionado
    function mostrarItem(key) {
        const item = itemData[key];
        if (!item) return;
        document.getElementById('displayImage').src = item.image;
        document.getElementById('photographer').value = item.photographer;
        document.getElementById('description').value = item.description;
        document.getElementById('score').value = item.score;
    }

    // Manejar cambio de selección
    select.addEventListener('change', function () {
        mostrarItem(this.value);
    });

    // Manejar botones de voto
    document.getElementById('increaseScore').addEventListener('click', function () {
        const key = select.value;
        if (itemData[key]) {
            itemData[key].score++;
            document.getElementById('score').value = itemData[key].score;
        }
    });
    document.getElementById('decreaseScore').addEventListener('click', function () {
        const key = select.value;
        if (itemData[key]) {
            itemData[key].score--;
            document.getElementById('score').value = itemData[key].score;
        }
    });

    // Seleccionar el primer ítem por defecto si existe
    if (select.options.length > 1) {
        select.selectedIndex = 1;
        mostrarItem(select.value);
    }
});