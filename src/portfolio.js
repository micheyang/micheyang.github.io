
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Michelle Yang",
  title: "Hi, I'm Michelle Yang",
  subTitle: emoji("A graduating computer science major with experience in Java, JavaScript, Python, and HTML/CSS just to name a few. I'm glad that you came by, and I'd love to share more about me with you."),
  resumeLink: "https://drive.google.com/file/d/1C0GnFuWBI_yOn-WJyg9eh2C1wkUXLsLb/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/micheyang",
  linkedin: "https://www.linkedin.com/in/michelle-yang-7b2727148/",
  gmail: "michelleandschool@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I like",
  subTitle: "",
  skills: [
    emoji("✔️ Full-stack Software Engineering"),
    emoji("✔️ Customer-facing Products"),
    emoji("✔️ Web & Mobile Application Development"),
    emoji("✔️ Integration with Cloud Services"),
    emoji("✔️ Improving Inclusivity & Accessibility of Technology"),
    emoji("✔️ Longboarding"),
    emoji("✔️ Bullet-journaling"),
    emoji("✔️ Hiking"),
    emoji("✔️ Creating Art")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // {
    //   skillName: "html-5",
    //   fontAwesomeClassname: "fab fa-html5"
    // },
    // {
    //   skillName: "css3",
    //   fontAwesomeClassname: "fab fa-css3-alt"
    // },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    // {
    //   skillName: "JavaScript",
    //   fontAwesomeClassname: "fab fa-js"
    // },
    // {
    //   skillName: "reactjs",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/gt-logo-gold.png"),
      subHeader: "Candidate for Bachelor of Science in Computer Science",
      duration: "August 2017 - May 2021 (expected)",
      // desc: "Threads: Intelligence and Media",
      descBullets: [
        "Threads: Intelligence and Media",
        "GPA: 3.81 / 4.0",
        "Honors Progam student and Faculty Honors recipient",
        "National Merit Scholar"
      ]
    },
    {
      schoolName: "National University of Singapore",
      logo: require("./assets/images/nus_logo_full-horizontal.jpg"),
      subHeader: "Spring Exchange Program",
      duration: "January 2020 - March 2020",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Completed computer science courses",
        "Improved intercultural competence",
        "Explored Southeast Asia"
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Barclays",
      companylogo: require("./assets/images/barclaysLogo.png"),
      date: "July - August 2020",
      desc: "",
      descBullets: [
        "Worked from home on the MOTIF team to facilitate cost-benefit calculations on the decommissioning and onboarding of different technologies",
        "Implemented a report automation tool that reduced cost analysis time by gathering datasets from multiple sources and aggregating specific subsets",
        "Set up REST API endpoints using Express and JavaScript and integrated them with the backend",
        "Built the frontend in Angular and utilized Chart.js for visualizations to better observe trends"
        
      ]
    },
    {
      role: "Software Engineer Intern & Part-timer",
      company: "NCR",
      companylogo: require("./assets/images/ncrLogo.png"),
      date: "May - November 2019",
      desc: "",
      descBullets: [
        "Interned on the OPTIC team with a project focused on connecting outdoor payment terminal devices to the cloud through Google Cloud Platform",
        "Created a cloud client application and simulator using JavaScript to facilitate and demonstrate the flow of data between OPTIC devices and their customers, the development team, and the cloud",
        "Added text-to-speech functionality for the visually impaired customized to customer loyalty information",
        "Followed agile development with weekly sprints and rotated PM, team lead, and scrum master positions"

      ]
    },
    {
      role: "Information Systems Management Intern",
      company: "UPS",
      companylogo: require("./assets/images/upsLogo.png"),
      date: "May - August 2018",
      desc: "",
      descBullets: [
        "Focused on system modernization for Mail Innovations using Angular, Visual Studio, and SQL Server",
        "Completed projects for business need that automated and consolidated existing company features",
        "Built a low-cost solution to a package scanner with a Raspberry Pi and Bluetooth scanner which would reduce production costs by 98% for the company hackathon"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "Hackathon highlights",
  projects: [
    {
      image: require("./assets/images/bobaMapLogo.JPG"),
      link: "https://devpost.com/software/boba-map"
    },
    {
      image: require("./assets/images/paypalTeenLogo.JPG"),
      link: "https://devpost.com/software/paypal-teen"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Other things I've done"),
  subtitle: "Awards and neat stuff",

  achievementsCards: [
    {
      title: "AP Studio Art: 2-D Design Portfolio Exam",
      subtitle: "1 of 9 students (0.03% of exam takers around the world in 2017) to receive a perfect score",
      image: require("./assets/images/myArt.JPG"),
      footerLink: [
        { name: "Award Letter", url: "https://drive.google.com/file/d/1oo2QKwNbys7JR5Zg6wdZhbVwT8SYNt6V/view?usp=sharing" },
        { name: "Portfolio", url: "https://michelleandschool.wixsite.com/balance/concentration" }
      ]
    },
    {
      title: "Hiking Adventures",
      subtitle: "Photo album coming soon",
      image: require("./assets/images/hiking.JPG"),
      footerLink: []
    },

    {
      title: "Longboarding Compilations",
      subtitle: "Videos coming soon",
      image: require("./assets/images/longboarding.JPG"),
      footerLink: [
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to discuss a project or just say hi? My inbox is open!",
  number: "+1 678 628 9597",
  email_address: "michelleandschool@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
