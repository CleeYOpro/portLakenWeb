"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";


interface TimelineData {
    year: number;
    title: string;
    subtitle: string;
    milestones: string[];
    images: string[];
}

const timelineData: TimelineData[] = [
    {
        year: 1846,
        title: "A Harbor Is Born",
        subtitle: "I first opened my waters to the world, a natural deep-water harbor shaping my destiny.",
        milestones: [
            "I built my first dock along Laken Bay",
            "Fishing and timber trade flourished in my bays",
            "I was officially named Port Laken"
        ],
        images: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjucECqyJ6PgFSIj322xZmnd3j8mmjcJZFkaPDcUZ1XxurZp4KxizVZYqAaNOioJPGtxocrReMtSbjho4xhfJF_KECuMn14iV8Es-zl40O9tOgjvhgiiF4f6hjgszW_AySBgKnEH1BtwA4/s1600/NEREID+at+inner+dock.jpeg",
            "https://miro.medium.com/v2/resize:fit:5000/1*wsub054vaWFYHFsCwoSCXA.jpeg"
        ]
    },
    {
        year: 1892,
        title: "Rail, Trade, and Growth",
        subtitle: "I connected myself to the wider world, letting commerce and people flow through me.",
        milestones: [
            "The railway reached my harbor",
            "Fishing and timber trade flourished along my shores",
            "My population grew past 1,000"
        ],
        images: [
            "https://www.washingtonruralheritage.org/digital/api/singleitem/image/nols/2636/default.jpg",
            "https://www.southsoundtalk.com/wp-content/uploads/2020/11/fishing-crew-of-the-schooner-Union-Jack-may-1913-UW-library.jpg"
        ]
    },
    {
        year: 1934,
        title: "Weathering the Storm",
        subtitle: "I endured hardship and uncertainty, yet I found ways to keep my people safe and my harbor strong.",
        milestones: [
            "I modernized my roads through public works",
            "I reinforced my harbor infrastructure",
            "Community relief programs expanded under my watch"
        ],
        images: [
            "https://depts.washington.edu/depress/images/kirkland_coop_432.jpg",
            "https://portofpa.com/wp-content/uploads/2022/03/history1-scaled.jpg"
        ]
    },
    {
        year: 1958,
        title: "Postwar Expansion",
        subtitle: "I grew, welcoming families, building neighborhoods, and shaping my civic identity.",
        milestones: [
            "My first public high school opened",
            "Suburban neighborhoods developed along my streets",
            "I proudly saw my City Hall rise"
        ],
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/5/5c/Lincoln_School%2C_Port_Angeles%2C_WA_%282%29.jpg",
            "https://static.stacker.com/s3fs-public/styles/1280x720/s3/36utahKGSM_0.png?token=xEcg5fA5"
        ]
    },
    {
        year: 1976,
        title: "Environmental Awakening",
        subtitle: "I realized the value of my natural beauty and took steps to protect it for generations.",
        milestones: [
            "I passed a coastal preservation act",
            "I adopted industrial zoning restrictions",
            "I ensured public shoreline access for everyone"
        ],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXyulZjMGLApsnbJ0GggfLfZ5Mq4oZIYgi4A&s",
            "https://www.thedailyworld.com/wp-content/uploads/2022/11/30983987_web1_221112-ADW-Hurricane-Ridge-winter_1.jpg",
        ]
    },
    {
        year: 1998,
        title: "Downtown Renewal",
        subtitle: "I transformed my waterfront into a vibrant hub of culture and community.",
        milestones: [
            "I redeveloped my historic pier",
            "I established an international port",
            "I launched incentives to support small businesses"
        ],
        images: [
            "https://www.cascadiadaily.com/wp-content/uploads/2025/04/01-Little-Squamish-Pier-20250403-SO-1536x1025.jpg",
            "https://img.marinas.com/v2/f63bd300ad0c2f3beb6433eeaa83227893a6076ebac8cc31654831630120f6a9.jpg"
        ]
    },
    {
        year: 2012,
        title: "A City Goes Digital",
        subtitle: "I embraced technology to make life easier, smarter, and more connected for my citizens.",
        milestones: [
            "I launched an online permitting system",
            "I introduced an open data portal",
        ],
        images: [
            "https://erepublic.brightspotcdn.com/dims4/default/9f34b54/2147483647/strip/true/crop/5120x2670+0+210/resize/840x438!/quality/90/?url=http%3A%2F%2Ferepublic-brightspot.s3.us-west-2.amazonaws.com%2Ff0%2F3c%2F8b642cc7498b8d59c340ca78ee4d%2Fshutterstock-2030694479.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxDIe4R7M__x27vLHRwEQykyRzVZvFHhTE1A&s"
        ]
    },
    {
        year: 2020,
        title: "Community First",
        subtitle: "I centered my growth around equity, resilience, and the voices of my people.",
        milestones: [
            "I expanded emergency response coordination",
            "I supported mutual aid networks",
            "I redesigned public engagement platforms"
        ],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYdfcag8OBGJVbiibPE5HXm7Cvf7s_G0mMdw&s",
            "https://s3.us-east-1.amazonaws.com/jensenhughes/1920x1000_Web-Headers/_1940x620_crop_center-center_90_none/154188/EmergMgmt_Command-Center_iStock-158554627_OVL_1920x1000.webp"
        ]
    },
    {
        year: 2024,
        title: "Building Forward",
        subtitle: "I invest in sustainability and resilience, shaping a future my citizens can rely on.",
        milestones: [
            "I expanded affordable housing initiatives",
            "I modernized my port with higher capacity infrastructure",
            "Welcoming new industries while preserving my unique character"
        ],
        images: [
            "https://cdn.geekwire.com/wp-content/uploads/2016/12/09-06Westlake_TerryBuilding_print.jpg",
            "https://www.hillmannconsulting.com/wp-content/uploads/2023/06/Affordable-Housing-Complex-1.jpg"
        ]
    }
];

