import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
    },

    provider: {
      type: String,
      default: "email",
    },

    role: {
      type: String,

      enum: [
        "service",
        "retail",
        "enterprise",
        "logistics",
        "customer",
      ],

      default: "customer",
    },

    avatar: {
      type: String,
    },

    onboardingCompleted: {
      type: Boolean,
      default: false,
    },
  },

  {
    timestamps: true,
  }
);

export default mongoose.model(
  "User",
  userSchema
);