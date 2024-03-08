import Icon from '@Icons';
import styles from './styles.module.css';


function Empty() {
  return (
    <div className={styles['container']}>
      <div>
        <Icon name='inbox-message-dots' />
      </div>
      <span>No data</span>
    </div>
  );
}


export default Empty;
