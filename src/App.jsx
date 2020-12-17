import React from 'react';
import ReactDOM from 'react-dom';
import { Page, Button, Toolbar, Row, Col } from 'react-onsenui';
import { notification } from 'onsenui';

import './style.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      turn: 0,
    }
    this.setData = this.setData.bind(this);
    this.makeMark = this.makeMark.bind(this);
    this.check = this.check.bind(this);
  }

  setData(col, row) {
    var s = this.state;
    if (s.data[col][row] != 0) {
      return;
    }

    if (s.turn % 2 == 0) {
      s.data[col][row] = 1;
    }
    else {
      s.data[col][row] = -1;
    }
    s.turn++;
    this.setState(s);

    var isGame = this.check();
    if(isGame == 0){
      return;
    }
    else if (isGame == 1) {
      notification.alert('丸の勝ち！');
    }
    else if(isGame == -1){
      notification.alert("バツの勝ち！");
    }
    else if(isGame == -99){
      notification.alert("ひきわけ。");
    }
    this.setState({data: [[0,0,0],[0,0,0],[0,0,0]], turn: 0});
  }

  makeMark(d) {
    if (d == 1) {
      return '○';
    }
    else if (d == -1) {
      return '×';
    }
    else {
      return ' ';
    }
  }

  check() {
    var d = this.state.data;
    for (var i = 0; i < 3; i++) {
      if (d[0][i] != 0 && d[0][i] == d[1][i] && d[0][i] == d[2][i]) {
        return d[0][i];
      }
      if (d[i][0] != 0 && d[i][0] == d[i][1] && d[i][0] == d[i][2]) {
        return d[i][0];
      }
    }
    if (d[0][0] != 0 && d[0][0] == d[1][1] && d[0][0] == d[2][2]) {
      return d[0][0];
    }
    else if (d[0][2] != 0 && d[0][2] == d[1][1] && d[0][2] == d[2][0]) {
      return d[0][2];
    }
    else if (this.state.turn >= 9) {
      return -99;
    }
    return 0;
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>Onsen UI</div>
      </Toolbar>
    );
  }

  render() {
    var cname = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    var d = this.state.data;
    for(var i=0; i<3; i++){
      for(var j=0; j<3; j++){
        if(d[i][j] == 1){
          cname[i][j] = "box red";
        }
        else if(d[i][j] == -1){
          cname[i][j] = "box blue";
        }
        else{
          cname[i][j] = "box";
        }
      }
    }
    return (
      <Page renderToolbar={this.renderToolbar}>
        <Row>
          <Col className={cname[0][0]} onClick={() => this.setData(0, 0)}>{this.makeMark(this.state.data[0][0])}</Col>
          <Col className={cname[0][1]} onClick={() => this.setData(0, 1)}>{this.makeMark(this.state.data[0][1])}</Col>
          <Col className={cname[0][2]} onClick={() => this.setData(0, 2)}>{this.makeMark(this.state.data[0][2])}</Col>
        </Row>
        <Row>
          <Col className={cname[1][0]} onClick={() => this.setData(1, 0)}>{this.makeMark(this.state.data[1][0])}</Col>
          <Col className={cname[1][1]} onClick={() => this.setData(1, 1)}>{this.makeMark(this.state.data[1][1])}</Col>
          <Col className={cname[1][2]} onClick={() => this.setData(1, 2)}>{this.makeMark(this.state.data[1][2])}</Col>
        </Row>
        <Row>
          <Col className={cname[2][0]} onClick={() => this.setData(2, 0)}>{this.makeMark(this.state.data[2][0])}</Col>
          <Col className={cname[2][1]} onClick={() => this.setData(2, 1)}>{this.makeMark(this.state.data[2][1])}</Col>
          <Col className={cname[2][2]} onClick={() => this.setData(2, 2)}>{this.makeMark(this.state.data[2][2])}</Col>
        </Row>
      </Page>
    );
  }

}