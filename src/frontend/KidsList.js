import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Button} from 'semantic-ui-react';
import Message from '../components/forms/Contact-message';
import Story from '../components/panels/story';
import SponsorMessage from '../components/panels/sponsors';
import {fetchKids, sendMessage} from "../actions/kids";

class ListKids extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            isFetching: false
        }
    };

    loadMore = () => {
        this.setState({ isFetching: true});
        this.props.fetchKids(`?page=${this.props.page+1}`).then( ()=>{
            this.setState({ isFetching: false});
        })
    };

  render() {
    const { kids } = this.props;
    return (
    <Grid columns='1'>
      <Grid.Row columns='2'>
        <Grid.Column width='10'>
          <h3>Kids Stories at FHCK</h3>
          {!!kids && <Story kids={kids}/>}
          <Button
              onClick={this.loadMore}
              loading={this.state.isFetching}
              positive>More ...</Button>
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
  }
}

const mapStateToProps = (state) => ({
  kids: state.kids.kids,
  page: state.kids.page
});

export default connect(mapStateToProps, { fetchKids })(ListKids);
