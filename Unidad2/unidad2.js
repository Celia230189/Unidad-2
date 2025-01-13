function testUnidad2Bck(){
    /*si se declara una variable con var el ámbito de esa variable es local a una función,
    pero si se hace dentro de una función sin usar var, esta tendrá un ámbito global*/
    var numero1;
    var literal1, literal2;
    var numero3 = 8;
    var numero4 = 3, numero5 = 6;
    numero1 = 24;
    numero1;
    numero1 += 3;
    document.write("numero1: " , numero1, "<br>");
    document.write("numero3: " , numero3, "<br>");
    document.write("numero4: " , numero4, "<br>");
    document.write("numero5: " , numero5, "<br>");
    document.write("literal1: " , literal1);
    document.write("<br>");
    document.write("literal2: " , literal2);

    //Open with Live Server 

    /****************************************************************************/

    /*Se puede decir que tanto number, como boolean y string son tipos primitivos de JavaScript,
    con lo que no pueden tener ni propiedades ni métodos. Complementarios a ellos existen lo que
    se conocen como wrappers o envoltorios, los cuales se identifican con el mismo nombre, pero
    la primera letra en mayúscula (Number, Boolean y String). Estos tipos especiales son muy
    importantes para la conversión entre objetos y literales ya que, a diferencia de los primitivos,
    en este caso sí disponen de métodos.
    En JavaScript al definir una variable no se indica el tipo al que pertenece, con lo cual se puede
    declarar con un valor numérico inicialmente y, a posteriori, hacer que pase a ser un string tal
    como puede verse en el código siguiente:*/

    document.write("<br>");
    document.write("tipo 1: " , typeof "abc");
    //muestra un String porque es un primitivo
    document.write("<br>");
    document.write("tipo 2: " , typeof String("abc"));
    //convierte "abc" a una cadena
    document.write("<br>");
    document.write("tipo 3: " , typeof new String("abc"));
    //instancia un envoltorio, devuelve un objeto
    document.write("<br>");
    document.write("tipo 4: " , typeof (new String("abc")).valueOf());
    //aqui cogemos el objeto y devolvemos su valor (que es una cadena)

    //podemos convertir el tipo de int a String poniendo unas simples comillas
    let longitud = 10;
    //si ponemos comillas dice que es un cadena, si las quitamos dice que es un número
    longitud = "10";
    document.write("<br>");
    document.write("tipo de longitud: ", typeof longitud);

    /***************************************************************************/

     /*Si se declara una variable con let, esta solo estará disponible en el ámbito
    del bloque en el que ha sido declarada*/
    
    let extLet = 1;
    var extVar = 2;
    if(true){
        let intLet = 3;
        var intVar = 4;

        console.log("Dentro del bloque");
        console.log("extLet:", extLet);
        console.log("extVar:", extVar);
        console.log("intLet:", intLet);
        console.log("intVar:", intVar);
    }

    console.log("Fuera del bloque");
    console.log("extLet:", extLet);
    console.log("extVar:", extVar);
    console.log("intVar:", intVar); 
    console.log("intLet:", intLet);

    //visualizamos en la consola del navegador para combrobar su funcionamiento

    /******************************CONVERSION DE TIPOS*************************************/

   let animal = "Águila";
   let numPatas = 2;
   let numColas = "1";
   document.write(animal + numPatas); //muestra Águila2
   /*Esto ocurre porque internamente numPatas se convierte a cadena, que se concatena con la
    variable animal.*/

    document.write("<br>");
    document.write(numPatas + numPatas + animal);
    /*En el primer caso se han sumado los valores de numPatas y, a continuación, se ha concatenado
    “Águila”*/
    document.write("<br>");
    document.write(animal + numPatas + numPatas);
    /*mientras que en el segundo caso primero se produce la concatenación de “Águila” y 2, y en la
    cadena resultante se concatena el valor 2. */
    document.write("<br>");
    document.write(numPatas + numColas);
    /*Por la misma razón, si el valor de una de las variables fuese un número entre comillas (por
    ejemplo: “2”), el resultado sería la concatenación de los dos números en lugar de la suma*/

    let cadena = "3.1415926";
    let nombre = "42";
    let nom = "Joan";
    let aprobado = true;
    document.write("<br>");
    document.write(Boolean(cadena));
    document.write("<br>");
    document.write(Boolean(0));
    document.write("<br>");
    document.write(Boolean(-10));
    document.write("<br>");
    document.write(Boolean(""));
    document.write("<br>");
    document.write(Boolean(null));
    document.write("<br>");
    document.write(Boolean(undefined));

    document.write("<br>");
    document.write(String(nombre));
    document.write("<br>");
    document.write(String(nombre)+nombre);
    document.write("<br>");
    document.write(String(aprobado));

    document.write("<br>");
    document.write(Number(nom));
    document.write("<br>");
    document.write(Number(cadena)*2);
    document.write("<br>");
    document.write(Number(aprobado));
    document.write("<br>");
    document.write(parseInt(cadena));
    document.write("<br>");
    document.write(parseFloat(cadena));

    //********************************LITERALES************************************** */

    //Declaramos un array con las tres librerías o bibliotecas de frontend más conocidas
    const libs = ["React", "Vue", "Angular"];
    document.write(`Este curso trata de ${libs[0]}`); //${libs[0]} devuelve React
    document.write("<br>");

    const l = libs.length;
    document.write(`
        ${l>1 ? `Estas ${l} bibliotecas` : "Esta biblioteca"}:
        ${libs.join(", ")}
        `);

} //Fin backup

