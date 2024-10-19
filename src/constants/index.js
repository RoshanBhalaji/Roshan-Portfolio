import workImage from '../assets/company/work.png'; // Ensure correct path
import bgImage from '../assets/bg.png'; // Ensure correct path
import aiimage from '../assets/ai.png'
import intern from '../assets/intern.png'

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
} from '../assets'; // Adjust import path as needed

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

// Services array with proper formatting and icons
const services = [
  {
    title: 'Full Stack Development',
    icon: web,        // Icon representing web development services
  },
  {
    title: 'React.js Expertise',
    icon: mobile,     // Icon representing mobile or frontend React.js expertise
  },
  {
    title: 'React Native App Development',
    icon: backend,    // Icon representing backend expertise or React Native development
  },
  {
    title: 'Mern Stack Development',
    icon: creator,    // Icon representing creation and full MERN stack development
  },
];


const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company_name: 'Tech Vaseegrah',
    icon: workImage, // Updated with the new image
    iconBg: '#383E56',
    date: 'May 2024 - Present',
    points: [
      'Building and maintaining full-stack applications using React.js, Node.js, and MERN stack technologies.',
      'Working on F3 Engine SAS applications, enhancing functionality, and optimizing performance.',
      'Collaborating with cross-functional teams to develop and deploy dynamic web solutions.',
      'Ensuring responsive design and cross-browser compatibility across applications.',
      'Participating in code reviews and providing feedback to enhance code quality and performance.',
    ],
  },
  {
    title: 'Web Developer Intern',
    company_name: 'TechnoHacks EduTech',
    icon: workImage, // Replace with the actual path to TechnoHacks EduTech's logo
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Mar 2023',
    points: [
      'Learning and applying foundational web technologies including HTML, CSS, and JavaScript.',
      'Assisting in the development and maintenance of web pages with a focus on structure and styling.',
      'Collaborating with mentors to implement basic features and improve user interface elements.',
      'Gaining experience in ensuring responsiveness and compatibility of web pages across different devices and browsers.',
      'Participating in code reviews to understand best practices and enhance coding skills.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Roshan's dedication to optimizing performance and attention to detail were essential for the F3 Engine's success. His contributions have been invaluable.",
    name: 'Leena Sri',
    designation: 'Team Leader, F3 Engine',
    company: 'Tech Vaseegra',
    image: 'https://img.icons8.com/ios-filled/100/000000/businesswoman.png', // Female business icon from Icons8
  },
  {
    testimonial:
      "Roshan's expertise and ability to analyze complex data were key in enhancing our project. His collaborative efforts made a significant impact.",
    name: 'Salman',
    designation: 'Data Analyst',
    company: 'Tech Vaseegra',
    image: 'https://img.icons8.com/ios-filled/100/000000/businessman.png', // Male business icon from Icons8
  },
  {
    testimonial:
      "Working with Roshan has been great. His sharp focus on UI development and efficient problem-solving greatly improved the frontend experience of F3 Engine.",
    name: 'Keerthivasan',
    designation: 'Frontend ',
    company: 'Tech Vaseegra',
    image: 'https://img.icons8.com/ios-filled/100/000000/developer.png', // Developer icon from Icons8
  },
];



const projects = [
  {
    name: "F3 Engine SAS Application",
    description:
     "Built an F3 Engine SAS application with a focus on improving functionality and performance. Integrated secure JWT authentication, developed a dynamic admin panel, and deployed the application on Render for reliable performance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "jwt",
        color: "orange-text-gradient",
      },
    ],
    image: intern, // Use the appropriate image for this project
    source_code_link: "https://f3engine.com/", // Replace with the actual link to your GitHub repository
  },
  {
    name: "Food Delivery Platform",
    description:
      "Created a food delivery platform using the MERN stack, featuring secure JWT authentication, an admin panel, and Stripe payment integration. The platform is deployed on Render for reliability and performance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "orange-text-gradient",
      },
    ],
    image: bgImage, // Replace with the appropriate image for this project
    source_code_link: "https://food-delivery-frontend-agpp.onrender.com/", // Replace with the actual link to your GitHub repository
  },
  {
    name: "React Chatbot",
    description:
      "Discover the future of conversational AI with my React Chatbot project! This innovative application leverages cutting-edge technologies to provide real-time responses to user queries, offering a seamless and interactive user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "chatbot",
        color: "pink-text-gradient",
      },
    ],
    image: aiimage, // Replace with the appropriate image for this project
    source_code_link: "https://roshanbhalaji.github.io/ChittiAi/", // Replace with the actual link to your GitHub repository
  },
];

export { services, technologies, experiences, testimonials, projects };



