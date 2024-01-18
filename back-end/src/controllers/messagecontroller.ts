import express from "express";
import { UserModel } from "../db/message";

class MessageController {
  getMessagers = async (
    request: express.Request,
    response: express.Response
  ) => {
    try {
      const messAll = await UserModel.find();
      return response.status(200).json({ data: messAll });
    } catch (err) {
      console.log("error");
    }
  };
  getMessager = async (
    request: express.Request,
    response: express.Response
  ) => {
    try {
      const { id } = request.params;
      const userAll = await UserModel.findById(id);
      return response.status(200).json({ data: userAll });
    } catch (err) {
      console.log("error");
    }
  };
  createMessager = async (
    request: express.Request,
    response: express.Response
  ) => {
    try {
      const { id_in, id_out, message } = request.body;
      const mess = new UserModel({ id_in, id_out, message });
      await mess.save();
      return response
        .status(201)
        .json({ message: "create successfully", data: mess });
    } catch (err) {
      console.log("error");
    }
  };
  deleteMessager = async (
    request: express.Request,
    response: express.Response
  ) => {
    try {
      const { id } = request.params;
      const mess = await UserModel.findByIdAndDelete({ _id: id });
      return response
        .status(200)
        .json({ message: "delete user successfully", data: mess });
    } catch (err) {
      console.log("error");
    }
  };
}
export default new MessageController();
