// Bismillahirrahmanirrahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Subhanallah, Elhamdulillah, Allahu Ekber
// La ilahe illallah 
// Allahu Ekber, Allahu Ekber, Allahu Ekber, La ilahe illallah
// Bila Allah Azze ve Celle me ji sunneta Resulullah Muhammed (s.a.v) neqetine, amin rabbal alemin 
// Xeyni Allah tu Xweda tune
import React from "react";

const Footer = () => (
  <footer className="bg-dark text-white pt-4">
    <div className="container text-center text-md-left">
      <div className="row">
        {/* Derbarê Me */}
        <div className="col-md-4 mt-md-0 mt-3">
          <h5 className="text-uppercase font-weight-bold">Derbarê Me</h5>
          <p>
            Ferhenga Mela – Ansîklopedîya Îslamê ya Kurdî. Armanca me belavkirina zanîn, huner û edebiyata Îslamî bi zimanê Kurdî ye. Bi me re bimînin, her roj nûvekirin û agahîyên zêde bibînin.
          </p>
        </div>

        {/* Girêdanên Zû */}
        <div className="col-md-4 mb-md-0 mb-3">
          <h5 className="text-uppercase font-weight-bold">Girêdanên Zû</h5>
          <ul className="list-unstyled">
            <li>
              <a href="/" className="text-white">
                Serû
              </a>
            </li>
            <li>
              <a href="/malper" className="text-white">
                Malper
              </a>
            </li>
            <li>
              <a href="/malper/mmavahi" className="text-white">
                Babêt
              </a>
            </li>
            <li>
              <a href="/login" className="text-white">
                Rêveberî
              </a>
            </li>
          </ul>
        </div>

        {/* Têkilîya Civakî */}
        <div className="col-md-4 mb-md-0 mb-3">
          <h5 className="text-uppercase font-weight-bold">Têkilîya Civakî</h5>
          <ul className="list-unstyled d-flex justify-content-center">
            <li className="mx-2">
              <a href="https://facebook.com" className="text-white" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://twitter.com" className="text-white" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://instagram.com" className="text-white" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="text-center py-3">
      © {new Date().getFullYear()} <span>Ferhenga Mela</span> – Bi destê{" "}
      <a href="https://yekazad.com" className="text-white">
        Yekazad
      </a>{" "}
      hate amadekirin. <br />
      <span>Her tişt bi destûra Xwedê ye.</span>
    </div>
  </footer>
);

export default Footer;