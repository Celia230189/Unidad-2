function testUnidad3_Bck(){

    eval("x=50;y=30;document.write(x*y)"); //Muestra 1500
    document.write("<br>", eval("8+6")); //Muestra 14
    document.write("<br>", eval(x+30)); //Muestra 80

    /************************************************************************************/

    let valor = prompt("Introduce la contraseña");
    if(valor == "HOLA123")
        alert("La contraseña es correcta")
    else
        alert("La contraseña no es correcta [" +valor+ "]");

    /************************************************************************************** */

    let numArray =new Array(0, 1, 2, 3, 4, 5);
    console.log(numArray.length);
    document.write(numArray.join(' - '));
 
    let coches = new Array();
    coches[0] = "Porsche";
    coches[1] = "Renault";
    coches[2] = "Seat";
    coches[10] = "Opel";
    console.log(coches[10]);
 
    let colores = ["rojo", "verde", "amarillo"];
    console.log(colores[1]);

    /******************************************************** */

  let ejemplo = [0,1,2,3];
  let otraMatriz = ejemplo.slice(1,3);
  //otraMatriz[1] = 4;
  console.log(ejemplo);
  console.log(otraMatriz);
  //slice coge una rodaja de los elementos que yo quiero de la matriz y hace una copia


}

function testUnidad3(){
  let ejemplo1 = [0,1,2,3,4,5,6,7];
  let otraMatriz1 = ejemplo1.splice(3,2);
  console.log(ejemplo1);
  console.log(otraMatriz1);
  //splice corta la matriz, saca los elementos que yo quiero y crea otra matriz con ellos
 // elemento inicial de índice 3 y número de elementos a quitar

}

function PruebaCaller(){
    if(PruebaCaller.caller == null){
        alert("Me llamas desde la propia función");
    }
    else
        alert("Desde ahí no me puedes llamar");
}

//CLASE 28/10 MINUTO 1:19:48