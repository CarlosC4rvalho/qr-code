const inputValue = document.querySelector("#input-value");
const btnValue = document.querySelector("#btn-value");
const imgCode = document.querySelector("#img-code");
const wrapper = document.querySelector('.wrapper')
const save = document.querySelector('#save');
let valueDefault

btnValue.addEventListener('click', () => {
    let qrcodeValue = inputValue.value.trim();
    if (!qrcodeValue || qrcodeValue === valueDefault) return;
    valueDefault = qrcodeValue;
    btnValue.innerText = '...'
    imgCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueDefault}`
    save.href = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueDefault}`
    imgCode.addEventListener('load', () => {
        wrapper.classList.add('active');
        btnValue.innerText = 'Go'
    })
})