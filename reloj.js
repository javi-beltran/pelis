let tiempo = document.getElementById('tiempo');
let dia = document.getElementById('dia');

let fecha = new Date();
let diaDsemana = ['Dom', 'Lun', 'Mar', 'Mir',
 'Juev', 'Vie', 'Sab'];
let mes = ['Ene', 'Feb', 'Mar', 'Abr', 'May',
 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

dia.innerHTML = `${diaDsemana[fecha.getDay()]},
${fecha.getDate()} / ${mes[fecha.getMonth()]} / 
${fecha.getFullYear()} `;
window.onload=function(){

}
setInterval(() => {
    let hora=new Date();
    tiempo.innerHTML=hora.toLocaleTimeString()
}, 1000);

tiempo.innerHTML="00:00:00"