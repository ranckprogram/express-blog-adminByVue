import axios from 'axios'
import params from '@/config/params'

export default {
  getCategoryList () {
    return axios.get(`${params.base_url}/category/list`)
  }
}
