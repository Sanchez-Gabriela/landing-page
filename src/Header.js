import React from 'react';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import heroImage from './hero-image.png';
import logoWhite from './logo-white.png';

const headerStyle = css`
  background: #413e65;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  display: block;
  > * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const navStyle = css`
  a {
    text-decoration: none;
    margin-right: 50px;
    font-size: 16px;
    color: white;
  }
  background: #413e65;
  font-family: Arial;
  flex-basis: auto;
  align-items: center;
  padding: 10px 0 10px 0;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    flex-flow: row nowrap;
  }
`;

const buttonStyle = css`
  border: 1px solid #f0544c;
  background-color: #f0544c;
  border-radius: 4px;
  font-size: 16px;
  color: white;
  padding: 10px;
  font-family: Arial;
  max-width: 140px;
  height: 45px;
`;

const containerStyle = css`
  padding-right: 30px;
  padding-left: 30px;
  width: 100%;
  display: block;
  background: #413e65;
  margin-top: 10px;
  * {
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
  }
`;

const heroArea = css`
  padding-bottom: 200px;
  background: #413e65;
`;

const row = css`
  position: relative;
  margin-top: 70px;
  font-family: 'CircularStd', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  display: flex;
  flex-direction: row;
  background: #413e65;
`;

const column = css`
  position: static;
  order: 2;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const imgStyle = css`
  max-width: 100%;
  min-width: 100%;
  vertical-align: middle;
  border-style: none;
  margin: 70px;
`;

const colText = css`
  padding-right: 60px;
  padding-top: 118px;
  display: block;
  line-height: 1.5;
  background: #413e65;
  z-index: 1;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const container2 = css`
  width: 100%;
`;
const headerH1 = css`
  color: white;
  font-size: 76px;
  line-height: 84px;
`;
const paragraph = css`
  font-size: 21px;
  font-weight: 300;
  letter-spacing: -0.66px;
  line-height: 39px;
  color: #f8f9fa;
  margin-top: 0;
  margin-bottom: 1rem;
  display: block;
  padding: 0 0 16px;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const heroButton = css`
  width: 252px;
  height: 60px;
  border-radius: 5px;
  border: 1px solid #f0544c;
  background-color: #f0544c;
  color: #fff;
  display: inline-flex;
  align-items: center;
  position: relative;
  z-index: 1;
  overflow: hidden;
  a {
    text-decoration: none;
    color: #fff;
  }
  display: flex;
  align-items: center;
  width: 200px;
  border: 1px solid #c31a12;
  background: #f04037;
  color: #ffffff;
  font-family: 'CircularStd', sans-serif;
  font-size: 21px;
  font-weight: 500;
  letter-spacing: -0.66px;
`;
export default function Header() {
  return (
    <>
      <header className="site-header" css={headerStyle}>
        <div className="container" css={containerStyle}>
          <nav className="navbar" css={navStyle}>
            <div className="brand-logo">
              <img src={logoWhite} alt="logo-Omega" />
            </div>
            <div className="navbar">
              <a href="#a">Demos</a>
              <a href="#a">Pages</a>
              <a href="#a">Support</a>
            </div>
            <button css={buttonStyle}>Get Started</button>
          </nav>
        </div>
      </header>
      <div className="hero-area" css={heroArea}>
        <div className="container" style={container2}>
          <div className="row position-relative" css={row}>
            <div className="column" css={column}>
              <div className="hero-image" css={imgStyle}>
                <img src={heroImage} alt="aos-animate" />
              </div>
            </div>
            <div className="colText" css={colText}>
              <h1 css={headerH1}>Get your next landing page.</h1>
              <p css={paragraph}>
                Create custom landing pages with Omega that convert more
                visitors than any website. With lots of unique blocks, you can
                easily build a page without coding.
              </p>
              <div className="heroButton" css={heroButton}>
                <a href="#a">Start 14 days Trial</a>
              </div>
              <span>No credit card required</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
