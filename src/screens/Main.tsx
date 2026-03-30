import { LearningCourse } from "./main/sections/LearningCourse/learningCourse";
import { Certification } from "./main/sections/certification/certification";
import { ExperienceAndAwards } from "./main/sections/experienceAndAwards/experienceAndAwards";
import { ProfileSummary } from "./main/sections/profileSummary/profileSummary";
import { Projects } from "./main/sections/projects/projects";
import { Scholarship } from "./main/sections/scholarship/scholarship";
import { JSX } from "react";

export const Main = (): JSX.Element => {
    return (
        <div className="bg-background w-full min-h-screen overflow-x-hidden">
            <div
                className="w-full max-w-[1440px] mx-auto min-h-[3750px] relative font-['Vollkorn'] overflow-x-hidden"
                data-model-id="1:3"
            >
                <p className="absolute top-[3680px] left-[74px] h-[33px] flex items-center [font-family:'Vollkorn',Helvetica] font-normal text-cream text-2xl tracking-[0] leading-[normal]">
                    © Developed by SeoJeong Lee. All rights reserved.
                </p>

                <LearningCourse />
                <ProfileSummary />
                <Scholarship />
                <Certification />
                <ExperienceAndAwards />
                <Projects />

                <p className="absolute top-[1812px] left-[103px] h-[33px] flex items-center [font-family:'Vollkorn',Helvetica] font-normal text-award text-2xl tracking-[0] leading-[normal]">
                    &nbsp; → Developed during the 2025 1sth CHALLKATHON
                </p>

                <p className="absolute top-[1570px] left-[103px] h-[33px] flex items-center [font-family:'Vollkorn',Helvetica] font-normal text-award text-2xl tracking-[0] leading-[normal]">
                    &nbsp; → [3rd Place] at 2025 N-CUBE Summer Project
                </p>

                <p className="absolute top-[1339px] left-[100px] h-[33px] flex items-center [font-family:'Vollkorn',Helvetica] font-normal text-[#334eac] text-2xl tracking-[0] leading-[normal]">
                    &nbsp; → MAPE of 4.49%
                </p>

                <div className="absolute top-[500px] left-[103px] w-[313px] flex flex-col gap-3">
                    <div className="flex items-center w-[116px] h-[45px] [font-family:'Vollkorn',Helvetica] font-bold text-cream text-[32px] tracking-[0] leading-[normal]">
                        Contact
                    </div>
                    <a
                        className="flex items-center w-[307px] h-[33px] mt-px [font-family:'vollkorn',Helvetica] font-normal text-cream text-2xl tracking-[0] leading-[normal] underline whitespace-nowrap hover:text-gray-300 transition-colors"
                        href="mailto: tjwjd0013@hufs.ac.kr"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        📧 tjwjd0013@hufs.ac.kr
                    </a>
                    <a
                        className="flex items-center w-[307px] h-[33px] mt-px [font-family:'vollkorn',Helvetica] font-normal text-cream text-2xl tracking-[0] leading-[normal] underline whitespace-nowrap hover:text-gray-300 transition-colors"
                        href="https://github.com/SeoJeong-Lee"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        💻 github
                    </a>
                </div>

                <ProfileSummary />

                <div className="top-[80px] left-[77px] w-[329px] absolute h-[393px]">
                    <div className="absolute top-[85px] left-[111px] w-[218px] h-[308px] bg-[#bdd8e9] rounded-[0px_20px_0px_0px" />
                    <img
                        className="top-0 left-0 w-[308px] absolute h-[393px]"
                        alt="selfie"
                        src="https://c.animaapp.com/11NdUk9a/img/selfie@2x.png"
                    />
                </div>

                <p className="absolute top-[250px] left-[579px] w-[759px] h-[180px] [font-family:'Vollkorn',Helvetica] font-normal text-cream text-[32px] tracking-[0] leading-[normal]">
                    I am studying and taking and interest in data and <br />
                    AI-based energy systems and smart grids. <br />
                    In particular, I am interested in technologies that solve problems <br />
                    through the convergence of energy and IT.
                </p>

                <div className="absolute top-[80px] left-[579px] h-[140px] flex items-center [font-family:'Shrikhand',Helvetica] font-normal text-cream text-8xl tracking-[0] leading-[normal]">
                    SeoJeong Lee
                </div>
            </div>
        </div>
    );
};