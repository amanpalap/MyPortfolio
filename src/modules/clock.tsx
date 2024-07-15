'use client'
import React, { useState, useEffect } from 'react';

export default function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    const formatTime = (date: Date) => {
        let hours = date.getHours();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes} ${ampm}`;
    };

    return <div className='lg:text-3xl text-xl md:text-3xl mt-2 mr-2 lg:mr-10 lg:mt-5 md:mr-10 md:mt-5 text-blue-500 font-extrabold'>{formatTime(time)}</div>;
};