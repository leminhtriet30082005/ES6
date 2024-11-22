var student ={
    nganh: "CNTT",
    lop:{tenlop:"web501", siSo:39,room:"T10.11"}
}
var {
    nganh: A,
    lop: { tenlop: a, room: b},
} = student;
console.log(` nganh: ${A} - lop: ${a} - hoc phong: ${b}`);