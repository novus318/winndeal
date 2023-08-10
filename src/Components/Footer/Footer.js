import {
  MDBFooter,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import "./footer.css";
import React from "react";
import COD from '../../Images/cash-on-delivery.png'
import Bank from '../../Images/transfer.png'
import Card from '../../Images/atm-card.png'
import Loan from '../../Images/loan.png'
function Footer() {
  const Location = () => {
    window.open("https://goo.gl/maps/Ja7wtrVrpMZC6xHi6");
  };
  const phoneNumber = "+971563017029";
  const emailAddress = "support@winndeal.com";
  return (
    <div>
      <div className="shadow-overlay"></div>
      <MDBFooter className="footer" color="white">
        <section className="text-center col-12 pt-4 cotainer-fluid">
          <h2 className="f-head">WINNDEAL</h2>
          <h5 className="f-p">We deliver cutting-edge IT solutions tailored to your business needs in UAE,<br/>Our team of experts is committed to providing top-notch services that drive results</h5>
        </section>
        <div className="container-fluid">
          <section className="mt-4">
            <MDBRow className="justify-content-center m-auto">
              <div className="col-11 mb-2 col-md-3 container-fluid">
              <h5 className="text-uppercase f-head">Contact Us</h5>
                <ul className="list-unstyled mb-0 ">
                  <li className="f-head">Phone : +97143985048</li>
                  <li className="f-head" style={{cursor:'pointer'}} onClick={()=>{window.open(`mailto:${emailAddress}`, "_blank")}}>Email : support@winndeal.com</li>
                  <li className="f-head" onClick={Location}>Office-B19-190 ,Block B
SRTI Park, Sharjah - United Arab Emirates</li>
                </ul>
              </div>
              <div className="col-12 col-md-4 mt-auto mb-auto text-center">
                <MDBIcon size='3x' onClick={()=>{window.open(`https://wa.me/${phoneNumber}`, "_blank")}} className="p-3 s-icons" fab icon="whatsapp-square" />

                <MDBIcon size='3x' onClick={()=>{window.open('https://www.linkedin.com/company/winndeal/about/?viewAsMember=true')}} className="s-icons p-3" fab icon="linkedin" />
                <MDBIcon size='3x' onClick={()=>{window.open('https://www.facebook.com/profile.php?id=100093622394715')}} className="s-icons p-3 " fab icon="facebook" />
                <MDBIcon size='3x' onClick={()=>{window.open('https://www.facebook.com/profile.php?id=100093622394715')}} className="s-icons p-3" fab icon="instagram" />
              </div>
              <div className="col-11 mt-auto mb-auto col-md-4">
                <div className="row col-11 col-md-7  m-auto">
                <h5 className="f-head">We Accept :</h5>
                <img src={COD} alt={COD} className="col-3 mt-3" />
                <img src={Card} alt={Card} className="col-3 mt-3" />
                <img src={Bank} alt={Bank} className="col-3 mt-3" />
                <img src={Loan} alt={Loan} className="col-3 mt-3" />
                </div>
              </div>
            </MDBRow>
          </section>
        </div>

        <div
          className="text-center p-3 mt-2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          &copy; 2023 Designed & Developed by{" "}
          <span
            className="nizam p-1"
            onClick={()=>{window.open('https://novus318.github.io/')}}
          >
            NOVUS
          </span>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;
