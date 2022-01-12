const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: 'Username is Required',
            trim: true
        },
        email: {
            type: String
            // Needs Unique, Required and match valid email
        },
        thoughts: {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        },
        friends: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }
);

// get total count of friends
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// Create the User model using the UserSchema
const User = model('User', UserSchema);

// Export the User model
module.exports = User;