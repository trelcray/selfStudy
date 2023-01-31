// setTimeout rodar uma função depois de X milissegundos
const timeOut = 1000
const cheking = () => console.log('cheking!')

let interval = setInterval(cheking, timeOut)