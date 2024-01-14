"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./styles/orderDetails.module.css";
import { store } from "../_store/zustand";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface OrderDetailsProps {
  subtotal: number;
  taxes: number;
  total: number;
  products: Product[];
}

export default function OrderDetails(props:OrderDetailsProps) {
  const router = useRouter();

  const {createOrder} = store()
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [formData, setFormData] = useState<Shipping_Details>({
    email: "",
    name: "",
    address: "",
    city: "",
    state: "",
    postal_code: "",
    country: "",
    shipping_method: "",
    holder_name: "",
    card_number: "",
    expiry_date: "",
    security_code: "",
    subtotal: 0,
    taxes: 0,
    total: 0,
    products: [],
  });

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    setFormData((prevData) => ({
      ...prevData,
      shipping_method: event.target.value,
      subtotal: props.subtotal,
      taxes: props.taxes,
      total: props.total,
      products: props.products
    }));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handdleOnSubmit = () => {
    createOrder(formData)
    console.log(formData)
  };

  return (
    <div>
      <form action="" className={styles.form}>
        <div className={styles.contact}>
          <label htmlFor="contactInfomation">CONTACT INFORMATION</label>
          <input
            className={styles.text_input}
            type="text"
            placeholder="Email*"
            required
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.address}>
          <label htmlFor="shippingInfo">SHIPPING INFORMATION</label>
          <input
            className={styles.text_input}
            type="text"
            placeholder="Full Name*"
            required
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            className={styles.text_input}
            type="text"
            placeholder="Address*"
            required
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          <input className={styles.text_input} type="text" placeholder="" />
          <div className={styles.city}>
            <input
              className={styles.text_input}
              type="text"
              placeholder="City*"
              required
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
            <input
              className={styles.text_input}
              type="text"
              placeholder="State*"
              required
              name="state"
              value={formData.state}
              onChange={handleInputChange}
            />
            <input
              className={styles.text_input}
              type="text"
              placeholder="Postal Code*"
              required
              name="postal_code"
              value={formData.postal_code}
              onChange={handleInputChange}
            />
          </div>
          <input
            className={styles.text_input}
            type="text"
            placeholder="Country*"
            required
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          />
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
              <span className={styles.delivery_type_title}>
                Standard Shipping
              </span>
              <span className={styles.delivery_type_description}>
                Takes 5-7 Business Days
              </span>
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
              <span className={styles.delivery_type_title}>
                Express Shipping
              </span>
              <span className={styles.delivery_type_description}>
                Takes 3-5 Business Days
              </span>
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
              <span className={styles.delivery_type_title}>
                Overnight Shipping
              </span>
              <span className={styles.delivery_type_description}>
                Next Day Delivery
              </span>
            </div>
          </label>
        </div>
        <div className={styles.payment}>
          <label htmlFor="paymentInfo">PAYMENT INFORMATION</label>
          <input
            className={styles.text_input}
            type="text"
            placeholder="Card Holder Name*"
            required
            name="holder_name"
            value={formData.holder_name}
            onChange={handleInputChange}
          />
          <input
            className={styles.text_input}
            type="number"
            placeholder="Card Number*"
            required
            name="card_number"
            value={formData.card_number}
            onChange={handleInputChange}
          />
          <div className={styles.expiry_date}>
            <input
              className={styles.text_input}
              type="text"
              placeholder="Expiration Date*"
              required
              name="expiry_date"
              value={formData.expiry_date}
              onChange={handleInputChange}
            />
            <input
              className={styles.text_input}
              type="text"
              placeholder="Security code*"
              required
              name="security_code"
              value={formData.security_code}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <Link href='/checkout'>
        <button
          onClick={handdleOnSubmit}
          className={styles.button}
        >
          Proceed to buy
        </button>
        </Link>
      </form>
    </div>
  );
}
