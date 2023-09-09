const vuelos = [
    { origen: 'Guadalajara', destino: 'Los Ángeles', fecha: '2023-11-21', asientosDisponibles: 50 },
    { origen: 'Guadalajara', destino: 'Miami', fecha: '2023-11-21', asientosDisponibles: 30 },
    { origen: 'Guadalajara', destino: 'Ciudad de Mexico', fecha: '2023-11-21', asientosDisponibles: 20 },
    { origen: 'Guadalajara', destino: 'Londres', fecha: '2023-11-21', asientosDisponibles: 25 },
    { origen: 'Guadalajara', destino: 'Cancun', fecha: '2023-11-21', asientosDisponibles: 15 },
    { origen: 'Guadalajara', destino: 'Madrid', fecha: '2023-11-21', asientosDisponibles: 0 },
    { origen: 'Guadalajara', destino: 'Tokio', fecha: '2023-11-21', asientosDisponibles: 40 },
    { origen: 'Guadalajara', destino: 'Nueva York', fecha: '2023-11-21', asientosDisponibles: 10 },
    { origen: 'Guadalajara', destino: 'Mazatlan', fecha: '2023-11-21', asientosDisponibles: 20 },
];
const formulario = document.getElementById('formulario');
const resultadosDiv = document.getElementById('resultados');
const reservasDiv = document.getElementById('reservas');
const reservadeVuelo = JSON.parse(localStorage.getItem('reservas')) || [];

function buscarVuelos(event) {
    event.preventDefault(); 

    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    const fecha = document.getElementById('fecha').value;

    const resultados = vuelos.filter(vuelo =>
        vuelo.origen.toLowerCase() === origen.toLowerCase() &&
        vuelo.destino.toLowerCase() === destino.toLowerCase() &&
        vuelo.fecha === fecha
    );
    mostrarResultados(resultados);
}
function mostrarResultados(resultados) {
    resultadosDiv.innerHTML = '';

    if (resultados.length === 0) {
        resultadosDiv.textContent = 'No se encontraron vuelos disponibles.';
    } else {
        resultados.forEach(vuelo => {
            const vueloDiv = document.createElement('div');
            vueloDiv.innerHTML = `
                <h2>Vuelo de ${vuelo.origen} a ${vuelo.destino}</h2>
                <p>Fecha de salida: ${vuelo.fecha}</p>
                <p>Asientos disponibles: ${vuelo.asientosDisponibles}</p>
                <button onclick="reservarVuelo(${vuelo.id})">Reservar</button>
            `;
            resultadosDiv.appendChild(vueloDiv);
        });
    }
}
function mostrarReservas() {
    reservasDiv.innerHTML = '';

    if (reservadeVuelo.length === 0) {
        reservasDiv.textContent = 'No has realizado ninguna reserva.';
    } else {
        reservadeVuelo.forEach(reserva => {
            const reservaDiv = document.createElement('div');
            reservaDiv.innerHTML = `
                <h2>Reserva de Vuelo</h2>
                <p>Vuelo de ${reserva.origen} a ${reserva.destino}</p>
                <p>Fecha de salida: ${reserva.fecha}</p>
            `;
            reservasDiv.appendChild(reservaDiv);
        });
    }
}
function reservarVuelo(idVuelo) {
    const vuelo = vuelos.find(v => v.id === idVuelo);

    if (vuelo) {
        if (vuelo.asientosDisponibles > 0) {
            vuelo.asientosDisponibles--;
            const reserva = { id: vuelo.id, origen: vuelo.origen, destino: vuelo.destino, fecha: vuelo.fecha };
            reservadeVuelo.push(reserva);
            localStorage.setItem('reservas', JSON.stringify(reservadeVuelo));
            alert('Vuelo reservado con éxito.');
            mostrarResultados(vuelos);
        } else {
            alert('Lo sentimos, no quedan asientos disponibles para este vuelo.');
        }
    }
}
formulario.addEventListener('submit', buscarVuelos);