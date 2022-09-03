import React from "react";
import "./requester/footer.css"
// import RoomIcon from '@mui/icons-material/Room';
// import FaxIcon from '@mui/icons-material/Fax';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
function Footer() {
    return (
      <div> 
        <footer class="text-center text-lg-start bg-light text-muted">
            <div class="container text-center text-md-start mt-5 pt-4">
          
              <div class="row mt-3">
            
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            
                  <h6 class="text-uppercase fw-bold mb-4">
                    <i class="fas fa-gem me-3"></i>Food For All
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
                  <h6 class="text-uppercase fw-bold mb-4">
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
              
                  <h6 class="text-uppercase fw-bold mb-4">
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
                  <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                  <p><i class="bi bi-geo-alt-fill"></i> Colombo, Sri Lanka</p>
                  <p>
                  <i class="bi bi-envelope-fill"></i> info@example.com
                  </p>
                  <p><i class="bi bi-phone-fill"></i> + 01 234 567 88</p>
                  <p><i class="bi bi-telephone-fill"></i> + 01 234 567 89</p>
                </div>
              </div>
            </div>

          <div class="text-center p-4">
            © 2022 Copyright    :
            <a class="text-reset fw-bold" href="#"> Y3S2 SPM Project</a>
          </div>
        </footer>

        </div> 
    )
}

export default Footer;