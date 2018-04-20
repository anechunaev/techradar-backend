import { model } from 'mongoose';
import NodeSchema from '../schemas/Node';

let NodeModel;

export function init() {
	NodeModel = model('Node', NodeSchema);
}

export default NodeModel;