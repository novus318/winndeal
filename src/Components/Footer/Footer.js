import {
  MDBFooter,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import "./footer.css";
import React from "react";
import Asus from '../../Images/asus.png'
import Dell from '../../Images/dell .png'
import HP from '../../Images/hp.png'
import Lenovo from '../../Images/lenovo.png'
import MS from '../../Images/ms.png'
import Canon from '../../Images/canon.png'
import IBM from '../../Images/ibm.png'
import Samsung from '../../Images/samsung.png'
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
        <section className="text-center col-12 pt-4">
          <h2 className="f-head">WINNDEAL</h2>
          <h5 className="f-p">We deliver cutting-edge IT solutions tailored to your business needs in UAE,<br/>Our team of experts is committed to providing top-notch services that drive results</h5>
        </section>
        <div className="p-2">
          <section className="mt-4">
            <MDBRow className="justify-content-center m-auto">
              <div className="col-9 mb-2 col-md-3 mb-5">
              <h5 className="text-uppercase f-head">Contact Us</h5>
                <ul className="list-unstyled mb-0 ">
                  <li className="f-head">Phone : +97143985048</li>
                  <li className="f-head" style={{cursor:'pointer'}} onClick={()=>{window.open(`mailto:${emailAddress}`, "_blank")}}>Email : support@winndeal.com</li>
                  <li className="f-head" onClick={Location}>Office-B19-190 ,Block B
SRTI Park, Sharjah - United Arab Emirates</li>
                </ul>
              </div>
              <div className="col-9 mb-3 col-md-4 mt-auto mb-auto text-center pb-4">
                <MDBIcon size='3x' onClick={()=>{window.open(`https://wa.me/${phoneNumber}`, "_blank")}} className="me-5 s-icons" fab icon="whatsapp-square" />

                <MDBIcon size='3x' onClick={()=>{window.open('https://www.linkedin.com/company/winndeal/about/?viewAsMember=true')}} className="s-icons me-5" fab icon="linkedin" />
                <MDBIcon size='3x' onClick={()=>{window.open('https://www.facebook.com/profile.php?id=100093622394715')}} className="s-icons me-5" fab icon="facebook" />
                <MDBIcon size='3x' onClick={()=>{window.open('https://www.facebook.com/profile.php?id=100093622394715')}} className="s-icons" fab icon="instagram" />
              </div>

              <div className="col-9 mb-3 col-md-4 text-center">
                <h3 className="f-head text-uppercase">Dealers</h3>
                <div className="row col-8  m-auto">
                <img src={MS} alt={MS} className="col-3 mt-3" />
                <img src={Lenovo} alt={Lenovo} className="col-3 mt-3" />
                <img src={HP} alt={HP} className="col-3 mt-3" />
                <img src={Dell} alt={Dell} className="col-3 mt-3" />
                <img src={Asus} alt={Asus} className="col-3 mt-3" />
                <img src={Samsung} alt={Samsung} className="col-3 mt-3" />
                <img src={IBM} alt={IBM} className="col-3 mt-3" />
                <img src={Canon} alt={Canon} className="col-3 mt-3" />
                </div>
              </div>
            </MDBRow>
          </section>
        </div>

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
