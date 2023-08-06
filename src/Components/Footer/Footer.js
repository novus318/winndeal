import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import "./footer.css";
import React from "react";
import Logo from '../../Images/logo-color.png'

function Footer() {
  const Location = () => {
    window.open("https://goo.gl/maps/Ja7wtrVrpMZC6xHi6");
  };
  const phoneNumber = "+971563017029";
  const emailAddress = "support@winndeal.com";
  return (
    <div>
      <MDBFooter className="footer" color="white">
        <MDBContainer className="p-2">
          <section className="mb-4 text-center">
            <h2 className="f-head">Our Location</h2>
            <h4 onClick={Location} className="f-p">
              WINN DEAL Office-B19-190 ,Block B SRTI Park, Sharjah - United Arab
              Emirates
              <br />
              TRN : 104073345100003
            </h4>
          </section>

          <section>
            <MDBRow className="justify-content-center m-auto">
              <div className="col-9 mb-3 col-md-3  pe-5 me-5">
                <img src={Logo} alt='logo' className="img-fluid" />
              </div>
              <div className="col-9 mb-3 col-md-4 d-flex">
                <MDBIcon size='3x' onClick={()=>{window.open(`https://wa.me/${phoneNumber}`, "_blank")}} className="me-5 s-icons" fab icon="whatsapp-square" />

                <MDBIcon size='3x' onClick={()=>{window.open('https://www.linkedin.com/company/winndeal/about/?viewAsMember=true')}} className="me-5 s-icons" fab icon="linkedin" />

                <MDBIcon size='3x' onClick={()=>{window.open('https://www.facebook.com/profile.php?id=100093622394715')}} className="s-icons" fab icon="facebook" />
              </div>

              <div className="col-9 mb-3 col-md-4">
                <h5 className="text-uppercase f-head">Contact Us</h5>
                <ul className="list-unstyled mb-0 ">
                  <li className="f-head">Phone : +97143985048</li>
                  <li className="f-head" style={{cursor:'pointer'}} onClick={()=>{window.open(`mailto:${emailAddress}`, "_blank")}}>Email : support@winndeal.com</li>
                </ul>
              </div>
            </MDBRow>
          </section>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          &copy; 2023 Designed & Developed by{" "}
          <span
            className="nizam p-1"
            onClick={()=>{window.open('https://novus318.github.io/')}}
          >
            Muhammed Nizamudheen M
          </span>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;
