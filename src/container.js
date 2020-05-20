import React from 'react';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import iconLayout from './icon-layout.png';
import iconLayers from './icon-layers.png';
import iconResp from './icon-responsive.png';
import brandLogo1 from './brand-logo-l5-1.png';
import brandLogo2 from './brand-logo-l5-2.png';
import brandLogo3 from './brand-logo-l5-3.png';
import brandLogo4 from './brand-logo-l5-4.png';
import brandLogo5 from './brand-logo-l5-5.png';
import fullPic from './l5-content-image.png';
const featureSectionStyle = css`
  padding-top: 87px;
  padding-bottom: 63px;
  background: #fff;
  border-bottom: 1px solid #eae9f2;
  display: block;
  text-align: left;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const containerStyle = css`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: block;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const rowStyle = css`
  display: flex;
  margin-right: 60px;
  margin-left: 60px;
  font-family: 'CircularStd', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #19191b;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const colAll = css`
  margin-bottom: 30px;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  display: block;
  font-family: 'CircularStd', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #19191b;
  text-align: left;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const widgetIcon = css`
  margin-bottom: 48px;
  display: block;
`;

const containerBrands = css`
  max-width: 960px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

const brandLogos = css`
  justify-content: space-between;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 -30px;
  padding-top: 25px;
  padding-bottom: 30px;
`;

const liContent = css`
  content: '\f00c';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  display: inline-block;
  font-size: 13px;
  width: 30px;
  height: 30px;
  background-color: rgba(84, 84, 212, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 500px;
  color: #5454d4;
  position: relative;
  top: 9px;
  margin-right: 13px;
`;

const contentSection1 = css`
  padding-top: 130px;
  padding-bottom: 130px;
  position: relative;
  display: block;
`;

const container1 = css`
  max-width: 960px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;
const row1 = css`
  justify-content: center;
  display: flex;
  margin-right: -15px;
  margin-left: -15px;
  align-items: center;
`;

const colForText = css`
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
  display: block;
  font-family: 'CircularStd', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #19191b;
  background: #fff;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const contentText = css`
  box-sizing: border-box;
`;

export default function Container() {
  return (
    <>
      <div className="feature-section" css={featureSectionStyle}>
        <div className="container" css={containerStyle}>
          <div clasName="row" css={rowStyle}>
            <div className="col-1" css={colAll}>
              <div className="feature-widget">
                <div className="widget-icon" css={widgetIcon}>
                  <img src={iconLayout} alt="icon-layout" />
                </div>
                <div>
                  <div className="widget-text">
                    <h3>Multiple Modern Layouts</h3>
                    <p>
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page quickly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2" css={colAll}>
              <div className="feature-widget">
                <div className="widget-icon" css={widgetIcon}>
                  <img src={iconLayers} alt="icon-layers" />
                </div>
                <div>
                  <div className="widget-text">
                    <h3>Built with Bootstrap 4</h3>
                    <p>
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page quickly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3" css={colAll}>
              <div className="feature-widget">
                <div className="widget-icon" css={widgetIcon}>
                  <img src={iconResp} alt="icon-responsive" />
                </div>
                <div>
                  <div className="widget-text">
                    <h3>Fully Responsive</h3>
                    <p>
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page quickly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Brand-section">
        <div css={containerBrands}>
          <div css={brandLogos}>
            <div>
              <img src={brandLogo1} alt="brandLogo" />
            </div>
            <div>
              <img src={brandLogo2} alt="brandLogo" />
            </div>
            <div>
              <img src={brandLogo3} alt="brandLogo" />
            </div>
            <div>
              <img src={brandLogo4} alt="brandLogo" />
            </div>
            <div>
              <img src={brandLogo5} alt="brandLogo" />
            </div>
          </div>
        </div>
      </div>
      <div className="content-section-1" css={contentSection1}>
        <div className="container1" css={container1}>
          <div className="row1" css={row1}>
            <div className="colForText" css={colForText}>
              <div className="contentText" css={contentText}>
                <h2>Make beautiful landing pages easily.</h2>
                <p>
                  Create custom landing pages with Omega that converts more
                  visitors than any website. With lots of unique blocks, you can
                  easily build a page without coding.
                </p>
                <ul className="contentList">
                  <li css={liContent}>50+ HTML Elements</li>
                  <li css={liContent}>6 Month Support</li>
                  <li css={liContent}>Bootstrap 4 Framework</li>
                  <li css={liContent}>Lifetime Updates</li>
                </ul>
              </div>
            </div>
            <div className="colForImg">
              <div className="contentForImg">
                <img src={fullPic} alt="inboxPic" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-section-2"></div>
      <div className="testimonial-section"></div>
      <div className="fact-section"></div>
      <div className="pricing-section"></div>
      <div className="faq-section"></div>
      <div className="cta-section"></div>
      <div className="footer-section"></div>
    </>
  );
}
