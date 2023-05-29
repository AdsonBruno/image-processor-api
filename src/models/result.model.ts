import { Schema, model, Document, Model } from 'mongoose';

export abstract class ResultData {
  metadata: Record<string, any>;
}

export type ResultDocument = Document & ResultData;

const ResultSchema = new Schema<ResultDocument>({
  metadata: { type: Schema.Types.Mixed, required: true },
});

export const Result: Model<ResultDocument> = model<ResultDocument>(
  'Result',
  ResultSchema,
);
