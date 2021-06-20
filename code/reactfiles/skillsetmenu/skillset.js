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
        <h4 class='menu_head'>Education and Hobbies</h4>
        <hr />
      </div>
    );
  }
}