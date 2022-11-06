const toggle = document.getElementById('toggle')
const toggleCircle = document.getElementById('toggle-circle')
const userName = document.querySelector('.logined-user')

if(localStorage.getItem("loginUserName")){
    userName.textContent = localStorage.getItem("loginUserName")
}
else{
    window.location.href = "login.html"
}

const changeMode = () =>  {
    toggleCircle.classList.toggle('toggle__circle-right')
    document.body.classList.toggle('mode')
}

toggle.addEventListener('click', changeMode)

