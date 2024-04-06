import React from "react";

const Newsletter = () => {
  return (
    <section className='newsletter bg-brand-3 pt-100 pb-100'>
      <div className='container'>
        <div className='position-relative'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='header-title-2 mb-65'>
                <h4 className='mb-0 text-grey-400 wow fadeIn animated'>
                  <img src='/imgs/theme/svg/send.svg' alt='' />
                  <span>Subscribe</span>
                </h4>
                <h3 className='font-heading wow fadeIn animated'>
                  to Our Newsletter
                </h3>
              </div>
              <form className='form-subcriber mt-30 d-flex wow fadeIn animated'>
                <input
                  type='email'
                  className='form-control bg-white font-small'
                  placeholder='Enter your email'
                />
                <button className='btn bg-dark text-white' type='submit'>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <img
            src='/imgs/theme/sketch-1.png'
            alt=''
            className='sketch-1 wow fadeIn animated'
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
