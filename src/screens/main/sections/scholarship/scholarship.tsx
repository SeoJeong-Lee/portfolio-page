import { JSX } from "react"

export const Scholarship = (): JSX.Element => {
    return (
        <div className="absolute top-[2188px] left-[74px] w-[1294px] h-[137px]">
            <div className="h-[137px] absolute top-0 left-0 w-[1292px] bg-cream rounded-[20px]" />

            <div className="left-[26px] w-[822px] absolute top-[76px] h-[33px] flex">
                <p className="flex items-center w-[820px] h-[33px] [font-family:'Vollkorn',Helvetica] font-medium text-background text-2xl tracking-[0] leading-[normal]">
                    National Scholarship for Science and Engineering (2024 - present)
                </p>
            </div>

            <div className="absolute top-[23px] left-[29px] h-[45px] flex items-center [font-family:'Vollkorn',Helvetica] font-bold text-[#021024] text-[32px] tracking-[0] leading-[normal]">
                Scholarship
            </div>
        </div>
    );
};