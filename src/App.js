import logo from './logo.svg';
import React ,{useState} from 'react';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import Repos from './components/Repos';


function App() {
  const [contactSelected, setContactSelected, setWork, workSelected] = useState(false);
  return (
    <div>
      <Nav
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      setWork = {setWork}
      workSelected = {workSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
          <About> </About>
          <Repos></Repos>
          </>
        ) : (
         <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
