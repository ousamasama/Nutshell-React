const remoteURL = "http://localhost:5002"

class APIManager {
    constructor(route) {
        this.route = route
    }

  get(id) {
    /*
        Since the purpose of this module is to be used by
        all of the more specialized one, then the string
        of `animals` should not be hard coded here.
    */
   return fetch(`${remoteURL}/${this.route}/${id}`).then(e => e.json())
  }

  all() {
    return fetch(`${remoteURL}/${this.route}`).then(data => data.json())
  }

  allSortedSoonest() {
    return fetch(`${remoteURL}/${this.route}?_sort=date&_order=asc`).then(data => data.json());
  }

  allSortedFurthest() {
    return fetch(`${remoteURL}/${this.route}?_sort=date&_order=desc`).then(data => data.json());
  }

  delete(id) {
    return fetch(`${remoteURL}/${this.route}/${id}`, {
        method: "DELETE"
      })
        .then(e => e.json())
        .then(() => fetch(`${remoteURL}/${this.route}`))
        .then(e => e.json())
  }

  patch(payload, url) {
    return fetch(`${url}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }).then(data => data.json())
  }

  post(payload) {
    return fetch(`${remoteURL}/${this.route}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }).then(data => data.json())
  }
}

export default APIManager