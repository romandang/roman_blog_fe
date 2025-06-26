import React from 'react'
import Image from 'next/image'

const AboutMeSection = ({ data }) => {
  const { title, subtitle, content, image } = data;

  return (
    <section className="pt-65 pb-65 position-relative">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 align-self-center">
          <h6 className="text-uppercase font-heading text-muted mb-15">
            {title}
          </h6>
          <h2 className="font-heading mb-50">{subtitle}</h2>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <div className="col-lg-6">
          <Image
            src={image}
            alt="About image"
            width={500}
            height={470}
          />
        </div>
      </div>
    </div>
    <div className="shape-arrow">
      <Image
        src="/imgs/theme/arrow.png"
        alt="Arrow shape"
        width={100}
        height={100}
      />
    </div>
  </section>
  )
}

AboutMeSection.propTypes = {}

export default AboutMeSection