import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap,FaGithub, FaChevronLeft, FaChevronRight, FaCode, FaUser, FaRocket, FaDatabase, FaLaptopCode 
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

export const slides = [
  {
    id: 1,
    type: "hero",
    title: "Qudratullah",
    subtitle: "Full-Stack Web Architect",
    desc: "Crafting high-performance, scalable web applications with modern technologies and a focus on user experience.",
    icon: <FaUser className="text-7xl text-blue-500" />
  },
  {
    id: 2,
    type: "skills",
    title: "Technical Expertise",
    skills: [
      { name: "React.js / Next.js", level: 95, color: "bg-blue-500" },
      { name: "Node.js & Express", level: 85, color: "bg-green-500" },
      { name: "MongoDB / SQL", level: 80, color: "bg-emerald-500" },
      { name: "Tailwind CSS / UI Design", level: 92, color: "bg-cyan-500" },
      { name: "TypeScript / JavaScript", level: 90, color: "bg-yellow-500" }
    ]
  },
  {
    id: 3,
    type: "info",
    title: "Core Services",
    items: [
      { icon: <FaLaptopCode />, title: "Frontend Development", text: "Pixel-perfect, responsive interfaces built with React and Tailwind." },
      { icon: <FaDatabase />, title: "Backend Solutions", text: "Secure and scalable server-side architectures using Node and Express." },
      { icon: <FaRocket />, title: "Optimization", text: "SEO-friendly and lightning-fast web applications for global reach." }
    ]
  },
  {
    id: 4,
    type: "experience",
    title: "Why Hire Me?",
    items: [
      { icon: <FaCode />, title: "Clean Code", text: "I write maintainable and well-documented code for long-term scalability." },
      { icon: <FaUser />, title: "User Centric", text: "I design with the end-user in mind to ensure maximum engagement." },
      { icon: <FaRocket />, title: "Fast Delivery", text: "Agile development process to deliver quality results in record time." }
    ]
  },
  {
    id: 5,
    type: "mission",
    title: "My Mission",
    subtitle: "Building the Future",
    desc: "My mission is to help businesses grow by providing innovative digital solutions that solve real-world problems. Let's build something extraordinary together.",
    icon: <FaRocket className="text-7xl text-blue-600" />
  }
];