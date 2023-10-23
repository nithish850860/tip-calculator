const billamt = document.getElementById("billamt");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const custom = document.getElementById("custom");
const peopleinput = document.getElementById("peopleinput");
const tip = document.getElementById("tip");
const total = document.getElementById("total");
const reset = document.getElementById("reset");

let bill,tips,peo;

btn1.addEventListener("click",()=>{
    tipcal(5);
    cal();
})
btn2.addEventListener("click",()=>{
    tipcal(10);
    cal();
})
btn3.addEventListener("click",()=>{
    tipcal(15);
    cal();
})
btn4.addEventListener("click",()=>{
    tipcal(25);
    cal();
})
btn5.addEventListener("click",()=>{
    tipcal(50);
    cal();
})
custom.addEventListener("keyup",()=>{
    bill = billamt.value;
    let cus = custom.value
    tips = (bill*cus)/100;
    tip.innerHTML = tips
    cal();
})

peopleinput.addEventListener("keyup",()=>{
    peo = peopleinput.value
    tot = Number(bill)  + Number(tips);
    tot = tot/Number(peo);
    if(tot == "Infinity"){
        total.innerHTML = "...";
    }
    else
    total.innerHTML = Math.round(tot);
})

const cal = ()=>{
    tot = Number(bill)  + Number(tips);
    if(peo == undefined){
        tot = tot/1;
    }
    else{
        tot = tot/Number(peo)
    }
    if(tot == "Infinity"){
        total.innerHTML = "...";
    }
    total.innerHTML = Math.round(tot);
}
const tipcal = (num)=>{
    bill = billamt.value;
    tips = (bill*num)/100;
    tip.innerHTML = tips
}
reset.addEventListener("click",()=>{
    location.reload();
})