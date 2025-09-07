export default class data {
    constructor(user, x_loc, y_loc, height, width){
        this.user = user
        this.timestamp = Date.now();

        //this is a ratio x_loc/screen size
        this.x = x_loc / width
        this.y = y_loc / height
    }

}