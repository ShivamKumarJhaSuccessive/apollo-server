import { RESTDataSource } from 'apollo-datasource-rest';
import configurations from '../config/configurations';

export class TraineeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${configurations.serviceUrl}/api/trainee`;
  }

  async getTrainee(limit, skip) {
    return this.get('/', { limit, skip });
  }

  async createTrainee(payload) {
    return this.post('/', payload);
  }

  async updateTrainee(payload) {
    return this.put('/', payload);
  }

  async deleteTrainee(id) {
    return this.delete(`/${id}`);
  }
}
