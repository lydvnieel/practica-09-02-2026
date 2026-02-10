const PetsController = {};
const API_URL = 'http://localhost:5173/public/data/pets.json'


PetsController.findall = async () => await fetch(API_URL, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    } 
})
.then(res => res.json()).then(res => (res)).catch(console.log)

export default PetsController;