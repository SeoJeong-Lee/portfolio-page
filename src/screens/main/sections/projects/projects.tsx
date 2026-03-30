import { JSX } from "react";

export const Projects = (): JSX.Element => {
    return (
        <div className="absolute top-[758px] left-[74px] w-[1294px] h-[1114px]">
            <div className="h-[1081px] absolute top-0 left-0 w-[1292px] bg-cream rounded-[20px]" />

            <div className="absolute top-[842px] left-[29px] w-[944px] h-[179px] flex flex-col gap-[9px]">
                <div className="flex items-center w-[310px] h-[33px] [font-family:'Vollkorn',Helvetica] font-semibold text-background text-2xl tracking-[0] leading-[normal] underline">
                    Exchange Diary Web Service
                </div>

                <div className="w-[83px] flex items-center h-[29px] [font-family:'Yrsa',Helvetica] font-normal text-background text-2xl tracking-[0] leading-[normal]">
                    [2025.06]
                </div>

                <p className="w-[938px] h-[99px] [font-family:'Vollkorn',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
                    Team leader: managing task distribution and coordinating team collaboration
                    <br />
                    Designed and implemented a web platform for exchanging diary entries between users
                    <br />
                    Built core features for writing, sharing, and managing diary content
                </p>
            </div>

            <div className="absolute top-[600px] left-[29px] w-[907px] h-[179px] flex flex-col gap-[9px]">
                <p className="flex items-center w-[388px] h-[33px] [font-family:'Vollkorn',Helvetica] font-semibold text-background text-2xl tracking-[0] leading-[normal] underline">
                    Class Material Sharing Web Service
                </p>

                <div className="w-[173px] flex items-center h-[29px] [font-family:'Yrsa',Helvetica] font-normal text-background text-2xl tracking-[0] leading-[normal]">
                    [2025.06 - 2025.08]
                </div>

                <p className="w-[901px] h-[99px] [font-family:'Vollkorn',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
                    Team leader: managing task distribution and coordinating team collaboration
                    <br />
                    Designed and implemented a web service for sharing and managing class materials
                    <br />
                    Developed features for file upload, access, and structured content organization
                </p>
            </div>

            <div className="absolute top-[369px] left-[29px] w-[1041px] h-[179px] flex flex-col gap-[9px]">
                <a
                    className="w-max group hover:text-award transition-colors duration-300"
                    href="https://github.com/SeoJeong-Lee/dailyPeakPowerDemandForecasting_usingLSTM"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <p className="flex items-center w-max whitespace-nowrap [font-family:'Vollkorn',Helvetica] font-semibold text-2xl tracking-[0] leading-[normal] underline">
                        Daily Peak Power Demand Forecasting Model 💻
                    </p>
                </a>

                <div className="w-[170px] flex items-center h-[29px] [font-family:'Yrsa',Helvetica] font-normal text-background text-2xl tracking-[0] leading-[normal]">
                    [2025.09 - 2025.12]
                </div>

                <p className="w-[1035px] h-[99px] [font-family:'Vollkorn',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
                    Integrated heterogeneous time-series data from weather APIs and power consumption datasets
                    <br />
                    Designed feature engineering pipeline (rolling statistics, WetBulb, discomfort index)
                    <br />
                    Built LSTM model with sliding window sequence generation
                </p>
            </div>

            <div className="absolute top-24 left-[26px] w-[1236px] h-[245px]">
                <p className="absolute top-20 left-0 w-[1228px] h-[165px] [font-family:'Vollkorn',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
                    Team Leader: managing task distribution and coordinating team collaboration
                    <br />
                    Built a web service for real-time power consumption analysis and personalized energy saving recommendations
                    <br />
                    Analyzed user energy usage patterns to generate customized saving strategies
                    <br />
                    Designed end-to-end data flow from data collection to user-facing insights
                </p>

                <div className="absolute top-[42px] left-[3px] w-[303px] flex items-center h-[29px] [font-family:'Yrsa',Helvetica] font-normal text-background text-2xl tracking-[0] leading-[normal]">
                    [2025.12 - 2026.01]
                </div>

                <p className="flex items-center w-[479px] h-[33px] [font-family:'Vollkorn',Helvetica] font-semibold text-2xl tracking-[0] leading-[normal] underline">
                    Real-time Energy Saving Guide Web Service
                </p>
            </div>

            <div className="absolute top-[23px] left-[29px] h-[45px] flex items-center [font-family:'Vollkorn',Helvetica] font-bold text-[#021024] text-[32px] tracking-[0] leading-[normal]">
                Projects
            </div>
        </div>
    );
};