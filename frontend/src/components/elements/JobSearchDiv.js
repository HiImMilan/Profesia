import React from 'react';
import JobCard from '../cards/JobCard.js';

let JobSearchDiv = () => {
    return (
        <div class="w-full bg-white p-12">
            <div class="header flex items-end justify-between mb-12">
                <div class="title">
                    <p class="text-4xl font-bold text-gray-800 mb-4">
                        Lastest job offers
                    </p>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-12">
               
                <JobCard profilePicture="kysuca.png" coverImage="index5.jpg" advertiser="Stredná priemyselná škola informačných technológií" jobTitle="Učitel Programovania" JobDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil" advertiserName="Ing. Martin Cvinček" addedDate="10. July 2022" remainingTime="69"/>
                <JobCard profilePicture="kysuca.png" coverImage="index5.jpg" advertiser="Stredná priemyselná škola informačných technológií" jobTitle="Učitel Programovania" JobDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil" advertiserName="Ing. Martin Cvinček" addedDate="10. July 2022" remainingTime="69"/>
                <JobCard profilePicture="kysuca.png" coverImage="index5.jpg" advertiser="Stredná priemyselná škola informačných technológií" jobTitle="Učitel Programovania" JobDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil" advertiserName="Ing. Martin Cvinček" addedDate="10. July 2022" remainingTime="69"/>
                <JobCard profilePicture="kysuca.png" coverImage="index5.jpg" advertiser="Stredná priemyselná škola informačných technológií" jobTitle="Učitel Programovania" JobDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil" advertiserName="Ing. Martin Cvinček" addedDate="10. July 2022" remainingTime="69"/>
                <JobCard profilePicture="kysuca.png" coverImage="index5.jpg" advertiser="Stredná priemyselná škola informačných technológií" jobTitle="Učitel Programovania" JobDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil" advertiserName="Ing. Martin Cvinček" addedDate="10. July 2022" remainingTime="69"/>
    

                
            </div>
        </div>
    )
}

export default JobSearchDiv;