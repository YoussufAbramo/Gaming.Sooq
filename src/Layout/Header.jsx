import React from 'react'

export default function Header() {

  return (
    <>
      <header>
        <nav
          className="navbar navbar-expand-lg fixed-top shadow-lg border-bottom border-light-subtle p-0 bg-opacity-90 bg-dark text-light">
          <div className="container">
            <a className="navbar-brand mx-0 p-0 pe-4" href="#"><img src="imgs/gaming-sooq-discord.png" width="120" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse border-start border-secondary" id="navbarSupportedContent">
              <div className="d-flex flex-column w-100">
                <div id="top_header" className="d-flex justify-content-between align-items-baseline ps-3">
                  <div className="div_welcome py-3">
                    <span className="fs-6">Welcome to <b className="text-primary">Gaming Sooq</b></span>
                  </div>
                  <div className="search py-3">
                    <form className="d-flex m-0 position-relative" role="search">
                      <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success p-0" type="submit">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </button>
                    </form>
                  </div>
                  <div className="div_become_seller py-3">
                    <a className="btn btn-primary btn_become_seller px-4 py-2" href="">Become A Seller</a>
                  </div>
                  <div id="switchers" className="d-flex">
                    <div id="currency_switcher" className="dropdown switcher px-2 py-4 border-start border-secondary">
                      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i className="fa-solid fa-sterling-sign"></i><span>/</span><i className="fa-solid fa-dollar-sign"></i>
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="?cur=EGP"><i className="fa-solid fa-sterling-sign"></i>EGP</a></li>
                        <li><a className="dropdown-item" href="?cur=USD"><i className="fa-solid fa-dollar-sign"></i>USD</a></li>
                        <li>
                          <a className="dropdown-item" href="#"><i className="fa-solid fa-sterling-sign"></i>EGP</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#"><i className="fa-solid fa-dollar-sign"></i>USD</a>
                        </li>
                      </ul>
                    </div>
                    <div id="lang_switcher" className="dropdown switcher ps-2 py-4 border-start border-secondary">
                      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        {/* <i className="fa-solid fa-language"></i> */}
                        <i className="fa-solid fa-earth-americas"></i>
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/en">English</a></li>
                        <li><a className="dropdown-item" href="/ar">Arabic</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div id="bottom_header"
                  className="d-flex justify-content-between border-top border-secondary z-2 position-relative">
                  <ul className="navbar-nav mb-2 mb-lg-0 text-uppercase ps-3">
                    <li className="nav-item">
                      <a className="nav-link text-center py-3 active" aria-current="page" href="home.php">Home</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link text-center py-3 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Game Coins
                      </a>
                      <ul className="dropdown-menu p-0">
                        <li className="mx-auto">
                          <a className="dropdown-item" href="#">Action</a>
                        </li>
                        <li className="mx-auto">
                          <a className="dropdown-item" href="#">Another action</a>
                        </li>
                        <li className="mx-auto">
                          <a className="dropdown-item" href="#">Something else here</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-center py-3" href="#">Boost Rank</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-center py-3" href="#">Top Up</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-center py-3" href="#">Accounts</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-center py-3" href="#">Items</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-center py-3" href="#">Gears</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-center py-3" href="#">Hacks</a>
                    </li>
                  </ul>
                  <ul id="action_shortcuts" className="d-flex list-unstyled my-auto">
                    <li id="notification" className="ps-3">
                      <a className="action-item text-light" href="#"><i className="fa-regular fa-bell position-relative"></i></a>
                    </li>
                    <li id="wishlist" className="ps-3">
                      <a className="action-item text-light" href="#"><i className="fa-regular fa-heart position-relative"></i></a>
                    </li>
                    <li id="cart" className="ps-3">
                      <a className="action-item text-light" href="#"><i className="fa-regular fa-bookmark position-relative"></i></a>
                    </li>
                    <li id="profile" className="ps-3">
                      <a className="action-item text-light" href="#"><i className="fa-regular fa-user position-relative"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}