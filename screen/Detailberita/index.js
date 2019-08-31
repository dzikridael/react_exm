import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { booleanLiteralTypeAnnotation } from '@babel/types';
import { ScrollView } from 'react-native-gesture-handler';



class Detailberita extends Component{
  constructor(props){
    super(props);
    this.state = {berita: this.props.navigation.getParam('berita')};
  }

    render(){
      return(
        <ScrollView>
        <View style={{ flex: 1, padding: 8 }}>
          <Text style={{ fontSize: 32, fontWeight: 'bold'}}>{this.state.berita.judul_berita}</Text>
          <Image style={{ width: 300, height: 300 }} 
          source={{uri: this.state.berita.gambar_berita}}/>
         
          <Text style={{ marginTop: 8}}>{this.state.berita.isi_berita}</Text>
        </View>
        </ScrollView>
      );
    }
  }

  export default Detailberita;