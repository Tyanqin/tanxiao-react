window.onload = function(){
    let level_1_menus = document.querySelectorAll(".level_1_menu");
    let level_2_menus = document.querySelectorAll(".level_2_menu")
    menuControl(level_1_menus,"close_menu")
    menuControl(level_2_menus,"close_menu")

    //前台调用
    function menuControl(obj,cn,){
        let menuOpenUl = obj[0].parentNode
        for(let i = 0;i<obj.length;i++){
            obj[i].onclick= function(){
                let this_parentNode = this.parentNode
                panel(this_parentNode,cn)
                if(menuOpenUl != this_parentNode
                    && !hasClass(menuOpenUl,cn)){
                    panel(menuOpenUl,cn)
                }
                menuOpenUl = this_parentNode
            }
        }
    }

    //目录树重复代码提取
    function panel(obj,cn){
        let begin = obj.offsetHeight
        toggleClass(obj,cn)
        let end = obj.offsetHeight
        obj.style.height = begin+"px"
        move(obj,"height",end,10,20,function(){
            obj.style.height = ''
        })
    }

    //目录树样式判断
    function toggleClass(obj, cn){
        if (hasClass(obj, cn)) {
            return removeClass(obj, cn)
        } else {
            return addClass(obj, cn)
        }
    }
    function hasClass(obj, cn){
        let reg = new RegExp('\\b' + cn + '\\b')
        return reg.test(obj.className)
    }
    function addClass(obj, cn){
        if(obj.className){
            let oriName = obj.className
            let newClass = oriName+" "+cn
        }else{
            obj.className = cn
        }
    }
    function removeClass(obj, cn){
        let reg = new RegExp('\\b' + cn + '\\b')
        obj.className = obj.className.replace(reg, '')
    }

    //目录树样式过渡运动
    function move(obj, attr, target, speed, timeInterval, callback){
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
    function getStyle(obj, name){
        if (window.getComputedStyle) {
            return parseInt(getComputedStyle(obj, null)[name])
        }
        return obj.currentStyle[name]
    }
}

