export default class LoginState {

    constructor(id, name, secret, token, levelName, mark, fatherMark, markPath, applianceMark, px) {
        this.id = id
        this.name = name
        this.secret = secret
        this.token = token
        this.levelName = levelName
        this.mark = mark
        this.fatherMark = fatherMark
        this.markPath = markPath
        this.applianceMark = applianceMark
        this.px = px
    }


    setId(value) {
        this.id = value;
        return this
    }

    setName(value) {
        this.name = value;
        return this
    }
    setSecret(value) {
        this.secret = value;
        return this
    }

    setToken(value) {
        this.token = value;
        return this
    }

    setLevelName(value) {
        this.levelName = value;
        return this
    }

    setMark(value) {
        this.mark = value;
        return this
    }

    setFatherMark(value) {
        this.fatherMark = value;
        return this
    }

    setMarkPath(value) {
        this.markPath = value;
        return this
    }

    setApplianceMark(value) {
        this.applianceMark = value;
        return this
    }

    setPx(value) {
        this.px = value;
        return this
    }
}