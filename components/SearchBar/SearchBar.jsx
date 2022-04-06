import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { icons } from '../../assets';

const SearchBar = () => {
    // const router = useRouter();
    // const { query } = router.query;

    return (
        <div className={styles.searchbar}>
            <Image className={styles.icon} src={icons.Search} alt='Search' />
            <input
                className={styles.input}
                placeholder='Search for job title or company name'
                type='text'
            />
        </div>
    )
};

export default SearchBar;
