<template>
  <main>
    <h1 class="title">О сайте Medical School</h1>
    <img class="line" src="/public/img/line.svg" alt="" />
    <p class="text">
      Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать
      несколько абзацев более менее осмысленного текста рыбы на русском языке, а
      начинающему оратору отточить навык публичных выступлений в домашних
      условиях. При создании генератора мы использовали небезизвестный
      универсальный код речей. Текст генерируется абзацами случайным образом от
      двух до десяти предложений в абзаце, что позволяет сделать текст более
      привлекательным и живым для визуально-слухового восприятия.
    </p>
    <p class="text" id="indent">
      По своей сути рыбатекст является альтернативой традиционному lorem ipsum,
      который вызывает у некторых людей недоумение при попытках прочитать рыбу
      текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит
      любой макет непонятным смыслом и придаст неповторимый колорит советских
      времен.
    </p>
    <img class="foto_main" src="/public/img/foto_main.svg" alt="" />
  </main>
</template>
<style logo="scss" scoped>
.title {
  color: rgb(51, 51, 51);
  font-family: Roboto;
  font-size: 20px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0%;
  text-align: left;
  margin-top: 44px;
}
main {
  max-width: 1400px;
}
.line {
  margin-top: 8px;
}
.text {
  color: rgb(51, 51, 51);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0%;
  text-align: left;
  margin-top: 8px;
}
#indent {
  margin: 20px 0 180px 0;
}
.foto_main {
  display: flex;
  margin: 0 auto;
}
</style>
