import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Button, Icon, Modal } from 'semantic-ui-react';
import Message from '../components/forms/Contact-message';
import Story from '../components/panels/story';
import SponsorMessage from '../components/panels/sponsors';
import {fetchKids, sendMessage } from "../actions/kids";
import Donate from '../containers/Donate';

class ListKids extends Component {
    constructor(props) {
        super(props);
        this.state = {
          page: 1,
          isFetching: false,
          disabled: false
        }
    };

    sendMessage = message => (this.props.sendMessage(message));

    loadMore = () => {
        this.setState({ isFetching: true});
        this.props.fetchKids(`?page=${this.props.page+1}`).then( ()=>{
          this.setState({ isFetching: false});
          this.setState({ disabled: this.props.isEnd});
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
              disabled={this.state.disabled}
              positive>More ...</Button>
        </Grid.Column>
        <Grid.Column width='6'>
          <Message sendMessage={this.sendMessage}/>
          <div className="ui horizontal divider"><Icon name={'crosshairs'}/></div>
          <SponsorMessage sponsors={this.props.sponsors}/>
          <Modal trigger={<Button>Donate</Button>} size={'tiny'}>
            <Modal.Header>Make a donation</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Donate/>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    )
  }
}

const mapStateToProps = (state) => ({
  kids: state.kids.kids,
  page: state.kids.page,
  isEnd: state.kids.isEnd,
  sponsors: state.admin.sponsors
});

export default connect(mapStateToProps, { fetchKids, sendMessage })(ListKids);
