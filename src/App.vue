<template>
  <div class="page">
    <div  class="text-xl py-2 flex justify-center">
      <router-link to="/HelloWorld" style="margin-right:16px">HelloWorld</router-link>
      <router-link to="/test"  >test</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>