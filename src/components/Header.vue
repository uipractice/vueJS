<script setup>
import './Header.css';
import Evoke_logo from '../images/Evoke_logo.png';
// import '../css/styles.css';
</script>
<template>
     <div class='app-logo-header navbar navbar-expand-lg navbar-expand-md bg-white fixed-top'>
      <a class="navbar-brand" href="/">
        <img :src="Evoke_logo" 
          width="215.53" 
          height="35" 
          alt="" 
          class="imgStyle"
        />
      </a>
      <ul id="navb" class="app-nav-margin navbar-nav my-0 mt-0 my-md-0 ulLocalClass">
        <li class="nav-item">
          <a href="http://angular-components.evokeapps.com/"><img src="../images/icons-03.svg" alt="" />Angular Components</a>
        </li>
        <li class="nav-item">
          <a href="/" ><img src="../images/icons-02.svg" alt="" />React Components</a>
        </li>
        <li class="nav-item">
          <a href="http://ui-components.evokeapps.com/" ><img src="../images/icons-01.svg" alt="" />UI Components</a>
        </li>
        <li class="nav-item">
          <a href="http://components.evokeapps.com/styleguide/EvokeStyleGudie.pdf">Style guides</a>
        </li>
        <li class="nav-item">
          <a href="http://components.evokeapps.com/design_system/EvokeDesignSystem.pdf"> <img src="../images/icons-05.svg" alt="" />Design System
          </a>
        </li>
        <li class="nav-item active">
          <a href="/"> <img src="../images/icons-05.svg" alt="" />vuejs
          </a>
        </li>
      </ul>
    </div>
</template>
<style>
.imgStyle{
    margin: 0 0 1px 16px;
    width:215.53px
}
.ulLocalClass{
    list-style-type: none;
}
.nav-item{
    float: left;
}

a{
    padding: 10px 0 0 0;

}


</style>

