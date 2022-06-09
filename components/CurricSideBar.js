/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
  SparklesIcon,
} from "@heroicons/react/outline";
import { SparklesIcon as SolidSparkles } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/solid";
import CurriculumContent from "./CurriculumContent";
import Image from "next/image";

const upperCase = (string) => {
  let capitalizeLetterFunc = match => match.toUpperCase();
  return string.replace(/(^\w{1})|(\s{1}\w{1})/g, capitalizeLetterFunc);
}

const NavItem = ({ value, index, id }) => {
  let classes;
  if(id !== value){
    classes = "text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer"
  } else {
    classes = "bg-indigo-800 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer"
  }
  let title = value
  title = title.replace(/-/g, ' ')
  title = upperCase(title)

  if(index === 0){
    title = title.replace(/\d/, "")
  }

  return (
    <Link href={"/course/" + value} passHref>
      <div className={classes}>
        <SparklesIcon
          className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300"
          aria-hidden="true"
        />
        {index !== 0 && <span>Lesson&nbsp;</span>}{title}
      </div>
    </Link>
  );
}

const NavList = (props) => {
  const paths = props.paths;
  const listItems = paths.map((path, index) => (
    <NavItem key={path.params.id} value={path.params.id} index={index} id={props.id}/>
  ));
  return <div>{listItems}</div>;
}

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function CurricSidebar({ curricData, id, paths }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          <div className="flex -ml-20 flex-col flex-grow pt-5 bg-[#000]   overflow-y-auto">
            <div className="mt-5 ml-3 flex-1 flex flex-col">
              <nav className="flex-1 px-2 pb-4 space-y-1">
                <NavList paths={paths} id={id}/>
              </nav>
            </div>
          </div>
        </div>

        <CurriculumContent curricData={curricData} id={id} />
      </div>
    </>
  );
}