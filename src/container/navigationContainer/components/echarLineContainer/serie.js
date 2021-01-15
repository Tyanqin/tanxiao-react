export default class Serie{
    constructor(year,type,value) {
        this.name = year
        this.type = type
        this.data = value
    }

    setName(name){
        this.name = name
        return this
    }
    setData(value){
        this.data = value
        return this
    }
    setType(type){
        this.type = type
        return this
    }
}
