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
      <a class="nav-item nav-link active" href="#">HOME</a>
      <a class="nav-item nav-link" href="#">SERVICES</a>
      <a class="nav-item nav-link" href="#">ABOUT</a>
      <a class="nav-item nav-link " href="#">PROJECT</a>
      <a class="nav-item nav-link " href="#">CONTACT</a>

    </div>
  </div>
</nav>
     </Fragment>
    )
}