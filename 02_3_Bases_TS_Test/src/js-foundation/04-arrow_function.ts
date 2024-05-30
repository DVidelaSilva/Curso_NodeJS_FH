interface User {
    id: number;
    name: string;
}


const users: User[] = [
    {
        id: 1,
        name: 'Diego Videla',
    },
    {
        id: 2,
        name: 'Nicole Espinoza'
    }
]


export function getUserById( id: number, callback: (err?: string, user?: User) => void ) {
    const user = users.find( (user) => {
        return user.id === id;
    }); 
    if(!user){
        return callback(`Usuario no encontrado con el id ${id}`);
    }
    return callback(undefined, user);
};  


