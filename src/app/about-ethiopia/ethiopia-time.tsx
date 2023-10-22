"use client";
import React, { useEffect, useState } from "react";
import InfoBlock from "./info-block";

const EthiopiaTime = () => {
  const timeInEthiopia = (): { hour: string; minute: string } => {
    const now = new Date();

    // Calculate the offset for GMT+3 in minutes (180 minutes)
    const offset = 180;

    const options = {
      timeZone: "Africa/Nairobi",
    };

    // Create a new date object with the desired offset
    const gmtPlus3Time = now
      .toLocaleTimeString("en-US", {
        timeZone: "Africa/Nairobi",
        timeStyle: "short",
      })
      .split(":");

    return { hour: gmtPlus3Time[0], minute: gmtPlus3Time[1] };
    // return formatted;
  };

  const time = timeInEthiopia();

  return (
    <InfoBlock label='Ethiopian Time'>
      {time.hour}
      <span className='animate-pulse'>:</span>
      {time.minute}
    </InfoBlock>
  );
};

export default EthiopiaTime;
