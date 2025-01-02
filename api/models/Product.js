import { Schema, model } from 'mongoose';


const producstSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'El nombre del producto es obligatorio'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'La descripción es obligatoria'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'El precio es obligatorio'],
      min: [0, 'El precio no puede ser negativo'],
    },
    category: {
      type: String,
      required: [true, 'La categoría es obligatoria'],
      enum: ['sushi', 'roll', 'bento', 'bebida', 'postre'],
    },
    ingredients: {
      type: [String],
      required: [true, 'Los ingredientes son obligatorios'],
    },
    image: {
      type: String,
      required: [true, 'La imagen es obligatoria'],
    },
    availability: {
      type: Boolean,
      default: true, // Indica si el producto está disponible para la venta
    },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
},
{ 
  versionKey: false,
  timestamps: true 
});

export default model('Product', producstSchema);

