import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import { addUpdate, uploadFiles } from "../../actions/kids";
import KidsUpdates from "../admin/updates";
import AddUpdate from "../forms/AddUpdate";
import { deleteUpdate, editUpdate } from "../../actions/admin";

class KidUpdate extends Component {
  constructor(props) {
    super();
    this.state = {
      data: {
        kidId: props.match.params.kidId
      },
      files: {},
      loading: false,
      errors: []
    };
  }

  deleteUpdate = update => this.props.deleteUpdate(update);

  editUpdate = update => this.props.editUpdate(update);

  submit = (files, data) => {
    let form = new FormData();
    for (let i in files) form.append(files[i].name, files[i]);
    this.props.addUpdate(data).then(() => {
      this.props.uploadFiles(form).then(() => {
        //TODO:: Clear/ reset the form
      });
    });
  };

  render() {
    let { kids, updates } = this.props;
    let id = this.props.match.params.kidId;
    let child = kids.filter(kid => kid._id === id);
    let kid = {};
    if (child.length > 0) {
      kid = child[0];
    }
    return (
      <Grid divided="vertically">
        <Grid.Row columns={1}>
          <Grid.Column>
            <div>
              <h2>
                {kid.firstName} {kid.middleName}'s updates
              </h2>
              <div className="ui divider" />
            </div>
            <KidsUpdates
              updates={updates}
              deleteUpdate={this.deleteUpdate.bind(this)}
              editUpdate={this.editUpdate.bind(this)}
              uploadFiles={this.props.uploadFiles.bind(this)}
              id={id}
            />
            <AddUpdate submit={this.submit.bind(this)} id={id} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  kids: state.kids.kids,
  updates: state.admin.updates
});

export default connect(
  mapStateToProps,
  { addUpdate, uploadFiles, deleteUpdate, editUpdate }
)(KidUpdate);
