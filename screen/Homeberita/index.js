import React, { Component } from 'react';
import { Text, View, TouchableNativeFeedback, FlatList } from 'react-native';
import { booleanLiteralTypeAnnotation } from '@babel/types';


class Homeberita extends Component {
  constructor(props){
    super(props);
    this.state = {listBerita: null}
  }

  static navigationOptions = {
    title: 'Berita React',
  };

  renderRow({item}){
    return(
      <TouchableNativeFeedback
      onPress={() => this.props.navigation.navigate('Detailberita',{ berita: item})}
      background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
      <View style={{ marginTop: 8, height: 100,backgroundColor: '#ffffff', marginHorizontal: 8, padding: 8, borderColor: '#ebebeb', borderWidth: 3 }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{item.judul_berita}</Text>
          <Text style={{ marginTop: 7}}>{item.isi_berita.substr(0, 100)}</Text>
      </View>
    </TouchableNativeFeedback>
    );
  }

  apiGetBerita(){
    fetch('https://basicteknologi.co.id/beritareactnative/index.php/berita')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ listBerita: responseJson });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount(){
    this.apiGetBerita();
  }


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
         <FlatList
            data={this.state.listBerita}
            renderItem={this.renderRow.bind(this)}
            keyExtractor={(item, index) => index.toString()}
         />
      </View>
    );
  }
}

export default Homeberita;