/** @format */

import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { CardBody } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupApi } from "../Store/login/UseApi";

// export default function LoginPage() {
const SignupPage = () => {
  const { loading } = useSelector(state => ({
    loading: state.LoginReducer.loading,
  }));

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [state, setState] = useState({ username: "", password: "" });

  const HandleSignup = e => {
    e.preventDefault();
    dispatch(signupApi({ state, navigate }));
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <Card
        className="m-auto"
        style={{ width: "400px", minHeight: "500px", marginTop: "100px" }}
      >
        <Form onSubmit={e => HandleSignup(e)}>
          <CardBody>
            <h5>EDSIONVALLEY</h5>
            <p className="text-primary mt-5">Register</p>
            <p className="mt-5">Username</p>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={e => setState({ ...state, username: e.target.value })}
            />
            <p>Password</p>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              onChange={e => setState({ ...state, password: e.target.value })}
            />
            <Button
              type="submit"
              variant="primary"
              className="btn btn-primary mt-3 w-100"
            >
              {" "}
              {loading ? "loading..." : "signup"}
            </Button>

            <p className="text-center">
              Already have an Account?
              <Link to={"/login"} variant="link">
                Login
              </Link>
            </p>
            <p className="mt-5">
              © 2020 Edisonvalley. Design & Develop by Osperb
            </p>
          </CardBody>
        </Form>
      </Card>
    </div>
  );
};
export default SignupPage;
