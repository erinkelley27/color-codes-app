let body = document.querySelector('body')
let h1 = document.querySelector('h1')
let input = document.querySelector('.input')
let submit = document.querySelector('form')

let url = 'http://localhost:8080/colors/'

submit.addEventListener('submit', function (evt) {
    evt.preventDefault()
    let hex = input.value
    console.log(hex)
    fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            let selectedColor = res.filter(color => {
                // console.log(input.value)
                return color.hex === input.value
            })
            console.log(selectedColor)
            body.style.backgroundColor = selectedColor[0].hex
            h1.innerHTML = selectedColor[0].name
        })
})