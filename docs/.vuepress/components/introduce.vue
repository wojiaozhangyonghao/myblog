<!--
 * @Author: zyh
 * @Date: 2021-02-26 17:26:23
 * @LastEditors: zyh
 * @LastEditTime: 2021-09-21 09:18:22
 * @Description: file content
-->
<template>
  <div class="introduce_component">
    <img src="/myblog/home.png" alt="">
    <div class="intro_content">
       <!-- <h3>公众号:前端进阶</h3> -->
        <h3>前端进阶</h3>
      <p>前端进阶 学习成长之路</p>
    </div>
  </div>
</template>


<style scoped>
.introduce_component {
  display: flex;
  padding: 20px 0px;
  box-sizing: border-box;
  align-items: center;
}
.introduce_component img {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  margin-right: 10px;
}
.intro_content h3{
  font-size: 16px;
}

@media screen and (max-width: 789px) {
  .introduce_component img{
    display: none;
  }
}
</style>

