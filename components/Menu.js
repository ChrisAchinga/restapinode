const Menu = () => {
  return (
    <div id='menu' className='menubar'>
      <nav className='navbar navbar-fixed-top'>
        <div className='container'>
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle collapsed'
              data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'
              aria-expanded='false'
            >
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <a className='navbar-brand' href='#menu'>
              Chris<i className='flaticon-cursor'></i>Dev
            </a>
          </div>
          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div
            className='collapse navbar-collapse'
            id='bs-example-navbar-collapse-1'
          >
            <ul className='nav navbar-nav navbar-right menu'>
              <li>
                <a href='#skills'>Skills</a>
              </li>
              <li>
                <a href='#process'>Process</a>
              </li>
              <li>
                <a href='#experience'>Experience</a>
              </li>
              <li>
                <a href='#portfolio' className='menu-color'>
                  Portfolio
                </a>
              </li>
              <li>
                <a href='#review' className='menu-color'>
                  Testimonials
                </a>
              </li>
              <li>
                <a href='#blog' className='menu-color'>
                  Blog
                </a>
              </li>
              <li>
                <a href='#contact' className='menu-color'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Menu
