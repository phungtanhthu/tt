import "bootstrap/dist/css/bootstrap.min.css";

import className from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./main.scss";

const cx = className.bind(styles);

type Props = {};

const ThongkeCT = (props: Props) => {
  return (
    <div className="d-flex h-100">
      <div className="sidebar bg-light p-4">
        <ul className="list-unstyled">
          <li>
            <a href="#" className="text-dark text-decoration-none">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="text-dark text-decoration-none">
              Campaign
            </a>
          </li>
          <li>
            <a href="#" className="text-dark text-decoration-none">
              Analytics
            </a>
          </li>
          <li>
            <a href="#" className="text-dark text-decoration-none">
              Social Network
            </a>
          </li>
          <li>
            <a href="#" className="text-dark text-decoration-none">
              Balance
            </a>
          </li>
          <li>
            <a href="#" className="text-dark text-decoration-none">
              Guide
            </a>
          </li>
          <li>
            <a href="#" className="text-dark text-decoration-none">
              Messages
            </a>
          </li>
          <li>
            <a href="#" className="text-dark text-decoration-none">
              Settings
            </a>
          </li>
        </ul>
      </div>
      <div className="main-content flex-grow-1 p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="m-0">Click Summary</h1>
          <button className="btn btn-primary">Download CSV</button>
        </div>
        <div className="chart-container d-flex justify-content-between">
          <div className="chart bg-light p-4">
            <h3 className="mb-2">Monthly</h3>
            <p className="mb-0 font-weight-bold">867,123k</p>
          </div>
          <div className="chart bg-light p-4">
            <h3 className="mb-2">Weekly</h3>
            <p className="mb-0 font-weight-bold">875,451</p>
          </div>
          <div className="chart bg-light p-4">
            <h3 className="mb-2">Daily</h3>
            <p className="mb-0 font-weight-bold">65,000</p>
          </div>
        </div>
        <div className="chart-container mt-4">
          <div className="chart bg-light p-4 w-100">
            <img src="chart.png" alt="Click Summary Chart" className="w-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThongkeCT;
