"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type PriceData = {
  currency: string;
  price: string;
  under_dot: string;
  price_desc: string;
};

type ListItem = {
  icon: string;
  text: string;
};

type PricingCardData = {
  sub_title: string;
  title: string;
  price: PriceData;
  list: ListItem[];
};

const SinglePricingPlans = ({ item, index }: { item: PricingCardData; index: number }) => {
  const { sub_title, title, price, list } = item;
  const delay = index * 0.2;
  // Generate slug from title
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  return (
    <>
      <motion.div
        className="price-card-wrapper"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay, duration: 0.6, ease: "easeOut" }}
      >
        <div className="price-card style-1">
          <div className="circle-drop-shadow"></div>

          {/* Price Section */}
          <div className="price">
            <h3 className="price-heading">
              <span className="currency">{price.currency}</span> {price.price}
              <span className="under-dot">{price.under_dot}</span>
            </h3>
            <p className="price-desc">{price.price_desc}</p>
          </div>

          {/* Title Section */}
          <div className="card-title">
            <h3 className="title">{title}</h3>
            <p className="sub-title">{sub_title}</p>
          </div>

          {/* Primary Action */}
          <Link href="/" className="price-label">
            Get Started <i className="fa-solid fa-arrow-right"></i>
          </Link>

          {/* Features List */}
          <div className="list-wrapper">
            <div className="list">
              <ul>
                {list.map((item, idx) => (
                  <li className="price-list-item" key={idx}>
                    <i className={item.icon}></i>
                    <span className="text" style={{userSelect:"auto"}}>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Secondary Action — Stays at Bottom Right */}
          <div className="btn-wrapper ">
            <Link href={`/service-plan/${slug}`} className="te-theme-btn blue-btn">
              View Details
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SinglePricingPlans;
