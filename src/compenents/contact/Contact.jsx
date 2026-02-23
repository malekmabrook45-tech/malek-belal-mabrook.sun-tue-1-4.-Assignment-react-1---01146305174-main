import React from 'react'
import styles from "./contact.module.css"
export default function Contact() {
  return <>
       <section className="container py-5">
        <h4 className="text-center fw-bold">
          CONATCT SECTION
        </h4>

        <div className="d-flex justify-content-center mb-5">
          <span style={{width: "70px",height: "3px",backgroundColor: "#2c3e50",marginTop: "10px",}}></span>
          <i className="fa-solid fa-star mx-3" style={{ fontSize: "20px" }}></i>
          <span style={{width: "70px",height: "3px",backgroundColor: "#2c3e50",marginTop: "10px",}}></span>
        </div>

        <form className="w-75 mx-auto">
          <input
            type="text"
            placeholder="username"
            className={`${styles.custom} form-control py-1 mb-4 custom`}
          />

          <input
            type="number"
            placeholder="userage"
         className={`${styles.custom} form-control py-1 mb-4 custom`}
          />

          <input
            type="email"
            placeholder="useremail"
          className={`${styles.custom} form-control py-1 mb-4 custom`}
          />

          <input
            type="password"
            placeholder="userPassword"
             className={`${styles.custom} form-control py-1 mb-4 custom`}
          />

          <button className="btn btn-success p-1">
            send Message
          </button>
        </form>
      </section>
    </>
  
}
