import React from "react";
import Image from "next/image";

const OurTeamsSection = ({ data }) => {
  const { title, subtitle, listItem } = data;

  return (
    <section className="pt-65 pb-65 position-relative">
    <div className="bg-square-2" />
    <div className="container">
      <h6 className="text-uppercase font-heading text-muted mb-15">
        {title}
      </h6>
      <h2 className="font-heading mb-50">{subtitle}</h2>
      <div className="row">
        {listItem?.map((item, index) => {
          const className = (() => {
            if (index !== 0) return "col-lg-3 col-md-6 mb-30";
            if (index === item?.length - 1) return "col-lg-3 col-md-6";
            return "col-lg-3 col-md-6 mb-md-30";
          })();
          return (
            <div className={className} key={item?.id}>
              <Image
                className="mb-30"
                src={item?.thumbnail}
                alt="Leo Messi"
                width={200}
                height={200}
              />
              <h5>{item?.title}</h5>
              <p className="font-sm">{item?.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
  );
};

OurTeamsSection.propTypes = {};

export default OurTeamsSection;
