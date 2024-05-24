import React, { createContext } from "react";

const GlobalData = {
  //
  // -------------------------------------About Page Data-----------------------------------------
  about: {
    url: "/",
    label: "About",

    // Header data common to all pages
    header: {
      logo: require("../imgs/landing/education.png"),
      menu: require("../imgs/landing/menu.png"),
      name: "Nikhil Vijay Yadav",
      degreeShort: "MSCS",
      universityShort: "ASU",
      university: "Arizona State University",
    },

    // footer data common to all pages
    footer: {
      socialMediaURLs: [
        {
          url: "https://www.linkedin.com/in/nikhilvy/",
          icon: require("../imgs/landing/linkedin.png"),
        },
        {
          url: "https://github.com/Nikhil2698",
          icon: require("../imgs/landing/github.png"),
        }
      ],
      call: "+1 (623) 261-8279",
      email: "nyadav30@asu.edu",
    },

    // This is the left part of the landing page with profile picture (Looks like an ID Card)
    cardsection: {
      socialMediaURLs: [
        {
          url: "https://www.linkedin.com/in/nikhilvy/",
          icon: require("../imgs/landing/linkedin-blue.png"),
        },
        {
          url: "https://leetcode.com/u/JackNick/",
          icon: require("../imgs/landing/leetcode.png"),
        },
        {
          url: "https://github.com/Nikhil2698",
          icon: require("../imgs/landing/github.png"),
        },
      ],
      pfp: require("../imgs/landing/pfp.png"),
      firstName: "Nikhil Vijay",
      lastName: "Yadav",
      degreeShort: "MSCS @ ASU",
      date: "Graduating December 2025",
    },

    // This is the right part of the landing page with a general welcome statement and summary
    bio: {
      bigGreet: "Hello",
      intro: "I am Nikhil and I code.",
      description: (
        <>
          <p>
            I am currently pursuing a Master's degree in{" "}
            <b className="font-semibold">
              {" "}
              Computer Science at Arizona State University.
            </b>{" "}
            Previously, I worked as a{" "}
            <b className="font-semibold">Software Engineer at Barclays,</b> where I
            played a crucial role in developing{" "}
            <b className="font-semibold">
            REST APIs and React-based
            </b>{" "}
            user interface components to enhance customer experience. At{" "}
            <b className="font-semibold">Tata Consultancy Services</b>,{" "}I led the migration of over 400 legacy SQR scripts to{" "}<b className="font-semibold">Python</b>,{" "}reducing execution times and improving the efficiency of report generation. I also revamped existing shell scripts on a Linux platform to align with Python, boosting the efficiency and reliability of applications, and executed comprehensive Python code reviews and rigorous testing to reduce post-deployment failures. 
            
            <br />
            <br />
            <b className="font-semibold">
              I am actively seeking Spring 2025 Co-op and Summer 2025 Internship opportunities
            </b>{" "}
            to utilize my exceptional academic achievements and hands-on
            experience, aiming to create significant contributions within the
            technology industry.
            <br />
            <br /> If you are looking for someone to{" "}
            <b className="font-semibold">
              build scalable and high-quality software products,
            </b>{" "}
            feel free to reach out to me on phone/email mentioned below.
          </p>
          <br />
          <b className="font-semibold">Have a great day!!</b>
        </>
      ),
    },
  },

  // -------------------------------------Resume Page Data-----------------------------------------
  resume: {
    url: "/resume",
    label: "Resume",
    summary: (
      <>
        Throughout my career, I have contributed to positive business results
        through effective organization, prioritization and follow-through of key
        organizational projects.
        <br />
        As a Software developer I have always exercised a calculated and
        methodical approach to problem-solving. While I am independently
        motivated, I appreciate collective efforts and collaborate productively
        within group settings. To illustrate the scope of my career history and
        professional competencies, please take a moment to review my enclosed
        resume.
      </>
    ),
    education: [
      {
        year: "2024-2025",
        university: "Arizona State University",
        gpa: "4.0/4.0",
        info: " I am currently enrolled at the Master of Science program in Computer Science at the Arizona State University. My coursework includes Cloud Computing, Knowledge Represenation and Reasoning, Machine Learning and Software Security.",
      },
      {
        year: "2016-2020",
        university: "Savitribai Phule Pune University",
        gpa: "9.27/10",
        info: `I acquired my Bachelor of Engineering in Computer Engineering from Savitribai Phule Pune University. The
    relevant coursework included Data Structures, Design and Analysis
    of Algorithms, OOP and Web Technologies etc.`,
      },
    ],
    work: [
      {
        year: "March 2024 - Current",
        organisation: "Arizona State University",
        role: "Research Aide",
        detail: [
          "Engineering the extraction of business data from Crunchbase using RESTful APIs and Python scripts, employing Pandas and NumPy for data cleaning and validation, ensuring high-quality datasets for analysis across diverse industries.",
          "Analyzing venture capital investments and trends, deriving insights to illustrate the startup financial landscape, leveraging Power BI to create visualizations that communicate strategic investment opportunities and industry benchmarks.",
        ],
      },
      {
        year: "May 2022 - December 2023",
        organisation: "Barclays",
        role: "Software Engineer",
        detail: [
          "Spearheaded the transformation from RAML to OpenAPI Specification (OAS), leading efforts to standardize API design and mitigate compatibility issues.",
          "Engineered over 10 REST APIs, leveraging Java Spring Boot to enhance integration across platforms and channels, achieving a 500ms SLA, improving Barclays application performance significantly, and impacting 2 million active users.",
          "Played a pivotal role in the development of React-based user interface components, used by internal teams and in online retail banking applications, leading to a 50% enhancement in system response time.",
          "Executed a multithreading approach in processing customer address data, enhancing efficiency in systems like bank accounts and credit cards, leading to a 70% reduction in response times and 80% less manual synchronization effort.",
          "Implemented Jenkins based CI/CD pipelines, achieving a 28% reduction in release cycles.",
          "Engaged stakeholders to prioritize and align requirements with organizational goals, utilizing Jira for project management.",
        ],
      },
      {
        year: "September 2020 – May 2022",
        organisation: "Tata Consultancy Services",
        role: "Software Engineer",
        detail: [
          "Led the migration of 400+ legacy SQR scripts to Python to address performance issues at Westpac Bank, reducing batch and CRON job execution times by 60% and enabling efficient generation of PDF, CSV, text, and XML reports.",
          "Revamped and restructured existing shell scripts on a Linux (RHEL) platform to align with new Python scripts, boosting the efficiency and reliability of the Margin Lending Report Generation Application.",
          "Executed comprehensive Python code reviews and rigorous testing (SIT, UAT) using Python libraries Unittest and Pytest to validate client requirements and corner test cases, achieving a 50% reduction in post-deployment failures.",
        ],
      },
    ],
  },

  // -------------------------------------Skills Page Data-----------------------------------------
  skills: {
    url: "/skills",
    label: "Skills",
    tech: [
      {
        type: "Programming Languages",
        info: "Python, Java, JavaScript, C, C++, HTML, CSS, JSON, GraphQL, XML, Shell Scripting",
      },
      {
        type: "Technologies and Frameworks",
        info: "Spring Boot, Spring Data JPA, Hibernate, Scikit-learn, REST APIs, Flask, React.js, Node.js, Junit, Mockito,Tensorflow, Keras, pandas",
      },
      {
        type: "Tools",
        info: "Postman, AppDynamics, SonarQube, Tableau, Power BI, Jira, Confluence, Kibana, Jenkins, OpenShift, AWS",
      },
      {
        type: "Database",
        info: "MySQL, PostgreSQL, MongoDB, Sybase, Oracle",
      },
      {
        type: "Version Control",
        info: "Git & GitHub, BitBucket, SourceTree",
      },
      {
        type: "Proficiencies",
        info: "SDLC, STLC, SCRUM, Agile, TDD, Backend, Frontend, Unit testing, Test Coverage, Micro-services, CI/CD",
      },
    ],
    soft: [
      {
        img: require("../imgs/skills/soft/teamWork.png"),
        type: "Team Work",
        info: "At Tata Consultancy Services, I spearheaded a team in migrating over 400 legacy SQR scripts to Python for Westpac Bank, improving performance and reducing execution times by 60%. We collaboratively revamped shell scripts on Linux.",
      },
      {
        img: require("../imgs/skills/soft/adaptability.jpeg"),
        type: "Adaptibility",
        info: "At Barclays, I adapted to new technology by transitioning from Python to Java full-stack development. I led the RAML to OpenAPI transformation, engineered REST APIs with Java Spring Boot, and developed React-based UI components.",
      },
      {
        img: require("../imgs/skills/soft/Communication.webp"),
        type: "Communication",
        info: "I communicated with clients in Australia and China at Tata Consultancy Services, leading to successful projects. At Barclays, I collaborated with UK clients, transforming API standards and enhancing system performance through Java full-stack development.",
      },
      {
        img: require("../imgs/skills/soft/problemSolving.webp"),
        type: "Problem Solving",
        info: "I collaborated with coursemates on a Pneumonia Detection System, solving their problems and queries regarding ML modeling and system architecture. We developed a ResNet model and by using data augmentation techniques we achieved a 20% improvement in detection accuracy.",
      },
      {
        img: require("../imgs/skills/soft/creativity.jpg"),
        type: "Creativity",
        info: "Developed NewsIntel LLM, a creative semantic search application that transforms news URLs into vector representations using word embeddings. Leveraging OpenAI’s API, it provides precise responses to equity research analysts, significantly easing their workload.",
      },
      {
        img: require("../imgs/skills/soft/time.png"),
        type: "Time Management",
        info: "As a Software Engineer at Tata Consultancy Services, I managed to deliver a project on time despite the team being downsized by three members. Through careful planning and prioritization, we successfully delivered the project on time.",
      },
    ],
  },

  // -------------------------------------Projects Page Data-----------------------------------------
  projects: {
    url: "/projects",
    label: "Projects",
    projData: [
      {
        img: require("../imgs/projects/NewsIntel.png"),
        title: "NewsIntel LLM",
        type: ["OpenAI", "Full Stack", "Frontend", "Backend"],
        link: "https://github.com/Nikhil2698/NewsIntel-LLM",
        year: "April 2024",
        points: [
          ` Engineered a semantic search application, facilitating the transformation of news URLs into vector representations via word
          embeddings, stored in a FAISS Index. Utilized OpenAI’s API to deliver precise responses to equity research analysts.
          `,
        ],
        tech: [
          "OpenAI",
          "LLM",
          "Flask",
          "React.js",
          "RESTful APIs",
          "LangChain",
        ],
      },
      {
        img: require("../imgs/projects/SS.png"),
        title: "ScriptScene",
        link: "https://github.com/Nikhil2698/AI_MERN_Image_Generation",
        year: "May 2024",
        type: ["OpenAI", "Full Stack", "Frontend", "Backend"],
        points: [
          `Developed a full-stack MERN clone of Midjourney and DALL-E, utilizing OpenAI’s API for robust AI-driven image
          generation, added community sharing features for users to view prompts, engage, and download favored creations.`,
        ],
        tech: ["OpenAI", "React.js", "Node.js", "Express.js", "MongoDB"],
      },
      {
        img: require("../imgs/projects/pneumonia.png"),
        title: "Pneumonia Detection System",
        link: "https://github.com/Nikhil2698/Pneumonia-Classification-ResNet",
        year: "January 2024",
        type: ["Machine Learning"],
        points: [
          `Developed a ResNet model with TensorFlow and Keras for pneumonia detection, leveraging data augmentation strategies
          (including resizing, shear, zoom, flip, and brightness adjustment), resulting in a 20% improvement in detection accuracy.`,
        ],
        tech: [ "Machine Learning", "Neural Networks", "TensorFlow", "Keras", "Python",
        ],
      },
      
    ],
  }, 

  // -------------------------------------Certification Page Data-----------------------------------------
  certifications: {
    url: "/certifications",
    label: "Certifications",
    certs: [
      {
        title: "TCS On the Spot Award",
        date: "May 2021",
        image: require("../imgs/certs/TCS.png"),
      },
      {
        title:
          "TCS Applause Award-Beyond Performance",
        date: "January 2021",
        image: require("../imgs/certs/TCS.png"),
      },
      {
        title: "Academic Excellence Award",
        date: "August 2017",
        image: require("../imgs/certs/IIIT.png"),
      },
      {
        title: "MTA: Database Fundamentals",
        date: "May 2019",
        image: require("../imgs/certs/MTA.png"),
      },
      {
        title: "Complete Python Bootcamp",
        date: "June 2019",
        image: require("../imgs/certs/udemy.png"),
      },
    ],
  },
};

const GlobalDataContext = createContext();

const GlobalDataProvider = ({ children }) => {
  return (
    <GlobalDataContext.Provider value={GlobalData}>
      {children}
    </GlobalDataContext.Provider>
  );
};

export { GlobalDataContext, GlobalDataProvider };
