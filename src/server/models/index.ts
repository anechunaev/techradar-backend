import { init as initNode } from './Node';
import { init as initNote } from './Note';
import { init as initRole } from './Role';
import { init as initTag } from './Tag';
import { init as initTagGroup } from './TagGroup';
import { init as initTeam } from './Team';
import { init as initUser } from './User';

export function init() {
	initNode();
	initNote();
	initRole();
	initTag();
	initTagGroup();
	initTeam();
	initUser();
}