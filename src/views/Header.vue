<template>
  <div class="menu-wrapper">
    <div class="header">
      <router-link class="logo" to='/'>Currency</router-link>

      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
      <ul class="menu">
        <li><router-link to='/'>Home</router-link></li>
        <li><router-link to='/personal'>Personal</router-link></li>
        <li><router-link to='/business'>Business</router-link></li>
        <li><router-link to='/partners'>Partners</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
/* header */

.header {
  background-color: #4ACD64;
  box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
  position: relative;
  width: 100%;
  z-index: 3;
}

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
}

.header li a {
  display: block;
  color: #414141;
  padding: 20px 20px;
  text-decoration: none;
}

.header li a:hover,
.header .menu-btn:hover {
  background-color: rgba(0, 0, 0, 0.10);
}

.header .logo {
  color: #4ACD64;
  display: block;
  float: right;
  font-size: 1.5em;
  padding: 12px 20px;
  text-decoration: none;
}

/* menu */

.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height .2s ease-out;
}

/* menu icon */

.header .menu-icon {
  cursor: pointer;
  display: inline-block;
  float: left;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.header .menu-icon .navicon {
  background: #fff;
  display: block;
  height: 2px;
  position: relative;
  transition: background .2s ease-out;
  width: 18px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #fff;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all .2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: 340px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

/* Responsive */

@media only screen and (max-width: 768px){
  .header ul{
      background-color: #fff;
  }
  .header li a {
    padding: 15px;
    border-bottom: 1px dotted #ddd;
  }
}

@media only screen and (min-width: 768px) {
  .menu-wrapper{
    background: #fff;
    height: 100px;
    line-height: 55px;
    width: 100%;
  }
  .header li {
    float: left;
  }
  .header .logo{
      line-height: 3;
      margin-right: 40px;
  }
  .header li a {
    color: #4ACD64;
    margin: 20px 0px 0px 50px;
    padding: 0px 30px;
    border-right: 1px solid rgba(255, 255, 255, 0.2);

  }
  .header .menu {
    clear: none;
    float: left;
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }
}
</style>
