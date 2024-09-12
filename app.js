// // // // const {TimerBomb}=require('./bomModule')
// // // // TimerBomb()

// // // // const {john,peter}=require('./5-utils')
// // // // const sayHi1=require('./4-namesModule')

// // // // const {sayHi}=require('./4-namesModule')
// // // // sayHi1.sayHi(john)
// // // // sayHi1.sayHi(peter)
// // // // // console.log(module)
// // // // console.log(typeof(sayHi))
// // // // console.log(sayHi)
// // // // console.log(typeof(sayHi1))


// // // //modules learnings

// // // // const os=require('os')
// // // // const user=os.userInfo()
// // // // console.log(user)
// // // // console.log(`the system uptime is ${os.uptime()} seconds`)
// // // // //(get-date) - (gcim Win32_OperatingSystem).LastBootUpTime   --to check exaclty how many TIME COMPUTER IS RUNNING CONTINOUSLY
// // // // //systeminfo | find "System Boot Time" CAN ALSO BE USE

// // // // const currentOS={
// // // //     name:os.type(),
// // // //     release:os.release()

// // // // }
// // // // console.log(currentOS)
// // // const path=require('path')
// // // console.log(path.sep)
// // // const filepath=path.join('content','subfolder','test.txt')
// // // console.log(filepath)
// // // const absolute=path.resolve(__dirname,filepath)
// // // console.log(absolute)
// // // const base=path.basename(absolute)
// // // console.log(base)


// // const { readFileSync, writeFileSync } = require('fs')

// // const first = readFileSync('./content/first.txt', 'utf-8')
// // const seconds = readFileSync('./content/second.txt', 'utf-8')

// // console.log(first)
// // console.log(seconds)

// // writeFileSync(
// //     './content/result-sync.txt',
// //     `here is the result: ${ first }, ${ seconds}`
// //     //pass the flag {flag:'a'} to append the new update in first and second it will append the whole content with new update again
// // )

// // const firstFileContent=readFileSync('./content/first.txt','utf-8',()=>{
// //     console.log('Readed Successfullu')
// // })

// // console.log(`First File Content : ${firstFileContent}`)


// const { ifError } = require('assert');
// const { error } = require('console');
// const {readFile,writeFile}=require('fs')

// readFile('./content/first.txt','utf-8',(err,result)=>{
//     if (err) {
//         console.log(err)
//     }
//     console.log(result)
//     const firstcontent=result;
//     readFile('./content/second.txt','utf-8',(err,result)=>{
//         if (err) {
//             console.log(err)
//         }
//     const secondContent=result  
//     writeFile('./content/asyncFile.text',
//         `Here is the result : ${firstcontent},${secondContent}`,
//         (err,result)=>{
//             if (err){
//                 console.log('while writing the content ',err)
//             }
//             console.log("writing file succesful",result)
//         }
//     ) 
//     })
    

// })

// const http = require('http');

// const server = http.createServer((req, res) => {
//   // Check for the root URL
//   if (req.url === '/') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write('Welcome to our Home Page');
//     res.end();
//   } 
//   // Check for the '/about' URL
//   else if (req.url === '/about') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write('Hi! This site is built on Node.js');
//     res.end();
//   } 
//   // Handle other URLs
//   else {
//     res.writeHead(404, { 'Content-Type': 'text/html' });
//     res.end(`
//       <h1>Oops!</h1>
//       <p>Nothing is found here..</p>
//       <a href='/'>Back to Home</a>
//     `);
//   }
// });

// // Start the server on port 4000
// server.listen(4000, () => {
//   console.log('Server is running at http://localhost:4000');
// });



const _=require('lodash')

const items=[1,[2,[3,[4]]]]

const newItems=_.flattenDeep(items)
console.log(newItems)



