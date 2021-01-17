import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';
import {apiUrl} from './Dashboard'
// eslint-disable-next-line import/no-anonymous-default-export
export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { email, password } = params;
        const values = {
            email: email,
            password : password
        }
        const request = new Request(`${apiUrl}/users/admin/login`, {
	        method: 'POST',
            body: JSON.stringify( values ),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        })
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token }) => {
                localStorage.setItem('token', token);
            });
    }

     if (type === AUTH_LOGOUT) {
      localStorage.removeItem('token');
      return Promise.resolve();
      }
    
    if (type === AUTH_CHECK) {
      return localStorage.getItem('token') ? Promise.resolve() : Promise.reject({ redirectTo: '/login' });
      }
  return Promise.reject('Unknown method');
}
