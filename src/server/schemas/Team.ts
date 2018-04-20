import { Schema } from 'mongoose';

export interface ITeamSchema {
	name:		string;
	icon?:		string;	// Data uri
	color?:		string; // HEX
	bgColor?:	string; // HEX
}

const schema = new Schema({
	name:		String,
	icon:		{ type: String, default: '' },
	color:		{ type: String, default: '#000000' },
	bgColor:	{ type: String, default: '#FFFFFF' },
});

export default schema;