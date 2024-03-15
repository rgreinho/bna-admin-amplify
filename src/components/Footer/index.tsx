import styles from './styles.module.css';


function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className={styles['all-rights']}>
        <p>
          <span>PeopleForBikes</span>
          <span>&copy;Copyright 2023</span>
        </p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
}


export default Footer;
