const equiposURL = 'https://www.balldontlie.io/api/v1/teams';
const jugadoresURL = 'https://www.balldontlie.io/api/v1/players';

const equiposList = document.getElementById('equipos');
const jugadoresList = document.getElementById('jugadores');

async function cargarEquipos() {
  try {
    const response = await fetch(equiposURL);
    const data = await response.json();

    data.data.forEach((equipo) => {
      const equipoItem = document.createElement('li');
      equipoItem.textContent = equipo.full_name;
      equipoItem.addEventListener('click', () => cargarJugadoresPorEquipo(equipo.id));
      equiposList.appendChild(equipoItem);
    });
  } catch (error) {
    console.error('Error al cargar equipos:', error);
  }
}

async function cargarJugadoresPorEquipo(equipoId) {
  try {
    jugadoresList.innerHTML = '';

    const response = await fetch(`${jugadoresURL}?team_ids[]=${equipoId}`);
    const data = await response.json();

    data.data.forEach((jugador) => {
      const jugadorItem = document.createElement('li');
      jugadorItem.textContent = jugador.first_name + ' ' + jugador.last_name;
      jugadoresList.appendChild(jugadorItem);
    });
  } catch (error) {
    console.error('Error al cargar jugadores:', error);
  }
}

cargarEquipos();
