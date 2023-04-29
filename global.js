// console.log(global);

setTimeout(() =>{
    console.log('check your time');
    clearInterval(int);
}, 5000)

const int = setInterval(() =>{
    console.log('tick');
}, 1000);

console.log(__dirname);
console.log(__filename);