import styles from './index.css';
import { Component } from 'react';
import { connect } from 'dva';
import { Checkbox } from 'antd';
import { Button } from 'antd';

@connect(state => {
  return { list: state.global.list }
})
class Listtwo extends Component {
  state = {
    size: 'large',
  }

  delet(index) {
    let str = JSON.parse(JSON.stringify(this.props.list));
    str.splice(index, 1);
    this.props.dispatch({
      type: 'global/setList',
      payload: str
    });
  }

  onChange(index) {
    let str = JSON.parse(JSON.stringify(this.props.list));
    str[index].isok = !str[index].isok;
    this.props.dispatch({
      type: 'global/setList',
      payload: str
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
            this.props.list.map((items, index) => {
              if (items.isok === false) {
                return (
                  <li key={index} className={styles.li}>
                    <Checkbox className={styles.select} checked={items.isok} onChange={this.onChange.bind(this, index)}>
                    </Checkbox>
                    {items.val}
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

export default Listtwo;