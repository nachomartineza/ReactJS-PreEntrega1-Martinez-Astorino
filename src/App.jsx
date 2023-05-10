import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';

function App() {
    return (
        <div className='container-fluid'>
            <Header />
            <ItemListContainer greeting={"There are no products available."} />
            <Footer />
        </div> 
    )
}

export default App;