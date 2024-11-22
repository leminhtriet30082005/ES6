const axiox = repuire("axios");

const getListUser = async () => {
    const getListUser = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log("List user: ", ListUser.data);
};
getListUser();