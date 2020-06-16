import { types } from "mobx-state-tree";
import { JOB_MODEL } from "../constants";

export const JobModel = types
  .model(JOB_MODEL, {
    id: types.identifier,
    company: types.maybeNull(types.string),
    company_logo: types.maybeNull(types.string),
    company_url: types.maybeNull(types.string),
    created_at: types.maybeNull(types.string),
    description: types.maybeNull(types.string),
    how_to_apply: types.maybeNull(types.string),
    location: types.maybeNull(types.string),
    title: types.maybeNull(types.string),
    type: types.maybeNull(types.string),
    url: types.maybeNull(types.string),
  })
  .volatile((self) => ({}))
  .views((self) => ({}))
  .actions((self) => ({}));
