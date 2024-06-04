function changeTheme(){
    let body = document.querySelector("body")
    let icon = document.getElementById('theme-btn').querySelector('img')

    if(body.classList.contains('dark-mode')){
        body.classList.remove('dark-mode')
        body.classList.add('light-mode')
        icon.src = './img/moon.png'
    } else {
        body.classList.add('dark-mode')
        body.classList.remove('light-mode')
        icon.src = './img/sun.png'
    }
}

function getName(placeholder, input){
    document.getElementById('get-name').classList.add('hide') //hide get-name
    document.getElementById('get-feedback').classList.remove('hide') //unhide get-feedback 

    let msg = 'Hello '+ document.getElementById(input).value 
    document.getElementById(placeholder).innerText = msg
}

function thanks(){
    document.getElementById('get-feedback').classList.add('hide') //hide get-feedback
    document.getElementById('thanks').classList.remove('hide') //unhide thanks 

}