import { RESTDataSource } from 'apollo-datasource-rest';
import configurations from '../config/configurations';

export class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${configurations.serviceUrl}/api/user`;
  }

  getMe() {
    return this.get('/me');
  }
   willSendRequest (request) {
     request.headers.set('Authorization', this.context.headers);
   }

  loginUser(payload) {
    return this.post('/createToken', payload);
  }
}