function testUnidad2_1_bck2(){

     /********************************CONDICIONALES*******************************/

     let nombre1;
     let nota;
     nombre=prompt("Escriba nombre: ","");
     nota=prompt("Escriba su nota:","");
     if(nota>=5)
         alert(nombre + " está aprobado con un " + nota);

     /*****************************************************************************/

     let num1, num2;
 num1=prompt("Introduce el primer número:" , "");
 num2=prompt("introduce el segundo número:" , "");
 num1=parseInt(num1);
 num2=parseInt(num2);
 if(num1>num2)
     alert("El mayor es " + num1);
 else
     alert("El mayor es " + num2);

 /**********************************************************************************/

 let nota1, nota2, nota3;
 nota1=prompt("Introduce 1ra. nota:" , "");
 nota2=prompt("Introduce 2da. nota:" , "");
 nota3=prompt("Introduce 3ra. nota:" , "");

 //Se convierten los tres string en enteros
 nota1=parseInt(nota1);
 nota2=parseInt(nota2);
 nota3=parseInt(nota3);

 let pro;
 pro = (nota1 + nota2 + nota3) / 3;

 if(pro >= 9)
     alert("Sobresaliente");
 else if(pro >= 7)
     alert("Notable");
 else if(pro >= 5)
     alert("Aprobado")
 else
     alert("Suspenso");

     /*******************************************************************************/

     let valor;
     valor=prompt("Ingrese un valor comprendido entre 0 y 10:" , "");
  
     //Se convierte a entero
     valor=parseInt(valor);
  
     switch(valor) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
          alert("Suspenso");
          break;
      case 5:
      case 6:
          alert("Aprobado");
          break;
      case 7:
      case 8:
          alert("Notable");
          break;
      case 9:
      case 10:
          alert("Sobresaliente");
          break;
      default:
          alert("Debe ingresar un valor entre el 0 y 10.");
     }

     /*******************************************************************************/

     let valor1;
     valor1=prompt("Ingrese un valor comprendido entre 0 y 10:" , "");
  
     //Se convierte a entero
     valor1=parseInt(valor1);
  
     switch(true) {
      case valor1>=0 && valor1<5:
          alert("Suspenso");
          break;
      case valor1>=5 && valor1<7:
          alert("Aprobado");
          break;
      case valor1>=7 && valor<9:
          alert("Notable");
          break;
      case valor1>=9 && valor<=10:
          alert("Sobresaliente");
          break;
      default:
          alert("Debe ingresar un valor entre el 0 y 10.");
     }

     /**********************************TRULY-FALSY****************************************/

     let v ="cualquier valor";
     if(v)
         alert("verdadero");
     else
         alert("falso");
 
     /*En este caso el resultado será ver por pantalla "verdadero". 
     El motivo es que dentro de la expresión a evaluar en el condicional se encuentra una cadena
     de texto y ésta se convierte automáticamente a un booleano para poder devolver un resultado 
     y ejecutar la rama pertinente del condicional.
    
    - undefined: se interpreta como falso. Un miembro de un objeto que no existe, por ejemplo.
    - Null: sería falso también.
    - NaN: falso
    - Un número: si es 0 se interpreta como falso, siendo verdadero para cualquier otro valor.
    - Cadenas de texto: si la cadena está vacía (""), entonces es falso.
      Cualquier otra cadena se interpreta como un verdadero.
     -Un objeto cualquiera siempre se interpreta como true.
     */ 

     let v1 = "cualquier cosa";
     if(v1 == true)
          alert("verdadero")
      else 
          alert("falso")
  
    /*En este caso aparentemente no ha cambiado demasiado. Cabría pensar que como v contiene
    una cadena no vacía (un valor verdadoso) el condicional sigue siendo cierto. 
    Sin embargo, lo que se verá por pantalla será "falso". El motivo es que ahora
    lo que se está haciendo es comparar el valor de la variable v, que es una cadena,
    con un booleano para ver si son iguales. Y no lo son.*/ 

     let v2 = "ciualquier cosa";
  if(v2 && true)
    alert("verdadero")
  else
    alert("false")

    /*¿Qué pasaría si se utilizara un operador booleano (AND, OR…) dentro de la expresión?
    Lo que se ha hecho es comparar el valor v con true usando un operador AND (&&).
    Según la lógica es equivalente a comprobar la igualdad, ya que el AND solo devuelve 
    true si ambas partes son true. En este caso, sin embargo, se mostraría por pantalla la 
    palabra "verdadero" y no "falso" como en el anterior. ¿Por qué? 
    El motivo es que ahora el valor de la variable v se convierte a booleano antes de hacer 
    la operación, ya que está en el contexto de un operador lógico booleano.*/

    /************************************************************************************/

     /*Es gracias a esto que, por ejemplo, se puede verificar la existencia de ciertas 
     características en un navegador escribiendo cosas como:*/ 

     if(window.Worker)
        alert("Este navegador soporta Web Workers");
    else
        alert("¡¡Navegador viejo!! ¡¡Actualízate!!");

        /***************************BUCLE WHILE Y DO WHILE************************************/

        let x;
        x = 1;
        while(x<=100){
        document.write(x);
        document.write("<br>");
        x++;
        }

        /*Muestra todos los numeros hasta el 100*/

        let x1 = 1;
        do{
        document.write(x1);
        document.write("<br>");
        x1++;
        } while (x1<=100);

    /*Aqui mostraría el mismo resultado pero con una estructura do while*/

    let valorA;
