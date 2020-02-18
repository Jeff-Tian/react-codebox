import React, { Component } from "react";
import Codebox from "../../src/index";
import "./app.css";

import pkg from "../../package.json";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basicCode: "",
      numberCode: "",
      passwordCode: ""
    };
  }
  componentDidCatch(error, info) {
    console.error(error);
  }
  render() {
    return (
      <div className="container">
        <a target="_blank" href={`https://github.com/jeff-tian/react-codebox`}>
          <svg
            width="80"
            height="80"
            viewBox="0 0 250 250"
            style={{
              fill: "#64CEAA",
              color: "#fff",
              position: "absolute",
              top: "0",
              border: 0,
              right: 0
            }}
          >
            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
            <path
              d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
              fill="currentColor"
              style={{ transformOrigin: "130px 106px" }}
              className="octo-arm"
            />
            <path
              d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
              fill="currentColor"
              className="octo-body"
            />
          </svg>
        </a>
        <div className="meta">
          <h1>
            {pkg.name}@{pkg.version}
          </h1>
          <p className="desc">{pkg.description}</p>
        </div>
        <div className="content">
          <h1>实例</h1>
          <div className="example-item">
            <h3>
              基本 <span className="desc">可接收任意字符</span>
              当前值: <span>{this.state.basicCode}</span>
            </h3>
            <Codebox
              length={6}
              onChange={codeArray => {
                this.setState({
                  basicCode: codeArray.map(v => (v === "" ? " " : v)).join("")
                });
              }}
            />
          </div>
          <div className="example-item">
            <h3>
              数字验证码 <span className="desc">仅接收输入的数字</span>
              当前值: <span>{this.state.numberCode}</span>
            </h3>
            <Codebox
              length={4}
              validator={(input, index) => {
                return /\d/i.test(input);
              }}
              onChange={codeArray => {
                this.setState({
                  numberCode: codeArray.map(v => (v === "" ? " " : v)).join("")
                });
              }}
            />
          </div>
          <div className="example-item">
            <h3>
              数字验证码 <span className="desc">仅接收输入的数字（Dash 样式）</span>
              当前值: <span>{this.state.numberCode}</span>
            </h3>
            <Codebox
              style='dashed'
              length={6}
              validator={(input, index) => {
                return /\d/i.test(input);
              }}
              onChange={codeArray => {
                this.setState({
                  numberCode: codeArray.map(v => (v === "" ? " " : v)).join("")
                });
              }}
            />
          </div>
          <div className="example-item">
            <h3>
              密码输入框 <span className="desc">作为密码输入</span>
              当前值: <span>{this.state.passwordCode}</span>
            </h3>
            <Codebox
              type="password"
              length={6}
              onChange={codeArray => {
                this.setState({
                  passwordCode: codeArray
                    .map(v => (v === "" ? " " : v))
                    .join("")
                });
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
