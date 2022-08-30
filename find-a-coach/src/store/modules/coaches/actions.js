export default {
  async registerCoach(context, data) {
    //const userId = context.rootGetters.userId;
    const coachData = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    // const response = await fetch(`http://localhost:3000/posts`, {
    //   method: 'POST',
    //   body: JSON.stringify(coachData),
    // });
    // //const responseData = await response.json();

    // if (!response.ok) {
    //   //error
    // }
    // context.commit('registerCoach', {
    //   ...coachData,
    //   id: userId,
    // });
    context.commit('registerCoach', coachData);
  },
};
