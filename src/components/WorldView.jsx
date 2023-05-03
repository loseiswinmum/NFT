import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import world1 from "../assets/world1.png";
import world2 from "../assets/world2.png";


const WorldView = () => {
  const [currentContent, setCurrentContent] = useState(1);

  const handlePrev = () => {
    setCurrentContent(currentContent - 1);
  };

  const handleNext = () => {
    setCurrentContent(currentContent + 1);
  };

  return (
    <div className="w-full mx-auto border border-gray-300 rounded-lg overflow-hidden sci-fi-border">
      <div className="flex items-center bg-gray-100 p-4 worldView-border">
        <FiChevronLeft
          className={`${
            currentContent === 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-400 cursor-pointer"
          } mr-4`}
          onClick={currentContent === 1 ? null : handlePrev}
        />
        <h2 className="text-gradient text-3xl font-bold">WorldView</h2>
        <FiChevronRight
          className={`${
            currentContent === 2 ? "text-gray-300 cursor-not-allowed" : "text-gray-400 cursor-pointer"
          } ml-4`}
          onClick={currentContent === 2 ? null : handleNext}
        />
      </div>
      {currentContent === 1 && (
        <div className="p-4">
          <p className="text-white-gradient fs24">
            Cybercity is a city filled with high-tech and violence, where everything is controlled by computer systems and artificial intelligence. In this city, people can escape the troubles of the real world through virtual reality technology or gain unprecedented power and skills through neural interfaces and machine fusion.
          </p>
          <p className="text-white-gradient fs24">
            However, this city is also full of danger and instability. Hackers and criminal organizations are active here, attempting to breach high-tech security systems, steal confidential data, or launch cyber attacks. Governments and corporations, in order to protect their own interests, constantly develop new security technologies and surveillance systems, further exacerbating social polarization and conflict.
          </p>
          <p className="text-white-gradient fs24">
            In such a city, relationships between people become more complex and distant. Many people communicate and interact through virtual identities and virtual social platforms rather than face-to-face communication. This virtualized society makes people feel more lonely and helpless, and also makes them more susceptible to false information and prejudice.
          </p>
          <p className="text-white-gradient fs24">
            Despite this, there are still some people looking for their place and meaning in this city. They may be hackers, rebels, scientists, and engineers, all constantly exploring new possibilities and solutions. This city may be full of danger and uncertainty, but it is also full of opportunities and hope. Only those who dare to take risks and challenge the status quo in this city can truly gain power and freedom.
          </p>
          <img
            className="w-full h-auto mt-4"
            src={world1}
            alt="world"
          />
        </div>
      )}
      {currentContent === 2 && (
        <div className="p-4">
          <p className="text-white-gradient fs24">
            As I stepped onto the city streets, I felt a familiar pang. This was my territory, a city controlled by digital technology and innovation, a place full of high-tech and danger. It was a frenzied world, filled with passion and crime, but I loved it. I was a hacker, skilled at stealing information and data from high-tech systems, and selling it to the highest bidder.
          </p>
          <p className="text-white-gradient fs24"> 
            Today, I received a very tricky mission. My client was a mysterious organization, and they required me to steal some important data from a building protected by high-tech security systems. This was a very dangerous mission, but it was also what I was best at. I did some research, found the best path into the building, and started my plan at night.
          </p>
          <p className="text-white-gradient fs24">
            I crossed the brightly lit streets of the city, getting closer and closer to my target. I entered a dark alley and started to shuttle between the buildings. I heard some noises, maybe police or other hackers. I hastened my pace and crouched down at the corner of the corridor, waiting for the sounds to fade away. When I was sure no one was tracking me, I continued towards my goal.
          </p>
          <p className="text-white-gradient fs24">
            I arrived at the target building and began using my skills to enter the system. I passed through layer after layer of security until I finally found the data I needed to steal. But just as I was about to leave, I felt that something was wrong. I turned around and saw a shadow approaching me. Who was this person? Why were they here? I needed to get out of here quickly, or I would be caught.
          </p>
      <img
        className="w-full h-auto mt-4"
        src={world2}
        alt="world"
      />
    </div>
  )}
  <hr className="border-t border-gray-300" />
</div>
  );
};

export default WorldView;