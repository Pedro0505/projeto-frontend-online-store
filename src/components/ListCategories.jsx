import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListCategories extends Component {
  render() {
    const { name, id, getId } = this.props;
    return (
      <div>
        <ul>
          <button id={ id } onClick={ getId } data-testid="category" type="button">
            { name }
          </button>
        </ul>
      </div>
    );
  }
}

ListCategories.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  getId: PropTypes.func.isRequired,
};

export default ListCategories;
