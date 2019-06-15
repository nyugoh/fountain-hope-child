import React from "react";
import moment from "moment";
import { Image, Divider } from "semantic-ui-react";

function KidUpdates({ updates }) {
  return (
    <div>
      {!!updates &&
        updates.map((update, index) => {
          let days = moment().diff(moment(update.createdAt), "days");
          let weeks = moment().diff(moment(update.createdAt), "weeks");
          let months = moment().diff(moment(update.createdAt), "months");
          let years = moment().diff(moment(update.createdAt), "years");
          let lastUpdate = "";
          if (days == 0) lastUpdate = "Today";
          else if (days == 1) lastUpdate = "Yesterday";
          else if (days >= 0 && days <= 7) lastUpdate = `${days} days ago`;
          else if (weeks >= 1 && weeks <= 10) lastUpdate = `${weeks} weeks ago`;
          else if (months > 0 && months <= 12)
            lastUpdate = `${months} months ago`;
          else if (years > 0) lastUpdate = `${years} years ago`;
          return (
            <div className="update" id={index} style={{ overflow: "auto" }}>
              <p className="update-date">{lastUpdate}</p>
              <Image
                rounded
                size={"small"}
                floated={"left"}
                src={update.files && "/api/v1/images/" + update.files[0]}
                alt={index}
              />
              <p>{update.body}</p>
              <Divider />
              <div style={{ clear: "both" }} />
            </div>
          );
        })}
    </div>
  );
}

export default KidUpdates;
