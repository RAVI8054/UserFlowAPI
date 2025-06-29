// ----------------------------------------------------------
// importing controllers for routes
import {
  AddUsers,
  DeleteUsersID,
  GetUsers,
  GetUsersID,
  UpdateUsersID,
} from "../controller/users.controller.js";
// ----------------------------------------
// usersRoutes mathod for requests
// ○ GET /users – Fetch the list of all users.
// ○ GET /users/:id – Fetch details of a specific user by ID.
// ○ POST /user – Add a new user.
// ○ PUT /user/:id – Update details of an existing user.
// ○ DELETE /user/:id – Delete a user by ID.
//---------------------------------------
export function usersRoutes(app) {
  app.get("/users", GetUsers);
  app.get("/users/:id", GetUsersID);
  app.post("/user", AddUsers);
  app.put("/user/:id", UpdateUsersID);
  app.delete("/user/:id", DeleteUsersID);
}
