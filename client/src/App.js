import axios from 'axios';

function App() {
  axios.get('http://localhost:5000').then((response) => {
    console.log(response.data);
  })

  return (
    <div>
      Hi, use backend localhost to check api call.
    </div>
  );
}

export default App;
