// this comtains the data we are gonna for AboutMe component and slider component 

export const AboutData = [
  /*{
    count: 1,
    title: "UI / UX Designer",
    img: "/first.svg",
    array: [
      "Information Architecture",
      "Pen and Paper",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Figma",
      "Framer",
      "Typography / Spacing / ...",
    ],
  },*/

  {
    count: 1,
    title: "Front-End Tools & Frameworks",
    img: "/second.svg",
    array: [
      "HTML / XHTML",
      "CSS",
      "JavaScript",
      "Next.js",
      "JSF (Java Server Faces)",
      "JSP (Java Server Pages)",
      "PrimeFaces",
      "Bootstrap",
    ],
  },

  {
    count: 2,
    title: "Back-End Tools & Frameworks",
    img: "/third.svg",
    array: [
      "Python",
      "Java",
      "Hibernate",
      "JDBC (Java Database Connectivity)",
      "JNDI (Java Naming and Directory Interface)",
    ],
  },

  {
    count: 3,
    title: "Application Servers",
    img: "/fourth.svg",
    array: [
      "Jakarta",
      "Wildfly",
      "Apache Tomcat",
    ],
  }, 

  {
    count: 4,
    title: "Databases",
    img: "/fifth.svg",
    array: [
      "MySQL",
      "Oracle SQL",
    ],
  }, 

  {
    count: 5,
    title: "Tools and IDEs",
    img: "/sisxth.svg",
    array: [
      "Command-Line Tools (Bash / Powershell)",
      "Git / GitHub",
      "Maven",
      "VSCode",
      "IntelliJ",
    ],
  },
];


// this is for the slider 
export const DataArray = [
  {
    title: "Shopping Cart Application",
    name: "Shopping-Cart",
    des: "This project enables full CRUD operations on products and users, with a responsive Bootstrap-styled interface.",
    des1: "Jakarta web application for managing products and users in a shopping cart system. Features CRUD operations, EJB for business logic, MySQL integration via JPA and Hibernate, CDI for dependency injection, and a Bootstrap interface. Organized with dynamic JSP pages and deployed on WildFly.",

    images: ["/SCart.png", "/SCart1.png", "/SCart2.png"],
    tags: ["Jakarta", "JPA", "Hibernate", "EJB", "CDI", "JSP", "Bootstrap", "MySQL"],
    link: ["https://github.com/Joselam97/Shopping-Cart"],
    
  },

  {
    title: "Bankist",
    name: "Bank App",
    des: "I developed this web application to simulate basic banking operations, such as account management, deposits and transfers.",
    des1: "This web application leverages JavaScript for business logic with data stored in arrays, multiple functions to manage transactions and user operations, as well as DOM handling for an interactive dashboard. Built with HTML for structure and CSS for design, it provides an intuitive interface for efficient bank account management.",

    images: ["/bankapp.png" ,"/bankscroll.png"],
    tags: ["HTML", "JavaScript", "CSS"],
    link: ["https://github.com/Joselam97/BankApp"],
  },

  {
    title: "Product Inventory",
    name: "Online Products",
    des: "A Jakarta web application for managing products and categories. This project enables full CRUD operations on products and categories.",
    des1: "Web application designed to streamline product and category management, offering seamless data operations through a responsive PrimeFaces UI, MySQL integration via JPA and Hibernate, CDI for dependency injection, multi-language support, as well as role-based security. It is structured with controllers, services, repositories, and a polished JSF frontend.",

    images: ["/Op.png", "/Op2.png"],
    tags: ["Jakarta", "JSF", "Hibernate", "JPA", "MySQL", "XHTML", "PrimeFaces", "CDI"],
    link: ["https://github.com/Joselam97/OnlineProducts"],
  },

  {
    title: "Course List Application",
    name: "Course List",
    des: "This application demonstrates CRUD functionality with a clean, organized interface.",
    des1: "Manages courses through CRUD functionality and MySQL integration, utilizing CDI annotations for dependency injection. Features a responsive design styled with Bootstrap and dynamic pages built using JSP and Servlets. Provides a clean interface for adding, updating, viewing and deleting courses, with seamless database synchronization.",

    images: ["/cursos.png",  "/cursos1.png"],
    tags: ["Jakarta", "CDI", "Bootstrap", "MySQL", "JNDI","JSP"],
    link: ["https://github.com/Joselam97/CourseList"],
  },

  {
    title: "Budget Management",
    name: "Budget Application",
    des: "App to manage personal finances, allowing users to track income and expenses with an organized interface.",
    des1: "Web application developed using JavaScript, HTML, CSS and Object-Oriented Programming. The functionality of the app was brought to life by unifying its components within a class structure and creating functions to manage the application, with real-time updates and dynamic visual summaries.",

    images: ["/budgetapp.png"],
    tags: ["JavaScript", "HTML", "CSS"],
    link: ["https://github.com/Joselam97/BudgetApplication"],
  },
];
