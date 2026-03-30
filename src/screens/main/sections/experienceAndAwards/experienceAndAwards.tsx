import { JSX } from "react";

export const ExperienceAndAwards = (): JSX.Element => {
    const awards = [
        "G-RISE Regional Industry Group PoC Outstanding Project Presentation (Honorable Mention)",
        "2025 N-CUBE Summer Project (3rd Place)",
        "2025 CHALLKATHON (Participant)",
    ];

    return (
        <div className="absolute top-[1924px] left-[74px] w-[1294px] h-[212px]">
            <div className="h-[212px] absolute top-0 left-0 w-[1292px] bg-cream rounded-[20px]" />

            <div className="absolute top-[23px] left-[29px] h-[45px] flex items-center [font-family:'Vollkorn',Helvetica] font-bold text-[#021024] text-[32px] tracking-[0] leading-[normal]">
                Experience & Awards
            </div>

            <div className="absolute top-[76px] left-[26px] w-[1036px] h-[99px]">
                <ul className="list-disc list-inside [font-family:'Vollkorn',Helvetica] font-medium text-background text-2xl tracking-[0] leading-[normal] space-y-1">
                    {awards.map((award, index) => (
                        <li key={index}>{award}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};