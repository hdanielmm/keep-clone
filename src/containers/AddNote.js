import { connect } from "react-redux";
import App from "../components/App";
import { addNote } from "../actions/actionCreators";

const mapStateToProps = state => {
  return {
    notes: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNote(note) {
      dispatch(addNote(note));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

