import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: [true, "El userId es obligatorio"]
    },
    items: [
      {
        name: {
          type: String,
          required: [true, "El nombre del item es obligatorio"],
          trim: true
        },
        quantity: {
          type: Number,
          required: [true, "La cantidad es obligatoria"],
          min: [1, "La cantidad debe ser al menos 1"]
        },
        price: {
          type: Number,
          required: [true, "El precio del item es obligatorio"],
          min: [0, "El precio no puede ser negativo"]
        }
      }
    ],
    totalPrice: {
      type: Number,
      required: [true, "El precio total es obligatorio"],
      min: [0, "El precio total no puede ser negativo"]
    },
    status: {
      type: String,
      //   required: [true, 'El estado es obligatorio'],
      enum: ["pending", "completed", "cancelled"]
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

export default model("Order", orderSchema);
