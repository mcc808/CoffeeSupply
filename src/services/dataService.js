import axios from "axios";


const catalog = [
    {
        _id: "12389mxie",
        title: "Cups",
        desc: "Pack of 100. Recycled material.",
        price: 11.99,
        category: "supply",
        image:"cups.jpg"
    },

    {
        _id: "12555lpqa",
        title: "Filters",
        desc: "Pack of 50 standard filters as needed. ",
        price: 6.50,
        category: "supply",
        image:"filters.jpg"
    },

    {
        _id: "12809xcwe",
        title: "Mixer",
        desc: "Top-notch equipment for quick service.",
        price: 25.85,
        category: "equipment",
        image:"mixer.jpg"
    },

    {
        _id: "89234dckt",
        title: "Apron",
        desc: "Styling for baristas only.",
        price: 8.59,
        category: "accessories",
        image:"apron.jpg"
    },

    {
        _id: "90233tyor",
        title: "Grinder",
        desc: "Essential for fast production.",
        price: 40.99,
        category: "equipment",
        image:"grinder.jpg"
    },

    {
        _id: "67851hjdk",
        title: "Station",
        desc: "Stay organized at all times.",
        price: 10.99,
        category: "equipment",
        image:"station.jpg"
    },

    {
        _id: "74856nerf",
        title: "Kcups",
        desc: "A variety of 40 flavors.",
        price: 7.75,
        category: "supply",
        image:"kcup.jpg"
    }

];


class DataService{

    async getCatalog(){
        //return catalog;
        //TODO: get the catalog from the server

        let result = await axios.get("http://127.0.0.1:5000/api/catalog");
        return result.data;
    }

    async saveProduct(product){
        let result = await axios.post("http://127.0.0.1:5000/api/catalog", product);
        return result.data; 
    }

    //create the getCoupons
    async getCoupons(){
        try{
        let result = await axios.get("http://127.0.0.1:5000/api/coupons");
        return result.data;
    }
    catch{
        return [];
    }
    }

}


export default DataService; 