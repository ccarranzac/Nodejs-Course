const fs = require('fs')
const crypto = require('crypto')

const start= Date.now()
process.env.UV_THREADPOOL_SIZE=2

setTimeout(()=> console.log("Timer 1 Finish"), 0)
setImmediate(()=> console.log("Inmediate 1 finish"))

fs.readFile('test-file.txt',()=>{
    console.log('I/O finished')
    console.log('-------------------------')
    setTimeout(()=> console.log("Timer 2 Finish"), 0)
    setTimeout(()=> console.log("Timer 3 Finish"), 3000)
    setImmediate(()=> console.log("Inmediate 2 finish"))

    process.nextTick(()=> console.log("process.nextTick"))

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', ()=>{
        console.log(Date.now() - start,' password encrypted')
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', ()=>{
        console.log(Date.now() - start,' password encrypted')
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', ()=>{
        console.log(Date.now() - start,' password encrypted')
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', ()=>{
        console.log(Date.now() - start,' password encrypted')
    })
})

console.log("Hello From top level code");