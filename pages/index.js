import styles from '../styles/Home.module.css';
import HorizontalLine from '../components/HorizontalLine/HorizontalLine';
import Header from '/components/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import Filter from '../components/Filter/Filter';
import JobList from '../components/JobList/JobList';
import Pagination from '../components/Pagination/Pagination';
import { wrapper } from '../middleware/configureStore';
import { END } from 'redux-saga';
import { loadData } from '../actions/actions';

export default function Home() {
  return (
    <div className={styles.app}>
      <div className={styles.appWrapper}>
        <Header />
        <div className={styles.searchfilter}>
          <SearchBar />
          <HorizontalLine />
          <Filter />
        </div>
        <div>
          <HorizontalLine />
          <JobList />
        </div>
        <div>
          <HorizontalLine />
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async ({ req }) => {
  if(!store.getState().placeholderData) {
    store.dispatch(loadData())
    store.dispatch(END)
  }
    
  await store.sagaTask.toPromise()
})