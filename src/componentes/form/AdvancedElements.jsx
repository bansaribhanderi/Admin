import { FaEye, FaShopify } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const AdvanceElements = () => {
  return (
    <>
      <div className="wrapper">
        <div
          className="preloader flex-column justify-content-center align-items-center"
          style={{ height: "0px" }}
        >
          <img
            className="animation__shake"
            src="dist/img/AdminLTELogo.png"
            alt="AdminLTELogo"
            height={60}
            width={60}
            style={{ display: "none" }}
          />
        </div>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="pushmenu"
                href="/"
                role="button"
              >
                <i className="fas fa-bars" />
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="index3.html" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="/" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="navbar-search"
                href="/"
                role="button"
              >
                <i className="fas fa-search" />
              </a>
            
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="/">
                <i className="far fa-comments" />
                <span className="badge badge-danger navbar-badge">3</span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <a href="/" className="dropdown-item">
                  <div className="media">
                    <img
                      src="dist/img/user1-128x128.jpg"
                      alt="User Avatar"
                      className="img-size-50 mr-3 img-circle"
                    />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        Brad Diesel
                        <span className="float-right text-sm text-danger">
                          <i className="fas fa-star" />
                        </span>
                      </h3>
                      <p className="text-sm">Call me whenever you can...</p>
                      <p className="text-sm text-muted">
                        <i className="far fa-clock mr-1" /> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a href="/" className="dropdown-item">
                  <div className="media">
                    <img
                      src="dist/img/user8-128x128.jpg"
                      alt="User Avatar"
                      className="img-size-50 img-circle mr-3"
                    />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        John Pierce
                        <span className="float-right text-sm text-muted">
                          <i className="fas fa-star" />
                        </span>
                      </h3>
                      <p className="text-sm">I got your message bro</p>
                      <p className="text-sm text-muted">
                        <i className="far fa-clock mr-1" /> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a href="/" className="dropdown-item">
                  <div className="media">
                    <img
                      src="dist/img/user3-128x128.jpg"
                      alt="User Avatar"
                      className="img-size-50 img-circle mr-3"
                    />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        Nora Silvester
                        <span className="float-right text-sm text-warning">
                          <i className="fas fa-star" />
                        </span>
                      </h3>
                      <p className="text-sm">The subject goes here</p>
                      <p className="text-sm text-muted">
                        <i className="far fa-clock mr-1" /> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a href="/" className="dropdown-item dropdown-footer">
                  See All Messages
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="/">
                <i className="far fa-bell" />
                <span className="badge badge-warning navbar-badge">15</span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <span className="dropdown-item dropdown-header">
                  15 Notifications
                </span>
                <div className="dropdown-divider" />
                <a href="/" className="dropdown-item">
                  <i className="fas fa-envelope mr-2" /> 4 new messages
                  <span className="float-right text-muted text-sm">3 mins</span>
                </a>
                <div className="dropdown-divider" />
                <a href="/" className="dropdown-item">
                  <i className="fas fa-users mr-2" /> 8 friend requests
                  <span className="float-right text-muted text-sm">
                    12 hours
                  </span>
                </a>
                <div className="dropdown-divider" />
                <a href="/" className="dropdown-item">
                  <i className="fas fa-file mr-2" /> 3 new reports
                  <span className="float-right text-muted text-sm">2 days</span>
                </a>
                <div className="dropdown-divider" />
                <a href="/" className="dropdown-item dropdown-footer">
                  See All Notifications
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="fullscreen"
                href="/"
                role="button"
              >
                <i className="fas fa-expand-arrows-alt" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="control-sidebar"
                data-controlsidebar-slide="true"
                href="/"
                role="button"
              >
                <i className="fas fa-th-large" />
              </a>
            </li>
          </ul>
        </nav>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <a href="index3.html" className="brand-link">
            <img
              src="dist/img/AdminLTELogo.png"
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">AdminGOYA</span>
          </a>
          <div className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">
            <div className="os-resize-observer-host observed">
              <div
                className="os-resize-observer"
                style={{ left: "0px", right: "auto" }}
              />
            </div>
            <div
              className="os-size-auto-observer observed"
              style={{ height: "calc(100% + 1px)", float: "left" }}
            >
              <div className="os-resize-observer" />
            </div>
            <div
              className="os-content-glue"
              style={{ margin: "0px -8px", width: "249px", height: "416px" }}
            />
            <div className="os-padding">
              <div
                className="os-viewport os-viewport-native-scrollbars-invisible"
                style={{ overflowY: "scroll" }}
              >
                <div
                  className="os-content"
                  style={{ padding: "0px 8px", height: "100%", width: "100%" }}
                >
                  <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                      <img
                        src="dist/img/user2-160x160.jpg"
                        className="img-circle elevation-2"
                        alt="User Image"
                      />
                    </div>
                    <div className="info">
                      <a href="/" className="d-block">
                      Alexander Pierce
                      </a>
                    </div>
                    <div className="sidebar-search-results">
                      <div className="list-group">
                        <a href="/" className="list-group-item">
                          <div className="search-title">
                            <strong className="text-light" />N
                            <strong className="text-light" />o
                            <strong className="text-light" />{" "}
                            <strong className="text-light" />e
                            <strong className="text-light" />l
                            <strong className="text-light" />e
                            <strong className="text-light" />m
                            <strong className="text-light" />e
                            <strong className="text-light" />n
                            <strong className="text-light" />t
                            <strong className="text-light" />{" "}
                            <strong className="text-light" />f
                            <strong className="text-light" />o
                            <strong className="text-light" />u
                            <strong className="text-light" />n
                            <strong className="text-light" />d
                            <strong className="text-light" />!
                            <strong className="text-light" />
                          </div>
                          <div className="search-path" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <nav className="mt-2">
                    <ul
                      className="nav nav-pills nav-sidebar flex-column"
                      data-widget="treeview"
                      role="menu"
                      data-accordion="false"
                    >
                      <li className="nav-item">
                        <a href="/" className="nav-link active">
                          <i className="nav-icon fas fa-tachometer-alt" />
                          <p>
                          <Link to="/deshbord">
                              Dashboard
                              </Link>
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/" className="nav-link">
                          <i className="nav-icon fas fa-edit" />
                          <p>
                            Forms
                            <i className="fas fa-angle-left right" />
                          </p>
                        </a>
                        <ul className="nav nav-treeview">
                          <li className="nav-item">
                            <a
                              href="/"
                              className="nav-link"
                            >
                              <i className="far fa-circle nav-icon" />
                              <Link to="/generalElements"><p>General Elements</p></Link>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="/"
                              className="nav-link"
                            >
                              <i className="far fa-circle nav-icon" />
                              <Link to="/advanceElements">
                              <p>Advanced Elements</p>
                              </Link>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="/"
                              className="nav-link"
                            >
                              <i className="far fa-circle nav-icon" />
                              <Link to="/editors">
                                <p>Editors</p>
                              </Link>
                            </a>
                          </li>
                          <li className="nav-item">
                          <a href="/" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <Link to="/validation">
                                <p>Validation</p>
                                </Link>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="/" className="nav-link">
                          <i className="nav-icon fas fa-table" />
                          <p>
                            Tables
                            <i className="fas fa-angle-left right" />
                          </p>
                        </a>
                        <ul className="nav nav-treeview">
                          <li className="nav-item">
                          <a href="/" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <Link to="/simpleTables">
                                <p>Simple Tables</p>
                                </Link>
                              </a>
                          </li>
                          <li className="nav-item">
                          <a href="/" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <Link to="/dataTables">
                                <p>DataTables</p>
                                </Link>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="/" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <Link to="/jsgrid">
                                <p>jsGrid</p>
                                </Link>
                              </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                          <a href="/" className="nav-link">
                            <FaShopify className="nav-icon"/>
                            <p>
                              Product Managment
                              <i className="fas fa-angle-left right" />
                            </p>
                          </a>
                          <ul className="nav nav-treeview">
                            <li className="nav-item">
                            <a href="/" className="nav-link">
                                <MdOutlineAddShoppingCart className="nav-icon"/>
                                <Link to="/addproduct">
                                <p>Add product</p>
                                </Link>
                              </a>
                            </li>
                            <li className="nav-item">
                            <a href="/" className="nav-link">
                                <FaEye className="nav-icon" />
                                <Link to="/viewproduct">
                                <p>View product</p>
                                </Link>
                              </a>
                            </li>
                          </ul>
                        </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
              <div className="os-scrollbar-track">
                <div
                  className="os-scrollbar-handle"
                  style={{ width: "100%", transform: "translate(0px, 0px)" }}
                />
              </div>
            </div>
            <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
              <div className="os-scrollbar-track">
                <div
                  className="os-scrollbar-handle"
                  style={{
                    height: "33.9024%",
                    transform: "translate(0px, 272.933px)",
                  }}
                />
              </div>
            </div>
            <div className="os-scrollbar-corner" />
          </div>
        </aside>

        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Advanced Form</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Advanced Form</li>
                  </ol>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              {/* SELECT2 EXAMPLE */}
              <div className="card card-default">
                <div className="card-header">
                  <h3 className="card-title">Select2 (Default Theme)</h3>
                  <div className="card-tools">
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="collapse"
                    >
                      <i className="fas fa-minus" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="remove"
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Minimal</label>
                        <select
                          className="form-control select2"
                          style={{ width: "100%" }}
                        >
                          <option selected="selected">Alabama</option>
                          <option>Alaska</option>
                          <option>California</option>
                          <option>Delaware</option>
                          <option>Tennessee</option>
                          <option>Texas</option>
                          <option>Washington</option>
                        </select>
                      </div>
                      {/* /.form-group */}
                      <div className="form-group">
                        <label>Disabled</label>
                        <select
                          className="form-control select2"
                          disabled="disabled"
                          style={{ width: "100%" }}
                        >
                          <option selected="selected">Alabama</option>
                          <option>Alaska</option>
                          <option>California</option>
                          <option>Delaware</option>
                          <option>Tennessee</option>
                          <option>Texas</option>
                          <option>Washington</option>
                        </select>
                      </div>
                      {/* /.form-group */}
                    </div>
                    {/* /.col */}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Multiple</label>
                        <select
                          className="select2"
                          multiple="multiple"
                          data-placeholder="Select a State"
                          style={{ width: "100%" }}
                        >
                          <option>Alabama</option>
                          <option>Alaska</option>
                          <option>California</option>
                          <option>Delaware</option>
                          <option>Tennessee</option>
                          <option>Texas</option>
                          <option>Washington</option>
                        </select>
                      </div>
                      {/* /.form-group */}
                      <div className="form-group">
                        <label>Disabled Result</label>
                        <select
                          className="form-control select2"
                          style={{ width: "100%" }}
                        >
                          <option selected="selected">Alabama</option>
                          <option>Alaska</option>
                          <option disabled="disabled">
                            California (disabled)
                          </option>
                          <option>Delaware</option>
                          <option>Tennessee</option>
                          <option>Texas</option>
                          <option>Washington</option>
                        </select>
                      </div>
                      {/* /.form-group */}
                    </div>
                    {/* /.col */}
                  </div>
                  {/* /.row */}
                  <h5>Custom Color Variants</h5>
                  <div className="row">
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Minimal (.select2-danger)</label>
                        <select
                          className="form-control select2 select2-danger"
                          data-dropdown-css-class="select2-danger"
                          style={{ width: "100%" }}
                        >
                          <option selected="selected">Alabama</option>
                          <option>Alaska</option>
                          <option>California</option>
                          <option>Delaware</option>
                          <option>Tennessee</option>
                          <option>Texas</option>
                          <option>Washington</option>
                        </select>
                      </div>
                      {/* /.form-group */}
                    </div>
                    {/* /.col */}
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Multiple (.select2-purple)</label>
                        <div className="select2-purple">
                          <select
                            className="select2"
                            multiple="multiple"
                            data-placeholder="Select a State"
                            data-dropdown-css-class="select2-purple"
                            style={{ width: "100%" }}
                          >
                            <option>Alabama</option>
                            <option>Alaska</option>
                            <option>California</option>
                            <option>Delaware</option>
                            <option>Tennessee</option>
                            <option>Texas</option>
                            <option>Washington</option>
                          </select>
                        </div>
                      </div>
                      {/* /.form-group */}
                    </div>
                    {/* /.col */}
                  </div>
                  {/* /.row */}
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                  Visit{" "}
                  <a href="https://select2.github.io/">Select2 documentation</a>{" "}
                  for more examples and information about the plugin.
                </div>
              </div>
              {/* /.card */}
              {/* SELECT2 EXAMPLE */}
              <div className="card card-default">
                <div className="card-header">
                  <h3 className="card-title">Select2 (Bootstrap4 Theme)</h3>
                  <div className="card-tools">
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="collapse"
                    >
                      <i className="fas fa-minus" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="remove"
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Minimal</label>
                        <select
                          className="form-control select2bs4"
                          style={{ width: "100%" }}
                        >
                          <option selected="selected">Alabama</option>
                          <option>Alaska</option>
                          <option>California</option>
                          <option>Delaware</option>
                          <option>Tennessee</option>
                          <option>Texas</option>
                          <option>Washington</option>
                        </select>
                      </div>
                      {/* /.form-group */}
                      <div className="form-group">
                        <label>Disabled</label>
                        <select
                          className="form-control select2bs4"
                          disabled="disabled"
                          style={{ width: "100%" }}
                        >
                          <option selected="selected">Alabama</option>
                          <option>Alaska</option>
                          <option>California</option>
                          <option>Delaware</option>
                          <option>Tennessee</option>
                          <option>Texas</option>
                          <option>Washington</option>
                        </select>
                      </div>
                      {/* /.form-group */}
                    </div>
                    {/* /.col */}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Multiple</label>
                        <select
                          className="select2bs4"
                          multiple="multiple"
                          data-placeholder="Select a State"
                          style={{ width: "100%" }}
                        >
                          <option>Alabama</option>
                          <option>Alaska</option>
                          <option>California</option>
                          <option>Delaware</option>
                          <option>Tennessee</option>
                          <option>Texas</option>
                          <option>Washington</option>
                        </select>
                      </div>
                      {/* /.form-group */}
                      <div className="form-group">
                        <label>Disabled Result</label>
                        <select
                          className="form-control select2bs4"
                          style={{ width: "100%" }}
                        >
                          <option selected="selected">Alabama</option>
                          <option>Alaska</option>
                          <option disabled="disabled">
                            California (disabled)
                          </option>
                          <option>Delaware</option>
                          <option>Tennessee</option>
                          <option>Texas</option>
                          <option>Washington</option>
                        </select>
                      </div>
                      {/* /.form-group */}
                    </div>
                    {/* /.col */}
                  </div>
                  {/* /.row */}
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                  Visit{" "}
                  <a href="https://select2.github.io/">Select2 documentation</a>{" "}
                  for more examples and information about the plugin.
                </div>
              </div>
              {/* /.card */}
              <div className="card card-default">
                <div className="card-header">
                  <h3 className="card-title">Bootstrap Duallistbox</h3>
                  <div className="card-tools">
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="collapse"
                    >
                      <i className="fas fa-minus" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="remove"
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label>Multiple</label>
                        <select className="duallistbox" multiple="multiple">
                          <option selected="">Alabama</option>
                          <option>Alaska</option>
                          <option>California</option>
                          <option>Delaware</option>
                          <option>Tennessee</option>
                          <option>Texas</option>
                          <option>Washington</option>
                        </select>
                      </div>
                      {/* /.form-group */}
                    </div>
                    {/* /.col */}
                  </div>
                  {/* /.row */}
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                  Visit{" "}
                  <a href="https://github.com/istvan-ujjmeszaros/bootstrap-duallistbox#readme">
                    Bootstrap Duallistbox
                  </a>{" "}
                  for more examples and information about the plugin.
                </div>
              </div>
              {/* /.card */}
              <div className="row">
                <div className="col-md-6">
                  <div className="card card-danger">
                    <div className="card-header">
                      <h3 className="card-title">Input masks</h3>
                    </div>
                    <div className="card-body">
                      {/* Date dd/mm/yyyy */}
                      <div className="form-group">
                        <label>Date masks:</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="far fa-calendar-alt" />
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            data-inputmask-alias="datetime"
                            data-inputmask-inputformat="dd/mm/yyyy"
                            data-mask=""
                          />
                        </div>
                        {/* /.input group */}
                      </div>
                      {/* /.form group */}
                      {/* Date mm/dd/yyyy */}
                      <div className="form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="far fa-calendar-alt" />
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            data-inputmask-alias="datetime"
                            data-inputmask-inputformat="mm/dd/yyyy"
                            data-mask=""
                          />
                        </div>
                        {/* /.input group */}
                      </div>
                      {/* /.form group */}
                      {/* phone mask */}
                      <div className="form-group">
                        <label>US phone mask:</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-phone" />
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            data-inputmask='"mask": "(999) 999-9999"'
                            data-mask=""
                          />
                        </div>
                        {/* /.input group */}
                      </div>
                      {/* /.form group */}
                      {/* phone mask */}
                      <div className="form-group">
                        <label>Intl US phone mask:</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-phone" />
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            data-inputmask="'mask': ['999-999-9999 [x99999]', '+099 99 99 9999[9]-9999']"
                            data-mask=""
                          />
                        </div>
                        {/* /.input group */}
                      </div>
                      {/* /.form group */}
                      {/* IP mask */}
                      <div className="form-group">
                        <label>IP mask:</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-laptop" />
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            data-inputmask="'alias': 'ip'"
                            data-mask=""
                          />
                        </div>
                        {/* /.input group */}
                      </div>
                      {/* /.form group */}
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                  <div className="card card-info">
                    <div className="card-header">
                      <h3 className="card-title">Color &amp; Time Picker</h3>
                    </div>
                    <div className="card-body">
                      {/* Color Picker */}
                      <div className="form-group">
                        <label>Color picker:</label>
                        <input
                          type="text"
                          className="form-control my-colorpicker1"
                        />
                      </div>
                      {/* /.form group */}
                      {/* Color Picker */}
                      <div className="form-group">
                        <label>Color picker with addon:</label>
                        <div className="input-group my-colorpicker2">
                          <input type="text" className="form-control" />
                          <div className="input-group-append">
                            <span className="input-group-text">
                              <i className="fas fa-square" />
                            </span>
                          </div>
                        </div>
                        {/* /.input group */}
                      </div>
                      {/* /.form group */}
                      {/* time Picker */}
                      <div className="bootstrap-timepicker">
                        <div className="form-group">
                          <label>Time picker:</label>
                          <div
                            className="input-group date"
                            id="timepicker"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              className="form-control datetimepicker-input"
                              data-target="#timepicker"
                            />
                            <div
                              className="input-group-append"
                              data-target="#timepicker"
                              data-toggle="datetimepicker"
                            >
                              <div className="input-group-text">
                                <i className="far fa-clock" />
                              </div>
                            </div>
                          </div>
                          {/* /.input group */}
                        </div>
                        {/* /.form group */}
                      </div>
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                </div>
                {/* /.col (left) */}
                <div className="col-md-6">
                  <div className="card card-primary">
                    <div className="card-header">
                      <h3 className="card-title">Date picker</h3>
                    </div>
                    <div className="card-body">
                      {/* Date */}
                      <div className="form-group">
                        <label>Date:</label>
                        <div
                          className="input-group date"
                          id="reservationdate"
                          data-target-input="nearest"
                        >
                          <input
                            type="text"
                            className="form-control datetimepicker-input"
                            data-target="#reservationdate"
                          />
                          <div
                            className="input-group-append"
                            data-target="#reservationdate"
                            data-toggle="datetimepicker"
                          >
                            <div className="input-group-text">
                              <i className="fa fa-calendar" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Date and time */}
                      <div className="form-group">
                        <label>Date and time:</label>
                        <div
                          className="input-group date"
                          id="reservationdatetime"
                          data-target-input="nearest"
                        >
                          <input
                            type="text"
                            className="form-control datetimepicker-input"
                            data-target="#reservationdatetime"
                          />
                          <div
                            className="input-group-append"
                            data-target="#reservationdatetime"
                            data-toggle="datetimepicker"
                          >
                            <div className="input-group-text">
                              <i className="fa fa-calendar" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /.form group */}
                      {/* Date range */}
                      <div className="form-group">
                        <label>Date range:</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="far fa-calendar-alt" />
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control float-right"
                            id="reservation"
                          />
                        </div>
                        {/* /.input group */}
                      </div>
                      {/* /.form group */}
                      {/* Date and time range */}
                      <div className="form-group">
                        <label>Date and time range:</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="far fa-clock" />
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control float-right"
                            id="reservationtime"
                          />
                        </div>
                        {/* /.input group */}
                      </div>
                      {/* /.form group */}
                      {/* Date and time range */}
                      <div className="form-group">
                        <label>Date range button:</label>
                        <div className="input-group">
                          <button
                            type="button"
                            className="btn btn-default float-right"
                            id="daterange-btn"
                          >
                            <i className="far fa-calendar-alt" /> Date range
                            picker
                            <i className="fas fa-caret-down" />
                          </button>
                        </div>
                      </div>
                      {/* /.form group */}
                    </div>
                    <div className="card-footer">
                      Visit{" "}
                      <a href="https://getdatepicker.com/5-4/">
                        tempusdominus{" "}
                      </a>{" "}
                      for more examples and information about the plugin.
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                  {/* iCheck */}
                  <div className="card card-success">
                    <div className="card-header">
                      <h3 className="card-title">
                        iCheck Bootstrap - Checkbox &amp; Radio Inputs
                      </h3>
                    </div>
                    <div className="card-body">
                      {/* Minimal style */}
                      <div className="row">
                        <div className="col-sm-6">
                          {/* checkbox */}
                          <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                              <input
                                type="checkbox"
                                id="checkboxPrimary1"
                                defaultChecked=""
                              />
                              <label htmlFor="checkboxPrimary1"></label>
                            </div>
                            <div className="icheck-primary d-inline">
                              <input type="checkbox" id="checkboxPrimary2" />
                              <label htmlFor="checkboxPrimary2"></label>
                            </div>
                            <div className="icheck-primary d-inline">
                              <input
                                type="checkbox"
                                id="checkboxPrimary3"
                                disabled=""
                              />
                              <label htmlFor="checkboxPrimary3">
                                Primary checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          {/* radio */}
                          <div className="form-group clearfix">
                            <div className="icheck-primary d-inline">
                              <input
                                type="radio"
                                id="radioPrimary1"
                                name="r1"
                                defaultChecked=""
                              />
                              <label htmlFor="radioPrimary1"></label>
                            </div>
                            <div className="icheck-primary d-inline">
                              <input
                                type="radio"
                                id="radioPrimary2"
                                name="r1"
                              />
                              <label htmlFor="radioPrimary2"></label>
                            </div>
                            <div className="icheck-primary d-inline">
                              <input
                                type="radio"
                                id="radioPrimary3"
                                name="r1"
                                disabled=""
                              />
                              <label htmlFor="radioPrimary3">
                                Primary radio
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Minimal red style */}
                      <div className="row">
                        <div className="col-sm-6">
                          {/* checkbox */}
                          <div className="form-group clearfix">
                            <div className="icheck-danger d-inline">
                              <input
                                type="checkbox"
                                defaultChecked=""
                                id="checkboxDanger1"
                              />
                              <label htmlFor="checkboxDanger1"></label>
                            </div>
                            <div className="icheck-danger d-inline">
                              <input type="checkbox" id="checkboxDanger2" />
                              <label htmlFor="checkboxDanger2"></label>
                            </div>
                            <div className="icheck-danger d-inline">
                              <input
                                type="checkbox"
                                disabled=""
                                id="checkboxDanger3"
                              />
                              <label htmlFor="checkboxDanger3">
                                Danger checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          {/* radio */}
                          <div className="form-group clearfix">
                            <div className="icheck-danger d-inline">
                              <input
                                type="radio"
                                name="r2"
                                defaultChecked=""
                                id="radioDanger1"
                              />
                              <label htmlFor="radioDanger1"></label>
                            </div>
                            <div className="icheck-danger d-inline">
                              <input type="radio" name="r2" id="radioDanger2" />
                              <label htmlFor="radioDanger2"></label>
                            </div>
                            <div className="icheck-danger d-inline">
                              <input
                                type="radio"
                                name="r2"
                                disabled=""
                                id="radioDanger3"
                              />
                              <label htmlFor="radioDanger3">Danger radio</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Minimal red style */}
                      <div className="row">
                        <div className="col-sm-6">
                          {/* checkbox */}
                          <div className="form-group clearfix">
                            <div className="icheck-success d-inline">
                              <input
                                type="checkbox"
                                defaultChecked=""
                                id="checkboxSuccess1"
                              />
                              <label htmlFor="checkboxSuccess1"></label>
                            </div>
                            <div className="icheck-success d-inline">
                              <input type="checkbox" id="checkboxSuccess2" />
                              <label htmlFor="checkboxSuccess2"></label>
                            </div>
                            <div className="icheck-success d-inline">
                              <input
                                type="checkbox"
                                disabled=""
                                id="checkboxSuccess3"
                              />
                              <label htmlFor="checkboxSuccess3">
                                Success checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          {/* radio */}
                          <div className="form-group clearfix">
                            <div className="icheck-success d-inline">
                              <input
                                type="radio"
                                name="r3"
                                defaultChecked=""
                                id="radioSuccess1"
                              />
                              <label htmlFor="radioSuccess1"></label>
                            </div>
                            <div className="icheck-success d-inline">
                              <input
                                type="radio"
                                name="r3"
                                id="radioSuccess2"
                              />
                              <label htmlFor="radioSuccess2"></label>
                            </div>
                            <div className="icheck-success d-inline">
                              <input
                                type="radio"
                                name="r3"
                                disabled=""
                                id="radioSuccess3"
                              />
                              <label htmlFor="radioSuccess3">
                                Success radio
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer">
                      Many more skins available.{" "}
                      <a href="https://bantikyan.github.io/icheck-bootstrap/">
                        Documentation
                      </a>
                    </div>
                  </div>
                  {/* /.card */}
                  {/* Bootstrap Switch */}
                  <div className="card card-secondary">
                    <div className="card-header">
                      <h3 className="card-title">Bootstrap Switch</h3>
                    </div>
                    <div className="card-body">
                      <input
                        type="checkbox"
                        name="my-checkbox"
                        defaultChecked=""
                        data-bootstrap-switch=""
                      />
                      <input
                        type="checkbox"
                        name="my-checkbox"
                        defaultChecked=""
                        data-bootstrap-switch=""
                        data-off-color="danger"
                        data-on-color="success"
                      />
                    </div>
                  </div>
                  {/* /.card */}
                </div>
                {/* /.col (right) */}
              </div>
              {/* /.row */}
              <div className="row">
                <div className="col-md-12">
                  <div className="card card-default">
                    <div className="card-header">
                      <h3 className="card-title">bs-stepper</h3>
                    </div>
                    <div className="card-body p-0">
                      <div className="bs-stepper">
                        <div className="bs-stepper-header" role="tablist">
                          {/* your steps here */}
                          <div className="step" data-target="#logins-part">
                            <button
                              type="button"
                              className="step-trigger"
                              role="tab"
                              aria-controls="logins-part"
                              id="logins-part-trigger"
                            >
                              <span className="bs-stepper-circle">1</span>
                              <span className="bs-stepper-label">Logins</span>
                            </button>
                          </div>
                          <div className="line" />
                          <div className="step" data-target="#information-part">
                            <button
                              type="button"
                              className="step-trigger"
                              role="tab"
                              aria-controls="information-part"
                              id="information-part-trigger"
                            >
                              <span className="bs-stepper-circle">2</span>
                              <span className="bs-stepper-label">
                                Various information
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="bs-stepper-content">
                          {/* your steps content here */}
                          <div
                            id="logins-part"
                            className="content"
                            role="tabpanel"
                            aria-labelledby="logins-part-trigger"
                          >
                            <div className="form-group">
                              <label htmlFor="exampleInputEmail1">
                                Email address
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                placeholder="Enter email"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleInputPassword1">
                                Password
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                              />
                            </div>
                            <button
                              className="btn btn-primary"
                              onclick="stepper.next()"
                            >
                              Next
                            </button>
                          </div>
                          <div
                            id="information-part"
                            className="content"
                            role="tabpanel"
                            aria-labelledby="information-part-trigger"
                          >
                            <div className="form-group">
                              <label htmlFor="exampleInputFile">
                                File input
                              </label>
                              <div className="input-group">
                                <div className="custom-file">
                                  <input
                                    type="file"
                                    className="custom-file-input"
                                    id="exampleInputFile"
                                  />
                                  <label
                                    className="custom-file-label"
                                    htmlFor="exampleInputFile"
                                  >
                                    Choose file
                                  </label>
                                </div>
                                <div className="input-group-append">
                                  <span className="input-group-text">
                                    Upload
                                  </span>
                                </div>
                              </div>
                            </div>
                            <button
                              className="btn btn-primary"
                              onclick="stepper.previous()"
                            >
                              Previous
                            </button>
                            <button type="submit" className="btn btn-primary">
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer">
                      Visit{" "}
                      <a href="https://github.com/Johann-S/bs-stepper/#how-to-use-it">
                        bs-stepper documentation
                      </a>{" "}
                      for more examples and information about the plugin.
                    </div>
                  </div>
                  {/* /.card */}
                </div>
              </div>
              {/* /.row */}
              <div className="row">
                <div className="col-md-12">
                  <div className="card card-default">
                    <div className="card-header">
                      <h3 className="card-title">
                        Dropzone.js{" "}
                        <small>
                          <em>jQuery File Upload</em> like look
                        </small>
                      </h3>
                    </div>
                    <div className="card-body">
                      <div id="actions" className="row">
                        <div className="col-lg-6">
                          <div className="btn-group w-100">
                            <span className="btn btn-success col fileinput-button">
                              <i className="fas fa-plus" />
                              <span>Add files</span>
                            </span>
                            <button
                              type="submit"
                              className="btn btn-primary col start"
                            >
                              <i className="fas fa-upload" />
                              <span>Start upload</span>
                            </button>
                            <button
                              type="reset"
                              className="btn btn-warning col cancel"
                            >
                              <i className="fas fa-times-circle" />
                              <span>Cancel upload</span>
                            </button>
                          </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                          <div className="fileupload-process w-100">
                            <div
                              id="total-progress"
                              className="progress progress-striped active"
                              role="progressbar"
                              aria-valuemin={0}
                              aria-valuemax={100}
                              aria-valuenow={0}
                            >
                              <div
                                className="progress-bar progress-bar-success"
                                style={{ width: "0%" }}
                                data-dz-uploadprogress=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="table table-striped files" id="previews">
                        <div id="template" className="row mt-2">
                          <div className="col-auto">
                            <span className="preview">
                              <img src="data:," alt="" data-dz-thumbnail="" />
                            </span>
                          </div>
                          <div className="col d-flex align-items-center">
                            <p className="mb-0">
                              <span className="lead" data-dz-name="" />
                              (<span data-dz-size="" />)
                            </p>
                            <strong
                              className="error text-danger"
                              data-dz-errormessage=""
                            />
                          </div>
                          <div className="col-4 d-flex align-items-center">
                            <div
                              className="progress progress-striped active w-100"
                              role="progressbar"
                              aria-valuemin={0}
                              aria-valuemax={100}
                              aria-valuenow={0}
                            >
                              <div
                                className="progress-bar progress-bar-success"
                                style={{ width: "0%" }}
                                data-dz-uploadprogress=""
                              />
                            </div>
                          </div>
                          <div className="col-auto d-flex align-items-center">
                            <div className="btn-group">
                              <button className="btn btn-primary start">
                                <i className="fas fa-upload" />
                                <span>Start</span>
                              </button>
                              <button
                                data-dz-remove=""
                                className="btn btn-warning cancel"
                              >
                                <i className="fas fa-times-circle" />
                                <span>Cancel</span>
                              </button>
                              <button
                                data-dz-remove=""
                                className="btn btn-danger delete"
                              >
                                <i className="fas fa-trash" />
                                <span>Delete</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer">
                      Visit{" "}
                      <a href="https://www.dropzonejs.com">
                        dropzone.js documentation
                      </a>{" "}
                      for more examples and information about the plugin.
                    </div>
                  </div>
                  {/* /.card */}
                </div>
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>

        <footer className="main-footer">
          <strong>
            Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.
          </strong>
          All rights reserved.
          <div className="float-right d-none d-sm-inline-block">
            <b>Version</b> 3.2.0
          </div>
        </footer>
        <aside
          className="control-sidebar control-sidebar-dark"
          style={{ display: "none", top: "56.8px", height: "417.2px" }}
        >
          <div
            className="p-3 control-sidebar-content os-host os-theme-light os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-scrollbar-vertical-hidden os-host-transition"
            style={{ height: "417.2px" }}
          >
            <div className="os-resize-observer-host observed">
              <div
                className="os-resize-observer"
                style={{ left: "0px", right: "auto" }}
              />
            </div>
            <div
              className="os-size-auto-observer observed"
              style={{ height: "calc(100% + 1px)", float: "left" }}
            >
              <div className="os-resize-observer" />
            </div>
            <div
              className="os-content-glue"
              style={{ margin: "-16px", width: "0px", height: "0px" }}
            />
            <div className="os-padding">
              <div className="os-viewport os-viewport-native-scrollbars-invisible">
                <div
                  className="os-content"
                  style={{ padding: "16px", height: "100%", width: "100%" }}
                >
                  <h5>Customize AdminLTE</h5>
                  <hr className="mb-2" />
                  <div className="mb-4">
                    <input type="checkbox" defaultValue={1} className="mr-1" />
                    <span>Dark Mode</span>
                  </div>
                  <h6>Header Options</h6>
                  <div className="mb-1">
                    <input type="checkbox" defaultValue={1} className="mr-1" />
                    <span>Fixed</span>
                  </div>
                  <div className="mb-1">
                    <input type="checkbox" defaultValue={1} className="mr-1" />
                    <span>Dropdown Legacy Offset</span>
                  </div>
                  <div className="mb-4">
                    <input type="checkbox" defaultValue={1} className="mr-1" />
                    <span>No border</span>
                  </div>
                  <h6>Sidebar Options</h6>
                  <div className="mb-1">
                    <input type="checkbox" defaultValue={1} className="mr-1" />
                    <span>Collapsed</span>
                  </div>
                  <div className="mb-1">
                    <input
                      type="checkbox"
                      defaultValue={1}
                      defaultChecked="checked"
                      className="mr-1"
                    />
                    <span>Fixed</span>
                  </div>
                  <div className="mb-1">
                    <input
                      type="checkbox"
                      defaultValue={1}
                      defaultChecked="checked"
                      className="mr-1"
                    />
                    <span>Sidebar Mini</span>
                  </div>
                  <div className="mb-1">
                    <input type="checkbox" defaultValue={1} className="mr-1" />
                    <span>Sidebar Mini MD</span>
                  </div>
                  <div className="mb-1">
                    <input type="checkbox" defaultValue={1} className="mr-1" />
                    <span>Sidebar Mini XS</span>
                  </div>
                  <div className="mb-1">
                    <input type="checkbox" defaultValue={1} className="mr-1" />
                    <span>Nav Flat Style</span>
                  </div>
                  <div className="mb-1">
                    <input type="checkbox" defaultValue={1} className="mr-1" />
                    <span>Nav Legacy Style</span>
                  </div>
                  <div className="mb-1">
                    <input type="checkbox" defaultValue={1} className="mr-1" />
                    <span>Nav Compact</span>
                  </div>
                  <div className="mb-1">
                    <input type="checkbox" defaultValue={1} className="mr-1" />
                    <span>Nav Child Indent</span>
                  </div>
                  <div className="mb-1">
                    <input type="checkbox" defaultValue={1} className="mr-1" />
                    <span>Nav Child Hide on Collapse</span>
                  </div>
                  <div className="mb-4">
                    <input type="checkbox" defaultValue={1} className="mr-1" />
                    <span>Disable Hover/Focus Auto-Expand</span>
                  </div>
                  <h6>Footer Options</h6>
                  <div className="mb-4">
                    <input type="checkbox" defaultValue={1} className="mr-1" />
                    <span>Fixed</span>
                  </div>
                  <h6>Small Text Options</h6>
                  <div className="mb-1">
                    <input type="checkbox" defaultValue={1} className="mr-1" />
                    <span>Body</span>
                  </div>
                  <div className="mb-1">
                    <input type="checkbox" defaultValue={1} className="mr-1" />
                    <span>Navbar</span>
                  </div>
                  <div className="mb-1">
                    <input type="checkbox" defaultValue={1} className="mr-1" />
                    <span>Brand</span>
                  </div>
                  <div className="mb-1">
                    <input type="checkbox" defaultValue={1} className="mr-1" />
                    <span>Sidebar Nav</span>
                  </div>
                  <div className="mb-4">
                    <input type="checkbox" defaultValue={1} className="mr-1" />
                    <span>Footer</span>
                  </div>
                  <h6>Navbar Variants</h6>
                  <div className="d-flex">
                    <select className="custom-select mb-3 text-light border-0 bg-white">
                      <option className="bg-primary">Primary</option>
                      <option className="bg-secondary">Secondary</option>
                      <option className="bg-info">Info</option>
                      <option className="bg-success">Success</option>
                      <option className="bg-danger">Danger</option>
                      <option className="bg-indigo">Indigo</option>
                      <option className="bg-purple">Purple</option>
                      <option className="bg-pink">Pink</option>
                      <option className="bg-navy">Navy</option>
                      <option className="bg-lightblue">Lightblue</option>
                      <option className="bg-teal">Teal</option>
                      <option className="bg-cyan">Cyan</option>
                      <option className="bg-dark">Dark</option>
                      <option className="bg-gray-dark">Gray dark</option>
                      <option className="bg-gray">Gray</option>
                      <option className="bg-light">Light</option>
                      <option className="bg-warning">Warning</option>
                      <option className="bg-white">White</option>
                      <option className="bg-orange">Orange</option>
                    </select>
                  </div>
                  <h6>Accent Color Variants</h6>
                  <div className="d-flex" />
                  <select className="custom-select mb-3 border-0">
                    <option>None Selected</option>
                    <option className="bg-primary">Primary</option>
                    <option className="bg-warning">Warning</option>
                    <option className="bg-info">Info</option>
                    <option className="bg-danger">Danger</option>
                    <option className="bg-success">Success</option>
                    <option className="bg-indigo">Indigo</option>
                    <option className="bg-lightblue">Lightblue</option>
                    <option className="bg-navy">Navy</option>
                    <option className="bg-purple">Purple</option>
                    <option className="bg-fuchsia">Fuchsia</option>
                    <option className="bg-pink">Pink</option>
                    <option className="bg-maroon">Maroon</option>
                    <option className="bg-orange">Orange</option>
                    <option className="bg-lime">Lime</option>
                    <option className="bg-teal">Teal</option>
                    <option className="bg-olive">Olive</option>
                  </select>
                  <h6>Dark Sidebar Variants</h6>
                  <div className="d-flex" />
                  <select className="custom-select mb-3 text-light border-0 bg-primary">
                    <option>None Selected</option>
                    <option className="bg-primary">Primary</option>
                    <option className="bg-warning">Warning</option>
                    <option className="bg-info">Info</option>
                    <option className="bg-danger">Danger</option>
                    <option className="bg-success">Success</option>
                    <option className="bg-indigo">Indigo</option>
                    <option className="bg-lightblue">Lightblue</option>
                    <option className="bg-navy">Navy</option>
                    <option className="bg-purple">Purple</option>
                    <option className="bg-fuchsia">Fuchsia</option>
                    <option className="bg-pink">Pink</option>
                    <option className="bg-maroon">Maroon</option>
                    <option className="bg-orange">Orange</option>
                    <option className="bg-lime">Lime</option>
                    <option className="bg-teal">Teal</option>
                    <option className="bg-olive">Olive</option>
                  </select>
                  <h6>Light Sidebar Variants</h6>
                  <div className="d-flex" />
                  <select className="custom-select mb-3 border-0">
                    <option>None Selected</option>
                    <option className="bg-primary">Primary</option>
                    <option className="bg-warning">Warning</option>
                    <option className="bg-info">Info</option>
                    <option className="bg-danger">Danger</option>
                    <option className="bg-success">Success</option>
                    <option className="bg-indigo">Indigo</option>
                    <option className="bg-lightblue">Lightblue</option>
                    <option className="bg-navy">Navy</option>
                    <option className="bg-purple">Purple</option>
                    <option className="bg-fuchsia">Fuchsia</option>
                    <option className="bg-pink">Pink</option>
                    <option className="bg-maroon">Maroon</option>
                    <option className="bg-orange">Orange</option>
                    <option className="bg-lime">Lime</option>
                    <option className="bg-teal">Teal</option>
                    <option className="bg-olive">Olive</option>
                  </select>
                  <h6>Brand Logo Variants</h6>
                  <div className="d-flex" />
                  <select className="custom-select mb-3 border-0">
                    <option>None Selected</option>
                    <option className="bg-primary">Primary</option>
                    <option className="bg-secondary">Secondary</option>
                    <option className="bg-info">Info</option>
                    <option className="bg-success">Success</option>
                    <option className="bg-danger">Danger</option>
                    <option className="bg-indigo">Indigo</option>
                    <option className="bg-purple">Purple</option>
                    <option className="bg-pink">Pink</option>
                    <option className="bg-navy">Navy</option>
                    <option className="bg-lightblue">Lightblue</option>
                    <option className="bg-teal">Teal</option>
                    <option className="bg-cyan">Cyan</option>
                    <option className="bg-dark">Dark</option>
                    <option className="bg-gray-dark">Gray dark</option>
                    <option className="bg-gray">Gray</option>
                    <option className="bg-light">Light</option>
                    <option className="bg-warning">Warning</option>
                    <option className="bg-white">White</option>
                    <option className="bg-orange">Orange</option>clear
                  </select>
                </div>
              </div>
            </div>
            <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
              <div className="os-scrollbar-track">
                <div
                  className="os-scrollbar-handle"
                  style={{ transform: "translate(0px, 0px)" }}
                />
              </div>
            </div>
            <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-unusable os-scrollbar-auto-hidden">
              <div className="os-scrollbar-track">
                <div
                  className="os-scrollbar-handle"
                  style={{ transform: "translate(0px, 0px)" }}
                />
              </div>
            </div>
            <div className="os-scrollbar-corner" />
          </div>
        </aside>
        <div id="sidebar-overlay" />
      </div>
      <div className="daterangepicker ltr show-ranges opensright">
        <div className="ranges">
          <ul>
            <li data-range-key="Today">Today</li>
            <li data-range-key="Yesterday">Yesterday</li>
            <li data-range-key="Last 7 Days">Last 7 Days</li>
            <li data-range-key="Last 30 Days">Last 30 Days</li>
            <li data-range-key="This Month">This Month</li>
            <li data-range-key="Last Month">Last Month</li>
            <li data-range-key="Custom Range">Custom Range</li>
          </ul>
        </div>
        <div className="drp-calendar left">
          <div className="calendar-table" />
          <div className="calendar-time" style={{ display: "none" }} />
        </div>
        <div className="drp-calendar right">
          <div className="calendar-table" />
          <div className="calendar-time" style={{ display: "none" }} />
        </div>
        <div className="drp-buttons">
          <span className="drp-selected" />
          <button className="cancelBtn btn btn-sm btn-default" type="button">
            Cancel
          </button>
          <button
            className="applyBtn btn btn-sm btn-primary"
            disabled="disabled"
            type="button"
          >
            Apply
          </button>{" "}
        </div>
      </div>
      <div className="jqvmap-label" style={{ display: "none" }} />
    </>
  );
};
export default AdvanceElements;
