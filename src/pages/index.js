import styles from './index.css';
import { Component } from 'react';

import All from '../layouts/children/All';
import Selected from '../layouts/children/Selected';
import Unselected from '../layouts/children/Unselected';

class Index extends Component {
  render() {
    return (
      <div className={styles.box3}>
        <All className={styles.list} />
        <Selected className={styles.list} />
        <Unselected className={styles.list} />
      </div>
    )
  }
}

export default Index;