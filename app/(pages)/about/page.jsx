import Image from "next/image";
export const metadata = {
  title: "About  Page",
  description: `About  Page`,
};

export default function About() {
  return (
    <main className="min-h-[calc(100vh-12rem)] flex flex-col p-6">
      <div className="max-md:w-full w-10/12 mx-auto">
        <h1 className="sm:text-2xl lg:text-4xl text-gray-600 font-semibold">
          About Me
        </h1>
        <p className="max-sm:text-sm ">
          Preparing level 4 schedule including design, procurement and logistics
          procedures and construction. Obtaining critical path, resource plan
          and cash-flow. Updateting the schedules in weekly basis, calculating
          financial completion and preparing client progress payments. Obtaining
          project score as SPI and CPI. Preparing weekly and monthly progress
          reports for management, clients and banks. Analyzing man-hours,
          machinery, and productivity as content of the report. Preparing
          monthly cost reports for works done by direct personnel of company
          Creating interactive graphics using Power BI and integrating them into
          progress reports. Managing the tender and contract process for
          specific packages. preparing unit price and self-cost analysises.
          Processing Subcontractor Interim Payment Certificates. Entering datas
          into ERP system Creating Mobilization Plans, Construction Scenarios,
          Work Item Packages, and Organization Charts for new projects.
          Preparing work schedules and planning documents for projects in the
          tendering process.
        </p>
      </div>
      <div className="w-10/12 mx-auto lg:mt-6">
        <h1 className="sm:text-2xl lg:text-4xl text-gray-600 font-semibold">
          Skills and Courses
        </h1>
      </div>
      <section className="w-full flex flex-row max-lg:flex-col justify-center items-center mt-6 gap-10 text-white">
        <div className="w-3/12 max-sm:w-60 max-lg:w-96 max-lg:h-56 lg:h-60 xl:h-52  bg-gradient-to-r from-orange-400 to-red-700 rounded-2xl p-3">
          <h1 className="sm:text-base lg:text-xl font-semibold text-center">
            Language Skills
          </h1>
          <div className="h-5/6 flex flex-col items-center justify-center">
            <p className="max-sm:text-xs max-lg:text-sm font-medium">
              Turkish (Fluent) <br />
              English (Advanced) <br />
              Macedonian (Beginner)
            </p>
          </div>
        </div>
        <div className="w-3/12 max-sm:w-60 max-lg:w-96 max-lg:h-56 lg:h-60 xl:h-52 bg-gradient-to-r from-orange-400 to-red-700 rounded-2xl p-3">
          <h1 className="sm:text-base lg:text-xl font-semibold text-center">
            Computer Skills
          </h1>
          <div className="flex flex-row gap-8 justify-center">
            <div>
              <p className="max-sm:text-xs max-lg:text-sm font-medium">
                Primavera P6 EPPM <br />
                MS Office Features <br />
                Oracle Aconex <br />
                MS Project <br />
              </p>
            </div>
            <div>
              <p className="max-sm:text-xs max-lg:text-sm font-medium">
                MS Power BI <br />
                Oracle Unifier <br />
                AutoCAD <br />
                Mfiles
              </p>
            </div>
          </div>
        </div>
        <div className="w-3/12 max-sm:w-60 max-lg:w-96 max-lg:h-56 lg:h-60 xl:h-52 bg-gradient-to-r from-orange-400 to-red-700 rounded-2xl p-3">
          <h1 className="max-sm:text-base max-lg:text-xl font-semibold text-center">
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
        </div>
      </section>
    </main>
  );
}
