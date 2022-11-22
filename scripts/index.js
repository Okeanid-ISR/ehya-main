const form = document.getElementById("form")
const agree = document.getElementById("agree")
const submit = document.getElementById("submit")
const stripUpdatesInput = document.getElementById("str-form__input")
const reg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


agree.oninput = function (event) {
    if (agree.checked) {
        submit.removeAttribute('disabled')

    } else {
        submit.setAttribute('disabled', false)
    }
}


submit.onclick = function(event){
    event.preventDefault();

    if(!validate(reg,stripUpdatesInput.value)){
        return;
    }
    else {
      alert("work")
    }
}

function validate(regex,inp){
    return regex.test(inp)
}