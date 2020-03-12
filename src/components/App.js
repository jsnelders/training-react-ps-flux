import React  from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import CoursesPage from './CoursesPage';
import ManageCoursePage from './ManageCoursePage';
import NotFoundPage from './NotFoundPage';
import Header from './common/Header';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
    // function getPage()
    // {
    //     const route = window.location.pathname;

    //     if (route === "/about") return <AboutPage />;
    //     if (route === "/courses") return <CoursesPage />;
    
    //     return <HomePage />;
    // }

    // return (
    //     <div className="container-fluid">
    //         <Header />
    //         { getPage() }
    //     </div>
    // );


    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/courses" component={CoursesPage} />
                <Route path="/course/:slug" component={ManageCoursePage} />
                <Route path="/about" component={AboutPage} />

                <Redirect from="/about-page" to="/about" />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    );
}

export default App;