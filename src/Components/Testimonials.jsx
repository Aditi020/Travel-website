import React from "react";
import styled from "styled-components";
import avatarImage1 from "../Assets/avatarImage1.png";
import avatarImage2 from "../Assets/avatarImage2.jpg";
import avatarImage3 from "../Assets/avatarImage3.jpg";


export default function Testimonials() {
    return (
        <Section id="testimonials">
            <div className="title">
                <h2>Happy Customers</h2>
            </div>
            <div className="testimonials">
                <div className="testimonial">
                    <p>
                        "I had the most amazing experience with this travel service.From the booking process to the trip itself, everything was seamless. I highly recommend it!"
                    </p>
                    <div className="info">
                        <img src={avatarImage1} alt="" />
                        <div className="details">
                            <h4>Jane Smith</h4>
                            <span>USA</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <p>
                        "My family and I had a fantastic time exploring new places, all thanks to this travel website. It's a one-stop-shop for all your travel needs."
                    </p>
                    <div className="info">
                        <img src={avatarImage2} alt="" />
                        <div className="details">
                            <h4>Maria Lopez</h4>
                            <span>Spain</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <p>
                        "I've been using this travel service for years, and they never disappoint. The attention to detail and personalized service keep me coming back."
                    </p>
                    <div className="info">
                        <img src={avatarImage3} alt="" />
                        <div className="details">
                            <h4>Emily</h4>
                            <span>New Zealand</span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
