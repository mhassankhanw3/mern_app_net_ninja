const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      // minlength: 4,
      // maxlength: 14,
    },
  },
  { timestamps: true }
);

UserSchema.statics.signup = async function (email, password) {
  const exist = await this.findOne({ email });

  if (!email || !password) {
    throw Error("All Fields are required!");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (
    !validator.isStrongPassword(password, {
      minLength: 6,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 0,
    })
  ) {
    throw Error("Password not Strong enough");
  }

  if (exist) {
    throw Error("Email already in use!");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });
  return user;
};

module.exports = mongoose.model("User", UserSchema);
