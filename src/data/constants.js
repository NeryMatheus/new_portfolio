/* SKILLS */
import jquery from "../images/skills/frontend/jquery.png";
import js from "../images/skills/frontend/js.png";
import react from "../images/skills/frontend/react.png";
// import angular from "../images/skills/frontend/angular.png";
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
import flask from "../images/skills/backend/flask.png";
import cleancode from "../images/skills/others/cleancode.png";
/* SKILLS */

/* EDUCATIONS */
import fametro from "../images/educations/fametro.jpeg";
import pucminas from "../images/educations/pucminas.jpeg";
/* EDUCATIONS */

/* EXPERIENCE */
import ttm from "../images/projects/ttm.png";
import tsp from "../images/projects/tsp.png";
import portfolio from "../images/projects/portfolio.png";
import clonenubank from "../images/projects/clonenubank.png";
import ipdec from "../images/skills/others/ipdec.jpeg";
import icts from "../images/skills/others/icts.jpeg";
/* EXPERIENCE */

export const Bio = {
  name: "Matheus Nery",
  roles: [
    "Dev Backend",
    "Programador",
  ],
  description:
    "Olá! Sou um desenvolvedor backend apaixonado por transformar ideias em realidade através de código. Com 3 anos de experiência na criação de sistemas robustos e escaláveis, meu foco está na construção do “motor” que impulsiona as aplicações, garantindo que elas sejam executadas de forma eficiente e confiável.",
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
        name: "Flask",
        image: flask,
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
      },
      {
        name: "Docker",
        image: docker,
      },
      {
        name: "Postman",
        image: postman,
      },
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
      // {
      //   name: "Angular",
      //   image:
      //     angular,
      // }
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
        name: "VS Code",
        image: vscode,
      },
      {
        name: "Clean Code",
        image: cleancode,
      }
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: ipdec,
    role: "Desenvolvedor Backend | NestJs | TypeORM | PostgreSQL | Docker | Jest",
    linkedin: "https://www.linkedin.com/company/institutoipdec/mycompany/",
    company: "Instituto IPDEC",
    date: "Fev 2023 - atual",
    descs: [
      "Desenvolvimento de aplicativos web usando NestJS como framework do lado do servidor e TypeScript - como linguagem de programação principal",
      "Utilização do TypeORM como ORM para mapeamento objeto-relacional e gerenciamento de banco de dados, principalmente com o banco de dados PostgreSQL",
      "Realização de modelagem e desenvolvimento de bancos de dados PostgreSQL utilizando o DBeaver como ferramenta de gerenciamento de banco de dados",
      "Participação em equipes ágeis com metodologia Scrum, envolvendo reuniões diárias, planejamento de sprint, revisões e retrospectivas",
      "Implementação de testes unitários para garantir a qualidade do código",
      "Experiência com controle de versionamento de código usando Git e GitLab",
      "Conhecimento e experiência em arquitetura de microsserviços e REST APIs",
      "Habilidade em desenvolvimento de sistemas escaláveis e resilientes",
      "Colaboração com equipes de front-end para implementar APIs RESTful",
      "Trabalho com ferramentas de containerização como Docker",
      "Criação de um projeto utilizando o Flask - o projeto tem por objetivo retornar os comentários do banco de dados e aplicar uma análise de sentimento, utilizando o BERT e persistir essas análises no banco de dados"
    ],
    skills: [
      "NestJS",
      "Node.js",
      "TypeORM",
      "PostgreSQL",
      "Jest",
      "TypeScript",
      "Python",
      "Flask",
      "Docker",
      "Git",
      "GitLab",
      "Azure",
      "Programação orientada a objetos (POO)",
      "Análise de sistemas",
      "Serviços web",
      "REST (Transferência de estado representacional )",
      "API REST",
      "Desenvolvimento Ágil",
      "Scrum",
      "Kanban",
    ],
    doc: "https://www.linkedin.com/in/nerymatheusferreira/",
  },
  {
    id: 1,
    img: icts,
    role: "Analista de Desenvolvimento de Sistemas Júnior | PHP | HTML | CSS | JavaScript | JQuery | MySql",
    linkedin: "https://www.linkedin.com/company/grupo-icts/",
    company: "Grupo ICTS",
    date: "Dez 2021 - Fev 2023",
    descs: [
      "Fazer consultas e manipulações no SGBD MariaDB",
      "Implementar melhorias no sistema interno utilizando o PHP e o Yii framework",
      "Criação de novas rotinas no sistema interno(HTML, CSS, Javascript, JQuery, PHP, YII)",
      "Bootstrap, Javascript e JQuery, PHP e Yii Framework)",
      "Manutenção no braço robótico da empresa",
      "Criação de scripts para o robô empilhar novas caixas(Linguagem própria do robô, semelhança com o Pascal)",
      "Participação no levantamento de requisitos junto ao cliente",
      "Participação em projetos P&D utilizando python",
      "Testes funcionais nos sistemas da empresa",
    ],
    skills: [
      "PHP", 
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "JQuery",  
      "Yii Framework",      
      "MariaDB",
      "Docker",
      "Git",
      "GitHub",
      "GitLab",
      "Programação orientada a objetos (POO)",
      "Análise de sistemas",
      "Serviços web",
      "REST (Transferência de estado representacional )",
      "API REST",
      "Desenvolvimento Ágil",
      "Scrum",
      "Kanban"
    ],
    doc: "https://www.linkedin.com/in/nerymatheusferreira/",
  }
];

