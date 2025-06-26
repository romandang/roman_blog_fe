import * as React from "react";
import { navigationData } from "../Header/mock/navigation";

const Footer = ({ footerData }) => {
  return (
    <React.Fragment>
      <footer className='pt-65 bg-dark'>
        <div className='container'>
          <div className='row mb-65'>
            <div className='col-md-6'>
              <div className='logo wow fadeIn animated'>
                <a href='index.html'>
                  {" "}
                  <img src='/imgs/theme/logo-white.svg' alt='' />
                </a>
              </div>
            </div>
            <div className='col-12'>
              <div className='bottom-line mt-40' />
            </div>
          </div>
          <div className='row bottom-area-2'>
            <div className='col-lg-4 col-md-6'>
              <div className='sidebar-widget widget-about wow fadeIn animated mb-30'>
                <div className='widget-header-2 position-relative mb-30'>
                  <h5 className='mt-5 mb-30'>About</h5>
                </div>
                <div className='textwidget'>
                  <p>
                    {footerData?.about}
                  </p>
                  <br/>
                  <p>
                    <strong className='color-black'>Address</strong>
                    <br />
                    {footerData?.address}
                  </p>
                  <br/>
                  <p>
                    <strong className='color-black'>Phone</strong>
                    <br />
                    {footerData?.phone}
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div
                className='sidebar-widget widget_categories wow fadeIn animated mb-30'
                data-wow-delay='0.1s'
              >
                <div className='widget-header-2 position-relative mb-30'>
                  <h5 className='mt-5 mb-30'>Quick link</h5>
                </div>
                <ul className='font-small'>
                  {
                    navigationData.map((item) => (
                      <li className='cat-item cat-item-2' key={item.id}>
                        <a href={item.url}>{item.title}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div
                className='sidebar-widget widget_tagcloud wow fadeIn animated mb-30'
                data-wow-delay='0.2s'
              >
                <div className='widget-header-2 position-relative mb-30'>
                  <h5 className='mt-5 mb-30'>Tags</h5>
                </div>
                <div className='tagcloud mt-50'>
                  {footerData?.tags?.map((item) => (
                    <a className='tag-cloud-link' href={`/category/${item.slug}`} key={item.id}>
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='footer-copy-right pt-30 mt-20 wow fadeIn animated font-md'>
            <p className='float-md-left font-small text-muted'>
              © 2021, Flow - Design by{" "}
              <a href='https://alithemes.com' target='_blank'>
                AliThemes
              </a>
            </p>
            <ul className='social-network d-inline-block list-inline color-white mb-20 float-right'>
              <li className='list-inline-item'>
                <a href='#' target='_blank' title='Facebook'>
                  <i className='elegant-icon social_facebook' />
                </a>
              </li>
              <li className='list-inline-item'>
                <a href='#' target='_blank' title='Tweet now'>
                  <i className='elegant-icon social_twitter' />
                </a>
              </li>
              <li className='list-inline-item'>
                <a href='#' target='_blank' title='Pin it'>
                  <i className='elegant-icon social_pinterest' />
                </a>
              </li>
              <li className='list-inline-item'>
                <a href='#' target='_blank' title='Pin it'>
                  <i className='elegant-icon social_skype' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* End Footer */}
      <div className='dark-mark' />
    </React.Fragment>
  );
};

export default Footer;
