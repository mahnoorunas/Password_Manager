import mongoose from "mongoose";

const passwordSchema = new mongoose.Schema({
  account: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  strength: {
    type: String,
    required: true,
  },

  breached: {
    type: Boolean,
    required: true,
  },
});

const Password = mongoose.model("Password", passwordSchema);

export default Password;