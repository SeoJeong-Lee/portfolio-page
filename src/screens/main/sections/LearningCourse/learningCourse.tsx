import { JSX } from "react"

export const LearningCourse = (): JSX.Element => {
    const semesters = [
        {
            id: "2024-1",
            label: "2024-1",
            courses: [
                "Computational Thinking",
                "Computer Programming",
                "Discrete Mathematics",
                "English for Engineering",
            ],
        },
        {
            id: "2024-2",
            label: "2024-2",
            courses: [
                "Practical Use Computer",
                "Linear Algebra",
                "Elementary Calculus 2",
                "Computer Programming & Lab",
            ],
        },
        {
            id: "2025-1",
            label: "2025-1",
            courses: [
                "Data Structure",
                "Open Source SW",
                "Introduction to Climate Economics 1",
                "Introduction to Climate Change 1",
                "Energy System Management",
            ],
        },
        {
            id: "2025-2",
            label: "2025-2",
            courses: [
                "Algorithm",
                "Web Programming",
                "Object-Oriented Programming",
                "Climate Big Data Programming and Practical Applications",
                "Sustainbale Power System Optimization",
                "Introduction to Climate Change 2",
                "Introduction to Computer System",
            ],
        },
        /*
        {
            id: "2026-1",
            label: "2026-1 (Present)",
            courses: [
                "Big Data Processing",
                "Engineering Mathematics 1",
                "Programming Languages",
                "System Programming",
                "Computer Engineering Special Lecture",
                "Statistical Analysis of Climate Change",
                "Understanding Climate Systems",
            ],
        },
        */
    ];

    return (
        <div className="absolute top-[2571px] left-[74px] w-[1294px] h-[900px]">
            <div className="h-[900px] absolute top-0 left-0 w-[1292px] bg-cream rounded-[20px]" />

            <div className="absolute top-[23px] left-[29px] h-[45px] flex items-center [font-family:'Vollkorn',Helvetica] font-bold text-[#021024] text-[32px] tracking-[0] leading-[normal]">
                Learning Course
            </div>

            <div className="top-24 w-[300px] absolute left-[29px] h-[178px] flex flex-col gap-[13px]">
                <div className="flex items-center w-[73px] h-[33px] [font-family:'vollkorn',Helvetica] font-semibold text-background text-2xl tracking-[0] leading-[normal] underline">
                    {semesters[0].label}
                </div>
                <p className="w-[296px] h-[132px] [font-family:'Vollkorn',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
                    {semesters[0].courses.map((course, index) => (
                        <span
                            key={index}
                            className="[font-family:'Vollkorn',Helvetica] font-normal text-black text-2xl tracking-[0]"
                            >
                                {course}
                                {index < semesters[0].courses.length -1 && <br />}
                        </span>
                    ))}
                </p>
            </div>

            <div className="top-[302px] w-[365px] absolute left-[29px] h-[178px] flex flex-col gap-[13px]">
                <div className="flex items-center w-[76px] h-[33px] [font-family:'Vollkorn',Helvetica] font-semibold text-background text-2xl tracking-[0] leading-[normal] underline">
                    {semesters[1].label}
                </div>
                <p className="w-[361px] h-[132px] [font-family:'Vollkorn',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
                    {semesters[1].courses.map((course, index) => (
                        <span key={index}>
                            {course}
                            {index < semesters[1].courses.length -1 && <br />}
                        </span>
                    ))}
                </p>
            </div>

            <div className="top-[508px] w-[421px] h-[210px] gap-3 absolute left-[29px] flex flex-col">
                <div className="flex items-center w-[71px] h-[33px] [font-family:'Vollkorn',Helvetica] font-semibold text-background text-2xl tracking-[0] leading-[normal] underline">
                    {semesters[2].label}
                </div>
                <p className="w-[417px] h-[165px] [font-family:'Vollkorn',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
                    {semesters[2].courses.map((course, index) => (
                        <span key={index}>
                            {course}
                            {index < semesters[2].courses.length -1 && <br />}
                        </span>
                    ))}
                </p>
            </div>

            <div className="top-[746px] w-[648px] h-[275px] gap-[11px] absolute left-[29px] flex flex-col">
                <div className="flex items-center w-[74px] h-[33px] [font-family:'Vollkorn',Helvetica] font-semibold text-background text-2xl tracking-[0] leading-[normal] underline">
                    {semesters[3].label}
                </div>
                <p className="w-[644px] h-[231px] [font-family:'Vollkorn',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
                    {semesters[3].courses.map((course, index) => (
                        <span key={index}>
                            {course}
                            {index < semesters[3].courses.length -1 && <br />}
                        </span>
                    ))}
                </p>
            </div>

            {/*
            <div className="absolute top-[1049px] left-[29px] w-[445px] h-[275px] flex flex-col gap-[11px]">
                <div className="flex items-center w-[177px] h-[33px] [font-family:'Vollkorn',Helvetica] font-semibold text-background text-2xl tracking-[0] leading-[normal] underline">
                    {semesters[4].label}
                </div>
                <p className="w-[441px] h-[231px] [font-family:'Vollkorn',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
                    {semesters[4].courses.map((course, index) => (
                        <span key={index}>
                            {course}
                            {index < semesters[4].courses.length -1 && <br />}
                        </span>
                    ))}
                </p>
            </div>
            */}
        </div>
    );
};