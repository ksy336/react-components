import { connect } from 'react-redux';
import Home from '../../components/Home/Home.tsx';

// @ts-ignore
import searchArticles from '../store/action-creators/home.ts';

// @ts-ignore
import { HomeState } from '../types/home.ts';

const mapStateToProps = (state: HomeState) => ({
  news: state.news,
});
const mapDispatchToProps = {
  searchArticles,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
