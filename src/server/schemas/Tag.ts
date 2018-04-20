import { Schema } from 'mongoose';

export interface ITagSchema {
	name:		string;
	color?:		string;	// HEX
	bgColor?:	string;	// HEX
}

const schema = new Schema({
	name:		String,
	color:		{ type: String, default: '#000000' },
	bgColor:	{ type: String, default: '#FFFFFF' },
});

export default schema;