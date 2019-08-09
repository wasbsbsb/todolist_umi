import styles from './index.css';
import { Component } from "react";
import { connect } from 'dva';
import Link from 'umi/link';

@connect(state => {
  return ({
    history: state.list.historys
  })
})
class Historys extends Component {

  goBakc(index) {
    this.props.dispatch({
      type: 'list/goBack',
      payload: index
    })
  }

  render() {
    return (<div className={styles.box3}>
      <ul className={styles.headerLists}>
        {
          (() => {
            var list = [];
            var obj = this.props.history[0];
            Object.keys(obj).forEach(function (key) {
              list.push(key);
            });
            return list.map((item, index) => {
              return (
                <li key={index} className={styles.headerList}>
                  {item}
                </li>
              )
            })
          })()
        }
      </ul>
      <div className={styles.box4}>
        {
          this.props.history.map((item, index) => {
            return (
              <ul key={index} className={styles.historys}>
                <li className={styles.historysList}>{item.historyIndex}</li>
                <li className={styles.historysList}>{item.operation}</li>
                <li className={styles.historysList}>{item.content}</li>
                <li className={styles.historysList}>
                  <button className={styles.gobakc}>
                    <Link to='/' onClick={this.goBakc.bind(this, index)}>
                      goback
                    </Link>
                  </button>
                </li>
              </ul>
            )
          })
        }

      </div>
    </div>)
  }
}

export default Historys