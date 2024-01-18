import express from "express";
import { UserModel } from "../db/user";
import { identifierToKeywordKind } from "typescript";

class UserController {
  getAllUser = async (request: express.Request, response: express.Response) => {
    try {
      const userAll = await UserModel.find();
      return response.status(200).json({ data: userAll });
    } catch (err) {
      console.log("error");
    }
  };
  getUser = async (request: express.Request, response: express.Response) => {
    try {
      const { id } = request.params;
      const userAll = await UserModel.findById(id);
      return response.status(200).json({ data: userAll });
    } catch (err) {
      console.log("error");
    }
  };
  createUser = async (request: express.Request, response: express.Response) => {
    try {
      const { name, email, password } = request.body;
      const user = new UserModel({ name, email, password });
      await user.save();
      return response
        .status(201)
        .json({ message: "create successfully", data: user });
    } catch (err) {
      console.log("error");
    }
  };
  updateUser = async (request: express.Request, response: express.Response) => {
    try {
      const { id } = request.params;
      const { name, email, password } = request.body;
      const user = await UserModel.findById(id);
      if (user) {
        user.name = name;
        user.email = email;
        user.password = password;
        await user.save();
      }

      return response
        .status(200)
        .json({ message: "create successfully", data: user });
    } catch (err) {
      console.log("error");
    }
  };
  deleteUser = async (request: express.Request, response: express.Response) => {
    try {
      const { id } = request.params;
      const userAll = await UserModel.findByIdAndDelete({ _id: id });
      return response
        .status(200)
        .json({ message: "delete user successfully", data: userAll });
    } catch (err) {
      console.log("error");
    }
  };
  loginUser = async (request: express.Request, response: express.Response) => {
    try {
      const { email, password } = request.params;
      const userAll = await UserModel.findOne({
        email: email,
        password: password,
      });
      return response
        .status(200)
        .json({ message: "delete user successfully", data: userAll });
    } catch (err) {
      console.log("error");
    }
  };
}

export default new UserController();
