export const BASE_URL = 'https://api.nomoreparties.co';

function request({ url, method = 'POST', data, token }) {
  fetch(`${BASE_URL}${url}`, {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...(!!token && { 'Authorization': `Bearer ${token}` }),
    },
    ...(!!data && { body: JSON.stringify(data) }),
  }).then((response) => {
    return response.json();
  });
}
export const authorize = (email, password) => {
  return request({
    url: '/auth/local',
    data: { email, password },
  });
};

export const register = (email, password) => {
  return request({
    url: '/auth/local/register',
    data: { email, password },
  });
};

export const getContent = (token) => {
  return request({
    url: '/users/me',
    method: 'GET',
    token: token,
  });
};
