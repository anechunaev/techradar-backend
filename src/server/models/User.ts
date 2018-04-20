import { model } from 'mongoose';
import UserSchema from '../schemas/User';

let UserModel;

export function init() {
	UserModel = model('User', UserSchema);
}

export default UserModel;