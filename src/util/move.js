// /**
//  *
//  * @param {Object} obj    要执行动画的对象
//  * @param {Object} attr   属性
//  * @param {Object} target 执行动画的目标位置
//  * @param {Object} speed  移动的速度
//  * @param {Object} callback  动画执行完毕，执行的函数
//  */
// export const move=(obj, attr, target, speed, callback)=>{
//   clearInterval(obj.timer);
//   let current = parseInt(getStyle(obj, attr));
//   if(current > target) {
//     speed = -speed;
//   }
//   obj.timer = setInterval(function() {
//     let oldValue = parseInt(getStyle(obj, attr));
//     let newValue = oldValue + speed;
//     if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
//       newValue = target;
//     }
//     obj.style[attr] = newValue + "px";
//     if(newValue === target) {
//       clearInterval(obj.timer);
//       callback && callback();
//     }
//   }, 20);
// }
//
// function getStyle(obj, name){
//   if(window.getComputedStyle) {
//     return getComputedStyle(obj, null)[name];
//   }
//   return obj.currentStyle[name];
// }


/**
 * 匀速移动
 * @param {Object} obj    要执行动画的对象
 * @param {String} attr   属性
 * @param {Number} target 执行动画的目标位置
 * @param {Number} speed  移动的速度
 * @param {Number} timeInterval 时间间隔
 * @param {Function || Null } callback  动画执行完毕，执行的函数
 */
export const move = (obj, attr, target, speed, timeInterval, callback) => {
  clearInterval(obj.timer)
  let current = parseInt(getStyle(obj, attr))
  if (current > target) {
    speed = -speed
  }
  obj.timer = setInterval(function () {
    var oldValue = parseInt(getStyle(obj, attr))
    var newValue = oldValue + speed
    if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
      newValue = target
    }
    obj.style[attr] = newValue + 'px'
    if (newValue === target) {
      clearInterval(obj.timer)
      callback && callback()
    }
  }, timeInterval)
}
/**
 *  加速运动
 * @param {Object} obj         要执行动画的对象
 * @param {String} attr         属性
 * @param {Number} target  执行动画的目标位置
 * @param {Number} speed  移动的速度
 * @param {Number} acceleration  每次调用函数的加速度
 * @param {Number} timeInterval  时间间隔
 * @param {Function || Null} callback 动画执行完毕，执行的函数
 * @constructor
 */
export const acceleratedMove = (obj, attr, target, speed = 20, acceleration = 0.2, timeInterval = 60, callback) => {
  clearInterval(obj.timer)
  let current = parseInt(getStyle(obj, attr))
  if (current > target) {
    speed = -speed
  }
  obj.timer = setInterval(function () {
    var oldValue = parseInt(getStyle(obj, attr))
    speed += speed * 0.2
    var newValue = oldValue + speed
    if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
      newValue = target
    }
    obj.style[attr] = newValue + 'px'
    if (newValue === target) {
      clearInterval(obj.timer)
      callback && callback()
    }
  }, timeInterval)
}
/**
 * 元素抖动
 * @param {Object} obj                   元素对象
 * @param {String} attr                  抖动的方向
 * @param {Number} initTarget        抖动后回到原先的位置。
 * @param {Number} timeInterval    抖动的时间间隔
 * @param {Function || Null} callback                    回调函数
 */
export const jitter = (obj, attr = 'left', initTarget, timeInterval = 20, callback) => {
  clearInterval(obj.time)
  let index = 0
  let frequency = [20, -20, 18, -18, 16, -16, 14, -14, 12, -12, 10, -10, 8, -8, 6, -6, 4, -4, 2, -2, 0, 0]
  let len = frequency.length
  let target = getStyle(obj, attr)
  obj.style[attr] = initTarget + 'px'
  obj.time = setInterval(() => {
    index++
    let newTarget = target + frequency[index]
    obj.style[attr] = newTarget + 'px'
    if (index === len) {
      obj.style[attr] = initTarget + 'px'
      clearInterval(obj.time)
      callback && callback()
    }
  }, timeInterval)
}
/**
 *  淡出
 * @param {Object} obj                   元素对象
 * @param {Number} timeInterval  时间间隔
 * @param {Function || Null} callback                 回调函数
 */
