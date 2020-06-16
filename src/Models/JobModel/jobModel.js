import { types } from "mobx-state-tree";
import { JOB_MODEL } from "../constants";

export const JobModel = types
  .model(JOB_MODEL, {
    id: types.identifier,
    company: types.string,
    // company_logo: types.string,
    // company_url: types.string,
    // created_at: types.string,
    description: types.string,
    // how_to_apply: types.string,
    location: types.string,
    // title: types.string,
    // type: types.string,
    // url: types.string,
  })
  .volatile((self) => ({}))
  .views((self) => ({}))
  .actions((self) => ({}));
