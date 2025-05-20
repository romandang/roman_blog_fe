import React from "react";
import Link from "next/link";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className="author-bio mt-50 border-radius-10 bg-white wow fadeIn animated">
      <div className="author-image mb-md-30">
        <Link href={author.url}>
          <Image
            src={author.avatar}
            alt="Avarta"
            className="avatar"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <div className="author-info">
        <h4 className="font-weight-bold mb-20">
          <span className="vcard author">
            <span className="fn">
              <Link
                href={author.url}
                title={`Posted by ${author.name}`}
                rel="author"
              >
                {author.name}
              </Link>
            </span>
          </span>
        </h4>
        <div className="author-description text-muted">
          {author.description || "No description"}
        </div>
        <h6 className="text-grey-400">Social Media</h6>
        <div className="author-social-small">
          <ul className="author-social-icons">
            <li className="author-social-link-facebook">
              <Link href="#" target="_blank">
                <i className="elegant-icon social_facebook" />
              </Link>
            </li>
            <li className="author-social-link-twitter">
              <Link href="#" target="_blank">
                <i className="elegant-icon social_twitter " />
              </Link>
            </li>
            <li className="author-social-link-pinterest">
              <Link href="#" target="_blank">
                <i className="elegant-icon  social_pinterest " />
              </Link>
            </li>
            <li className="author-social-link-instagram">
              <Link href="#" target="_blank">
                <i className="elegant-icon social_instagram " />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Author;
