import { SUBMIT_CONTACT } from 'src/common/redux/actions/contact';
import { getEndpoint } from 'src/common/callApiHandler/endpoints';
import { callApi } from 'src/common/callApiHandler/urlHandler';
import { CONTACT, POST } from 'src/common/callApiHandler/constants';
import { showSnackbar } from 'src/common/redux/actions/snackbar';

const contactMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_CONTACT: {
      const url = getEndpoint(CONTACT, POST, CONTACT);
      const credentials = action.message;
      callApi(url, POST, credentials)
        .then(() => {
          store.dispatch(showSnackbar('', 'Votre message a été envoyé avec succès', 'success'));
        })
        .catch((error) => {
          store.dispatch(showSnackbar('Oups!', error, 'error'));
        });
      break;
    }
    default:
      next(action);
  }
};

export default contactMiddleware;
