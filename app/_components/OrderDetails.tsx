"use client";
import React, { ChangeEvent, useState } from "react";
import styles from "./styles/orderDetails.module.css";

export default function OrderDetails() {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <form action="" className={styles.form}>
        <div className={styles.contact}>
          <label htmlFor="contactInfomation">CONTACT INFORMATION</label>
          <input className={styles.text_input} type="text" placeholder="Email*" required/>
        </div>
        <div className={styles.address}>
          <label htmlFor="shippingInfo">SHIPPING INFORMATION</label>
          <input  className={styles.text_input} type="text" placeholder="Full Name*" required />
          <input  className={styles.text_input} type="text" placeholder="Address*" required />
          <input  className={styles.text_input} type="text" placeholder="Full Name" />
          <div className={styles.city}>
            <input  className={styles.text_input} type="text" placeholder="City*" required/>
            <input  className={styles.text_input} type="text" placeholder="State*" required/>
            <input  className={styles.text_input} type="text" placeholder="Postal Code*" required/>
          </div>
          <input  className={styles.text_input} type="text" placeholder="Country*" required/>
        </div>
        <div className={styles.shipping_container}>
          <span>SHIPPING METHOD</span>
          <label className={styles.shipping}>
            <input
              style={{ height: "fit-content" }}
              type="radio"
              name="options"
              value="Standard Shipping"
              checked={selectedOption === "Standard Shipping"}
              onChange={handleOptionChange}
            />
            <div className={styles.delivery_type}>
              <span className={styles.delivery_type_title}>Standard Shipping</span>
              <span className={styles.delivery_type_description}>Takes 5-7 Business Days</span>
            </div>
          </label>
          <label className={styles.shipping}>
            <input
              style={{ height: "fit-content" }}
              type="radio"
              name="options"
              value="Express Shipping"
              checked={selectedOption === "Express Shipping"}
              onChange={handleOptionChange}
            />
            <div className={styles.delivery_type}>
              <span className={styles.delivery_type_title}>Express Shipping</span>
              <span className={styles.delivery_type_description}>Takes 3-5 Business Days</span>
            </div>
          </label>
          <label className={styles.shipping}>
            <input
              style={{ height: "fit-content" }}
              type="radio"
              name="options"
              value="Overnight Shipping"
              checked={selectedOption === "Overnight Shipping"}
              onChange={handleOptionChange}
            />
            <div className={styles.delivery_type}>
              <span className={styles.delivery_type_title}>Overnight Shipping</span>
              <span className={styles.delivery_type_description}>Next Day Delivery</span>
            </div>
          </label>
        </div>
        <button className={styles.button}>Proceed to buy</button>
      </form>
    </div>
  );
}
