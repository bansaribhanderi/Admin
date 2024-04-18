import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEye, FaShopify } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Editpro from "./Editpro";

const Viewpro = () => {
  // console.log();
  const [data, setData] = useState([]);
  const [del, setDel] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/getallproduct")
      .then(function (res) {
        // handle success
        console.log(res.data.productData);
        setData(res.data.productData.reverse());
      })
      .catch(function (err) {
        // handle error
        console.log(err);
      });
  }, [modalShow, del]);

  const deleteuser = (e, deleteid) => {
    window.confirm(`Are You Sure Want To Delete Product ${deleteid}`);
    e.preventDefault();
    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Delete...";

    axios
      .delete(`http://localhost:5000/admin/deleteproduct/${deleteid}`)
      .then(function (res) {
        // handle success
        console.log(res);
        thisClicked.innerText = "Delete";
        setDel(res);
      })
      .catch(function (err) {
        // handle error
        console.log(err);
      });
  };

  return (
    <>
      <Editpro
        show={modalShow}
        onHide={() => setModalShow(false)}
        ProductId={id}
      />
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
              <div className="navbar-search-block">
                <form className="form-inline">
                  <div className="input-group input-group-sm">
                    <input
                      className="form-control form-control-navbar"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-navbar" type="submit">
                        <i className="fas fa-search" />
                      </button>
                      <button
                        className="btn btn-navbar"
                        type="button"
                        data-widget="navbar-search"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
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
                        alt="User Image" />
                    </div>
                    <div className="info">
                      <a href="/" className="d-block">
                        Alexander Pierce
                      </a>
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
                            <Link to="/deshbord">Dashboard</Link>
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
                            <a href="/" className="nav-link">
                              <i className="far fa-circle nav-icon" />
                              <Link to="/generalElements">
                                <p>General Elements</p>
                              </Link>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/" className="nav-link">
                              <i className="far fa-circle nav-icon" />
                              <Link to="/advanceElements">
                                <p>Advanced Elements</p>
                              </Link>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/" className="nav-link">
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
                          <FaShopify className="nav-icon" />
                          <p>
                            Product Managment
                            <i className="fas fa-angle-left right" />
                          </p>
                        </a>
                        <ul className="nav nav-treeview">
                          <li className="nav-item">
                            <a href="/" className="nav-link">
                              <MdOutlineAddShoppingCart className="nav-icon" />
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
                  <h1>All Products</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active">View products</li>
                  </ol>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                {data.map((item) => {
                  return (
                    <>
                      <div className="col-xxl-3 d-flex justify-content-center main-card">
                        <div className="main">
                          <Card style={{ width: "18rem" }}>
                            <Card.Img
                              variant="top"
                              className="img"
                              src={item.image[0]}
                            />
                            <Card.Body>
                              <p className="title">{item.title}</p>
                              <p className="price">
                                ${item.price}
                                <span className="dis">
                                  ({item.discount}% OFF)
                                </span>
                              </p>

                              <p className="disc">{item.description}</p>
                            </Card.Body>
                            <div className="btn d-flex">
                              <Button
                                variant="primary"
                                className="update"
                                onClick={() => {
                                  setId(item._id);
                                  setModalShow(true);
                                }}
                              >
                                Update
                              </Button>

                              <Button
                                variant="primary"
                                className="delete"
                                onClick={(e) => deleteuser(e, item._id)}
                              >
                                Delete
                              </Button>
                            </div>
                          </Card>
                        </div>
                      </div>
                    </>
                  );
                })}
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
      </div>
    </>
  );
};
export default Viewpro;
