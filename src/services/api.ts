const pre = 'https://api.exchangerate.host';

const get = (url: string) =>
  fetch(`${pre}${url}`, { method: 'GET'})
    .then(res => res.json()
    .catch(error => {
      throw new Error(error);
    })
  );

const api = { get };

export default api;
