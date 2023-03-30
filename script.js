const form = document.querySelector('.sign-up__form');
const buttonS = document.querySelectorAll('.raiting-sign-input');

buttonS.forEach((radio) => {
    radio.addEventListener('change', function () {
        const checkedNumber =
            document.querySelector('.raiting-sign-input:checked').value || undefined;

        buttonS.forEach((item) => {
            const currentLabel = item.previousElementSibling;
            if (item.value <= checkedNumber) {
                currentLabel.classList.add('check');
            } else {
                currentLabel.classList.remove('check');
            }
        });
    });
});

const formPass = document.querySelector('.sign-up__form-input-pass');
const formPassRe = document.querySelector('.sign-up__form-input-passRe');
const formPasses = document.querySelectorAll('.sign-up__form-inputCheck');




form.addEventListener('submit', function (e) {

    let newPass = formPass.value;
    let newPassRe = formPassRe.value;

    if (newPass !== newPassRe) {
        formPasses.forEach(element => {
            element.classList.add('error');
            element.style.borderColor = 'red';
            e.preventDefault();
        });
    }
    else {
        formPasses.forEach(element => {
            element.classList.remove('error');
            element.style.borderColor = 'green';
        });
    }
});