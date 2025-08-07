const style = {
  color: "blue",
  fontSize: "20px",
};

function List() {
  return (
    <ul>
      <li>Steak</li>
      <li style={style}>Tacos</li>
      <li>Pizza</li>
    </ul>
  );
}

export default List;
// This component can be imported and used in the main index.jsx file
