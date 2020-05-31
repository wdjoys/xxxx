//定义vue组件

Vue.component('my-file', {
  props: ['xxx'],
  template: `
      <div class="main">
          <h4>{{xxx.title}}</h4>
          <img :src='xxx.file_icon' alt="">
          <p>{{xxx.file_title}}</p>
          <p>{{xxx.file_size}}</p>
          <a :href='xxx.file_path'><span>查看</span></a> 
      </div>`
})

Vue.component('my-company', {
  template: `
      <div class='compang-card'>
      <div id="name">
          <h4>宁夏天地奔牛实业集团有限公司</h4>
          <a href="http://www.khb.com/index.php?g=Wap&m=Index&a=content&token=uzeuwh1444287382&classid=5078&id=2951">点击了解详情</a>
      </div>
      <div id="logo"><img src="./img/logo.png" alt=""></div>
    <div>
    `
})

