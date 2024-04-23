import mongoose from "mongoose"

export const connectDB = async () => {
  return await mongoose
    .connect(process.env.CONNECTION_STRING, {
      useUnifiedTopology: true,
      useNewUrlParser: true })
    .then(() => console.log("Db Connected Successfully"))
    .catch((error) => {
      console.log("Error: ", error)
    })
}
