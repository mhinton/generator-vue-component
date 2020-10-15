<template>
  <div></div>
</template>

<script>
import queryName from "";

export default {
  <% if (apollo) { %>
  apollo: {
    queryPropName: {
      query: queryName,
      variables() {
        return { id: "X" };
      },
      update({ queryName }) {
        return queryName;
      }
    }
  }
  <% } %>
};
</script>

<style lang="css" scoped></style>
