import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import logo from '../../assets/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg';
import styles from './home.module.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  return <>
  <div className={`${styles.home} home`}>
<div className='container p-5'>
    <div className="row flex-column justify-content-center align-items-center">
        <div className="col-3">
                <img src = {logo} className={`bg-black w-100 text-center `}/>
        </div>
        <div className="col-12 mt-3">
<h4 className='text-center fw-bold text-white'>START FRAMEWORK</h4>
        </div>
           <div className="col-12 d-flex justify-content-center align-items-center my-3">
              <div className={styles.line}></div>
              <i className={`fa-solid fa-star ${styles.star}`}></i>
              <div className={styles.line}></div>
            </div>

     <div className="col-12">
              <p className={`${styles.p} text-center text-white`}>
                Graphic Artist – Web Designer – Illustrator
              </p>
            </div>

    </div>
</div>
  </div>
    </>

}


