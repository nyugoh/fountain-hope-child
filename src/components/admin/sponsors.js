import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Grid, Button, Modal, Icon } from 'semantic-ui-react';
import { addSponsor, archiveSponsor, deleteSponsor, editSponsor } from '../../actions/admin';
import { uploadFiles } from '../../actions/kids';
import ListSponsors from "./components/ListSponsors";
import AddSponsor from "./components/AddSponsor";

class Sponsors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isOpen: false,
      isDone: false,
      error: []
    };
  };

  openModal() {
    this.setState({ isOpen: true });
  };

  archiveSponsor = sponsor => this.props.archiveSponsor(sponsor);

  deleteSponsor = sponsor => this.props.deleteSponsor(sponsor);

  submit = (sponsor, files) =>{
    this.setState({ isLoading: true });
    let form = new FormData();
    for(let i in files) form.append(files[i].name, files[i]);
    this.props.addSponsor(sponsor).then( () => {
      if (Object.keys(form).length > 0)
        this.props.uploadFiles(form).then( ()=> {
          this.setState({ isLoading: false});
          this.setState({ isOpen: false });
        });
      else{
        this.setState({ isOpen: false });
        this.setState({ isLoading: false});
      }
    }).catch(error => {
      this.setState({ error: error.message });
    });
  };

  editSponsor = (sponsor, files) =>{
    this.setState({ isLoading: true });
    let form = new FormData();
    for(let i in files) form.append(files[i].name, files[i]);
    this.props.editSponsor(sponsor).then( () => {
      if (Object.keys(form).length > 0)
        this.props.uploadFiles(form).then( ()=> {
          this.setState({ isLoading: false});
          this.setState({ isDone: true });
        });
      else{
        this.setState({ isLoading: false});
        this.setState({ isDone: true });
      }
    }).catch(error => {
      this.setState({ error: error.message });
    });
  };

  render() {
    const {sponsors, sponsorAdded} = this.props;
    return (
      <div>
        <h2>FHCK Sponsors and donors</h2>
        <Modal size='tiny' trigger={<Icon  circular color={'green'} size={'large'} name={'plus'} style={{position: 'relative', left: '300px'}} onClick={this.openModal.bind(this)}/>} open={this.state.isOpen}>
          <Modal.Header>
            Add sponsor
            <Icon name={'window close outline'} size={'small'} style={{position: 'relative', left: '300px'}} onClick={()=> { this.setState({isOpen:false})}}/>
          </Modal.Header>
          <Modal.Content>
            <AddSponsor
              isLoading={this.state.isLoading}
              error={this.state.error}
              submit={this.submit}/>
            <div className="ui hidden divider"/>
            <br/><br/>
          </Modal.Content>
        </Modal>
        <Grid>
          <Grid.Row>
            <Grid.Column width='16'>
              {sponsorAdded==='ok'?<div className="ui primary message">
                <p>Sponsor added successfully ...</p>
              </div>: ''}
              <ListSponsors
                isLoading={this.state.isLoading}
                isDone={this.state.isDone}
                error={this.state.error}
                archiveSponsor={ this.archiveSponsor.bind(this)}
                deleteSponsor={ this.deleteSponsor.bind(this)}
                editSponsor={ this.editSponsor.bind(this)}
                sponsors={sponsors}/>
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

export default connect(mapStateToProps, { addSponsor, uploadFiles, archiveSponsor, deleteSponsor, editSponsor })(Sponsors);
