// import Vue from 'vue'
import axios from 'axios'
import params from '@/config/params'

export default {
  getAlbumList (param) {
    return axios.get(`${params.base_url}/album/list`, {params: param})
  },
  getAlbumById (id) {
    return axios.get(`${params.base_url}/album/${id}`)
  },
  createAlbum (param) {
    return axios.post(`${params.base_url}/album/add`, param)
  }
}
