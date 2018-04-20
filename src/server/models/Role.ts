import { model } from 'mongoose';
import RoleSchema from '../schemas/Role';

let RoleModel;

export function init() {
	RoleModel = model('Role', RoleSchema);
}

export default RoleModel;