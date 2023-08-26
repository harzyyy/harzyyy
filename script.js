const angkaangka = document.querySelectorAll(".angka")
angkaangka.forEach((angka) => {
    angka.addEventListener("click", (event) => {
        inputAngka(event.target.value)
        hasilBaru(currentAngka)
    })
})

const hasil = document.querySelector(".kalkulator-hasil")
const hasilBaru = (angka) => {
    hasil.value = angka
}

let prevAngka = ''
let kalkulatorOperator = ''
let currentAngka = '0'

const inputAngka = (angka) => {
    if (currentAngka === '0') {
        currentAngka = angka
    } else {
        currentAngka += angka
    }
}

const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if (kalkulatorOperator === '') {
        prevAngka = currentAngka
    }
    kalkulatorOperator = operator
    currentAngka = '0'
}

const hasilAkhir = document.querySelector(".hasil-akhir")
hasilAkhir.addEventListener('click', () => {
    kalkulasi()
    hasilBaru(currentAngka)
})

const kalkulasi = () => {
    let result = ''
    switch(kalkulatorOperator) {
        case "+":
            result = parseFloat (prevAngka) + parseFloat (currentAngka)
        break
        case "-":
            result = parseFloat (prevAngka) - parseFloat (currentAngka)
            break
        case "*":
            result = parseFloat (prevAngka) * parseFloat (currentAngka)
            break
        case "/":
            result = parseFloat (prevAngka) / parseFloat (currentAngka)
            break
        default:
            break
    }
    currentAngka = result
    kalkulatorOperator = ''
}

const hapus = document.querySelector(".hapus-semua")
hapus.addEventListener('click', () => {
    semuaDihapus()
    hasilBaru(currentAngka)
})

const semuaDihapus = () => {
    prevAngka = ''
    kalkulatorOperator = ''
    currentAngka = '0'
}

const titik = document.querySelector(".titik")
titik.addEventListener('click', (event) => {
    inputTitik(event.target.value)
    hasilBaru(currentAngka)
})

inputTitik = (dot) => {
    if(currentAngka.includes('.')) {
        return
    }
    currentAngka += dot
}

const persen = document.querySelector(".persen")
persen.addEventListener('click', (event) => {
    inputPersen(currentAngka)
    hasilBaru(currentAngka)
})

const inputPersen = (angka) => {
    currentAngka = parseFloat(angka) / 100
}