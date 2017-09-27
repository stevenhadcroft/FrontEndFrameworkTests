import { Component } from 'react';

window.EventDispatcher = {
    events: {},
    on: function(event, callback) {
        var handlers = this.events[event] || [];
        handlers.push(callback);
        this.events[event] = handlers;
    },
    off: function(event, callback) {
        var handlers = this.events[event] || [];
        handlers.splice(handlers.indexOf(callback), 1);
        this.events[event] = handlers;
    },
    trigger: function(event, data) {
        var handlers = this.events[event];
        if (!handlers || handlers.length < 1)
            return;
        [].forEach.call(handlers, function(handler){
            handler(data);
        });
    }
};

class EventDispatcher extends Component {
}

export default EventDispatcher;





