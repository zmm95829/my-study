export default `/**
* JSON字符串转JSON对象
* @param {*} json JSON字符串
*/
export function stringToJson(json) {
 let re = json;
 try {
   re = JSON.parse(` + "${json.replace(/\\s/g, \"\")}" + `)
 } catch (e) {
   alert("字符串转JSON对象失败");
   console.error(e);
 }
 return re;
}

/**
* 将json字符串转换为格式化的字符串形式
* @param {*} src 源数据
* @param {*} needQuotation 是否需要双引号
* @param {*} space 空格
* @param {*} isEnd 是否最后一个属性
*/
export function jsonFormat(src, needQuotation = true, space = 0, isEnd = true, lastIsArrAndNotFirst = false) {
 let re = "";
 if (space === 0) {
   src = stringToJson(src);
   if (typeof src === "string") {
     return src;
   }
 }
 switch (Object.prototype.toString.call(src)) {
   case "[object Array]":
     re = "["
     src.forEach((v, index) => {
       re += jsonFormat(v, needQuotation, space, index === src.length - 1, index !== 0);
     })
     re += "]";
     re += isEnd ? "" : ",\n";
     break;
   case "[object Object]":
     re = ` + "${lastIsArrAndNotFirst ? getStringOfTimes(\" \", space) : \"\"}{\n" + `;
     const keys = Object.keys(src);
     keys.forEach((key, index) => {
       re += ` + "${getStringOfTimes(\" \", space + 2)}${needQuotation ? \"\"\" : \"\"}${key}${needQuotation ? \"\"\" : \"\"}: " + `;
       re += jsonFormat(src[key], needQuotation, space + 2, index === keys.length - 1);
     });
     re += ` + "\n${getStringOfTimes(\" \", space)}}" + `;
     re += isEnd ? "" : ",\n";
     break;
   case "[object String]":
     re = ` + "\"${src}\"" + `;
     re += isEnd ? "" : ",\n";
     break;
   case "[object Number]":
   case "[object Boolean]":
     re = src;
     re += isEnd ? "" : ",\n";
     break;
   default: break;
 }
 return re;
}
function getStringOfTimes(str, times) {
 let re = "";
 for (let i = 0; i < times; i++) {
   re += str;
 }
 return re;
}
`;