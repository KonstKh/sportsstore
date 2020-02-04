import React from 'react';
import {ToggleLink} from '../components/ToggleLink';

export const CategoryNavigation = (props: any) => {
  return (
    <React.Fragment>
      <ToggleLink to={`${props.baseUrl}/all`} exact={false}>All</ToggleLink>
      {props.categories && props.categories.map((cat: any) =>
        <ToggleLink key={cat} to={`${props.baseUrl}/${cat.toLowerCase()}`}>{cat}</ToggleLink>
      )}
    </React.Fragment>
  )
};
