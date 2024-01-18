import mongoose from "mongoose";

const messageSchena = new mongoose.Schema(
  {
    id_in: {
      type: "string",
      required: true,
    },
    id_out: {
      type: "string",
      required: true,
    },
    message: {
      type: "string",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const UserModel = mongoose.model("Message", messageSchena);
