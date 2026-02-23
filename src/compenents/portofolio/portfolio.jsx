import { useState } from "react";
import React from "react";
import lo from "../../assets/smiling-redhaired-boy-illustration_1308-176664.avif";
import log from "../../assets/smiling-young-man-illustration_1308-174669.avif";
import styles from "./portfolio.module.css";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [log, lo, log, lo, log, lo];

  return (
    <>
      <section className="pt-2" style={{ backgroundColor: "#1abc9c" }}>
        <h4 className="text-center fw-bold">PORTFOLIO COMPONENT</h4>

        <div className="d-flex justify-content-center mb-5">
          <span
            style={{
              width: "70px",
              height: "2px",
              backgroundColor: "#2c3e50",
              marginTop: "10px",
            }}
          ></span>
          <i
            className="fa-solid fa-star mt-1 mx-2"
            style={{ fontSize: "10px" }}
          ></i>
          <span
            style={{
              width: "70px",
              height: "2px",
              backgroundColor: "#2c3e50",
              marginTop: "10px",
            }}
          ></span>
        </div>

        <div className="container">
          <div className="row g-3">

            {images.map((img, index) => (
              <div className="col-4" key={index}>
                <div
                  className={styles.portfolioItem}
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={img} className="w-100" />
                  <div className={styles.overlay}>
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {selectedImage && (
        <div className={styles.modal} onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} className={styles.modalImg} />
        </div>
      )}
    </>
  );
}
