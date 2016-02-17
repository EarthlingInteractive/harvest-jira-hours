'use strict';

var config = require('./config.js');
var moment = require('moment');
var JiraApi = require('jira').JiraApi;
var Harvest = require('harvest');

/*
 * 1. Get all Harvest entries for a user for a today.
 * 2. If Ticket contains what appears to be a JIRA ticket ID then do the following.
 * 3. If 'external_ref.namespace' exists and is a permalink then time is already linked.
 *    https://earthling.atlassian.net/browse/BET-244#worklog-20005
 *
 *    If 'external_ref.namespace' exists and is a permalink then time added but not related to jira work log.
 *    Try to identify is a worklog on the ticket is related to the entry (either by user interaction or by date comparison)
 *    If no entry to relate then make a JIRA worklog for this ticket and update the Harvest entry external_ref to match the below data with a valid permalink to the time entry.
 *
 *    If 'external_ref' does not exist then make a JIRA worklog for this ticket and update the Harvest entry external_ref to match the below data with a valid permalink to the time entry.
 */

/*
var harvest = new Harvest({
  subdomain: config.harvest.subdomain,
  email: config.harvest.email,
  password: config.harvest.password
});
var TimeTracking = harvest.TimeTracking;

TimeTracking.daily({ date: moment().subtract(0, 'days').toDate()}, function(err, tasks) {
  if (err) {
    throw new Error(err);
  }
  console.log(tasks.day_entries);
  });
*/



var jira = new JiraApi('https', config.jira.host, config.jira.port, config.jira.user, config.jira.password, '2');

/*
jira.findIssue('BET-246', (err, issue) => {
  if (err) {
    throw new Error(err);
  }
  console.log(issue.worklog);
});
*/
jira.listProjects((err, projects) => {
  if (err) {
    throw new Error(err);
  }
  console.log(projects);
  console.log(projects.map(project => project.key));
});