export default function TimelineSection() {
    const [activeYear, setActiveYear] = useState(1846);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const { top, height } = containerRef.current.getBoundingClientRect();
            const progress = Math.max(
                0,
                Math.min(1, -top / (height - window.innerHeight))
            );
            const index = Math.min(
                Math.floor(progress * timelineData.length),
                timelineData.length - 1
            );
            setActiveYear(timelineData[index].year);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const activeIndex = timelineData.findIndex(d => d.year === activeYear);
    const progressPercent =
        (activeIndex / (timelineData.length - 1)) * 100;
    const currentData =
        activeIndex !== -1 ? timelineData[activeIndex] : timelineData[0];

    return (
        <div ref={containerRef} className="relative h-[300vh] bg-port-frost">
            <div className="sticky top-0 h-screen flex items-center">
                <div className="w-full max-w-7xl mx-auto px-5 md:px-8">

                    {/* YEAR HEADER */}
                    <div className="flex items-center justify-between gap-4 mb-2 md:mb-6">
                        <h2 className="font-display text-6xl md:text-9xl font-bold text-port-navy animate-slideInLeft transition-all duration-500 ease-out">
                            {activeYear}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 items-start">
                        {/* TEXT CONTENT */}
                        <div className="animate-fadeIn transition-opacity duration-500 ease-out">
                            <h3 className="text-2xl md:text-3xl font-bold text-port-navy mb-4">
                                {currentData.title}
                            </h3>

                            <div className="bg-white/60 backdrop-blur-md border border-port-mist rounded-2xl p-6 shadow-sm">
                                <p className="text-port-slate text-base md:text-lg mb-5 leading-relaxed">
                                    {currentData.subtitle}
                                </p>
                                <ul className="space-y-3 text-port-slate text-base">
                                    {currentData.milestones.map((m, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="w-2 h-2 mt-2 rounded-full bg-port-sky shrink-0" />
                                            {m}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* DESKTOP IMAGES - Moved up relative to container */}
                        <div className="relative h-80 md:h-[420px] animate-slideInRight hidden md:block -mt-20 lg:-mt-40">
                            <div className="absolute top-0 right-4 md:right-12 w-56 md:w-72 h-72 md:h-80 rounded-2xl overflow-hidden shadow-xl transform -rotate-6 z-10 border-4 border-white">
                                <Image src={currentData.images[0]} alt="" fill className="object-cover transition-transform duration-700 hover:scale-105" />
                            </div>
                            <div className="absolute bottom-0 right-0 w-64 md:w-80 h-48 md:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 z-20">
                                <Image src={currentData.images[1]} alt="" fill className="object-cover transition-transform duration-700 hover:scale-105" />
                            </div>
                        </div>
                    </div>

                    {/* PROGRESS BAR - Thicker and Smoother */}
                    <div className="mt-12 md:mt-16">
                        <div className="relative h-4 bg-port-mist/30 rounded-full overflow-hidden">
                            <div
                                className="absolute inset-y-0 left-0 bg-gradient-to-r from-port-navy to-port-sky transition-all duration-500 ease-out"
                                style={{ width: `${progressPercent}%` }}
                            />
                        </div>

                        <div className="flex justify-between mt-4 px-1">
                            {timelineData.map(item => (
                                <div
                                    key={item.year}
                                    className={`text-center flex-1 transition-colors duration-300 ${item.year === activeYear
                                        ? "text-port-navy font-bold"
                                        : "text-port-slate/60 hover:text-port-slate"
                                        }`}
                                >
                                    <span className="text-sm md:text-base font-semibold">
                                        {item.year}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out; }
        .animate-slideInLeft { animation: slideInLeft 0.6s ease-out; }
        .animate-slideInRight { animation: slideInRight 0.6s ease-out; }
      `}</style>
        </div>
    );
}