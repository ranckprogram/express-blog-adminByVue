// import Vue from 'vue'
import axios from 'axios'
import params from '@/config/params'
export default {
  getAlbumList (param) {
    console.log(axios)
    return axios.get(`${params.base_url}/album/list`, {params: param})
  }
}
