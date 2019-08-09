import styles from './index.css';
import { Component } from 'react';
import { connect } from 'dva';
import { Layout, Input, Button } from 'antd';
import Link from 'umi/link';

const { Search } = Input;
const { Header, Footer, Content } = Layout;

@connect(state => {
  return {
    list: state.list.list
  }
})
class Bigbox extends Component {

  add = value => {
    let json = {
      listIndex: this.props.list.listIndex + 1,
      val: value,
      isok: true,
    }

    this.props.dispatch({
      type: 'list/add',
      payload: json
    });

    this.refs.search.input.state.value = '';
  }
  render() {
    const { pathname } = this.props.location
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
            {this.props.children}
          </Content>

          <Footer>

            <Button>
              <Link to={pathname === '/' ? '/historys' : '/'}>
                history
              </Link>
            </Button>

          </Footer>

        </Layout>
      </div>
    )
  }
}

export default Bigbox;

