import { model } from 'mongoose';
import NoteSchema from '../schemas/Note';

let NoteModel;

export function init() {
	NoteModel = model('Note', NoteSchema);
}

export default NoteModel;