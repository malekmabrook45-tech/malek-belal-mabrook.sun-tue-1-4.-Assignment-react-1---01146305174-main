import React from 'react'
import styles from "./about.module.css"
export default function About() {
  return <>
  <div className={`${styles.about}`}>
    <div className="container">
        <div className="row">
            <div className="col-12">
              
               <h3 className='text-center text-white fw-bold'>ABOUT COMPENENT</h3>
            </div>
              <div className="col-12 d-flex justify-content-center align-items-center my-2">
                          <div className={styles.line}></div>
                          <i className={`fa-solid fa-star ${styles.star}`}></i>
                          <div className={styles.line}></div>
                        </div>

                        <div className="col-6">
                            <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>

                        <div className="col-6 ">
                            <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
        </div>
    </div>
  </div>
  </>
}
