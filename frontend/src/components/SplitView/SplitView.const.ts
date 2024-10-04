// Below dates and status are taken from the api response / NASA website

import { RoverDetails } from "./SplitView.types";

const MARS_ROVERS: RoverDetails[] = [
  {
    id: 0,
    name: "curiosity",
    date: "2024-02-19",
    status: "active",
    launchDate: "2011-11-26",
    landingDate: "2012-08-06",
    imageMaxDate: "2024-02-19",
    referance: "https://science.nasa.gov/mission/msl-curiosity/",
    description: `
    Part of NASA's Mars Science Laboratory mission, Curiosity, was the largest and most capable rover ever sent to Mars when it launched in 2011.
    Curiosity set out to answer the question: Did Mars ever have the right environmental conditions to support small life forms called microbes? 
    Early in its mission, Curiosity's scientific tools found chemical and mineral evidence of past habitable environments on Mars.
     It continues to explore the rock record from a time when Mars could have been home to microbial life.
     `,
  },
  {
    // image are no longer available, all the image urls returned bu the api are routed to
    // page: https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/
    // eg: https://mars.nasa.gov/mer/gallery/all/1/p/5111/1P581919922EFFD2FCP2682L8M1-BR.JPG
    id: 1,
    name: "opportunity",
    date: "2018-06-06",
    status: "complete",
    launchDate: "2003-07-07",
    landingDate: "2004-01-25",
    imageMaxDate: "2018-06-11",
    referance: "https://science.nasa.gov/mission/mer-opportunity",
    description: `
    The Opportunity rover searched for ancient water on Mars, and found evidence that the Red Planet once had a period when it was wet enough,
    for long enough, that it could have sustained microbial life. The rover's original 90-day mission became an extraordinary 15 years,
    until the rover finally succumbed to a dust storm.
    `,
  },
  {
    // image are no longer available, all the image urls returned bu the api are routed to
    // page: https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/
    // eg: http://mars.nasa.gov/mer/gallery/all/2/p/2208/2P322473707ESFB27MP2600L8M1-BR.JPG
    id: 2,
    name: "spirit",
    date: "2010-03-21",
    status: "complete",
    launchDate: "2003-06-10",
    landingDate: "2004-01-04",
    imageMaxDate: "2010-03-21",
    referance: "https://science.nasa.gov/mission/mer-spirit",
    description: `
    The Spirit and Opportunity rovers together represented NASA's Mars Exploration Rover Mission (MER), part of the Mars Exploration Program.
    Launched about a month apart in 2003, the twin rovers’ main scientific objective was to search for a range of rocks and soil types and
    then look for clues for past water activity on Mars.
    `,
  },
];

const DETAILS_TO_RENDER = ["status", "launchDate", "landingDate"];

export { MARS_ROVERS, DETAILS_TO_RENDER };
