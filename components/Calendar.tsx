import {
    CalendarDaysIcon,
} from '@heroicons/react/24/outline'

import Image from 'next/image';
import CalendarImage from '../assets/calendar_image.jpg'


const Calendar = () => {
    return (
        <div className="flex flex-row items-center justify-around gap-x-7">

            <div className="grid w-3/5 content-start gap-y-5">
                <div className="flex flex-row items-center h-1/4 gap-x-5 self-center">
                    <div className="flex items-center justify-center rounded-full border border-red-400 bg-white w-12 h-12 text-red-400">
                        <div className="w-6"><CalendarDaysIcon /></div>
                    </div>
                    <p className="text-xl"><strong>Calendar</strong></p>
                </div>
                <p className="row-span-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className="w-2/5">
                <Image src={CalendarImage} className="" />
            </div>

        </div>
    );
}

export default Calendar;