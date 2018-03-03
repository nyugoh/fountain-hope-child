import React from 'react';
import moment from 'moment';

function KidUpdates({updates}) {
  return (
    <div>
      {!!updates && updates.map( (update, index) => {
        let days = moment().diff(moment(update.date), 'days');
        let lastUpdate = '';
        if (days> 1) {
          lastUpdate = `${days} days`;
        } else {
          lastUpdate = 'Today';
        }
        return <div className='update' id={index}>
          <p className='update-date'>{lastUpdate}</p>
          <p>{update.body}</p>
          <hr/>
        </div>
      })}
    </div>
  );
}

export default KidUpdates;
