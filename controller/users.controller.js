import { Users } from "../model/Users.model.js";

//for all user route
//app.get("/users", GetUsers);
export function GetUsers(req, res) {
  try {
    let users = Users;
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: `${err.message} "Not Found" ` });
  }
}
//way-1 find-object
//way -2 for  multiple user=filteredUsers is an array (
// const filteredUsers = users.filter((user) => user.id === id);
// res.status(200).json(filteredUsers);
// ------------------------------------------------------
export function GetUsersID(req, res) {
  try {
    let id = req.params?.id;
    const user = Users.find((user) => user.id === id);
    return res.status(200).json(user);
  } catch (err) {
    return res
      .status(404)
      .json({ message: `${err.message} "user Not Found" ` });
  }
}
// -----------------------------------------------------
export function AddUsers(req, res) {
  try {
    const { firstName, lastName, hobby } = req.body;
    const newUser = {
      id: Date.now().toString(),
      firstName,
      lastName,
      hobby,
    };
    Users.push(newUser);
    return res.status(201).json({ user: newUser });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}
// --------------------------------------------------------
export function UpdateUsersID(req, res) {
  try {
    let id = req.params.id;
    const { firstName, lastName, hobby } = req.body;

    // Find user object
    const user = Users.find((user) => user.id === id);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Update user properties
    user.firstName = firstName;
    user.lastName = lastName;
    user.hobby = hobby;
    //for chek in console user upated or not
    console.log("UpdateUsersID", user);

    res.status(200).json({ message: ` Edited successfully  `, user: user });
  } catch (err) {
    return res.status(500).json({ message: "User cannot be updated" });
  }
}
// -------------------------------------------------------------
export function DeleteUsersID(req, res) {
  try {
    let id = req.params.id;
    let user = Users.find((user) => user.id === id);

    if (user) {
      // Filter the user which have id not match
      const users = Users.filter((user) => user.id != id);
      console.log(users);

      return res.status(200).json({ message: "Delete successfully" });
    } else {
      return res.status(404).json({ message: "User not found" });
    }

    // return res.status(404).json({ message: "User not found" });
  } catch (err) {
    return res.status(500).json({ message: "user not deleted" });
  }
}
