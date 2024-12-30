import mongoose, { Document, Schema } from 'mongoose';

export interface ITask extends Document {
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
}

const TaskSchema: Schema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<ITask>('Task', TaskSchema);