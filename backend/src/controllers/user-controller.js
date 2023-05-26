const HttpError = require('../models/http-error');
//const {validationResult} = require('express-validator');
const User = require('../models/user');


//  const getUsers = async(req, res, next) => {
//     let users;
//     try{
//         users = await User.find({}, '-password');
//     } catch (err) {
//         const error = new HttpError(
//             'Fetching user failed',
//             500
//         );
//         return next(error);
//     }
//     res.json({users: users.map(user => user.toObject({ getters: true }))});
// };

const signup = async (req, res, next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return next(
          new HttpError('Invalid inputs',422)
        );
    }
    
    const { name, email, password } = req.body;
    let existingUser
    try{ 
       existingUser = await User.findOne({ email: email })
    } catch (err) {
        const error = new HttpError(
            'Signing up failed',
            500
        );
        return next(error);
    }

    if(existingUser){
        const error = new HttpError(
            'user exists already',
            422
        );
        return next(error);
    }
    const createdUser = new User({
        name,
        email,
        password
    });
   
    /*createdUser.save().then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err)
        
    });*/
    try {
       await createdUser.save();
    }catch (err) {
        console.log(createdUser);
        console.log(err);
        const error = new HttpError(
         'Signing up failed2',
          500
        );
        return next(error);
    }
   

    res.status(201).json({user: createdUser.toObject({ getters: true })});
};

exports.getUsers = getUsers;
exports.signup = signup;


// const HttpError = require('../models/http-error');

// const DUMMY_PLACES = [
//     {
//         id: '1',
//         name: 'adele',
//         email: 'adele123@gmail.com',
//         password: '123456',
//         cartId: '5'
//     }
// ]

// const getUserById =  (req, res, next) => {
//     const userId = req.params.uid;
//     const user = DUMMY_PLACES.find( u => {
//         return u.id === userId;
//     });

//     if(!user){
//         throw new HttpError('Could not find a place for the provided user',404);
//     }
//     res.json({user});
// };

// const getCartByUserId = (req,res,next) => {
//     const cartId = req.params.cid;

//     const cart = DUMMY_PLACES.find( c => {
//         return c.cartId === cartId;
//     });

//     if(!cart){
//         return next(
//             new HttpError('Could not find a the cart for the provided user',404)
//         );
//     }
//     res.json({cart});
// };

// const createUser = (req,res,next) => {
//     const { name, email, password, cartId } = req.body;

//     const createdUser = {
//         name,
//         email,
//         password,
//         cartId
//     };

//     DUMMY_PLACES.push(createdUser);

//     res.status(201).json({user: createdUser});
// };
  
// exports.getUserById = getUserById;
// exports.getCartByUserId = getCartByUserId;
// exports.createUser = createUser;