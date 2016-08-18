import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import all the actions
import * as actionCreators from '../actions/actionCreators';

//this is the main app, which has the html link, to which connect will pass all state data to
import Main from './Main';

function mapStateToprops(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

// 1. connect(x, y)(compnetName) injects the data from our store into whatever level component that we actually need
// 2. mapStateToprops hold all posts and comments. mapDispatchToProps holds the actionCreators
const App = connect(mapStateToprops, mapDispatchToProps)(Main);

export default App;
