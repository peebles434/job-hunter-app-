import { types } from "mobx-state-tree";
import { JOB_STORE } from "../constants";
import { JobModel } from "../../Models/JobModel/jobModel";

export const JobStore = types
  .model(JOB_STORE, {
    jobMap: types.map(JobModel),
  })
  .volatile((self) => ({}))
  .views((self) => ({
    get jobMapToArray() {
      return Array.from(self.jobMap);
    },
  }))
  .actions((self) => ({
    setJobs(job) {
      self.jobMap.set(job.id, job);
    },
  }));
