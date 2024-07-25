let button = document.getElementsByClassName('btn-calculus')[0]


button.addEventListener('click', () => {
    let b = document.getElementById('number')
    let base = Number(b.value)
    let h = document.getElementById('number1')
    let altura = Number(h.value)
    let res = document.getElementById('resultado')
    area = base * altura  

    res.innerText = `Sua área é de ${area} cm².` 
})

button.addEventListener('click', () => {
    let b = document.getElementById('number')
    let base = Number(b.value)
    let h = document.getElementById('number1')
    let altura = Number(h.value)
    let resultado = document.getElementById('res1')
    perimetro = 2 * base + 2 * altura 

    resultado.innerText =  `Seu perímetro é de ${perimetro} cm².`
})