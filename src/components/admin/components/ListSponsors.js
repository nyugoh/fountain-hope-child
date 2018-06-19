import React from 'react';
import { Icon } from 'semantic-ui-react';
import moment from "moment/moment";

class ListSponsors extends React.Component {
  render() {
    const { sponsors } = this.props;
    return (
      <div>
        {sponsors && sponsors.length === 0 ? <div class="ui info message">
          <div class="header">Ooopps... !!</div>
          <p>There are no sponsors or donors yet.</p>
          <p>Use the add sponsors form on your right to add them.</p>
        </div>:<h4>List of sponsors and donors</h4>
        }
        <table className='ui table celled stackable blue bordered'>
          <thead>
          <tr>
            <th className='ui sortable'>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Status</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Hide/Show</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          {sponsors && sponsors.map((sponsor, index) =>{
            return (
              <tr id={index}>
                <td>{sponsor.fullName}</td>
                <td>{sponsor.email}</td>
                <td>{sponsor.message.length>50? sponsor.message.substring(0, 50)+' ...': sponsor.message}</td>
                <td><div class="ui ribbon label green">Showing</div></td>
                <td>{moment(sponsor.createdAt).format('DD/MMMM/YYYY')}</td>
                <td>
                  <Icon name='large pencil blue'/>
                  {/*<Link to={`/admin/kids/${kid._id}/edit`}><Icon name='large pencil blue'/></Link>*/}
                </td>
                <td>
                  {/*<ArchiveModal
                    kid={sponsort}
                    archiveKid={this.archiveKid.bind(this)}/>*/}
                </td>
                <td>
                  {/*<DeleteModal
                    kid={kid}
                    deleteKid={this.deleteKid.bind(this)}/>*/}
                </td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListSponsors;
