import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap,FaGithub,
} from 'react-icons/fa';
import { AiOutlineApi } from 'react-icons/ai';
import { 
  SiMongodb, SiExpress, SiTypescript, SiVercel, SiRailway, SiTailwindcss ,SiThunderbird,SiRedux,SiJsonwebtokens
} from 'react-icons/si';

export  const skillsData = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, info: "Semantic coding for SEO-friendly structures." },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, info: "Advanced layouts with Flexbox and Grid." },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, info: "Mastery in ES6+ and asynchronous logic." },
    { name: "React", icon: <FaReact className="text-cyan-400" />, info: "Building scalable SPAs with Hooks & Context API." },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, info: "Writing type-safe, error-free enterprise code." },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, info: "High-performance server-side logic execution." },
    { name: "Express", icon: <SiExpress className="text-gray-400" />, info: "Designing robust RESTful APIs for web apps." },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, info: "NoSQL schema design and efficient indexing." },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" />, info: "Rapid UI development with utility-first CSS." },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" />, info: "Quick prototyping and responsive grid systems." },
    { name: "Vercel", icon: <SiVercel className='text-blue-500' />, info: "Optimized frontend deployment and CI/CD." },
    { name: "Railway", icon: <SiRailway className="text-pink-500" />, info: "Scalable backend hosting and DB management." },
    { 
  name: "Git & GitHub", 
  icon: <FaGithub className='text-black' />, 
  info: "Version control and collaborative development workflow." 
},
{ 
  name: "REST APIs", 
  icon: <AiOutlineApi className="text-red-400" />, 
  info: "Designing seamless communication between Front-end & Back-end." 
},
{ 
  name: "Thunder Client", 
  icon: <SiThunderbird className="text-blue-400" />, 
  info: "Lightweight Rest API Client for VS Code to test endpoints efficiently." 
},
{ 
  name: "Redux / Context", 
  icon: <SiRedux className="text-purple-500" />, 
  info: "Managing complex application states across all components." 
},
{ 
  name: "JWT Auth", 
  icon: <SiJsonwebtokens className="text-pink-400" />, 
  info: "Implementing secure user authentication and protected routes." 
}
  ];

export const services = [
  {
    title: "Full-Stack Web Development",
    description: "As a MERN stack specialist, I build fully functional web applications with a perfect balance between frontend and backend.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80", 
  },
  {
    title: "Scalable Backend & APIs",
    description: "Expertise in building secure, high-performance APIs, database design, and handling server-side logic efficiently.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=80", 
  },
  {
    title: "Cloud Deployment",
    description: "I don't just write code; I make it live for the world using platforms like Vercel and Railway for seamless hosting.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80", 
  }
];

