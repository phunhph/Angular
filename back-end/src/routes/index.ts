import express from "express";
import UserController from "../controllers/usercontrollers";
import messagecontroller from "../controllers/messagecontroller";
const router = express.Router();

router.get("/users", UserController.getAllUser);
router.get("/users/:id", UserController.getUser);
router.get("/users/:email/:password", UserController.loginUser);
router.post("/users", UserController.createUser);
router.put("/users/:id", UserController.updateUser);
router.delete("/users/:id", UserController.deleteUser);

router.get("/Messager", messagecontroller.getMessagers);
router.get("/Messager/:id_in/:id_out", messagecontroller.getMessager);
router.post("/Messager", messagecontroller.createMessager);
router.delete("/Messager/:id", messagecontroller.deleteMessager);
export default router;
