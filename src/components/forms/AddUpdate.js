import React from "react";
import { Form, TextArea, Button, Header } from "semantic-ui-react";
import MessageDialog from "../panels/Message";

class AddUpdate extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: {
        kidId: props.id
      },
      files: {},
      loading: false,
      errors: []
    };
  }

  handleChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  upload = e => {
    const files = e.target.files;
    let imageNames = [];
    let images = [];
    for (let f in files)
      if (files[f].size > 0) {
        images.push(files[f]);
        imageNames.push(files[f].name);
      }
    this.setState({ data: { ...this.state.data, files: imageNames } });
    this.setState({ files: images });
  };

  submit = () => {
    this.props.submit(this.state.files, this.state.data);
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <Form onSubmit={this.submit}>
          <Header color={"grey"} as={"h3"}>
            Add an update
          </Header>
          <div className="ui divider" />
          <Form.Field>
            <Form.Field
              control={TextArea}
              required
              label="Update"
              className="kidUpdateStory"
              name="body"
              onChange={this.handleChange}
              placeholder="Describe the incidents/events that have happened to the child..."
            />
          </Form.Field>
          <hr />
          <h3>
            Documents/Images <small>(You can upload more than one)</small>
          </h3>
          <Form.Field>
            <input
              type="file"
              multiple="true"
              name="documents"
              onChange={this.upload}
              placeholder="Child documents ..."
            />
          </Form.Field>
          <hr />
          <br />
          <Button className="ui right floated" positive size="large">
            ADD
          </Button>
          <br />
          <br />
          {!!errors.confirmationError && (
            <MessageDialog message={errors.confirmationError} />
          )}
        </Form>
      </div>
    );
  }
}

export default AddUpdate;
