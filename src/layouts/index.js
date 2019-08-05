import styles from './index.css';
import { Component } from 'react';
import { connect } from 'dva';
import { Layout, Input } from 'antd';
import List from './../pages/index';
const { Search } = Input;
const { Header, Footer, Content } = Layout;

class Listtodo extends Component {
  state = {
    lists: [{
      name: '你知道的'
    }],
    one: {
      name: '全部',
      list: [{}]
    },
    two: {
      name: '完成',
      list: [{}]
    },
    thr: {
      name: '未完成',
      list: [{}]
    }
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
              onSearch={value => {
                this.props.dispatch({
                  type:'global/setList',
                  payload:value
                })
                console.log(this.props.global.list);
                console.log(this.props);
              }}
              className={styles.inputval}
            />
          </Header>
          <Content className={styles.box2}>
            <div className={styles.box3}>
              <List className={styles.list} listName={this.state.one} />
              <List className={styles.list} listName={this.state.two} />
              <List className={styles.list} listName={this.state.thr} />
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
    ...state
  })
}
export default connect(todolist)(Listtodo)

