import { Schema } from 'mongoose';

export interface ITagGroupSchema {
	name:	String;
	tags:	Schema.Types.ObjectId[];
}

const schema = new Schema({
	name:	String,
	tags:	[Schema.Types.ObjectId],
});

export default schema;