/*
 * @Description:
 * @Date: 2023-03-23 20:45:33
 * @LastEditors: huangly
 * @LastEditTime: 2023-03-23 20:45:53
 * @FilePath: /wuhan-sszh/Users/d_xiaohei/Desktop/vue-demo/未命名.js
 */
const duplicates = _.filter(
  _.uniqWith(
    _.map(arr, (item) => {
      if (
        _.filter(arr, {
          descriptionChi: item.descriptionChi,
          participantCode: item.participantCode,
        }).length > 1
      ) {
        return item;
      }
      return false;
    }),
    function (a, b) {
      return (
        a.participantCode &&
        a.subItemId &&
        b.participantCode &&
        b.subItemId &&
        a.participantCode === b.participantCode &&
        a.subItemId === b.subItemId
      );
    }
  ),
  (value) => {
    return value;
  }
).map((item) => item.descriptionChi);

// 写一个函数，实现以下功能: 从一个对象数组中, 根据对象中的id去重
function unique(arr) {
  let obj = {};
  return arr.reduce((prev, next) => {
    obj[next.id] ? "" : (obj[next.id] = true && prev.push(next));
    return prev;
  }, []);
}

function unique2(arr) {
  return [...new Set(arr.map((item) => item.id))].map((id) =>
    arr.find((item) => item.id === id)
  );
}
