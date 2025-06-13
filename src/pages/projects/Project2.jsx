// src/components/Navbar.jsx
import Navbar from "../../Components/Navbar/Navbar";

const Project2 = () => {
  return (
    <div className="min-h-screen text-white" style={{ background: '#161513' }}>
      <Navbar />

      <div className="mx-[50px] my-[70px] md:mx-[340px] md:my-[80px]">
        <span class="relative flex size-3">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Product registration
        </h1>
        

        <p className="text-gray-400 leading-relaxed mb-6">
          This project was conducted to reduce the steps of product registration using an OCR solution, to increase registration numbers.
          <ul className="list-disc list-inside mb-6 pt-4">
            <li className="mb-2">
              Duration: 4 months
            </li>
            <li className="mb-2">
              Team: 1 UX Designer (myself), 3 Developers, 1 Project Manager, 1 UI Designer
            </li>
          </ul>
        </p>

      <img 
        src="..\src\assets\pr_01.png"
        className="w-full max-w-[1600px] h-auto"
      />
      <div className="mt-12">
        <h2 className="text-4xl md:text-4xl font-semibold mt-8 mb-4 text-white">My role</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            I was in charge of the project leader for the first time and create wireframes.

First, what I did was analyze Google analysis data to derive the problem of product registration. And My team discussed it several times to find a solution to this problem.

The key to the main solution is the OCR solution, so our team verified the recognition rate.

Furthermore, I fully grasped the development logic and articulate that through the proposal PPT design to stakeholders got imaginations.
          </p>
      </div>
      <div className="mt-12">
        <h2 className="text-4xl md:text-4xl font-semibold mt-8 mb-4 text-white">
           User Research - User behavior analysis
        </h2>
        <p className="text-gray-400 leading-relaxed mb-6">
        Fortunately, I can get raw data through Google Analytics, including user clicks, views, drop counts, and more.
I gathered product registration data from all worldwide websites, analyzed user behavior in each part of the process, and compared data from individual country websites. 
During this period, I had several meetings with the Project Manager and stakeholders to align my team's opinions and ensure everyone was on the same page.
        <img 
          src="..\src\assets\pr_02.png"
          className="w-full max-w-[1600px] h-auto py-6"
        />
         Identified Pain Points from User Research : 
         <ul className="list-disc list-inside mb-6">
            <li className="mb-2">
              Approximately 50% of users abandoned the product registration process during the information input stage, indicating a need to simplify or support the input flow.
            </li>
            <li className="mb-2">
              The conversion rate to the product registration page differed by over 30% depending on whether a login was required, suggesting that mandatory login acts as a barrier to entry.
            </li>
          </ul>
        
        </p>
      </div>


      <div className="mt-12">
 
       <div className="mt-12">
        <h2 className="text-4xl md:text-4xl font-semibold mt-8 mb-4 text-white">
          Validate the solution
        </h2>
        <p className="text-gray-400 leading-relaxed mb-6">
        It was the first time we were implementing OCR technology in the company. We needed to verify the accuracy and research pricing. My entire team helped with the testing.
-The accuracy was around 60% and heavily depended on the quality of the photo.
My team considered the result inevitable.
        <img 
            src="..\src\assets\pr_02_1.png"
            className="w-full max-w-[1600px] h-auto py-6"
          />

The solution's pricing was based on specific cases, and the possibility of charging was minimal.
        <img 
            src="..\src\assets\pr_02_2.png"
            className="w-full max-w-[1600px] h-auto py-6"
          />
        </p>
        <p className="text-gray-400 leading-relaxed mb-6">
          The SSO team reviewed the security of the login method, but unfortunately, permission to develop it was not granted.
        </p>
        </div>


       <div className="mt-12">
        <h2 className="text-4xl md:text-4xl font-semibold mt-8 mb-4 text-white">How to solve the problem</h2>
        
        <h3 className="text-2xl md:text-2xl font-semibold mt-8 mb-4 text-white">Auto reading solution</h3>
          <img 
            src="..\src\assets\pr_04.png"
            className="w-full max-w-[1600px] h-auto py-6"
          />
          <p className="text-gray-400 leading-relaxed mb-6">
            Add the option to upload images using user-friendly terms. (Not using OCR)
            When you upload a photo of the attached labels from products, the system should automatically fill in the serial number field.
          </p>
        
        <p className="text-gray-400 leading-relaxed mb-6">
          Implemented an optional photo input feature in the product registration flow, allowing users to extract and auto-fill serial numbers, enhancing usability and reducing manual input.
           
        
        </p>
      </div>

          
      </div>

      <div className="mt-12">
        <h2 className="text-4xl md:text-4xl font-semibold mt-8 mb-4 text-white">Achievement</h2>
        <p className="text-gray-400 leading-relaxed mb-6">
           Reduced the product registration process from 6 to 4 steps via photo-based auto input, boosting UX by 33.33%. Rolled out to 74 country websites.
        </p>
        <img 
            src="..\src\assets\pr_05.png"
            className="w-full max-w-[1600px] h-auto py-6"
          />
      </div>

      <div className="mt-12">
        <h2 className="text-4xl md:text-4xl font-semibold mt-8 mb-4 text-white">Takeaway</h2>
        <p className="text-gray-400 leading-relaxed mb-6">
           As the project leader, I took full responsibility for navigating the project from start to finish. During the proposal phase, I had the opportunity to analyze data, draw insights, and make presentations to both the Project Manager and LG.com Project Manager multiple times. This experience helped me develop to the next level. I also had to convince clients to adopt new methods, which taught me the importance of thinking outside the box.
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

export default Project2;