// Iteration 1: Names and Input
/*
1.1 Cree una variable hacker1 con el nombre del conductor.
1.2 Escriba "El nombre del conductor es XXXX".
1.3 Cree una variable hacker2 con el nombre del navegador.
1.4 Imprimir "El nombre del navegante es YYYY". */


const hacker1 = 'Pere';
console.log('El nombre del conductor es ' + hacker1);


const hacker2 = 'Ana';
console.log('El nombre del navegante es ' + hacker2);






//-----------------------------------------------------------------------------------------//
// Iteration 2: Conditionals
/*2.1. Dependiendo de qué nombre es más largo, escriba:
- El conductor tiene el nombre más largo, tiene XX caracteres. o
- Parece que el navegador tiene el nombre más largo, tiene XX caracteres. o
- Wow, ambos tienen nombres igualmente largos, ¡XX caracteres!. */


const hacker1 = 'Pere';
const hacker2 = 'Ana';


const length1 = hacker1.length;
const length2 = hacker2.length;


if (length1 > length2) {
  console.log(`El conductor tiene el nombre más largo, tiene ${length1} caracteres.`);
} else if (length2 > length1) {
  console.log(`Parece que el navegador tiene el nombre más largo, tiene ${length2} caracteres.`);
} else {
  console.log(`Wow, ambos tienen nombres igualmente largos, ¡${length1} caracteres!.`);
}




