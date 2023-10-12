import React from "react";
import styled from "styled-components";
import service1 from "../Assets/service1.png";
import service2 from "../Assets/service2.png";
import service3 from "../Assets/service3.png";
import service4 from "../Assets/service4.png";

export default function Services() {
    const data = [
        {
            icon: service1,
            title: "Get Best Prices",
            subTitle:
                "Pay through our application and save thousands and get amazing rewards.",
        },
        {
            icon: service2,
            title: "Visa and Documentation",
            subTitle:
                "Don't sweat the paperwork – we'll help you navigate the visa maze with ease!",
        },
        {
            icon: service3,
            title: "Flexible Payment",
            subTitle:
                " Enjoy the flexible payment through our app and get rewards on every payment.",
        },
        {
            icon: service4,
            title: "24/7 Customer Support",
            subTitle:
                "We've got your back around the clock, so you can travel worry-free, day or night.",
        },

    ];
    return (
        <Section id="services">
            {data.map((service, index) => {
                return (
                    <div className="service">
                        <div className="icon">
                            <img src={service.icon} alt="" />
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.subTitle}</p>
                    </div>
                );
            })}
        </Section>
    );
}

const Section = styled.section`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  .service {
    cursor:pointer;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: #6bcfb813;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        height: 2.8rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
