import React from "react";
import Image from "next/image";
const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden m-4">
      <Image
        src={imageUrl}
        width={500}
        height={500}
        alt={title}
        className="w-full h-40 object-contain"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ThreeCards = () => {
  return (
    <main className="min-h-[calc(100vh-12rem)] flex flex-col p-6">
      <div className="max-md:w-full w-10/12 mx-auto">
        <div className="flex flex-row gap-5 max-lg:flex-col items-start justify-start">
          <div class="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <div class="text-center">
              <h1 class="text-2xl text-left font-semibold mb-4">Umut Can</h1>
              <p class="text-gray-600 text-left">
                Project Scheduler and Analyst
              </p>
            </div>
            <div class="text-gray-800 ">
              <h2 class="text-lg font-semibold mb-2">Key Responsibilities:</h2>
              <ul class="list-disc list-inside">
                <li>
                  Preparing level 4 schedules, including design, procurement,
                  and logistics procedures.
                </li>
                <li>Managing critical path, resource plans, and cash-flow.</li>
                <li>
                  Weekly schedule updates and financial completion calculations.
                </li>
                <li>Preparing client progress payments.</li>
                <li>Obtaining project score as SPI and CPI.</li>
                <li>
                  Preparing weekly and monthly progress reports for management,
                  clients, and banks.
                </li>
                <li>
                  Analyzing man-hours, machinery, and productivity as content of
                  the report.
                </li>
                <li>
                  Preparing monthly cost reports for works done by direct
                  personnel of the company.
                </li>
                <li>
                  Creating interactive graphics using Power BI and integrating
                  them into progress reports.
                </li>
                <li>
                  Managing the tender and contract process for specific
                  packages.
                </li>
                <li>Preparing unit price and self-cost analyses.</li>
                <li>Processing Subcontractor Interim Payment Certificates.</li>
                <li>Entering data into ERP system.</li>
                <li>
                  Creating Mobilization Plans, Construction Scenarios, Work Item
                  Packages, and Organization Charts for new projects.
                </li>
                <li>
                  Preparing work schedules and planning documents for projects
                  in the tendering process.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center mx-auto items-start h-screen bg-gray-100">
            <div className="grid max-md:grid-cols-1 md:grid-cols-1 gap-4">
              <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg">
                <Image
                  src="/Languages.png"
                  width={500}
                  height={500}
                  alt="Language Skills"
                  className="w-full h-40 object-contain"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Language Skills
                  </h2>
                  <p className="text-gray-600">
                    Turkish (Fluent), English (Advanced), Macedonian (Beginner)
                  </p>
                </div>
              </div>
              <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg">
                <Image
                  src="/ComputerSkills.png"
                  width={500}
                  height={500}
                  alt="Computer Skills"
                  className="w-full h-40 object-contain"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Computer Skills
                  </h2>
                  <p className="text-gray-600">
                    Primavera P6 EPPM, MS Office Features, Oracle Aconex, MS
                    <br />
                    Project, MS Power BI ,Oracle Unifier, AutoCAD, Mfiles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ThreeCards;

{
  /* <div className="max-w-xl bg-white p-10 rounded-lg shadow-lg">
  {" "}
  <h1 className="max-sm:text-base max-lg:text-xl font-semibold text-left">
    Seminars and Courses
  </h1>
  <h3 className="max-sm:text-sm max-lg:mt-3 lg:mt-0 max-lg:text-md font-semibold text-left ">
    Advanced Oracle Unifier
  </h3>
  <p className="max-sm:text-xs max-lg:text-sm font-medium text-left">
    Starting: 07.2018
    <br />
    Finishing: 07.2018 Duration: 36h
  </p>
  <h3 className="max-sm:text-sm mt-3 max-lg:text-md font-semibold text-left ">
    {" "}
    Advanced Primavera P6 EPPM
  </h3>
  <p className="max-sm:text-xs max-lg:text-sm font-medium text-left">
    Starting : 12.2016 <br />
    Finishing : 01.2017 Duration: 18h
  </p>
</div>; */
}
