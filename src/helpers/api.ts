const getModules = (
  search: string
) => {
  let url = new URL(`http://localhost:4000/api/modules${search}`)

  return fetch(url.href)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }

      return response.json().then((data) => ({
        total: response.headers.get('x-total-count'),
        data
      }))
    })
    .then(data => {
      return data
    })
}

export {
  getModules
}
