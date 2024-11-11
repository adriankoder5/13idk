console.log('testekko')

function persInf(){
    let usrN ='adr';
    let usrAge =19;
    let isOnline =true;
    console.log(usrN,typeof(usrN),usrAge,typeof(usrAge),isOnline,typeof(isOnline));
}
//persInf();

function simpleCalc(num1,num2){
    let summer = num1+num2;
    console.log(num1,'+',num2,'=',summer,typeof(summer),'func = simpleCalc');
    return(summer);
}
simpleCalc(2,4)
//console.log('returnTest',simpleCalc(6,4));

//person info knapp
const persShowVar = document.querySelector("#persShow");
console.log(persShowVar);
persShowVar.addEventListener("click", persInf);

//simpel calc knapp
const calcShowVar = document.querySelector("#calcShow");
console.log(calcShowVar);
calcShowVar.addEventListener("click", function (){simpleCalc(3,4)});