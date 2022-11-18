const form = document.getElementById("form")
const agree = document.querySelector("#agree")
const stripUpdatesBtn = document.getElementById("submit")
const stripUpdatesInput = document.getElementById("strip-updates__text_input")
const reg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


agree.oninput = function (event) {
    if (agree.checked) {
        stripUpdatesBtn.removeAttribute('disabled')

    } else {
        stripUpdatesBtn.setAttribute('disabled', false)
    }
}


stripUpdatesBtn.onclick = function(event){
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