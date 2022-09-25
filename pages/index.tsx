import type { NextPage } from 'next'
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';

import {
  ChatBubbleBottomCenterTextIcon,
  BriefcaseIcon,
  AtSymbolIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  ArrowUpCircleIcon,
  AdjustmentsVerticalIcon,
  InformationCircleIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline'

import Calendar from '../components/Calendar';
import Contacts from '../components/Contacts';
import Projects from '../components/Projects';
import Settings from '../components/Settings';
import Support from '../components/Support';
import Team from '../components/Team';
import Upgrade from '../components/Upgrade';

import { Tooltip } from '@nextui-org/react';

const Home: NextPage = () => {

  // create hook to change state depending on item selected on the DOM

  let [display, setDisplay] = useState(<Projects />);
  let [title, setTitle] = useState("Projects");

  const changeDisplay = (e: any) => {
    let id = e.currentTarget.id;

    for (let i = 0; i < displayArr.length; i++) {
      if (displayArr[i].name == id) {
        setDisplay(display = displayArr[i].val);
        setTitle(title = displayArr[i].title);
      }
    }
  }



  const displayArr = [
    { name: "calendar", id: 1, title: "Calendar", val: <Calendar /> },
    { name: "contacts", id: 2, title: "Contacts", val: <Contacts /> },
    { name: "projects", id: 3, title: "Projects", val: <Projects /> },
    { name: "settings", id: 4, title: "Settings", val: <Settings /> },
    { name: "support", id: 5, title: "Support", val: <Support /> },
    { name: "team", id: 6, title: "Team", val: <Team /> },
    { name: "upgrade", id: 7, title: "Upgrade", val: <Upgrade /> },
  ]

  const buttonsArr = [
    { name: <BriefcaseIcon />, id: "projects", content: "Projects", key: "1" },
    { name: <AtSymbolIcon />, id: "contacts", content: "Contacts", key: "2" },
    { name: <CalendarDaysIcon />, id: "calendar", content: "Calendar", key: "3" },
    { name: <UserGroupIcon />, id: "team", content: "Team", key: "4" },
    { name: <ArrowUpCircleIcon />, id: "upgrade", content: "Upgrade", key: "5" },
    { name: <AdjustmentsVerticalIcon />, id: "settings", content: "Settings", key: "6" },
    { name: <InformationCircleIcon />, id: "support", content: "Support", key: "7" },
  ]

  return (
    <div className="bg-slate-300">

      <div className="flex flex-row">
        <div className="min-h-screen w-16 bg-neutral-800 text-slate-400 flex flex-col items-center">
          <div className="flex justify-center items-center py-1 w-full bg-red-400 text-4xl text-white h-14"><a href="#" className="h-9 w-9"><ChatBubbleBottomCenterTextIcon /></a></div>
          {buttonsArr.map(({ name, id, content, key }) => (
            <a id={id} key={key} href="#" className="btn" onClick={changeDisplay}><Tooltip content={content} placement="right"><div className="w-5">{name}</div></Tooltip></a>
          ))}
          <div className="flex justify-center"><a href="#" className="absolute bottom-16 rounded-full bg-white text-slate-700 w-max h-max text-base p-2 hover:bg-gray-600 hover:text-white"><FaUser /></a></div>
        </div>

        <div className="grid grid-rows-6 w-screen h-screen">
          <div className="w-full bg-white h-14 px-5 flex flex-row">
            <div className="w-1/2 flex flex-row items-center gap-x-5 text-slate-700">
              <div className="flex items-center justify-center border rounded-sm border-gray-300 bg-gray-100 w-8 h-8 text-gray-400">
                <div className="w-5"><BuildingOffice2Icon /></div>
              </div>
              <p className="text-sm">{title}</p>
            </div>
            <div className="w-1/2 flex flex-row justify-end items-center">
              <div className="text-white h-3/5"><button className="flex items-center bg-sky-500 hover:bg-sky-400 border-1 border-sky-400 rounded-sm py-1 px-6 pb-1 text-sm">Create</button></div>
            </div>
          </div>

          <div className=" flex flex-row bg-white w-3/5 row-span-3 row-start-2 justify-self-center p-10">
            {display}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
