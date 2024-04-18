import axios from "axios";
import { useEffect, useState } from "react";
import { FaEye, FaShopify } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
const FormData = require("form-data");

const Addpro = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [description, setDescription] = useState("");
  const [productType, setProductType] = useState("");
  const navigate = useNavigate();


  const files = file ? [...file] : [];

  const addProduct = (e) => {
    e.preventDefault();
    // console.log(productType);
    const data = new FormData();
    files.forEach((file, i) => {
      data.append("images", file);
    });
    data.append("title", title);
    data.append("price", price);
    data.append("discount", discount);
    data.append("description", description);
    data.append("productType", productType);

    axios({
      headers: { "Content-Type": "multipart/form-data" },
      method: "POST",
      url: "http://localhost:5000/admin/addproduct",
      data: data,
    })
    .then((response) => {
      console.log(response);
      if(response.data.status === 200){
        navigate('/viewproduct')
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          pauseOnFocusLoss: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
      })
      .catch(function (error) {
        console.log(error);
        toast.error("data does not add in product page", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      });
    };


  return (
    <>
    <ToastContainer />
      <div>
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
                    <span className="float-right text-muted text-sm">
                      3 mins
                    </span>
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
                    <span className="float-right text-muted text-sm">
                      2 days
                    </span>
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
                    style={{
                      padding: "0px 8px",
                      height: "100%",
                      width: "100%",
                    }}
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

          {/* Content Wrapper. Contains page content */}
          <div className="content-wrapper form-padd">
            {/* Content Header (Page header) */}
            <section className="content-header">
              <div className="container-fluid"></div>
              {/* /.container-fluid */}
            </section>
            {/* Main content */}
            <section className="content">
              <div className="container-fluid">
                <div className="row">
                  {/* left column */}
                  {/* Add product section */}
                  <div className="card card-info">
                    <div className="card-header">
                      <h3 className="card-title">Add Product Form</h3>
                    </div>
                    {/* /.card-header */}
                    {/* form start */}
                    <form className="form-horizontal">
                      <div className="card-body">
                        <div className="form-group row">
                          <label
                            htmlFor="inputEmail3"
                            className="col-sm-2 col-form-label"
                          >
                            Image :
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="file"
                              className="form-control"
                              id="inputEmail3"
                              placeholder="Add Image"
                              multiple
                              onChange={(e) => {
                                setFile(e.target.files);
                              }}
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            htmlFor="inputPassword3"
                            className="col-sm-2 col-form-label"
                          >
                            Title :
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword3"
                              placeholder="Add product Name"
                              onChange={(e) => {
                                setTitle(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            htmlFor="inputPassword3"
                            className="col-sm-2 col-form-label"
                          >
                            Price :
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword3"
                              placeholder="Add product Price"
                              onChange={(e) => {
                                setPrice(e.target.value);
                              }}
                            />
                          </div>
                        </div>

                        <div className="form-group row">
                          <label
                            htmlFor="inputPassword3"
                            className="col-sm-2 col-form-label"
                          >
                            Discount :
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword3"
                              placeholder="Add product Discount"
                              onChange={(e) => {
                                setDiscount(e.target.value);
                              }}
                            />
                          </div>
                        </div>

                        <div className="form-group row">
                          <label
                            htmlFor="inputPassword3"
                            className="col-sm-2 col-form-label"
                          >
                            Description :
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword3"
                              placeholder="Add product Description"
                              onChange={(e) => {
                                setDescription(e.target.value);
                              }}
                            />
                          </div>
                        </div>

                        <div className="form-group row d-flex align-items-center">
                          <label
                            htmlFor="inputPassword3"
                            className="col-sm-2 col-form-label"
                          >
                            ProductType :
                          </label>
                          <div className="col-sm-10 check-item">
                            <div className="main-items">
                              <input
                                type="radio"
                                className="form-check-input"
                                id="exampleCheck2"
                                name="item"
                                onChange={(e) => {
                                  if (e.target.value === "on") {
                                    setProductType("hot item");
                                  }
                                }}
                              />
                              <span className="check-product-type">
                                Hot Item
                              </span>
                            </div>
                            <div className="main-items">
                              <input
                                type="radio"
                                className="form-check-input"
                                id="exampleCheck2"
                                name="item"
                                onChange={(e) => {
                                  if (e.target.value === "on") {
                                    setProductType("new arrival");
                                  }
                                }}
                              />
                              <span className="check-product-type">
                                New Arrival
                              </span>
                            </div>
                            <div className="main-items">
                              <input
                                type="radio"
                                className="form-check-input"
                                id="exampleCheck2"
                                name="item"
                                onChange={(e) => {
                                  if (e.target.value === "on") {
                                    setProductType("on sale");
                                  }
                                }}
                              />
                              <span className="check-product-type">
                                On Sale
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /.card-body */}
                      <div className="card-footer">
                        <Link to="/dashboard">
                          <button
                            type="submit"
                            className="btn btn-info"
                            onClick={addProduct}>
                            Add
                          </button>
                        </Link>

                      </div>
                      {/* /.card-footer */}
                    </form>
                  </div>
                  {/* Add product section */}

                  {/*/.col (left) */}
                  {/* right column */}
                  <div className="col-md-6"></div>
                  {/*/.col (right) */}
                </div>
                {/* /.row */}
              </div>
              {/* /.container-fluid */}
            </section>
            {/* /.content */}
          </div>
          {/* /.content-wrapper */}

          <footer className="main-footer">
            <strong>
              Copyright © 2014-2021{" "}
              <a href="https://adminlte.io">AdminLTE.io</a>.
            </strong>
            All rights reserved.
            <div className="float-right d-none d-sm-inline-block">
              <b>Version</b> 3.2.0
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Addpro;
