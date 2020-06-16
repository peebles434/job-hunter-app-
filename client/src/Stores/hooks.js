import { JobStore } from "./JobStore/JobStore";
import { useMemo } from "react";

let _jobStore;
export const useJobStore = () => {
  const store = useMemo(() => {
    if (!_jobStore) _jobStore = JobStore.create();
    return _jobStore;
  }, []);
  return store;
};
