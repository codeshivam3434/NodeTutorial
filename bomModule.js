const amount = 10

if (amount < 12) {
    console.log("You need to buy more books");
}
else {
    console.log('large Number of Books')
}


console.log(`hey it my first node app`)
console.log(__dirname)
let timer = 0
const TimerBomb = () => {
    intervalId = setInterval(() => {

        console.log(`tick tick ${timer}`)
        timer += 1;
        if (timer == 5) {
            console.log('BOOOOMMMMMM')
            clearInterval(intervalId)

        }
    }, 1000)
}


module.exports = { TimerBomb };