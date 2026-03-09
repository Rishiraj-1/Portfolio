import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const timeline = [
    {
        year: "2026",
        title: "Project Morpheus",
        location: "SIT Lonavala",
        desc: "Built SafePulse: Urban safety intelligence platform",
        projectDetails: "Combined NCRB crime statistics with live citizen reports. Generates dynamic risk zones, scores safe routes, and dispatches verified guardians during emergencies in real time.",
        tags: ["NCRB data", "Real-time dispatch", "Safety Track"]
    },
    {
        year: "2025",
        title: "Innothon 2.0",
        location: "SKITM Indore",
        desc: "Built SafeFlow: Real-time crowd monitoring system",
        projectDetails: "Utilized YOLOv8n object detection on live webcam feeds to analyze crowd density. Includes admin dashboard, multi-mode monitoring, and map-based visualization.",
        tags: ["YOLOv8n", "Smart City Track", "Team CodeZilla"]
    },
    {
        year: "2025",
        title: "Mediverse Hackathon",
        location: "Medicaps University",
        desc: "Built AAHARNET: AI-powered food redistribution",
        projectDetails: "An AI-powered platform connecting food donors with NGOs and volunteers. Uses AI to optimize matching, reduce food waste, and fight hunger at scale.",
        tags: ["Zero Hunger mission", "NGO Tech Track", "Team CodeZilla"]
    },
    {
        year: "2025",
        title: "HACKATRON'25",
        location: "IIITM Gwalior",
        desc: "Built AAROGYA AI: Preventive AI health ecosystem",
        projectDetails: "Comprehensive health platform featuring Gemini-driven medical advice, real-time yoga posture correction, medical document RAG analysis, and fall detection.",
        tags: ["Health Tech Track", "Gemini API", "Team CodeZilla"]
    },
    {
        year: "2024",
        title: "Hackathon",
        location: "Virtual",
        desc: "Built SkillSwap: AI-powered skill exchange",
        projectDetails: "A platform for mutual skill exchange featuring Gemini AI assistance, real-time chat, collaborative whiteboards, and secure peer networking.",
        tags: ["EdTech Track", "Gemini AI", "Firebase"]
    }
];

const TimelineItem = ({ item, idx }) => {
    const revealRef = useScrollReveal();
    const isEven = idx % 2 === 0;

    return (
        <div ref={revealRef} className="reveal relative flex flex-col md:flex-row w-full items-center group mb-16 md:mb-24">
            <div className="md:hidden absolute left-[7px] top-6 w-1.5 h-1.5 bg-yellow outline outline-4 outline-bg z-10 group-hover:scale-150 transition-transform"></div>
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-yellow outline outline-8 outline-bg z-10 group-hover:scale-150 transition-transform"></div>

            <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:order-2 md:text-left'}`}>
                <div className="p-6 border border-white/5 bg-white/[0.02] rounded-xl hover:border-pink/30 transition-colors duration-500 relative h-full">
                    <div className={`absolute top-0 p-4 font-mono text-[10px] text-muted opacity-50 ${isEven ? 'left-0' : 'right-0'}`}>
                        {item.year}
                    </div>
                    <h3 className="font-bebas text-3xl md:text-4xl text-yellow mb-2 mt-4">{item.title}</h3>
                    <p className="font-mono text-xs text-pink mb-4">📍 {item.location}</p>
                    <div className={`flex flex-wrap gap-2 gap-y-2 mt-4 font-mono text-[11px] text-muted ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        {item.tags.map((tag, i) => (
                            <span key={i} className="bg-white/5 px-2 py-1 rounded border border-white/10">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className={`w-full md:w-1/2 pl-8 md:pl-0 mt-4 md:mt-0 ${isEven ? 'md:pl-16 md:text-left' : 'md:pr-16 md:order-1 md:text-right'}`}>
                <div className="p-6 border border-white/5 bg-white/[0.02] rounded-xl hover:border-cyan/30 transition-colors duration-500 h-full flex flex-col justify-center">
                    <h4 className="font-sans text-lg md:text-xl text-white mb-2 font-bold">{item.desc}</h4>
                    <p className="font-mono text-[13px] text-muted leading-relaxed hidden md:block">{item.projectDetails}</p>
                </div>
            </div>
        </div>
    );
};

export default function Achievements() {
    const headerRef = useScrollReveal();
    const footerRef = useScrollReveal();

    return (
        <section className="relative w-full py-32 px-6 md:px-12 max-w-5xl mx-auto overflow-hidden">
            <div ref={headerRef} className="reveal flex flex-col items-center justify-center text-center gap-4 mb-24">
                <h2 className="font-bebas text-6xl md:text-8xl leading-none">HACKATHONS</h2>
            </div>

            <div className="relative w-full">
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-yellow/20 -translate-x-1/2"></div>
                <div className="md:hidden absolute left-[10px] top-0 bottom-0 w-[1px] bg-yellow/20"></div>

                <div className="flex flex-col w-full text-left">
                    {timeline.map((item, idx) => (
                        <TimelineItem key={idx} item={item} idx={idx} />
                    ))}
                </div>
            </div>

            <div ref={footerRef} className="reveal mt-32 text-center p-8 border border-dashed border-white/20 max-w-3xl mx-auto bg-pink/5 block">
                <p className="font-mono text-sm text-yellow italic">
                    "Participated in 4+ hackathons across health, safety, food, and ed-tech domains. Still building."
                </p>
            </div>
        </section>
    );
}
