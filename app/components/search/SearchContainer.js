import React, {Component} from 'react';
import {View, StyleSheet, Keyboard} from 'react-native';
import {connect} from 'react-redux';
import throttle from 'lodash/throttle';

import SearchBar from './SearchBar';
import SearchButton from './SearchButton';
import {fetchAutocompletes, fetchSearchResults} from '../../api';
import * as searchActions from '../../actions/searchActions';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this._throttledAutocomplete = throttle(this._autocomplete, 1000);
    this.state = {
      searchBarVisible: false
    };
  }

  _onChangeText = (text) => {
    const {setQuery} = this.props;
    setQuery(text);
    this._throttledAutocomplete(text);
  }

  _autocomplete = (text) => {
    const {region, receiveAutocomplete} = this.props;
    fetchAutocompletes(text, region).then(response => {
      receiveAutocomplete(response);
    });
  };

  _onSearch = (newQuery) => {

    const {query, region, receiveSearchResults, receiveAutocomplete, setQuery} = this.props;
    Keyboard.dismiss();

    // user hit search on keyboard
    if (!newQuery) {
      newQuery = query;
    }

    // if user selected from autocomplete then update search bar
    if (newQuery !== query) {
      setQuery(newQuery);
    }
    receiveAutocomplete([]);

    fetchSearchResults(newQuery, region).then(response => {
      receiveSearchResults(response);
    });
  };

  _onPress = () => {
    const {receiveSearchResults, receiveAutocomplete, setQuery} = this.props;
    this.setState({searchBarVisible: !this.state.searchBarVisible});
    if (!this.state.searchBarVisible) return;
    setQuery('');
    receiveSearchResults([]);
    receiveAutocomplete([]);
  };

  render() {
    const {autocompletes, query, style} = this.props;
    return (
      <View style={[style, styles.container]}>
        {this.state.searchBarVisible ?
            <SearchBar
              autocompletes={autocompletes}
              onChangeText={this._onChangeText}
              onSearch={this._onSearch}
              query={query}
              style={styles.searchBar}
            />
          :
            <View style={styles.placeholder}/>
        }
        <SearchButton
          onPress={this._onPress}
          style={styles.button}
        />
      </View>
    )
  };
};

const mapStateToProps = (state) => ({
  autocompletes: state.autocompletes,
  query: state.query,
  region: state.region
});

export default connect(
  mapStateToProps,
  searchActions
)(SearchContainer);

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  placeholder: {
    backgroundColor: 'transparent',
    flex: 7,
  },
  searchBar: {
    flex: 7
  },
  button: {
    alignItems: 'flex-end',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  }
});
