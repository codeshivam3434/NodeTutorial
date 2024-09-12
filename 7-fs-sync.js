const { readFileSync, writeFileSync } = require('fs')
console.log('starting...')
const first = readFileSync('./content/first.txt', 'utf-8')
const seconds = readFileSync('./content/second.txt', 'utf-8')

console.log(first)
console.log(seconds)

writeFileSync(
    './content/result-sync.txt',
    `here is the result: ${ first }, ${ seconds}`
    //pass the flag {flag:'a'} to append the new update in first and second it will append the whole content with new update again
)

const firstFileContent=readFileSync('./content/first.txt','utf-8',()=>{
    console.log('Readed Successfullu')
})

console.log('Ending the process...')
console.log(`First File Content : ${firstFileContent}`)
console.log('End the process')