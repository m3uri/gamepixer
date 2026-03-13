const juegos = [
  {nombre:"Resident Evil 4 Remake", imagen:"imagen/Resident Evil 4 Remake.jpg", descripcion:"Survival horror clásico remasterizado", link:"https://gofile.io/d/7zPGEW", categoria:"Horror"},
  {nombre:"DOOM 3 BFG Edition", imagen:"imagen/doom 3.jpg", descripcion:"Shooter clásico contra demonios", link:"https://www.mediafire.com/file/buujd9rqsb7e8dl/Doom_3_BFG_EDITION_-_RanDyso.rar/file", categoria:"Shooter"},
  {nombre:"DOOM 1", imagen:"imagen/doom 1.jpg", descripcion:"El shooter clásico que inició todo", link:"https://www.mediafire.com/file/7cjsrg2r5k3xvma/Doom_1.rar/file", categoria:"Shooter"},
  {nombre:"DOOM 2", imagen:"imagen/doom 2.jpg", descripcion:"La secuela del legendario DOOM", link:"https://www.mediafire.com/file/2aodacdw733qvou/Doom_2.rar/file", categoria:"Shooter"},
  {nombre:"DOOM 1 y 2", imagen:"imagen/doom 1 y 2.jpg", descripcion:"Colección clásica de DOOM", link:"https://gofile.io/d/fPKMxI", categoria:"Shooter"},
  {nombre:"Age of Empires II", imagen:"imagen/age of empire 2.jpg", descripcion:"Estrategia histórica en tiempo real", link:"https://www.mediafire.com/file/c32ar38s7r1mndc/A.O.E_2.rar/file", categoria:"Estrategia"},
  {nombre:"Mortal Kombat 1", imagen:"imagen/mk 1.jpg", descripcion:"Clásico juego de pelea", link:"https://www.mediafire.com/file/uuafy6p45zyuf50/MORTAL_KOMBAT_1.rar/file", categoria:"Pelea"},
  {nombre:"Mortal Kombat 2", imagen:"imagen/mk 2.jpg", descripcion:"Continuación del clásico MK", link:"https://www.mediafire.com/file/wenqun0x2u6hn5w/MORTAL_KOMBAT_2.rar/file", categoria:"Pelea"},
  {nombre:"Mortal Kombat 3", imagen:"imagen/mk 3.jpg", descripcion:"Uno de los MK más famosos", link:"https://www.mediafire.com/file/0l86cm60s8a2ce8/MORTAL_KOMBAT_3.rar/file", categoria:"Pelea"},
  {nombre:"Super Mario Bros", imagen:"imagen/super mario bros.jpg", descripcion:"El clásico juego de plataformas", link:"https://www.mediafire.com/file/9eaolq4cr1rz6fc/super_mario_bros_1.rar/file", categoria:"Plataformas"},
  {nombre:"Mario Collection", imagen:"imagen/mario collection.jpg", descripcion:"Colección de juegos de Mario", link:"https://www.mediafire.com/file/w9njimq8pnwq54l/Mario_Bros_Collection.rar/file", categoria:"Plataformas"},
  {nombre:"Buckshot Roulette", imagen:"imagen/Buckshot Roulette.jpg", descripcion:"Juego de terror y estrategia", link:"https://www.mediafire.com/file/c6e1gdxej610f4g/BuckShot-Roulette-SteamRIP.com.rar/file", categoria:"Terror"},
  {nombre:"Project Zomboid", imagen:"imagen/PROJECT ZOMBOID.jpg", descripcion:"Supervivencia zombie realista", link:"https://gofile.io/d/4NBZgI", categoria:"Survival"},
  {nombre:"Minecraft", imagen:"imagen/minecraft.jpg", descripcion:"Juego de construcción y aventura", link:"https://www.mediafire.com/file/77l40oyouwadvf8/TLauncher-Installer-1.9.5.1.exe/file", categoria:"Aventura"},
  {nombre:"Geometry Dash", imagen:"imagen/geometry dash.jpg", descripcion:"Juego rítmico de plataformas", link:"https://www.mediafire.com/file/88488wd72eqauvp/geometry_dash.zip/file", categoria:"Plataformas"},
  {nombre:"Dredge", imagen:"imagen/DREDGE.jpg", descripcion:"Aventura de pesca con misterio", link:"https://www.mediafire.com/file/spyvknm5qsvhcwj/dredge.rar/file", categoria:"Aventura"},
  {nombre:"Terraria", imagen:"imagen/TERRERARIA.jpg", descripcion:"Aventura sandbox 2D", link:"https://www.mediafire.com/file/nb16j1nbk3xlnbg/Terraria.iso/file", categoria:"Aventura"},
  {nombre:"Hollow Knight", imagen:"imagen/HOLLOW knight.jpg", descripcion:"Metroidvania con gran exploración", link:"https://gofile.io/d/L5EodK", categoria:"Metroidvania"},
  {nombre:"Counter Strike Source Offensive", imagen:"imagen/Counter-Strike Source Offensive.jpg", descripcion:"Shooter clásico multijugador", link:"https://www.mediafire.com/file/wb3nacwfrthfdns/Counter-Strike_Source_Offensive_Opti_V2.7z/file", categoria:"Shooter"}
];

const contenedor = document.getElementById("contenedor-juegos");
const buscador = document.getElementById("buscador");

// Función para mostrar juegos
function mostrarJuegos(lista){
  contenedor.innerHTML = "";
  lista.forEach(j => {
    contenedor.innerHTML += `
    <div class="juego">
      <img src="${j.imagen}" alt="${j.nombre}">
      <h2>${j.nombre}</h2>
      <p>${j.descripcion}</p>
      <a href="${j.link}" target="_blank">Descargar</a>
    </div>
    `;
  });
}

// Mostrar todos los juegos inicialmente
mostrarJuegos(juegos);

// Buscador en tiempo real
buscador.addEventListener("keyup", function(){
  let filtro = buscador.value.toLowerCase();
  let filtrados = juegos.filter(j => j.nombre.toLowerCase().includes(filtro) || j.descripcion.toLowerCase().includes(filtro));
  mostrarJuegos(filtrados);
});

// Función de filtrado por categoría
function filtrarCategoria(cat){
  if(cat === "Todos") mostrarJuegos(juegos);
  else mostrarJuegos(juegos.filter(j => j.categoria === cat));
}

