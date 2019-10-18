/**
 * 打开数据库，创建表
 * @param {*} dbName 数据库名
 */
export function openDB(dbName) {
  return new Promise((resolve, reject) => {
    let indexedDB = window.indexedDB || window.webkitindexedDB;
    let request = indexedDB.open(dbName);

    request.onerror = function(e) {
      console.error(e.currentTarget.error.message);
      reject(false);
    };
    request.onsuccess = function(e) {
      window.INDEXEDDB_DB_RET = e.target.result;
      console.log(e.target);
      console.log("成功建立并打开数据库:" + dbName);
      resolve(e.target.result);
    };
    request.onupgradeneeded = function(e) {
      let db = e.target.result;
      console.log("数据库结构", db);
      console.log("判断数据库中是否已经存在该名称的数据表", db.objectStoreNames.contains("personInfo"));
      const tables = ["personInfo", "relations", "myThings", "dictionary"];
      tables.forEach(v => {
        if (!db.objectStoreNames.contains(v)) { //判断数据库中是否已经存在该名称的数据表
          db.createObjectStore(v, { keyPath: "id" });
        }
      });
      // if (!db.objectStoreNames.contains("personInfo")) { //判断数据库中是否已经存在该名称的数据表
      //   db.createObjectStore("personInfo", { keyPath: "id" });
      //   // objectStore.createIndex("name", "name", { unique: false });
      //   // objectStore.createIndex("contact", "contact", { unique: true });
      //   // objectStore.createIndex("addrs", "address", { unique: true });
      //   // objectStore.createIndex("remarks", "remarks", { unique: true });
      // }
    };
    window.INDEXEDDB_DB = indexedDB;
  });
}
export function deleteDB(dbName) {
  const db = window.INDEXEDDB_DB_RET;
  db.close();
  return new Promise((resolve, reject) => {
    // let indexedDB = window.indexedDB || window.webkitindexedDB;
    const request = window.INDEXEDDB_DB.deleteDatabase(dbName);
    console.log("删除数据库" + dbName);
    request.onsuccess = function() {
      console.log("删除数据库成功");
      resolve();
    };
  
    request.onerror = function() {
      console.log("删除数据库失败");
      reject();
    };
  });
}

/**
 * 保存数据
 * @param {*} model 数据
 * @param {*} isUpdate 是否是更新数据
 * @param {*} tableName 表名
 */
export function save(model, isUpdate, tableName) {
  return new Promise((resolve, reject) => {
    const db = window.INDEXEDDB_DB_RET;
    let request = db.transaction([tableName], "readwrite")
      .objectStore(tableName);
    request = isUpdate ? request.put(model) : request.add(model);
    request.onsuccess = function() {
      console.log("数据写入成功");
      resolve();
    };
    request.onerror = function() {
      console.log("数据写入失败");
      reject();
    };
  });
}
/**
 * 查询数据
 * @param {*} model 
 * @param {*} tableName 表名
 */
export function list(model, tableName) {
  return Promise.resolve()
  .then(() => {
    if (window.INDEXEDDB_DB_RET) {
      return window.INDEXEDDB_DB_RET;
    } else {
      return openDB().then(() => window.INDEXEDDB_DB_RET);
    }
  }).then(db => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([tableName]);
      var objectStore = transaction.objectStore(tableName);
      var request = objectStore.getAll();
      request.onerror = function() {
        console.log("查询失败");
        reject("查询失败");
      };
      request.onsuccess = function() {
        if (request.result) {
          console.log(request.result);
          let re = request.result;
          Object.keys(model || {}).forEach(key => {
            if (model[key] && model[key].length === 2) {
              re = re.filter(v => (v[key] >  model[key][0] && v[key] <  model[key][1]) || (v[key] >=  model[key][0] && v[key] <  model[key][1]) || (v[key] >  model[key][0] && v[key] <=  model[key][1]) || (v[key] ===  model[key][0] && v[key] ===  model[key][1]));
            } else if (model[key]) {
              re = re.filter(v => v[key] && v[key].indexOf(model[key]) !== -1);
            } else if (model[key] === null) {
              re = re.filter(v => v[key] === "");
            }
          });
          resolve(re);
        } else {
          console.log("未获得数据记录");
          resolve("未获得数据记录");
        }
      };
    });
  });
}
/**
 * 根据id删除记录
 * @param {*} id ID
 * @param {*} tableName 表名
 */
export function deleteById(id, tableName) {
  return new Promise((resolve, reject) => {
    const db = window.INDEXEDDB_DB_RET;
    var request = db.transaction([tableName], "readwrite")
      .objectStore(tableName)
      .delete(id);
    request.onsuccess = function() {
      resolve();
      console.log("数据删除成功");
    };
    request.onerror = function() {
      reject();
      console.log("数据删除失败");
    };
  });
}
/**
 * 根据id查询记录
 * @param {*} id ID
 * @param {*} tableName 表名
 */
export function getById(id, tableName) {
  return new Promise((resolve, reject) => {
    const db = window.INDEXEDDB_DB_RET;
    var request = db.transaction([tableName]).objectStore(tableName)
      .get(id);
    request.onsuccess = function() {
      console.log("数据查询成功", request.result);
      resolve(request.result);
    };
    request.onerror = function() {
      console.log("数据查询失败");
      reject();
    };
  });
}