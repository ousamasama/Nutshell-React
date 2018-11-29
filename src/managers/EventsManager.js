import APIManager from "./APIManager"

class EventsManager extends APIManager {
  getEvents(id) {
    return this.get(id)
  }
  getAll() {
    return this.all()
  }
  removeAndList(id) {
    return this.delete(id).then(() => this.all())
  }
  post(newMessage) {
    return fetch("http://localhost:5002/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newMessage)
    }).then(data => data.json())
  }
}

export default new EventsManager("events")