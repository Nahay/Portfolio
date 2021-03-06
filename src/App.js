import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Portfolio from './pages/Portfolio';
import FourOhFour from './pages/FourOhFour';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <main className="main">
                    <ToastContainer />
                    <Switch>
                        <Route exact path="/" component={Portfolio} />
                        <Route path="*" component={FourOhFour} />
                    </Switch>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
