import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const flowSchema = new Schema({
    nodes: Array,
    edges: Array,
    createdAt: { type: Date, default: Date.now },
  });
  
const Flow = model("Flow", flowSchema);

export default Flow;