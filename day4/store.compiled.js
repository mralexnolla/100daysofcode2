(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    "use strict";
    
    /* Note to learners: 
    Normally, you would import redux like this:
    
      import { createStore } from 'redux';
    
    Due to Codecademy's technical limitations 
    for testing this exercise, we are using 
    `require()`.
    */
    var _require = require('redux'),
        createStore = _require.createStore; // Action Creators
    
    
    function increment() {
      return {
        type: 'increment'
      };
    }
    
    function decrement() {
      return {
        type: 'decrement'
      };
    } // Reducer / Store
    
    
    var initialState = 0;
    
    var countReducer = function countReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;
    
      switch (action.type) {
        case 'increment':
          return state + 1;
    
        case 'decrement':
          return state - 1;
    
        default:
          return state;
      }
    };
    
    var store = createStore(countReducer); // HTML Elements
    
    var counterElement = document.getElementById('counter');
    var incrementer = document.getElementById('incrementer');
    var decrementer = document.getElementById('decrementer'); // Store State Change Listener
    
    var render = function render() {
      counterElement.innerHTML = store.getState();
    };
    
    store.subscribe(render);
    render(); // DOM Event Handlers
    
    var incrementerClicked = function incrementerClicked() {
      store.dispatch(increment());
    };
    
    incrementer.addEventListener('click', incrementerClicked);
    
    var decrementerClicked = function decrementerClicked() {
      store.dispatch(decrement());
    };
    
    decrementer.addEventListener('click', decrementerClicked);
    
    },{"redux":undefined}]},{},[1]);
    