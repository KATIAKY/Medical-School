<template>
  <main>
    <div class="title">Состояние системы</div>
    <img class="line" src="/public/img/line.svg" alt="line" />
    <div class="sorting">
      <p class="text">
        По своей сути рыбатекст является альтернативой традиционному lorem
        ipsum, который вызывает у некторых людей недоумение при попытках
        прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском
        языке наполнит любой макет непонятным смыслом и придаст неповторимый
        колорит советских времен.
      </p>
      <img class="img_search" src="/public/img/search.svg" alt="search" />
      <input class="search" placeholder="Поиск.." />
      <img class="img_sorting" src="/public/img/sorting.svg" alt="sorting" />
      <select class="sorting">
        <option class="sorting__text">Тема</option>
        <option class="sorting__text">Дата</option>
        <option class="sorting__text">Название задачи</option>
      </select>
    </div>

    <div id="element" class="tableContainer">
      <div id="element_y">
        <table class="table">
          <thead>
            <tr class="tr">
              <th class="th__decided">ID</th>
              <th class="th__solvability">Дата</th>
              <th class="th__id">№ Задачи</th>
              <th class="th__name">Автор решения</th>
              <th class="th__recd">Статус ответа</th>
            </tr>
          </thead>
          <tbody class="table">
            <tr>
              <td class="td_1">1</td>
              <td class="td_2">18.01.2024 13:15</td>
              <td class="td_3"><a href="index_4.html">1213</a></td>
              <td class="td_4">Фамилия Имя Отчество</td>
              <td class="td_5">Принято</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
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
.text {
  color: rgb(51, 51, 51);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0%;
  text-align: left;
  margin-top: 8px;
  width: 50%;
}
.sorting {
  display: flex;
  align-items: center;
}
.img_search {
  width: 18px;
  height: 18px;
  margin-left: 267px;
}
.search {
  margin-left: 11px;
  height: 40px;
  width: 171px;
  color: rgb(160, 160, 160);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -1%;
  text-align: left;
  align-items: center;
  appearance: none;
  border: none;
  overflow: none;
  background: none;
}
.img_sorting {
  width: 24px;
  height: 24px;
  margin-left: 32px;
}
.sorting {
  color: rgb(51, 51, 51);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
  border: none;
}
.tableContainer {
  width: 100%;
  margin-top: 16px;
  color: rgb(0, 0, 0);
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400, bold;
  line-height: 16px;
  letter-spacing: 0%;
  text-align: left;
  width: 1455px;
  height: 881px;
}
th {
  font-family: "Roboto", sans-serif;
  font-weight: 900, bold;
  font-size: 14px;
}

.table {
  border-spacing: 0;
  text-align: left;
}

/* Талица */
.tableContainer {
  margin-top: 20px;
  color: rgb(0, 0, 0);
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0%;
  text-align: left;
  width: 1220px;
  height: 881px;
}
.table {
  border-spacing: 0px;
  text-align: left;
  color: rgb(0, 0, 0);
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
}
thead {
  position: sticky;
  top: 0;
  background-color: #fff;
}

.th__decided {
  width: 75px;
  height: 36px;
  padding: 10px 8px 10px 16px;
  color: rgb(0, 0, 0);
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
}
.th__solvability {
  width: 292px;
  height: 36px;
  padding: 10px 8px;
  color: rgb(0, 0, 0);
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  text-align: center;
}
.th__id {
  width: 172px;
  height: 36px;
  padding: 10px 8px;
  color: rgb(0, 0, 0);
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
}
.th__name {
  width: 496px;
  height: 36px;
  padding: 10px 8px 10px 20px;
  color: rgb(0, 0, 0);
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
}
.th__recd {
  width: 209px;
  height: 36px;
  padding: 10px 8px 10px 40px;
  color: rgb(0, 0, 0);
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
}
td {
  padding: 10px 8px;
  color: rgb(0, 0, 0);
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
}
.td_1 {
  padding: 10px 8px 10px 16px;
}
.td_2 {
  padding: 10px 8px;
  text-align: center;
}
.td_3 {
  padding: 10px 8px 10px 16px;
}
.td_5 {
  padding: 10px 8px 10px 40px;
}
a {
  text-decoration: none;
  color: rgb(0, 0, 0);
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0%;
}
tbody tr:hover {
  border-radius: 10px;
  background: rgb(237, 245, 241);
}
</style>
