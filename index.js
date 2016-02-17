'use strict';

var config = require('./config.js');
var moment = require('moment');
var Harvest = require('harvest');
/*
var harvest = new Harvest({
  subdomain: config.harvest.subdomain,
  email: config.harvest.email,
  password: config.harvest.password
});
var TimeTracking = harvest.TimeTracking;

TimeTracking.daily({ date: moment().subtract(4, 'days').toDate()}, function(err, tasks) {
  if (err) {
    throw new Error(err);
  }
  console.log(tasks.day_entries);
});
*/

var JiraApi = require('jira').JiraApi;

var jira = new JiraApi('https', config.jira.host, config.jira.port, config.jira.user, config.jira.password, '2');

jira.findIssue('BET-246', (err, issue) => {
  if (err) {
    throw new Error(err);
  }
  console.log(issue);
});

