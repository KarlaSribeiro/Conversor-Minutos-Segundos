function convertSeconds(input) {
    const segundos = input.value;
    document.getElementById("minutos").value = Math.floor(segundos / 60);
}

function convertMinutes(input) {
    const minutos= input.value;
    document.getElementById("segundos").value = Math.floor(minutos * 60);
}
