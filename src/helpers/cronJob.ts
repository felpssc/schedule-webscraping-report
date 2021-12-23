import schedule, { RecurrenceSpecObjLit } from "node-schedule";

const cronJob = (rule: RecurrenceSpecObjLit, doSomething: Function) => {
  schedule.scheduleJob(rule, async () => {
    console.log("🔥 Cron job started");
    await doSomething();
    console.log("🔥 Cron job done");
  })
}

export { cronJob };