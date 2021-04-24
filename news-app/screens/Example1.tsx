import { View } from "../components/Themed";
import { Button,TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
export default function Example1(){
    <View style={{padding:30}}>
        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
          <TextInput 
            placeholder="Name" 
            style={{
              borderBottomColor:'black',
              borderBottomWidth: 1,
              padding:10,
              width:'80%'
            }}>

          </TextInput>
          <Button title="ADD" onPress={() => { alert('You tapped the button!');} }>

          </Button>
        </View>        
        <View>
          
        </View>   
      </View>
}