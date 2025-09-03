export type Project = {
  name: string;
  desc: string;
  tags: string[];
  repo?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    name: "Loan Prediction (ML)",
    tags: ["Python","pandas","scikit-learn", "Machine Learning"],
    desc: "Explore Analysis Data, Feature Engineering, Model Training, Evaluation.",
    repo: "https://github.com/ThanhDat22/UMSL_4200/tree/main/loan_prediciton_project", 
    demo: "https://github.com/ThanhDat22/UMSL_4200/blob/main/loan_prediciton_project/Loan_Prediction.ipynb"
  },
  {
    name: "University Database Management System",
    tags: ["MySQL","JavaScript","PHP", "CSS"],
    desc: "Web app for managing a university database with insert, edit, delete (undo), transcripts, and AJAX features.",
    repo: "https://github.com/ThanhDat22/UMSL_4610/tree/master/final_project", 
    demo: "https://github.com/ThanhDat22/UMSL_4610/blob/master/final_project/README.md"
  },
  {
    name: "Web Development with Java (HW1–HW5)",
    tags: ["Java", "Spring Boot", "PostgreSQL", "React", "JWT"],
    desc: "A series of five full-stack projects for CS 4010, building Java Spring Boot backends and React frontends with REST APIs, database integration, JWT security, and live search features.",
    repo: "https://github.com/ThanhDat22/UMSL_4010",
    demo: "https://github.com/ThanhDat22/UMSL_4010/blob/main/README.md"
  },
  {
    name: "Web Development with Advanced JavaScript (Final Project)",
    tags: ["Node.js", "Express", "MongoDB", "React", "TypeScript"],
    desc: "A full-stack blogging application for CS 4280, featuring a Node.js/Express backend with MongoDB and a React + TypeScript frontend with CRUD operations, styling, and JWT-ready structure.",
    repo: "https://github.com/ThanhDat22/UMSL_4011_Project",
    demo: "https://github.com/ThanhDat22/UMSL_4011_Project/blob/main/README.md"
  },


  {
    name: "Maze Escape (Unity)",
    tags: ["Unity","C#","Game"],
    desc: "Mini-game base on Vietnamese folklore.",
    repo: "https://github.com/ThanhDat22/Path-to-God-Turtle", 
    demo: "#"
  },
  {
    name: "Personal Portfolio (Web)",
    tags: ["HTML", "CSS", "JavaScript", "Vite/ Express"],
    desc: "A responsive personal portfolio website to showcase my projects and skills.",
    repo: "https://github.com/ThanhDat22/dat-page", 
    demo: "https://dat-page.netlify.app/"
  }, 
  {
    name: "Operating System Simulator (Projects 1–6)",
    tags: ["C++", "Linux", "Shared Memory", "Message Queues"],
    desc: "A series of six projects for CS 4760 simulating core OS components, including process control, scheduling, resource management, and memory paging.",
    repo: "https://github.com/ThanhDat22/UMSL_4760_Project",
    demo: "https://github.com/ThanhDat22/UMSL_4760_Project/blob/main/README.md"
  },
  {
    name: "Program Translation Compiler (Projects 1–4)",
    tags: ["C/C++", "Compiler Design", "Parsing", "Code Generation"],
    desc: "A four-stage compiler project for CMP SCI 4280, building a scanner, parser, static semantics checker, and code generator for the SL language.",
    repo: "https://github.com/ThanhDat22/UMSL_4280_Project",   
    demo: "https://github.com/ThanhDat22/UMSL_4280_Project/blob/master/README.md"
  },
  {
  name: "LeetCode Solutions (C++)",
  tags: ["C++", "Algorithms", "Data Structures", "LeetCode", "Competitive Programming"],
  desc: "A growing collection of LeetCode solutions organized by problem number and pattern. Each folder includes clean C++ implementations, brief READMEs (approach & complexity), and simple test harnesses/Makefiles. Default C++98 with optional C++11 for select problems.",
  repo: "https://github.com/ThanhDat22/leetcode/tree/main",
  demo: "https://leetcode.com/u/ThanhDat22/"
}



];
