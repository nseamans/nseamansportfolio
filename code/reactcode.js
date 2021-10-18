/** Change_display
 *  Button to change the type of project to be displayed
 */
class Buttonlarge extends React.Component {
  functionToHandle = () => {
    this.props.functionToHandle();
  };
  render() {
    return (
      <p class='menu_button' onClick={() => this.functionToHandle()}>
        {this.props.displayText}
      </p>
    );
  }
}

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      todisplay: "JavaScript",
      projectchoice: false,
      menudisplay: "Skillset",
      projectchosen: 0,
      imagechosen: 0,
      projectdropbutton: <i class='fas fa-caret-square-down'></i>,
    };
  }

  handleMenuDisplay = (info) => {
    this.setState({
        menudisplay: info },
      () => console.log("Clicked: " + this.state.menudisplay)
    );
  };

  handleDisplayType = (info) => {
    this.setState({
        todisplay: info,
        projectchosen: 0,
        imagechosen: 0 },
      () => console.log("Clicked: " + this.state.todisplay)
    );
  };

  handleProjectNumber = (info) => {
    this.setState({
        projectchosen: info,
        imagechosen: 0 },
      () => console.log("Clicked: " + this.state.projectchosen)
    );
  };

  handleprojectchoice = () => {
    if (this.state.projectchoice === false) {
      this.setState({
        projectchoice: true,
        projectdropbutton: <i class='fas fa-caret-square-up'></i>,
      });
    } else if (this.state.projectchoice === true) {
      this.setState({
        projectchoice: false,
        projectdropbutton: <i class='fas fa-caret-square-down'></i>,
      });
    }
  };

  render() {
    // Header Data
    const headerinfo = {
      sitename: "Portfolio",
      icon: "fab fa-linkedin-in",
      linkedin: "https://www.linkedin.com/in/nicholas-seamans/",
      username: "About",
    };
    // front end project data
    const projects_Full = [
      {
        name: "Color Scheme App",
        type: "JavaScript",
        index: 0,
        link: "https://palettescolor-frontend.herokuapp.com",
        github: "https://github.com/nseamans/pallete",
        technologies: [`Node`, `Express`, `React`, 'MongoDB', 'JWT', 'Bootstrap 5'],
        description:
          "Note: Application utilizes Heoku free containers. Each container needs time to load. This translates to initial queries taking time to process. <br>" +
          "Application developed to allow users to create and search color schemes. Utilizes React with the useContext hook for state management" +
          "on the front-end. The back-end utilizes Node.js, Express, and JWT tokens for authentication. Responsive design is handled with a combination" +
          " of custom CSS and BootStrap 5.",
        tagline: "Single page React applicion utizling a Node.js API to retrieve data.",
        images: [
          "https://i.imgur.com/KP05jNL.png",
          "https://i.imgur.com/N6BwY0s.png",
          "https://i.imgur.com/HJTB07I.png",
          "https://i.imgur.com/o3jZKJX.png"
        ],
      },
      {
        name: "Event Scheduling App",
        type: "JavaScript",
        index: 1,
        link: "https://group-manage-app.herokuapp.com/users/login?",
        github: "https://github.com/nseamans/Event_Application_Code",
        technologies: [`Node`, `Express`, `EJS`, 'MongoDB', 'Passport.js', 'Bootstrap 4'],
        description:
          "Utilizes EJS templating to render views of events and options to customize events for varous groups." +
          "Also utilizes Passport.js for User Authentication, Chart.js to provide visual representation of events, and MongoDB for information storage",
        tagline: "Server side rendered node.js application",
        images: [
          "https://i.imgur.com/GqgJtI6.png",
          "https://i.imgur.com/v9qnGIv.png",
          "https://i.imgur.com/6odVtIC.png",
          "https://i.imgur.com/Mrt2lu3.png",
        ],
      }      
    ];
    // back end project data
    const php_projects = [
      {
        name: "Park Activity App",
        type: "php",
        index: 0,
        link: "https://phpsandbox.io/e/x/yjlxr?layout=Preview&iframeId=ghsdy0uf1h&theme=dark&defaultPath=%2F&showExplorer=no",
        github: "https://github.com/nseamans/NationalPark_ActivityApp_PHP",
        technologies: [`PHP`, `Vue`, `BootStrap`, 'nps.gov api'],
        description:
          "PHP and Vue application that utilizes the national park API to search for activites in certain parks by state. Note: PHPsandbox link for project works best when the site view is expanded to the full view portal. This is done by clicking 'open in new window' in the preview section located at the top right of the screen.",
        tagline: "Server Side PHP site utilzing Vue and Bootstrap 5",
        images: [
          "https://i.imgur.com/ANkvodz.png",
          "https://i.imgur.com/tbJ6vNE.png",
          "https://i.imgur.com/HM8pzba.png",
          "https://i.imgur.com/94dOCZk.png"
        ],
      },
      {
        name: "Mock Tesla Site",
        type: "WordPress",
        index: 1,
        link: false,
        github: "https://github.com/nseamans/Tesla_WordPress_Site",
        technologies: [`WordPress`, `Bootstrap`, `Chart.js`],
        tagline: "Wordpress site manipulating PHP for a custom theme",
        description:
          "Mock Up site utilizing a custom theme made in WordPress, JQuery, BootStrap, Chart.js, and PHP. The site contains custom made " +
          "theme utilizing bootstrap and JQuery for responsive web behaviour. Contains elements such as an image gallery, a chart illustrating " +
          "tesla sales compared to other vehicles, and other interactive elements made utilizing various javascript libraries.  ",
        tagline: "Commerical WordPress Example with a Custom theme.",
        images: [
          "https://i.imgur.com/Zd0EUQ4.png",
          "https://i.imgur.com/TRdjGqT.png",
          "https://i.imgur.com/f1rmbaP.png",
          "https://i.imgur.com/dS76vfT.png",
        ],
      },
      {
        name: "Charger Roofing Site",
        type: "cms",
        index: 2,
        link: "https://www.charger-roofing.com",
        github: false,
        technologies: [`WordPress`, `Elementor`],
        tagline: "Commercial wordpress site utilizing Elementor",
        description:
          "Website created under contract with Firecat Studio (San Antonio-based Web Agency) for San Antonio roofing company Charger Roofing. Utilized Elementor to create the theme and SiteGround to host. The site also utilizes several different form plugins such as Yoast and Wpforms. Utilized javascript and CSS for financing options presented. ",
        tagline: "Commerical WordPress Example with a Custom theme.",
        images: [
          "https://i.imgur.com/TcBVPrf.png",
          "https://i.imgur.com/EkBe0Ad.png",
          "https://i.imgur.com/xRIapnk.png",
          "https://i.imgur.com/fv0s0af.png",
        ],
      },
    ];

    const other_projects = [
      {
        name: "Studio Ghibli API Access",
        type: "cms",
        index: 2,
        link: "https://nseamans.github.io/ghibliApp/?",
        github: "https://github.com/nseamans/Tesla_WordPress_Site",
        tagline: "Commerical WordPress Example with a Custom theme.",
        description:
          "One page informal site created to demonstrate how to access an API in JavaScript.",
        images: [
          "/media/other/ghibli.png"
        ],
      }
    ];

    let header = (
      <Header
        sitename={headerinfo.sitename}
        icon={headerinfo.icon}
        link={headerinfo.linkedin}
        username={headerinfo.username}
      />
    );

    let projectsdisplayed;
    let projectsicon;
    if (this.state.todisplay === "Php") {
      projectsdisplayed = php_projects;
    } else if (this.state.todisplay === "JavaScript") {
      projectsdisplayed = projects_Full;
    } else if (this.state.todisplay === "Code") {
      projectsdisplayed = projects_Code;
    }
    
    let typemenu = (
      <div>
        <div class='menu-text'>
          <Buttonlarge
            functionToHandle={() => this.handleDisplayType("JavaScript")}
            displayText={"JavaScript"}
          />
          <Buttonlarge
            functionToHandle={() => this.handleDisplayType("Php")}
            displayText={"PHP"}
          />
        </div>
      </div>
    );

    let projectmenu = (
      <div class='container' >
        <div class='submenu-text'>
          {projectsdisplayed.map((project) => (
            <div class='row'>
            <span onClick = {this.handleprojectchoice}>
            <Buttonlarge
                functionToHandle={() => this.handleProjectNumber(project.index)}
                displayText={project.name}     
              />
            </span>
            </div>
          ))}
        </div>
      </div>
    );

    let choicemenuclosed = (
      <div class='row projectdescstyle' >
        <div class='col-10'>
          <h4 class='menu_head'>Navigate Projects </h4>
        </div>
        <div class='col-2'>
          <h4 class='menu_head_button' 
            onClick={() => this.handleprojectchoice()}>
            {this.state.projectdropbutton}
          </h4>
        </div>
      </div>
    );

    let choicemenuopen = (
      <div class='row projectdescstyle pb-5'>
        <div class='col-5'>
          <h4 class='menu_head'> Project Types </h4>
          {typemenu}
        </div>
        <div class='col-5'>
          <h4 class='menu_head'> Projects </h4>
          {projectmenu}
        </div>
        <div class='col-2'>
          <h4 class='menu_head_button' 
            onClick={() => this.handleprojectchoice()}>
            {this.state.projectdropbutton}
          </h4>
        </div>
      </div>
    );

    let projecttypedisplay = choicemenuclosed;
    if (this.state.projectchoice === false) {
      projecttypedisplay = choicemenuclosed;
    } else projecttypedisplay = choicemenuopen;

    let languagedescription;
    if(this.state.todisplay === 'JavaScript'){
      languagedescription = (
        <div class="container">
         <hr />
        <div class="row mb-2">
          <div class="col">
            <a href="https://reactjs.org" 
              target="_blank" class="me-2 mb-1 mt-1">
              <i class="devicon-react-original"></i> React
            </a>
          </div>
          <div class="col">
            <a href="https://nodejs.org/en/" 
              target="_blank" class="me-2 mb-1 mt-1">
              <i class="fab fa-node-js"></i> Node.js
            </a>
          </div>
          <div class="col">
            <a href="https://www.mongodb.com" 
              target="_blank" class="me-2 mb-1 mt-1">
              <i class="devicon-mongodb-plain"></i> MongoDB
            </a>
          </div>
          <div class="col-6"></div>
        </div>
         <p>
          Javascript projects utilize javascript as the primary language for both the front and back end systems. 
          This includes front-end libraries such as React and back-end libraries such as Express.js.
         </p>
        </div>
      );
    } else if(this.state.todisplay === 'Php'){
      languagedescription = (
        <div class='container'>
          <hr />
          <div class="row mb-2">
            <div class="col">
              <a href="https://wordpress.com" 
                target="_blank" class="me-2 mb-1 mt-1">
                <i class="devicon-wordpress-plain"></i> WordPress
              </a>
            </div>
            <div class="col">
              <a href="https://www.postgresql.org" 
                target="_blank" class="me-2 mb-1 mt-1">
                <i class="devicon-mysql-plain"></i> | <i class="devicon-postgresql-plain"></i> SQL
              </a>
            </div>
            <div class="col-6"></div>
          </div>
          <p>
            PHP projects are both back-end and content management system platforms such as wordpress. Projects 
            here are rendered by the server. 
          </p>
        </div>
      );
    }

    let projectinfo;
    if(projecttypedisplay === choicemenuclosed){
      projectinfo = <Projectstodisplay
                    name={projectsdisplayed[this.state.projectchosen].name}
                    link={projectsdisplayed[this.state.projectchosen].link}
                    github={projectsdisplayed[this.state.projectchosen].github}
                    tagline={projectsdisplayed[this.state.projectchosen].tagline}
                    description={
                      projectsdisplayed[this.state.projectchosen].description
                    }
                    images={projectsdisplayed[this.state.projectchosen].images}
                  />; 
    } else {
      projectinfo = languagedescription;
    }

    // In: skillsetmenu/skillset.js
    let skillset = (
      <div class='row container-fluid'>
        <Skillset /> 
      </div>
    );

    // In: projectsmenu/projects.js
    let projects = (
      <div>
        <br />
        <div>{projecttypedisplay}</div>
        <div>
          <div class='menu_choice'>
            {projectinfo}
          </div>
        </div>
      </div>
    );

    let projectstodisplay = skillset;
    if (this.state.menudisplay === "Skillset") {
      projectstodisplay = skillset;
    } else if (this.state.menudisplay === "Projects") {
      projectstodisplay = projects;
    }

    const infoSummary = {
      paddingTop: "0.25em",
      paddingBottom: "1em",
      paddingLeft: "0.95em"
    }

    let about = (
      <div class="container">
        <p class="" style={infoSummary}>
          I have experience with both back-end and front-end web development. This includes creating single page applications,
          Web API'S, Word-Press Sites, Java Applications, and both sturctured and non-structured databases. I also have experience 
          utilizing various productivity and content editing software suites.
        </p>
        <p style={infoSummary}>
          <sub>(Click below to view my skill-sets and Projects)</sub>
        </p>
      </div>
    );

    let typechoice = (
      <div class='container content_container'>
        <div class="row">
          <div class="headerintro__div">
            <h1 class="headerintro__text">
              My name is Nicholas Seamans. <br />
              I am a Full-Stack Web Developer.
            </h1>
          </div>
        </div>
        {about}
        <div class='row'>
          <div
            class='col sectionchoicebutton'
            onClick={() => this.handleMenuDisplay("Skillset")}>
            Skill-Set 
            </div>
          <div
            class='col sectionchoicebutton'
            onClick={() => this.handleMenuDisplay("Projects")}>
             Projects
            </div>
        </div>
        <div class='container'>{projectstodisplay}</div>
      </div>
    );

    return (
      <div class='content_background'>
        {header}
        {typechoice}
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("portfolio_page"));
