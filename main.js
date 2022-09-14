const names = document.getElementById('name')
const number = document.getElementById('number')
const month = document.getElementById('month')
const year = document.getElementById('year')
const cvc = document.getElementById('cvc')
// ---------------------------------
const namewarning = document.getElementById('namewarning')

const frontname= document.getElementById('frontcardname')

const numberscard= document.getElementById('numberscard')
const numberwarning= document.getElementById('numberwarning')



const formIsValid = {
    names: false,
    number: false,
    month: false,
    year: false,
    cvc: false,
}


const numcomp = /^[0-9]+$/


names.addEventListener('change',(e)=>{
    if(e.target.value.trim().length > 0){
        frontname.textContent = e.target.value
        formIsValid.names = true
        namewarning.textContent=""
    }
    else{
        frontname.textContent = "Janet Applessed"
        formIsValid.names = false
        namewarning.textContent = "Can't Be blank"
    }
    console.log(e.target.value)
})

number.addEventListener('change',(e)=>{
    if(e.target.value.trim().length > 0){
        if (numcomp.test(e.target.value.trim())) {
            numberscard.textContent = e.target.value
            formIsValid.names = true
            numberwarning.textContent=""
        }

        else{
            numberscard.textContent = e.target.value
            formIsValid.names = false
            numberwarning.textContent = "User only numbers"
        }
        
    }
    else{
        numberscard.textContent = "0000         0000         0000         0000"
        formIsValid.names = false
        numberwarning.textContent = "Can't Be blank"
    }
    console.log(e.target.value)
})



