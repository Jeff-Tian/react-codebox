# react-codebox

验证码输入框的 React 实现.

[在线 demo](https://jeff-tian.github.io/react-codebox/)

## Install

```bash
yarn add @jeff-tian/react-codebox
```

或者

```bash
npm i @jeff-tian/react-codebox --save
```

## Usage

```jsx harmony
import React, { Component } from "react";
import Codebox from "@jeff-tian/react-codebox";

class App extends Component {
  render() {
    return (
      <div>
        <Codebox
          type="text"
          length={4}
          validator={(input, index) => {
            return /\d/.test(input);
          }}
          onChange={codeArray => {
            console.log(codeArray);
          }}
        />
      </div>
    );
  }
}
```

### License

The [MIT License](https://github.com/jeff-tian/react-codebox/blob/master/LICENSE)
