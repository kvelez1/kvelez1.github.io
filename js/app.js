$(function(){

  $.ajax({ 
    url:"https://api.meetup.com/topics?&sign=true&photo-host=public&search=marketing&only=name,members,description,link&page=10&key=52324a1120124b7f53381a3b7f631b5b", 
    type:"GET", // GET = requesting data
    dataType: 'jsonp',
    success: function(data) { 
      console.log(data);
      displayResults(data);
    },

  });

  function displayResults(data) {
    var meetups = data.results;

    meetups.forEach(function(meetup) {
      var panelHtml = createPanel(meetup);

      $(".panel-container").append(panelHtml);
    });
  }

  function createPanel(meetup) {
    return (
      '<div class="col-xs-12 col-md-6">' + 
        '<div class="panel panel-primary">' + 
          
          '<div class="panel-heading"><b>Active Members:</b> &nbsp;' +
            '<span class="members">' + meetup.members+ '</span>' + 
          '</div>' + 
          
          '<div class="panel-body">' + 
            '<h3 class="meetup-name">' + meetup.name + '</h3>' +
          '</div>' + 
          
          '<div class="panel-footer">' +  
            '<a href="' + meetup.link + '">Learn more about this awesome Meetup &nbsp; <span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></a>' + 
          '</div>' +
        '</div>' + 
      '</div>' 
    )

  }




});