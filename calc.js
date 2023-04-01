let a = ''; // first number
let b = ''; // second number
let sign = ''; // symbol operation
let finish = false;

const digit =  ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-','+','X','/'];

// display
const out = document.querySelector('.calc-screen p');

function clearAll()
{
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContect = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    // not button > exit
    if(!event.target.classList.contains('btn')) return;
    // button AC > exit
    if(event.target.classList.contains('AC')) return;

    out.textContent = '';
    // get button
    const key = event.target.textContent;

    // if button 0-9 or dot
    if(digit.includes(key)){
        if(b === '' && sign === ''){

        a += key;
        
        out.textContent = a;

        }else if(a !== '' && b !== '' && finish){
            b = key;
            finish = false;
            out.textContent = b;
        }else {
            b += key;
            out.textContent = b;
        }

        console.log(a, b, sign);
        return;
    }

    // if +,-,*,/
    if(action.includes(key)){
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
        return;
    }

    // equal =
    if(key === '='){
        if (b === '') b = a;
        switch(sign){
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                a = a * b;
                break;
            case "/":
                if (b === '0'){
                    out.textContent = 'Error';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;   
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign);
    }

}