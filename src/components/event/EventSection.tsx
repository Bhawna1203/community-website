import React, {FC} from "react";
import {events} from "./events";
import {EventCard} from "./EventCard";
import {FaCalendarAlt, FaLaptopCode} from "react-icons/fa";
import {MdPeopleAlt} from "react-icons/md";

export const EventSection: FC = () => {
    return (
        <div className="bg-white p-4 pt-0">
            <div className="bg-[#F1F6F0] text-black font-satoshi">
                <div className="pl-4">
                    <div className="text-5xl font-bold tracking-widest pl-8 pt-4">Events</div>
                    <div className="w-[235px] h-8 border-underLine border-b-6 rounded-smileUnderLine "></div>
                </div>
                <div
                    className="text-[20px] tracking-wide leading-relaxed text-center text-[#7D7D7D] px-20 py-10">
                    <div className='flex flex-wrap justify-center gap-40'>
                        {events.map((props, idx) => (
                            <EventCard {...props} key={idx} idx={props.idx}/>
                        ))}
                    </div>
                </div>

                <div
                    className="flex bg-[#DCF7E7] justify-center h-[107px] text-[20px] tracking-wide text-[#7D7D7D] px-20 py-10 mx-20">
                    <div className='flex text-center text-black items-center gap-80'>
                        <div className="grid grid-rows-2 gap-y-2 items-center">
                            <div className="flex space-x-2 items-center">
                                <MdPeopleAlt/>
                                <p><b>350+</b></p>
                            </div>
                            <span>Participants</span>
                        </div>
                        <div className="grid grid-rows-2 gap-y-2 items-center">
                            <div className="flex space-x-2 items-center">
                                <FaLaptopCode/>
                                <p><b>5+</b></p>
                            </div>
                            <span>Projects</span>
                        </div>
                        <div className="grid grid-rows-2 gap-y-2 items-center">
                            <div className="flex space-x-2 items-center">
                                <FaCalendarAlt/>
                                <p><b>10+</b></p>
                            </div>
                            <span>Events</span>
                        </div>
                    </div>
                </div>
                <div className="p-5 flex flex-wrap justify-center mb-2">
                    <button
                        className="border-3 space-x-1 m-2 border-purple-400 rounded-full content-center h-11 items-center justify-center bg-lightPurple font-bold hover:bg-purple-500 px-6 bg-transition duration-300">
                        See more events
                    </button>
                </div>
            </div>
        </div>
    );
};