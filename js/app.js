const clock = document.getElementById('clock');

for (let i = 0; i < 4; i++){
    const div = document.createElement('div');
    div.className = 'clock-face';
    clock.appendChild(div);
}