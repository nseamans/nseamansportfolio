/** Skillset
 * Displays tables containing the skillset of each category.
 * The categories are "Languages", "CMS", and "Database".
 * Utilizes the functions Languagemenu, Cmssoftwaremenu, 
 * and Databasemenu respectively.
 */
class Skillset extends React.Component {
  constructor() {
    super();
    this.state = {
      menuchoice: "languages",
    };
  }

  handleMenu = (info) => {
    this.setState({
      menuchoice: info,
    });
  };
  render() {
    const languages = <Languagemenu />;
    const cmssoftware = <Cmssoftwaremenu />;
    const databases = <Databasemenu />;
    let menuinfo = languages;
    if (this.state.menuchoice === "languages") {
      menuinfo = languages;
    } else if (this.state.menuchoice === "cmssoftware") {
      menuinfo = cmssoftware;
    } else if (this.state.menuchoice === "databases") {
      menuinfo = databases;
    }
    return (
      <div>
        <br />
        <h4 class='menu_head'>Categories</h4>
        <hr />
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="#" onClick={() => this.handleMenu("languages")}>Languages</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onClick={() => this.handleMenu("cmssoftware")}>CMS and Software</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onClick={() => this.handleMenu("databases")}>Databases</a>
          </li>
        </ul>
        <br />
        {menuinfo}
        <br />
        <h4 class='menu_head'>Education</h4>
        
        <hr />

        <div class="education__container">
            <div class="education__wrapper">
              <h6 class="education__textright">
                Radford University
              </h6>
            </div>
            <div class="copy-container">
              <div class="copy-wrapper">
                <div class="row">
                  <p>
                    Degree: Bachelors of Science
                  </p>
                </div>
                <div class="row">
                  <p>
                    Major: Information Science (Web Development Concentration)
                  </p>
                </div>
                <div class="row">
                  <p>
                    Coursework: Computer Science 1/2/3, Software Engineering,
                    Web Development 1/2/3, Content Management Systems 1/2, 
                    Software Testing, Database (Programming) 1/2, 
                    GUI Programming 1, Web Graphics, Web Animation
                  </p>
                </div>
                <div class="row">
                  <p>
                    Organizations: Upsilon Pi Epsilon (Computer Science Honors Society)
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div class="education__container">
            <div class="education__wrapper">
              <h6 class="education__textright">
                Virginia Western <br/> Community College
              </h6>
            </div>
            <div class="copy-container">
              <div class="copy-wrapper">
                <div class="row">
                  <p>
                    Degree: Associates of Applied Science
                  </p>
                </div>
                <div class="row">
                  <p>
                    Major: Information Systems (Network and Database Concentration)
                  </p>
                </div>
                <div class="row">
                  <p>
                    Coursework: Network Administration 1/2, Database (Management) 1/2, 
                    Web Programming 1, Programming 1, MS OS and Server Administration 1/2
                  </p>
                </div>
                <div class="row">
                  <p>
                    Organizations: Phi Theta Kappa (Associates Level Honors Society)
                  </p>
                </div>
              </div>
            </div>
          </div>
        
      </div>
    );
  }
}
