import axios from 'axios'
export const data = () => axios.get("../../static/mock/data.json",{}).then((response) => {
  return  response.data
})