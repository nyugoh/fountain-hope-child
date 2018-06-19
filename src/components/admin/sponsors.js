import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid} from 'semantic-ui-react';
import {fetchSponsors, addSponsor} from '../../actions/admin';
import Loading from '../../components/panels/Loading';
import ListSponsors from "./components/ListSponsors";
import AddSponsor from "./components/AddSponsor";

class Sponsors extends Component {
  constructor(props) {
    super(props);
  }

  submit = (data, files) =>{
    this.props.addSponsor(data, files);
  };

  render() {
    const {sponsors, sponsorAdded} = this.props;
    return (
      <div>
        <h2>FHCK Sponsors and donors</h2>
        <Grid>
          <Grid.Row columns='2' vertical>
            <Grid.Column width='10'>
              {sponsorAdded==='ok'?<div className="ui primary message">
                <p>Sponsor added successfully ...</p>
              </div>: ''}
              <ListSponsors sponsors={sponsors}/>
            </Grid.Column>
            <Grid.Column width='6'>
              <AddSponsor submit={this.submit}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sponsors: state.admin.sponsors,
  sponsorAdded: state.admin.status
});

export default connect(mapStateToProps, { addSponsor })(Sponsors);
