const inputValue = document.querySelector("#input-value");
const btnValue = document.querySelector("#btn-value");
const imgCode = document.querySelector("#img-code");
const wrapper = document.querySelector('.wrapper');
const save = document.querySelector('#save');

let valueDefault = "";

const handleBtnClick = () => {
  const qrcodeValue = inputValue.value.trim();

  if (!qrcodeValue || qrcodeValue === valueDefault) {
    return;
  }

  valueDefault = qrcodeValue;
  btnValue.innerText = '...';

  const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueDefault}`;

  imgCode.src = apiUrl;
  save.href = apiUrl;

  imgCode.addEventListener('load', () => {
    wrapper.classList.add('active');
    btnValue.innerText = 'Go';
  });
};

btnValue.addEventListener('click', handleBtnClick);
