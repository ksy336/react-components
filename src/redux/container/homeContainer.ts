import { connect } from 'react-redux';
import Home from '../../components/Home/Home';
import { searchArticles } from '../store/action-creators/home';
import { HomeState } from '../types/home';

const mapStateToProps = (state: HomeState) => ({
  news: state.news,
});
const mapDispatchToProps = {
  searchArticles,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);