const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');



function setDate(){
const now = new Date(); // para que saquemos la hora
const seconds = now.getSeconds(); //obtener los segundos de la hora actual
const secondsDegrees = ((seconds / 60) * 360)+ 90; //para calcular los grados que rotara la manecilla de segundos
secondHand.style.transform = `rotate(${secondsDegrees}deg)`; //hacerla rotar

const mins = now.getMinutes(); //obtener los minutos de la hora actual
const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;//para calcular los grados que rotara la manecilla de minutos
minsHand.style.transform = `rotate(${minsDegrees}deg)`; //hacerla rotar

const hour = now.getHours(); //obtener las horas de la hora actual
const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90; //para calcular los grados que rotara la manecilla de horas
hourHand.style.transform = `rotate(${hourDegrees}deg)`;//hacerla rotar

}

setInterval(setDate, 1000); 