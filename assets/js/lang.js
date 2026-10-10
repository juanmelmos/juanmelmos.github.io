const translations = {
  en: {
    name: "Juan Melguizo Moscoso",
    heroSubtitle: "This is my portfolio, WELCOME!",
    navAbout: "About",
    navExperience: "Experience",
    navProjects: "Projects",
    navSkills: "Skills",
    navEducation: "Education",
    navContact: "Contact",
    aboutTitle: "About me",
    aboutText: "Hi, I'm a Full Stack developer with solid knowledge of the most in-demand technologies today. My education has enabled me to master bothfrontend and backend development, allowing me to create complete and efficient solutions. Thanks to my continuous update on technology trends, I can offer innovative products tailored to market needs.",
    experienceTitle: "Experience",
    experienceUVTitle: "Web content editor at Universitat de València",
    experienceUVText: "Mainly, I was responsible for modifying the content of the web pages. We used a non-commercial CMS, which was created specifically for them, allowing us to easily modify each section of the page. Sometimes, when it couldn't be done with the CMS, we would also modify some things with raw HTML. This was a great first work experience for me.",
    experienceMMTitle: "Mediamarkt",
    experienceMMText: "I am currently working in customer service at MediaMarkt, where I have developed strong problem-solving, communication, and customer-oriented skills. At the same time, I actively continue improving my programming skills and developing personal projects, with the goal of transitioning into a professional software development role.",
    projectsTitle: "Projects",
    projectTtt:"Game developed in Java using threads, libraries, database access, and sockets for online LAN play. It includes login and registration, single-player and online modes, and stores wins, losses, and draws.",
    project2p: "Public event organization platform where users can browse events, register, and access all participation details. Built with Next.js and deployed on Vercel, with a robust database to manage users and events for a smooth experience.",
    skillsTitle: "Skills",
    educationTitle: "Education",
    educationDAW: "Applications Web Developer",
    educationDAWText: "During this course, I developed strong skills in HTML, CSS, JavaScript, and PHP. I also learned Bootstrap to create responsive interfaces and expanded my knowledge through tools like Git, GitHub, Azure, and AWS, building a solid foundation for modern web development.",
    educationSMR: "Microcomputer Systems and Networks Administrator",
    educationSMRText: "I learned the fundamentals of networks, servers, protocols and configured services such as DNS, DHCP, FTP and email servers.",
    clickHint: "Click to see more",
    contactTitle: "Contact",
    contactText: "Or write to me directly at",
    contactName: "Name",
    contactNamePh: "Your name",
    contactFrom: "Your email",
    contactFromPh: "you@example.com",
    contactSubject: "Subject",
    contactSubjectPh: "What is this about?",
    contactMessage: "Message",
    contactMessagePh: "Write your message here...",
    contactSend: "Send message",
    contactNote: "This will open your default email app with the message ready to send."
  },
  es: {
    name: "Juan Melguizo Moscoso",
    heroSubtitle: "Este es mi portfolio, ¡BIENVENIDO!",
    navAbout: "Sobre mí",
    navExperience: "Experiencia",
    navProjects: "Proyectos",
    navSkills: "Habilidades",
    navEducation: "Educación",
    navContact: "Contacto",
    aboutTitle: "Sobre mí",
    aboutText: "Hola, soy desarrollador Full Stack con sólidos conocimientos en las tecnologías más demandadas actualmente. Mi formación me ha permitido dominar tanto el desarrollo frontend como backend, lo que me capacita para crear soluciones completas y eficientes. Gracias a mi actualización continua en tendencias tecnológicas, puedo ofrecer productos innovadores adaptados a las necesidades del mercado.",
    experienceTitle: "Experiencia",
    experienceUVTitle: "Editor de contenido web en la Universitat de València",
    experienceUVText: "Principalmente, me encargaba de modificar el contenido de las páginas web. Utilizábamos un CMS no comercial, desarrollado específicamente para la universidad, que nos permitía editar fácilmente cada sección del sitio. En aquellos casos en los que no era posible hacerlo desde el CMS, realizábamos modificaciones directamente en HTML. Fue una excelente primera experiencia laboral.",
    experienceMMTitle: "Mediamarkt",
    experienceMMText: "Actualmente trabajo en el área de atención al cliente en MediaMarkt, donde he desarrollado habilidades clave como la resolución de problemas, la comunicación efectiva y el trabajo bajo presión. Paralelamente, continúo formándome y desarrollando proyectos personales enfocados al desarrollo de software, con el objetivo de incorporarme profesionalmente al sector tecnológico como programador.",
    projectsTitle: "Proyectos",
    projectTtt: "Juego desarrollado en Java usando hilos, librerías, acceso a base de datos y sockets para juego online en LAN. Incluye login, registro, modo individual y online, y estadísticas de partidas.",
    project2p: "Plataforma pública de organización de eventos donde los usuarios pueden explorar eventos, registrarse y obtener toda la información necesaria. Desarrollada con Next.js y desplegada en Vercel, con una base de datos robusta para gestionar usuarios y eventos.",
    skillsTitle: "Habilidades",
    educationTitle: "Educación",
    educationDAW: "Desarrollo de Aplicaciones Web",
    educationDAWText: "Durante este curso adquirí sólidos conocimientos en HTML, CSS, JavaScript y PHP. También aprendí Bootstrap para crear interfaces responsive y amplié mis habilidades utilizando herramientas como Git, GitHub, Azure y AWS, construyendo una base sólida para el desarrollo web moderno.",
    educationSMR: "Sistemas Microinformáticos y Redes",
    educationSMRText: "Aprendí los fundamentos de redes, servidores, protocolos y configuré servicios como servidores DNS, DHCP, FTP y de correo electrónico.",
    clickHint: "Haz clic para ver más",
    contactTitle: "Contacto",
    contactText: "O escríbeme directamente a",
    contactName: "Nombre",
    contactNamePh: "Tu nombre",
    contactFrom: "Tu correo",
    contactFromPh: "tu@ejemplo.com",
    contactSubject: "Asunto",
    contactSubjectPh: "¿De qué se trata?",
    contactMessage: "Mensaje",
    contactMessagePh: "Escribe tu mensaje aquí...",
    contactSend: "Enviar mensaje",
    contactNote: "Se abrirá tu aplicación de correo predeterminada con el mensaje listo para enviar."
  }
};

let currentLang = "en";

document.getElementById("lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "es" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.innerHTML = translations[currentLang][el.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = translations[currentLang][el.dataset.i18nPlaceholder];
  });
});
