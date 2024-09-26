const button1 = document.getElementById('pick-plants');
const button2 = document.getElementById('plant-info');

button1.addEventListener('click', ()=>{
    button1.textContent = 'Pick your Plants';                          
    window.location.replace('./pick-plant');
});

button2.addEventListener('click', ()=>{
    button1.textContent = 'Plant Info';
    window.location.replace('./plant-info');
});

