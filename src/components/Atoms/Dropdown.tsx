import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import Label from "./Label";
import { useRouter } from "next/router";
import Link from "next/link";

interface SubMenu {
  name: string,
  icone: string,
  link: string
}

interface Props {
  name: string,
  icone: string,
  subMenuItens: SubMenu[]
}

const Dropdown = (props: Props) => {
  const [open, setOpen] = useState(false);

  const [iconFather, setIconFather] = useState(false)

  const [pathAtual, setPathAtual] = useState('')
  const router = useRouter()

  useEffect(() => {
    setPathAtual(router.pathname);

    props.subMenuItens.forEach((item) => {
      if (router.pathname === `/${item.link}`) {
        setIconFather(true)
        setOpen(true);
      }
    })
    
  }, [router.pathname]);

  return (
    <div className="relative" onClick={() => setOpen(!open)}>
      <button className="flex flex-row items-center w-full px-4 py-2 text-sm font-semibold text-left bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
        <Icon
          color={`text-gray-600 `}
          icon={props.icone}
          size="large"
          className={`p-1 px-1 ${iconFather && 'bg-primary rounded-lg text-white cursor-pointer'}`}
          
        />
        <Label color="text-gray-600" fontWeight="lighter" text={props.name} className='pl-2 cursor-pointer' />
        <Icon
          color={`text-gray-600 `}
          icon={'mdi-chevron-down'}
          size="large"
          className={`inline ml-2 transition-transform duration-200 transform ${open ? 'rotate-180' : 'rotate-0'}`}
          
        />
        {/* <svg
          className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${open ? 'rotate-180' : 'rotate-0'}`}
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg> */}
      </button>
      {open && (
        <div className="absolute right-0 w-full origin-top-right rounded-md shadow-lg">
          <div className="px-2 py-2 bg-white rounded-md shadow">
            {
              props.subMenuItens.map((item, index) => (

                <Link href={`/${item.link}`} key={`${item.link}-${index}`} className={` 
                  ${pathAtual === `/${item.link}` &&
                  'rounded-xs overflow-hidden border-r-blue-500 border-r border-r-4'}
                  block px-4 py-2 pt-2 text-sm text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline`}>
                  <Icon
                    color="text-gray-600"
                    icon={`${item.icone}`}
                    size="large"
                    className={`p-1 ${pathAtual === `/${item.link}`  && 'bg-primary rounded-lg text-white cursor-pointer'}`}
                  />
                  <Label color="text-gray-600" text={`${item.name}`} className='pl-2 cursor-pointer' />
                </Link>
              ))}
          </div>
                          {/* <a
                href="#"
                className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >
                Link #1
              </a> */}
        </div>
      )}
    </div>
  );
};

export default Dropdown