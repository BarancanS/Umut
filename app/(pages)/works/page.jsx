import Image from "next/image";
export const metadata = {
  title: "About  Page",
  description: `About  Page`,
};

export default function About() {
  return (
    <main className="min-h-[calc(100vh-12rem)] flex items-center justify-center gap-10 px-5 max-lg:flex-col">
      <div className="w-6/12 pb-6 mx-auto max-lg:w-11/12  max-sm:mt-12">
        <h1 className="sm:mt-6 max-lg:w-11/12 sm:text-2xl lg:text-4xl text-neutral-700">
          Work Experience
        </h1>
        <br />
        <h1 className="sm:text-xl lg:text-2xl font-semibold text-neutral-600">
          Limak Skopje DOO - Technical Office Engineer
        </h1>
        <h3 className="sm:text-base lg:text-xl font-semibold text-neutral-500">
          Diamond of Skopje Mix Use Complex <br /> Skopje/North Macedonia
          (10.2020 - )
        </h3>
        <p className="flex flex-row">
          325,000 m2 interior area and 11,200 m2 open areas, 200,000,000 € total
          budget. Structural works started at 2020 and all complex is planned to
          finish in September 2024.
          <br />
          <br />
        </p>
        <h1 className="sm:text-xl lg:text-2xl font-semibold text-neutral-600">
          Taca Construction – Planning and Cost Control Engineer
        </h1>
        <h3 className="sm:text-base lg:text-xl font-semibold text-neutral-500">
          Roketsan ITS Buildings and Data Center Projects <br /> Ankara (11.2018
          - 07/2019)
        </h3>
        <p className="">
          280.000 m² construction area, 41,000,000 € total budget. specifically
          designed for the weapon, missile, and defense industries.
          <br />
          <br />
        </p>
        <h1 className="sm:text-xl lg:text-2xl font-semibold text-neutral-600">
          Taca Construction – Planning Specialist{" "}
        </h1>
        <h3 className="sm:text-base lg:text-xl  font-semibold">
          Main Projects:
        </h3>
        <ul className="">
          <li>Roketsan ITS Buildings and Data Center ProjectsAnkara</li>
          <li>Park Forbes Doubletree By Hilton Project Iskenderun/Hatay</li>
          <li>Port Bosphorus Hotel Project – Istanbul</li>
          <li>Atatürk Cultural Center Project - İstanbul</li>
          <li>Fortina Mix Use Complex – Malta</li>
          <li>SVP Long Term Care Complex - Malta</li>
          <li>Le Meridien Hotel Project - Doha/Qatar</li>
          <li>Chedi Khor Fakkan Hotel Project - Sharjah/UAE</li>
          <li>King Abdullah Foundation Hotel - Riyadh/KSA</li>
          <br />
          <br />
        </ul>
        <h1 className="sm:text-xl lg:text-2xl font-semibold text-neutral-600">
          Taca Construction – Planning Engineer
        </h1>
        <h3 className="sm:text-base lg:text-xl font-semibold text-neutral-500">
          Expo 2016 Tower and Congress Center Proejcts <br /> Antalya (08.2015 -
          05.2016)
        </h3>
        <p className="">
          Expo 2016 tower :20,000 m2 interior and a 30,500 m2 open area.
          Completed in 9 months using innovative systems like heavy lifting and
          slip formwork system. 45,000,000 € total budget. Expo 2016 congress
          center :35,000 m2 interior and 5,000 m2 open areas. Completed in 12
          months. 60,000,000 € total budget
          <br />
          <br />
        </p>
      </div>
      <div className="w-3/12 mx-auto max-lg:w-5/12 max-sm:hidden">
        <Image
          src="/Umut.png"
          width={500}
          height={500}
          alt="about-image"
          className="w-full rounded-3xl  mx-auto  max-sm:w-7/12 "
        />
      </div>
    </main>
  );
}

// <div className="">
//   <h2>Skillset:</h2>
//   <ul>
//     <li>- ES6 | TypeScript</li>
//     <li>- NodeJS | NestJS</li>
//     <li>- React | NestJS</li>
//     <li>
//       - HTML5 | CSS3 | SCSS | Bootstrap | TailwindCSS | Styled
//       Components | Material-UI
//     </li>
//     <li>- MongoDB</li>
//   </ul>
//   <p>
//     I’ve used these tools/technologies while working on my projects:
//     Git, Github, ESLint, Prettier, Yarn, Npm, and much more.
//   </p>
// </div>;

// w-full mx-auto  max-lg:w-11/12 max-md:text-xs lg:text-xl mt-3
