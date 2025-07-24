import React, { useState } from "react";
import jobs from "./data/jobs";
import JobCard from "./component/JobCard";
import FilterBar from "./component/FilterBar";
import "./index.css"

const App = () => {
  const [filters, setFilters] = useState([]);

  const handleTagClick = (tag) => {
    if (!filters.includes(tag)) {
      setFilters([...filters, tag]);
    }
  };

  const removeFilter = (tag) => {
    setFilters(filters.filter((item) => item !== tag));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  const filteredJobs = jobs.filter((job) => {
    const tags = [job.role, job.level, ...job.languages];
    return filters.every((filter) => tags.includes(filter));
  });

  return (
    <div className="bg-teal-100 min-h-screen font-sans">
      <header className="bg-teal-600 h-32 mb-12"></header>
      <main className="max-w-4xl mx-auto px-4">
        <FilterBar filters={filters} removeFilter={removeFilter} clearFilters={clearFilters} />
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} handleTagClick={handleTagClick} />
        ))}
      </main>
    </div>
  );
};

export default App;
