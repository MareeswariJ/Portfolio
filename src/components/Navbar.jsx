import { Fragment } from "react";

export default function Navigation(){
    return(
        <Fragment>
<nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand Logo" href="#">WEB<strong>DEV</strong></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
    <div class="navbar-nav mx-auto">
      <a class="nav-item nav-link active" href="#home">HOME</a>
      <a class="nav-item nav-link" href="#about">ABOUT</a>
      <a class="nav-item nav-link" href="#services">SERVICES</a>
      <a class="nav-item nav-link " href="#projects">PROJECT</a>
      <a class="nav-item nav-link " href="#contact">CONTACT</a>

    </div>
  </div>
</nav>
     </Fragment>
    )
}