console.log("hello typescript")

console.log('Hello, TypeScript');

//TIPOS
// Boolean
let muted: boolean = true;
muted = false;

// Números
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

// String
let nombre: string = 'Richard';
let saludo = `Me llamo ${nombre}`;

// Arreglos
//En javascript los arreglos peuden ser elementos de varios tipos
//En typescript se puede establecer de un único tipo
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raul'];
// people.push("9000")

//También se pueden declarar de varios tipos string and number
let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(9001);

// Enum
enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul',
  Amarillo = 'Amarillo',
}

let colorFavorito: Color = Color.Amarillo;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comodin: any = 'Joker';
comodin = { type: 'Wildcard' };

// Object
let someObject: object = { type: 'Wildcard' };

//----

//FUNCIONES
function add(a: number, b: number): number {
    return a + b;
  }
  
  const sum = add(4, 6);
  
  //tipar funciones que son retornadas por otras funciones
  //(number) => number indica que la función que vamos a retornar retorna recibe un número (number) 
  //y retorna un número => number
  function createAdder(a: number): (number) => number {
    return function(b: number) {
      return b + a;
    };
  }
  
  const addFour = createAdder(4);
  const fourPlus6 = addFour(6);
  
  //Si colocamos un valor por defecto (lastname), lo interpreta como un parámetro opcional
  //tambièn se puede con lastname?: string
  function fullName(firstName: string, lastName: string = 'Smith'): string {
    return `${firstName} ${lastName}`;
  }
  
  const richard = fullName('Agente');
  console.log(richard);