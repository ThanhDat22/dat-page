// src/data/courses.ts
export type School = "UMSL" | "SCC";

export type Link = { label: string; href: string };

export interface Course {
  school: School;            // <— NEW
  term: string;              // e.g. "Fall 2025"
  title: string;
  summary: string[];
  links: Link[];
  // topics?: string[];
  // labs?: string[];
}

// optional: helper to sort terms like "Fall 2025"
const seasonOrder = { Spring: 1, Summer: 2, Fall: 3, Winter: 4 } as const;
export const termKey = (t: string) => {
  const [season, yearStr] = t.split(/\s+/);
  const year = parseInt(yearStr, 10);
  return year * 10 + (seasonOrder as any)[season];
};

export const courses: Course[] = [
  {
    school: "UMSL",
    term: "Fall 2025",
    title: "Information Security (CmpSci 4782)",
    summary: [
      "Establishing information security in organizations; security domains",
      "Vulnerabilities, threats, attacks, and risk; threat modeling & risk policy",
      "Cybersecurity across protocol layers; network & web app security",
      "Cloud security basics; hands-on labs with common tools"
    ],
    links: [{ label: "Course Description", href: "https://bulletin.umsl.edu/coursesofinstruction/cmpsci/" }]
  },
  {
    school: "UMSL",
    term: "Summer 2025",
    title: "Python for Data Science (CmpSci 4200)",
    summary: [
      "Python programming for data analysis using procedural, OOP, and functional styles",
      "NumPy array computing & vectorization; pandas wrangling (cleaning, joins, reshape, groupby)",
      "Visualization with Matplotlib/Seaborn; exploratory data analysis & basic statistics (SciPy)",
      "Intro to scikit-learn workflows: preprocessing, train/test split, model training & evaluation",
      "Reproducible work with notebooks, virtual environments, and package management"
    ],
    links: [{ label: "Course Description", href: "https://bulletin.umsl.edu/coursesofinstruction/cmpsci/" }]
  },
  {
    school: "UMSL",
    term: "Spring 2025",
    title: "Web Development with Advanced JavaScript (CmpSci 4011)",
    summary: [
      "Advanced JavaScript concepts: closures, promises, async/await",
      "Client-side frameworks (e.g., React) and state management",
      "Building RESTful APIs with Node.js and Express",
      "Deployment and DevOps basics for web applications"
    ],
    links: [{ label: "Course Description", href: "https://bulletin.umsl.edu/coursesofinstruction/cmpsci/" }]
  },
  {
    school: "UMSL",
    term: "Spring 2025",
    title: "Software Security (CmpSci 3780)",
    summary: [
      "Secure-coding foundations; threat-aware debugging with GDB and sanitizers",
      "Memory safety: stack/heap, buffer overruns, integer overflow & type-conversion bugs",
      "Strings & format-string vulnerabilities; pointer safety and dynamic memory management",
      "Crypto pitfalls and RNG misuse; info leakage & side-channel awareness",
      "Concurrency issues (races, deadlocks) and parallel debugging",
      "Web touchpoints: XSS and common web security pitfalls; defensive patterns",
      "Hands-on labs: reproduce, exploit, and fix real vulns; write secure code & reports"
    ],
    links: [{ label: "Course Description", href: "https://bulletin.umsl.edu/coursesofinstruction/cmpsci/" }]
  },
  {
    school: "UMSL",
    term: "Spring 2025",
    title: "Database Management Systems (CmpSci 4610)",
    summary: [
      "DBMS fundamentals, users, and architectures; relational model essentials",
      "Schema quality: functional dependencies and normalization (3NF/BCNF)",
      "SQL practice: DDL/DML, joins/subqueries, constraints, views, triggers, schema changes",
      "Performance basics: physical storage, file structures, hashing, indexing (B+-trees)",
      "Current trends: NoSQL models and big-data storage systems"
    ],
    links: [{ label: "Course Description", href: "https://bulletin.umsl.edu/coursesofinstruction/cmpsci/" }]
  },
  {
  school: "UMSL",
  term: "Spring 2025",
  title: "Operating Systems (CmpSci 4760)",
  summary: [
    "Structure and functions of modern operating systems; process, memory, file, and device management",
    "Interprocess communication and synchronization; scheduling and resource management with deadlocks",
    "Virtual memory, paging/segmentation; file systems and I/O subsystems",
    "Hands-on systems programming in C under Linux (processes, threads, signals, sockets, tools)"
  ],
  links: [{ label: "Course Description", href: "https://bulletin.umsl.edu/coursesofinstruction/cmpsci/" }]
  },
  {
  school: "UMSL",
  term: "Fall 2024",
  title: "Program Translation & Compilers (CmpSci 4280)",
  summary: [
    "Bridging high-level programming to machine-level execution via program translation",
    "Incremental compiler project: scanner, parser, semantic analysis, IR, optimization, codegen",
    "Emphasis on modular design, testing, and integration in a modern OS/simulator environment",
    "Hands-on systems work in C/C++ with common build/debug tools"
  ],
  links: [{ label: "Course Description", href: "https://bulletin.umsl.edu/coursesofinstruction/cmpsci/" }]
  },
  {
  school: "UMSL",
  term: "Fall 2024",
  title: "Web Development with Java (CmpSci 4010)",
  summary: [
    "Advanced Java for full-stack web apps using Spring Boot and React",
    "Data access with JPA/ORM and CRUD; REST API design & implementation",
    "Security for REST services: JWT, token-based authN/authZ",
    "Testing, source control, and CI/CD deployment for Java applications",
    "Frontend UI with React; consuming backend APIs over HTTP"
  ],
  links: [{ label: "Course Description", href: "https://bulletin.umsl.edu/coursesofinstruction/cmpsci/" }]
  },
  {
  school: "UMSL",
  term: "Fall 2024",
  title: "Video Game Design and Development (CmpSci 3410)",
  summary: [
    "Project-based course building a complete game in teams",
    "Unity engine (C#): world/level design, UI/UX, character design, engine scripting",
    "2D/3D modeling & rendering, physics & AI, animation, audio, networking/multiplayer"
  ],
  links: [{ label: "Course Description", href: "https://bulletin.umsl.edu/coursesofinstruction/cmpsci/" }]
  },
  {
    school: "UMSL",
    term: "Fall 2023",
    title: "Design and Analysis of Algorithms (CmpSci 3130)",
    summary: [
      "Building strong problem-solving skills for real-world computing problems",
      "Examining the fundamental algorithm and design principles",
      "Developing fluency with the analysis of algorithms efficiency",
      "Understanding the basic data structures and their roles in algorithm design"
    ],
    links: [{ label: "Course Description", href: "https://bulletin.umsl.edu/coursesofinstruction/cmpsci/" }]
  },

  // Example SCC item (add your real SCC courses here)
  {
  "school": "SCC",
  "term": "Fall 2022",
  "title": "Introduction to Data Structures with C++ (cpt281)",
  "summary": [
    "Covers fundamental concepts, theories, and algorithms in data structures",
    "Teaches advanced C++ programming techniques",
    "Emphasizes Object-Oriented Design (OOD) and Object-Oriented Analysis (OOA)",
    "Serves as a core undergraduate course for Computer Science and IT-related majors"
  ],
  "links": [
    { "label": "Course Description", "href": "https://catalog.stchas.edu/" }
  ]
}, 

{
  "school": "SCC",
  "term": "Spring 2022",
  "title": "Programming in C++ (cpt182)",
  "summary": [
    "Introduces the fundamental skills of programming in C++ (cpt182)",
    "Covers object-oriented programming (OOP) and object-oriented analysis (OOA)",
    "Serves as a critical programming course for Computer Science, IT, or Business Technology majors",
    "Builds a solid programming foundation for advanced CS/IT courses"
  ],
  "links": [
    { "label": "Course Description", "href": "https://catalog.stchas.edu/" }
  ]
},

{
  "school": "SCC",
  "term": "Fall 2021",
  "title": "Java Programming (cpt189)",
  "summary": [
    "Covers fundamentals of the Java programming language",
    "Emphasizes Object-Oriented Design (OOD) and Object-Oriented Analysis (OOA)",
    "Provides students with the opportunity to build a strong foundation in Java development"
  ],
  "links": [
    { "label": "Course Description", "href": "https://catalog.stchas.edu/" }
  ]
}

];

// keep otherCourses export 
export const otherCourses = [
  "Data Science (InfoSys 3500)",
  // ...
];
