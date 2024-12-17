/**
 * Manages content of seeing website.
 *
 */
class ContentManager{
    /**
     * Name of website content file (example: 'index').
     */
    content = "home";
    /**
     * Title of website.
     */
    title = "";
    /**
     * Object of data to send to template engine.
     */
    data = {
        "content":this.content,
        "title":this.title
    }
    /**
     * Sets content of website.
     * @param {string} content Name of website content file (example: 'index').
     * @returns {ContentManager}
     */
    setContent(content){
        this.content = content;
        return this;
    }
    /**
     * Sets title of website.
     * @param {string} title Title of website.
     * @returns {ContentManager}
     */
    setTitle(title){
        this.title = title;
        return this;
    }
    /**
     * Adds JSON parameters to data object.
     * @param  {...JSON} addedData Objects to add.
     * @returns {ContentManager}
     */
    addData(...addedData){
        this.data = Object.assign({},this.data, addedData);
        return this;
    }
    /**
     * Returns setted data.
     * @returns Data object;
     */
    getData(){
        return data;
    }
}

module.exports = ContentManager;