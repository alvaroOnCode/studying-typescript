import mongoose from 'mongoose';

mongoose.connect(process.env.DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
  .then(db => console.log("DB is connected!"))
  .catch(error => console.error(error));