import type { NextPage } from 'next'
import {
  FaComments,
  FaBriefcase,
  FaAddressBook,
  FaCalendar,
  FaUsers,
  FaStar,
  FaSlidersH,
  FaHeadset,
  FaUser,
} from 'react-icons/fa';

const Home: NextPage = () => {
  return (
    <div>

      <div className="min-h-screen w-20 bg-gray-700 text-slate-300 flex flex-col items-center">
        <a href="#" className="flex justify-center w-full bg-orange-400 py-3 text-4xl text-white hover:text-black"><FaComments /></a>
        <a href="#" className="btn"><FaBriefcase /></a>
        <a href="#" className="btn"><FaAddressBook /></a>
        <a href="#" className="btn"><FaCalendar /></a>
        <a href="#" className="btn"><FaUsers /></a>
        <a href="#" className="btn"><FaStar /></a>
        <a href="#" className="btn"><FaSlidersH /></a>
        <a href="#" className="btn"><FaHeadset /></a>
        <div className="flex justify-center"><a href="#" className="absolute bottom-10 rounded-full bg-white text-slate-800 w-max h-max text-xl p-3 hover:bg-gray-600 hover:text-white"><FaUser /></a></div>
      </div>

    </div>
  )
}

export default Home
