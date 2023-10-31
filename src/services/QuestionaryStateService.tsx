 
import axios from 'axios';
import {changeQuestionaryStateUrl} from './api' 
import {getQuestionaryStateUrl} from './api' 
import {postCertificateUrl} from './api' 

export class QuestionaryStateService {
    async changeState() {
      const result = axios.post(changeQuestionaryStateUrl)
        .then(response => {
          return response
        })
        .catch((error)=>{
          throw error 
        })
  
        return await result 
  }
  async getState() {
    const result = axios.get(getQuestionaryStateUrl)
      .then(response => {
        return response
      })
      .catch((error)=>{
        throw error 
      })

      return await result 
  }
  async sendCertificate() {
    const result = axios.post(postCertificateUrl)
      .then(response => {
        return response
      })
      .catch((error)=>{
        throw error 
      })
  }
}
