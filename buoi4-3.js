var student =[{name: "le minh triet", age: 18, birthday: "30/08/2005"},
    {name: "nvb", age: 20, birthday: "30/08/2003"},
]
for(var { name, age } of student){
    console.log(`sinh vien: ${name} - tuoi: ${age}`);
}