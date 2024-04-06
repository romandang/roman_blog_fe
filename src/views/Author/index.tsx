import React from "react";

const AuthorView = () => {
  return (
    <main>
      <section className="pt-65 pb-65">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center mb-md-30">
              <h2 className="display-2 mb-15 font-heading">Alice Shane</h2>
              <p className="font-lg text-grey-400 mb-30">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
                recusandae nobis ullam. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Iusto repellat totam delectus. Neque, cumque
                itaque, veritatis assumenda quis officia.
              </p>
              <ul className="author-social social-network d-inline-block list-inline">
                <li className="list-inline-item social-fb">
                  <a href="#" target="_blank" title="Facebook">
                    <i className="elegant-icon social_facebook" />
                  </a>
                </li>
                <li className="list-inline-item social-tw">
                  <a href="#" target="_blank" title="Tweet now">
                    <i className="elegant-icon social_twitter" />
                  </a>
                </li>
                <li className="list-inline-item social-ins">
                  <a href="#" target="_blank" title="Pin it">
                    <i className="elegant-icon social_instagram" />
                  </a>
                </li>
                <li className="list-inline-item social-pi">
                  <a href="#" target="_blank" title="Pin it">
                    <i className="elegant-icon social_pinterest" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <img src="assets/imgs/authors/author-page.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="recent-posts pt-65 pb-30 position-relative">
        <div className="bg-square-2" />
        <div className="container">
          <div className="header-title mb-65">
            <h3 className="font-heading mb-0 wow fadeIn animated">
              Posted by <span className="text-brand">Alice</span>
            </h3>
            <span className="sub-header-title text-grey-400 wow fadeIn animated">
              136 articles, 25 gallery
            </span>
          </div>
          <div className="row">
            <article className="col-lg-6 col-md-6 mb-30 wow fadeIn animated">
              <div className="post-card-1 large border-radius-10 hover-up">
                <div
                  className="post-thumb thumb-overlay img-hover-slide position-relative"
                  style={{
                    backgroundImage: "url(assets/imgs/news/news-8.jpg)",
                  }}
                >
                  <a className="img-link" href="single.html" />
                  <div className="post-meta-1 mb-20">
                    <a
                      href="category.html"
                      className="tag-category bg-info shadown-1 text-dark button-shadow hover-up-3"
                    >
                      Travel
                    </a>
                  </div>
                </div>
                <div className="post-content p-30">
                  <div className="post-card-content">
                    <div className="entry-meta meta-1 float-left font-md mb-10">
                      <span className="post-on has-dot">27 August</span>
                    </div>
                    <h4 className="post-title mb-30">
                      <a href="single.html">
                        After a Few Dates, They Traveled to the Other Side of
                        the World
                      </a>
                    </h4>
                    <div className="post-meta-2 font-md">
                      <a href="page-author.html">
                        <img src="assets/imgs/authors/author.jpg" alt="" />
                        <span className="author-namge">Kate Adie</span>
                      </a>
                      <span className="time-to-read has-dot">
                        6 mins to read
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="col-lg-6 col-md-6 mb-30 wow fadeIn animated">
              <div className="post-card-1 large border-radius-10 hover-up">
                <div
                  className="post-thumb thumb-overlay img-hover-slide position-relative"
                  style={{
                    backgroundImage: "url(assets/imgs/news/news-5.jpg)",
                  }}
                >
                  <a className="img-link" href="single.html" />
                  <div className="post-meta-1 mb-20">
                    <a
                      href="category.html"
                      className="tag-category bg-brand-1 shadown-1 text-dark button-shadow hover-up-3"
                    >
                      Food
                    </a>
                  </div>
                  <span className="top-right-icon bg-white">
                    <i className="elegant-icon icon_ribbon_alt " />
                  </span>
                </div>
                <div className="post-content p-30">
                  <div className="post-card-content">
                    <div className="entry-meta meta-1 float-left font-md mb-10">
                      <span className="post-on has-dot">18 August</span>
                    </div>
                    <h4 className="post-title mb-30">
                      <a href="single.html">
                        5 Kinds of Food-Shamers You Will Encounter (and How to
                        Deal){" "}
                      </a>
                    </h4>
                    <div className="post-meta-2 font-md">
                      <a href="page-author.html">
                        <img src="assets/imgs/authors/author-2.jpg" alt="" />
                        <span className="author-namge">John Lennon</span>
                      </a>
                      <span className="time-to-read has-dot">
                        16 mins to read
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="col-lg-6 col-md-6 mb-0 wow fadeIn animated">
              <div className="post-card-1 large border-radius-10 hover-up">
                <div
                  className="post-thumb thumb-overlay img-hover-slide position-relative"
                  style={{
                    backgroundImage: "url(assets/imgs/news/news-6.jpg)",
                  }}
                >
                  <a className="img-link" href="single.html" />
                  <div className="post-meta-1 mb-20">
                    <a
                      href="category.html"
                      className="tag-category bg-dark  shadown-1 text-white button-shadow hover-up-3"
                    >
                      Magazine
                    </a>
                  </div>
                </div>
                <div className="post-content p-30">
                  <div className="post-card-content">
                    <div className="entry-meta meta-1 float-left font-md mb-10">
                      <span className="post-on has-dot">05 September</span>
                    </div>
                    <h4 className="post-title mb-30">
                      <a href="single.html">
                        Runner with Autism Graces the Latest Cover of Women's
                        Running{" "}
                      </a>
                    </h4>
                    <div className="post-meta-2 font-md">
                      <a href="page-author.html">
                        <img src="assets/imgs/authors/author-3.jpg" alt="" />
                        <span className="author-namge">Sarah Harding</span>
                      </a>
                      <span className="time-to-read has-dot">
                        12 mins to read
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="col-lg-6 col-md-6 mb-0 wow fadeIn animated">
              <div className="post-card-1 large border-radius-10 hover-up">
                <div
                  className="post-thumb thumb-overlay img-hover-slide position-relative"
                  style={{
                    backgroundImage: "url(assets/imgs/news/news-7.jpg)",
                  }}
                >
                  <a className="img-link" href="single.html" />
                  <div className="post-meta-1 mb-20">
                    <a
                      href="category.html"
                      className="tag-category bg-danger shadown-1 text-dark button-shadow hover-up-3"
                    >
                      Food
                    </a>
                  </div>
                </div>
                <div className="post-content p-30">
                  <div className="post-card-content">
                    <div className="entry-meta meta-1 float-left font-md mb-10">
                      <span className="post-on has-dot">06 September</span>
                    </div>
                    <h4 className="post-title mb-30">
                      <a href="single.html">
                        10 Snacks a Food Writer Packs for Day Hikes and Car
                        Trips
                      </a>
                    </h4>
                    <div className="post-meta-2 font-md">
                      <a href="page-author.html">
                        <img src="assets/imgs/authors/author-4.jpg" alt="" />
                        <span className="author-namge">Nadine Coyle</span>
                      </a>
                      <span className="time-to-read has-dot">
                        14 mins to read
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <div className="trending position-relative pb-65">
        <div className="container">
          <div className="row">
            <article className="col-lg-4 col-md-6 mb-40 wow fadeIn animated">
              <div className="post-card-1 border-radius-10 hover-up">
                <div
                  className="post-thumb thumb-overlay img-hover-slide position-relative"
                  style={{
                    backgroundImage: "url(assets/imgs/news/news-1.jpg)",
                  }}
                >
                  <a className="img-link" href="single.html" />
                  <div className="post-meta-1 mb-20">
                    <a
                      href="category.html"
                      className="tag-category bg-brand-1 shadown-1 text-dark button-shadow hover-up-3"
                    >
                      Lifestyle
                    </a>
                  </div>
                </div>
                <div className="post-content p-30">
                  <div className="post-card-content">
                    <div className="entry-meta meta-1 float-left font-md mb-10">
                      <span className="post-on has-dot">27 August</span>
                    </div>
                    <h5 className="post-title font-md">
                      <a href="single.html">
                        After a Few Dates, They Traveled to the Other Side of
                        the World
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </article>
            <article className="col-lg-4 col-md-6 mb-40 wow fadeIn animated">
              <div className="post-card-1 border-radius-10 hover-up">
                <div
                  className="post-thumb thumb-overlay img-hover-slide position-relative"
                  style={{
                    backgroundImage: "url(assets/imgs/news/news-2.jpg)",
                  }}
                >
                  <a className="img-link" href="single.html" />
                  <div className="post-meta-1 mb-20">
                    <a
                      href="category.html"
                      className="tag-category bg-primary shadown-1 text-dark button-shadow hover-up-3"
                    >
                      Healthy
                    </a>
                  </div>
                </div>
                <div className="post-content p-30">
                  <div className="post-card-content">
                    <div className="entry-meta meta-1 float-left font-md mb-10">
                      <span className="post-on has-dot">28 August</span>
                    </div>
                    <h5 className="post-title font-md">
                      <a href="single.html">
                        Jessamyn Stanley's 5-Minute Yoga for Beginners
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </article>
            <article className="col-lg-4 col-md-6 mb-40 wow fadeIn animated">
              <div className="post-card-1 border-radius-10 hover-up">
                <div
                  className="post-thumb thumb-overlay img-hover-slide position-relative"
                  style={{
                    backgroundImage: "url(assets/imgs/news/news-3.jpg)",
                  }}
                >
                  <a className="img-link" href="single.html" />
                  <div className="post-meta-1 mb-20">
                    <a
                      href="category.html"
                      className="tag-category bg-warning shadown-1 text-dark button-shadow hover-up-3"
                    >
                      Food
                    </a>
                  </div>
                </div>
                <div className="post-content p-30">
                  <div className="post-card-content">
                    <div className="entry-meta meta-1 float-left font-md mb-10">
                      <span className="post-on has-dot">02 September</span>
                    </div>
                    <h5 className="post-title font-md">
                      <a href="single.html">
                        How an MS Diagnosis Changed My Relationship With Food{" "}
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </article>
            <article className="col-lg-4 col-md-6 wow fadeIn animated">
              <div className="post-card-1 border-radius-10 hover-up">
                <div
                  className="post-thumb thumb-overlay img-hover-slide position-relative"
                  style={{
                    backgroundImage: "url(assets/imgs/news/news-4.jpg)",
                  }}
                >
                  <a className="img-link" href="single.html" />
                  <div className="post-meta-1 mb-20">
                    <a
                      href="category.html"
                      className="tag-category bg-success shadown-1 text-dark button-shadow hover-up-3"
                    >
                      Travel Tips
                    </a>
                  </div>
                </div>
                <div className="post-content p-30">
                  <div className="post-card-content">
                    <div className="entry-meta meta-1 float-left font-md mb-10">
                      <span className="post-on has-dot">05 September</span>
                    </div>
                    <h5 className="post-title font-md">
                      <a href="single.html">
                        Where to Score the Best Travel Deals on Cyber Monday{" "}
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </article>
            <article className="col-lg-4 col-md-6 wow fadeIn animated">
              <div className="post-card-1 border-radius-10 hover-up">
                <div
                  className="post-thumb thumb-overlay img-hover-slide position-relative"
                  style={{
                    backgroundImage: "url(assets/imgs/news/news-5.jpg)",
                  }}
                >
                  <a className="img-link" href="single.html" />
                  <div className="post-meta-1 mb-20">
                    <a
                      href="category.html"
                      className="tag-category bg-brand-1 shadown-1 text-dark button-shadow hover-up-3"
                    >
                      Lifestyle
                    </a>
                  </div>
                </div>
                <div className="post-content p-30">
                  <div className="post-card-content">
                    <div className="entry-meta meta-1 float-left font-md mb-10">
                      <span className="post-on has-dot">12 September</span>
                    </div>
                    <h5 className="post-title font-md">
                      <a href="single.html">
                        5 Kinds of Food-Shamers You Will Encounter (and How to
                        Deal){" "}
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </article>
            <article className="col-lg-4 col-md-6 wow fadeIn animated">
              <div className="post-card-1 border-radius-10 hover-up">
                <div
                  className="post-thumb thumb-overlay img-hover-slide position-relative"
                  style={{
                    backgroundImage: "url(assets/imgs/news/news-6.jpg)",
                  }}
                >
                  <a className="img-link" href="single.html" />
                  <div className="post-meta-1 mb-20">
                    <a
                      href="category.html"
                      className="tag-category bg-danger shadown-1 text-dark button-shadow hover-up-3"
                    >
                      Book
                    </a>
                  </div>
                </div>
                <div className="post-content p-30">
                  <div className="post-card-content">
                    <div className="entry-meta meta-1 float-left font-md mb-10">
                      <span className="post-on has-dot">18 September</span>
                    </div>
                    <h5 className="post-title font-md">
                      <a href="single.html">
                        12 Best Books to Read at the Beach This Summer{" "}
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="text-center mt-65">
            <button className="btn btn-lg bg-dark text-white d-inline-block">
              Load more posts
            </button>
          </div>
        </div>
      </div>
      <section className="newsletter bg-brand-3 pt-100 pb-100">
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-lg-8">
                <div className="header-title-2 mb-65">
                  <h4 className="mb-0 text-grey-400 wow fadeIn animated">
                    <img src="assets/imgs/theme/svg/send.svg" alt="" />
                    <span>Subscribe</span>
                  </h4>
                  <h3 className="font-heading wow fadeIn animated">
                    to Our Newsletter
                  </h3>
                </div>
                <form className="form-subcriber mt-30 d-flex wow fadeIn animated">
                  <input
                    type="email"
                    className="form-control bg-white font-small"
                    placeholder="Enter your email"
                  />
                  <button className="btn bg-dark text-white" type="submit">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <img
              src="assets/imgs/theme/sketch-1.png"
              alt=""
              className="sketch-1 wow fadeIn animated"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AuthorView;
