import mongoose from 'mongoose';

export default async () => {
    try {
        const conn =await  mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log(`connected to mongoDB Database ${conn.connection.name}`);
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
};