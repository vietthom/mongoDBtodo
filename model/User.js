const {Schema, model}= require('mongoose');
const {isEmail}= require('validator');
//The schema is very similar to the "class" that we were creating in Sequelize 

const userSchema= new Schema({
    username: {
        type: String,
        //before this data is saved to the database, all of the trailing white spaces will be removed
        trim: true,
        // minLength: 4,
        // maxLenght: 8,
        // required: [true, 'Username is required and must be a minimum of 4 and maximum of 8'],
    },
    role:{
        type: String,
        // an enum on a string type means that when we save this field to the database
        //it can only be 1 of the specified values in the enum array
        enum: ['Admin', 'Employee', 'Manager'],
    },
    powerLevel: {
        type: Number, 
        min: 1,
        max: 10000000,
    }, 
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate: {
            //acutal value for email that the user is providing
            validator: function(value){
                return isEmail(value);
            },
            //userObj is the whole object that the user is trying to save
            message: function(userObject){
                return `${userObject.email} is not a valid email address`;
            },
        }
    },
    hobbies: [String],
    twoFavoriteCryptos: {
        firstFavorite:{
            type: String,
            uppercase: true,
            trim: true,
        },
        secondFavorite:{
            type: String,
            uppercase: true,
            trim: true,
        },
    }
});

const User = model('User', userSchema);

module.exports = User;