<template>
  <main>
    <div class="cell">
      <div class="rectangle">
        <div class="heard">
          <div class="name">
            Тема, очень большое длинное название какой-то темы
          </div>
          <div class="date">18 января 13:15</div>
        </div>
        <div class="full_name">Фамилия И. О.</div>
        <div class="information">
          <div class="text">
            По своей сути рыбатекст является альтернативой традиционному lorem
            ipsum, который вызывает у некторых людей недоумение при попытках
            прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на
            русском языке наполнит любой макет непонятным смыслом и придаст
            неповторимый колорит советских времен.
          </div>
        </div>
        <router-link class="button" to="/forum_answer">
          <samp class="detailed">Подробнее</samp>
        </router-link>
      </div>
    </div>
  </main>
</template>

<style scoped>
.cell {
  background-color: #daeae180;
  position: static;
  width: 461px;
  height: 165px;
  border-radius: 10px;
  padding: 20px;
}

.heard {
  display: flex;
}
.name {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: rgb(51, 51, 51);
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0%;
  text-align: left;
  width: 279px;
}
.date {
  color: rgb(51, 51, 51);
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0%;
  text-align: left;
  margin-left: 18px;
}
.full_name {
  margin-top: 29px;
  color: rgb(51, 51, 51);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0%;
  text-align: left;
}
.text {
  display: -webkit-box;
  max-width: 421px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgb(51, 51, 51);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0%;
  text-align: left;
  margin-top: 10px;
}
.detailed {
  color: rgb(176, 217, 203);
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: -1%;
  text-align: left;
  text-decoration-line: underline;
}
#element::-webkit-scrollbar-thumb {
  background-color: #086fbe;
}
</style>
