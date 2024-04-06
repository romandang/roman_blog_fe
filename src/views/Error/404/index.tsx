import React from "react";

const Page404View = () => {
  return (
    <main className="bg-brand-4">
      <section className="pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <img className="mb-30" src="assets/imgs/theme/404.png" alt="" />
              <h2 className="headline-1 font-heading">Page Not Found</h2>
              <p className="font-lg text-grey-700">
                The link you clicked may be broken or the page may have been
                removed.
                <br /> visit the{" "}
                <a href="index.html">
                  {" "}
                  <strong> Homepage</strong>
                </a>{" "}
                or{" "}
                <a href="page-contact.html">
                  <strong>Contact us</strong>
                </a>{" "}
                about the problem
              </p>
              <form className="mt-50 w-50 m-auto" action="#" id="commentForm">
                <div className="form-group">
                  <input
                    className="form-control bg-white"
                    name="username"
                    id="username"
                    type="text"
                    placeholder="Search..."
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page404View;
