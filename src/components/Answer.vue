<template>
  <main>
    <div class="answer">
      <div class="information">
        <img src="/public/img/foto.svg" alt="foto" />
        <div class="full_name">Фамилия И. О.</div>
        <div class="date">19 января 16:15</div>
      </div>
      <div class="text">
        <p class="text_p">
          Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
          сгенерировать несколько абзацев более менее осмысленного текста рыбы
          на русском языке, а начинающему оратору отточить навык публичных
          выступлений в домашних условиях. При создании генератора мы
          использовали небезизвестный универсальный код речей. Текст
          генерируется абзацами случайным образом от двух до десяти предложений
          в абзаце, что позволяет сделать текст более привлекательным и живым
          для визуально-слухового восприятия.
        </p>
        <p class="text_p">
          По своей сути рыбатекст является альтернативой традиционному lorem
          ipsum, который вызывает у некторых людей недоумение при попытках
          прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском
          языке наполнит любой макет непонятным смыслом и придаст неповторимый
          колорит советских времен.
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.answer {
  margin-left: 30px;
}
.information {
  display: flex;
  margin-top: 16px;
  align-items: center;
  max-width: 1186px;
  flex-flow: row wrap;
}
.full_name {
  color: rgb(51, 51, 51);
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0%;
  text-align: left;
  margin-left: 20px;
}
.date {
  color: rgb(51, 51, 51);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0%;
  text-align: left;
  justify-content: right;
  left: 500px;
  order: 999;
  margin-left: auto;
}
.text {
  max-width: 1186px;
  color: rgb(51, 51, 51);
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0%;
  text-align: left;
}
.text_p {
  margin: 20px 0;
}
</style>
