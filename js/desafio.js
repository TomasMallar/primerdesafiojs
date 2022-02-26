let entrada = prompt("Ingresar un color primario para salir escriba ESC");
//Repetimos hasta que se ingresa la palabra "ESC"

while(entrada != "ESC" ){

   switch (entrada) {

       case "rojo":
            alert("rojo es un buen color");
            break;
       
       case "azul":
            alert("azul como el mar azul");
            break;
       
       case "amarillo":
            alert("amarrillo patiito");
            break;

        default:
           alert("No sabes cuales son los colores primarios? Dale vamos de nuevo")
           break;
   }
   
   entrada = prompt("Ingresar un color primario");
}
