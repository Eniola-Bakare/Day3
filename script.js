const container = document.getElementsByClassName('container')[0];
const text = document.getElementById('text')


const totalBreathTime = 7500;
const breathTime = (totalBreathTime / 5) *2;
const holdTime = totalBreathTime / 5;

breather()

function breather (){
    text.innerText = 'Breathe In!'
    container.className = 'container grow'

    setTimeout(() => {
        text.innerText = 'Hold!'

        setTimeout(() => {
        text.innerText = 'Breathe out!'
        container.className = ' container shrink';

        }, holdTime);
    }, breathTime)

}

setInterval(breather, totalBreathTime)