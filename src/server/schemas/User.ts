import { Schema } from 'mongoose';

export interface IUserSchema {
	email:	string;
	token:	string;
	role:	Schema.Types.ObjectId;
	team:	Schema.Types.ObjectId;
	name:	string;
}

const schema = new Schema({
	email:	String,
	token:	String,
	role:	Schema.Types.ObjectId,
	team:	Schema.Types.ObjectId,
	name:	String,
});

export default schema;