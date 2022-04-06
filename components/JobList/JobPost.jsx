import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { icons } from '../../assets';

const JobPost = (props) => {
    return (
        <div>
            <div>
                <div className={styles.jobpostwrapper}>
                        <div>
                            <p><strong>{props.jobTitle}</strong></p>
                            <div className={styles.jobdetailswrapper}>
                                <div className={styles.jobdetails}>
                                    <div className={styles.jobdetailswrapper}>
                                        <Image src={icons.Pin} alt='JobLocation' />
                                        <p>{props.jobLocation}</p>
                                    </div>
                                    <div className={styles.jobdetailswrapper}>
                                        <Image src={icons.Education} alt='EducationLevel' />
                                        <p>{props.degree}</p>
                                    </div>
                                </div>
                                <div className={styles.jobdetails}>
                                    <div className={styles.jobdetailswrapper}>
                                        <Image src={icons.Briefcase} alt='JobDuration' />
                                        <p>{props.experienceLevel}</p>
                                    </div>
                                    <div className={styles.jobdetailswrapper}>
                                        <Image src={icons.Clock} alt='JobType' />
                                        <p>{props.jobType}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <p><strong>₱{props.salaryFrom} - ₱{props.salaryTo}</strong></p>
                </div>
                <div className={styles.companytimeposted}>
                    <Image width='50px' height='50px' src={props.companyLogo} alt='CompanyLogo' />
                    <p>{props.companyName}</p>
                    <p>3 hours</p>
                </div>
            </div>
        </div>
    );
}

/* To declare the type of props */
// type Props = {
//     jobTitle: string,
//     salaryFrom: string,
//     salaryTo: string,
//     jobLocation: string,
//     experienceLevel: string,
//     degree: string,
//     jobType: string,
//     companyLogo: string,
//     companyName: string,
//     postedTime: string,
// }

export default JobPost;