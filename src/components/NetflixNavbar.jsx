import { Container, Navbar, Nav, Image } from "react-bootstrap"
const NetflixNavbar = () => (
  <Navbar
    className="bg-dark-netflix"
    collapseOnSelect
    expand="lg"
    variant="dark"
  >
    <Container fluid>
      <Navbar.Brand href="#home">
        <Image src="../../public/assets/netflix_logo.png" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default NetflixNavbar

/* <nav className="home-navbar navbar navbar-expand-lg navbar-dark bg-dark-netflix">
    <div class="container-fluid">
      <a class="navbar-brand ml-3" href="/">
        <img src="assets/netflix_logo.png" alt="" id="logo-navbar" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./backoffice.html">
              Back Office
            </a>
          </li>
        </ul>
        <i class="fas fa-search mr-3"></i>
        <p class="pt-3 mr-3">Tigers</p>
        <i class="fas fa-bell mr-3"></i>
        <img id="profile-pic" class="mr-2" src="" alt="profile picture" />
        <i class="fas fa-sort-down"></i>
      </div>
    </div> */
