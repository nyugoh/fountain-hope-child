import React from 'react';
import moment from "moment/moment";
import ArchiveSponsor from "../micros/ArchiveSponsor";
import DeleteSponsor from "../micros/DeleteSponsor";
import EditSponsor from "./EditSponsor";
import { Item, Divider, Label } from 'semantic-ui-react';

class ListSponsors extends React.Component {
  render() {
    const { sponsors } = this.props;
    return (
      <div>
        {sponsors && sponsors.length === 0 ? <div class="ui info message">
          <div class="header">Ooopps... !!</div>
          <p>There are no sponsors or donors yet.</p>
          <p>Use the add sponsors form on your right to add them.</p>
        </div>:<h4></h4>
        }
          {sponsors && sponsors.map((sponsor, index) =>{
            return (
              <Item.Group divided key={index}>
                <Item>
                  <Item.Image size='small' style={{width:'150px !important', height:'150px !important'}} src={`/api/v1/images/${sponsor.profileImages[0]}`}/>
                  <Item.Content>
                    <Item.Header as='h3'>
                      <span style={{marginRight:20}}>{sponsor.fullName}</span>
                      {sponsor.isShowing? <Label as='a' color='green' tag>
                        Showing
                      </Label> : <Label as='span' color='teal' tag>
                        Not-showing
                      </Label>}
                    </Item.Header>
                    <Item.Description style={{marginTop: 20, marginBottom: 20}}>{sponsor.message}</Item.Description>
                    <Item.Extra>
                      <DeleteSponsor
                        sponsor={sponsor}
                        deleteSponsor={this.props.deleteSponsor.bind(this)}/>
                      <ArchiveSponsor
                        sponsor={sponsor}
                        archiveSponsor={this.props.archiveSponsor.bind(this)}/>
                      <EditSponsor
                        isDone={this.props.isDone}
                        isLoading={this.props.isLoading}
                        error={this.props.error}
                        sponsor={sponsor}
                        submit={this.props.editSponsor.bind(this)}
                        uploadFiles={this.props.uploadFiles.bind(this)}/>
                    </Item.Extra>
                  </Item.Content>
                </Item>
                <Divider/>
              </Item.Group>
            );
          })}
      </div>
    );
  }
}

export default ListSponsors;
