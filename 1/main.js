const someData = require('./data')
const someFunc = require('./func')
const singUpFile = require('./singUp')
const nameData = require('./data2')


console.log('Hello from Node.js...')

const names = "Superman"

const sayHelllo = () => {
    return `Hello ${names}`
}

console.log(sayHelllo())

console.log(__dirname)
console.log(__filename)


console.log(someData)
someFunc(5, 2)

// singUp('Batman')
console.log(singUpFile)
singUpFile.funcSingOut("Batman")
singUpFile.funcSingUp("Wonderwoman")

console.log(nameData)
singUpFile.funcSingUp(nameData.name2)