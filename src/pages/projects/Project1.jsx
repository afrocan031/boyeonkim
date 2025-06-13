// src/components/Navbar.jsx
import Navbar from "../../Components/Navbar/Navbar";

const Project1 = () => {
  return (
    <div className="min-h-screen text-white" style={{ background: '#161513' }}>
      <Navbar />

      <div className="mx-[50px] my-[70px] md:mx-[340px] md:my-[80px]">
        <span class="relative flex size-3">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Renewal 'Help IT' technical forum
        </h1>
        

        <p className="text-gray-400 leading-relaxed mb-6">
          Total revision of the HELP IT Intranet website for 5,000 employees. The site provides information on initial web infrastructure and hosts a forum for Q&A between employees and technicians.
          <ul className="list-disc list-inside mb-6 pt-4">
            <li className="mb-2">
              Duration: 6 months
            </li>
            <li className="mb-2">
              Team: 1 UX Designer (myself), 2 Developers, 1 Project Manager, 1 UI Designer
            </li>
          </ul>
        </p>

      <img 
        src="..\src\assets\helpit_01.png"
        className="w-full max-w-[1600px] h-auto"
      />
      <div className="mt-12">
        <h2 className="text-4xl md:text-4xl font-semibold mt-8 mb-4 text-white">My role</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Led projects end-to-end, building strong client relationships and coordinating teams to stay on track. Took ownership of all documentation and visual communication, and provided ongoing support for over a year post-launch.
          </p>
      </div>
      <div className="mt-12">
        <h2 className="text-4xl md:text-4xl font-semibold mt-8 mb-4 text-white">
           Key points that required compromise before starting the project
        </h2>
        <p className="text-gray-400 leading-relaxed mb-6">
        Initially, our company planned to use this format as a template for other sites. 
        However, our clients wanted different functions for each menu to improve user experience (UX). 
        <br />
        ➡️As a result, I had to negotiate all the requests and communicate extensively with the developers. 
        In the end, the developer and I decided to keep the common templates but make only specific elements visible.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-4xl md:text-4xl font-semibold mt-8 mb-4 text-white">Current state review & target group</h2>
        <p className="text-gray-400 leading-relaxed mb-6">
          Conducted a review of the current state by analyzing client requirements, researching trends, and benchmarking industry standards.
          <ul className="list-disc list-inside mb-6">
          <li className="mb-2">
            1.0 developed in PHP base that is hard to maintain.
          </li>
          <li className="mb-2">
            There is a lack of clarity regarding the authorities of users and administrators.
          </li>
          <li className="mb-2">
            The Q&A board is inconvenient as it is difficult to read, write, and receive notifications.
          </li>
          <li className="mb-2">
            Automation needed for self-check of security software installation status.
          </li>
          <li className="mb-2">
            The lack of consideration for user experience.
          </li>
        </ul>
        This is for all employees seeking information or who have questions about the working environment, as well as for technicians who can assist them.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-4xl md:text-4xl font-semibold mt-8 mb-4 text-white">
           How to solve the problem
        </h2>
        <h3 className="text-2xl md:text-2xl font-semibold mt-8 mb-4 text-white">Recreate Java base.</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
          Migrating to a Java-based system aligned with the team’s expertise has improved maintainability and reduced technical overhead.
          </p>
         
        <h3 className="text-2xl md:text-2xl font-semibold mt-8 mb-4 text-white">Creating Administration pages including authority managing, statistics pages.</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            1.0 developed in PHP base that is hard to maintain.

            Roles & Permissions: Two roles: Admin and Super Admin

            The Q&A board is inconvenient as it is difficult to read, write, and receive notifications.

            Category Management:When a user submits an inquiry in a category, an email notification is sent to the assigned department, auto-reply option is also available.

            Statistics: See most viewed posts and most inquired categories
            Admin Logs: All actions by Admins are logged for security auditing
          </p>
           <img 
            src="..\src\assets\helpit_02.png"
            className="w-full max-w-[1600px] h-auto"
          />

        <h3 className="text-2xl md:text-2xl font-semibold mt-8 mb-4 text-white">Adopting new solution and exposing status of each user on a page</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
          Integrated the Tanium solution into the website, enabling self-diagnosis of each PC based on its IP and MAC address.
          By implementing a self-check page, users can resolve issues independently without needing to contact administrators.
          </p>
          <img 
            src="..\src\assets\helpit_03.png"
            className="w-full max-w-[1600px] h-auto"
          />
          <img 
            src="..\src\assets\helpit_03_1.png"
            className="w-full max-w-[1600px] h-auto py-6"
          />
        <h3 className="text-2xl md:text-2xl font-semibold mt-8 mb-4 text-white">Improved detailed user experiences</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
          HELP IT 1.0 provided two methods for responding: replies or comments. However, in 2.0, we streamlined this to one method to avoid user confusion about where to find answers. Additionally, we retained the comment function and created answer templates that the technician (administrator) can use to load predefined responses.
          
          Given this user behavior, I've decided to enhance the search function using personal data. This will include saving and showing users' search keywords, and recommending keywords for each menu.
          </p>
          <img 
            src="..\src\assets\helpit_04.png"
            className="w-full max-w-[1600px] h-auto"
          />
      </div>

      <div className="mt-12">
        <h2 className="text-4xl md:text-4xl font-semibold mt-8 mb-4 text-white">Achievement</h2>
        <p className="text-gray-400 leading-relaxed mb-6">
           The number of writing questions has increased from 20-30 to 44 per month on average. Around 20% of employees visit the site daily, with a daily average of 1,120 page views. 
          
            Improved IT support efficiency by enabling over 5,000 devices to self-diagnose hardware and security issues 
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-4xl md:text-4xl font-semibold mt-8 mb-4 text-white">Takeaway</h2>
        <p className="text-gray-400 leading-relaxed mb-6">
           As the project leader, I felt a strong sense of responsibility and guided the project from start to finish. I learned the importance of effective client communication and regularly held meetings to build a friendly relationship. This helped me understand the client's genuine needs. 
           The company I worked with was responsible for creating the website and providing maintenance services. After the website was launched, I consistently maintained it. During the storyboard creation process, I carefully considered its scalability.
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

export default Project1;





