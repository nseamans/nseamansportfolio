class Projectstodisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainimgindex: 0,
      mainimgURL: "",
      projectmenuDisplay: false,
      datastuff: "center",
      mainimgwidth: "650px",
      mainimglength: "270px"
    };
  }

  initialize() {
    this.setState({
      mainimgindex: 0,
      mainimgURL: this.props.images[0],
    });
  }

  componentDidMount() {
    // View an image.
    const viewer = new Viewer(document.getElementById('image'), {
      inline: true,
      viewed() {
        viewer.zoomTo(1);
      },
    });
    // Then, show the image by clicking it, or call `viewer.show()`.

    // View a list of images.
    // Note: All images within the container will be found by calling `element.querySelectorAll('img')`.
    const gallery = new Viewer(document.getElementById('images'));
    // Then, show one image by click it, or call `gallery.show()`.



    this.setState({
      datastuff: "left"
    });
    this.initialize();
  }

  componentDidUpdate(prevProps) {
    const maxsize = 800;
    let resize = window.matchMedia(`(max-width: ${maxsize}px)`);
    if (resize.matches) {
      console.log(this.state.mainimgwidth);
    } else {
      console.log(this.state.mainimglength);
    }
    if (this.props !== prevProps) this.initialize();
  }

  handleImgIndex = (index) => {
    this.setState({ mainimgindex: index });
  };

  render() {
    let mainimgURL = this.state.mainimgURL;

    if (this.state.mainimgindex === 0) {
      mainimgURL = this.props.images[0];
    } else if (this.state.mainimgindex === 1) {
      mainimgURL = this.props.images[1];
    } else if (this.state.mainimgindex === 2) {
      mainimgURL = this.props.images[2];
    } else if (this.state.mainimgindex === 3) {
      mainimgURL = this.props.images[3];
    }

    // css for image container
    const imageviewcontainer = {
      backgroundColor: "#302C27",
      paddingTop: "1em",
      paddingBottom: "2em",
      width: "100%"
    };

    const mainstyle = {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "50%"
    };

    let mainImage = <img src={mainimgURL} style={mainstyle} />;

    // Start Sub images
      let subImage1 = <h1>{this.props.images.length}</h1>;
      let subImage1page;
      if (this.props.images.length >= 1) {
        subImage1page = <h6 class='img_instrutions'><sub>Page 1</sub></h6>;
        subImage1 = <div class='row'>
          <img
            src={this.props.images[0]}
            alt={this.props.name + " Image"}
            onClick={() => this.handleImgIndex(0)}
            class='img_sub'
          />
        </div>;
      } else {
        subImage1page = <h5 class='img_instrutions'><sub>No image present</sub></h5>;
        subImage1 = null;
      }

      let subImage2;
      let subImage2page;
      if (this.props.images.length >= 2) {
        subImage2page = <h5 class='img_instrutions'><sub>Page 2</sub></h5>;
        subImage2 = <div class='row'>
          <img
            src={this.props.images[1]}
            alt={this.props.name + " Image"}
            onClick={() => this.handleImgIndex(1)}
            class='img_sub'
          />
        </div>;
      } else {
        subImage2page = <h5 class='img_instrutions'><sub>No image present</sub></h5>;
        subImage2 = null;
      }

      let subImage3;
      let subImage3page;
      if (this.props.images.length >= 3) {
        subImage3page = <h5 class='img_instrutions'><sub>Page 3</sub></h5>;
        subImage3 = <div class='row'>
          <img
            src={this.props.images[2]}
            alt={this.props.name + " Image"}
            onClick={() => this.handleImgIndex(2)}
            class='img_sub'
          />
        </div>;
      } else {
        subImage3page = <h5 class='img_instrutions'><sub>No image present</sub></h5>;
        subImage3 = null;
      }

      let subImage4;
      let subImage4page;
      if (this.props.images.length >= 4) {
        subImage4page = <h5 class='img_instrutions'><sub>Page 4</sub></h5>;
        subImage4 = <div class='row'>
          <img
            src={this.props.images[3]}
            alt={this.props.name + " Image"}
            onClick={() => this.handleImgIndex(3)}
            class='img_sub'
          />
        </div>;
      } else {
        subImage4page = <h5 class='img_instrutions'><sub>No image present</sub></h5>;
        subImage4 = null;
      }
    // End Sub images

    let imagemenu = (
      <div style={imageviewcontainer}>
        <div hidden>
          <img id="image" src="picture.jpg" alt="Picture" />
        </div>        
        <div class="container">
          <div class='row'>
            <h6 class='img_instrutions'>Click to View a Gallery</h6>
          </div>
          <div id="images">
            <div class="row" >
              <div class="col">
                {subImage1page}
                {subImage1}
              </div>
              <div class="col">
                {subImage2page}
                {subImage2}
              </div>
            </div>
            <div class="row" >
              <div class="col">
                {subImage3page}
                {subImage3}
              </div>
              <div class="col">
                {subImage4page}
                {subImage4}
              </div>
            </div>
          </div>
            
        </div>
      </div>
    );

    // Project Descripiton Menu.
    let sitelink;
    if (this.props.link === false) {
      sitelink = (
        <div class='col'>
          <h5 class='no_link'>No site link is avalible</h5>
        </div>
      );
    } else {
      sitelink = (
        <div class='col'>
          <a href={this.props.link} target='_blank' rel='noopener noreferrer'>
            <h5>
              Site-Link: <i class='fas fa-external-link-alt'></i>
            </h5>
          </a>
        </div>
      );
    }

    let github;
    if (this.props.github === false) {
      github = (
        <div class='col'>
          <h5 class='no_link'>No github link is avalible</h5>
        </div>
      );
    } else {
      github = (
        <div class='col'>
          <a href={this.props.github} target='_blank' rel='noopener noreferrer'>
            <h5>
              Git-Link: <i class='fab fa-github'></i>
            </h5>
          </a>
        </div>
      );
    }

    let projecttagline = (
      <div>
        <div class='row mb-2'>
          <p>{this.props.tagline}</p>
        </div>
      </div>
    );

    let projectdesc = (
      <div>
        <div class='row'>
          {sitelink}
          {github}
        </div>
        <br />
        <div class='row'>
          <p>{this.props.description}</p>
        </div>
      </div>
    );

    return (
      <div>
        <br />
        <div>
          <div class='row'>
            <div class='col'>
              <div class='row projectdescstyle'>
                {projecttagline}
                {projectdesc}
                <div class='center-block'>{imagemenu}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}