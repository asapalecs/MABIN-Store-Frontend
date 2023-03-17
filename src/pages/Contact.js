import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlinePhone } from "react-icons/ai";
import {MdEmail} from "react-icons/md";
import {BsFillInfoCircleFill} from "react-icons/bs"

const Contact = () => {
  return (
    <>
      <Meta title={"Mabin | Contact"} />
      <BreadCrumb title="Contact" />
      <div className="contact-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29192.049310385697!2d26.795408585763386!3d45.151287646248676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b15fec117867f7%3A0x32a0e988f8812d04!2sShopping%20City%20Buz%C4%83u!5e0!3m2!1sro!2sro!4v1678873472439!5m2!1sro!2sro"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contacteaza-ne</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nume"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="E-mail"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Telefon"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        cols="30"
                        rows="4"
                        className="form-control w-100"
                        placeholder="Mesaj..."
                      />
                    </div>
                    <div>
                      <button className="button border-0">Trimite</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Luati legatura cu noi</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5"/>
                        <address className="mb-0">Simileasca, Buzau, Romania</address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlinePhone className="fs-5"/>
                        <a href="tel:+40712 345 678">+40712 345 678</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <MdEmail className="fs-5"/>
                        <a href="mailto:asapalecs@gmail.com">asapalecs@gmail.com</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BsFillInfoCircleFill className="fs-5"/>
                        <p className="mb-0">Luni - Vineri (8:00 - 16:00)</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
