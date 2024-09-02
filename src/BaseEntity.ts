import { Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export class BaseEntity {
  @Prop({ type: mongoose.Schema.Types.String })
  _id: string;
}
