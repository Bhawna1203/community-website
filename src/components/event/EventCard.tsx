import React from "react";
import {ellipsisText, getWebURL, openWebLink, parseDate} from "../../utils";
import {SiGooglemaps} from "react-icons/si";
import {FaLinkedin, FaTwitter, FaGithub, FaCalendarAlt} from "react-icons/fa";
import Link from "next/link";
import {EVENT_STATUS, EventProps} from "../../types/event_types";

export const EventCard = ({
                              eventID,
                              title,
                              about,
                              description,
                              startingDate,
                              endingDate,
                              timing,
                              speaker,
                              speakerSocials,
                              imageLink,
                              venue,
                              venueLink,
                              registrationLink,
                              status,
                          }: EventProps) => {

    const eventStatus = () => {
        if (status === EVENT_STATUS.LIVE) return EVENT_STATUS.LIVE
        else if (status === EVENT_STATUS.UPCOMING) return EVENT_STATUS.UPCOMING
        else return EVENT_STATUS.PAST
    }

    const eventStartingDate = startingDate ? parseDate(new Date(startingDate)) : "TBD"
    const eventEndingDate = endingDate ? parseDate(new Date(endingDate)) : null

    return (
        <div className="card w-96 shadow-xl text-[#464343]">
            <figure className='relative'>
                <div className='absolute flex w-60 h-60 transition-opacity opacity-0 bg-slate-700 hover:opacity-90'>
                    <Link href={`/events/${getWebURL(eventID)}`}>
                        <button className='m-auto btn btn-secondary'>Learn More</button>
                    </Link>
                </div>
                <div
                    className='absolute flex w-full h-10 items-center text-white text-[18px] bottom-0'>
                    <div className="absolute left-0 mx-4">
                        <span>Speaker: {ellipsisText(speaker, 16)}</span>
                    </div>
                    <div className="absolute right-0 flex space-x-2 mr-4 items-center">
                        {
                            speakerSocials.github ? (
                                <FaGithub className="text-white" onClick={
                                    () => openWebLink(speakerSocials.github)
                                } style={{cursor: 'pointer'}}
                                />
                            ) : null
                        }
                        {
                            speakerSocials.twitter ? (
                                <FaTwitter className="text-white" onClick={
                                    () => openWebLink(speakerSocials.twitter)
                                } style={{cursor: 'pointer'}}
                                />
                            ) : null
                        }
                        {
                            speakerSocials.linkedin ? (
                                <FaLinkedin className="text-white" onClick={
                                    () => openWebLink(speakerSocials.linkedin)
                                } style={{cursor: 'pointer'}}
                                />
                            ) : null
                        }
                    </div>
                </div>
                <img className='w-60 h-60' src={imageLink} alt="Event Image"/>
            </figure>
            <div className="p-6 bg-white text-left">
                <div className="-mt-4 flex space-x-2 items-center">
                    <SiGooglemaps/>
                    {
                        venueLink ? (
                            <span className="font-bold" onClick={
                                () => window.open(venueLink, "_blank")
                            } style={{cursor: 'pointer'}}
                            >{venue}</span>
                        ) : <span>{venue}</span>
                    }

                </div>
                <div className="grid grid-cols-2 mb-2">
                    <div className="flex space-x-2 items-center">
                        <FaCalendarAlt/>
                        {
                            eventEndingDate ? (
                                <h2>
                                    {eventStartingDate} - {eventEndingDate}
                                </h2>
                            ) : (
                                <h2>{eventStartingDate}</h2>
                            )
                        }
                    </div>
                    {
                        timing ?
                            <h2 className="text-right text-black">{timing}</h2> : null
                    }
                </div>

                <h2 className="card-title text-black">{title}</h2>
                <p className="tracking-tight">{ellipsisText(about, 112)}</p>
                <div className="relative p-10 mb-2">
                    {/*<div className="absolute left-0">*/}
                    {/*    <button className="btn btn-primary hover:bg-commColor">{eventStatus()}</button>*/}
                    {/*</div>*/}
                    {
                        registrationLink ? (
                            <div className="absolute right-0">
                                <button className="btn btn-primary hover:bg-commColor"
                                onClick={
                                    () => openWebLink(registrationLink)
                                }>Register</button>
                            </div>) : null
                    }
                </div>
            </div>
        </div>
    );
};
