//Liscenced under MIT

var waypoint = new Waypoint({
    element: document.getElementById('thing'),
    handler: function(direction) {
      alert('You have scrolled to a thing')
    }
  })