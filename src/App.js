import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageHome from "./pages/PageHome";
import PageProducts from "./pages/PageProducts";
import PageShopcart from "./pages/PageShopcart";
import PageError from "./pages/PageError";
import Layout from "./components/Layout";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/productos" component={PageProducts} />
                    <Route exact path="/carrito" component={PageShopcart} />
                    <Route exact path="/" component={PageHome} />
                    <Route exact path="" component={PageError} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
