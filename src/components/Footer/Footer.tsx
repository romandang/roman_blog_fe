import * as React from "react";

const Footer = () => {
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
            <div className='col-md-6'>
              <div className='d-flex text-right text-sm-left align-self-center justify-content-end wow fadeIn animated'>
                <h5 className='mr-15 text-white mb-0 align-self-center'>
                  All you need to build new site
                </h5>
                <button className='btn btn-lg bg-brand-1'>Download Now</button>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Odio suspendisse leo neque iaculis molestie sagittis
                    maecenas aenean eget molestie sagittis.
                  </p>
                  <p>
                    <strong className='color-black'>Address</strong>
                    <br />
                    123 Main Street
                    <br />
                    New York, NY 10001
                  </p>
                  <p>
                    <strong className='color-black'>Phone</strong>
                    <br />
                    (+01) 234 567 89
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
                  <li className='cat-item cat-item-2'>
                    <a href='#'>About me</a>
                  </li>
                  <li className='cat-item cat-item-4'>
                    <a href='#'>Help &amp; Support</a>
                  </li>
                  <li className='cat-item cat-item-5'>
                    <a href='#'>Licensing Policy</a>
                  </li>
                  <li className='cat-item cat-item-6'>
                    <a href='#'>Refund Policy</a>
                  </li>
                  <li className='cat-item cat-item-7'>
                    <a href='#'>Hire me</a>
                  </li>
                  <li className='cat-item cat-item-7'>
                    <a href='#'>Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div
                className='sidebar-widget widget_tagcloud wow fadeIn animated mb-30'
                data-wow-delay='0.2s'
              >
                <div className='widget-header-2 position-relative mb-30'>
                  <h5 className='mt-5 mb-30'>Tagcloud</h5>
                </div>
                <div className='tagcloud mt-50'>
                  <a className='tag-cloud-link' href='category.html'>
                    beautiful
                  </a>
                  <a className='tag-cloud-link' href='category.html'>
                    New York
                  </a>
                  <a className='tag-cloud-link' href='category.html'>
                    droll
                  </a>
                  <a className='tag-cloud-link' href='category.html'>
                    intimate
                  </a>
                  <a className='tag-cloud-link' href='category.html'>
                    loving
                  </a>
                  <a className='tag-cloud-link' href='category.html'>
                    travel
                  </a>
                  <a className='tag-cloud-link' href='category.html'>
                    fighting{" "}
                  </a>
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
