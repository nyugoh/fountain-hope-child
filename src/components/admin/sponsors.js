import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid} from 'semantic-ui-react';
import { addSponsor } from '../../actions/admin';
import { uploadFiles } from '../../actions/kids';
import ListSponsors from "./components/ListSponsors";
import AddSponsor from "./components/AddSponsor";

class Sponsors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  submit = (sponsor, files) =>{
    this.setState({ isLoading: true });
    let form = new FormData();
    for(let i in files) form.append(files[i].name, files[i]);
    this.props.addSponsor(sponsor).then( () => {
      if (Object.keys(form).length > 0)
        this.props.uploadFiles(form).then( ()=> {
          this.setState({ isLoading: false});
        });
      else
        this.setState({ isLoading: false});

    }).catch(error => {
      console.log(error);
    });
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
              <AddSponsor
                isLoading={this.state.isLoading}
                submit={this.submit}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sponsors: state.admin.sponsors
});

export default connect(mapStateToProps, { addSponsor, uploadFiles })(Sponsors);
