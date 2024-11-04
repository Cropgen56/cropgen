import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import Card from "react-bootstrap/Card";
import logo from "../../assets/image/logo.png";
import profile from "../../assets/image/profile.png";
import cropgenanalytics from "../../assets/image/cropgenanalytics.png";
import addfield from "../../assets/image/addfield.png";
import wether from "../../assets/image/wether.png";
import operation from "../../assets/image/operation.png";
import faramreport from "../../assets/image/farmreport.png";
import smartadvisory from "../../assets/image/smartadvisory.png";
import diseasdeteaction from "../../assets/image/diseasdeteaction.png";
import setting from "../../assets/image/setting.png";
import cropinformation from "../../assets/image/cropinformation.png";
import personalisecropshedule from "../../assets/image/personalisecropshedule.png";
import logout from "../../assets/image/logout.png";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <Offcanvas
        show={true}
        onHide={() => {}}
        scroll={true}
        backdrop={false}
        className="offcanvas "
      >
        <Offcanvas.Body>
          <div
            className="title-container"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={logo} alt="company_logo" className="company-logo" />
            <span className="title-text">CropGen</span>
          </div>
          {/* profile card */}
          <Card
            style={{ width: "14rem", marginTop: "0px", marginBottom: "0px" }}
            onClick={() => {
              navigate("/profile");
            }}
          >
            <Card.Title className="active">Active</Card.Title>
            <Card.Img variant="top" src={profile} className="profile-image" />
            <Card.Body className="text-center">
              <Card.Title className="profile-user-name">User Name</Card.Title>
              <Card.Text className="profile-user-email">
                user@gmail.com
              </Card.Text>
            </Card.Body>
          </Card>
          {/* Navigation Links */}
          <nav className="sidebar-nav">
            <ul>
              <li>
                <img src={cropgenanalytics} alt="crop analytics image" />
                <Link to="/cropgen-analytics">CropGen Analytics</Link>
              </li>
              <li>
                <img src={addfield} alt="crop analytics image" />
                <Link to="/addfield">Add Field</Link>
              </li>
              <li>
                <img src={wether} alt="crop analytics image" />
                <Link to="/weather">Weather</Link>
              </li>
              <li>
                <img src={operation} alt="crop analytics image" />
                <Link to="/operation">Operation</Link>
              </li>
              <li>
                <img src={diseasdeteaction} alt="crop analytics image" />
                <Link to="/disease-detection">Disease Detection</Link>
              </li>
              <li>
                <img src={smartadvisory} alt="crop analytics image" />
                <Link to="/smart-advisory">Smart Advisory</Link>
              </li>
              <li>
                <img src={cropinformation} alt="crop analytics image" />
                <Link to="/crop-information">Crop Information</Link>
              </li>
              <li>
                <img src={faramreport} alt="crop analytics image" />
                <Link to="/farm-report">Farm Report</Link>
              </li>
              <li className="d-flex">
                <img src={personalisecropshedule} alt="crop analytics image" />
                <Link to="/personalise-crop-shedule">
                  Personalise Crop Schedule
                </Link>
              </li>
              <li>
                <img src={setting} alt="crop analytics image" />
                <Link to="/setting">Setting</Link>
              </li>
            </ul>
          </nav>
          <div className="offcanvas-footer">
            <p className="footer-text">
              <img src={logout} alt="logout icon" className="logout-icon" />
              <span>Logout</span>
            </p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Sidebar;
