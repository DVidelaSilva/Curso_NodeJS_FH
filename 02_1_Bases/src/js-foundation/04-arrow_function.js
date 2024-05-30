const users = [
    {
        id: 1,
        name: 'Diego Videla',
    },
    {
        id: 2,
        name: 'Nicole Espinoza'
    }
]


const getUserById = (id, callback) => {
    const user = users.find( (user) => {
        return user.id === id;
    }); 
    if(!user){
        return callback(`Usuario no encontrado con el id ${id}`);
    }
    return callback(null, user);
};  



module.exports = {
    getUserById
}