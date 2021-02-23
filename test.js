const {handleDB} = require('./weiyaoDB');
const  {orm_config,orm} = require('./weiYaoMysql');
const express = require('express');
// 连接测试数据库
let app = express();

// 配置数据库
orm_config.password = 'root57';
orm_config.user = 'root';
orm_config.database ='homework';

// 连接数据库
orm.connect(orm_config);
// app.use(db);



app.get('/',(req,res)=>{
  (async function(){
      let a = await handleDB(res, "vegetables", "find", "查询数据库出错",["vsname"]);

      res.send(a);
  })()

});

app.listen(3000,()=>{
  console.log('3000 on loading');
})
