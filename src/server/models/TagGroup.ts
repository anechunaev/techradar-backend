import { model } from 'mongoose';
import TagGroupSchema from '../schemas/TagGroup';

let TagGroupModel;

export function init() {
	TagGroupModel = model('TagGroup', TagGroupSchema);
}

export default TagGroupModel;