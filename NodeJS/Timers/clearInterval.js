// setTimeout rodar uma função depois de X milissegundos
const timeOut = 1000
const finished = () => console.log('cheking!')

let cheking = setInterval(cheking, timeOut)

setTimeout( () => clearInterval(interval), 4000)