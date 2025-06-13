// src/components/Navbar.jsx
import Navbar from "../../Components/Navbar/Navbar";

const Project3 = () => {
  return (
    <div className="min-h-screen text-white" style={{ background: '#161513' }}>
      <Navbar />

      <div className="mx-[50px] my-[70px] md:mx-[340px] md:my-[80px]">
        <span class="relative flex size-3">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Platform switching for Library integration system
        </h1>
        

        <p className="text-gray-400 leading-relaxed mb-6">
         Full redesign and platform migration of a legacy library system used by librarians, which had become difficult to maintain or update due to outdated architecture. Oversaw the transition to a modern, maintainable platform and restructured the reservation logic to reduce user wait times and improve operational efficiency.
          <ul className="list-disc list-inside mb-6 pt">
            <li className="mb-2">
              Duration: 6 months
            </li>
            <li className="mb-2">
              Team: 1 UX Designer (myself), 2 Developers, 1 Project Manager, 1 UI Designer
            </li>
          </ul>
        
        </p>

      <img 
        src="..\src\assets\lib_01.png"
        className="w-full max-w-[1600px] h-auto"
      />
      <div className="mt-12">
        <h2 className="text-4xl md:text-4xl font-semibold mt-8 mb-4 text-white">My role</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Acted as the Project Owner for a highly complex system with approximately seven main modules. I was responsible for the entire UX process, including user research, planning, testing, live release, and post-launch maintenance. Throughout the project, I collaborated directly with clients and cross-functional teams to ensure successful delivery.
          </p>
      </div>

    
      <div className="mt-12">
        <h2 className="text-4xl md:text-4xl font-semibold mt-8 mb-4 text-white">
           Requirements Gathering & System Analysis
        </h2>
        <p className="text-gray-400 leading-relaxed mb-6">
          Conducted regular meetings and close communication with librarians to align on system pain points and feature requirements.
          <img 
            src="..\src\assets\lib_02.png"
            className="w-full max-w-[600px] h-auto py-6"
          />
          <ul className="list-disc list-inside mb-6">
            <li className="mb-2">
              Inefficiency of the current reservation logic—causing user wait times of up to 4 weeks.
            </li>
            <li className="mb-2">
              The outdated library system (over 10 years without significant updates) made usability improvements difficult
            </li>
            <li className="mb-2">
              Librarians were performing over 300 repetitive lending/return operations daily, highlighting the need for process automation and simplification.
            </li>
          </ul>
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-4xl md:text-4xl font-semibold mt-8 mb-4 text-white">
           How to solve the problem
        </h2>
        <h3 className="text-2xl md:text-2xl font-semibold mt-8 mb-4 text-white">Key Considerations</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            <ul className="list-disc list-inside mb-6">
              <li className="mb-2">
                Maintained existing database schema to avoid costly data migration; grouped same-title books through logical ID mapping.
              </li>
              <li className="mb-2">
                Balanced DevExpress performance overhead with system responsiveness for high-frequency librarian tasks.
              </li>
            </ul>
          </p>
         
        <h3 className="text-2xl md:text-2xl font-semibold mt-8 mb-4 text-white">1. Reduced user reservation wait time by approx. 2-4 weeks</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            <ul className="list-disc list-inside mb-6">
              <li className="mb-2">
                Before:
                Each physical copy of the same title required a separate reservation. Users had to wait specifically for the exact reserved copy to be returned, often causing long delays—even when other copies were returned earlier.
              </li> 
              <li className="mb-2">
                After:
                Reservations were redesigned at the title level, allowing the first available copy to be loaned to the next person in the queue. This significantly reduced average wait times and improved overall reservation efficiency.
              </li> 
            </ul>
          </p>
           <img 
            src="..\src\assets\lib_03.png"
            className="w-full max-w-[1600px] h-auto"
          />

        <h3 className="text-2xl md:text-2xl font-semibold mt-8 mb-4 text-white">2. 40% faster checkout/return workflow for librarians</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
          Implemented an automated lending/return logic by using a Y/N loan status flag, enabling instant processing upon barcode scan. Personally conducted multi-book lending/return tests using a barcode scanner to verify functionality and effectiveness.


          </p>
          <img 
            src="..\src\assets\lib_04.png"
            className="w-full max-w-[1600px] h-auto"
          />
        <h3 className="text-2xl md:text-2xl font-semibold mt-8 mb-4 text-white">3. Full Platform Development with DevExpress WinForms & Customization Support</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
          Collaborated with the development team to adopt DevExpress WinForms as the primary framework for system redevelopment. Carefully reviewed and selected UI components aligned with UX goals, and provided developers with detailed specifications. Supported customization to enhance usability and streamline the development process.
          </p>
          <img 
            src="..\src\assets\lib_05.png"
            className="w-full max-w-[1600px] h-auto"
          />

          <h3 className="text-2xl md:text-2xl font-semibold mt-8 mb-4 text-white">4. Series-Based Book Grouping</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
          Additionally, books belonging to a series were grouped under a unified series code, allowing end users to conveniently browse related titles and access comprehensive series information.
          </p>
          <img 
            src="..\src\assets\lib_06.png"
            className="w-full max-w-[1600px] h-auto"
          />
      </div>


      <div className="mt-12">
        <h2 className="text-4xl md:text-4xl font-semibold mt-8 mb-4 text-white">Takeaway</h2>
        <p className="text-gray-400 leading-relaxed mb-6">
           Gained deep insight into client workflows and pain points; collaborated closely with developers to simplify complex logic, using diagrams to align the team and document shared understanding.
        </p>

      <div className="mt-20 text-center text-sm text-gray-400">
        <p className="mb-2">😊 Thanks for scrolling this far!</p>
        <p>
          If you’re interested in working together, feel free to{' '}
          <a
            href="mailto:tanisha0523@gmail.com"
            className="text-blue-500 hover:underline"
          >
            contact me via tanisha0523@gmail.com
          </a>
          .
        </p>
      </div>

      </div>
          <p className="text-gray-600 text-sm mt-12">
          ⓒ 2025. Created by Boyeon Kim. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Project3;