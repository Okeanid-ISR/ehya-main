const form = document.getElementById("form")
const agree = document.getElementById("agree")
const submit = document.getElementById("submit")
const stripUpdatesInput = document.getElementById("str-form__input")
const pic = document.getElementById("pic")
const reg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


agree.oninput = function (event) {

    if (agree.checked) {
        submit.style.opacity = "100%"
        submit.removeAttribute('disabled')
        submit.style.cursor = 'pointer'
        pic.style.fill = 'blue'


    } else {
        submit.setAttribute('disabled', false)
        submit.style.cursor = 'not-allowed'
        submit.style.opacity = '70%'
        pic.style.fill = ''
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