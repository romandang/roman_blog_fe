import React from "react";

const Author = () => {
  return (
    <div className="author-bio mt-50 border-radius-10 bg-white wow fadeIn animated">
      <div className="author-image mb-md-30">
        <a href="page-author.html">
          <img
            src="assets/imgs/authors/author-details.jpg"
            alt=""
            className="avatar"
          />
        </a>
      </div>
      <div className="author-info">
        <h4 className="font-weight-bold mb-20">
          <span className="vcard author">
            <span className="fn">
              <a
                href="page-author.html"
                title="Posted by Barbara Cartland"
                rel="author"
              >
                Barbara Cartland
              </a>
            </span>
          </span>
        </h4>
        <div className="author-description text-muted">
          You should write because you love the shape of Flow and sentences and
          the creation of different words on a page.{" "}
        </div>
        <h6 className="text-grey-400">Social Media</h6>
        <div className="author-social-small">
          <ul className="author-social-icons">
            <li className="author-social-link-facebook">
              <a href="#" target="_blank">
                <i className="elegant-icon social_facebook" />
              </a>
            </li>
            <li className="author-social-link-twitter">
              <a href="#" target="_blank">
                <i className="elegant-icon social_twitter " />
              </a>
            </li>
            <li className="author-social-link-pinterest">
              <a href="#" target="_blank">
                <i className="elegant-icon  social_pinterest " />
              </a>
            </li>
            <li className="author-social-link-instagram">
              <a href="#" target="_blank">
                <i className="elegant-icon social_instagram " />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Author;
