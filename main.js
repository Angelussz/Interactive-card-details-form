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
            formIsValid.number = true
            numberwarning.textContent=""
        }

        else{
            numberscard.textContent = e.target.value
            formIsValid.number = false
            numberwarning.textContent = "User only numbers"
        }
        
    }
    else{
        numberscard.textContent = "0000 \xa0\xa0\xa0\xa0 \xa0\xa0   0000 \xa0\xa0\xa0\xa0 \xa0\xa0 0000 \xa0\xa0\xa0\xa0 \xa0\xa0 0000"
        formIsValid.number = false
        numberwarning.textContent = "Need eight numbers"
    }
})

number.addEventListener('keyup',(e)=>{
    let b = e.target.value.replace(/ /g, "")
    if(e.target.value.trim().length>0 && b.length%4 == 0 && b.length<16){
        e.target.value += " "
        // console.log(b.length)
    }
    //console.log(`2: ${b.length}`)
})

// Card Year and Month
month.addEventListener('change',(e)=>{
    if(e.target.value.trim().length > 0){
        //frontmy.textContent = e.target.value
        formIsValid.month = true
        
        mywarning.textContent=""
        
    }
    else{
        
        formIsValid.month = false

        mywarning.textContent = "Can't Be blank"
    }
    // console.log(frontmy.textContent[0])
    console.log(e.target.value[0])
    
})

year.addEventListener('change',(e)=>{
    if(e.target.value.trim().length > 0){
        //frontmy.textContent = e.target.value
        
        formIsValid.year = true
        mywarning.textContent=""

    }
    else{
        
        
        formIsValid.year = false

        mywarning.textContent = "Can't Be blank"
    }
    
})

month.addEventListener('keyup',(e)=>{
    frontmo.textContent=e.target.value;
    console.log(e.target.value.length);
    if (e.target.value.length ==0) {
        frontmo.textContent="00";
    }
})

year.addEventListener('keyup',(e)=>{
    frontye.textContent=e.target.value;
    if (e.target.value.length ==0) {
        frontye.textContent="00";
    }})
cvc.addEventListener('keyup',(e)=>{
    const card_cvc = document.getElementById('cvc_back');
    card_cvc.textContent=e.target.value;
    console.log(e.target.value.length)
    if(e.target.value.length == 3){
        formIsValid.cvc = true;
    }
    if (e.target.value.length ==0) {
        card_cvc.textContent="000";
    }
}) //Agregar auxiliares

const confirmar = document.getElementById('confirm');
const complete = document.getElementById('complete_space');
confirmar.addEventListener('click',(e)=>{
    const formulario = document.getElementById('formulario');
    if (formIsValid.names == true &&
    formIsValid.number == true &&
    formIsValid.month == true &&
    formIsValid.year == true &&
    formIsValid.cvc == true){
        complete.classList.replace("disappear","appear")
        formulario.classList.add("disappear")
    }
})


