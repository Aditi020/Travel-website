import React, { useState } from "react";
import styled from "styled-components";
import D1 from "../Assets/D1.jpg";
import D2 from "../Assets/D2.jpg";
import D3 from "../Assets/D3.jpg";
import D4 from "../Assets/D4.jpg";
import D5 from "../Assets/D5.jpg";
import D6 from "../Assets/D6.jpg";
import info1 from "../Assets/info1.png";
import info2 from "../Assets/info2.png";
import info3 from "../Assets/info3.png";

// D and Ds means Destinatioon


export default function Recommend() {
    const data = [
        {
            // link:"https://www.tripadvisor.in/Tourism-g187147-Paris_Ile_de_France-Vacations.html",
            image: D1,
            title: "Bali, Indonesia",
            subTitle: "Tropical serenity. Pristine beaches, lush jungles, and vibrant culture make Bali a true island paradise.",
            cost: "38,800",
            duration: "Approx 2 night trip",
        },
        {
            image: D2,
            title: "Leh-Ladakh, India",
            subTitle: "Leh-Ladakh, India – where nature flaunts its grandeur. Explore high-altitude deserts, serene monasteries, and rugged mountain beauty.",
            cost: "54,200",
            duration: "Approx 2 night trip",
        },
        {
            image: D3,
            title: "Kyoto, Japan",
            subTitle: "Timeless beauty. Kyoto's historic temples, serene gardens, and traditional tea houses transport you to ancient Japan.",
            cost: "45,500",
            duration: "Approx 2 night trip",
        },
        {
            image: D4,
            title: "Santorini, Greece",
            subTitle: "Whitewashed charm. Iconic blue-domed churches, stunning sunsets, and crystal-clear waters define Santorini",
            cost: "24,100",
            duration: "Approx 1 night trip",
        },
        {
            image: D5,
            title: "Amalfi Coast, Italy",
            subTitle: "Coastal elegance. Dramatic cliffs, quaint villages, and Mediterranean flavors make Amalfi Coast enchanting.",
            cost: "95,400",
            duration: "Approx 2 night 2 day trip",
        },
        {
            image: D6,
            title: "Paris, France",
            subTitle: "The City of Love and Lights. Eiffel Tower, art, and exquisite cuisine await in this romantic paradise.",
            cost: "38,800",
            duration: "Approx 3 night 2 day trip",
        },
    ];

    const packages = [
        "The Weekend Break",
        "The Package Holiday",
        "The Group Tour",
        "Long Term Slow Travel",
    ];

    const [active, setActive] = useState(1);
    return (
        <Section id="recommend">
            <div className="title">
                <h2>Recommended Destination</h2>
            </div>
            <div className="packages">
                <ul>
                    {packages.map((pkg, index) => {
                        return (
                            <li
                                className={active === index + 1 ? "active" : ""}
                                onClick={() => setActive(index + 1)}
                            >
                                {pkg}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="ds">
                {data.map((d) => {
                    return (
                        // <a href={d.link}>
                        <div className="d">
                            <img src={d.image} alt="" />
                            <h3>{d.title}</h3>
                            <p>{d.subTitle}</p>
                            <div className="info">
                                <div className="services">
                                    <img src={info1} alt="" />
                                    <img src={info2} alt="" />
                                    <img src={info3} alt="" />
                                </div>
                                <h4>{d.cost}</h4>
                            </div>
                            <div className="distance">
                                <span>1000 Kms</span>
                                <span>{d.duration}</span>
                            </div>
                        </div>
                        // </a>
                    );
                })}
            </div>
        </Section>
    );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;

    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        cursor: pointer !important;
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #33695f;
      }
    }
  }
  // Ds means Destination
  .ds { 
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    cursor:pointer;
    .d {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #c2f1f459;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color:#5ea7ac;
            width: 2.1rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .ds {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
