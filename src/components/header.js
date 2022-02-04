import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from '../images/logo.svg';

const Header = () => {

  const menu_items = [
    {
      title: 'About',
      link: '#about',
      is_selected: false
    },
    {
      title: 'Timeline',
      link: '#timeline',
      is_selected: false
    },
    {
      title: 'Challenge Sets',
      link: '#challenge-sets',
      is_selected: false
    },
    {
      title: 'Sponsors',
      link: '#sponsors',
      is_selected: false
    },
    {
      title: 'Organizers',
      link: '#organizers',
      is_selected: false
    },
    // {
    //   title: 'Spotlight',
    //   link: '#spotlight',
    //   is_selected: false
    // }
  ]

  return (
    <header className="has-navbar-fixed-top">
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item navbar-icon" to="/">
            <img src={logo} alt="seneca hackathon" width="100%"/>
          </Link>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            {
              menu_items.map(item => (
                <Link key={item.link} to={item.link} className="navbar-item has-text-weight-semibold">
                  {item.title}
                </Link>
              ))
            }
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
