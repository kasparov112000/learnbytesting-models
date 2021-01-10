import { Status } from './status';
import { StatusProperty } from './status-property';

const StatusDisplay: { [ index: number ]: StatusProperty} = {};

// ? Needs to come from Translations? 
// * In order to do translations, it would have to be initialized in the app like it is here. 
// * It's KIND of data so I'm not sure it needs to be translated.

StatusDisplay[Status.notStarted]    = new StatusProperty('Not Started', 'badge-info', 'more_horiz'); 
StatusDisplay[Status.cancelled]     = new StatusProperty('Cancelled', 'badge-danger', 'clear');
StatusDisplay[Status.inProgress]    = new StatusProperty('In Progress', 'badge-warning', 'hourglass_empty');
StatusDisplay[Status.unassigned]    = new StatusProperty('Unassigned', 'badge-warning', 'hourglass_empty');
StatusDisplay[Status.assigned]      = new StatusProperty('Assigned', 'badge-warning', 'hourglass_empty');
StatusDisplay[Status.complete]      = new StatusProperty('Complete', 'badge-success', 'done');
StatusDisplay[Status.finished]      = new StatusProperty('Finished', 'badge-success', 'done_all');

export { StatusDisplay };