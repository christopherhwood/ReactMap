import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import throttle from 'lodash/throttle';

import SearchBar from './SearchBar';
import SearchButton from './SearchButton';
import {fetchAutocompletes} from '../../api';
import * as searchActions from '../../actions/searchActions';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this._throttledAutocomplete = throttle(this._autocomplete, 1000);
    this.state = {
      searchBarVisible: false
    };
  }

  _autocomplete = (text) => {
    const {region, receiveAutocomplete} = this.props;
    fetchAutocompletes(text, region).then(response => {
      receiveAutocomplete(response);
    });
  };

  _onChangeText = (text) => {
    const {setQuery} = this.props;
    setQuery(text);
    this._throttledAutocomplete(text);
  };

  _onSearch = (query) => {
    const {region, receiveSearchResults} = this.props;
    fetchSearchResults(query, region).then(response => {
      receiveSearchResults(response);
    });
  };

  _onPress = () => {
    this.setState({searchBarVisible: !this.state.searchBarVisible});
  };

  render() {
    const {autocompletes, query, style} = this.props;
    return (
      <View style={[style, styles.container]}>
        {this.state.searchBarVisible &&
          <SearchBar
            autocompletes={autocompletes}
            onChangeText={this._onChangeText}
            onSearch={this._onSearch}
            query={query}
            style={styles.searchBar}
          />
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
    alignItems: 'flex-end',
    backgroundColor: 'green',
    flexDirection: 'row',
  },
  searchBar: {
    backgroundColor: 'green',
    flex: 7
  },
  button: {
    alignItems: 'flex-end',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  }
});
