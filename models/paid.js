import { Schema, model, models } from "mongoose";

const PaidSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  paid: {
    type: String,
    required: true,
  },
});

const Paid = models.Paid || models("Paid", PaidSchema);

export default Paid;
