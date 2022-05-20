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
const replaceTemplate =(temp, product)=>{
    let output=temp.replace(/{%PRODUCTNAME%}/g, product.productName)
    output=output.replace(/{%IMAGE%}/g, product.image)
    output=output.replace(/{%PRICE%}/g, product.price)  
    output=output.replace(/{%FROM%}/g, product.from)  
    output=output.replace(/{%NUTRIENTS%}/g, product.nutrients)  
    output=output.replace(/{%QUANTITY%}/g, product.quantity)  
    output=output.replace(/{%DESCRIPTION%}/g, product.description)
    output=output.replace(/{%ID%}/g, product.id)
    if(!product.organic) output=output.replace(/{%NOT_ORGANIC%}/g, 'not-organic')  
    return output
}

const tempOverview=fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8')
const tempCard=fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8')
const tempProduct=fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8')

const data=fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const productData= JSON.parse(data)



const server=http.createServer((req, res)=>{
    const pathName = req.url

    //Overview Page
    if(pathName==='/' || pathName === '/overview'){
        res.writeHead(200, {'Content-type':'text/html'}) 
        const cardsHTML=productData.map(x=>replaceTemplate(tempCard, x)).join('')
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHTML)
        res.end(output)
    }
    else if(pathName === '/product'){ 
        res.end('this is product') 
    }
    //API
    else if(pathName === '/api'){ 
        res.writeHead(404, {
            'Content-type':'application/json',
        })
        res.end(data)
    }
    //NOT found
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

