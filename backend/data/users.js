import bcrypt from 'bcryptjs'
const Users = [
    {
        name : 'Prince Saini',
        email : 'princesaini1601@gmail.com',
        password : bcrypt.hashSync('peince@123',12),
        isAdmin : true
    },
    // {
    //     name : 'Souhail Ouabou',
    //     email : 'Ouabou.souhail@ump.ac.com',
    //     password : bcrypt.hashSync('souhail2020',12),
    //     isAdmin : true
    // },
    // {
    //     name : 'Soufian Zaam',
    //     email : 'Soufian.Zaam@ump.ac.com',
    //     password : bcrypt.hashSync('zaam2020',12),
    //     isAdmin : true
    // },
    // {
    //     name : 'John Doe',
    //     email : 'JohnDoe2@gmail.com',
    //     password : bcrypt.hashSync('doe2020',12),
    //     isAdmin : false
    // },
    // {
    //     name : 'Ranjanan Kailey',
    //     email : 'Ranjanakailey@gmail.com',
    //     password : bcrypt.hashSync('admin',12),
    //     isAdmin : true
    // }
    
]
export default Users