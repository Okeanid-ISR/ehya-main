const form = document.getElementById("form")
const agree = document.getElementById("agree")
const submit = document.getElementById("submit")
const stripUpdatesInput = document.getElementById("str-form-input")
const reg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const menu = document.getElementById("header-button")
const headerMenu = document.getElementById("header-menu")
const headerMenuActive = 'header-menu_opened'

if (form) {
    agree.oninput = function (event) {

        if (agree.checked) {
            submit.style.opacity = "100%"
            submit.removeAttribute('disabled')
            submit.style.cursor = 'pointer'
        } else {
            submit.setAttribute('disabled', false)
            submit.style.cursor = 'not-allowed'
            submit.style.opacity = '70%'
        }
    }


    submit.onclick = function (event) {
        event.preventDefault();

        if (!validate(reg, stripUpdatesInput.value)) {

            return;
        } else {
            alert("work")
        }
    }

    function validate(regex, inp) {
        return regex.test(inp)
    }
}


document.addEventListener('DOMContentLoaded',function(event){
    document.body.classList.remove('preload')
})


menu.addEventListener('click', function (event) {
    if(!headerMenu.classList.contains(headerMenuActive)){
        headerMenu.classList.add("header-menu_opened")
    }else{
        headerMenu.classList.remove("header-menu_opened")
    }
        })