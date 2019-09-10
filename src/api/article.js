import axios from 'axios'
import params from '@/config/params'

export default {
  getCategoryList () {
    return axios.get(`${params.base_url}/category/list`)
  },
  addCategory (param) {
    return axios.post(`${params.base_url}/category`, param)
  },
  delCategory (id) {
    return axios.delete(`${params.base_url}/category/${id}`)
  }
}
