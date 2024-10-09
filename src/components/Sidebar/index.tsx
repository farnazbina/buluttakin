import React, { useState } from 'react';
import {
  BankIcon,
  ChartSquareIcon,
  DocumentTextIcon,
  HomeHashtagIcon,
  MoneySendIcon,
  PeopleIcon,
  SettingIcon,
  SmsIcon,
  ArrowIcon
} from '../../assets/icons';

import Logo from '../../assets/Logo';
import './sidebar.scss'

const MiniDrawer = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState('dashboard')

  const toggleDrawer = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLinkClick = (link: string) => {
    console.log('ikn', activeLink)
    setActiveLink(link);
  };

  const menuItems = [
    {
      title: 'Dashboard',
      link: 'dashboard',
      icon: <HomeHashtagIcon />,
      isActive: true
    },
    {
      title: 'Report',
      link: 'report',
      icon: <ChartSquareIcon />,
      isActive: false
    },
    {
      title: 'Bank',
      link: 'bank',
      icon: <BankIcon />,
      isActive: false
    },
    {
      title: 'Email',
      link: 'email',
      icon: <SmsIcon />,
      isActive: false
    },
    {
      title: 'Group',
      link: 'group',
      icon: <PeopleIcon />,
      isActive: false
    },
    {
      title: 'List',
      link: 'list',
      icon: <DocumentTextIcon />,
      isActive: false
    },
    {
      title: 'Finance',
      link: 'finance',
      icon: <MoneySendIcon />,
      isActive: false
    },
    {
      title: 'Setting',
      link: 'setting',
      icon: <SettingIcon />,
      isActive: false
    },
  ]

  return (
    <div
      className={`main-sidebar fixed h-screen transition-all duration-300 ease-in-out pt-8 ${
        isExpanded ? 'w-52' : 'w-20'
      } bg-brand-700`}
    >
      <button
        className='bg-white rounded-full w-[32px] h-[32px] flex items-center justify-center text-white self-center collapse-button'
        onClick={toggleDrawer}
      >
        <div className={`transform transition-transform duration-300 ease-in-out ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
          <ArrowIcon />
        </div>
      </button>

      <div className="logo-box flex items-center justify-center">
        <Logo />
      </div>
      <div className="flex flex-col w-full text-white mt-[88px]">
        <ul className="list p-0">
          {menuItems.map((item) => 
            <li
              key={item.title}
              className='nav-menu flex text-white items-center py-3 pl-6 hover:bg-gray-700 transition-all duration-300 ease-in-out cursor-pointer'
              onClick={() => handleLinkClick(item.link)}
            >
              
                <div className="flex items-center transition-all duration-300 ease-in-out w-full">
                  <div className='w-max'>
                    {item.icon}
                  </div>
                  <span className={`link-text text-white font-medium overflow-hidden ml-6 ${isExpanded ? 'w-max' : 'w-0'} ${activeLink === item.link ? 'isActive' : ''}`}>{item.title}</span>
                </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MiniDrawer;
