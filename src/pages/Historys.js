import styles from './index.css';
import { Component } from "react";

class Historys extends Component {
  render() {
    return (<div className={styles.box3}>
      <ul>
        <li>
          记录
        </li>
        <li>
          操作
        </li>
        <li>
          内容
        </li>
      </ul>
      <ul>
        <li>
          history
        </li>
      </ul>
    </div>)
  }
}

export default Historys