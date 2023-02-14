import Singleton from './Singleton'

const a = Singleton.getInstance()
const b = Singleton.getInstance()

console.log("A es igual a B", a === b)

//Ejemplo de uso: una ventana modal
//una única instancia para no abrir una encima de la otra