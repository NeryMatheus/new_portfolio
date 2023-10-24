import jquery from "../images/skills/frontend/jquery.png";
import js from "../images/skills/frontend/js.png";
import react from "../images/skills/frontend/react.png";
import angular from "../images/skills/frontend/angular.png";
import html from "../images/skills/frontend/html.png";
import css from "../images/skills/frontend/css.png";
import bootstrap from "../images/skills/frontend/bootstrap.png";
import spring from "../images/skills/backend/spring-boot.png";
import python from "../images/skills/backend/python.png";
import php from "../images/skills/backend/php.png";
import nodejs from "../images/skills/backend/nodejs.png";
import nestjs from "../images/skills/backend/nestjs.png";
import jest from "../images/skills/backend/jest.png";
import git from "../images/skills/others/git.png";
import github from "../images/skills/others/github.png";
import gitlab from "../images/skills/others/gitlab.png";
import azure from "../images/skills/others/azure.png";
import docker from "../images/skills/others/docker.png";
import vscode from "../images/skills/others/vscode.png";
import postman from "../images/skills/others/postman.png";
import mysql from "../images/skills/others/mysql.png";
import postgresql from "../images/skills/others/postgresql.png";
import mongodb from "../images/skills/others/mongodb.png";

export const Bio = {
  name: "Matheus Nery",
  roles: [
    "Dev Backend",
    "Programador",
  ],
  description:
    "Olá! Sou um desenvolvedor backend apaixonado por transformar ideias em realidade através de código. Com 2 anos de experiência na criação de sistemas robustos e escaláveis, meu foco está na construção do “motor” que impulsiona as aplicações, garantindo que elas sejam executadas de forma eficiente e confiável.",
  github: "https://github.com/NeryMatheus",
  resume:"",
  linkedin: "https://www.linkedin.com/in/nerymatheusferreira/",
};

export const skills = [
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: nodejs,
      },
      {
        name: "Python",
        image:
          python,
      },
      {
        name: "PHP",
        image:
          php,
      },
      {
        name: "NestJs",
        image: nestjs,
      },
      {
        name: "Spring Boot",
        image: spring,
      },
      {
        name: "Jest",
        image: jest,
      },
      {
        name: "MySQL",
        image: mysql,
      },
      {
        name: "Postgresql",
        image: postgresql,
      },
      {
        name: "MongoDB",
        image: mongodb,
      }
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        image: html,
      },
      {
        name: "CSS",
        image:
          css,
      },
      {
        name: "JavaScript",
        image:
          js,
      },
      {
        name: "JQuery",
        image: jquery,
      },
      {
        name: "Bootstrap",
        image:
          bootstrap,
      },
      {
        name: "React Js",
        image:
          react,
      },
      {
        name: "Angular",
        image:
          angular,
      }
    ],
  },
  // {
  //   title: "Android",
  //   skills: [
  //     {
  //       name: "Java",
  //       image:
  //         "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  //     },
  //     {
  //       name: "Kotlin",
  //       image:
  //         "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
  //     },
  //     {
  //       name: "XML",
  //       image:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMw6_RdwKQ9bDFfnKDX1iwMl4bVJEvd9PP53XuIw&s",
  //     },
  //     {
  //       name: "Android Studio",
  //       image:
  //         "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
  //     },
  //   ],
  // },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image: git,
      },
      {
        name: "GitHub",
        image: github,
      },
      {
        name: "GitLab",
        image: gitlab,
      },
      {
        name: "Azure",
        image: azure,
      },
      {
        name: "Docker",
        image: docker,
      },
      {
        name: "VS Code",
        image: vscode,
      },
      {
        name: "Postman",
        image: postman,
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://gluby.com.br/storage/uploads/blog/posts/20230126_07295643357.png",
    role: "Lorem Ipsun Developer",
    company: "Lorem Ipsun Developer",
    date: "Lorem Ipsun Developer",
    desc: "Lorem Ipsun Developer",
    skills: [
      "ReactJS",
      "Redux",
      "NodeJs",
      "Material UI",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    doc: "https://www.linkedin.com/in/nerymatheusferreira/",
  },
  {
    id: 1,
    img: "https://gluby.com.br/storage/uploads/blog/posts/20230126_07295643357.png",
    role: "Lorem Ipsun Developer",
    company: "Lorem Ipsun Developer",
    date: "Lorem Ipsun Developer",
    desc: "Lorem Ipsun Developer",
    skills: [
      "ReactJS",
      "Redux",
      "NodeJs",
      "Material UI",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    doc: "https://www.linkedin.com/in/nerymatheusferreira/",
  },  
];

export const education = [
  {
    id: 0,
    img: "https://gluby.com.br/storage/uploads/blog/posts/20230126_07295643357.png",
    school: "Lorem Ipsun Developer",
    date: "Lorem Ipsun Developer",
    grade: "Lorem Ipsun Developer",
    desc: "Lorem Ipsun Developer",
    degree: "Lorem Ipsun Developer",
  },
  {
    id: 1,
    img: "https://gluby.com.br/storage/uploads/blog/posts/20230126_07295643357.png",
    school: "Lorem Ipsun Developer",
    date: "Lorem Ipsun Developer",
    grade: "Lorem Ipsun Developer",
    desc: "Lorem Ipsun Developer",
    degree: "Lorem Ipsun Developer",
  }
];

export const projects = [
  {
    id: 9,
    title: "Lorem Ipsun Developer",
    date: "Jun 2023 - Jul 2023",
    description:
      "Lorem Ipsun Developer",
    image:
      "https://gluby.com.br/storage/uploads/blog/posts/20230126_07295643357.png",
    tags: [
      "Docker",
      "AWS",
      "DuckDNS",
      "Eslint",
      "Husky",
      "CI/CD",
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",
      "Redux",
    ],
    category: "web app",
    github: "https://github.com/NeryMatheus",
  },
  {
    id: 0,
    title: "Lorem Ipsun Developer",
    date: "Apr 2023 - May 2023",
    description:
      "Lorem Ipsun Developer",
    image:
      "https://gluby.com.br/storage/uploads/blog/posts/20230126_07295643357.png",
    tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
    category: "web app",
    github: "https://github.com/NeryMatheus",
    webapp: "https://github.com/NeryMatheus",
  },
  {
    id: 10,
    title: "Lorem Ipsun Developer",
    date: "Jun 2023 - Jul 2023",
    description:
      "Lorem Ipsun Developer",
    image:
      "https://gluby.com.br/storage/uploads/blog/posts/20230126_07295643357.png",
    tags: [
      "Docker",
      "AWS",
      "DuckDNS",
      "Eslint",
      "Husky",
      "CI/CD",
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",
      "Redux",
    ],
    category: "web app",
    github: "https://github.com/NeryMatheus",
  },
  {
    id: 11,
    title: "Lorem Ipsun Developer",
    date: "Apr 2023 - May 2023",
    description:
      "Lorem Ipsun Developer",
    image:
      "https://gluby.com.br/storage/uploads/blog/posts/20230126_07295643357.png",
    tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
    category: "android app",
    github: "https://github.com/NeryMatheus",
    webapp: "https://github.com/NeryMatheus",
  },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
