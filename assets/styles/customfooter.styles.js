import { StyleSheet } from 'react-native';

export const customFooterStyles = StyleSheet.create({
  footerContainer: {
    position: 'relative',
    backgroundColor: '#C7C7C7',
  },
  footer: {
    backgroundColor: '#C7C7C7',
    paddingVertical: 2,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#C7C7C7',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
  },
  footerText: {
    color: '#ecf0f1',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 8,
  },
  sponsorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  sponsorImage: {
    width: 120,
    height: 30,
    resizeMode: 'contain',
    tintColor: '#ecf0f1',
  },
  whatsappButton: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#25D366',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
    zIndex: 1000,
  },
  whatsappButtonPressed: {
    transform: [{ scale: 0.95 }],
  },
  poweredByText: {
    color: '#bdc3c7',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4,
    fontStyle: 'italic',
  },
});
