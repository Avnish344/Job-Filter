import React from "react";
import logo from "/src/images/photosnap.svg";



const JobCard = ({ job, handleTagClick }) => {
    const tags = [job.role, job.level, ...job.languages];

    return (
        <div className="bg-white shadow-md p-6 rounded-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-l-4 border-teal-500 mt-6 hover:pointer-events-auto">
            {/* Image and Company Details */}
            <div className="flex gap-6 items-center ">
                <img
                    src={logo}
                    alt={`${job.company} logo`}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full object-contain"
                />
                <div>
                    <h3 className="text-teal-600 font-bold">{job.company}</h3>
                    <div className="flex gap-1 items-center mt-1">
                        {job.new && (
                            <span className="bg-teal-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                                NEW!
                            </span>
                        )}
                        {job.featured && (
                            <span className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded-full">
                                FEATURED
                            </span>
                        )}
                    </div>
                    <h2 className="font-bold text-lg mt-2 hover:text-teal-400 hover:cursor-pointer">
                        {job.position}
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">
                        {job.postedAt} · {job.contract} · {job.location}
                    </p>
                </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
                {tags.map((tag, idx) => (
                    <span
                        key={idx}
                        onClick={() => handleTagClick(tag)}
                        className="bg-teal-100 text-teal-800 font-semibold px-2 py-1 rounded cursor-pointer hover:bg-teal-200"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default JobCard;
