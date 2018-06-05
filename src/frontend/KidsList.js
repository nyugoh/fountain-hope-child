import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid} from 'semantic-ui-react';
import Message from '../components/forms/Contact-message';
import Story from '../components/panels/story';
import SponsorMessage from '../components/panels/sponsors';
import {fetchKids, sendMessage} from "../actions/kids";
import Loading from '../components/panels/Loading';
import {getPages} from "../global/Pagination";

class ListKids extends Component {
  componentWillMount() {
    this.props.fetchKids(this.props.history.location.search);
  }

  sendMessage = (message) =>{
    this.props.sendMessage(message).then( () =>{
      this.props.fetchKids(this.props.history.location.search);
    });
  };

  render() {
    const {isFetching} = this.props;
    if (isFetching) {
      return (
        <Loading/>
      )
    } else if (!isFetching) {
      const {kids, total} = this.props.kids;
      let pages = getPages(total, '/kids');
      return (
        <Grid columns='1'>
          <Grid.Row columns='2'>
            <Grid.Column width='10'>
              <h3>Kids Stories at FHCK</h3>
              {!!kids && <Story kids={kids}/>}
              <div className="ui right floated pagination menu tiny">
                <a className="icon item">
                  <i className="left chevron icon"/>
                </a>
                {pages.map((url, index)=>{
                  return (<a className="item" href={url}>{index+1}</a>)
                })}
                <a className="icon item">
                  <i className="right chevron icon"/>
                </a>
              </div>
            </Grid.Column>
            <Grid.Column width='6'>
              <Message sendMessage={this.sendMessage}/>
              <br/><br/>
              <hr/>
              <SponsorMessage/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    } else {
      return (
        <Message message='Fatal error' body='Application crushed'/>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  kids: state.kids.kids,
  isFetching: state.kids.isFetching
});

const mapDispatchToProps = (dispatch) => ({
  fetchKids:(search) => dispatch(fetchKids(search)),
  sendMessage
});

export default connect(mapStateToProps, mapDispatchToProps)(ListKids);
