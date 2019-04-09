import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, "can't be blank"],
      index: true,
      unique: true
    },
    avatar: {
      type: String
    },
    password: {
      type: String,
      trim: true,
      required: [true, "can't be blank"],
      select: false
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    }
  },
  {
    timestamps: true,
    toObject: {
      transform: (doc, ret, options) => {
        // remove the password of every document before returning the result
        delete ret.password;
        return ret;
      }
    }
  }
);

export default mongoose.model('Users', UserSchema);
