let first1=document.getElementById("first")
let second1=document.getElementById("second")
let third1=document.getElementById("third")
let para1=document.getElementById("para")
function check(){
    let firstvalue=first1.value 
    let secondvalue=second1.value 
    let updated=parseInt(firstvalue)+parseInt(secondvalue)
    let uservalue=parseInt(third1.value)
    if(uservalue===updated){
        para1.textContent="this is corruct"
    }else{
         third1.value=""
         para1.textContent="try again"
    }
    
}
function Reset(){
    let mathnumber=Math.random()*100 
    let numbaer=Math.ceil(mathnumber)
    console.log(numbaer)
     first1.value=numbaer
     console.log(numbaer)
     let mathrandomnumber=Math.random()*100 
     let number12=Math.ceil(mathrandomnumber)
      console.log(number12)
      second1.value=number12
    third1.value=""
}