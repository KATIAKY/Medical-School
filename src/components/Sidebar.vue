<template>
  <aside>
    <!-- Логотип -->
    <div class="logo">
      <img class="img_logo" src="/public/img/logo.svg" alt="logo" />
      <h1 class="text_logo">Medical School</h1>
    </div>
    <!-- Профель -->
    <div class="profile">
      <h2 class="title_profile">Профиль</h2>
      <div class="information_profile">
        <img class="foto" src="/public/img/foto_profile.svg" alt="foto" />
        <div class="full_name">Фамилия Имя Отчество</div>
        <img src="/public/img/crystal.svg" alt="crystal" />
        <div class="level">Ур. 1</div>
      </div>
      <button class="button_profile">Редактировать</button>
    </div>
    <!--Информация-->
    <div class="information">
      <h2 class="title">Информация</h2>
      <div class="list">
        <router-link class="button" to="/">
          <samp class="text">О школе</samp>
        </router-link>
        <router-link class="button" to="/">
          <samp class="text">Правила</samp>
        </router-link>
        <router-link class="button" to="/forum">
          <samp class="text">Форум</samp>
        </router-link>
        <router-link class="button" to="/">
          <samp class="text">Олимпиады</samp>
        </router-link>
      </div>
    </div>
    <!--Задачник-->
    <div class="tasks">
      <h2 class="title">Задачник</h2>
      <div class="list">
        <router-link class="button" to="/task_archive">
          <samp class="text">Архив задач</samp>
        </router-link>
        <router-link class="button" to="/system">
          <samp class="text">Состояние системы</samp>
        </router-link>
        <router-link class="button" to="/">
          <samp class="text">Рейтинг</samp>
        </router-link>
        <router-link class="button" to="/">
          <samp class="text">Курсы</samp>
        </router-link>
      </div>
    </div>
    <!-- Методичка -->
    <div class="manul">
      <h2 class="title">Методичка</h2>
      <div class="list">
        <router-link class="button" to="/">
          <samp class="text">Новичкам</samp>
        </router-link>
        <router-link class="button" to="/">
          <samp class="text">Статьи</samp>
        </router-link>
        <router-link class="button" to="/">
          <samp class="text">Ссылки</samp>
        </router-link>
        <router-link class="button" to="/">
          <samp class="text">Работа в системе</samp>
        </router-link>
      </div>
    </div>
  </aside>
</template>
<style long="scss" scoped>
/* Стили к логотипу */
.logo {
  width: 300px;
  height: 72px;
  margin: 20px 0 18px 20px;
  background-color: rgb(75, 162, 133);
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 33px;
  padding: 20px;
}
.text_logo {
  color: rgb(255, 255, 255);
  font-family: Roboto;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0%;
  text-align: left;
}
/* Стили к профелю */
.profile {
  margin: 18px 60px 18px 20px;

  position: static;
  width: 300px;
  height: 157px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  flex: none;
  order: 1;
  flex-grow: 0;
  border-radius: 10px;
  background: rgb(75, 162, 133);
}
.title_profile {
  color: rgb(255, 255, 255);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0%;
  text-align: center;
}
.information_profile {
  display: flex;
  align-items: center;
  margin-top: 16px;
}
.full_name {
  color: rgb(255, 255, 255);
  font-family: "Roboto";
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  display: inline-block;
  width: 50%;
  margin: 0 12px;
}
.foto {
  width: 34px;
  height: 34px;
}
.level {
  color: rgb(255, 255, 255);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0%;
  text-align: left;
}
.button_profile {
  width: 260px;
  height: 32px;
  background: rgb(110, 187, 145);
  margin-top: 16px;
  color: rgb(255, 255, 255);
  font-family: "Roboto";
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  border-radius: 5px;
}
/* Общие стилик для кнопак навигации */
.title {
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  color: #fff;
  font-family: "Roboto";
}
.list {
  list-style-type: none;
  margin-top: 10px;
}
.button {
  display: block;
  text-decoration: none;
  margin-top: 10px;
}
.text {
  color: rgb(255, 255, 255);
  font-family: "Roboto";
  font-weight: 400;
  font-size: 14px;
  color: #fff;
  font-style: normal;
  letter-spacing: 0%;
  text-align: left;
  position: static;
  height: 16px;
}
/* Стиль для информации */
.information {
  width: 300px;
  height: 324px;
  border-radius: 10px;
  background: rgb(75, 162, 133);
  margin: 18px 60px 18px 20px;
  padding: 20px;
}
/* Стили к задачнику */
.tasks {
  width: 300px;
  height: 252px;
  border-radius: 10px;
  background: rgb(75, 162, 133);
  padding: 20px;
  margin: 18px 60px 18px 20px;
}
.manul {
  width: 300px;
  height: 163px;
  border-radius: 10px;
  background: rgb(75, 162, 133);
  padding: 20px;
  margin: 18px 60px 18px 20px;
}
</style>
<script></script>
