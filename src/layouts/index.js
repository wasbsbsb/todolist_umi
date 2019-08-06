import styles from './index.css';
import { Component } from 'react';
import { connect } from 'dva';
import { Layout, Input } from 'antd';

import List from './../pages/index';
import Gouxuan from './../pages/gouxuan';
import Notodo from './../pages/notodo';

const { Search } = Input;
const { Header, Footer, Content } = Layout;

class Listtodo extends Component {
  add = value => {
    let json = {
      val: value,
      isok: true,
    }
    let str = JSON.stringify(this.props.list);
    str = JSON.parse(str);
    str.push(json);
    this.props.dispatch({
      type: 'global/setList',
      payload: str
    });
    this.setState({
      ...this.state,
      lists: str,
      one: {
        name: '全部',
        list: str
      }
    })
    this.refs.search.input.state.value = '';
  }
  render() {
    return (
      <div className={styles.box}>
        <Layout className={styles.box}>

          <Header>
            <Search
              placeholder="输入需要计入的值"
              enterButton="提交"
              size="large"
              onSearch={this.add}
              className={styles.inputval}
              ref="search"
            />
          </Header>

          <Content className={styles.box2}>
            <div className={styles.box3}>
              <List className={styles.list} />
              <Gouxuan className={styles.list} />
              <Notodo className={styles.list} />
            </div>
          </Content>

          <Footer>Footer</Footer>

        </Layout>
      </div>
    )
  }
}

function todolist(state) {
  return ({
    list: state.global.list
  })
}

export default connect(todolist)(Listtodo)

