import React from 'react';
import {Input} from 'semantic-ui-react';

function SearchForm(props) {
  return (
    <Input
      icon={{ name: 'search', circular: true, link: true }}
      placeholder={props.placeholder}
    />
  );
}

export default SearchForm;
