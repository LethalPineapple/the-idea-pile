export default class text extends data {
    constructor(t_data, font, content, t_width, t_height, x_loc, y_loc){
        this.t_data = t_data
        this.font = font
        this.content = content
        this.color = 'black'

        //This will be the ratio so it will appear in diff resolutions in the same spot
        this.x = x_loc/t_width
        this.y = y_loc/t_height
    }

}