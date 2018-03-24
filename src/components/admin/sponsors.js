import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSponsors} from '../../actions/admin';
import Loading from '../../components/panels/Loading';


class Sponsors extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.props.fetchSponsors()
  }

  render() {
    const sponsors = this.props.sponsors;
    if (sponsors){
      return (
        <div>
          <h2>FHCK Sponsors and doners</h2>
        </div>
      );
    } else {
      <Loading/>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    sponsors: state.admin.sponsors
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSponsors: () => dispatch(fetchSponsors())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sponsors);
