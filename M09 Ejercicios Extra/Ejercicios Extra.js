/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var array = [];
   for (let prop in objeto) {
      array.push([prop,objeto[prop]])
   }
   return array;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var contador =  {
       a: 0,
       b: 0,
       c: 0,
       d: 0,
       e: 0,
       f: 0,
       g: 0,
       h: 0,
       i: 0,
       j: 0,
       k: 0,
       l: 0,
       m: 0,
       n: 0,
       o: 0,
       p: 0,
       q: 0,
       r: 0,
       s: 0,
       t: 0,
       u: 0,
       v: 0,
       w: 0,
       x: 0,
       y: 0,
       z: 0
   };
   string.split("").forEach(elem => {
       switch (elem) {
           case "a":
               contador.a += 1;
               break;
           case "b":
               contador.b += 1;
               break;
           case "c":
               contador.c += 1;
               break;
           case "d":
               contador.d += 1;
               break;
           case "e":
               contador.e += 1;
               break;
           case "f":
               contador.f += 1;
               break;
           case "g":
               contador.g += 1;
               break;
           case "h":
               contador.h += 1;
               break;
           case "i":
               contador.i += 1;
               break;
           case "j":
               contador.j += 1;
               break;
           case "k":
               contador.k += 1;
               break;
           case "l":
               contador.l += 1;
               break;
           case "m":
               contador.m += 1;
               break;
           case "n":
               contador.n += 1;
               break;
           case "o":
               contador.o += 1;
               break;
           case "p":
               contador.p += 1;
               break;
           case "q":
               contador.q += 1;
               break;
           case "r":
               contador.r += 1;
               break;
           case "s":
               contador.s += 1;
               break;
           case "t":
               contador.t += 1;
               break;
           case "u":
               contador.u += 1;
               break;
           case "v":
               contador.v += 1;
               break;
           case "w":
               contador.w += 1;
               break;
           case "x":
               contador.x += 1;
               break;
           case "y":
               contador.y += 1;
               break;
           default:
               contador.z += 1;
               break;
       }
   })
   for (i in contador) {
       if (contador[i] === 0) {
           delete contador[i]
       }
   }
   return contador;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
   var array = string.split("");
   var stringListo = [];
   array.forEach(elem => {
       if (abecedario.includes(elem)) {
           stringListo.push(elem);
       }
   });
   array.forEach(elem => {
       if (!abecedario.includes(elem)) {
           stringListo.push(elem);
       }
   });
   return stringListo.join("");
}
function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var array = frase.split(" ");
   var array2 = [];
   array.forEach(elem => {
      array2.push(elem.split("").reverse().join(""))
   });
   return array2.join(" ")
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numero2 = numero + "";
   numero2 = numero2.split("").reverse().join("");
   if (numero + "" === numero2) {
      return "Es capicua";
   } else {
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var stringNuevo = [];
   string.split("").forEach(elem => {
      if (elem === "a" || elem === "b" || elem === "c") {
      } else {
         stringNuevo.push(elem);
      }
   })
   return stringNuevo.join("");
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var palabraMasCorta = arrayOfStrings[0];
   var palabraMasLarga = arrayOfStrings[0];
   var array = [];
   for (let i in arrayOfStrings) {
       if (arrayOfStrings[i].length > palabraMasLarga.length) {
           palabraMasLarga = arrayOfStrings[i];
       }
   };
   for (let i = 0; i < arrayOfStrings.length; i++) {
       for (let x of arrayOfStrings) {
           if (x.length < palabraMasCorta.length) {
               palabraMasCorta = x;
           }
       }
       arrayOfStrings[arrayOfStrings.indexOf(palabraMasCorta)] = palabraMasLarga;
       array.push(palabraMasCorta);
       palabraMasCorta = palabraMasLarga;
   }
   return array;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var array = [];
   array1.forEach(elem => {
      if (array2.includes(elem)) {
         array.push(elem);
      }
   })
   return array;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
