import { Link } from "react-router-dom"
import { FaShopify } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaEye } from "react-icons/fa";

const DataTables = () =>{
    return(
        <>
            <div>
        <div className="wrapper">
          <div className="preloader flex-column justify-content-center align-items-center" style={{height: '0px'}}>
            <img className="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height={60} width={60} style={{display: 'none'}} />
          </div>
          <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" data-widget="pushmenu" href="/" role="button"><i className="fas fa-bars" /></a>
              </li>
              <li className="nav-item d-none d-sm-inline-block">
                <a href="index3.html" className="nav-link">Home</a>
              </li>
              <li className="nav-item d-none d-sm-inline-block">
                <a href="/" className="nav-link">Contact</a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" data-widget="navbar-search" href="/" role="button">
                  <i className="fas fa-search" />
                </a>
                <div className="navbar-search-block">
                  <form className="form-inline">
                    <div className="input-group input-group-sm">
                      <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                      <div className="input-group-append">
                        <button className="btn btn-navbar" type="submit">
                          <i className="fas fa-search" />
                        </button>
                        <button className="btn btn-navbar" type="button" data-widget="navbar-search">
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
                      <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                      <div className="media-body">
                        <h3 className="dropdown-item-title">
                          Brad Diesel
                          <span className="float-right text-sm text-danger"><i className="fas fa-star" /></span>
                        </h3>
                        <p className="text-sm">Call me whenever you can...</p>
                        <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                      </div>
                    </div>
                  </a>
                  <div className="dropdown-divider" />
                  <a href="/" className="dropdown-item">
                    <div className="media">
                      <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                      <div className="media-body">
                        <h3 className="dropdown-item-title">
                          John Pierce
                          <span className="float-right text-sm text-muted"><i className="fas fa-star" /></span>
                        </h3>
                        <p className="text-sm">I got your message bro</p>
                        <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                      </div>
                    </div>
                  </a>
                  <div className="dropdown-divider" />
                  <a href="/" className="dropdown-item">
                    <div className="media">
                      <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                      <div className="media-body">
                        <h3 className="dropdown-item-title">
                          Nora Silvester
                          <span className="float-right text-sm text-warning"><i className="fas fa-star" /></span>
                        </h3>
                        <p className="text-sm">The subject goes here</p>
                        <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                      </div>
                    </div>
                  </a>
                  <div className="dropdown-divider" />
                  <a href="/" className="dropdown-item dropdown-footer">See All Messages</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="/">
                  <i className="far fa-bell" />
                  <span className="badge badge-warning navbar-badge">15</span>
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                  <span className="dropdown-item dropdown-header">15 Notifications</span>
                  <div className="dropdown-divider" />
                  <a href="/" className="dropdown-item">
                    <i className="fas fa-envelope mr-2" /> 4 new messages
                    <span className="float-right text-muted text-sm">3 mins</span>
                  </a>
                  <div className="dropdown-divider" />
                  <a href="/" className="dropdown-item">
                    <i className="fas fa-users mr-2" /> 8 friend requests
                    <span className="float-right text-muted text-sm">12 hours</span>
                  </a>
                  <div className="dropdown-divider" />
                  <a href="/" className="dropdown-item">
                    <i className="fas fa-file mr-2" /> 3 new reports
                    <span className="float-right text-muted text-sm">2 days</span>
                  </a>
                  <div className="dropdown-divider" />
                  <a href="/" className="dropdown-item dropdown-footer">See All Notifications</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-widget="fullscreen" href="/" role="button">
                  <i className="fas fa-expand-arrows-alt" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="/" role="button">
                  <i className="fas fa-th-large" />
                </a>
              </li>
            </ul>
          </nav>
          <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="index3.html" className="brand-link">
              <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
              <span className="brand-text font-weight-light">AdminGOYA</span>
            </a>
            <div className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition"><div className="os-resize-observer-host observed"><div className="os-resize-observer" style={{left: '0px', right: 'auto'}} /></div><div className="os-size-auto-observer observed" style={{height: 'calc(100% + 1px)', float: 'left'}}><div className="os-resize-observer" /></div><div className="os-content-glue" style={{margin: '0px -8px', width: '249px', height: '416px'}} /><div className="os-padding"><div className="os-viewport os-viewport-native-scrollbars-invisible" style={{overflowY: 'scroll'}}><div className="os-content" style={{padding: '0px 8px', height: '100%', width: '100%'}}>
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                      <div className="image">
                        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                      </div>
                      <div className="info">
                        <a href="/" className="d-block">Alexander Pierce</a>
                      </div>
                    </div>
                    <nav className="mt-2">
                      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
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
                            <a href="/" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                                <Link to="/generalElements"><p>General Elements</p></Link>
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
                  </div></div></div><div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden"><div className="os-scrollbar-track"><div className="os-scrollbar-handle" style={{width: '100%', transform: 'translate(0px, 0px)'}} /></div></div><div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden"><div className="os-scrollbar-track"><div className="os-scrollbar-handle" style={{height: '33.9024%', transform: 'translate(0px, 272.933px)'}} /></div></div><div className="os-scrollbar-corner" /></div>
          </aside>

          <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>DataTables</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active">DataTables</li>
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
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                DataTable with minimal features &amp; hover style
              </h3>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <table id="example2" className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Rendering engine</th>
                    <th>Browser</th>
                    <th>Platform(s)</th>
                    <th>Engine version</th>
                    <th>CSS grade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Trident</td>
                    <td>Internet Explorer 4.0</td>
                    <td>Win 95+</td>
                    <td> 4</td>
                    <td>X</td>
                  </tr>
                  <tr>
                    <td>Trident</td>
                    <td>Internet Explorer 5.0</td>
                    <td>Win 95+</td>
                    <td>5</td>
                    <td>C</td>
                  </tr>
                  <tr>
                    <td>Trident</td>
                    <td>Internet Explorer 5.5</td>
                    <td>Win 95+</td>
                    <td>5.5</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Trident</td>
                    <td>Internet Explorer 6</td>
                    <td>Win 98+</td>
                    <td>6</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Trident</td>
                    <td>Internet Explorer 7</td>
                    <td>Win XP SP2+</td>
                    <td>7</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Trident</td>
                    <td>AOL browser (AOL desktop)</td>
                    <td>Win XP</td>
                    <td>6</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Firefox 1.0</td>
                    <td>Win 98+ / OSX.2+</td>
                    <td>1.7</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Firefox 1.5</td>
                    <td>Win 98+ / OSX.2+</td>
                    <td>1.8</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Firefox 2.0</td>
                    <td>Win 98+ / OSX.2+</td>
                    <td>1.8</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Firefox 3.0</td>
                    <td>Win 2k+ / OSX.3+</td>
                    <td>1.9</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Camino 1.0</td>
                    <td>OSX.2+</td>
                    <td>1.8</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Camino 1.5</td>
                    <td>OSX.3+</td>
                    <td>1.8</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Netscape 7.2</td>
                    <td>Win 95+ / Mac OS 8.6-9.2</td>
                    <td>1.7</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Netscape Browser 8</td>
                    <td>Win 98SE+</td>
                    <td>1.7</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Netscape Navigator 9</td>
                    <td>Win 98+ / OSX.2+</td>
                    <td>1.8</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Mozilla 1.0</td>
                    <td>Win 95+ / OSX.1+</td>
                    <td>1</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Mozilla 1.1</td>
                    <td>Win 95+ / OSX.1+</td>
                    <td>1.1</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Mozilla 1.2</td>
                    <td>Win 95+ / OSX.1+</td>
                    <td>1.2</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Mozilla 1.3</td>
                    <td>Win 95+ / OSX.1+</td>
                    <td>1.3</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Mozilla 1.4</td>
                    <td>Win 95+ / OSX.1+</td>
                    <td>1.4</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Mozilla 1.5</td>
                    <td>Win 95+ / OSX.1+</td>
                    <td>1.5</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Mozilla 1.6</td>
                    <td>Win 95+ / OSX.1+</td>
                    <td>1.6</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Mozilla 1.7</td>
                    <td>Win 98+ / OSX.1+</td>
                    <td>1.7</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Mozilla 1.8</td>
                    <td>Win 98+ / OSX.1+</td>
                    <td>1.8</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Seamonkey 1.1</td>
                    <td>Win 98+ / OSX.2+</td>
                    <td>1.8</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Epiphany 2.20</td>
                    <td>Gnome</td>
                    <td>1.8</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Webkit</td>
                    <td>Safari 1.2</td>
                    <td>OSX.3</td>
                    <td>125.5</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Webkit</td>
                    <td>Safari 1.3</td>
                    <td>OSX.3</td>
                    <td>312.8</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Webkit</td>
                    <td>Safari 2.0</td>
                    <td>OSX.4+</td>
                    <td>419.3</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Webkit</td>
                    <td>Safari 3.0</td>
                    <td>OSX.4+</td>
                    <td>522.1</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Webkit</td>
                    <td>OmniWeb 5.5</td>
                    <td>OSX.4+</td>
                    <td>420</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Webkit</td>
                    <td>iPod Touch / iPhone</td>
                    <td>iPod</td>
                    <td>420.1</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Webkit</td>
                    <td>S60</td>
                    <td>S60</td>
                    <td>413</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Presto</td>
                    <td>Opera 7.0</td>
                    <td>Win 95+ / OSX.1+</td>
                    <td>-</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Presto</td>
                    <td>Opera 7.5</td>
                    <td>Win 95+ / OSX.2+</td>
                    <td>-</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Presto</td>
                    <td>Opera 8.0</td>
                    <td>Win 95+ / OSX.2+</td>
                    <td>-</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Presto</td>
                    <td>Opera 8.5</td>
                    <td>Win 95+ / OSX.2+</td>
                    <td>-</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Presto</td>
                    <td>Opera 9.0</td>
                    <td>Win 95+ / OSX.3+</td>
                    <td>-</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Presto</td>
                    <td>Opera 9.2</td>
                    <td>Win 88+ / OSX.3+</td>
                    <td>-</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Presto</td>
                    <td>Opera 9.5</td>
                    <td>Win 88+ / OSX.3+</td>
                    <td>-</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Presto</td>
                    <td>Opera for Wii</td>
                    <td>Wii</td>
                    <td>-</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Presto</td>
                    <td>Nokia N800</td>
                    <td>N800</td>
                    <td>-</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Presto</td>
                    <td>Nintendo DS browser</td>
                    <td>Nintendo DS</td>
                    <td>8.5</td>
                    <td>
                      C/A<sup>1</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>KHTML</td>
                    <td>Konqureror 3.1</td>
                    <td>KDE 3.1</td>
                    <td>3.1</td>
                    <td>C</td>
                  </tr>
                  <tr>
                    <td>KHTML</td>
                    <td>Konqureror 3.3</td>
                    <td>KDE 3.3</td>
                    <td>3.3</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>KHTML</td>
                    <td>Konqureror 3.5</td>
                    <td>KDE 3.5</td>
                    <td>3.5</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Tasman</td>
                    <td>Internet Explorer 4.5</td>
                    <td>Mac OS 8-9</td>
                    <td>-</td>
                    <td>X</td>
                  </tr>
                  <tr>
                    <td>Tasman</td>
                    <td>Internet Explorer 5.1</td>
                    <td>Mac OS 7.6-9</td>
                    <td>1</td>
                    <td>C</td>
                  </tr>
                  <tr>
                    <td>Tasman</td>
                    <td>Internet Explorer 5.2</td>
                    <td>Mac OS 8-X</td>
                    <td>1</td>
                    <td>C</td>
                  </tr>
                  <tr>
                    <td>Misc</td>
                    <td>NetFront 3.1</td>
                    <td>Embedded devices</td>
                    <td>-</td>
                    <td>C</td>
                  </tr>
                  <tr>
                    <td>Misc</td>
                    <td>NetFront 3.4</td>
                    <td>Embedded devices</td>
                    <td>-</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Misc</td>
                    <td>Dillo 0.8</td>
                    <td>Embedded devices</td>
                    <td>-</td>
                    <td>X</td>
                  </tr>
                  <tr>
                    <td>Misc</td>
                    <td>Links</td>
                    <td>Text only</td>
                    <td>-</td>
                    <td>X</td>
                  </tr>
                  <tr>
                    <td>Misc</td>
                    <td>Lynx</td>
                    <td>Text only</td>
                    <td>-</td>
                    <td>X</td>
                  </tr>
                  <tr>
                    <td>Misc</td>
                    <td>IE Mobile</td>
                    <td>Windows Mobile 6</td>
                    <td>-</td>
                    <td>C</td>
                  </tr>
                  <tr>
                    <td>Misc</td>
                    <td>PSP browser</td>
                    <td>PSP</td>
                    <td>-</td>
                    <td>C</td>
                  </tr>
                  <tr>
                    <td>Other browsers</td>
                    <td>All others</td>
                    <td>-</td>
                    <td>-</td>
                    <td>U</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th>Rendering engine</th>
                    <th>Browser</th>
                    <th>Platform(s)</th>
                    <th>Engine version</th>
                    <th>CSS grade</th>
                  </tr>
                </tfoot>
              </table>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">DataTable with default features</h3>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <table
                id="example1"
                className="table table-bordered table-striped"
              >
                <thead>
                  <tr>
                    <th>Rendering engine</th>
                    <th>Browser</th>
                    <th>Platform(s)</th>
                    <th>Engine version</th>
                    <th>CSS grade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Trident</td>
                    <td>Internet Explorer 4.0</td>
                    <td>Win 95+</td>
                    <td> 4</td>
                    <td>X</td>
                  </tr>
                  <tr>
                    <td>Trident</td>
                    <td>Internet Explorer 5.0</td>
                    <td>Win 95+</td>
                    <td>5</td>
                    <td>C</td>
                  </tr>
                  <tr>
                    <td>Trident</td>
                    <td>Internet Explorer 5.5</td>
                    <td>Win 95+</td>
                    <td>5.5</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Trident</td>
                    <td>Internet Explorer 6</td>
                    <td>Win 98+</td>
                    <td>6</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Trident</td>
                    <td>Internet Explorer 7</td>
                    <td>Win XP SP2+</td>
                    <td>7</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Trident</td>
                    <td>AOL browser (AOL desktop)</td>
                    <td>Win XP</td>
                    <td>6</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Firefox 1.0</td>
                    <td>Win 98+ / OSX.2+</td>
                    <td>1.7</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Firefox 1.5</td>
                    <td>Win 98+ / OSX.2+</td>
                    <td>1.8</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Firefox 2.0</td>
                    <td>Win 98+ / OSX.2+</td>
                    <td>1.8</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Firefox 3.0</td>
                    <td>Win 2k+ / OSX.3+</td>
                    <td>1.9</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Camino 1.0</td>
                    <td>OSX.2+</td>
                    <td>1.8</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Camino 1.5</td>
                    <td>OSX.3+</td>
                    <td>1.8</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Netscape 7.2</td>
                    <td>Win 95+ / Mac OS 8.6-9.2</td>
                    <td>1.7</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Netscape Browser 8</td>
                    <td>Win 98SE+</td>
                    <td>1.7</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Netscape Navigator 9</td>
                    <td>Win 98+ / OSX.2+</td>
                    <td>1.8</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Mozilla 1.0</td>
                    <td>Win 95+ / OSX.1+</td>
                    <td>1</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Mozilla 1.1</td>
                    <td>Win 95+ / OSX.1+</td>
                    <td>1.1</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Mozilla 1.2</td>
                    <td>Win 95+ / OSX.1+</td>
                    <td>1.2</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Mozilla 1.3</td>
                    <td>Win 95+ / OSX.1+</td>
                    <td>1.3</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Mozilla 1.4</td>
                    <td>Win 95+ / OSX.1+</td>
                    <td>1.4</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Mozilla 1.5</td>
                    <td>Win 95+ / OSX.1+</td>
                    <td>1.5</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Mozilla 1.6</td>
                    <td>Win 95+ / OSX.1+</td>
                    <td>1.6</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Mozilla 1.7</td>
                    <td>Win 98+ / OSX.1+</td>
                    <td>1.7</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Mozilla 1.8</td>
                    <td>Win 98+ / OSX.1+</td>
                    <td>1.8</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Seamonkey 1.1</td>
                    <td>Win 98+ / OSX.2+</td>
                    <td>1.8</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Gecko</td>
                    <td>Epiphany 2.20</td>
                    <td>Gnome</td>
                    <td>1.8</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Webkit</td>
                    <td>Safari 1.2</td>
                    <td>OSX.3</td>
                    <td>125.5</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Webkit</td>
                    <td>Safari 1.3</td>
                    <td>OSX.3</td>
                    <td>312.8</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Webkit</td>
                    <td>Safari 2.0</td>
                    <td>OSX.4+</td>
                    <td>419.3</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Webkit</td>
                    <td>Safari 3.0</td>
                    <td>OSX.4+</td>
                    <td>522.1</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Webkit</td>
                    <td>OmniWeb 5.5</td>
                    <td>OSX.4+</td>
                    <td>420</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Webkit</td>
                    <td>iPod Touch / iPhone</td>
                    <td>iPod</td>
                    <td>420.1</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Webkit</td>
                    <td>S60</td>
                    <td>S60</td>
                    <td>413</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Presto</td>
                    <td>Opera 7.0</td>
                    <td>Win 95+ / OSX.1+</td>
                    <td>-</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Presto</td>
                    <td>Opera 7.5</td>
                    <td>Win 95+ / OSX.2+</td>
                    <td>-</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Presto</td>
                    <td>Opera 8.0</td>
                    <td>Win 95+ / OSX.2+</td>
                    <td>-</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Presto</td>
                    <td>Opera 8.5</td>
                    <td>Win 95+ / OSX.2+</td>
                    <td>-</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Presto</td>
                    <td>Opera 9.0</td>
                    <td>Win 95+ / OSX.3+</td>
                    <td>-</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Presto</td>
                    <td>Opera 9.2</td>
                    <td>Win 88+ / OSX.3+</td>
                    <td>-</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Presto</td>
                    <td>Opera 9.5</td>
                    <td>Win 88+ / OSX.3+</td>
                    <td>-</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Presto</td>
                    <td>Opera for Wii</td>
                    <td>Wii</td>
                    <td>-</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Presto</td>
                    <td>Nokia N800</td>
                    <td>N800</td>
                    <td>-</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Presto</td>
                    <td>Nintendo DS browser</td>
                    <td>Nintendo DS</td>
                    <td>8.5</td>
                    <td>
                      C/A<sup>1</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>KHTML</td>
                    <td>Konqureror 3.1</td>
                    <td>KDE 3.1</td>
                    <td>3.1</td>
                    <td>C</td>
                  </tr>
                  <tr>
                    <td>KHTML</td>
                    <td>Konqureror 3.3</td>
                    <td>KDE 3.3</td>
                    <td>3.3</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>KHTML</td>
                    <td>Konqureror 3.5</td>
                    <td>KDE 3.5</td>
                    <td>3.5</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Tasman</td>
                    <td>Internet Explorer 4.5</td>
                    <td>Mac OS 8-9</td>
                    <td>-</td>
                    <td>X</td>
                  </tr>
                  <tr>
                    <td>Tasman</td>
                    <td>Internet Explorer 5.1</td>
                    <td>Mac OS 7.6-9</td>
                    <td>1</td>
                    <td>C</td>
                  </tr>
                  <tr>
                    <td>Tasman</td>
                    <td>Internet Explorer 5.2</td>
                    <td>Mac OS 8-X</td>
                    <td>1</td>
                    <td>C</td>
                  </tr>
                  <tr>
                    <td>Misc</td>
                    <td>NetFront 3.1</td>
                    <td>Embedded devices</td>
                    <td>-</td>
                    <td>C</td>
                  </tr>
                  <tr>
                    <td>Misc</td>
                    <td>NetFront 3.4</td>
                    <td>Embedded devices</td>
                    <td>-</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td>Misc</td>
                    <td>Dillo 0.8</td>
                    <td>Embedded devices</td>
                    <td>-</td>
                    <td>X</td>
                  </tr>
                  <tr>
                    <td>Misc</td>
                    <td>Links</td>
                    <td>Text only</td>
                    <td>-</td>
                    <td>X</td>
                  </tr>
                  <tr>
                    <td>Misc</td>
                    <td>Lynx</td>
                    <td>Text only</td>
                    <td>-</td>
                    <td>X</td>
                  </tr>
                  <tr>
                    <td>Misc</td>
                    <td>IE Mobile</td>
                    <td>Windows Mobile 6</td>
                    <td>-</td>
                    <td>C</td>
                  </tr>
                  <tr>
                    <td>Misc</td>
                    <td>PSP browser</td>
                    <td>PSP</td>
                    <td>-</td>
                    <td>C</td>
                  </tr>
                  <tr>
                    <td>Other browsers</td>
                    <td>All others</td>
                    <td>-</td>
                    <td>-</td>
                    <td>U</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th>Rendering engine</th>
                    <th>Browser</th>
                    <th>Platform(s)</th>
                    <th>Engine version</th>
                    <th>CSS grade</th>
                  </tr>
                </tfoot>
              </table>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container-fluid */}
  </section>
  {/* /.content */}
          </div>


          <footer className="main-footer">
            <strong>Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
            All rights reserved.
            <div className="float-right d-none d-sm-inline-block">
              <b>Version</b> 3.2.0
            </div>
          </footer>
          <aside className="control-sidebar control-sidebar-dark" style={{display: 'none', top: '56.8px', height: '417.2px'}}>
            <div className="p-3 control-sidebar-content os-host os-theme-light os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-scrollbar-vertical-hidden os-host-transition" style={{height: '417.2px'}}><div className="os-resize-observer-host observed"><div className="os-resize-observer" style={{left: '0px', right: 'auto'}} /></div><div className="os-size-auto-observer observed" style={{height: 'calc(100% + 1px)', float: 'left'}}><div className="os-resize-observer" /></div><div className="os-content-glue" style={{margin: '-16px', width: '0px', height: '0px'}} /><div className="os-padding"><div className="os-viewport os-viewport-native-scrollbars-invisible"><div className="os-content" style={{padding: '16px', height: '100%', width: '100%'}}><h5>Customize AdminLTE</h5><hr className="mb-2" /><div className="mb-4"><input type="checkbox" defaultValue={1} className="mr-1" /><span>Dark Mode</span></div><h6>Header Options</h6><div className="mb-1"><input type="checkbox" defaultValue={1} className="mr-1" /><span>Fixed</span></div><div className="mb-1"><input type="checkbox" defaultValue={1} className="mr-1" /><span>Dropdown Legacy Offset</span></div><div className="mb-4"><input type="checkbox" defaultValue={1} className="mr-1" /><span>No border</span></div><h6>Sidebar Options</h6><div className="mb-1"><input type="checkbox" defaultValue={1} className="mr-1" /><span>Collapsed</span></div><div className="mb-1"><input type="checkbox" defaultValue={1} defaultChecked="checked" className="mr-1" /><span>Fixed</span></div><div className="mb-1"><input type="checkbox" defaultValue={1} defaultChecked="checked" className="mr-1" /><span>Sidebar Mini</span></div><div className="mb-1"><input type="checkbox" defaultValue={1} className="mr-1" /><span>Sidebar Mini MD</span></div><div className="mb-1"><input type="checkbox" defaultValue={1} className="mr-1" /><span>Sidebar Mini XS</span></div><div className="mb-1"><input type="checkbox" defaultValue={1} className="mr-1" /><span>Nav Flat Style</span></div><div className="mb-1"><input type="checkbox" defaultValue={1} className="mr-1" /><span>Nav Legacy Style</span></div><div className="mb-1"><input type="checkbox" defaultValue={1} className="mr-1" /><span>Nav Compact</span></div><div className="mb-1"><input type="checkbox" defaultValue={1} className="mr-1" /><span>Nav Child Indent</span></div><div className="mb-1"><input type="checkbox" defaultValue={1} className="mr-1" /><span>Nav Child Hide on Collapse</span></div><div className="mb-4"><input type="checkbox" defaultValue={1} className="mr-1" /><span>Disable Hover/Focus Auto-Expand</span></div><h6>Footer Options</h6><div className="mb-4"><input type="checkbox" defaultValue={1} className="mr-1" /><span>Fixed</span></div><h6>Small Text Options</h6><div className="mb-1"><input type="checkbox" defaultValue={1} className="mr-1" /><span>Body</span></div><div className="mb-1"><input type="checkbox" defaultValue={1} className="mr-1" /><span>Navbar</span></div><div className="mb-1"><input type="checkbox" defaultValue={1} className="mr-1" /><span>Brand</span></div><div className="mb-1"><input type="checkbox" defaultValue={1} className="mr-1" /><span>Sidebar Nav</span></div><div className="mb-4"><input type="checkbox" defaultValue={1} className="mr-1" /><span>Footer</span></div><h6>Navbar Variants</h6><div className="d-flex"><select className="custom-select mb-3 text-light border-0 bg-white"><option className="bg-primary">Primary</option><option className="bg-secondary">Secondary</option><option className="bg-info">Info</option><option className="bg-success">Success</option><option className="bg-danger">Danger</option><option className="bg-indigo">Indigo</option><option className="bg-purple">Purple</option><option className="bg-pink">Pink</option><option className="bg-navy">Navy</option><option className="bg-lightblue">Lightblue</option><option className="bg-teal">Teal</option><option className="bg-cyan">Cyan</option><option className="bg-dark">Dark</option><option className="bg-gray-dark">Gray dark</option><option className="bg-gray">Gray</option><option className="bg-light">Light</option><option className="bg-warning">Warning</option><option className="bg-white">White</option><option className="bg-orange">Orange</option></select></div><h6>Accent Color Variants</h6><div className="d-flex" /><select className="custom-select mb-3 border-0"><option>None Selected</option><option className="bg-primary">Primary</option><option className="bg-warning">Warning</option><option className="bg-info">Info</option><option className="bg-danger">Danger</option><option className="bg-success">Success</option><option className="bg-indigo">Indigo</option><option className="bg-lightblue">Lightblue</option><option className="bg-navy">Navy</option><option className="bg-purple">Purple</option><option className="bg-fuchsia">Fuchsia</option><option className="bg-pink">Pink</option><option className="bg-maroon">Maroon</option><option className="bg-orange">Orange</option><option className="bg-lime">Lime</option><option className="bg-teal">Teal</option><option className="bg-olive">Olive</option></select><h6>Dark Sidebar Variants</h6><div className="d-flex" /><select className="custom-select mb-3 text-light border-0 bg-primary"><option>None Selected</option><option className="bg-primary">Primary</option><option className="bg-warning">Warning</option><option className="bg-info">Info</option><option className="bg-danger">Danger</option><option className="bg-success">Success</option><option className="bg-indigo">Indigo</option><option className="bg-lightblue">Lightblue</option><option className="bg-navy">Navy</option><option className="bg-purple">Purple</option><option className="bg-fuchsia">Fuchsia</option><option className="bg-pink">Pink</option><option className="bg-maroon">Maroon</option><option className="bg-orange">Orange</option><option className="bg-lime">Lime</option><option className="bg-teal">Teal</option><option className="bg-olive">Olive</option></select><h6>Light Sidebar Variants</h6><div className="d-flex" /><select className="custom-select mb-3 border-0"><option>None Selected</option><option className="bg-primary">Primary</option><option className="bg-warning">Warning</option><option className="bg-info">Info</option><option className="bg-danger">Danger</option><option className="bg-success">Success</option><option className="bg-indigo">Indigo</option><option className="bg-lightblue">Lightblue</option><option className="bg-navy">Navy</option><option className="bg-purple">Purple</option><option className="bg-fuchsia">Fuchsia</option><option className="bg-pink">Pink</option><option className="bg-maroon">Maroon</option><option className="bg-orange">Orange</option><option className="bg-lime">Lime</option><option className="bg-teal">Teal</option><option className="bg-olive">Olive</option></select><h6>Brand Logo Variants</h6><div className="d-flex" /><select className="custom-select mb-3 border-0"><option>None Selected</option><option className="bg-primary">Primary</option><option className="bg-secondary">Secondary</option><option className="bg-info">Info</option><option className="bg-success">Success</option><option className="bg-danger">Danger</option><option className="bg-indigo">Indigo</option><option className="bg-purple">Purple</option><option className="bg-pink">Pink</option><option className="bg-navy">Navy</option><option className="bg-lightblue">Lightblue</option><option className="bg-teal">Teal</option><option className="bg-cyan">Cyan</option><option className="bg-dark">Dark</option><option className="bg-gray-dark">Gray dark</option><option className="bg-gray">Gray</option><option className="bg-light">Light</option><option className="bg-warning">Warning</option><option className="bg-white">White</option><option className="bg-orange">Orange</option>clear</select></div></div></div><div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden"><div className="os-scrollbar-track"><div className="os-scrollbar-handle" style={{transform: 'translate(0px, 0px)'}} /></div></div><div className="os-scrollbar os-scrollbar-vertical os-scrollbar-unusable os-scrollbar-auto-hidden"><div className="os-scrollbar-track"><div className="os-scrollbar-handle" style={{transform: 'translate(0px, 0px)'}} /></div></div><div className="os-scrollbar-corner" /></div></aside>
          <div id="sidebar-overlay" /></div>
        <div className="daterangepicker ltr show-ranges opensright"><div className="ranges"><ul><li data-range-key="Today">Today</li><li data-range-key="Yesterday">Yesterday</li><li data-range-key="Last 7 Days">Last 7 Days</li><li data-range-key="Last 30 Days">Last 30 Days</li><li data-range-key="This Month">This Month</li><li data-range-key="Last Month">Last Month</li><li data-range-key="Custom Range">Custom Range</li></ul></div><div className="drp-calendar left"><div className="calendar-table" /><div className="calendar-time" style={{display: 'none'}} /></div><div className="drp-calendar right"><div className="calendar-table" /><div className="calendar-time" style={{display: 'none'}} /></div><div className="drp-buttons"><span className="drp-selected" /><button className="cancelBtn btn btn-sm btn-default" type="button">Cancel</button><button className="applyBtn btn btn-sm btn-primary" disabled="disabled" type="button">Apply</button> </div></div><div className="jqvmap-label" style={{display: 'none'}} />
      </div>  
        </>
    )
}
export default DataTables