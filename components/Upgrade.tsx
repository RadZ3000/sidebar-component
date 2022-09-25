import {
    ArrowUpCircleIcon,
  } from '@heroicons/react/24/outline'


const Upgrade = () => {
    return (
        <div className="grid grid-rows-4 w-2/5 content-around">
            <div className="flex flex-row items-center h-1/4 gap-x-5 row-span-2 self-center">
                <div className="flex items-center justify-center rounded-full border border-red-400 bg-white w-14 h-14 text-red-400">
                    <div className="w-8"><ArrowUpCircleIcon /></div>
                </div>
                <p className="text-xl"><strong>Upgrade</strong></p>
            </div>
            <p className="row-span-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
    );
}

export default Upgrade;