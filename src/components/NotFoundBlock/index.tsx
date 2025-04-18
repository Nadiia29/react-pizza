import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock: React.FC = () => {
  return (
    <div>
      <h1 className={styles.root}>
        😕
        <br />
        Not Found
      </h1>
      <p className={styles.description}>
        Unfortunately this page is not available in our online store
      </p>
    </div>
  );
};
export default NotFoundBlock;
