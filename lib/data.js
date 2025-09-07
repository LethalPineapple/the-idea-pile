export default class data {
    constructor(user, x_loc, y_loc, height, width, content){
        this.user = user
        this.timestamp = Date.now();
        this.content = content

        //this is a ratio x_loc/screen size
        this.x = x_loc / width
        this.y = y_loc / height
    }

    editContent(content){
        this.content = content
    }

}