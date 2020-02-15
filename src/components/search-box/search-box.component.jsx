import React from 'react';

import { Input } from 'antd';

const SearchBox = (props) => {
  const { Search } = Input;

  return (
    <Search onSearch={value => console.log(value)} {...props} />
  )
};

export default SearchBox;