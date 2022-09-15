const names = document.getElementById('name')
const number = document.getElementById('number')
const month = document.getElementById('month')
const year = document.getElementById('year')
const cvc = document.getElementById('cvc')
const frontmy = document.getElementById('frontmy')

const frontmo =document.getElementById('frontmo')
const frontye =document.getElementById('frontye')
// ---------------------------------
const namewarning = document.getElementById('namewarning')

const frontname= document.getElementById('frontcardname')

const numberscard= document.getElementById('numberscard')
const numberwarning= document.getElementById('numberwarning')

const mywarning = document.getElementById('mywarning')
// ---------------------


// ----------
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
    let numbervalid = e.target.value.trim().replace(/ /g, "")
    if(numbervalid.length === 16){
        if (numcomp.test(numbervalid)) {
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
        numberscard.textContent = "0000 \xa0\xa0\xa0\xa0 \xa0\xa0   0000 \xa0\xa0\xa0\xa0 \xa0\xa0 0000 \xa0\xa0\xa0\xa0 \xa0\xa0 0000"
        formIsValid.names = false
        numberwarning.textContent = "Need eight numbers"
    }
})

number.addEventListener('keyup',(e)=>{
    let b = e.target.value.replace(/ /g, "")
    if(e.target.value.trim().length>0 && b.length%4 == 0 && b.length<16){
        e.target.value += " "
        // console.log(b.length)
    }
    console.log(`2: ${b.length}`)
})

// Card Year and Month
month.addEventListener('change',(e)=>{
    if(e.target.value.trim().length > 0){
        //frontmy.textContent = e.target.value
        formIsValid.month = true
        
        mywarning.textContent=""
        
    }
    else{
        frontmo.textContent = "00"
        formIsValid.month = false

        mywarning.textContent = "Can't Be blank"
    }
    // console.log(frontmy.textContent[0])
    // console.log(e.target.value[0])
    
})

year.addEventListener('change',(e)=>{
    if(e.target.value.trim().length > 0){
        //frontmy.textContent = e.target.value
        
        formIsValid.year = true
        mywarning.textContent=""

    }
    else{
        frontye.textContent = "00"
        
        formIsValid.year = false

        mywarning.textContent = "Can't Be blank"
    }
    
})

month.addEventListener('keyup',(e)=>{
    frontmo.textContent=e.target.value;  
})

year.addEventListener('keyup',(e)=>{
    frontye.textContent=e.target.value;  
})