import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        const values = {
            email: username,
            password : password
        }
        console.log(params)
        const request = new Request('http://ec2-34-202-164-145.compute-1.amazonaws.com/api/users/login', {
            credentials: 'include',
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
      return localStorage.getItem('token') ? Promise.resolve() : Promise.reject({ redirectTo: '/no-access' });
      }
  return Promise.reject('Unknown method');
}
