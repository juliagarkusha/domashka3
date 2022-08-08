const isPrimeNumberHandler = (numb) => {
    for(let i = 2; i < numb; i++) {
        return numb % i !== 0;
    }
}

const userNumber = +(prompt('Введите число'));

if(!userNumber && userNumber !== 0) {
    console.log('Ошибка! Некорректрое значение. Попробуйте еще раз');
}

if (userNumber < 2 || !isPrimeNumberHandler(userNumber)) {
    console.log(`Число ${userNumber} не является простым`);
}

if(isPrimeNumberHandler(userNumber)) {
    console.log(`Число ${userNumber} является простым`);
}
