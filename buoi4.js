var obj = { name: "le minh triet", age: 20, birthday: "30/08/2005" };
var { name: a, birthday: b } = obj;

console.log(`ten: ${a} - ngay thang nam sinh: ${b}`);
var arr = ["nguyen van a", "nguyen van b", "nguyen van c"];
var [x, y] = ["nguyen van a", "nguyen van b"];
console.log(`Gia tri x: ${x}
             Gia tri y: ${y}`);