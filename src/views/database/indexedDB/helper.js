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
      console.log("成功建立并打开数据库:" + dbName);
      resolve(true);
    };
    request.onupgradeneeded = function(e) {
      let db = e.target.result;
      console.log("数据库结构", db);
      let objectStore;
      if (!db.objecttables.contains("table")) { //判断数据库中是否已经存在该名称的数据表
        objectStore = db.createObjectStore("personInfo", { autoIncrement: true });
        objectStore.createIndex("name", "name", { unique: false });
        objectStore.createIndex("contactInfo", "contactInfo", { unique: true });
        objectStore.createIndex("address", "address", { unique: true });
      }
    };
    window.INDEXEDDB_DB = indexedDB;
  });
}