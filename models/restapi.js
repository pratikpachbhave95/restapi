import mongoose from 'mongoose';

const restapiSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model('restapi', restapiSchema);