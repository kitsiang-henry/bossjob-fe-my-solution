import React from 'react';
import styles from '../../styles/Home.module.css';

const Filter = () => {
    return (
        <div className={styles.outerfilter}>
            <div className={styles.filter}>
                <p className={styles.filterlabel}><strong>Filter results</strong></p>
            </div>
        </div>
    )
};

export default Filter;