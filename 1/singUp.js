const singUp = (namen) => {
    console.log(`Will kommen ${namen}! Schön, dass du da bist!`)
}

const singOut = (namen) => {
    console.log(`Tschüss ${namen}, schön dass du da warst.`)
}

module.exports = {
    funcSingUp: singUp,
    funcSingOut: singOut
}