export const education = [
  {
    id: 1,
    img: pucminas,
    link: 'https://www.pucminas.br/main/Paginas/default.aspx',
    school: "PUC Minas",
    date: "Mar 2023 - Mar 2024",
    degree: "Pós-graduação Lato Sensu - Especialização, Engenharia de Software",
  },
  {
    id: 0,
    img: fametro,
    link: 'https://fametro.edu.br/',
    school: "Centro Universitário FAMETRO",
    date: "Fev 2016 - Dez 2019",
    degree: "Bacharelado, Tecnologia da Informação/Sistemas de Informação",
  },
];

export const projects = [
  {
    id: 0,
    title: "TTM - Top Ten Movies",
    date: "Jun 2023 - Jul 2023",
    description:
      "Top Ten Movies é um aplicativo que permite que você veja os filmes mais bem avaliados do IMDB, além de poder ver os detalhes de cada filme, título, nota, uma breve descrição e quantidade de notas.",
    image: ttm,
    tags: [
      "React",
      "NestJs",
      "TypeORM",
      "TypeScript"
    ],
    category: "web app",
    frontend: "https://github.com/NeryMatheus/top-ten-movies-front",
    backend: "https://github.com/NeryMatheus/top-ten-movies",
    webapp: 'https://ttm-frontend.vercel.app/',
  },
  {
    id: 1,
    title: "Treinando um Desenvolvimento de Site",
    date: "Ago 2021 - Set 2021",
    description:
      "Criação de um site profissional utilizando as linguagens HTML5, CSS3, Materialize e Javascript. Possui um design responsivo, ou seja, se ajusta tanto com smartphones e tablets quanto o próprio notebook e desktop. Foi utilizado a bliblioteca de funções javascript JQuery.",
    image: tsp,
    tags: ["HTML", "CSS", "JavaScript", "JQuery", "Materialize"],
    category: "web app",
    frontend: "https://github.com/NeryMatheus/HTML5-CSS3-JAVASCRIPT",
    backend: null,
    webapp: "https://html-5-css-3-javascript.vercel.app/"
  },
  {
    id: 2,
    title: "Portfolio antigo",
    date: "Jan 2022 - Fev 2022",
    description:
      "Criação de um portfolio afim de mostrar meus projetos e habilidades. Nesse primeiro portfolio, com o intuito de aprender mais sobre a base web, foi utilizado as linguagens HTML5, CSS3, Javascript.",
    image: portfolio,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "web app",
    frontend: "https://github.com/NeryMatheus/portfolio",
    backend: null,
    webapp: "https://portfolio-nerymatheus.vercel.app/"
  },
  {
    id: 3,
    title: "Clone interface inicial do nubank",
    date: "Jan 2023 - Jan 2023",
    description:
      "Criação de um clone da interface inicial do nubank, com o intuito de aprender mais sobre o desenvolvimento mobile. Foi utilizado a linguagen Kotlin.",
    image: clonenubank,
    tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
    category: "android app",
    frontend: "https://github.com/NeryMatheus/clone-Nubank",
    backend: null,
    webapp: null,
  },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
