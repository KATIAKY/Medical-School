<template>
  <main>
    <div class="title">Архив задач</div>
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
              <th class="th__decided">Решено</th>
              <th class="th__id">ID</th>
              <th class="th__name">Название задачи</th>
              <th class="th__topic">Тема</th>
              <th class="th__parse">Разбор</th>
              <th class="th__complexity">Сложность</th>
              <th class="th__solvability">Решаемость</th>
              <th class="th__recd">Принято</th>
            </tr>
          </thead>
          <tbody class="table">
            <tr>
              <td>Да</td>
              <td>1</td>
              <td>
                <a href="/tasks">Какое-то длинное название задачи</a>
              </td>
              <td>Какая-то длинная тема задачи</td>
              <td>Есть</td>
              <td>1%</td>
              <td>99%</td>
              <td>1979907</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<style scoped>
.title {
  color: rgb(51, 51, 51);
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0%;
  text-align: left;
  margin-top: 44px;
}
.text {
  color: rgb(51, 51, 51);
  font-family: "Roboto";
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
  font-family: "Roboto";
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
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
  border: none;
}

/* Таблица */
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
thead {
  position: sticky;
  top: 0;
  background-color: #ffffff;
}

th,
td {
  padding: 10px 23px;
}

.th__decided {
  position: static;
  width: 84px;
  height: 36px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 24px 10px 16px;
}

.th__id {
  position: static;
  width: 88px;
  height: 36px;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
}

.th__name {
  position: static;
  width: 370px;
  height: 36px;
  text-align: left;
}

.th__topic {
  position: static;
  width: 400px;
  height: 36px;
  text-align: flex-start;
}

.th__parse {
  position: static;
  width: 80px;
  height: 36px;
  text-align: flex-start;
}

.th__complexity {
  position: static;
  width: 107px;
  height: 36px;
  text-align: flex-start;
}

.th__solvability {
  position: static;
  width: 116px;
  height: 36px;
  text-align: left;
}

.th__recd {
  position: static;
  width: 144px;
  height: 36px;
  text-align: left;
  padding: 10px 0px 10px 30px;
}

tbody tr:hover {
  width: 1437px;
  height: 36px;
  border-radius: 5px;
  background: rgb(237, 245, 241);
}
a {
  color: rgb(0, 0, 0);
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400, bold;
  line-height: 16px;
  letter-spacing: 0%;
  text-align: left;
  text-decoration: none;
}
</style>
