import styles from './index.css';
import { Component } from 'react';
import { connect } from 'dva';
import { Checkbox } from 'antd';
import { Button } from 'antd';

@connect(state => {
  return {
    list: state.list.list
  }
})
class All extends Component {
  state = {
    size: 'large',
  }

  delet = (index) => {
    this.props.dispatch({
      type: 'list/remove',
      payload: index
    });
  }

  onChange = (index) => {
    this.props.dispatch({
      type: 'list/toggle',
      payload: index
    });
  }

  render() {
    return (
      <div className={styles.box} >
        <h4 className={styles.title}>
          {
            this.props.contents
          }
        </h4>

        <ul className={styles.ul}>
          {
            this.props.list.map((item, index) => {
              if (this.props.contents === 'all') {
                return (
                  <li
                    key={index}
                    className={styles.li}
                  >
                    <Checkbox
                      className={styles.select}
                      checked={item.isok}
                      onChange={e => this.onChange(index)}
                    >
                    </Checkbox>
                    {item.val}
                    <Button
                      size={this.state.size}
                      className={styles.left}
                      onClick={e => this.delet(index)}
                    >
                      删除
                    </Button>
                  </li>
                )
              } else if (this.props.contents === 'Selected' && item.isok === true) {
                return (
                  <li
                    key={index}
                    className={styles.li}
                  >
                    <Checkbox
                      className={styles.select}
                      checked={item.isok}
                      onChange={e => this.onChange(index)}
                    >
                    </Checkbox>
                    {item.val}
                    <Button
                      size={this.state.size}
                      className={styles.left}
                      onClick={e => this.delet(index)}
                    >
                      删除
                    </Button>
                  </li>
                )
              } else if (this.props.contents === 'NoSelected' && item.isok === false) {
                return (
                  <li
                    key={index}
                    className={styles.li}
                  >
                    <Checkbox
                      className={styles.select}
                      checked={item.isok}
                      onChange={e => this.onChange(index)}
                    >
                    </Checkbox>

                    {item.val}

                    <Button
                      size={this.state.size}
                      className={styles.left}
                      onClick={e => this.delet(index)}
                    >
                      删除
                    </Button>

                  </li>
                )
              }

            })

          }
        </ul>
      </div>
    )
  }
}



export default All;