import { getRanking } from './scraping/ranking';
import { cronJob } from './helpers/cronJob';

import schedule from 'node-schedule';

const rule = new schedule.RecurrenceRule();
rule.hour = 7;
rule.minute = 15;

cronJob(rule, getRanking);