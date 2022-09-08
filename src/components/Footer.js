import React from "react";
import Logo from "./logo-footer.png"
import "./requester/footer.css"

function Footer() {
    return (
      <div> 
<footer class="text-center text-lg-start text-white bg-gradient-secondary">
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div class="me-5 d-none d-lg-block ">
      <span>Get connected with us on social networks :</span>
    </div>

    <div>
      <a href="" class="me-4 text-reset">
        <i class="bi bi-facebook"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="bi bi-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
      <i class="bi bi-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
      <i class="bi bi-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="bi bi-linkedin"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="bi bi-github"></i>
      </a>
    </div>

  </section>

  <section class="">
    <div class="container text-center text-md-start mt-5">
  
      <div class="row mt-3">
    
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
     
          <h6 class="text-reset text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Food For All
          </h6>
          <div className="">
            <img className="img-footer" src={Logo} />
          </div>
        </div>

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
   
          <h6 class="text-reset text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" class="text-reset">test 1</a>
          </p>
          <p>
            <a href="#!" class="text-reset">test 2</a>
          </p>

        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
       
          <h6 class="text-reset text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-reset">test 1</a>
          </p>
          <p>
            <a href="#!" class="text-reset">test 2</a>
          </p>

        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-reset text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="bi bi-geo-alt-fill pe-3"></i> Colombo, Sri Lanka</p>
          <p>
          <i class="bi bi-envelope-fill pe-3"></i> info@example.com
          </p>
          <p><i class="bi bi-phone-fill pe-3"></i> + 01 234 567 88</p>
          <p><i class="bi bi-telephone-fill pe-3"></i> + 01 234 567 89</p>
        </div>
      </div>
    </div>
  </section>


  <div class="text-center p-4">
    © 2022 Copyright    :
    <a class="text-reset fw-bold" href="#"> Y3S2 SPM Project</a>
  </div>
</footer>
</div> 
    )
}

export default Footer;