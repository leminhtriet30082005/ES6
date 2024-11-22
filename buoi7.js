const getListUser =()=>{
    return new Promise((resolve,reject)=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((Response)=>{
            if(!Response.ok){
                throw new error(`Loi ket noi`);
            }
            return Response.json();
        })
        .then((data)=>{
            resolve(data);
        })
        .catch(error=>{
            reject(error);
        });
    });
};
getListUser()
.then((users) => {
    console.log("danh sach user:", users);
})
.catch((err) => {
    console.log(err);
});










