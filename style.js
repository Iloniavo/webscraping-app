import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    card :{
        borderRadius :6,
        elevation : 3,
        backgroundColor : '#fff',
        shadowOffset :{width :1 , height : 1},
        shadowColor :'#333',
        shadowOpacity :0.3,
        marginHorizontal :4,
        marginVertical :6
    },
    cardContent:{
        marginHorizontal:18,
        marginVertical:10
    }
})

export default styles;