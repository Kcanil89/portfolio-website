// --- PROJECTS ---
// Image links are paths relative to the `public` folder.
// For example, `/images/project-blog.jpg` tells the browser to look for `public/images/project-blog.jpg`.
export const projects = [
    {
      title: "Full-Stack Blog Application",
      subtitle: "University of New England",
      image: "/images/project-blog.jpg", // Link to Image 1
      description: "Developed a complete blog application from scratch using Laravel for the backend and ReactJS for the frontend. Implemented a RESTful API, user authentication, role management, and full CRUD functionality.",
      tech: [
        { name: "Laravel", icon: "fab fa-laravel" },
        { name: "React", icon: "fab fa-react" },
        { name: "REST API", icon: "fas fa-cogs" },
        { name: "MySQL", icon: "fas fa-database" }
      ],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "DSM-5 Cognitive Assessment ML Model",
      subtitle: "AoCA’s SmartApp @ UNE",
      image: "/images/project-ml.jpg", // Link to Image 2
      description: "Collaborated in a group project to implement machine learning for cognitive assessment. Contributed to model development, data preprocessing, and software testing to improve predictive accuracy.",
      tech: [
        { name: "Machine Learning", icon: "fas fa-brain" },
        { name: "Python", icon: "fab fa-python" },
        { name: "Data Science", icon: "fas fa-chart-line" }
      ],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Land & Tax Management System",
      subtitle: "Jaljala Rural Municipality, Nepal",
      image: "/images/project-gov.jpg", // Link to Image 3
      description: "Built a comprehensive system for local government to manage land ownership, property details, and tax collection, improving efficiency and transparency in civic administration.",
      tech: [
        { name: "PHP", icon: "fab fa-php" },
        { name: "MySQL", icon: "fas fa-database" },
        { name: "JavaScript", icon: "fab fa-js-square" },
        { name: "GovTech", icon: "fas fa-landmark" }
      ],
      liveLink: "#",
      githubLink: "#"
    }
  ];
  
  
  // --- PROFESSIONAL EXPERIENCE (ALL JOBS) ---
  export const experience = [
    {
      role: "Senior WordPress Developer",
      company: "Urja Lab Pvt Ltd (Pokhara, Nepal)",
      period: "03/2018 – 01/2023",
      points: [
        "Led a team of 25 developers, improving code quality by 30% through code reviews and CI/CD.",
        "Optimized website performance by 40% using tools like Google PageSpeed Insights and GTmetrix.",
        "Resolved 200+ complex technical issues including site migrations, plugin conflicts, and security vulnerabilities."
      ]
    },
    {
      role: "Senior PHP Developer",
      company: "Sewarow Technology (Nepal)",
      period: "10/2020 – 01/2022",
      points: [
        "Improved system performance by 50% by refactoring legacy code with Laravel and CodeIgniter.",
        "Reduced server load by 30% through MySQL and MongoDB database optimization.",
        "Mentored junior developers, boosting team efficiency by 25% and reducing bug recurrence by 20%."
      ]
    },
    {
      role: "Information Technology Officer",
      company: "Jaljala Rural Municipality (Nepal)",
      period: "08/2021 - 07/2022",
      points: [
        "Managed municipal software and infrastructure, resolving 500+ IT support requests for 10+ departments.",
        "Enhanced software performance by 40% and minimized service disruptions by 30% through system audits.",
        "Achieved 99.9% system uptime by implementing robust data backup and disaster recovery plans."
      ]
    },
    {
      role: "Theme Developer",
      company: "Theme Palace (Nepal)",
      period: "08/2019 – 01/2020",
      points: [
        "Developed 16+ custom WordPress themes focusing on performance, security, and user experience.",
        "Increased theme approval rate on WordPress.org by 20% through collaborative code reviews.",
        "Improved page load speed by 30% and organic traffic by 20% for client websites."
      ]
    },
    {
      role: "Senior WordPress Developer (Part-time)",
      company: "Nipuna Prabidhik Sewa (Pokhara, Nepal)",
      period: "01/2019 – 07/2019",
      points: [
        "Resolved 50+ technical issues for international clients, improving ticket resolution efficiency by 30%.",
        "Managed over 100 support tickets, reducing resolution time by 25% through effective prioritization.",
        "Maintained a 95% client satisfaction rate by collaborating with C-level clients on escalated issues."
      ]
    },
    {
      role: "Jr. WordPress Developer",
      company: "Mandala IT Pvt. Ltd (Nepal)",
      period: "01/2018 – 01/2019",
      points: [
        "Contributed to over 15 WordPress projects, including theme customization and plugin integration.",
        "Improved project delivery times by 20% through collaborative troubleshooting and problem-solving.",
        "Achieved 100% on-time delivery for 10+ projects by maintaining clear client communication."
      ]
    }
  ];
  
  
  // --- SKILLS ---
  export const skills = [
    { name: 'PHP', icon: 'fab fa-php' },
    { name: 'Laravel', icon: 'fab fa-laravel' },
    { name: 'WordPress', icon: 'fab fa-wordpress' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'JavaScript', icon: 'fab fa-js-square' },
    { name: "Node.JS", icon: "fab fa-node-js" },
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'MySQL', icon: 'fas fa-database' },
    { name: 'MongoDB', icon: 'fas fa-leaf' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'AWS', icon: 'fab fa-aws' },
  ];
  
  
  // --- VOLUNTEER & COMMUNITY ---
  export const volunteer = [
    {
      role: "Active Member & Volunteer Organizer",
      organization: "WordPress Community",
      period: "2017 - Present",
      description: "Contributed to WordPress accessibility with 200+ translations, organized 10+ WordCamp events, and resolved over 100 queries on official forums."
    },
    {
      role: "President",
      organization: "Computer Association of Pokhara Engineering College",
      period: "2017 – 2018",
      description: "Led 30+ tech initiatives including workshops and coding bootcamps to promote technology education and community engagement."
    }
  ];
  
  // --- TESTIMONIALS ---
  export const testimonials = [
    {
      quote: "Anil's technical expertise and leadership were instrumental in our project's success. He delivered a 40% performance boost and was a pleasure to work with.",
      name: "Yam Chhetri",
      title: "CEO, Web Experts Nepal"
    },
    {
      quote: "His ability to troubleshoot complex issues is second to none. Anil saved our site from multiple critical vulnerabilities and improved our user experience tenfold.",
      name: "Dr. Fareed Ud Din",
      title: "Project Supervisor, UNE"
    }
  ];

// --- BLOG / ADVENTURES ---
export const blogPosts = [
    {
      title: "Bungee Jumping at The Cliff",
      description: "Taking a leap of faith from one of the world's highest bungee bridges in Kushma, Parbat. An unforgettable, exhilarating freefall!",
      youtubeVideoId: "EKxw0hQykCU", // <-- Bungee Jump Video ID
      tags: ["Bungee", "Kushma", "Adrenaline"]
    },
    {
      title: "Paragliding Over Pokhara",
      description: "Soaring like a bird with breathtaking views of the Annapurna mountain range and the stunning Phewa Lake below.",
      youtubeVideoId: "rSkpWGO6K4g", // <-- Paragliding Video ID
      tags: ["Paragliding", "Pokhara", "Travel"]
    },
    {
      title: "The Giant Swing in Kushma",
      description: "A heart-pounding freefall and a massive arc on one of the world's most extreme tandem swings. Pure adrenaline rush!",
      youtubeVideoId: "AO_4Tu19bpg", // <-- Swing Video ID
      tags: ["Extreme Sports", "Swing", "Thrill"]
    }
  ];