import mongoose from 'mongoose'
const Schema = mongoose.Schema

const cardSchema = new Schema(
{
  description: { type: String, required: true },
  color: { type: String, required: true },
},
{
  timestamps: true // Create timestamp
})
  
export default mongoose.model('Card', cardSchema)
  
