import ListGroup from "./components/ListGroup";

function App() {
  let items = ["India", "USA", "Rassia", "China", "Singapore", "japan"];

  const handleSelectedItem = (item: String) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Countries"
        onSelectItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
