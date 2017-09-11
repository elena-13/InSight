$(function() {

//Modal Window//
$('.user-info-min').on('click', function (e) {
    e.preventDefault();
    $('.modal-window').toggleClass('active');

  });
  
 


////Tabs////
	$(document).ready(function () {

  // Intial Border Position
  var activePos = $('.tabs-header .active').position();

  // Change Position
  function changePos() {

    // Update Position
    activePos = $('.tabs-header .active').position();

    // Change Position & Width
    $('.border').stop().css({
      left: activePos.left,
      width: $('.tabs-header .active').width()
    });
  }

  changePos();

  // Intial Tab Height
  var tabHeight = $('.tab.active').height();

  // Animate Tab Height
  function animateTabHeight() {

    // // Update Tab Height
    // tabHeight = $('.tab.active').height();

    // // Animate Height
    // $('.tabs-content').stop().css({
    //   height: tabHeight + 'px'
    // });
  }

  animateTabHeight();

  // Change Tab
  function changeTab() {
    var getTabId = $('.tabs-header .active a').attr('tab-id');

    // Remove Active State
    $('.tab').stop().fadeOut(300, function () {
      // Remove Class
      $(this).removeClass('active');
    }).hide();

    $('.tab[tab-id=' + getTabId + ']').stop().fadeIn(300, function () {
      // Add Class
      $(this).addClass('active');

      // Animate Height
      animateTabHeight();
    });
  }

  // Tabs
  $('.tabs-header li').on('click', function (e) {
    e.preventDefault();

    // Tab Id
    var tabId = $(this).children().first().attr('tab-id');

    // Remove Active State
    $('.tabs-header li').removeClass('active');

    //var aa = $(this).stop().child();
    // Add Active State
    $(this).stop().addClass('active');

    changePos();

    // Update Current Itm
    tabCurrentItem = tabItems.filter('.active');

    // Remove Active State
    $('.tab').stop().fadeOut(300, function () {
      // Remove Class
      $(this).removeClass('active');
    }).hide();

    // Add Active State
    $('.tab[tab-id="' + tabId + '"]').stop().fadeIn(300, function () {
      // Add Class
      $(this).addClass('active');

      // Animate Height
      animateTabHeight();
    });
  });

  // Tab Items
  var tabItems = $('.tabs-header ul li');

  // Tab Current Item
  var tabCurrentItem = tabItems.filter('.active');





  // Ripple
  $('[ripple]').on('click', function (e) {
    var rippleDiv = $('<div class="ripple" />'),
      rippleOffset = $(this).offset(),
      rippleY = e.pageY - rippleOffset.top,
      rippleX = e.pageX - rippleOffset.left,
      ripple = $('.ripple');
    rippleDiv.css({
      top: rippleY - rippleDiv.height()/2,
      left: rippleX - rippleDiv.width()/2,
      background: $(this).attr("ripple-color")
    }).appendTo($(this));

    window.setTimeout(function () {
      rippleDiv.remove();
    }, 1500);
  });
});

/*OwlCarousel*/
	$('.owl-carousel').owlCarousel({
	  loop: false,
		margin: 10,
		nav: true,
		dots: false,
		items: 1,
		navText: '',
		navClass: ['arrow-left', 'arrow-right']
	});

//Highlighted table//	
	// $('td').hover(function() {
    // 	var t = parseInt($(this).index()) + 1;
    	
    // 	$('td:nth-child(' + t + ')').addClass('highlighted');
	// },
	// function() {
	//     var t = parseInt($(this).index()) + 1;
	//     $('td:nth-child(' + t + ')').removeClass('highlighted');
	// });

//Fixed table header//  
$(window).on("load resize", function(e) {
  var scrollWidth = $('.tbl-content-manager').width() - $('.tbl-content-manager table').width();
  $('.tbl-header-manager').css({'padding-right':scrollWidth});
 
}).resize();

///Fixed time-line and weeks-line///
   $(document).ready(function(){
     $(window).bind('scroll', function() {
     var navHeight = $( window ).height() - 70;
       if ($(window).scrollTop() > navHeight) {
         $('.time-line').fadeIn(1000, function(){
            $(this).addClass('fixed');
         });
       }
       else {
         $('.time-line').removeClass('fixed');
       }
    });
  });

//Drop Down app//
// $('.app-name').on('click',function(e){
//   e.preventDefault();
  
//   if ( $(this).hasClass("active") ){
//     $(this).parent().attr('rowspan', 1 ); 
//   }
//   else{
//     var content = $(this);

//     $(this).parent().attr('rowspan', 3 );
//   }
//   $(this).toggleClass('active');
  

// });


//Second tabs//



var tr = $('.tab a');
  
  if( $(tr).hasClass("active") != $(tr).on('click')){
    target = $(tr).attr('href');
    $('.tab-content-second > div').not(target).hide();
  }


        $(tr).on('click', function (e) { 

          e.preventDefault();

          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
          
          target = $(this).attr('href');

          $('.tab-content-second > div').not(target).hide();
          
          $(target).fadeIn(600);
            
          });
  


///Calendar opening///



//Circle diagrams//
$( document ).ready(function() {
    $(".left-circle").circliful({
                animationStep: 5,
                foregroundBorderWidth: 5,
                foregroundColor: '#80D8C7',
                backgroundColor: '#E6E7E8',
                pointSize: 50,
                fontColor: '#000',
                percentageY: 105,
                backgroundBorderWidth: 5,
                percent: 80
           });
   });
$( document ).ready(function() {
    $(".right-circle").circliful({
                animationStep: 5,
                foregroundBorderWidth: 5,
                foregroundColor: '#ED8080',
                backgroundColor: '#E6E7E8',
                pointSize: 50,
                fontColor: '#000',
                percentageY: 105,
                backgroundBorderWidth: 5,
                percent: 20
           });
   });

// var amountWorkers = $('#managerBarChart').length;
// var idArr = [];
// for (var i = 0; i < amountWorkers; i++) {
//   while(true){
//       var randomId = Math.floor(Math.random() * 10000);
//       if (idArr.indexOf(randomId) == -1) {
//         idArr.push(randomId);
//         break;
//       }
//   } 
// }
// $('#managerBarChart').each(function(){
//   $(this).data('target', idArr.pop());
// });

//User's bar Chart by Day//
Chart.defaults.global.responsive = false;

var ctx = $("#barChart");
if($('*').is('#barChart')) {
var barChartData = {
  labels: [""],
        datasets: [{
            label: 'Productivity',
            data: [6.5 ,8],
            backgroundColor: [
                'rgba(128, 216, 199, 1)',
            ]
        }, {
            label: 'Inefficiency',
            data: [1.5],
            backgroundColor: [
                'rgba(237, 128, 128, 1)',
            ]
        }]
};
var barChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: barChartData,
    options: {
        responsive: false,
        legend: {
          labels: {
            usePointStyle: true,
            boxWidth: 30,
            padding: 30,
            
          },
          position: 'right'
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                },
                barThickness: 15,
                categoryPercentage: 0.2,
                barPercentage: 1.0
            }],
            yAxes: [{
                barThickness: 15,
                stacked: true,
                gridLines: {
                  display: false
                },
                categoryPercentage: 0.2,
                barPercentage: 1.0,
                display: false
            }]
        },
        layout: {
          padding: [0, 20, 10, 0]
        }   
    }
});
}

