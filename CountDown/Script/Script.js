const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')
const timer = document.getElementById('CountDown')

let Segundo = 60;
let Minuto = 2;
let Hora = 7;

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
    }else if ( Segundo == 0 && Minuto == 0 && Hora == 0) {
      window.alert('FIM')
    }
    
  }
}

setInterval(countDown, 1000)