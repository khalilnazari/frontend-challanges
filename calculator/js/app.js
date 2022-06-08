const btns = document.querySelectorAll('button'); 
const writeResut= document.querySelector('#write-result')
let numArray = [];
let numberArray = [];
let operandArray = [];
let number = 0; 
let contentHtml = ``; 

btns.forEach(btn => {
    btn.addEventListener('click', e=> {
        let btnType = e.target.dataset.type;
        let btnValue = e.target.value; 


        if(btnType === "reset") {
            contentHtml = `0`;
            operandArray.length=0;
        }


        if(btnType === "number") {
            numberArray.push(btnValue)
            number = Number(numberArray.map(n=>n).join('')) 
            contentHtml += `${btnValue}`
        }

        if(btnType === "plus") {
            operandArray.push(number)
            operandArray.push('+');
            numberArray.length = 0; 
            contentHtml += `${btnValue}`
        }

        if(btnType === "minus") {
            operandArray.push(number)
            operandArray.push('-');
            numberArray.length = 0; 
            contentHtml += `${btnValue}`
        }

        if(btnType === "division") {
            operandArray.push(number)
            operandArray.push('/');
            numberArray.length = 0; 
            contentHtml += `${btnValue}`
        }

        if(btnType === "multiply") {
            operandArray.push(number)
            operandArray.push('*');
            numberArray.length = 0; 
            contentHtml += `${btnValue}`
        }

        if(btnType === "del") {
            // to be done!
        }

        if(btnType === "equal") {
            operandArray.push(number);

            let total = calculate (operandArray, operandArray.length);
            console.log(total)

            operandArray.length = 0; 
            contentHtml=`${total}`;
        }
        writeResut.textContent = contentHtml; 
    })
})



function calculate(arr, n) {
           
        // if string is empty
        if (n == 0)
            return 0;
        let s = arr[0];
           
        // parseInt function to convert
        // string into integer
        let value = parseInt(s);
        let sum = value;
       
        for (let i = 2; i < n; i = i + 2) {
            s = arr[i];
       
            // parseInt function to convert
            // string into integer
            value = parseInt(s);
       
            // Find operator
            let operation = arr[i - 1][0];
       
            // If operator is equal to '+',
            // add value in sum variable
            // else subtract
            if (operation == '+') {
                sum += value;
            }
            if (operation == '-') {
                sum -= value;
            } 
            if (operation == '*') {
                sum *= value;
            } 
            if (operation == '/') {
                sum /= value;
            } 
        }
           
        return sum;
    }