//User's bar Chart by Week//
var ctx = $("#barWeekChart");
if($('*').is('#barWeekChart')) {
var barWeekChartData = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [{
            label: 'Productivity',
            data: [10, 11, 12, 13, 14, 15, 16, 17, 18],
            backgroundColor: [
                'rgba(128, 216, 199, 1)',
                'rgba(128, 216, 199, 1)',
                'rgba(128, 216, 199, 1)',
                'rgba(128, 216, 199, 1)',
                'rgba(128, 216, 199, 1)',
                'rgba(128, 216, 199, 1)',
                'rgba(128, 216, 199, 1)'
            ]
        }, {
            label: 'Inefficiency',
            data: [6, 8, 4, 11, 10, 16, 6, 5],
            backgroundColor: [
                'rgba(237, 128, 128, 1)',
                'rgba(237, 128, 128, 1)',
                'rgba(237, 128, 128, 1)',
                'rgba(237, 128, 128, 1)',
                'rgba(237, 128, 128, 1)',
                'rgba(237, 128, 128, 1)',
                'rgba(237, 128, 128, 1)'
            ]

        }]
};
var barWeekChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: barWeekChartData,
    options: {
        responsive: false,
        legend: {
          labels: {
            usePointStyle: true,
            boxWidth: 30,
            padding: 30,
            
          },
          position: 'right'
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                },
                barThickness: 15,
                categoryPercentage: 0.5,
                barPercentage: 1.0,
                // display: false
                // type: 'time',
                // time: {
                //   displayFormats: {
                //     hour: 'MMM D, hA'
                //   }

                // }
                // gridLines: {
                //   offsetGridLines: false
                // }
            }],
            yAxes: [{
                barThickness: 15,
                stacked: true,
                gridLines: {
                  display: false
                },
                categoryPercentage: 0.5,
                barPercentage: 1.0,
                display: true
                

            }]
        },
        layout: {
          padding: [0, 20, 10, 0]
        }   
    }
});
}
//User's bar Chart by Month//
var ctx = $("#lineMonthChart");
if($('*').is('#lineMonthChart')) {
var barMonthChartData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
  datasets: [
    {       label: 'Inefficiency',
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(237, 128, 128, 0.5)",
            borderColor: "rgba(237, 128, 128, 1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(237, 128, 128, 1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(237, 128, 128, 1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [2, 8, 7, 4, 2, 5, 3, 6, 5, 2, 0, 3, 4, 7, 5, 5, 3, 7, 11, 4, 10, 9, 3, 12, 5, 9, 2, 6, 6, 3, 2],
            spanGaps: false,
        },
        {
            label: 'Productivity',
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(128, 216, 199, 0.5)",
            borderColor: "rgba(128, 216, 199, 1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [3, 1, 4, 3, 8, 2, 8, 2, 9, 2, 8, 4, 2, 7, 2, 5, 6, 2, 1, 3, 2, 6, 5, 8, 1, 12, 7, 1, 3, 8, 4],
            spanGaps: false,
        }
  ]
};
var lineMonthChart = new Chart(ctx, {
    type: 'line',
    data: barMonthChartData,
    options: {
        responsive: false,
        legend: {
          labels: {
                    usePointStyle: true,
                    boxWidth: 30,
                    padding: 30,
                    },
          position: 'right'
        },
        scales: {
            xAxes: [{
                categoryPercentage: 0.5,
                barPercentage: 1.0,
                scaleLabel: {
                  display: true,
                  labelString: 'Day'
                },
                ticks: {
                    max: 31,
                    stepSize: 1
                }
            }],
            yAxes: [{
                gridLines: {display: false},
                display: true,
                scaleLabel: {
                            display: true,
                            labelString: 'Worked hours'
                          },
                ticks: {
                    max: 12,
                    min: 0,
                    stepSize: 1
                }
                

            }]
        },
        layout: {
          padding: [0, 20, 10, 0]
        },

    }
});
}


