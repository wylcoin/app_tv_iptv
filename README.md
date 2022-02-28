# app_tv_iptv
``` js
var baseAPi = "http://115.78.230.192:59064/api"
```
## watch film
```js
var path = "/film"
var method = "GET"
var paramObj = {}
var dataType: "json"
```
## doctor list
```js
var path = "/doctor"
var method = "GET"
var paramObj = {}
var dataType: "json"
```
## order 
### get order
```js
var path = "/orderdetail"
var method = "GET"
var paramObj = {}
var dataType: "json"
```
### get order by id category
use method filter with condition: ```js item.id_category == "id_category"```