<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/resume">Resume</router-link> |
      <div class="submenu">
        <a>Projects</a>
        &nbsp;<i class="fa fa-caret-down"></i>
         <div class="submenu-content">
           <router-link to="/projects/synthwave">Project 1</router-link>
           <router-link to="/projects/project2">Project 2</router-link>
           <router-link to="/projects/project3">Project 3</router-link>
         </div>
       </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0% 21% 10px 21%
}

a:link, a:visited {
  color: #42b983;
}

a:hover {
  color: #2c3e50;
}

#nav {
  padding: 30px;
  overflow: hidden;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.submenu {
  display: inline-block;
}

.submenu-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.submenu-content a {
  float: none;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.submenu-content a:hover {
  background-color: #ddd;
}

.submenu:hover .submenu-content {
  display: block;
}
</style>
