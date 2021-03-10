"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var status_1 = require("./status");
var status_property_1 = require("./status-property");
var StatusDisplay = {};
exports.StatusDisplay = StatusDisplay;
// ? Needs to come from Translations? 
// * In order to do translations, it would have to be initialized in the app like it is here. 
// * It's KIND of data so I'm not sure it needs to be translated.
StatusDisplay[status_1.Status.notStarted] = new status_property_1.StatusProperty('Not Started', 'badge-info', 'more_horiz');
StatusDisplay[status_1.Status.cancelled] = new status_property_1.StatusProperty('Cancelled', 'badge-danger', 'clear');
StatusDisplay[status_1.Status.inProgress] = new status_property_1.StatusProperty('In Progress', 'badge-warning', 'hourglass_empty');
StatusDisplay[status_1.Status.unassigned] = new status_property_1.StatusProperty('Unassigned', 'badge-warning', 'hourglass_empty');
StatusDisplay[status_1.Status.assigned] = new status_property_1.StatusProperty('Assigned', 'badge-warning', 'hourglass_empty');
StatusDisplay[status_1.Status.complete] = new status_property_1.StatusProperty('Complete', 'badge-success', 'done');
StatusDisplay[status_1.Status.finished] = new status_property_1.StatusProperty('Finished', 'badge-success', 'done_all');
//# sourceMappingURL=status-display.js.map