import { StyleSheet } from 'react-native';
import metrics from '../../themes/metrics';

export default StyleSheet.create({
    backTouchable: {
        backgroundColor: '#F6F6F6',
        width: 48,
        height: 48,
        borderRadius: 16,
        marginLeft: 30,
        marginTop: 10,
        marginBottom: 10,
    },
    backImageStyle: {
        resizeMode: 'contain',
        width: 10,
        height: 18,
    },
    rowContainer: {
        height: 65,
        marginTop: 30,
        justifyContent: 'flex-end'
    },
});
