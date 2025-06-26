import React from "react";
import Image from "next/image";

const OurValuesSection = ({ data }) => {
  const { title, subtitle, content, values } = data;

  return (
    <section className="pb-65 position-relative">
          <div className="hr mb-65" />
          <div className="container">
            <div className="row mb-20">
              <div className="col-lg-8">
                <h6 className="text-uppercase font-heading text-muted mb-15">
                  {title}
                </h6>
                <h2 className="font-heading mb-50">{subtitle}</h2>
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </div>
              <div className="col-lg-4 text-right">
                <Image
                  src="/imgs/theme/darts.png"
                  alt="Darts icon"
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <div className="row">
              {values?.map((item) => (
                <div className="col-lg-4" key={item?.id}>
                  <div className="value-box">
                    <Image
                      className="value-icon"
                      src={item?.thumbnail}
                      alt="Rocket icon"
                      width={50}
                      height={50}
                    />
                    <div className="value-content">
                      <h5 className="mb-15">{item?.title}</h5>
                      <p className="font-md">{item?.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  );
};

OurValuesSection.propTypes = {};

export default OurValuesSection;