///////////////////////////////
//Manager's bar chart by day//
var ctx = $(".managerBarChart");
var managerBarData = {
  labels: [''],
  datasets: [
    {
    label: 'Productivity',
    backgroundColor: ['rgba(128, 216, 199, 1)'],
    data: [80]
  },  
  {
    label: 'Inefficiency',
    backgroundColor: ['rgba(237, 128, 128, 1)'],
    data: [20]
  }
  ]
};
for (var i = 0; i < ctx.length; i++) {
  var element = ctx[i];
  var managerBarChart = new Chart(element, {
  type: 'horizontalBar',
  data: managerBarData,
  options: {
    responsive: true,
    tooltips: {
       mode: 'nearest',
       intersect: false
    },
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        stacked: true,
        display: false,
        categoryPercentage: 0.2,
        barPercentage: 1.0,
        barThickness: 15,
        gridLines: {
           display: false
                },
        ticks: {
          beginAtZero: true
          },
      }],
      yAxes: [{
        stacked: true,
        display: false,
        categoryPercentage: 0.2,
        barPercentage: 1.0,
        barThickness: 15,
        gridLines: {
           display: false
                }
      }]
    }
  }
}); 
}
//Manager's bar chart by month///
var ctx = $("#barMonthChartManager");
if($('*').is('#barMonthChartManager')) {
var barWeekChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            label: 'Productivity',
            data: [10, 11, 12, 13, 14, 15, 16, 17, 18, 10, 11, 12, 13, 14, 15,],
            backgroundColor: [
                'rgba(128, 216, 199, 1)',
                'rgba(128, 216, 199, 1)',
                'rgba(128, 216, 199, 1)',
                'rgba(128, 216, 199, 1)',
                'rgba(128, 216, 199, 1)',
                'rgba(128, 216, 199, 1)',
                'rgba(128, 216, 199, 1)',
                'rgba(128, 216, 199, 1)',
                'rgba(128, 216, 199, 1)'
            ]
        }, {
            label: 'Inefficiency',
            data: [6, 8, 4, 11, 10, 16, 6, 5, 10, 16, 6, 5],
            backgroundColor: [
                'rgba(237, 128, 128, 1)',
                'rgba(237, 128, 128, 1)',
                'rgba(237, 128, 128, 1)',
                'rgba(237, 128, 128, 1)',
                'rgba(237, 128, 128, 1)',
                'rgba(237, 128, 128, 1)',
                'rgba(237, 128, 128, 1)',
                'rgba(237, 128, 128, 1)',
                'rgba(237, 128, 128, 1)'
            ]

        }]
};
var barWeekChart = new Chart(ctx, {
    type: 'bar',
    data: barWeekChartData,
    options: {
        responsive: false,
        legend: {
          labels: {
            usePointStyle: true,
            boxWidth: 30,
            padding: 30,
            
          },
          position: 'right'
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                },
                barThickness: 25,
                categoryPercentage: 0.5,
                barPercentage: 1.0,
            }],
            yAxes: [{
                barThickness: 25,
                stacked: true,
                gridLines: {
                  display: false
                },
                categoryPercentage: 0.5,
                barPercentage: 1.0,
                display: true
                

            }]
        },
        layout: {
          padding: [0, 20, 10, 0]
        }   
    }
});
}

