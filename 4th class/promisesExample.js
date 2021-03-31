const isPositive = a => a > 0;

console.log(isPositive(1))

setTimeout(() => {
    console.log('Hello World from setTimeOut')
}, 0)



const myPromise = () => new Promise((res, rej) => {
    setTimeout(function() {
        isPositive(1) ? res(10) : rej('Its rejected')
    }, 2000)
});

myPromise()
.then(response => response * 10)
.then(anotherResp => console.log(anotherResp))
.catch(error => console.log(error));

console.log('After promise');