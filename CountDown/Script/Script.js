const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')


let Segundo = 60;
let Minuto = 2;
let Hora = 2;

function countDown() {
  segundo.innerHTML = Segundo
  minuto.innerHTML = Minuto
  hora.innerHTML = Hora
 
  if(Segundo) {
    Segundo--
    segundo.innerHTML = Segundo
    if(Segundo == 0 && Minuto > 0) {
      Minuto--
      Segundo = 60
    }
    if( Segundo == 0 && Minuto == 0 && Hora > 0) {
      Hora--
      Minuto = 59
      Segundo = 60
    }
  }

}

setInterval(countDown, 100)