export const fadeOutOpacity = (obj, timeInterval = 60, callback) => {
  clearInterval(obj.timer)
  let opacity = getStyle(obj, 'opacity')
  let count = 0
  obj.timer = setInterval(() => {
    count++
    if (count <= 10) {opacity = 0.9}
    if (count >= 10 && count <= 15) {opacity = 0.8}
    if (count >= 15 && count <= 20) {opacity = 0.6}
    if (count >= 20 && count <= 25) {opacity = 0.3}
    if (count >= 25) {opacity = 0}
    obj.style.opacity = opacity
    if (opacity <= 0) {
      clearInterval(obj.timer)
      callback && callback()
    }
  }, timeInterval)
}
/**
 * 淡入
 * @param {Object} obj                   元素对象
 * @param {Number} timeInterval  时间间隔
 * @param {Function || Null} fn                 回调函数
 */
export const fadeInOpacity = (obj, timeInterval = 60, fn) => {
  clearInterval(obj.timer)
  let opacity = getStyle(obj, 'opacity')
  let count = 0
  obj.timer = setInterval(() => {
    count++
    if (count <= 10) {opacity = 0.2}
    if (count >= 10 && count <= 15) {opacity = 0.3}
    if (count >= 15 && count <= 20) {opacity = 0.5}
    if (count >= 20 && count <= 25) {opacity = 0.8}
    if (count >= 25) {opacity = 1}
    obj.style.opacity = opacity
    if (opacity >= 1) {
      clearInterval(obj.timer)
      fn && fn()
    }
  }, timeInterval)

}
/**
 * 获取倒计时字符串
 * @param {Number} newYear
 * @param {Number} newMonth
 * @param {Number} newDate
 * @param {Number}newHours
 * @param {Number} newMinutes
 * @param {Number} newSeconds
 * @returns  {string}
 */
export const countdownDate = (newYear = 2020, newMonth = 9, newDate = 19, newHours = 24, newMinutes = 0, newSeconds = 0) => {
  let nowTime = new Date() //当前时间
  let newTime = new Date(newYear, newMonth, newDate, newHours, newMinutes, newSeconds) //秒杀终止时间
  let t = Math.floor((newTime.getTime() - nowTime.getTime()) / 1000) //剩余天数
  let hours = toTow(Math.floor(t % 86400 / 3600)) //剩余小时
  let minutes = toTow(Math.floor(t % 86400 % 3600 / 60)) //剩余分钟
  let seconds = toTow(Math.floor(t % 60)) //剩余秒数
  return hours + '' + minutes + '' + seconds
  // let showArray = [
  //   "&#xe62d;",
  //   '&#xe62e;',
  //   '&#xe62f;',
  //   '&#xe630;',
  //   '&#xe631;',
  //   '&#xe632;',
  //   '&#xe633;',
  //   '&#xe634;',
  //   '&#xe635;'
  // ]
  // console.log(`${showArray[strTime.charAt(4)*1]}${showArray[strTime.charAt(5)*1]}`)
  // console.log(" this.HoursRef.current", this.HoursRef.current)
  // this.HoursRef.current.innerHtml = `${showArray[strTime.charAt(0)*1]}${showArray[strTime.charAt(1)*1]}`
  // this.MinutesRef.current.innerHtml = `${showArray[strTime.charAt(2)*1]}${showArray[strTime.charAt(3)*1]}`
  // this.MinutesRef.current.innerHtml = `${showArray[strTime.charAt(4)*1]}${showArray[strTime.charAt(5)*1]}`
}
export const toTow = (n) => {
  return n < 10 ? '0' + n : n
}

/**
 * 展示当前时间
 * @param obj
 */
