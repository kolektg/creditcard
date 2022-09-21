let nameInput = document.querySelector('#name');
let cardInput = document.querySelector('#cardNumber');
let months = document.querySelector('#months');
let years = document.querySelector('#years');
let cvc = document.querySelector('#cvc');

let updateText = document.querySelector(' p:first-of-type');
let updateCardNumer = document.querySelector('.wrapper h1');
let updateMonths = document.querySelector('p:nth-of-type(2)')
let updateYears = document.querySelector('p:nth-of-type(2)')
let updateCvc = document.querySelector('p:nth-of-type(3)')


// const result = new Array(16).fill(0);
// updateCardNumer.textContent = result.join('');

/**
 * 
 * @param {string} str 
 * @return {string}
 */
function formatCardNumber(str) {
    return str
        .split('')
        .flatMap((v, i) => {
            if (i === 0) {
                return [v];
            }
            return i % 4 === 0 ? [' ', v] : [v];
        })
        .join('');
}


cardInput.addEventListener('input', (e) => {
    const value = e.target.value.replace(/\D/g, '');
    e.target.value = value;

    updateCardNumer.textContent = formatCardNumber(value) || '0000 0000 0000 0000';
})

nameInput.addEventListener('input', (e) => {


    // WORKING SOLUTION



    updateText.textContent = e.target.value;
    updateText.textContent = updateText.textContent.toUpperCase();
    
    if (nameInput.value === '') {
        updateText.textContent = 'JANE APPLESEED'
    }

})

months.addEventListener('input', (e) => {
    const value = e.target.value.replace(/\D/g, '');
    e.target.value = value;
    updateMonths.textContent = `${value}/${years.value}`
    if (months.value < 1 || months.value > 12) {
        months.classList.add('.months.invalid');
    }
    if (!years.value) {
        updateMonths.textContent = `${value}/00`
    }
    if (!months.value && years.value) {
        updateMonths.textContent = `00/${years.value}`
    }
    if (!months.value && !years.value) {
        updateMonths.textContent = '00/00'
    }



})

years.addEventListener('input', (e) => {
    const value = e.target.value.replace(/\D/g, '');
    e.target.value = value;
    updateMonths.textContent = `${months.value}/${value}`
    
    if (updateMonths.textContent.includes('00/') || !months.value)  {
         updateMonths.textContent = `00/${value}`;
    }  
    if (!years.value && months.value) {
        updateMonths.textContent = `${months.value}/00`
    }
    if (!years.value && !months.value) {
        updateMonths.textContent = '00/00'
    }
    
   
})

cvc.addEventListener('input', (e) => {
    const value = e.target.value.replace(/\D/g, '');
    e.target.value = value;
    updateCvc.textContent = value;
    if (cvc.value === '') {
        updateCvc.textContent = '000'
    }

})



