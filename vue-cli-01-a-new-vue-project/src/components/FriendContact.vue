<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite ? "(favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }}
      Details
    </button>

    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>Email:</strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>
<script>
export default {
  //   props: ["name", "phoneNumber", "emailAddress"],
  props: {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailAddress: { type: String, required: true },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      //   validator: function (value) {
      //     return value === "1" || value === "0";
      //   },
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      friendIsFavorite: this.isFavorite,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manual@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.friendIsFavorite = !this.friendIsFavorite;
    },
  },
};
</script>
