import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from "../src/lib/PageHeader/PageHeader";
import Matrix from "../src/components/Matrix/Matrix";

const Console = props => {
  return (
    <div>
      <PageHeader title={"Console"} description={"Console is good"}/>
      <Matrix />
    </div>
  );
};

Console.propTypes = {

};

export default Console;