let body = document.querySelector('body')
let h1 = document.querySelector('h1')
let input = document.querySelector('.input')
let submit = document.querySelector('form')

let url = 'http://localhost:8080/colors/'

submit.addEventListener('submit', function (evt) {
    evt.preventDefault()
    let hex = input.value.toLowerCase()
    fetch(url)
        .then(res => res.json())
        .then(res => {
            let selectedColor = res.filter(color => {
                return color.hex === hex
            })
            body.style.backgroundColor = selectedColor[0].hex
            h1.innerHTML = selectedColor[0].name
        })
})