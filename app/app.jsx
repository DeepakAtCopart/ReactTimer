var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router'); // de-structuring syntax
// The above statement states exactly the as below for all four variables.
// var Route = reuiqre('react-router').Route;
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

// load foundation......css! is css loader
// style! to inject this into our html
require('style!css!foundation-sites/dist/foundation.min.css');
// firing up foundation.
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

// Router tag is given to us by react Router lib, and it expects one prop
// path is root of our application
// component here is what we want to render for every single page
// Router component needs to know what type of tracking to do
// Route component here is telling when the path is just '/' show 'Main' component
// '?_k=tiviqh' these type of weird characters are used by react router to
//          keep track of the state of our application between route changes
// When we render About component we also want to show Main conponent.
// we want it to be rendered as a child if Main as Weather
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Countdown path="countdown" component={Countdown}/>
            <IndexRoute component={Timer}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
// history={hashHistory} this tells react router that we want to '#' sign followed by path
//    in order to maintain the routes for our app.

// <Route path="about" component={About}/> this matches /about, which renders about component in the main component
// <Example path="example" component={Example}/> matches /example component in the main component
// If it doesn't match 'about' or 'example', then weather component will be rendered in main component
