import { JSX } from "react";

export const Certification = (): JSX.Element => {
    const certifications = ["ADsP (Advanced Data Analytics Semi-Professional)"];

    return (
        <div className="absolute top-[2385px] left-[74px] w-[1294px] h-[134px]">
            <div className="h-[134px] absolute top-0 left-0 w-[1292px] bg-cream rounded-[20px]" />
            
            <div className="absolute top-[23px] left-[29px] h-[45px] flex items-center [font-family:'Vollkorn',Helvetica] font-bold text-[#021024] text-[32px] tracking-[0] leading-[normal]">
                Certifications
            </div>

            <div className="left-[29px] w-[611px] absolute top-[76px] h-[33px] flex">
                <p className="flex items-center w-[609px] h-[33px] [font-family:'Vollkorn',Helvetica] font-medium text-background text-2xl tracking-[0] leading-[normal]">
                    {certifications.map((cert, index) => (
                        <span key={index}>{cert}</span>
                    ))}
                </p>
            </div>
        </div>
    );
};