import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../../styles/Home.module.css';
import HorizontalLine from '../HorizontalLine/HorizontalLine';
import JobPost from './JobPost';

const JobList = () => {
    const placeholderData = useSelector((state) => state.placeholderData);
    const error = useSelector((state) => state.error);
    const data = placeholderData.data;
    const jobListings = placeholderData.data.jobs;

    return (
        <div>
            <p className={styles.jobnum}>{data.total_num} jobs found</p>
            <div>
                {jobListings.map(job => {
                    return (
                        <div>
                            <HorizontalLine />
                            <JobPost
                                jobTitle={job.job_title}
                                salaryFrom={job.salary_range_from}
                                salaryTo={job.salary_range_to}
                                jobLocation={job.job_location}
                                experienceLevel={job.xp_lvl}
                                degree={job.degree}
                                jobType={job.job_type}
                                companyLogo={job.company_logo}
                                companyName={job.company_name}
                                postedTime={job.refreshed_at} 
                            />                            
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default JobList;