

const config = {
  baseUrl: "https://nomoreparties.co/v1/wbf-cohort-6",
  headers: {
    authorization: "a1ab9255-6a5f-4b82-ab74-b82abc16c4a1",
    "Content-Type": "application/json",
  },
};

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export function getUser() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: {
      authorization: "a1ab9255-6a5f-4b82-ab74-b82abc16c4a1",
    },
  }).then((res) => checkResponse(res));
}

export function getCards() {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then((res) => checkResponse(res));
}

export function editProfile(name, about) {
    return fetch(`https://nomoreparties.co/v1/wbf-cohort-6/users/me `, {
      method: 'PATCH',
      headers: {
        authorization: "a1ab9255-6a5f-4b82-ab74-b82abc16c4a1",
        "Content-Type": "application/json",
    },
      body: JSON.stringify({
        name: name,
        about: about
      }),
    }).then((res) => checkResponse(res))
    
  
  }

export function addNewCard(data) {
  return fetch(`https://nomoreparties.co/v1/wbf-cohort-6/cards`, {
    method: "POST",
    headers: {
        authorization: "a1ab9255-6a5f-4b82-ab74-b82abc16c4a1",
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      link: data.link,
    }),
  }).then((res) => checkResponse(res));
}

export function editAvatar(avatar) {
  return fetch(`https://nomoreparties.co/v1/wbf-cohort-6/users/me/avatar`, {
    method: "PATCH",
    headers: {
        authorization: "a1ab9255-6a5f-4b82-ab74-b82abc16c4a1",
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
      avatar: avatar,
    }),
  }).then((res) => checkResponse(res));
}

export function deleteCard(id) {
  return fetch(`https://nomoreparties.co/v1/wbf-cohort-6/cards/${id}`, {
    method: "DELETE",
    headers: {
        authorization: "a1ab9255-6a5f-4b82-ab74-b82abc16c4a1",
        "Content-Type": "application/json",
    },
  }).then((res) => checkResponse(res));
}

export function addLike(id) {
  return fetch(`https://nomoreparties.co/v1/wbf-cohort-6/cards/${id}/likes/`, {
    method: "PUT",
    headers: {
      authorization: "a1ab9255-6a5f-4b82-ab74-b82abc16c4a1",
    },
    body: JSON.stringify({}),
  }).then((res) => checkResponse(res));
}

export function deleteLike(id) {
  return fetch(`https://nomoreparties.co/v1/wbf-cohort-6/cards/${id}/likes/`, {
    method: "DELETE",
    headers: {
      authorization: "a1ab9255-6a5f-4b82-ab74-b82abc16c4a1",
    },
    body: JSON.stringify({}),
  }).then((res) => checkResponse(res));
}