export const showTime=(obj)=>{
  let t = null;
  t = setTimeout(time, 1000);//開始运行
  function time() {
    clearTimeout(t);//清除定时器
    let dt = new Date();
    let y = dt.getFullYear();
    let mt = dt.getMonth() + 1;
    let day = dt.getDate();
    let h = dt.getHours();//获取时
    let m = dt.getMinutes();//获取分
    let s = dt.getSeconds();//获取秒
    obj.innerHTML = '当前时间：' + y + "年" + mt + "月" + day + "-" + h + "时" + m + "分" + s + "秒";
    t = setTimeout(time, 1000); //设定定时器，循环运行
  }
}

/**
 * 获取样式值,返回一个数字。
 * @param obj
 * @param name
 * @returns {number}
 */
export const getStyle = (obj, name) => {
  if (window.getComputedStyle) {
    return parseInt(getComputedStyle(obj, null)[name])
  }
  return obj.currentStyle[name]
}
/**
 * 获取样式值,返回一个字符串。
 * @param obj
 * @param name
 * @returns {number}
 */
export const getStrStyle = (obj, name) => {
  if (window.getComputedStyle) {
    return getComputedStyle(obj, null)[name]
  }
  return getComputedStyle(obj, null)[name]
}

/**
 * 是否有该样式
 * @param {Object} obj
 * @param {Object} cn
 */
export const hasClass = (obj, cn) => {
  let reg = new RegExp('\\b' + cn + '\\b')
  return reg.test(obj.className)
}

/**
 * 添加样式
 * @param {Object} obj 元素对象
 * @param {String} cn  className
 */
export const addClass = (obj, cn) => {
  if(obj.className){
    let oriName = obj.className
    let newClass = oriName+" "+cn
  }else{
    obj.className = cn
  }
}

/**
 * 删除样式
 * @param {Object} obj 元素对象
 * @param {Object} cn  className
 */
export const removeClass = (obj, cn) => {
  var reg = new RegExp('\\b' + cn + '\\b')
  obj.className = obj.className.replace(reg, '')
}

/**
 * 切换样式
 * @param {Object} obj  元素对象
 * @param {Object} cn   className
 */
export const toggleClass = (obj, cn) => {
  if (hasClass(obj, cn)) {
    return removeClass(obj, cn)
  } else {
    return addClass(obj, cn)
  }
}
//目录树重复代码提取
export const panel=(obj,cn)=>{
  let begin = obj.offsetHeight
  console.log("begin====>   ",begin)
  toggleClass(obj,cn)
  let end = obj.offsetHeight
  obj.style.height = begin+"px"
  move(obj,"height",end,10,20,function(){
    obj.style.height = ''
  })
}

//左箭头按钮移动
export const rightClickPlay = () => {
  this.index--
  let ul = this.CommodityRef.current
  let nodes = ul.childNodes
  if (this.index <= 0) {
    ul.style.left = 0
    this.index = nodes.length - 3
    return
  }
  move(ul, 'left', this.index * -250, 5, null)
}
//右箭头按钮移动
export const leftClickPlay = () => {
  this.index++
  this.index = Math.abs(this.index)
  let ul = this.CommodityRef.current
  let nodes = ul.childNodes
  if (this.index >= nodes.length - 3) {
    ul.style.left = 0
    this.index = 0
    return
  }
  move(ul, 'left', -250 * this.index, 5, null)
}

export const scollPostion=()=> {
  var t, l, w, h;
  if (document.documentElement && document.documentElement.scrollTop) {
    t = document.documentElement.scrollTop;
    l = document.documentElement.scrollLeft;
    w = document.documentElement.scrollWidth;
    h = document.documentElement.scrollHeight;
  } else if (document.body) {
    t = document.body.scrollTop;
    l = document.body.scrollLeft;
    w = document.body.scrollWidth;
    h = document.body.scrollHeight;
  }
  return {
    top: t,
    left: l,
    width: w,
    height: h
  };
}