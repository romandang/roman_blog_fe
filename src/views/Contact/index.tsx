import React from "react";

const ContactView = () => {
  return (
    <main>
      <section className='pt-65 pb-35 bg-brand-4'>
        <div className='container'>
          <div className='archive-header'>
            <div className='archive-header-title'>
              <h1 className='font-heading mb-30'>Contact</h1>
              <p className='mb-0'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
                <br /> Asperiores non dolor officiis eaque corporis.
              </p>
            </div>
            <div className='breadcrumb'>
              <a href='index.html' rel='nofollow'>
                Home
              </a>
              <span /> Contact
            </div>
          </div>
        </div>
      </section>
      <section className='pt-100 pb-65'>
        <div className='container'>
          <h3 className='font-heading mb-50'>Get in Touch</h3>
          <div className='row'>
            <div className='col-md-8'>
              <form
                className='form-contact comment_form'
                action='#'
                id='commentForm'
              >
                <div className='row'>
                  <div className='col-sm-6'>
                    <div className='form-group'>
                      <input
                        className='form-control'
                        name='name'
                        id='name'
                        type='text'
                        placeholder='Name'
                      />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='form-group'>
                      <input
                        className='form-control'
                        name='email'
                        id='email'
                        type='email'
                        placeholder='Email'
                      />
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='form-group'>
                      <input
                        className='form-control'
                        name='website'
                        id='website'
                        type='text'
                        placeholder='Phone'
                      />
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='form-group'>
                      <textarea
                        className='form-control w-100'
                        name='comment'
                        id='comment'
                        cols={30}
                        rows={9}
                        placeholder='Message'
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <div className='checkbox'>
                    <div className='custome-checkbox'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        name='checkbox'
                        id='createaccount'
                      />
                      <label className='form-check-label label_info fw-700 text-grey-100 font-md'>
                        <span>
                          Save my name, email, and website in this browser for
                          the next time
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <button
                    className='btn btn-lg bg-dark text-white'
                    type='submit'
                  >
                    Finish &amp; Submit
                  </button>
                </div>
              </form>
            </div>
            <div className='col-md-4'>
              <div className='pl-30'>
                <div className='icon-map mb-15 hover-up-3'>
                  <img src='/imgs/theme/svg/map.svg' alt='' />
                </div>
                <h5 className='mb-50'>
                  Lorem 142 Str, 2352, Ipsum
                  <br /> State, USA
                </h5>
                <div className='icon-map mb-15 hover-up-3'>
                  <img src='/imgs/theme/svg/map.svg' alt='' />
                </div>
                <h5>
                  Lorem 142 Str, 2352, Ipsum
                  <br /> State, USA
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pb-65'>
        <div className='hr mb-65' />
        <div className='container'>
          <h6 className='text-uppercase font-heading text-muted mb-15'>
            Address
          </h6>
          <h2 className='font-heading mb-30'>Our Offices</h2>
          <p className='w-50 mb-50'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            odio delectus, odit tempora.
          </p>
          <div className='row'>
            <div className='col-lg-4 col-md-6 mb-40 wow fadeIn animated'>
              <div className='post-card-1 border-radius-10 hover-up'>
                <div
                  className='post-thumb thumb-overlay img-hover-slide position-relative'
                  style={{
                    backgroundImage: "url(/imgs/news/office-1.png)",
                  }}
                >
                  <a className='img-link' href='single.html' />
                  <div className='post-meta-1 mb-20'>
                    <a
                      href='category.html'
                      className='tag-category bg-success shadown-1 text-dark button-shadow hover-up-3'
                    >
                      Head Office
                    </a>
                  </div>
                </div>
                <div className='post-content p-30'>
                  <div className='post-card-content'>
                    <h5 className='post-title mb-15'>
                      <a href='single.html'>Paris, France</a>
                    </h5>
                    <p className='font-md'>
                      Lorem 142 Str, 2352, Ipsum State, USA <br />
                      Phone: (+01) 234 567
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mb-40 wow fadeIn animated'>
              <div className='post-card-1 border-radius-10 hover-up'>
                <div
                  className='post-thumb thumb-overlay img-hover-slide position-relative'
                  style={{
                    backgroundImage: "url(/imgs/news/office-2.png)",
                  }}
                >
                  <a className='img-link' href='single.html' />
                  <div className='post-meta-1 mb-20'>
                    <a
                      href='category.html'
                      className='tag-category bg-info shadown-1 text-dark button-shadow hover-up-3'
                    >
                      Support
                    </a>
                  </div>
                </div>
                <div className='post-content p-30'>
                  <div className='post-card-content'>
                    <h5 className='post-title mb-15'>
                      <a href='single.html'>Paris, France</a>
                    </h5>
                    <p className='font-md'>
                      Lorem 142 Str, 2352, Ipsum State, USA <br />
                      Phone: (+01) 234 567
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mb-40 wow fadeIn animated'>
              <div className='post-card-1 border-radius-10 hover-up'>
                <div
                  className='post-thumb thumb-overlay img-hover-slide position-relative'
                  style={{
                    backgroundImage: "url(/imgs/news/office-3.png)",
                  }}
                >
                  <a className='img-link' href='single.html' />
                  <div className='post-meta-1 mb-20'>
                    <a
                      href='category.html'
                      className='tag-category bg-warning shadown-1 text-dark button-shadow hover-up-3'
                    >
                      Factory
                    </a>
                  </div>
                </div>
                <div className='post-content p-30'>
                  <div className='post-card-content'>
                    <h5 className='post-title mb-15'>
                      <a href='single.html'>Paris, France</a>
                    </h5>
                    <p className='font-md'>
                      Lorem 142 Str, 2352, Ipsum State, USA <br />
                      Phone: (+01) 234 567
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactView;
