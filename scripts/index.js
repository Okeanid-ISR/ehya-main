const form = document.getElementById("form")
const agree = document.querySelector("#agree")
const stripUpdatesBtn = document.getElementById("submit")
const stripUpdatesInput = document.getElementById("strip-updates__text_input")

agree.oninput = function () {
    if (agree.checked) {
        stripUpdatesBtn.removeAttribute('disabled')

    } else {
        stripUpdatesBtn.setAttribute('disabled', false)
    }
}
