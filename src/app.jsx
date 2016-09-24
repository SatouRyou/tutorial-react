const React = require('react');
const ReactDOM = require('react-dom');

const items = [
  { name: 'aaa', color: 'black' },
  { name: 'bbb', color: 'green' },
  { name: 'ccc', color: 'pink' },
  { name: 'ddd', color: 'yellow' },
];

let nameData = '';
let colorData = '';
let indexData = 0;
const setNameData = (event) => {
  nameData = event.target.value;
  render();
};
const setColorData = (event) => {
  colorData = event.target.value;
  render();
};
const setIndexData = (event) => {
  indexData = event.target.value;
  render();
};
const addData = () => {
  if ( indexData == 0 ) {
     items.push({ name: nameData, color: colorData });
  } else {
    items[indexData+1] = { name: nameData, color: colorData };
  }
  nameData = '';
  colorData = '';
  indexData = 0;
  render();
};
const deleteItem = (index) => {
  items.splice(index, 1);
  render();
};
const MyForm = () => (
  <div>
    <input type="number" value={indexData} onChange={setIndexData} />
    <input type="text" value={nameData} onChange={setNameData} />
    <input type="text" value={colorData} onChange={setColorData} />
    <button onClick={addData}>Add Data</button>
  </div>
);

const Hello = ({ name, color, onDelete }) => (
  <div>
    <p style={{ color }}>Hello {name}!</p>
    <button onClick={() => onDelete()}>Delete</button>
  </div>
);

const App = () => (
  <div>
    <MyForm />
    {items.map((item, index) => (
      <Hello name={item.name} color={item.color} onDelete={() => deleteItem(index)} />
    ))}
  </div>
);

const render = () => ReactDOM.render(<App />, document.getElementById('app'));
setTimeout(render, 0);
