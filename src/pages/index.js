import styles from './index.css';
import { Component } from 'react';

import All from '../components/All';

class Index extends Component {

  render() {
    return (
      <div className={styles.box3}>

        <All className={styles.list} contents="all" />
        <All className={styles.list} contents="Selected" />
        <All className={styles.list} contents="NoSelected" />

      </div>
    )
  }
}

export default Index;