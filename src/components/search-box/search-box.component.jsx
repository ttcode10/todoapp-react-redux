import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';

import { fireSearch } from './../../redux/todo/todo.action';

import { Input } from 'antd';

const SearchBox = ({fireSearch, ...otherProps}) => {
  const [searchInput, setSearchInput] = useState({
    input: ''
  });

  useEffect(() => {
    fireSearch(searchInput.input)
  }, [fireSearch, searchInput.input]);

  const { Search } = Input;

  const search = debounce(
    keywords => {
      setSearchInput({input: keywords});
    }, 300
  )

  const onChange = value => search(value);

  return (
    <Search onChange={event => onChange(event.target.value)} {...otherProps} />
  )
};

const mapDispatchToProps = dispatch => ({
  fireSearch: keywords => dispatch(fireSearch(keywords))
});

export default connect(null, mapDispatchToProps)(SearchBox);