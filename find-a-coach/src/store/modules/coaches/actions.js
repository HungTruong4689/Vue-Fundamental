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

    const response = await fetch(`http://localhost:3000/posts/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(coachData),
    });
    //const responseData = await response.json();

    if (!response.ok) {
      //error
    }
    // context.commit('registerCoach', {
    //   ...coachData,
    //   id: userId,
    // });
    context.commit('registerCoach', coachData);
  },
  async loadCoaches(context) {
    const response = await fetch(`http://localhost:3000/posts`);
    const responseData = await response.json();

    if (!response.ok) {
      // ...
    }
    const coaches = [];

    for (const key in responseData) {
      const coach = {
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
  },
};
