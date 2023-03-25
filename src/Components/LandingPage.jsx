/** @format */

import React from "react";
import "./Landingpage.css";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { Col, Row } from "reactstrap";
import img from "./certi.png";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <section className="header">
        <Navbar className="navbar" expand="lg">
          <Container>
            <Navbar.Brand href="#">EDISONVALLEY</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="m-auto my-auto my-lg-0 "
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About</Nav.Link>
                <Nav.Link href="#action2">Features</Nav.Link>
                <Nav.Link href="#action2">Team</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Link
                  to={"/login"}
                  className="login-button btn btn-success"
                  variant="outline-success"
                  color="green"
                >
                  Login
                </Link>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
      <section className="body">
        <div className="banner">
          <Container>
            <Row>
              <Col md="6">
                <div className="d-flex justify-content-center">
                  <div>
                    <h2>
                      MAKER YOUR CAREER <br /> WITH EDISONVALLEY
                    </h2>
                    <p className="banner-para">
                      We are a bunch of tech enthusiasts determined to <br />
                      uplift the society utilising the latest technologies
                      around us
                    </p>
                    <Link
                      to={"/signup"}
                      className="login-button btn btn-warning"
                      variant="outline-warning"
                    >
                      Signup
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md="6">
                <img className="certi" src={img} alt="" />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className="footer">
        <div className="footerr m-2">
          <Container>
            <Row>
              <Col md="6">
                <h3>EDISONVALLEY</h3>
                <p>
                  2020 © Edisonvalley. Developed by Shabin
                  <br />A tech enthusiast
                </p>
              </Col>
              <Col md="2">
                <h4>RESOURCES</h4>
                <p className="footerpara">Privacy Poilcy</p>
                <p className="footerpara">Terms & Conditions</p>
              </Col>
              <Col md="2">
                <h4>COMPANY</h4>
                <p className="footerpara">About Us</p>
                <p className="footerpara">Features</p>
              </Col>
              <Col md="2">
                <h4>Social Links</h4>
                <div className="mx-3">
                  <FaFacebook className="text-primary" />
                  <FaTwitter className="text-info mx-4" />
                  <FaGoogle className="text-danger" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
}