$('.mini-chart').each(function(){
  var temp = $(this).find('div'); 
  
  var productive_percent = parseInt($(temp[0]).data('valuePercent'));
  
  var inefficient_percent = parseInt($(temp[1]).data('valuePercent'));
  $(temp[0]).css('width', 60*productive_percent/100);
  $(temp[1]).css('width', 60*inefficient_percent/100);

});

var employees = $('.list').find('tr');
employees.each(function(){
  $(this).on('click', function(){
    location.href="statprofile.html";
  });
});
var employees = $('.week-statistic-manager').find('tr');
employees.each(function(){
  $(this).on('click', function(){
    location.href="statprofile.html";
  });
});


//Radiobutton ID//
var idArr_radiobutton = [];
var selected = $("input[type='radio'][name='appc_category']").length;
var str = '';
for (var i = 0; i < selected; i++) {
  str = 'radio' + i;
  idArr_radiobutton.push(str);
}
$("input[type='radio'][name='appc_category']").each(function(){
  var tp = idArr_radiobutton.pop();
  $(this).attr('id', tp);
  $(this).after('<label for="'+tp+'"></label>');
});

///TimePicker///
 var options = {
        now: "8:00", //hh:mm 24 hour format only, defaults to current time
        twentyFour: true,  //Display 24 hour format, defaults to false
        upArrow: 'wickedpicker__controls__control-up',  //The up arrow class selector to use, for custom CSS
        downArrow: 'wickedpicker__controls__control-down', //The down arrow class selector to use, for custom CSS
        close: 'wickedpicker__close', //The close class selector to use, for custom CSS
        hoverState: 'hover-state', //The hover state class to use, for custom CSS
        title: 'Labor hours', //The Wickedpicker's title,
        secondsInterval: 1, //Change interval for seconds, defaults to 1,
        minutesInterval: 10, //Change interval for minutes, defaults to 1
        beforeShow: null, //A function to be called before the Wickedpicker is shown
        afterShow: null, //A function to be called after the Wickedpicker is closed/hidden
        show: null, //A function to be called when the Wickedpicker is shown
        clearable: false, //Make the picker's input clearable (has clickable "x")
    };
 $('.timepicker').wickedpicker(options);


//Date of Birth Selector//
var options = [];
options.push('<option value="', 'day', '">', 'Day', '</option>');
for (var i = 1; i <= 31; ++i) {
   options.push('<option value="', i, '">', i, '</option>');
 }
 $(".day-select").html(options.join(''));

var monthSelect = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var array = [];
array.push('<option value="', 'month', '">', 'Month', '</option>');
for (var i = 0; i <= monthSelect.length-1; ++i){
  array.push('<option value="',  monthSelect[i], '">',  monthSelect[i], '</option>');
 }
  $(".month-select").html(array.join(''));

var arrayYear = [];
arrayYear.push('<option value="', 'year', '">', 'Year', '</option>');
for (var i = 1960; i <= 2017; ++i) {
  arrayYear.push('<option value="', i, '">', i, '</option>');
}
$(".year-select").html(arrayYear.join(''));




});
