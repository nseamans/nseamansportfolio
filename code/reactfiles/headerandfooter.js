/** Header
 *  Header For Portfolio Site
 *  --Props--
 *  name = name of the site
 *  icon = icon image of the site
 *  menu = menu of the site
 */
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: this.props.icon,
      link: this.props.linkedin,
      sitename: this.props.sitename,
      username: this.props.username,
    };
  }
  render() {
    const linkedin_media =
    String(this.state.medialocation) + String(this.state.icon);
    const linkedin_description = "Linkedin account";
    return (
      <div>
        {this.state.link}
        <nav class='navbar'>
          <div class='container'>
            <div>
              <a href="https://www.linkedin.com/in/nicholas-seamans/" target="_blank">
                <button class='navtitle'>
                  <i class={this.state.icon}></i>
                </button>
              </a>
            </div>
            <div>
              <a href="mailto:nseamans@radford.edu">
                <button class='navtitle' href='#'>
                  nseamans@radford.edu
                </button>
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}