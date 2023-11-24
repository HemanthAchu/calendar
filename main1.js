



const fun=()=>{

const  result = new Date()
const months=result.getMonth()+1//11
const years=result.getFullYear()//2023
const date=result.getDate()//23
const hours =result.getHours()//12
const minites =result.getMinutes()//min
const seconds =result.getSeconds()//sec

   const displaytime =hours>=12?`${hours}:${minites}:${seconds} PM`:`${hours}:${minites}:${seconds} AM`
   time.innerHTML=displaytime
   year.innerHTML=years

if (months==1){
    month.innerHTML="JAN"
}else if(months==2){
    month.innerHTML="FEB"
}else if(months==3){
    month.innerHTML="MAR"
}else if(months==4){
    month.innerHTML="APR"
}else if(months==5){
    month.innerHTML="MAY"
}else if(months==6){
    month.innerHTML="JUNE"
}else if(months==7){
    month.innerHTML="JULY"
}else if(months==8){
    month.innerHTML="AGT"
}else if(months==9){
    month.innerHTML="SEP"
}else if(months==10){
    month.innerHTML="OCT"
}else if(months==11){
    month.innerHTML="NOV"
}else if(months==12){
    month.innerHTML="DEC"
}






    if (date==1) {
        two1.style.color="red"
        two1.style.background=" rgba(105, 103, 103, 0.326)"
    }else if (date==2) {
        two2.style.color="red"
        two2.style.background=" rgba(105, 103, 103, 0.326)"
    }else if (date==3) {
        two3.style.color="red"
        two3.style.background=" rgba(105, 103, 103, 0.326)"
    }else if (date==4) {
        two4.style.color="red"
        two4.style.background=" rgba(105, 103, 103, 0.326)"
    }else if (date==5) {
        two5.style.color="red"
        two5.style.background=" rgba(105, 103, 103, 0.326)"
    }else if (date==6) {
        two6.style.color="red"
        two6.style.background=" rgba(105, 103, 103, 0.326)"
    }else if (date==7) {
        two7.style.color="red"
        two7.style.background=" rgba(105, 103, 103, 0.326)"
    }else if (date==8) {
        two8.style.color="red"
        two8.style.background=" rgba(105, 103, 103, 0.326)"
    }else if (date==9) {
        two9.style.color="red"
        two9.style.background=" rgba(105, 103, 103, 0.326)"
    }else if (date==10) {
        two10.style.color="red"
        two10.style.background=" rgba(105, 103, 103, 0.326)"
    }else if (date==11) {
        two11.style.color="red"
        two11.style.background=" rgba(105, 103, 103, 0.326)"
    }else if (date==12) {
        two12.style.color="red"
        two12.style.background=" rgba(105, 103, 103, 0.326)"
    }else if (date==13) {
        two13.style.color="red"
        two13.style.background=" rgba(105, 103, 103, 0.326)"
    }else if (date==14) {
        two14.style.color="red"
        two14.style.background=" rgba(105, 103, 103, 0.326)"
    }else if (date==15) {
        two15.style.color="red"
        two15.style.background=" rgba(105, 103, 103, 0.326)"
    }else if (date==16) {
        two16.style.color="red"
        two16.style.background=" rgba(105, 103, 103, 0.326)"
    }else if (date==17) {
        two17.style.color="red"
        two17.style.background=" rgba(105, 103, 103, 0.326)"
    }else if (date==18) {
        two18.style.color="red"
        two18.style.background=" rgba(105, 103, 103, 0.326)"
    }else if (date==19) {
        two19.style.color="red"
        two19.style.background=" rgba(105, 103, 103, 0.326)"
    }else if (date==20) {
        two20.style.color="red"
    }else if (date==21) {
        two21.style.color="red"
        two21.style.background=" rgba(105, 103, 103, 0.326)"
    }else if (date==22) {
        two22.style.color="red" 
        two22.style.background=" rgba(105, 103, 103, 0.326)"
    }else if (date==23) {
        two23.style.color="red"
        two23.style.background=" rgba(105, 103, 103, 0.326)"
    }else if (date==24) {
       two24.style.color="red"
       two24.style.background=" rgba(105, 103, 103, 0.326)"
    }else if (date==25) {
        two25.style.color="red"
        two25.style.background=" rgba(105, 103, 103, 0.326)"
    }else if (date==26) {
        two26.style.color="red"
        two26.style.background=" rgba(105, 103, 103, 0.326)"
    }else if (date==27) {
        two27.style.color="red"
        two27.style.background=" rgba(105, 103, 103, 0.326)"
    }else if (date==28) {
        two28.style.color="red"
        two28.style.background=" rgba(105, 103, 103, 0.326)"
    }else if (date==29) {
        two29.style.color="red"
        two29.style.background=" rgba(105, 103, 103, 0.326)"
    }else if (date==30) {
        two30.style.color="red"
        two30.style.background=" rgba(105, 103, 103, 0.326)"
    }else if (date==31) {
        two31.style.color="red"
        two31.style.background=" rgba(105, 103, 103, 0.326)"
    }
    setInterval(() => {
        fun()
    }, 1000);
}

fun()
