import { JSX } from "react";

export const ProfileSummary = (): JSX.Element => {
    return (
        <div className="absolute top-[500px] left-[579px] w-[518px] h-[117px] flex flex-col">
            <div className="flex items-center w-[145px] h-[45px] [font-family:'Vollkorn',Helvetica] font-bold text-cream text-[32px] tracking-[0] leading-[normal]">
                About Me
            </div>

            <p className="flex items-center w-[512px] h-[33px] mt-1.5 [font-family:'Vollkorn',Helvetica] font-normal text-cream text-2xl tracking-[0] leading-[normal]">
                HUFS Computer Engineering Science (Junior)
            </p>

            <p className="flex items-center w-[378px] h-[33px] [font-family:'Vollkorn',Helvetica] font-normal text-cream text-2xl tracking-[0] leading-[normal]">
                Double major in Climate Change
            </p>
        </div>
    );
};