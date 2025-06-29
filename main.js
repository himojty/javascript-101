let promise = await fetch("http://127.0.0.1:8000/api-v1/articles/");
let json = await promise.json();
console.log(json);

let promise1 = await fetch("http://127.0.0.1:8000/api-v1/items/");
let json1 = await promise1.json();
console.log(json1);