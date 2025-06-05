import Joi from "joi";

const facturaSchema = Joi.object({
  numero: Joi.number().required(),
  tipo: Joi.string().valid("A", "B", "C").required(),
  monto: Joi.number().positive().required(),
  estado: Joi.string().required()
});

export default facturaSchema;