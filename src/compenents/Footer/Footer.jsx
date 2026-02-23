import React from 'react'
import styles from "./footer.module.css"

export default function Footer() {
  return <>
      <div className={`${styles.footerSection} py-3 text-white`}>
        <div className="container">
          <div className="row text-center">

            <div className="col-md-4 mt-4">
              <h6 className="fw-bold">LOCATION</h6>
              <p>2215 John Daniel Drive<br />Clark, MO 65243</p>
            </div>

            <div className="col-md-4 mt-4">
              <h6 className="fw-bold">AROUND THE WEB</h6>
              <div className="d-flex justify-content-center gap-3 mt-3">
                <div className={`${styles.icon} icon border border-1 border-white rounded-5`}>
                <i className={`fa-brands fa-facebook `}></i>
                </div>
               <div className={`${styles.icon} icon border border-1 border-white rounded-5`}>
                <i className={`fa-brands fa-twitter `}></i>
                </div>
              <div className={`${styles.icon} icon border border-1 border-white rounded-5`}>
                <i className={`fa-brands fa-linkedin `}></i>
                </div>
              <div className={`${styles.icon} icon border border-1 border-white rounded-5`}>
                <i className={`fa-brands fa-globe `}></i>
                </div>
              </div>
            </div>

            <div className="col-4 mt-4">
              <h6 className="fw-bold">ABOUT FREELANCER</h6>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by Route
              </p>
            </div>

          </div>
        </div>
      </div>

      <p className={`${styles.copySection}  text-center text-white mb-0 py-2`}>
        Copyright © Your Website 2021
      </p>
    </>
  
}

