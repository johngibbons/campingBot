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
  { timestamps: true }
);

export default mongoose.model('Users', UserSchema);
