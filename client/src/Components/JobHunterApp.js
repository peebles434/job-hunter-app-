import React from "react";
import { Header } from "./Header";
import { Search } from "./Search";
import { observer } from "mobx-react";
import { JobList } from "./JobList";

const JobHunterApp = observer(() => {
  return (
    <div>
      <Header />
      <Search />
      <JobList />
    </div>
  );
});

export default JobHunterApp;
