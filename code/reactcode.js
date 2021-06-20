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
      todisplay: "Full",
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
        name: "Event: Scheduling App",
        type: "full",
        index: 0,
        link: "https://group-manage-app.herokuapp.com/users/login?",
        github: "https://github.com/nseamans/Event_Application_Code",
        description:
          "Node.js and JavaScript Application that allows users to group events and tasks associated to that group." +
          " Utilizes Passport.js for User Authentication and Chart.js to provide visual representation of events" +
          " scheduled. ",
        tagline: "Commerical WordPress Example with a Custom theme.",
        images: [
          "/media/eventapp/event1.png",
          "/media/eventapp/event2.png",
          "/media/eventapp/event3.png",
          "/media/eventapp/event4.png",
        ],
      },
      {
        name: "Park Activity App",
        type: "full",
        index: 1,
        link: "https://phpsandbox.io/e/x/yjlxr?layout=Preview&iframeId=ghsdy0uf1h&theme=dark&defaultPath=%2F&showExplorer=no",
        github: "https://github.com/nseamans/NationalPark_ActivityApp_PHP",
        description:
          "PHP and Vue application that utilizes the national park API to search for activites in certain parks by state. Note: PHPsandbox link for project works best when the site view is expanded to the full view portal. This is done by clicking 'open in new window' in the preview section located at the top right of the screen.",
        tagline: "Commerical WordPress Example with a Custom theme. Beta version of a MERN (Mongo, Express, React, Node) stack applicaiton I am currently developing. This appilcation works as a proof of concept for a large scale applicaion to allow the public and students to retrieve informaiton pertaining to famous modern artists. ",
        images: [
          "/media/parkapp/park1.png",
          "/media/parkapp/park2.png",
          "/media/parkapp/park3.png"
        ],
      },
      {
        name: "Pop Art App Beta",
        type: "full",
        index: 2,
        link: "https://group-manage-app.herokuapp.com/users/login?",
        github: "https://github.com/nseamans/Pop-Art-Application",
        description:
          "Modern/Pop art wiki style site allowing users to view media and informaiton pertaining to different artists. NOTES: I have recently changed the back-end api I am developing so images are not displayed any more. Also, This application uses a seperate container for the back-end. Due to the nature of Heroku free app servers, the front-end portion of the app may produce errors pertaining to not being able to retrieve information from the seperate node.js server. Give the applicaiton around twenty seconds to fully activate.",
        tagline: "Commerical WordPress Example with a Custom theme. Beta version of a MERN (Mongo, Express, React, Node) stack applicaiton I am currently developing. This appilcation works as a proof of concept for a large scale applicaion to allow the public and students to retrieve informaiton pertaining to famous modern artists. ",
        images: [
          "/media/other/popartApp.png"
        ],
      }
    ];
    // back end project data
    const projects_Front = [
      {
        name: "Mock Tesla Site",
        type: "cms",
        index: 0,
        link: "https://18.189.182.245/",
        github: "https://github.com/nseamans/Tesla_WordPress_Site",
        tagline: "Commerical WordPress Example with a Custom theme.",
        description:
          "Mock Up site utilizing a custom theme made in WordPress, JQuery, BootStrap, Chart.js, and PHP. The site contains custom made " +
          "theme utilizing bootstrap and JQuery for responsive web behaviour. Contains elements such as an image gallery, a chart illustrating " +
          "tesla sales compared to other vehicles, and other interactive elements made utilizing various javascript libraries.  ",
        tagline: "Commerical WordPress Example with a Custom theme.",
        images: [
          "/media/teslasite/Image1.png",
          "/media/teslasite/Image2.png",
          "/media/teslasite/Image3.png",
          "/media/teslasite/Image4.png",
        ],
      },
      {
        name: "Charger Roofing Site",
        type: "cms",
        index: 1,
        link: "https://www.charger-roofing.com",
        github: false,
        tagline: "Minimal Custom WordPress blog with custom theme",
        description:
          "The website was created under contract with Firecat Studio (San Antonio-based Web Agency) for San Antonio roofing company Charger Roofing. Utilized Elementor to create the theme and SiteGround to host. The site also utilizes several different form plugins such as Yoast and Wpforms. Utilized javascript and CSS for financing options presented. ",
        tagline: "Commerical WordPress Example with a Custom theme.",
        images: [
          "/media/chargerroofing/chargerroofing1.png",
          "/media/chargerroofing/chargerroofing2.png",
          "/media/chargerroofing/chargerroofing3.png",
          "/media/chargerroofing/chargerroofing4.png",
        ],
      },
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
    if (this.state.todisplay === "Front") {
      projectsdisplayed = projects_Front;
    } else if (this.state.todisplay === "Full") {
      projectsdisplayed = projects_Full;
    } else if (this.state.todisplay === "Code") {
      projectsdisplayed = projects_Code;
    }

    let typemenu = (
      <div>
        <div class='menu-text'>
          <Buttonlarge
            functionToHandle={() => this.handleDisplayType("Full")}
            displayText={"Full-Stack"}
          />
          <Buttonlarge
            functionToHandle={() => this.handleDisplayType("Front")}
            displayText={"Front-End"}
          />
        </div>
      </div>
    );

    let projectmenu = (
      <div class='container'>
        <div class='submenu-text'>
          {projectsdisplayed.map((project) => (
            <div class='row'>
              <Buttonlarge
                functionToHandle={() => this.handleProjectNumber(project.index)}
                displayText={project.name}
              />
            </div>
          ))}
        </div>
      </div>
    );

    let choicemenuclosed = (
      <div class='row projectdescstyle'>
        <div class='col-10'>
          <h4 class='menu_head'> Navigate Project </h4>
        </div>
        <div class='col-2'>
          <h4 class='menu_head_button'>
            <span onClick={() => this.handleprojectchoice()}>
              {this.state.projectdropbutton}
            </span>
          </h4>
        </div>
      </div>
    );

    let choicemenuopen = (
      <div class='row projectdescstyle'>
        <div class='col-5'>
          <h4 class='menu_head'> Project Types </h4>
          {typemenu}
        </div>
        <div class='col-5'>
          <h4 class='menu_head'> Projects </h4>
          {projectmenu}
        </div>
        <div class='col-2'>
          <h4 class='menu_head_button'>
            <span onClick={() => this.handleprojectchoice()}>
              {this.state.projectdropbutton}
            </span>
          </h4>
        </div>
      </div>
    );

    let projecttypedisplay = choicemenuclosed;
    if (this.state.projectchoice === false) {
      projecttypedisplay = choicemenuclosed;
    } else projecttypedisplay = choicemenuopen;

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
            <Projectstodisplay
              name={projectsdisplayed[this.state.projectchosen].name}
              link={projectsdisplayed[this.state.projectchosen].link}
              github={projectsdisplayed[this.state.projectchosen].github}
              description={
                projectsdisplayed[this.state.projectchosen].description
              }
              images={projectsdisplayed[this.state.projectchosen].images}
            /> 
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
              I am a Full-Stack Developer.
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
