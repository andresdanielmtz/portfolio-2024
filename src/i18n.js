import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      About: "About Me",
      Hello:
        "Hello! I am Andrés Martínez, a Computer Science and Technology student @ ITESM.",
      Location:
        "Based in Guadalajara, Jalisco, I have developed skills in software engineering across web platforms, enterprise applications, automation and cloud-focused workflows.",
      // ... Other translations ...
      Currently:
        "I am currently open to full-time software engineering opportunities. If you are interested in working with me, please contact me at",
      Email: "this email",
      Title: "Nice to meet you, I am",
      Grade: "B.S. in Computer Science and Technology",
      Experience_Title: "Experience",
      Experience_Subtitle:
        "Professional internships and software engineering work reflected in my current CV.",
      Experience_Graduation: "Expected graduation: June 2026.",
      Experience_Oracle_Title: "Software Engineer Intern",
      Experience_Oracle_Location: "Remote",
      Experience_Oracle_Date: "July 2025 - Present",
      Experience_Oracle_First:
        "Contributed to frontend development for Oracle Analytics Cloud and AI Data Platform, building and maintaining enterprise-scale components using TypeScript and Java.",
      Experience_Oracle_Second:
        "Implemented automated end-to-end tests with Selenium, improving test reliability and reducing regression issues during deployment cycles.",
      Experience_Oracle_Third:
        "Collaborated with senior engineers in agile workflows, code reviews, CI/CD pipelines and software lifecycle practices.",
      Experience_IBM_Title: "Application Developer Intern",
      Experience_IBM_Location: "Guadalajara, MX",
      Experience_IBM_Date: "September 2024 - May 2025",
      Experience_IBM_First:
        "Contributed to the development of EngageAR, IBM's flagship financial platform, with a focus on scalability and performance.",
      Experience_IBM_Second:
        "Improved load times by up to 60% by implementing virtualization and lazy loading methods across microservices.",
      Experience_IBM_Third:
        "Strengthened experience in scalable systems, UI/UX and microservice-oriented engineering.",
      ProjectLink: "Link to the project",
      ProjectFinal: "To see the rest of my projects, visit my ",
      ProjectFinal2: "page or check out my ",
      Project_Title: "Projects",
      Project_Subtitle: "Selected projects from my latest CV.",
      Project_Biocrowny: "Biocrowny",
      Project_Biocrowny_First:
        "Led end-to-end development of a custom Odoo module in Python for a cleaning products company, driving architecture decisions and implementation.",
      Project_Biocrowny_Second:
        "Integrated AI services (Gemini and OpenAI APIs) to summarize key business data and improve decision-making speed.",
      Project_Biocrowny_Third:
        "Built business intelligence features and data visualizations to help employees analyze information effectively.",
      Project_OracleTask_Title: "Oracle Task Management System",
      Project_OracleTask_First:
        "Improved project management efficiency by implementing Story Points and estimation tracking for over 50 tasks per sprint.",
      Project_OracleTask_Second:
        "Expanded backend testing and increased core task-logic coverage to over 90%, reducing manual test effort by 50%.",
      Project_OracleTask_Third:
        "Contributed across Java, TypeScript, Shell and Docker modules, improving release reliability and CI/CD deployment success.",
      Project_PuntoDonativo_Title: "Punto Donativo",
      Project_PuntoDonativo_First:
        "Led the development of an app to help users manage food waste and support Mexico's largest food bank.",
      Project_PuntoDonativo_Second:
        "Integrated a real-time database for accurate and efficient donation and inventory tracking.",
      Project_PuntoDonativo_Third:
        "Designed a user-friendly Flutter interface to increase user engagement for surplus food reporting and donation scheduling.",
    },
  },
  es: {
    translation: {
      About: "Sobre Mí",
      Hello:
        "¡Hola! Soy Andrés Martínez, estudiante de Ingeniería en Tecnologías Computacionales @ ITESM.",
      Location:
        "Actualmente viviendo en Guadalajara, Jalisco, he desarrollado habilidades en ingeniería de software en plataformas web, aplicaciones empresariales, automatización y flujos de trabajo en la nube.",
      Currently:
        "Actualmente estoy abierto a oportunidades de tiempo completo en ingeniería de software. Si estás interesado en trabajar conmigo, por favor contáctame en",
      Email: "este correo",
      Title: "Mucho gusto, mi nombre es",
      Grade: "Ingeniería en Tecnologías Computacionales",
      Experience_Title: "Experiencia",
      Experience_Subtitle:
        "Internships profesionales y trabajo en ingeniería de software reflejados en mi CV actual.",
      Experience_Graduation: "Fecha estimada de graduación: Junio 2026.",
      Experience_Oracle_Title: "Software Engineer Intern",
      Experience_Oracle_Location: "Remoto",
      Experience_Oracle_Date: "Julio 2025 - Actualidad",
      Experience_Oracle_First:
        "Contribuí al desarrollo frontend de Oracle Analytics Cloud y AI Data Platform, construyendo y manteniendo componentes empresariales usando TypeScript y Java.",
      Experience_Oracle_Second:
        "Implementé pruebas automatizadas end-to-end con Selenium, mejorando la confiabilidad de pruebas y reduciendo regresiones durante despliegues.",
      Experience_Oracle_Third:
        "Colaboré con ingenieros senior en flujos ágiles, code reviews, pipelines de CI/CD y prácticas del ciclo de vida de software.",
      Experience_IBM_Title: "Application Developer Intern",
      Experience_IBM_Location: "Guadalajara, MX",
      Experience_IBM_Date: "Septiembre 2024 - Mayo 2025",
      Experience_IBM_First:
        "Contribuí al desarrollo de EngageAR, la plataforma financiera principal de IBM, con enfoque en escalabilidad y rendimiento.",
      Experience_IBM_Second:
        "Mejoré los tiempos de carga hasta en un 60% implementando virtualización y lazy loading en distintos microservicios.",
      Experience_IBM_Third:
        "Fortalecí mi experiencia en sistemas escalables, UI/UX e ingeniería orientada a microservicios.",
      ProjectLink: "Link al proyecto",
      ProjectFinal: "Para ver el resto de mis proyectos, visita mi página de ",
      ProjectFinal2: "ó checa mí",
      Project_Title: "Proyectos",
      Project_Subtitle: "Proyectos seleccionados de mi CV más reciente.",
      Project_Biocrowny: "Biocrowny",
      Project_Biocrowny_First:
        "Lideré el desarrollo end-to-end de un módulo personalizado en Odoo usando Python para una empresa de productos de limpieza, guiando decisiones de arquitectura e implementación.",
      Project_Biocrowny_Second:
        "Integré servicios de IA (APIs de Gemini y OpenAI) para resumir datos clave del negocio y mejorar la velocidad de toma de decisiones.",
      Project_Biocrowny_Third:
        "Construí funcionalidades de inteligencia de negocios y visualizaciones para facilitar el análisis de información por parte del equipo.",
      Project_OracleTask_Title: "Oracle Task Management System",
      Project_OracleTask_First:
        "Mejoré la eficiencia de gestión implementando Story Points y seguimiento de estimaciones para más de 50 tareas por sprint.",
      Project_OracleTask_Second:
        "Amplié pruebas backend y elevé la cobertura de la lógica central de tareas por encima del 90%, reduciendo el esfuerzo manual en 50%.",
      Project_OracleTask_Third:
        "Contribuí en módulos de Java, TypeScript, Shell y Docker, mejorando la confiabilidad de releases y despliegues por CI/CD.",
      Project_PuntoDonativo_Title: "Punto Donativo",
      Project_PuntoDonativo_First:
        "Lideré el desarrollo de una app para ayudar a gestionar desperdicio de comida y apoyar al banco de alimentos más grande de México.",
      Project_PuntoDonativo_Second:
        "Integré una base de datos en tiempo real para seguimiento preciso y eficiente de donaciones e inventario.",
      Project_PuntoDonativo_Third:
        "Diseñé una interfaz en Flutter centrada en usabilidad para fomentar reportes de excedentes y programación de donaciones.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
});

export default i18n;
