const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    // INFORMATION PERSONNELLE
    firstName: {
      type: String,
      required:true,
      maxLenghth: 55,
    },
    lastName: {
      type: String,
      required:true,
      maxLenghth: 55,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    postalCode: {
      type: Number,
    },
    aboutMe: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      minlength: 6, // Cette ligne définit la longueur minimale du mot de passe
    }, 
    profileImage: {
      type: String,
    },
    isAdminApproved: {
      type: Boolean,
      default: false,
    },

    
    // INFORMATION POUR LA FICHE CHEURCHEUR
    firstNameLastNameStudent: {
      type: String,
    },
    cin: {
      type: String
      // unique: true,
    },
    CNRPSregistration: {
      type: String,
    },
    passport: {
      type: String,
    },
    phone: {
      type: Number,
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail],
      lowercase: true,
      unique: true,
      trim: true,
      sparse:true
    },
    sexe: {
      type: String,
    },
    dateOfBirth: {
      type:Date,
    },
    placeOfBirth: {
      type:String,
    },
    etablissement: {
      type:String,
    },
    grade: {
      type:String,
    },
    dateGrade: {
      type:Date,
    },
    
    LastDegreeObtained: {
      type:String,
    },
    LastDegreeObtainedDate: {
      type:Date,
    },
    
    // CASE RESEVEE AU DOCTORANT
   
    
    title: {
      type: String,
    },
    taux: {
      type: Number,
    },
    yearOfFirstRegistration: {
      type: String,
    },
    UniversityEstablishment: {
      type: String,
    },
    firstNameLastNameDirector: {
      type: String,
    },
  },
  { timestamps: true }
);



UserSchema.pre("save", function (next) {
  if (this.dateOfBirth instanceof Date) {
    this.dateOfBirth = this.dateOfBirth.toISOString();
  }

  if (this.dateGrade instanceof Date) {
    this.dateGrade = this.dateGrade.toISOString();
  }

  if (this.lastDiplomeDate instanceof Date) {
    this.lastDiplomeDate = this.lastDiplomeDate.toISOString();
  }

  if (this.yearOfFirstRegistration instanceof Date) {
    this.yearOfFirstRegistration = this.yearOfFirstRegistration.toISOString();
  }

  next();
});


//play funtion before save into display : 'block'
UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (!user) {
    throw new Error('Incorrect email');
  }

  const auth = await bcrypt.compare(password, user.password);
  if (!auth) {
    throw new Error('Incorrect password');
  }

  if (!user.isAdminApproved) {
    throw new Error('User is not approved by admin');
  }

  return user;
};


const UserModel = mongoose.model("membre", UserSchema);
module.exports = UserModel;
