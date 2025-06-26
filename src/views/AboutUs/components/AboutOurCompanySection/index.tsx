import React from 'react'
import Image from 'next/image'

const AboutOurCompanySection = ({ data }) => {
  const { title, subtitle, content1, content2, image } = data;

  return (
    <section className="pt-65 pb-65 position-relative">
    <div className="container">
      <h6 className="text-uppercase font-heading text-muted mb-15">
        {title}
      </h6>
      <h2 className="font-heading mb-50">{subtitle}</h2>
      <div className="row mb-30">
        <div className="col-lg-6">
          <div
            dangerouslySetInnerHTML={{
              __html: content1,
            }}
          />
        </div>
        <div className="col-lg-6">
          <div
            dangerouslySetInnerHTML={{
              __html: content2,
            }}
          />
        </div>
      </div>
      <Image
        src={image}
        alt="About image"
        width={1000}
        height={500}
      />
    </div>
    <div className="shape-document">
      <Image
        src="/imgs/theme/document-2.png"
        alt="Document shape"
        width={100}
        height={100}
      />
    </div>
  </section>
  )
}

AboutOurCompanySection.propTypes = {}

export default AboutOurCompanySection