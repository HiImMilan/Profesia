import React from 'react';
import JobCard from '../cards/JobCard.js';

const json = [ {jobTitle:"Kucharka", advertiser: "SPSIT", coverImage: "index5.jpg", JobDescription: "budeš variť", profilePicture: "kysuca.png", advertiserName: "Niekto niekto", remainingTime: "80", addedDate: "9.4.2020", Tags: ["#Kucharka", "#Skolstvo", "#Kysuca"]},
]


//loop over json and create a JobCard for each job
let JobSearchDiv = () => {
    return (
        <div class="w-full bg-white p-12 dark:bg-gray-900">
            <div class="header flex items-end justify-between mb-12">
                <div class="title">
                    <p class="text-4xl font-bold text-white mb-4">
                        Lastest job offers
                    </p>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-12">
                {json.map(job => <JobCard {...job} />)}  
            </div>
        </div>
    )
}

export default JobSearchDiv;