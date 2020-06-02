//定义vue组件

Vue.component('my-file', {
  data:function(){
    return {
      count: 0
    }
  },
  props: ['xxx'],
  template: `
      <div class="main">
          <h4 v-for='title in titles'>{{title}}</h4>
          <img :src='xxx.file_icon'>
          <p >{{xxx.file_title}}</p>
          <p >{{xxx.file_size}}</p>   
          <a v-if="href_hiden" :href='xxx.file_path'><span>查看</span></a> 
          <a v-else v-on:click="checkDateTime()"><span>已关闭</span></a> 
      </div>`,
  methods:{
    checkDateTime:function (){
      alert('兖矿展会结束，文件停止分享！');
    }

  },
  computed:{
    titles:function(){
      return this.xxx.title.split('\n')
    },

    file_title:function () {
      return this.xxx.file_title ? this.xxx.file_title : this.xxx.file_path.split('/').pop()
    }
    ,
    file_icon:function () {
      return this.xxx.file_icon ? this.xxx.file_icon : this.xxx.file_path.split('.').pop()
    },
    href_hiden:function () {
      return  Date.parse(Date()) > Date.parse(this.xxx.closeDate) ? false : true
    }
  },
})

Vue.component('my-company', {
  template: `
    <div class='company-card'>
      <div id="name">
          <h4>宁夏天地奔牛实业集团有限公司</h4>
          <a href="http://www.khb.com/index.php?g=Wap&m=Index&a=content&token=uzeuwh1444287382&classid=5078&id=2951">点击了解公司详情</a>
      </div>
      <div id="logo"><img src="./img/logo.png" alt=""></div>
    </div>
    `
})

