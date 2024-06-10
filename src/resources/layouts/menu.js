import React from 'react'

const menu = () => {
  return (
    <div>
      <header id="page-topbar">
        <div className="layout-width">
          <div className="navbar-header">
            <div className="d-flex">

              <div className="navbar-brand-box horizontal-logo">
                <a href="index.html" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src="assets/images/logo-sm.png" alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <img src="assets/images/logo-dark.png" alt="" height="17" />
                  </span>
                </a>

                <a href="index.html" className="logo logo-light">
                  <span className="logo-sm">
                    <img src="assets/images/logo-sm.png" alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <img src="assets/images/logo-light.png" alt="" height="17" />
                  </span>
                </a>
              </div>

              <button type="button" className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger" id="topnav-hamburger-icon">
                <span className="hamburger-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>

              <form className="app-search d-none d-md-block">
                <div className="position-relative">
                  <input type="text" className="form-control" placeholder="Search..." autoComplete="off" id="search-options" value="" />
                  <span className="mdi mdi-magnify search-widget-icon"></span>
                  <span className="mdi mdi-close-circle search-widget-icon search-widget-icon-close d-none" id="search-close-options"></span>
                </div>
                <div className="dropdown-menu dropdown-menu-lg" id="search-dropdown">
                  <div data-simplebar style={{ maxHeight: '320px' }}>

                    <div className="dropdown-header">
                      <h6 className="text-overflow text-muted mb-0 text-uppercase">Recent Searches</h6>
                    </div>

                    <div className="dropdown-item bg-transparent text-wrap">
                      <a href="index.html" className="btn btn-soft-secondary btn-sm btn-rounded">how to setup <i className="mdi mdi-magnify ms-1"></i></a>
                      <a href="index.html" className="btn btn-soft-secondary btn-sm btn-rounded">buttons <i className="mdi mdi-magnify ms-1"></i></a>
                    </div>
                    
                    <div className="dropdown-header mt-2">
                      <h6 className="text-overflow text-muted mb-1 text-uppercase">Pages</h6>
                    </div>

                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                      <i className="ri-bubble-chart-line align-middle fs-18 text-muted me-2"></i>
                      <span>Analytics Dashboard</span>
                    </a>

                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                      <i className="ri-lifebuoy-line align-middle fs-18 text-muted me-2"></i>
                      <span>Help Center</span>
                    </a>

                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                      <i className="ri-user-settings-line align-middle fs-18 text-muted me-2"></i>
                      <span>My account settings</span>
                    </a>

                    <div className="dropdown-header mt-2">
                      <h6 className="text-overflow text-muted mb-2 text-uppercase">Members</h6>
                    </div>

                    <div className="notification-list">

                      <a href="javascript:void(0);" className="dropdown-item notify-item py-2">
                        <div className="d-flex">
                          <img src="assets/images/users/avatar-2.jpg" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                          <div className="flex-1">
                            <h6 className="m-0">Angela Bernier</h6>
                            <span className="fs-11 mb-0 text-muted">Manager</span>
                          </div>
                        </div>
                      </a>

                      <a href="javascript:void(0);" className="dropdown-item notify-item py-2">
                        <div className="d-flex">
                          <img src="assets/images/users/avatar-3.jpg" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                          <div className="flex-1">
                            <h6 className="m-0">David Grasso</h6>
                            <span className="fs-11 mb-0 text-muted">Web Designer</span>
                          </div>
                        </div>
                      </a>

                      <a href="javascript:void(0);" className="dropdown-item notify-item py-2">
                        <div className="d-flex">
                          <img src="assets/images/users/avatar-5.jpg" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                          <div className="flex-1">
                            <h6 className="m-0">Mike Bunch</h6>
                            <span className="fs-11 mb-0 text-muted">React Developer</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="text-center pt-3 pb-1">
                    <a href="pages-search-results.html" className="btn btn-primary btn-sm">View All Results <i className="ri-arrow-right-line ms-1"></i></a>
                  </div>
                </div>
              </form>
            </div>

            <div className="d-flex align-items-center">

              <div className="dropdown d-md-none topbar-head-dropdown header-item">
                <button type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle" id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="bx bx-search fs-22"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-search-dropdown">
                  <form className="p-3">
                    <div className="form-group m-0">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                        <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="ms-1 header-item d-none d-sm-flex">
                <button type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle" data-toggle="fullscreen">
                  <i className='bx bx-fullscreen fs-22'></i>
                </button>
              </div>

              <div className="ms-1 header-item d-none d-sm-flex">
                <button type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode">
                  <i className='bx bx-moon fs-22'></i>
                </button>
              </div>

              <div className="dropdown ms-sm-3 header-item topbar-user">
                <button type="button" className="btn" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="d-flex align-items-center">
                    <img className="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg" alt="Header Avatar" />
                    <span className="text-start ms-xl-2">
                      <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">Anna Adame</span>
                      <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">Founder</span>
                    </span>
                  </span>
                </button>
                <div className="dropdown-menu dropdown-menu-end">

                  <h6 className="dropdown-header">Welcome Anna!</h6>
                  <a className="dropdown-item" href="pages-profile.html"><i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Profile</span></a>
                  <a className="dropdown-item" href="apps-chat.html"><i className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Messages</span></a>
                  <a className="dropdown-item" href="apps-tasks-kanban.html"><i className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Taskboard</span></a>
                  <a className="dropdown-item" href="pages-faqs.html"><i className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Help</span></a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="pages-profile.html"><i className="mdi mdi-wallet text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Balance : <b>$5971.67</b></span></a>
                  <a className="dropdown-item" href="pages-profile-settings.html"><span className="badge bg-soft-success text-success mt-1 float-end">New</span><i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Settings</span></a>
                  <a className="dropdown-item" href="auth-lockscreen-basic.html"><i className="mdi mdi-lock text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Lock screen</span></a>
                  <a className="dropdown-item" href="auth-logout-basic.html"><i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span className="align-middle" data-key="t-logout">Logout</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="app-menu navbar-menu">
        <div className="navbar-brand-box">
            <a href="index.html" className="logo logo-dark">
            <span className="logo-sm">
                <img src="assets/images/logo-sm.png" alt="" height="22" />
            </span>
            <span className="logo-lg">
                <img src="assets/images/logo-dark.png" alt="" height="17" />
            </span>
            </a>
            <a href="index.html" className="logo logo-light">
            <span className="logo-sm">
                <img src="assets/images/logo-sm.png" alt="" height="22" />
            </span>
            <span className="logo-lg">
                <img src="assets/images/logo-light.png" alt="" height="17" />
            </span>
            </a>
            <button
            type="button"
            className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
            id="vertical-hover"
            >
            <i className="ri-record-circle-line"></i>
            </button>
        </div>

        <div id="scrollbar">
            <div className="container-fluid">
            <div id="two-column-menu"></div>
            <ul className="navbar-nav" id="navbar-nav">
                <li className="menu-title">
                <span data-key="t-menu">Menu</span>
                </li>
                <li className="nav-item">
                <a
                    className="nav-link menu-link"
                    href="#sidebarDashboards"
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidebarDashboards"
                >
                    <i className="ri-dashboard-2-line"></i>{" "}
                    <span data-key="t-dashboards">Dashboards</span>
                </a>
                <div className="collapse menu-dropdown" id="sidebarDashboards">
                    <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                        <a
                        href="dashboard-analytics.html"
                        className="nav-link"
                        data-key="t-analytics"
                        >
                        {" "}
                        Analytics{" "}
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="dashboard-job.html" className="nav-link">
                        <span data-key="t-job">Job</span>{" "}
                        <span className="badge badge-pill bg-success" data-key="t-new">
                            New
                        </span>
                        </a>
                    </li>
                    </ul>
                </div>
                </li>
            </ul>
            </div>
        </div>

        <div className="sidebar-background"></div>
        </div>

        <div class="vertical-overlay"></div>

        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">
                <div className="row">
                    <div className="col">
                    <div className="h-100">
                        <div className="row mb-3 pb-1">
                        <div className="col-12">
                            <div className="d-flex align-items-lg-center flex-lg-row flex-column">
                            <div className="flex-grow-1">
                                <h4 className="fs-16 mb-1">Good Morning, Anna!</h4>
                                <p className="text-muted mb-0">
                                Here's what's happening with your store today.
                                </p>
                            </div>
                            <div className="mt-3 mt-lg-0">
                                <form action="javascript:void(0);">
                                <div className="row g-3 mb-0 align-items-center">
                                    <div className="col-sm-auto">
                                    <div className="input-group">
                                        <input
                                        type="text"
                                        className="form-control border-0 dash-filter-picker shadow"
                                        data-provider="flatpickr"
                                        data-range-date="true"
                                        data-date-format="d M, Y"
                                        data-deafult-date="01 Jan 2022 to 31 Jan 2022"
                                        />
                                        <div className="input-group-text bg-primary border-primary text-white">
                                        <i className="ri-calendar-2-line"></i>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-auto">
                                    <button type="button" className="btn btn-soft-success">
                                        <i className="ri-add-circle-line align-middle me-1"></i>
                                        Add Product
                                    </button>
                                    </div>
                                    <div className="col-auto">
                                    <button
                                        type="button"
                                        className="btn btn-soft-info btn-icon waves-effect waves-light layout-rightside-btn"
                                    >
                                        <i className="ri-pulse-line"></i>
                                    </button>
                                    </div>
                                </div>
                                </form>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-xl-3 col-md-6">
                            <div className="card card-animate">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                <div className="flex-grow-1 overflow-hidden">
                                    <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                                    Total Earnings
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    <h5 className="text-success fs-14 mb-0">
                                    <i className="ri-arrow-right-up-line fs-13 align-middle"></i>{" "}
                                    +16.24 %
                                    </h5>
                                </div>
                                </div>
                                <div className="d-flex align-items-end justify-content-between mt-4">
                                <div>
                                    <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                                    $
                                    <span className="counter-value" data-target="559.25">
                                        0
                                    </span>
                                    k
                                    </h4>
                                    <a href="" className="text-decoration-underline">
                                    View net earnings
                                    </a>
                                </div>
                                <div className="avatar-sm flex-shrink-0">
                                    <span className="avatar-title bg-soft-success rounded fs-3">
                                    <i className="bx bx-dollar-circle text-success"></i>
                                    </span>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card card-animate">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                <div className="flex-grow-1 overflow-hidden">
                                    <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                                    Orders
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    <h5 className="text-danger fs-14 mb-0">
                                    <i className="ri-arrow-right-down-line fs-13 align-middle"></i>{" "}
                                    -3.57 %
                                    </h5>
                                </div>
                                </div>
                                <div className="d-flex align-items-end justify-content-between mt-4">
                                <div>
                                    <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                                    <span className="counter-value" data-target="36894">
                                        0
                                    </span>
                                    </h4>
                                    <a href="" className="text-decoration-underline">
                                    View all orders
                                    </a>
                                </div>
                                <div className="avatar-sm flex-shrink-0">
                                    <span className="avatar-title bg-soft-info rounded fs-3">
                                    <i className="bx bx-shopping-bag text-info"></i>
                                    </span>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card card-animate">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                <div className="flex-grow-1 overflow-hidden">
                                    <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                                    Customers
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    <h5 className="text-success fs-14 mb-0">
                                    <i className="ri-arrow-right-up-line fs-13 align-middle"></i>{" "}
                                    +29.08 %
                                    </h5>
                                </div>
                                </div>
                                <div className="d-flex align-items-end justify-content-between mt-4">
                                <div>
                                    <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                                    <span className="counter-value" data-target="183.35">
                                        0
                                    </span>
                                    M
                                    </h4>
                                    <a href="" className="text-decoration-underline">
                                    See details
                                    </a>
                                </div>
                                <div className="avatar-sm flex-shrink-0">
                                    <span className="avatar-title bg-soft-warning rounded fs-3">
                                    <i className="bx bx-user-circle text-warning"></i>
                                    </span>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card card-animate">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                <div className="flex-grow-1 overflow-hidden">
                                    <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                                    My Balance
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    <h5 className="text-muted fs-14 mb-0">+0.00 %</h5>
                                </div>
                                </div>
                                <div className="d-flex align-items-end justify-content-between mt-4">
                                <div>
                                    <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                                    $
                                    <span className="counter-value" data-target="165.89">
                                        0
                                    </span>
                                    k
                                    </h4>
                                    <a href="" className="text-decoration-underline">
                                    Withdraw money
                                    </a>
                                </div>
                                <div className="avatar-sm flex-shrink-0">
                                    <span className="avatar-title bg-soft-primary rounded fs-3">
                                    <i className="bx bx-wallet text-primary"></i>
                                    </span>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                
                {/* footer  */}
            </div>
        </div>
    </div>
  )
}

export default menu