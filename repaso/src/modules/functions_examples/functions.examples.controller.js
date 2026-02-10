/*CARACTERISTICAS DE UNA FUNCION FLECHA
*/
//1. Si es una sola instruccion se pueden quitar las llaves
//Forma tradicional
function functionAux1(){
    console.log('Hola');
    
}

//Funcion flecha
const function1 = () => console.log('Hola');

//Ejemplo
//Forma tradicional
async function fetchAuxFunction ()  {
    try{
        let response = await fetch('', {});
        let result = response.json();

        if(result.status < 400){
            return result.data;
        }else{
            return null;
        }

    }catch(ex){
        console.log(ex);
        
    }
}

//funcion flecha
const fetchFunction = async () => await fetch('', {})
.then()
.then(response => response.json())
.catch(console.log);


//2.- Si solo tengo un parametro, puedo quitar los parentesis de los parametros de la funcion

//Ejemplo
const function2 = name => console.log(name);

const functionAux = (item, index) => {}

/*
apiResult = {
    data: "info",
    status: 200,
    message: "mensaje de la api"
}
    */

//RESTRICCION: Si es una sola variable pero hay que destructurar lleva () OBLIGATORIAMENTE
const treatResponse = ({data}) => {}


//3.- Resumir instrucciones requiere que se cumplan las reglas 1 y 2

//Forma tradicional
fetch().then().then().catch(ex => {
    console.log(ex)
})

//Funcion flecha
fetch().then().then().catch(console.log)

//4.- Los retornos explicitos e implicitos

//Forma tradicional
function suma2NumerosAux(num1,num2){
    return num1 + num2;
}

//funcion flecha
//Primera forma(retorno explicito)
const sumaExplicita = (num1,num2) => {
    return num1 + num2;
}

//Segunda forma(retorno implicito)
const sumaImplicita = (num1, num2) => num1 + num2;
const getDataOfArray = (array, index) => array[index];

(()  => {
    let resultado = sumaImplicita(2,5); // res= 7
    let data =getDataOfArray([1,2,4], 2) // res = 4
})()

//Retorno de un objeto/lista, hay que encerrarl entre parentesis para que las llaves//corchetes
//no confunda  el retorno implicito
const returnObject = () => ({
    name: 'daniel',
    age: 20
})

                //Si la funcion tiene un tipo de retorno void, entonces aunque sea retorno implicito no retorna nada
const logFunction = () => console.log();
