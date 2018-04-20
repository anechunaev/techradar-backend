import { Schema } from 'mongoose';
import { NodePosition, NodeSectors } from '../constants';

export interface INodeSchema {
	name:		string;
	sector:		NodeSectors;
	position:	NodePosition;
	team?:		Schema.Types.ObjectId;
	tags?:		Schema.Types.ObjectId[];
	notes?:		Schema.Types.ObjectId[];
}

const schema = new Schema({
	name:		String,
	sector:		Number,
	position:	Number,
	team:		{ type: Schema.Types.ObjectId, default: null },
	tags:		[{ type: Schema.Types.ObjectId, default: null }],
	notes:		[{ type: Schema.Types.ObjectId, default: null }],
});

export default schema;