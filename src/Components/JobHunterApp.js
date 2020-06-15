import React from "react";
import { Header } from "./Header";
import { observer } from "mobx-react";
import { JobList } from "./JobList";

const JobHunterApp = observer(() => {
  return (
    <div>
      <Header />
      <h1>Job Hunter</h1>
      <JobList />
    </div>
  );
});

export default JobHunterApp;
