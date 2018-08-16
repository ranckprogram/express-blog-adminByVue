import axios from 'axios'
import params from '@/config/params'

export default {
  getAbout () {
    return axios.get(`${params.base_url}/about`)
  },
  updateAbout (param) {
    return axios.put(`${params.base_url}/about`, param)
  }
}
