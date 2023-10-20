"use client";
import { Accordion } from "flowbite-react";
import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

const AccordionPanel = ({ title, children }: Props) => {
  return (
    <Accordion.Panel className=''>
      <Accordion.Title className='py-4 bg-emerald-500 hover:bg-emerald-400 text-black uppercase'>
        {title}
      </Accordion.Title>
      <Accordion.Content>{children}</Accordion.Content>
    </Accordion.Panel>
  );
};

export default AccordionPanel;
