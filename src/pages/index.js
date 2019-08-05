import styles from './index.css';
import { Component } from 'react';
import { Checkbox } from 'antd';
import { Button } from 'antd';

export default class List extends Component {
  state = {
    size: 'large',
  }
  onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  }
  delet = () => {
    console.log('删除');
  }

  render() {
    return (
      <div className={styles.box} >
        <h4 className={styles.title}>
          {this.props.listName.name}
        </h4>
        <ul className={styles.ul}>

          <li className={styles.li}>
            <Checkbox className={styles.select} onChange={this.onChange}>
            </Checkbox>
            <Button size={this.state.size} className={styles.left} onClick={this.delet}>删除</Button>
          </li>
        </ul>
      </div>
    )
  }
}