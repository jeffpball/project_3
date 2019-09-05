import axios from 'axios'

export const search = newSearch => {
    return axios
      .post('/ticketmaster/search', {
        name: newSearch.name,
        city: newSearch.city,
      })
      .then(response => {
        console.log('Search complete')
      })
}

