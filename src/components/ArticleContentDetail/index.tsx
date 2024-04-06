import Tags from "@/atoms/Tags";
import React from "react";
import Author from "../Author";
import CommentList from "../CommentList";
import MorePost from "../MorePost";

const ArticleContentDetail = () => {
  return (
    <>
      <div className="excerpt mb-30">
        <p>
          Gosh jaguar ostrich quail one excited dear hello and bound and the and
          bland moral misheard roadrunner flapped lynx far that and jeepers
          giggled far and far bald that roadrunner python inside held shrewdly
          the manatee.
        </p>
      </div>
      <div className="entry-main-content wow fadeIn animated">
        <p>
          Fretful human far recklessly while caterpillar well a well blubbered
          added one a some far whispered rampantly whispered while irksome far
          clung irrespective wailed more rosily and where saluted while black
          dear so yikes as considering recast to some crass until.
        </p>
        <hr className="wp-block-separator is-style-dots" />
        <p>
          Thanks sniffed in hello after in foolhardy and some far purposefully
          much one at the much conjointly leapt skimpily that quail sheep some
          goodness <a href="#">nightingale</a> the instead exited expedient up
          far ouch mellifluous altruistic and and lighted more instead much when
          ferret but the.
        </p>
        <figure className="wp-block-gallery columns-3 wp-block-image">
          <ul className="blocks-gallery-grid">
            <li className="blocks-gallery-item">
              <a href="#">
                <img
                  className="border-radius-5"
                  src="assets/imgs/news/thumb-2.jpg"
                  alt=""
                />
              </a>
            </li>
            <li className="blocks-gallery-item">
              <a href="#">
                <img
                  className="border-radius-5"
                  src="assets/imgs/news/thumb-3.jpg"
                  alt=""
                />
              </a>
            </li>
            <li className="blocks-gallery-item">
              <a href="#">
                <img
                  className="border-radius-5"
                  src="assets/imgs/news/thumb-4.jpg"
                  alt=""
                />
              </a>
            </li>
          </ul>
          <figcaption>
            {" "}
            <i className="ti-credit-card mr-5" />
            Image credit: Behance{" "}
          </figcaption>
        </figure>
        <hr className="section-divider" />
        <p>
          Yet more some certainly yet alas abandonedly whispered{" "}
          <a href="#">intriguingly</a>
          <sup>
            <a href="#">[2]</a>
          </sup>{" "}
          well extensive one howled talkative admonishingly below a rethought
          overlaid dear gosh activated less <a href="#">however</a> hawk yet oh
          scratched ostrich some outside crud irrespective lightheartedly and
          much far amenably that the elephant since when.
        </p>
        <h2>The Guitar Legends</h2>
        <p>
          Furrowed this in the upset <a href="#">some across</a>
          <sup>
            <a href="#">[3]</a>
          </sup>{" "}
          tiger oh loaded house gosh whispered <a href="#">faltering alas</a>
          <sup>
            <a href="#">[4]</a>
          </sup>{" "}
          ouch cuckoo coward in scratched undid together bit fumblingly so
          besides salamander heron during the jeepers hello fitting jauntily
          much smoothly globefish darn blessedly far so along bluebird leopard
          and.
        </p>
        <blockquote>
          <p>
            Integer eu faucibus <a href="#">dolor</a>
            <sup>
              <a href="#">[5]</a>
            </sup>
            . Ut venenatis tincidunt diam elementum imperdiet. Etiam accumsan
            semper nisl eu congue. Sed aliquam magna erat, ac eleifend lacus
            rhoncus in.
          </p>
        </blockquote>
        <p>
          Fretful human far recklessly while caterpillar well a well blubbered
          added one a some far whispered rampantly whispered while irksome far
          clung irrespective wailed more rosily and where saluted while black
          dear so yikes as considering recast to some crass until cow much less
          and rakishly overdrew consistent for by responsible oh one
          hypocritical less bastard hey oversaw zebra browbeat a well.
        </p>
        <h3>Getting Crypto Rich</h3>
        <hr className="wp-block-separator is-style-wide" />
        <div className="wp-block-image">
          <figure className="alignleft is-resized">
            <img
              className="border-radius-5"
              src="assets/imgs/news/news-7.jpg"
            />
            <figcaption>
              {" "}
              And far contrary smoked some contrary among stealthy{" "}
            </figcaption>
          </figure>
        </div>
        <p>
          And far contrary smoked some contrary among stealthy engagingly
          suspiciously a cockatoo far circa sank dully lewd slick cracked llama
          the much gecko yikes more squirrel sniffed this and the the much
          within uninhibited this abominable a blubbered overdid foresaw through
          alas the pessimistic.
        </p>
        <p>
          Gosh jaguar ostrich quail one excited dear hello and bound and the and
          bland moral misheard roadrunner flapped lynx far that and jeepers
          giggled far and far bald that roadrunner python inside held shrewdly
          the manatee.
        </p>
        <hr className="section-divider" />
        <p>
          Thanks sniffed in hello after in foolhardy and some far purposefully
          much one at the much conjointly leapt skimpily that quail sheep some
          goodness nightingale the instead exited expedient up far ouch
          mellifluous altruistic and and lighted more instead much when ferret
          but the.
        </p>
        {/*Begin Subcrible*/}
        <div className="border-radius-10 border bg-white mb-30 p-65 wow fadeIn animated text-center">
          <h4 className="mb-0 mt-0">Become a member</h4>
          <p className="font-md text-grey-400">
            Get the latest news right in your inbox. We never spam!
          </p>
          <form
            className="mt-30 d-flex wow fadeIn  animated"
            style={{ visibility: "visible", animationName: "fadeIn" }}
          >
            <input
              type="email"
              className="form-control mr-15"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="btn btn-lg bg-dark text-white d-inline-block"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/*End Subcrible*/}
        <p>
          Yet more some certainly yet alas abandonedly whispered intriguingly
          well extensive one howled talkative admonishingly below a rethought
          overlaid dear gosh activated less however hawk yet oh scratched
          ostrich some outside crud irrespective lightheartedly and much far
          amenably that the elephant since when.
        </p>
      </div>
      <Tags />
      <Author />
      <CommentList />
      <MorePost />
    </>
  );
};

export default ArticleContentDetail;
