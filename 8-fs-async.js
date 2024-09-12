const { ifError } = require('assert');
const { error } = require('console');
const {readFile,writeFile}=require('fs')
console.log('starting the process...')
readFile('./content/first.txt','utf-8',(err,result)=>{
    if (err) {
        console.log(err)
    }
    console.log(result)
    const firstcontent=result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if (err) {
            console.log(err)
        }
    const secondContent=result  
    writeFile('./content/asyncFile.text',
        `Here is the result : ${firstcontent},${secondContent}`,
        (err,result)=>{
            if (err){
                console.log('while writing the content ',err)
            }
            console.log("writing file succesful",result)
        }
    ) 
    })
    console.log("Completed the writing process..")
    

})

console.log('Ending the process..')