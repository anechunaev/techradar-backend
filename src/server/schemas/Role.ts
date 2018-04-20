import { Schema } from 'mongoose';

export interface IRoleSchema {
	name:	string;
	access:	number;	// Bitmask
}

const schema = new Schema({
	name:	String,
	access:	Number,
});

export default schema;