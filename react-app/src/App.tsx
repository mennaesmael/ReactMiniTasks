import ListGroup from "./Components/ListGroup";

function App() {
    const handleSelectItem= (item:string) => {
        console.log(item);
    }
    let items = [" Cairo", "Fauom", "Aswan", "Giza", "Alex"];
 return<div><ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}></ListGroup></div>;
}

export default App;
