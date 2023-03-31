import { db } from "../db.js";
const login = (req, res) => {};
const register = (req, res) => {
  // CHECK EXISTING USER
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";
  db.query(q, [req.body.email, req.body.name], err.data);
};
const logout = (req, res) => {};
export { login, register, logout };
