import { model } from 'mongoose';
import TagSchema from '../schemas/Tag';

let TagModel;

export function init() {
	TagModel = model('Tag', TagSchema);
}

export default TagModel;