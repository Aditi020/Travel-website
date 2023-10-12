import React from "react";
import styled from "styled-components";
import homevid from "../Assets/heroc.mp4";
export default function Hero() {
  return (
    <Section id="hero">
      <div className="background">
        <video src={homevid} muted autoPlay loop type="video/mp4"></video>
        {/* <img src={homeImage} alt="image/png"></img> */}
      </div>
      <div className="content">
        <div className="title">
          <h1>Let's Explore Together</h1>
          <p>
            Travel the world like never before and get better taste! <br />
            Don't wait until tomorrow. discover your adventure now and feel the sensation of closeness to nature around you, to get the best of your adventure.
          </p>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="">Where you want to go</label>
            <input type="text" placeholder="Search Your location" />
          </div>
          <div className="container">
            <label htmlFor="">Check-in</label>
            <input type="date" />
          </div>
          <div className="container">
            <label htmlFor="">Check-out</label>
            <input type="date" />
          </div>
          <button>Explore Now</button>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;

  // .background {
  //   height: 100%;
  //   img {
  //     width: 100%;
  //     filter: brightness(60%);
  //   }

    .background {
    height: 100%;
    video {
      // height: 100%;
      object-fit: cover;
      width: 100%;
      filter: brightness(80%);
      height:50%;
    }
  }
    .content {

    overflow: auto; 
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {
      color: white;
      h1 {
      text-transform: uppercase;
        font-size: 2.6rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.1rem;
      }
    }
    .search {
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #1b423aeb;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
          }

          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        padding: 1rem;
        cursor: pointer;
        border-radius: 0.3rem;
        border: none;
        color: white;
        background-color: #e3c48c;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #c2964f;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;
    .background {
      background-color: #ead2aaab;
      // img {
      //   height: 100%;
      // }
       video {
      height: 100%;
      object-fit: cover;
    }
    }
    .content {overflow: auto; 
      .title {
        h1 {
          font-size: 2rem;
        }
        p {
          display:none;
          // font-size: 0.8rem;
          // padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        /* padding: 0; */
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
        /* display: none; */
      }
    }
  }
`;
