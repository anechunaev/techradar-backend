import { model } from 'mongoose';
import TeamSchema from '../schemas/Team';

let TeamModel;

export function init() {
	TeamModel = model('Team', TeamSchema);
}

export default TeamModel;