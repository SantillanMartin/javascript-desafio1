let total =0;
let platos=0;
let menuElegido;
let decision="si";
let hamburguesas="Hamburguesas con papas fritas";
let contadorHamburguesas=0;
let pollo="Pollo al spiedo con pure";
let contadorPollo=0;
let milanesas="Milanesas de soja con ensalada mixta";
let contadorMilanesas=0;
let filet="Filet de merluza con pure"
let contadorFilet=0;
let flag=true;

alert("Instrucciones:\n Debe seleccionar por numero. Todos los platos cuestan $500,puede llevar la cantidad que desee.")


while(decision=="si"){
    menuElegido=parseInt(prompt("Bienvenido comprador, este es el menu del dia de hoy: \n1." +hamburguesas +"\n2."+pollo+"\n3."+ milanesas+"\n4."+filet));

    while(menuElegido!=1 && menuElegido !=2 && menuElegido!=3 &&menuElegido!=4){
        menuElegido=parseInt(prompt("Eligio una opcion incorrecta, debe elegir del 1 al 4 unicamente"));
    }
    
    if(menuElegido==1){
        contadorHamburguesas++;
    }else if(menuElegido==2){
        contadorPollo++;
    }else if(menuElegido==3){
        contadorMilanesas++;
    }else{
        contadorFilet++;
    }
    platos=platos+1;
    total=total+500;
    flag=false;
    decision=prompt("Para seguir agrando platos escriba: si, sino marque cualquier otra letra");
    
}

alert("Usted lleva "+platos+" platos:\n"+contadorHamburguesas+" "+hamburguesas+"\n"+contadorPollo+" "+pollo+"\n"+contadorMilanesas+" "+milanesas+"\n"+contadorFilet+" "+filet+"\n Total: $"+total);