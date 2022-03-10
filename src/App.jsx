import Header from './components/Header';
import MainSection from './components/MainSection';
import LittleSection from './components/LittleSection';
import Footer from './components/Footer';

import data from './data';

import illustration from './images/illustration-editor-desktop.svg';
import notebook from './images/illustration-laptop-desktop.svg';
import smartphone from './images/illustration-phones.svg';


function App() {
  const componentSection1 = data.section1.map(data => <MainSection key={data.id} content={data} srcImage={illustration}/>);
  const componentSection2 = data.section2.map(data => <LittleSection key={data.id} content={data} srcImage={smartphone} />);
  const componentSection3 = data.section3.map(data => <MainSection key={data.id} content={data} srcImage={notebook}/>);
  return (
    <div className="container">
      <Header />
      {componentSection1}
      {componentSection2}
      {componentSection3}
      <Footer />
    </div>
  );
}

export default App;
