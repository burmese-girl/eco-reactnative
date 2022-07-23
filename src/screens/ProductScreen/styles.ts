import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    height:'99%',
  },
  row: {
    flexDirection: 'row',
  },
    
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginLeft:150,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',   
    textAlign:'center'  
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  title: { 
    padding:10, 
    fontWeight:'bold',   
    lineHeight: 20,
    fontSize:14,
    textAlign:'center'
    },
  description: {
    marginVertical: 10,
    lineHeight: 20,
    padding:10
  },
  image:{
    flex:2,
    height:250,
    resizeMode:'contain',
    backgroundColor:'white',
    width:'100%'
  },
  bottomContainer:{
    padding:10,  
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,

  },
  quantityContainer:{
    width:'100%',
    alignContent:'center',
    marginLeft:130,

  },
  buttonStyle:{
        fontSize:19,
        padding:10,
        color:'green',
        marginTop:10,
        width:'100%',
        alignContent:'center',
    
    },

});

export default styles;