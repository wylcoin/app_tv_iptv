# app_tv_iptv

## Base api

```js
var baseAPi = "http://115.78.230.192:59064/api";
```

## watch film

```js
var path = "/film";
var method = "GET";
var paramObj = {};
var dataType: "json";
```

## doctor list

```js
var path = "/doctor";
var method = "GET";
var paramObj = {};
var dataType: "json";
```

## Order

### Get order

```js
var path = "/orderdetail";
var method = "GET";
var paramObj = {};
var dataType: "json";
```

### Get order by id category

Use filter method with condition:

```js
item.id_category == "id_category";
```

### Insert order into cart

```js
var headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": "true",
  Accept: "application/json",
  "Content-Type": "application/json",
};
var contentType: "application/json; charset=utf-8";

var path = "/orderdetail";
var method = "POST";
var param = {
  id_food: parseInt(text),
  id_order: parseInt(idord),
  quantity: parseInt($("#sl").val()),
};
var paramObj = param;
```

### Delete item of cart

```js
var headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": "true",
  Accept: "application/json",
  "Content-Type": "application/json",
};
var contentType: "application/json; charset=utf-8";

var path = "/orderdetail";
var method = "DELETE";
var param = {
  id_food: parseInt(idfood_d),
  id_order: parseInt(idord),
};
var paramObj = param;
```

### Update cart

```js
var headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": "true",
  Accept: "application/json",
  "Content-Type": "application/json",
};
var contentType: "application/json; charset=utf-8";

var path = "/orderdetail";
var method = "PUT";
var param = {
  id_food: parseInt(idfood_d),
  id_order: parseInt(idord),
  quantity: parseInt($("#slud").val()),
};
var paramObj = param;
```

#### Note: Use only js es5, jquery 1.9.1 
```ts
Author: by iron2014 - 28/02/2022
```
