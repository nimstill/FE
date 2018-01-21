const mysql = require('mysql')
const pool = mysql.createPool({
  host     :  '127.0.0.1',
  user     :  'root',
  password :  '123456',
  database :  'my_database'
})

let query = function( sql, values ) {
  return new Promise(( resolve, reject ) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        reject( err )
      } else {
        connection.query(sql, values, ( err, rows) => {

          if ( err ) {
            reject( err )
          } else {
            resolve( rows )
          }
          connection.release()
        })
      }
    })
  })
}

module.exports = { query }


#### async/await 使用

const { query } = require('./async-db)
async function selectAllData() {
    let sql = 'SELECT * FROM my_table'
    let dataList = await query( sql )
    return dataList
}

async function getData() {
    let dataList = await selectAllData()
    console.log( dataList )
}

getData()


#### jsonp 


  // 判断是否为JSONP的请求 
  if ( ctx.method === 'GET' && ctx.url.split('?')[0] === '/getData.jsonp') {
    // 获取jsonp的callback
    let callbackName = ctx.query.callback || 'callback'
    let returnData = {
      success: true,
      data: {
        text: 'this is a jsonp api',
        time: new Date().getTime(),
      }
    } 

    // jsonp的script字符串
    let jsonpStr = `;${callbackName}(${JSON.stringify(returnData)})`

    // 用text/javascript，让请求支持跨域获取
    ctx.type = 'text/javascript'

    // 输出jsonp字符串
    ctx.body = jsonpStr
  }

    JSONP跨域输出的数据是可执行的JavaScript代码
    ctx输出的类型应该是'text/javascript'
    ctx输出的内容为可执行的返回数据JavaScript代码字符串
    需要有回调函数名callbackName，前端获取后会通过动态执行JavaScript代码字符，获取里面的数据


