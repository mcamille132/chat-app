
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Contact avatar="https://randomuser.me/api/portraits/men/1.jpg"
                name ="Tomothy Lawson"
                status />
      <Contact avatar="https://randomuser.me/api/portraits/men/20.jpg"
                name ="Ben Turner"
                 />
      <Contact avatar="https://randomuser.me/api/portraits/women/89.jpg"
                name ="Beverly Campbell"
                status />
    </div>
  );
}

export default App;
