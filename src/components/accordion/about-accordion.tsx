"use client";

import { Accordion } from "flowbite-react";
import AccordionPanel from "./accordion-panel";

export default function AboutAccordion() {
  return (
    <Accordion className='' collapseAll>
      <Accordion.Panel className=''>
        <Accordion.Title className='py-4 bg-emerald-500 hover:bg-emerald-400 text-black uppercase font-bold text-xl border-2 border-emerald-600'>
          Types of tours
        </Accordion.Title>
        <Accordion.Content>
          <div className='my-5'>
            <p className='mb-5 '>
              Below are the most common types of tours organized with Shalom
              Ethiopia. If the type of tour you desire does not fall under any
              of these categories, feel free to reach out and we will do our
              best to accommodate you.
            </p>
            <ul className='list-disc ml-5'>
              <li className='mb-3'>
                <h3 className='font-bold'>Private</h3>
                <ul className='list-disc ml-5'>
                  <li>higher tier</li>
                  <li>Fit for single travelers and couples</li>
                  <li>Flexible itinerary</li>
                </ul>
              </li>
              <li className='mb-3'>
                {" "}
                <h3 className='font-bold'>Family</h3>
                <ul className='list-disc ml-5'>
                  <li>1-2 vehicles</li>
                  <li>Fleixble itinerary</li>
                  <li>Related passengers (family / friends)</li>
                </ul>
              </li>
              <li className='mb-3'>
                {" "}
                <h3 className='font-bold'>Group</h3>
                <ul className='list-disc ml-5'>
                  <li>More than 2 vehicles</li>
                  <li>Fixed itinerary</li>
                  <li>Unrelated passengers</li>
                </ul>
              </li>
              <li className='mb-3'>
                {" "}
                <h3 className='font-bold'>
                  Documentary, research or journalism
                </h3>
                <ul className='list-disc ml-5'>
                  <li>
                    Destinations and sites are prepared (or cleared of tourists)
                    before you arrive
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className=''>
        <Accordion.Title className='py-4 bg-emerald-500 hover:bg-emerald-400 text-black uppercase font-bold text-xl border-2 border-emerald-600'>
          Arrival
        </Accordion.Title>
        <Accordion.Content>
          <div className='my-5'>
            <p className='mb-5 '>
              All International flights come into the{" "}
              <strong>Addis Ababa Bole International Airport (ADD)</strong> .
              One of our tour guides and their driver will come to pick you up
              upon arrival and wait for you in the parking area outside the
              terminal. From the airport you will be taken to the hotel to drop
              off your belongings, followed by some sightseeing around Addis
              Ababa Ethiopia’s capital city.
            </p>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className=''>
        <Accordion.Title className='py-4 bg-emerald-500 hover:bg-emerald-400 text-black uppercase font-bold text-xl border-2 border-emerald-600'>
          Getting around
        </Accordion.Title>
        <Accordion.Content>
          <div className='my-5'>
            <p className='mb-5 '>
              All of our tours include both a private driver and comfortable,
              spacious, pre-checked, 4x4 vehicle of the latest model (including
              air conditioning) or mini van. Some off-road trips will require
              specialized vehicles that will temporarily swap the main
              transportation for the duration of the off-road trip (such as the
              trip to the Erta Ale volcano).
            </p>
            <p className='mb-5 '>
              Domestic flights. Driving through the country is beautiful, but
              can be lengthy at times. Please note your preference during our
              communication. There is an option to choose domestic flights when
              available. Benefits of driving is to stop at the local villages,
              interact with the natives, see the daily lives of rural
              Ethiopians.
            </p>
            <p className='mb-5 '>
              Reservations for hotels and lodges are done ahead of time by
              Shalom Ethiopia each respective city. High quality accommodations
              are secured for our patrons, which are reasonably priced for the
              typical Western traveler (cost of lodging is factored ahead of
              time in the total cost of the trip). In special circumstances,
              such as the visit to the Erta Ale volcano, guests will sleep under
              the stars with camping equipment.
            </p>
            <p className='mb-5 '>
              While visiting the tribes in Omo Valley, guests have the option to
              either stay in normal lodging/hotel or sleep with the local
              tribespeople in their village.
            </p>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className=''>
        <Accordion.Title className='py-4 bg-emerald-500 hover:bg-emerald-400 text-black uppercase font-bold text-xl border-2 border-emerald-600'>
          Visa and Pre Arrival
        </Accordion.Title>
        <Accordion.Content>
          <div className='my-5'>
            <p className='mb-5 '>Visa Information (coming soon)</p>
            <ul className='list-disc ml-5'>
              <li className='mb-3'>
                <h3 className='font-bold'>Things to bring:</h3>
                <ul className='list-disc ml-5'>
                  <li> Face masks for Erta Ale (against smoke)</li>
                  <li>Good hiking shoes</li>
                  <li>Mosquito spray</li>
                  <li>Medication</li>
                  <li>
                    Electronics - Power supply – are the same like in Europe –
                    220 volts
                  </li>
                  <li>Flashlight</li>
                  <li>Bathing suit</li>
                </ul>
              </li>
            </ul>
            <ul className='list-disc ml-5'>
              <li className='mb-3'>
                <h3 className='font-bold'>Gifts:</h3>
                <ul className='list-disc ml-5'>
                  <li> Pens, pencils and colors for children</li>
                  <li>Children toys and teddy bears</li>
                  <li>Tribes – soap bars</li>
                  <li>Unused clothing, shoes</li>
                  <li>Colorful head scarves for women</li>
                </ul>
              </li>
            </ul>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
