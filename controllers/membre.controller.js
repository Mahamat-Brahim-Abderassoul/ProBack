const UserModel = require("../models/user.model");
const ObjectID = require("mongoose").Types.ObjectId;



module.exports.getAllUsers = async (req, res) => {
  const membres = await UserModel.find().select("-password -isAdminApproved");
  res.status(200).json(membres);
};



// module.exports.userInfo = async (req, res) => {
//   console.log(req.params);

//   if (!ObjectID.isValid(req.params.id)) {
//     return res.status(400).send("Invalid member ID " + req.params.id);
//   }

//   try {
//     const user = await UserModel.findById(req.params.id).select(
//       "-password"
//     );
//     if (!user) {
//       return res.status(404).send("Member not found");
//     }
//     res.send(user);
//   } catch (err) {
//     console.error("Error finding member:", err);
//     res.status(500).send("Internal Server Error");
//   }
// };

module.exports.userInfo = async (req, res) => {
  try {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);

    const user = await UserModel.findById(req.params.id).select("-password");
    if (!user) return res.status(404).send("User not found");

    res.send(user);
  } catch (err) {
    console.log("Error retrieving user: ", err);
    res.status(500).send("Internal Server Error");
  }
};


// module.exports.userInfo = async (req, res) => {
//   if (!ObjectID.isValid(req.params.id))
//   return res.status(400).send("ID unknown : " + req.params.id);
//   UserModel.findById(req.params.id, (err, docs) => {
//     if (!err) res.send(docs);
//     else console.log("ID unknown : " + err);
//   }).select("-password");
// };







// module.exports.updateUser = async (req, res) => {
//   if (!ObjectID.isValid(req.params.id)) {
//     return res.status(400).send("Invalid member ID " + req.params.id);
//   }

//   try {
//     const updateUser = await UserModel.findOneAndUpdate(
//       { _id: req.params.id },
//       { $set: req.body },
//       { new: true, upsert: true, setDefaultsOnInsert: true }
//     );
//     return res.send(updateUser);
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }
// };


module.exports.updateUser = async (req, res) => {
  try {
    const updateUser = await UserModel.findOneAndUpdate(
      { email: req.params.id },
      { $set: req.body },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    return res.send(updateUser);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};




module.exports.deleteUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("Invalid member ID " + req.params.id);
  }

  try {
    const result = await MembreModel.deleteOne({ _id: req.params.id }).exec();
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Member not found" });
    }
    res.status(200).json({ message: "Successfully deleted!" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};


module.exports.isAdminApproved = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("Invalid member ID " + req.params.id);
  }

  try {
    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { isAdminApproved: true } },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    return res.send(updatedUser.isAdminApproved);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports.isAdminAnapproved = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("Invalid member ID " + req.params.id);
  }

  try {
    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { isAdminApproved: false } },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    return res.send(updatedUser.isAdminApproved);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};





module.exports.adminInfo = async (req, res) => {
  try {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);

    const user = await UserModel.findById(req.params.id).select("-password");
    if (!user) return res.status(404).send("Admin not found");

    res.send(user);
  } catch (err) {
    console.log("Error retrieving user: ", err);
    res.status(500).send("Internal Server Error");
  }
};

