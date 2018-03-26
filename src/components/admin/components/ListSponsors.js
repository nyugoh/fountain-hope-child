import React from 'react';
import {getPages} from "../../../global/Pagination";
import moment from "moment/moment";

function ListSponsors(props) {
  const {sponsors, total} = props.sponsors;
  const none = total === 0;
  let pages = getPages(total, '/admin/sponsors');
  // TODO:: Add edit and delete sponsors, toggle them on screen
  return (
    <div>
      {none? <div class="ui info message">
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
        </tr>
        </thead>
        <tbody>
        {sponsors.map((sponsor, index) =>{
          return (
            <tr id={index}>
              <td>{sponsor.fullName}</td>
              <td>{sponsor.email}</td>
              <td>{sponsor.message.length>50? sponsor.message.substring(0, 50)+' ...': sponsor.message}</td>
              <td><div class="ui ribbon label green">Showing</div></td>
              <td>{moment(sponsor.createdAt).format('DD/MMMM/YYYY')}</td>
            </tr>
          );
        })}
        </tbody>
        <tfoot>
        <tr><th colspan="6">
          <div className="ui right floated pagination menu tiny">
            <a className="icon item">
              <i className="left chevron icon"></i>
            </a>
            {pages.map((url, index)=>{
              return (<a className="item" href={url}>{index+1}</a>)
            })}
            <a className="icon item">
              <i className="right chevron icon"></i>
            </a>
          </div>
        </th>
        </tr></tfoot>
      </table>
    </div>
  );
}

export default ListSponsors;
