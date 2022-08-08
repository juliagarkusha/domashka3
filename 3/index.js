const numberHandler = (numb) => {
    if(!numb){
        console.log('Ошибка! Некорректрое значение. Попробуйте еще раз')
        return;
    }

    for(let i = 1; i <= 100; i++) {
        const numb = Math.pow(i, 2);

        if(numb <= userNumber) {
            console.log(numb);
        } else {
            break;
        }
    }
}

const userNumber = +(prompt('Введите число'));
numberHandler(userNumber);