do{
    valorA = prompt("Ingrese un valor entre 0 y 999:","");
    valorA = parseInt(valorA);
    if(valorA<0 || valorA>999 || isNaN(valorA))
    {
        document.write("El número ",valorA," no está en el rango elegido (0,999). El programa terminará.");
    }
    else if(valorA<10)
        document.write("El valor ",valorA," introducido tiene 1 dígito.");
    else if(valorA<100)
        document.write("El valor ",valorA," introducido tiene 2 dígitos.");
    else
        document.write("El valor ",valorA," introducido tiene 3 dígitos.");
    document.write("<br />");

} while(valorA<0 && valorA>=999);

/***********************************BUCLE FOR************************************************/

let f;
for ( f=1; f<=10; f++){
    document.write(f + " ");
}

/*Si inicializas la variable fuera del bucle for puedes omitirla dentro */

let i=0;
let res = " ";
for(; i<10; i++)
    res += i
document.write(res);

/**************************************BUCLE FOR IN*************************************/
/*El bucle for...in es una modificación del bucle for que permite explorar todas las propiedades
 de un objeto o los componentes de una colección. Al igual que en for, se usa una variable para
 iterar, solo que, si se trabaja con un objeto, la variable índice del bucle for estándar
 se sustituye por una variable de tipo cadena que contendrá el nombre de cada una de las
 propiedades del objeto manejado en el bucle for...in. Si se trabaja con matrices,
 la variable será numérica y contendrá la situación del componente respecto de la matriz.
 No se necesita la condición que se ha de evaluar para saber si se debe ejecutar el cuerpo
 puesto que lo hará siempre que existan propiedades distintas dentro del objeto o componentes
 aún no explorados en la matriz.*/

 let NombreObjeto, objeto;
 NombreObjeto = prompt("Introduzca el nombre de un objeto", "navigator");
 objeto = eval(NombreObjeto);
 for(let propiedad in objeto){
     document.write("La propiedad con nombre ", NombreObjeto, ".", propiedad," vale: ", objeto[propiedad], "<br>");
 
 }

 /***************************ESTRUCTURAS DE CONTROL DE ERRORES*****************************/
/*Una estructura disponible en JavaScript (así como en otros lenguajes de programación) es try ... catch, resultando de gran utilidad para detectar errores y procesarlos de la forma deseada.
En caso de que ocurra algún error dentro del try se procesará la parte del catch().

En el siguiente ejemplo se generaría un error al procesar la suma
(puesto que la variable 'y no está definida)
 y se mostraría el mensaje especificado dentro del catch():*/ 

 let xE = 33;
 try
 {
     xE+=y;
 }
 catch(e)
 {
 alert("error: "+e.message);
 }
 finally
 {
     alert("Esto se ejecuta siempre")
 }

    
} //Fin backup2


function testUnidad2_1(){

   
}//fin function 


