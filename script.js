function odliczanie()
{
    let dzisiaj = new Date()
    let godzina = dzisiaj.getHours();
    if(godzina<10) godzina = "0" + godzina
    let minuta = dzisiaj.getMinutes();
    if(minuta<10) minuta = "0" + minuta
    let sekunda = dzisiaj.getSeconds();
    if(sekunda<10) sekunda = "0" + sekunda

    zegar.innerHTML = godzina+":"+minuta
    
    setTimeout("odliczanie()",1000)
}
odliczanie()

const content = document.querySelector('.content')
const camera = document.querySelector('.app4')
camera.addEventListener('click', function(){
    const divcamera = document.createElement('div')
    divcamera.classList.add('camera')
    content.append(divcamera)
    divcamera.innerHTML = `<div class='linia'></div>`
    linia = document.querySelector('.linia')
    powrotclick(linia)
})
// let linia

// function powrot(){
//     const divcamera1 = document.querySelector('.camera')
//     divcamera1.remove()
// }

// function powrotclick(linia){
//     linia.addEventListener('click', powrot)
// }



// const safari = document.querySelector('.app3')
// safari.addEventListener('click', function(){
//     const divsafari = document.createElement('div')
//     divsafari.classList.add('safari')
//     content.append(divsafari)
//     divsafari.innerHTML = `<div class='linia'></div>`
//     linia = document.querySelector('.linia')
//     powrotclick2(linia)
// })

// function powrot2(){
//     const divsafari1 = document.querySelector('.safari')
//     divsafari1.remove()
// }

// function powrotclick2(linia){
//     linia.addEventListener('click', powrot2)
// }



// const mess = document.querySelector('.app2')
// mess.addEventListener('click', function(){
//     const divmess = document.createElement('div')
//     divmess.classList.add('mess')
//     content.append(divmess)
//     divmess.innerHTML = `<div class='linia'></div>`
//     linia = document.querySelector('.linia')
//     powrotclick3(linia)
// })

// function powrot3(){
//     const divmess1 = document.querySelector('.mess')
//     divmess1.remove()
// }

// function powrotclick3(linia){
//     linia.addEventListener('click', powrot3)
// }



// const con = document.querySelector('.app1')
// con.addEventListener('click', function(){
//     const divcon = document.createElement('div')
//     divcon.classList.add('con')
//     content.append(divcon)
//     divcon.innerHTML = `<div class='linia'></div>`
//     linia = document.querySelector('.linia')
//     powrotclick4(linia)
// })

// function powrot4(){
//     const divcon1 = document.querySelector('.con')
//     divcon1.remove()
// }

// function powrotclick4(linia){
//     linia.addEventListener('click', powrot4)
// }

// document.getElementById('ok').addEventListener('click', function(){
//     let czy = document.getElementById('switch').checked

//     if(czy){
//         navigator.style.textDecoration = ""
//     }
// })



document.addEventListener("DOMContentLoaded", function() {
    // Pobieramy elementy DOM
    var video = document.getElementById('video');
    var kameraDiv = document.getElementById('kamera');

    // Sprawdzamy, czy przeglądarka obsługuje getUserMedia
    navigator.getUserMedia = navigator.getUserMedia 
        navigator.webkitGetUserMedia 
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;

    if (navigator.getUserMedia) {
        // Włączamy kamerę
        navigator.getUserMedia({ video: true }, function (stream) {
            video.srcObject = stream;
        }, function (err) {
            console.error("Błąd włączania kamery: ", err);
        });
    } else {
        console.error("Twoja przeglądarka nie obsługuje getUserMedia.");
    }
});

let darkmode =false
document.addEventListener("DOMContentLoaded", function () {
    var label = document.querySelector("label");
    

    label.addEventListener("click", function(){
        if (window.location.href.endsWith('index.html')){
            dark('index2.html')
        }
        else if (window.location.href.endsWith('index2.html')){
            dark('index.html')
        }
    });
})
console.log (window.location.href.endsWith('index.html'))
function dark(plik) {
    setTimeout(function () {
       
            window.location.href = plik;
            darkmode = !darkmode
            console.log (darkmode)
        
    }, 800);
}
function captureAndSave() {
    var canvas = document.createElement('canvas');
    var video = document.getElementById('video');
    var context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);


    var dataURL = canvas.toDataURL('image/jpeg');
    var link = document.createElement('a');
    link.href = dataURL;
    link.download = 'captured_image.jpg';
    link.click();
}
function saveToFile() {
    var textareaValue = document.getElementById("arena").value;


    var blob = new Blob([textareaValue], { type: "text/plain" });


    var a = document.createElement("a");
    a.href = window.URL.createObjectURL(blob);


    var filename = "textfile.txt";
    a.download = filename;


    document.body.appendChild(a);


    a.click();


    document.body.removeChild(a);
}


