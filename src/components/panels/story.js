import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Item } from "semantic-ui-react";
import moment from "moment";

function Story({ kids }) {
  return (
    <Item.Group divided>
      {kids.map((kid, index) => {
        var years = moment().diff(moment(kid.dob), "years");
        var months = moment().diff(moment(kid.dob), "months");
        if (months > 12) {
          var totalMonths = Math.abs(months % 12);
        } else {
          totalMonths = months;
        }
        console.log(years, totalMonths);
        if (kid.isShowing) {
          return (
            <Item key={index}>
              <Item.Image
                rounded
                src={
                  kid.profileImages && "/api/v1/images/" + kid.profileImages[0]
                }
                alt={index}
              />
              <Item.Content>
                <Item.Header as="a">
                  <Link to={"/kids/profile/" + kid._id}>
                    {kid.firstName} {kid.middleName}
                  </Link>
                </Item.Header>
                <Item.Meta>
                  <span className="cinema">
                    Age:{moment().diff(moment(kid.dob), "years")}yrs{" "}
                    {totalMonths} months
                  </span>
                </Item.Meta>
                <Item.Description>
                  <p className={"description"}>{kid.story}</p>
                </Item.Description>
              </Item.Content>
            </Item>
          );
        }
      })}
    </Item.Group>
  );
}

Story.propTypes = {};
Story.defaultProps = {};

export default Story;
