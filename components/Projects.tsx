import {
    BriefcaseIcon,
  } from '@heroicons/react/24/outline'

  import Image from 'next/image';
  import ProjetsImage from '../assets/projects_image.jpg'


const Projects = () => {
    return (
        <div className="flex flex-row items-center gap-x-7">

        <div className="grid w-2/5 content-start gap-y-5">
            <div className="flex flex-row items-center h-1/4 gap-x-5 self-center">
                <div className="flex items-center justify-center text-center rounded-full border border-red-400 bg-white w-12 h-12 text-red-400">
                    <div className="w-6"><BriefcaseIcon /></div>
                </div>
                <p className="text-xl"><strong>Projects</strong></p>
            </div>
            <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
        <div className="w-3/5">
            <Image src={ProjetsImage} />
        </div>

        </div>
    );
}

export default Projects;