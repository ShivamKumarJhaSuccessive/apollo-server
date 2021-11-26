export default {
  getMyProfile: async (parent, args, context) => {
    const { dataSources: { userAPI } } = context;
    const response = await userAPI.getAPI.getMe();
    return response.data;
  },
};
