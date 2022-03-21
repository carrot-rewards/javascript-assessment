
const User = class {

    async get_user(id){
        var res = await fetch('https://jsonplaceholder.typicode.com/users/'.concat(id));
            // .then(response => response.json())
            // .then(json => console.log(json))
            // .catch((e) => console.log(e));
        var resJson = await res.json();

        return resJson;
    }
}

export default User;