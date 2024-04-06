import React from "react";

const SidebarWrapper = () => {
  return (
    <aside id='sidebar-wrapper' className='custom-scrollbar offcanvas-sidebar'>
      <button className='off-canvas-close'>
        <img className='svg-icon-24' src='/imgs/theme/svg/close.svg' alt='' />
      </button>
      <div className='sidebar-inner'>
        <div className='sidebar-widget widget-creative-menu'>
          <ul>
            <li>
              <a href='category.html'>
                Design<sup>235</sup>
              </a>
            </li>
            <li>
              <a href='category-big.html'>
                Lifestyle<sup>186</sup>
              </a>
            </li>
            <li>
              <a href='category-grid.html'>
                Travel Tips<sup>98</sup>
              </a>
            </li>
            <li>
              <a href='category-list.html'>
                Healthy<sup>247</sup>
              </a>
            </li>
          </ul>
        </div>
        <div className='offcanvas-copyright mt-65'>
          <h6 className='text-muted text-uppercase mb-20 font-heading text-white'>
            Flow Magazine
          </h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
            suspendisse leo neque.
          </p>
          <p>
            <strong className='color-black'>Address</strong>
            <br />
            123 Main Street
            <br />
            New York, NY 10001
          </p>
          <p>
            <strong className='color-black'>Phone</strong>
            <br />
            (+01) 234 567 89
          </p>
        </div>
      </div>
    </aside>
  );
};

export default SidebarWrapper;
