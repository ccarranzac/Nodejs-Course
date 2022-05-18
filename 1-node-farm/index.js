const fs = require('fs')
const http = require('http')
const url=require('url')

////////////////////// Files ///////////////////////////////
// Blocking synchronous way
// const textIn=fs.readFileSync('./txt/input.txt', 'utf-8')
// console.log(textIn);

// const textOut= `This is what we know about avocado: ${textIn}.\nCreated on ${Date.now()}`
// fs.writeFileSync('./txt/output.txt', textOut)
// console.log('File written');

//Non-Blocking asynchronous way
// fs.readFile('./txt/start.txt','utf-8', (error, data1)=>{
//     if(error) return console.log("Error: "+error);
//     fs.readFile(`./txt/${data1}.txt`,'utf-8', (error, data2)=>{
//         console.log(data2);
//         fs.readFile('./txt/append.txt','utf-8', (error, data3)=>{
//             console.log(data3);
//             fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8', error=>{
//                 console.log("file has been written");
//             })
//         })
//     })
// })
// console.log("reading file");

//////////////////////////server///////////////////////////
const server=http.createServer((req, res)=>{
    const pathName = req.url
    if(pathName==='/' || pathName === '/overview'){ 
        res.end('this is overview')
    }
    else if(pathName === '/product'){ 
        res.end('this is product') 
    }
    else{ 
        res.writeHead(404, {
            'Content-type':'text/html',
            'custom-header':'hello world'
        })
        res.end('<h1>Page not found</h1>') 
    }
})


server.listen(8000, '127.0.0.1', ()=>{
    console.log('Listening to request on port 8000');
})

