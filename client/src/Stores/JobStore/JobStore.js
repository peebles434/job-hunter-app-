import { types, flow } from "mobx-state-tree";
import { JOB_STORE } from "../constants";
import { JobModel } from "../../Models/JobModel/jobModel";
import axios from "axios";

export const JobStore = types
  .model(JOB_STORE, {
    jobMap: types.map(JobModel),
    searchText: types.optional(types.string, ""),
  })
  .volatile((self) => ({}))
  .views((self) => ({
    get jobMapToArray() {
      return Array.from(self.jobMap);
    },
  }))
  .actions((self) => ({
    handleSearch(value) {
      self.searchText = value;
    },
    handleButtonClick() {
      self.setJobs();
      console.log(self.searchText);
    },
  }))
  .actions((self) => ({
    setJobs: flow(function* () {
      const url = `https://jobs.github.com/positions.json?search=${self.searchText}`;
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const result = yield axios(proxyUrl + url);
      const tempJobs = result.data;
      for (let i = 0; i < 50; i++) {
        if (tempJobs.length > 0) {
          let job = {
            id: tempJobs[i].id,
            company: tempJobs[i].company,
            company_logo: tempJobs[i].company_logo,
            company_url: tempJobs[i].company_url,
            created_at: tempJobs[i].created_at,
            description: tempJobs[i].description,
            how_to_apply: tempJobs[i].how_to_apply,
            location: tempJobs[i].location,
            title: tempJobs[i].title,
            type: tempJobs[i].type,
            url: tempJobs[i].url,
          };
          self.jobMap.set(job.id, job);
        }
      }
    }),
  }))
  .actions((self) => ({
    afterCreate() {
      self.setJobs();
    },
  }));
