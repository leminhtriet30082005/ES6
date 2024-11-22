var student ={
    name: "le minh triet",
    lop: "WD19309",
    diem: [8,9,10]
}
var {name: a, 
    lop: b, 
    diem: [c, d, e],
} = student
console.log(`ten: ${a} - lop: ${b} 
diem: asm1 = ${c}, asm2 = ${d}, final = ${e}`);
