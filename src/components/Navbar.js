import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../screens/Cart";
import Modal from "../Modal";
import { useCart } from "./ContextReducer";

export default function Navbar() {
  const [cartView, setCartView] = useState(false);
  let data = useCart();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: "var(--color-primary)",
          color: "var(--color-bg)",
        }}
      >
        <div className="container-fluid">
          <Link
            to="/"
            className="navbar-brand d-flex align-items-center"
            style={{ color: "var(--color-bg)" }}
          >
            <img
              src="/FoodBuzzzLogo.png" 
              alt="Food Buzzz Logo"
              style={{ height: "100px", marginRight: "13px" }}
            />
            <span style={{ fontSize: "1.5rem", fontWeight: 600 }}>
              Food Buzzz
            </span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link
                  className="navbar-brand fs-1 fst-italic"
                  to="/"
                  style={{ color: "var(--color-bg)" }}
                >
                  Home
                </Link>
              </li>

              {/*{(localStorage.getItem("authToken")) ?
                <li className="nav-item">
                  <Link className="nav-link active fs-5" aria-current="page" to="/">MyOrders</Link>
                </li>
                : ""}*/}
            </ul>
            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link
                  className="btn mx-1"
                  to="/login"
                  style={{
                    backgroundColor: "var(--color-bg)",
                    color: "var(--color-primary)",
                  }}
                >
                  Log In
                </Link>

                <Link
                  className="btn mx-1"
                  to="/signup"
                  style={{
                    backgroundColor: "var(--color-bg)",
                    color: "var(--color-primary)",
                  }}
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div>
                <div
                  className="btn mx-2"
                  onClick={() => setCartView(true)}
                  style={{
                    backgroundColor: "var(--color-bg)",
                    color: "var(--color-primary)",
                    border: "1px solid var(--color-primary)",
                  }}
                >
                  MyCart{" "}
                  <span
                    className="badge-custom"
                    style={{
                      display: "inline-block",
                      padding: "0.25em 0.6em",
                      fontSize: "0.75rem",
                      borderRadius: "10rem",
                      verticalAlign: "baseline",
                    }}
                  >
                    {data.length}
                  </span>
                </div>

                {cartView ? (
                  <Modal onClose={() => setCartView(false)}>
                    <Cart />
                  </Modal>
                ) : null}
                <div
                  className="btn mx-1"
                  to="/login"
                  style={{
                    backgroundColor: "var(--color-bg)",
                    color: "var(--color-primary)",
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
