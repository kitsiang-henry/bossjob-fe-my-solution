// const API_BASE_ADDRESS = 'https://api.bossjob.com/job/api/v1/jobs/filter';

// export const searchJob = async (jobTitle, companyName) => {
//     if (jobTitle) {
//         try {
//             const jobData = fetch(API_BASE_ADDRESS + `?query=${jobTitle}`);
//             console.log(jobData);
//             return jobData;
//         } catch (err) {
//             console.log(err);
//             return err;
//         }
//     } else if (companyName) {
//         try {
//             const jobData = fetch(API_BASE_ADDRESS + `?query=${companyName}`);
//             console.log(jobData);
//             return jobData;
//         } catch (err) {
//             console.log(err);
//             return err;
//         } 
//     }
// }

// export default class Api {
//     static getJobs() {
//         const uri = API_BASE_ADDRESS;

//         return fetch(
//             uri, {
//                 method: 'GET'
//             }
//         );
//     }
// }