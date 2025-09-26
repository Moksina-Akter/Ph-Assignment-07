
import { Suspense } from 'react';
import Footer from './Components/Footer';
import IssueManagement from './Components/IssueManagement';
import Navbar from './Components/Navbar';


const fetchData = async () => {
  const result = await fetch('./data.json')
  return result.json();
}

function App() {
  const fetchPromise = fetchData();

  return (
    <>
      <Navbar />
      <Suspense fallback={<p>Loading .....</p>}>
         <IssueManagement fetchPromise={fetchPromise} />
      </Suspense>
      <Footer />
    </>
  )
}

export default App  