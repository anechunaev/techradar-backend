import { Schema } from 'mongoose';
import { NodePosition } from '../constants';

export interface INoteSchema {
	author:		Schema.Types.ObjectId;
	position:	NodePosition;
	pros?:		string;
	cons?:		string;
	comment?:	string;
	date?:		Date;
}

const schema = new Schema({
	author:		Schema.Types.ObjectId,
	position:	Number,
	pros:		{ type: String, default: '' },
	cons:		{ type: String, default: '' },
	comment:	{ type: String, default: '' },
	date:		{ type: Date, default: new Date() },
});

export default schema;