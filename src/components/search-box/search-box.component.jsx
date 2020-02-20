import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';

import { fireSearch } from './../../redux/todo/todo.action';

import { Input } from 'antd';

// class SearchBox extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       input: ''
//     }
//   }

//   onChange = value => {
//     this.setState({input: value}, () => this.props.fireSearch(this.state.input));
//   }

//   render() {
//     return (
//       <Search onChange={event => this.onChange(event.target.value)} />
//     )
//   }
// }

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