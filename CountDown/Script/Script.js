const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')


let Segundo = 10;
let Minuto = 1;
let Hora = 7;

function countDown() {
  segundo.innerHTML = Segundo
  minuto.innerHTML = Minuto
  hora.innerHTML = Hora
 
  if(Segundo) {
    Segundo--
    segundo.innerHTML = Segundo
    if(Segundo == 1 && Minuto > 0) {
      Minuto--
      Segundo = 59
    }
  } 
  if(Minuto == 0 && Hora == 0) {
    Minuto = 59
    Hora--
  }

}

setInterval(countDown, 1000)