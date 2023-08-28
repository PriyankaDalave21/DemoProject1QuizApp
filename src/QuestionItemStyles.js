import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  questionText: {
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
    marginLeft: 20,
    marginRight: 20,
  },
  optionContainer: {
    width: '90%',
    height: 60,
    elevation: 3,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    flexDirection: 'row',
  },
  optionCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
  },
//App.js Styles
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 20,
    color: '#000',
  },
  resetButton: {
    marginRight: 20,
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  flatListContainer: {
    marginTop: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
  navigationButton: {
    height: 50,
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  submitButton: {
    height: 50,
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 10,
  },
  modalText: {
    fontSize: 30,
    fontWeight: '800',
    alignSelf: 'center',
    marginTop: 20,
  },
  modalScore: {
    fontSize: 40,
    fontWeight: '800',
    alignSelf: 'center',
    marginTop: 20,
    color: 'green',
  },
  modalCloseButton: {
    alignSelf: 'center',
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },

});

export default styles;
