const form = document.getElementById("form")
const agree = document.getElementById("agree")
const submit = document.getElementById("submit")
const stripUpdatesInput = document.getElementById("str-form-input")
const reg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


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