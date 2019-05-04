<template>
  <div id="app">
    <Header v-if="header_show"></Header>
    <router-view v-on:public_header="public_header" v-on:public_footer="public_footer" v-on:public_gotop="public_gotop"></router-view>
    <Footer v-if="footer_show"></Footer>
    <goTop v-if="gotop_show"></goTop>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import goTop from "./components/goTop.vue";
export default {
  name: "App",
  data() {
    return {
      header_show: true,
      footer_show: true,
      gotop_show: true
    };
  },
  components: {
    Header,
    Footer,
    goTop
  },
  methods: {
    //是否显示头部
    public_header: function(bool) {
      this.header_show = bool;
    },
    //是否显示底部
    public_footer: function(bool) {
      this.footer_show = bool;
    },
    public_gotop: function(bool) {
      this.gotop_show = bool;
    }
  }
};
</script>


<style lang="scss">
// 公共样式
.clearfix:after {
  clear: both;
  content: ".";
  display: block;
  font-size: 0;
  line-height: 0;
  visibility: hidden;
  height: 0;
}

.clearfix {
  zoom: 1;
}

html {
  margin: 0;
  padding: 0;
  border: 0;
}

body {
  font-family: Microsoft YaHei, SimSun, Arial;
}

body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
code,
del,
dfn,
em,
img,
q,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
dialog,
figure,
footer,
header,
hgroup,
nav,
section {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
dialog,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1.5;
  background: #fff;
}

table {
  border-collapse: separate;
  border-spacing: 0;
}

caption,
th,
td {
  text-align: left;
  font-weight: 400;
  float: none !important;
}

table,
th,
td {
  vertical-align: middle;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
}

blockquote,
q {
  quotes: "" "";
}

a img {
  border: 0;
}

:focus {
  outline: 0;
}

ul,
ol,
li {
  list-style: none;
}

button,
input,
select,
textarea,
label {
  vertical-align: middle;
}

h1,
h2,
h3,
h4,
h6,
h6 {
  font-weight: 700;
  font-size: 100%;
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

#header,
#body,
#footer {
  width: 984px;
  margin: 0 auto;
}
</style>
