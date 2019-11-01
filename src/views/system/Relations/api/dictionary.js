import * as helper from "./dbHelper";
export function deleteDB(dbName) {
  const db = window.INDEXEDDB_DB_RET;
  db.close();
  const request = window.INDEXEDDB_DB.deleteDatabase(dbName);
  console.log("删除数据库" + dbName);
  request.onsuccess = function() {
    console.log("删除数据库成功");
  };

  request.onerror = function() {
    console.log("删除数据库失败");
  };
}
export function save(model, isUpdate) {
  return helper.save(model, isUpdate, "dictionary");
}
export function list(model) {
  return helper.list(model, "dictionary");
}
export function deleteById(id) {
  return helper.deleteById(id, "dictionary");
}
export function getById(id) {
  return helper.getById(id, "dictionary");
}
export function findSubsByItemId(id) {
  console.log("dictionaryh", helper.findOne({itemId: id}, "dictionary"));
  return helper.findOne({itemId: id}, "dictionary")
  .then(v => v.subs);
}

