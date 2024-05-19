import mongoose, { Schema, schema } from "mongoose";
import { act } from "react";

mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model.Ticket || mongoose.model("Ticket", ticketSchema);
export default Ticket;
