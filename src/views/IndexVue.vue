<template>
  <div class="wrapper">
    <h1>Добро пожаловать в Bookmarkly!</h1>
    <p>Чтобы начать пользоваться выберите категорию закладок или создайте новую.</p>
  </div>
</template>

<script setup>

</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 200px);
}

h1 {
  font-size: 24px;
  font-weight: 500;
}

p {
  font-size: 16px;
}
</style>
