function getColor () {
 const randomNumber = Math.floor(Math.random() * 16777215);

 const randomCode = '#'+ randomNumber.toString(16);

 console.log(randomCode);   

 document.body.style.backgroundColor = randomCode;
 document.getElementById('color-code').innerText = randomCode;
 navigator.clipboard.writeText(randomCode);

}

document.getElementById('btn').addEventListener('click', function(){
    getColor();
});


getColor();