"use client";

import React from 'react';
import { GiWaves } from 'react-icons/gi';
import { MdLocationOn } from 'react-icons/md';
import CardNav, { CardNavItem } from './CardNav';

export default function Navbar() {
  const items: CardNavItem[] = [
    {
      label: "Services",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Beach Access", href: "#beach", ariaLabel: "Beach Access Services" },
        { label: "Water Sports", href: "#sports", ariaLabel: "Water Sports Activities" },
        { label: "Dining", href: "#dining", ariaLabel: "Dining Options" }
      ]
    },
    {
      label: "Events", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Upcoming", href: "#upcoming", ariaLabel: "Upcoming Events" },
        { label: "Festivals", href: "#festivals", ariaLabel: "Local Festivals" },
        { label: "Workshops", href: "#workshops", ariaLabel: "Community Workshops" }
      ]
    },
    {
      label: "Community",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "About Us", href: "#about", ariaLabel: "About Port Laken" },
        { label: "Contact", href: "#contact", ariaLabel: "Contact Us" },
        { label: "Join", href: "#join", ariaLabel: "Join Our Community" }
      ]
    }
  ];

  const logo = (
    <div className="flex items-center gap-3">
      <GiWaves className="text-[#C49475] text-2xl" />
      <span className="font-bold text-xl text-gray-900">Port Laken</span>
      <span className="hidden md:flex items-center gap-1 text-gray-600 ml-2 text-sm">
        <MdLocationOn className="text-base" />
        56°C
      </span>
    </div>
  );

  return (
    <CardNav
      logo={logo}
      logoAlt="Port Laken Logo"
      items={items}
      baseColor="#ffffff"
      menuColor="#C49475"
      buttonBgColor="#C49475"
      buttonTextColor="#ffffff"
      ease="power3.out"
    />
  );
}
