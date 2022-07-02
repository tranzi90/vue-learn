<template>
  <div>
    <the-header></the-header>
    <!-- <TheHeader /> -->
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals #default="slotProps">
      <h2>{{ slotProps.item }}</h2>
      <p>{{ slotProps['another-prop'] }}</p>
    </course-goals>
  </div>
</template>

<script>
import TheHeader from '../../../9. Diving Deeper Into Components/cmp-adv-06-scoped-slots/src/components/TheHeader.vue';
import BadgeList from '../../../9. Diving Deeper Into Components/cmp-adv-06-scoped-slots/src/components/BadgeList.vue';
import UserInfo from '../../../9. Diving Deeper Into Components/cmp-adv-06-scoped-slots/src/components/UserInfo.vue';
import CourseGoals from '../../../9. Diving Deeper Into Components/cmp-adv-06-scoped-slots/src/components/CourseGoals.vue';

export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals,
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>