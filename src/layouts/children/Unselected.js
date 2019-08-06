import styles from './index.css';
import { Component } from 'react';
import { connect } from 'dva';
import { Checkbox } from 'antd';
import { Button } from 'antd';

@connect(state => {
  return { list: state.list.list }
})
class Unselected extends Component {
  state = {
    size: 'large',
  }

  delet(index) {
    this.props.dispatch({
      type: 'list/remove',
      payload: index
    });
  }

  onChange(index) {
    this.props.dispatch({
      type: 'list/toggle',
      payload: index
    });
  }

  render() {
    return (
      <div className={styles.box} >
        <h4 className={styles.title}>
          未勾选
        </h4>
        <ul className={styles.ul}>
          {
            this.props.list.map((item, index) => {
              if (item.isok === false) {
                return (
                  <li key={index} className={styles.li}>
                    <Checkbox className={styles.select} checked={item.isok} onChange={this.onChange.bind(this, index)}>
                    </Checkbox>
                    {item.val}
                    <Button size={this.state.size} className={styles.left} onClick={this.delet.bind(this, index)}>删除</Button>
                  </li>
                )
              } else {
                
              }
            })
          }
        </ul>
      </div>
    )
  }
}

export default Unselected;