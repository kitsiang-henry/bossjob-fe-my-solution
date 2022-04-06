import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';
import { icons } from '../../assets';

const Pagination = () => {
    const page = useSelector((state) => state.page);
    const placeholderData = useSelector((state) => state.placeholderData);
    const error = useSelector((state) => state.error);
    const dispatch = useDispatch();
    const router = useRouter();

    let num_list = [1, 2, 3];

    // const handleClick = (e, path) => {
    //     e.preventDefault();
    //     router.push(path);
    // };

    return (
        <div className={styles.pagination}>
            <a href='' onClick={() => dispatch(pageDecrement())}>
                <Image src={icons.ChevronLeft} alt='Previous' />
            </a>
            {num_list.map(num => {
                return (
                    <span>{num}</span>
                )
            })}
            <a href='' onClick={() => dispatch(pageIncrement())}>
                <Image src={icons.ChevronRight} alt='Next' />
            </a>
        </div>
    )
};

export default Pagination;