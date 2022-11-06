
const catalog = [
    {
        _id: "12389mxie",
        title: "Cups",
        price: 11.99,
        category: "supply",
        image:"cups.jpg"
    },

    {
        _id: "12555lpqa",
        title: "Filters",
        price: 7.99,
        category: "supply",
        image:"filters.jpg"
    },

    {
        _id: "12809xcwe",
        title: "Mixer",
        price: 15.85,
        category: "equipment",
        image:"mixer.jpg"
    },

    {
        _id: "89234dckt",
        title: "Apron",
        price: 5.59,
        category: "accessories",
        image:"apron.jpg"
    },

    {
        _id: "90233tyor",
        title: "Grinder",
        price: 20.33,
        category: "equipment",
        image:"grinder.jpg"
    },

    {
        _id: "67851hjdk",
        title: "Station",
        price: 12.59,
        category: "equipment",
        image:"station.jpg"
    },

    {
        _id: "74856nerf",
        title: "Kcups",
        price: 6.75,
        category: "supply",
        image:"kcup.jpg"
    }

];


class DataService{


    getCatalog(){
        return catalog;
        //TODO: get the catalog from the server
    }

}


export default DataService; 