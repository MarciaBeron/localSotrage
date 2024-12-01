
document.getElementById('buttonText').addEventListener('click', function(){
    const data = document.getElementById("inputText").value;
    if (data) {
        localStorage.setItem('Data', data);
        alert('Dato guardado correctamente.');
    } else {
        alert('Por favor, ingresa un dato.');
    }
 
})