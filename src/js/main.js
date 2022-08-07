$(function($) {

  "use strict";




//tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

//select2
$('.select2Def').select2();

   //canvas 1
   if(document.getElementById('chartLine') != null ){
    var ctx = document.getElementById('chartLine').getContext("2d");

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["JAN", "FEB", "APR", "MAY" ,"JUL","NOV"],
            datasets: [{
                label: "Data",
                borderColor: "#FEB449",
                pointHoverBorderWidth: 1,
                pointRadius: 1,
                fill: false,
                borderWidth: 2,
                data: [0,  70,30, 160,130,30],
                tension: 0.4
            }]
        },
        options: {
          plugins: {
              legend: {
                  display: false,
                  labels: {
                      color: 'rgb(255, 99, 132)'
                  }
              },
              scales: {
                yAxes: [{
                    ticks: {
                        fontColor: "#6D7175",
                        fontStyle: "bold",
                        beginAtZero: true,
                        maxTicksLimit: 5,
                        padding: 20
                    },
                    gridLines: {
                        drawTicks: true,
                        display: true
                    }
        
                }],
                xAxes: [{
                    
                    ticks: {
                        padding: 20,
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold"
                    }
                }]
            },
          }
      }
    });
    
  }


//canvas 2
if(document.getElementById('chartLine2') != null ){
    var ctx2 = document.getElementById('chartLine2').getContext("2d");

var myChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ["JAN", "FEB", "APR", "MAY" ,"JUL","NOV"],
        datasets: [{
            label: "Data",
            borderColor: "#FEB449",
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            fill: false,
            borderWidth: 2,
            data: [0,  70,100,140,80,40],
            tension: 0.4
        }]
    },
    options: {
      plugins: {
          legend: {
              display: false,
              labels: {
                  color: 'rgb(255, 99, 132)'
              }
          },
          scales: {
            yAxes: [{
                ticks: {
                    fontColor: "#6D7175",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20
                },
                gridLines: {
                    drawTicks: true,
                    display: true
                }
    
            }],
            xAxes: [{
                
                ticks: {
                    padding: 20,
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold"
                }
            }]
        },
      }
  }
});
}


//pie charts
// <block:setup:1>
const DATA_COUNT = 5;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

const data = {
  labels: ['Product Discovery'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [100],
      backgroundColor: ['#148092'],
      rotation:0,
      borderWidth: 0,
    }
  ]
};
// <block:config:0>
const config = {
  type: 'pie',
  data: data,
  options: {
    responsive: true,
    plugins: {

      legend: {
        display:true,
        labels: {
          usePointStyle:true,
          color: ' #148092',
          boxWidth:10,
          boxHeight:10,
          padding:10,
          font: {
            size:15
          },
          borderRadius:1 ,
        },
        position: 'left',
          
      },
      title: {
        display: true,
        text: '100%',
        position: 'center',
        color: ' #ffffff',
      },
    },
  },

};
// </block:config>
if(document.getElementById('pieCharts') != null ){
  var myChart = new Chart( document.getElementById('pieCharts'), config, data );
}


  //upsell charts
  if(document.getElementById('multiCharts') != null ){
    var speedCanvas = document.getElementById("multiCharts");
    
    var dataFirst = {
        label: "",
        data: [0,10,15, 20, 15, 5, 10,15,20,15,20,15],
        
        fill: false,
        pointHoverBorderWidth: 1,
                pointRadius: 1,
                fill: false,
                borderWidth: 2,
        borderColor: '#148092',
        tension: 0.4
      };
    
    var dataSecond = {
        label: "",
        data: [5,15,20, 25, 20, 10, 15,20,25,20,25,20],
        
        fill: false,
        pointHoverBorderWidth: 1,
                pointRadius: 1,
                fill: false,
                borderWidth: 2,
      borderColor: '#FE5C36',
      tension: 0.4
      };
      var dataThird = {
        label: "",
        data: [10,25,30, 35, 30, 20, 25,30,35,30,35,30],
        
        fill: false,
        pointHoverBorderWidth: 1,
                pointRadius: 1,
                fill: false,
                borderWidth: 2,
      borderColor: '#FEB449',
      tension: 0.4
      };
    
    var speedData = {
      labels: ["Jan","feb", "Mar","Apr","may","jun", "Jul","Aug","Sep","Oct","Nov","Dec"],
      datasets: [dataFirst, dataSecond,dataThird]
    };
    
    
    var chartOptions = {
      legend: {
          display: false,
          labels: {
              color: 'rgb(255, 99, 132)'
          }
      },
      legend: {
        display: false,
        position: 'top',
        display:false,
        
        labels: {
          boxWidth: 80,
          fontColor: 'black'
        }
      }
    };
    
    var lineChart = new Chart(speedCanvas, {
      type: 'line',
      data: speedData,
      options: {
          plugins: {
              legend: {
                  display: false,
                  labels: {
                      color: 'rgb(255, 99, 132)'
                  }
              },
              
              scales: {
                yAxes: [{
                    ticks: {
                        fontColor: "#6D7175",
                        fontStyle: "bold",
                        beginAtZero: true,
                        maxTicksLimit: 5,
                        padding: 20
                    },
                    gridLines: {
                        drawTicks: true,
                        display: true
                    }
        
                }],
                xAxes: [{
                    
                    ticks: {
                        padding: 20,
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold"
                    }
                }]
            },
          }
      }
    });
  }

//quantity button
$('.quantity-button').off('click').on('click', function () {
  
    if ($(this).hasClass('quantity-add')) {
      var addValue = parseInt($(this).parent().find('input').val()) + 1;
          $(this).parent().find('input').val(addValue).trigger('change');
      }
  
      if ($(this).hasClass('quantity-remove')) {
      var removeValue = parseInt($(this).parent().find('input').val()) - 1;
          if( removeValue == 0 ) {
        removeValue = 1;
          }
          $(this).parent().find('input').val(removeValue).trigger('change');
      }
  
  });
  
  
  $('.quantity input').off('change').on('change', function() {
    console.log($(this).val());
  });

  //date picker
  if(document.getElementById('reportrange') != null ){    
    var start = moment().subtract(29, 'days');
    var end = moment();
  
    function cb(start, end) {
        $('#reportrange span').html(start.format('MMMM D') + ' - ' + end.format('MMMM D'));
    }
  
    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
           'Today': [moment(), moment()],
           'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
           'This Month': [moment().startOf('month'), moment().endOf('month')],
           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);
  
    cb(start, end);

  }  



  

//upload demo
  function readFile(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
   
      reader.onload = function(e) {
        var htmlPreview =
          '<img src="' + e.target.result + '" />' ;
        var wrapperZone = $(input).parent();
        var previewZone = $(input).parent().parent().find('.preview-zone');
        var boxZone = $(input).parent().parent().find('.preview-zone').find('.box').find('.box-body');
   
        wrapperZone.removeClass('dragover');
        previewZone.removeClass('hidden');
        boxZone.empty();
        boxZone.append(htmlPreview);
      };
   
      reader.readAsDataURL(input.files[0]);
    }
  }
   
  function reset(e) {
    e.wrap('<form>').closest('form').get(0).reset();
    e.unwrap();
  }
   
  $(".dropzone").change(function() {
    readFile(this);
  });
   
  $('.dropzone-wrapper').on('dragover', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).addClass('dragover');
  });
   
  $('.dropzone-wrapper').on('dragleave', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).removeClass('dragover');
  });
   
  $('.remove-preview').on('click', function() {
    var boxZone = $(this).parents('.preview-zone').find('.box-body');
    var previewZone = $(this).parents('.preview-zone');
    var dropzone = $(this).parents('.form-group').find('.dropzone');
    boxZone.empty();
    previewZone.addClass('hidden');
    reset(dropzone);
  });
  
  
  //currency type selector
  if(document.getElementById('options') != null ){

      $('#options').flagStrap({
            countries: {
                "AU": "Australia ($)",
                "CA": "Canada ($)",
                "GB": "United Kingdom (£)",
                "US": "United States ($)",
            },
            buttonSize: "btn-sm",
            buttonType: "btn-info",
            labelMargin: "10px",
            scrollable: false,
            scrollableHeight: "350px"
        });
  }

  $('#showCartSwitchType').click(function() {
    if ($("#showCartSwitchType").is(":checked") == true) {
        $('#navidium-amount-setting').removeClass('active');
        $('#navidium-perc-setting').addClass('active');
    } else {
      $('#navidium-amount-setting').addClass('active');
      $('#navidium-perc-setting').removeClass('active');
    }
});



//profile pic upload
var readURL = function(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          $('.profile-pic').attr('src', e.target.result);
      }

      reader.readAsDataURL(input.files[0]);
  }
}


$(".file-upload").on('change', function(){
  readURL(this);
});

$(".upload-button").on('click', function() {
 $(".file-upload").click();
});



$(".fraud-protection-level-cols .z1").click(function(){
  $(this).addClass("st1");
  $('.fraud-protection-level-cols .z2').removeClass("st2");
  $('.fraud-protection-level-cols .z3').removeClass("st3");
  $('.fraud-protection-level-cols .z4').removeClass("st4");
  $('.fraud-protection-level-cols .z5').removeClass("st5");
  $('.fraud-protection-level-cols .z6').removeClass("st6");
  $('.fraud-protection-level-cols .z7').removeClass("st7");
  $('.fraud-protection-level-cols .z8').removeClass("st8");
  $('.fraud-protection-level-cols .z9').removeClass("st9");
  $('.fraud-protection-level-cols .z10').removeClass("st10");
});

$(".fraud-protection-level-cols .z2").click(function(){
  $('.fraud-protection-level-cols .z1').addClass("st1");
  $(this).addClass("st2");
  $('.fraud-protection-level-cols .z3').removeClass("st3");
  $('.fraud-protection-level-cols .z4').removeClass("st4");
  $('.fraud-protection-level-cols .z5').removeClass("st5");
  $('.fraud-protection-level-cols .z6').removeClass("st6");
  $('.fraud-protection-level-cols .z7').removeClass("st7");
  $('.fraud-protection-level-cols .z8').removeClass("st8");
  $('.fraud-protection-level-cols .z9').removeClass("st9");
  $('.fraud-protection-level-cols .z10').removeClass("st10");
});
$(".fraud-protection-level-cols .z3").click(function(){
  $('.fraud-protection-level-cols .z1').addClass("st1");
  $('.fraud-protection-level-cols .z2').addClass("st2");
  $(this).addClass("st3");
  $('.fraud-protection-level-cols .z4').removeClass("st4");
  $('.fraud-protection-level-cols .z5').removeClass("st5");
  $('.fraud-protection-level-cols .z6').removeClass("st6");
  $('.fraud-protection-level-cols .z7').removeClass("st7");
  $('.fraud-protection-level-cols .z8').removeClass("st8");
  $('.fraud-protection-level-cols .z9').removeClass("st9");
  $('.fraud-protection-level-cols .z10').removeClass("st10");
});
$(".fraud-protection-level-cols .z4").click(function(){
  $('.fraud-protection-level-cols .z1').addClass("st1");
  $('.fraud-protection-level-cols .z2').addClass("st2");
  $('.fraud-protection-level-cols .z3').addClass("st3");
  $(this).addClass("st4");
  $('.fraud-protection-level-cols .z5').removeClass("st5");
  $('.fraud-protection-level-cols .z6').removeClass("st6");
  $('.fraud-protection-level-cols .z7').removeClass("st7");
  $('.fraud-protection-level-cols .z8').removeClass("st8");
  $('.fraud-protection-level-cols .z9').removeClass("st9");
  $('.fraud-protection-level-cols .z10').removeClass("st10");
});

$(".fraud-protection-level-cols .z5").click(function(){
  $('.fraud-protection-level-cols .z1').addClass("st1");
  $('.fraud-protection-level-cols .z2').addClass("st2");
  $('.fraud-protection-level-cols .z3').addClass("st3");
  $('.fraud-protection-level-cols .z4').addClass("st4");
  $(this).addClass("st5");
  $('.fraud-protection-level-cols .z6').removeClass("st6");
  $('.fraud-protection-level-cols .z7').removeClass("st7");
  $('.fraud-protection-level-cols .z8').removeClass("st8");
  $('.fraud-protection-level-cols .z9').removeClass("st9");
  $('.fraud-protection-level-cols .z10').removeClass("st10");
});
$(".fraud-protection-level-cols .z6").click(function(){
  $('.fraud-protection-level-cols .z1').addClass("st1");
  $('.fraud-protection-level-cols .z2').addClass("st2");
  $('.fraud-protection-level-cols .z3').addClass("st3");
  $('.fraud-protection-level-cols .z4').addClass("st4");
  $('.fraud-protection-level-cols .z5').addClass("st5");
  $(this).addClass("st6");
  $('.fraud-protection-level-cols .z7').removeClass("st7");
  $('.fraud-protection-level-cols .z8').removeClass("st8");
  $('.fraud-protection-level-cols .z9').removeClass("st9");
  $('.fraud-protection-level-cols .z10').removeClass("st10");
});
$(".fraud-protection-level-cols .z7").click(function(){
  $('.fraud-protection-level-cols .z1').addClass("st1");
  $('.fraud-protection-level-cols .z2').addClass("st2");
  $('.fraud-protection-level-cols .z3').addClass("st3");
  $('.fraud-protection-level-cols .z4').addClass("st4");
  $('.fraud-protection-level-cols .z5').addClass("st5");
  $('.fraud-protection-level-cols .z6').addClass("st6");
  $(this).addClass("st7");
  $('.fraud-protection-level-cols .z8').removeClass("st8");
  $('.fraud-protection-level-cols .z9').removeClass("st9");
  $('.fraud-protection-level-cols .z10').removeClass("st10");
});
$(".fraud-protection-level-cols .z8").click(function(){
  $('.fraud-protection-level-cols .z1').addClass("st1");
  $('.fraud-protection-level-cols .z2').addClass("st2");
  $('.fraud-protection-level-cols .z3').addClass("st3");
  $('.fraud-protection-level-cols .z4').addClass("st4");
  $('.fraud-protection-level-cols .z5').addClass("st5");
  $('.fraud-protection-level-cols .z6').addClass("st6");
  $('.fraud-protection-level-cols .z7').addClass("st7");
  $(this).addClass("st8");
  $('.fraud-protection-level-cols .z9').removeClass("st9");
  $('.fraud-protection-level-cols .z10').removeClass("st10");
});

$(".fraud-protection-level-cols .z9").click(function(){
  $('.fraud-protection-level-cols .z1').addClass("st1");
  $('.fraud-protection-level-cols .z2').addClass("st2");
  $('.fraud-protection-level-cols .z3').addClass("st3");
  $('.fraud-protection-level-cols .z4').addClass("st4");
  $('.fraud-protection-level-cols .z5').addClass("st5");
  $('.fraud-protection-level-cols .z6').addClass("st6");
  $('.fraud-protection-level-cols .z7').addClass("st7");
  $('.fraud-protection-level-cols .z8').addClass("st8");
  $(this).addClass("st9");
  $('.fraud-protection-level-cols .z10').removeClass("st10");
});
$(".fraud-protection-level-cols .z10").click(function(){
  $('.fraud-protection-level-cols .z1').addClass("st1");
  $('.fraud-protection-level-cols .z2').addClass("st2");
  $('.fraud-protection-level-cols .z3').addClass("st3");
  $('.fraud-protection-level-cols .z4').addClass("st4");
  $('.fraud-protection-level-cols .z5').addClass("st5");
  $('.fraud-protection-level-cols .z6').addClass("st6");
  $('.fraud-protection-level-cols .z7').addClass("st7");
  $('.fraud-protection-level-cols .z8').addClass("st8");
  $('.fraud-protection-level-cols .z9').addClass("st9");
  $(this).addClass("st10");
});


$(".fraud-protection-level-cols .z11").click(function(){
  $(this).addClass("st1");
  $('.fraud-protection-level-cols .z22').removeClass("st2");
  $('.fraud-protection-level-cols .z33').removeClass("st3");
  $('.fraud-protection-level-cols .z44').removeClass("st4");
  $('.fraud-protection-level-cols .z55').removeClass("st5");
  $('.fraud-protection-level-cols .z66').removeClass("st6");
  $('.fraud-protection-level-cols .z77').removeClass("st7");
  $('.fraud-protection-level-cols .z88').removeClass("st8");
  $('.fraud-protection-level-cols .z99').removeClass("st9");
  $('.fraud-protection-level-cols .z110').removeClass("st10");
});

$(".fraud-protection-level-cols .z22").click(function(){
  $('.fraud-protection-level-cols .z11').addClass("st1");
  $(this).addClass("st2");
  $('.fraud-protection-level-cols .z33').removeClass("st3");
  $('.fraud-protection-level-cols .z44').removeClass("st4");
  $('.fraud-protection-level-cols .z55').removeClass("st5");
  $('.fraud-protection-level-cols .z66').removeClass("st6");
  $('.fraud-protection-level-cols .z77').removeClass("st7");
  $('.fraud-protection-level-cols .z88').removeClass("st8");
  $('.fraud-protection-level-cols .z99').removeClass("st9");
  $('.fraud-protection-level-cols .z110').removeClass("st10");
});
$(".fraud-protection-level-cols .z33").click(function(){
  $('.fraud-protection-level-cols .z11').addClass("st1");
  $('.fraud-protection-level-cols .z22').addClass("st2");
  $(this).addClass("st3");
  $('.fraud-protection-level-cols .z44').removeClass("st4");
  $('.fraud-protection-level-cols .z55').removeClass("st5");
  $('.fraud-protection-level-cols .z66').removeClass("st6");
  $('.fraud-protection-level-cols .z77').removeClass("st7");
  $('.fraud-protection-level-cols .z88').removeClass("st8");
  $('.fraud-protection-level-cols .z99').removeClass("st9");
  $('.fraud-protection-level-cols .z110').removeClass("st10");
});
$(".fraud-protection-level-cols .z44").click(function(){
  $('.fraud-protection-level-cols .z11').addClass("st1");
  $('.fraud-protection-level-cols .z22').addClass("st2");
  $('.fraud-protection-level-cols .z33').addClass("st3");
  $(this).addClass("st4");
  $('.fraud-protection-level-cols .z55').removeClass("st5");
  $('.fraud-protection-level-cols .z66').removeClass("st6");
  $('.fraud-protection-level-cols .z77').removeClass("st7");
  $('.fraud-protection-level-cols .z88').removeClass("st8");
  $('.fraud-protection-level-cols .z99').removeClass("st9");
  $('.fraud-protection-level-cols .z110').removeClass("st10");
});

$(".fraud-protection-level-cols .z55").click(function(){
  $('.fraud-protection-level-cols .z11').addClass("st1");
  $('.fraud-protection-level-cols .z22').addClass("st2");
  $('.fraud-protection-level-cols .z33').addClass("st3");
  $('.fraud-protection-level-cols .z44').addClass("st4");
  $(this).addClass("st5");
  $('.fraud-protection-level-cols .z66').removeClass("st6");
  $('.fraud-protection-level-cols .z77').removeClass("st7");
  $('.fraud-protection-level-cols .z88').removeClass("st8");
  $('.fraud-protection-level-cols .z99').removeClass("st9");
  $('.fraud-protection-level-cols .z110').removeClass("st10");
});
$(".fraud-protection-level-cols .z66").click(function(){
  $('.fraud-protection-level-cols .z11').addClass("st1");
  $('.fraud-protection-level-cols .z22').addClass("st2");
  $('.fraud-protection-level-cols .z33').addClass("st3");
  $('.fraud-protection-level-cols .z44').addClass("st4");
  $('.fraud-protection-level-cols .z55').addClass("st5");
  $(this).addClass("st6");
  $('.fraud-protection-level-cols .z77').removeClass("st7");
  $('.fraud-protection-level-cols .z88').removeClass("st8");
  $('.fraud-protection-level-cols .z99').removeClass("st9");
  $('.fraud-protection-level-cols .z110').removeClass("st10");
});
$(".fraud-protection-level-cols .z77").click(function(){
  $('.fraud-protection-level-cols .z11').addClass("st1");
  $('.fraud-protection-level-cols .z22').addClass("st2");
  $('.fraud-protection-level-cols .z33').addClass("st3");
  $('.fraud-protection-level-cols .z44').addClass("st4");
  $('.fraud-protection-level-cols .z55').addClass("st5");
  $('.fraud-protection-level-cols .z66').addClass("st6");
  $(this).addClass("st7");
  $('.fraud-protection-level-cols .z88').removeClass("st8");
  $('.fraud-protection-level-cols .z99').removeClass("st9");
  $('.fraud-protection-level-cols .z110').removeClass("st10");
});
$(".fraud-protection-level-cols .z88").click(function(){
  $('.fraud-protection-level-cols .z11').addClass("st1");
  $('.fraud-protection-level-cols .z22').addClass("st2");
  $('.fraud-protection-level-cols .z33').addClass("st3");
  $('.fraud-protection-level-cols .z44').addClass("st4");
  $('.fraud-protection-level-cols .z55').addClass("st5");
  $('.fraud-protection-level-cols .z66').addClass("st6");
  $('.fraud-protection-level-cols .z77').addClass("st7");
  $(this).addClass("st8");
  $('.fraud-protection-level-cols .z99').removeClass("st9");
  $('.fraud-protection-level-cols .z110').removeClass("st10");
});

$(".fraud-protection-level-cols .z99").click(function(){
  $('.fraud-protection-level-cols .z11').addClass("st1");
  $('.fraud-protection-level-cols .z22').addClass("st2");
  $('.fraud-protection-level-cols .z33').addClass("st3");
  $('.fraud-protection-level-cols .z44').addClass("st4");
  $('.fraud-protection-level-cols .z55').addClass("st5");
  $('.fraud-protection-level-cols .z66').addClass("st6");
  $('.fraud-protection-level-cols .z77').addClass("st7");
  $('.fraud-protection-level-cols .z88').addClass("st8");
  $(this).addClass("st9");
  $('.fraud-protection-level-cols .z110').removeClass("st10");
});
$(".fraud-protection-level-cols .z110").click(function(){
  $('.fraud-protection-level-cols .z11').addClass("st1");
  $('.fraud-protection-level-cols .z22').addClass("st2");
  $('.fraud-protection-level-cols .z33').addClass("st3");
  $('.fraud-protection-level-cols .z44').addClass("st4");
  $('.fraud-protection-level-cols .z55').addClass("st5");
  $('.fraud-protection-level-cols .z66').addClass("st6");
  $('.fraud-protection-level-cols .z77').addClass("st7");
  $('.fraud-protection-level-cols .z88').addClass("st8");
  $('.fraud-protection-level-cols .z99').addClass("st9");
  $(this).addClass("st10");
});


$(".fraud-protection-level-cols .ac1").click(function(){
  $(this).addClass("st1");
  $('.fraud-protection-level-cols .ac2').removeClass("st2");
  $('.fraud-protection-level-cols .ac3').removeClass("st3");
  $('.fraud-protection-level-cols .ac4').removeClass("st4");
  $('.fraud-protection-level-cols .ac5').removeClass("st5");
  $('.fraud-protection-level-cols .ac6').removeClass("st6");
  $('.fraud-protection-level-cols .ac7').removeClass("st7");
  $('.fraud-protection-level-cols .ac8').removeClass("st8");
  $('.fraud-protection-level-cols .ac9').removeClass("st9");
  $('.fraud-protection-level-cols .ac10').removeClass("st10");
});

$(".fraud-protection-level-cols .ac2").click(function(){
  $('.fraud-protection-level-cols .ac1').addClass("st1");
  $(this).addClass("st2");
  $('.fraud-protection-level-cols .ac3').removeClass("st3");
  $('.fraud-protection-level-cols .ac4').removeClass("st4");
  $('.fraud-protection-level-cols .ac5').removeClass("st5");
  $('.fraud-protection-level-cols .ac6').removeClass("st6");
  $('.fraud-protection-level-cols .ac7').removeClass("st7");
  $('.fraud-protection-level-cols .ac8').removeClass("st8");
  $('.fraud-protection-level-cols .ac9').removeClass("st9");
  $('.fraud-protection-level-cols .ac10').removeClass("st10");
});
$(".fraud-protection-level-cols .ac3").click(function(){
  $('.fraud-protection-level-cols .ac1').addClass("st1");
  $('.fraud-protection-level-cols .ac2').addClass("st2");
  $(this).addClass("st3");
  $('.fraud-protection-level-cols .ac4').removeClass("st4");
  $('.fraud-protection-level-cols .ac5').removeClass("st5");
  $('.fraud-protection-level-cols .ac6').removeClass("st6");
  $('.fraud-protection-level-cols .ac7').removeClass("st7");
  $('.fraud-protection-level-cols .ac8').removeClass("st8");
  $('.fraud-protection-level-cols .ac9').removeClass("st9");
  $('.fraud-protection-level-cols .ac10').removeClass("st10");
});
$(".fraud-protection-level-cols .ac4").click(function(){
  $('.fraud-protection-level-cols .ac1').addClass("st1");
  $('.fraud-protection-level-cols .ac2').addClass("st2");
  $('.fraud-protection-level-cols .ac3').addClass("st3");
  $(this).addClass("st4");
  $('.fraud-protection-level-cols .ac5').removeClass("st5");
  $('.fraud-protection-level-cols .ac6').removeClass("st6");
  $('.fraud-protection-level-cols .ac7').removeClass("st7");
  $('.fraud-protection-level-cols .ac8').removeClass("st8");
  $('.fraud-protection-level-cols .ac9').removeClass("st9");
  $('.fraud-protection-level-cols .ac10').removeClass("st10");
});

$(".fraud-protection-level-cols .ac5").click(function(){
  $('.fraud-protection-level-cols .ac1').addClass("st1");
  $('.fraud-protection-level-cols .ac2').addClass("st2");
  $('.fraud-protection-level-cols .ac3').addClass("st3");
  $('.fraud-protection-level-cols .ac4').addClass("st4");
  $(this).addClass("st5");
  $('.fraud-protection-level-cols .ac6').removeClass("st6");
  $('.fraud-protection-level-cols .ac7').removeClass("st7");
  $('.fraud-protection-level-cols .ac8').removeClass("st8");
  $('.fraud-protection-level-cols .ac9').removeClass("st9");
  $('.fraud-protection-level-cols .ac10').removeClass("st10");
});
$(".fraud-protection-level-cols .ac6").click(function(){
  $('.fraud-protection-level-cols .ac1').addClass("st1");
  $('.fraud-protection-level-cols .ac2').addClass("st2");
  $('.fraud-protection-level-cols .ac3').addClass("st3");
  $('.fraud-protection-level-cols .ac4').addClass("st4");
  $('.fraud-protection-level-cols .ac5').addClass("st5");
  $(this).addClass("st6");
  $('.fraud-protection-level-cols .ac7').removeClass("st7");
  $('.fraud-protection-level-cols .ac8').removeClass("st8");
  $('.fraud-protection-level-cols .ac9').removeClass("st9");
  $('.fraud-protection-level-cols .ac10').removeClass("st10");
});
$(".fraud-protection-level-cols .ac7").click(function(){
  $('.fraud-protection-level-cols .ac1').addClass("st1");
  $('.fraud-protection-level-cols .ac2').addClass("st2");
  $('.fraud-protection-level-cols .ac3').addClass("st3");
  $('.fraud-protection-level-cols .ac4').addClass("st4");
  $('.fraud-protection-level-cols .ac5').addClass("st5");
  $('.fraud-protection-level-cols .ac6').addClass("st6");
  $(this).addClass("st7");
  $('.fraud-protection-level-cols .ac8').removeClass("st8");
  $('.fraud-protection-level-cols .ac9').removeClass("st9");
  $('.fraud-protection-level-cols .ac10').removeClass("st10");
});
$(".fraud-protection-level-cols .ac8").click(function(){
  $('.fraud-protection-level-cols .ac1').addClass("st1");
  $('.fraud-protection-level-cols .ac2').addClass("st2");
  $('.fraud-protection-level-cols .ac3').addClass("st3");
  $('.fraud-protection-level-cols .ac4').addClass("st4");
  $('.fraud-protection-level-cols .ac5').addClass("st5");
  $('.fraud-protection-level-cols .ac6').addClass("st6");
  $('.fraud-protection-level-cols .ac7').addClass("st7");
  $(this).addClass("st8");
  $('.fraud-protection-level-cols .ac9').removeClass("st9");
  $('.fraud-protection-level-cols .ac10').removeClass("st10");
});

$(".fraud-protection-level-cols .ac9").click(function(){
  $('.fraud-protection-level-cols .ac1').addClass("st1");
  $('.fraud-protection-level-cols .ac2').addClass("st2");
  $('.fraud-protection-level-cols .ac3').addClass("st3");
  $('.fraud-protection-level-cols .ac4').addClass("st4");
  $('.fraud-protection-level-cols .ac5').addClass("st5");
  $('.fraud-protection-level-cols .ac6').addClass("st6");
  $('.fraud-protection-level-cols .ac7').addClass("st7");
  $('.fraud-protection-level-cols .ac8').addClass("st8");
  $(this).addClass("st9");
  $('.fraud-protection-level-cols .ac10').removeClass("st10");
});
$(".fraud-protection-level-cols .ac10").click(function(){
  $('.fraud-protection-level-cols .ac1').addClass("st1");
  $('.fraud-protection-level-cols .ac2').addClass("st2");
  $('.fraud-protection-level-cols .ac3').addClass("st3");
  $('.fraud-protection-level-cols .ac4').addClass("st4");
  $('.fraud-protection-level-cols .ac5').addClass("st5");
  $('.fraud-protection-level-cols .ac6').addClass("st6");
  $('.fraud-protection-level-cols .ac7').addClass("st7");
  $('.fraud-protection-level-cols .ac8').addClass("st8");
  $('.fraud-protection-level-cols .ac9').addClass("st9");
  $(this).addClass("st10");
});




});


//fraud pie chart

//pie charts
// <block:setup:1>
const DATA_COUNT = 5;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

const data = {
  labels: ['Not Blocked','Blocked'],
  datasets: [
    {
      label: 'Dataset 2',
      data: [70,30],
      backgroundColor: ['#148092','#FE5C36'],
      rotation:0,
      borderWidth: 0,
    }
  ]
};
// <block:config:0>
const config = {
  type: 'pie',
  data: data,
  options: {
    zoomOutPercentage: 30,
      aspectRatio: 1,
    responsive: true,
    plugins: {

      legend: {
        display:true,
        
        labels: {
          usePointStyle:true,
          color: '#148092',
          boxWidth:10,
          boxHeight:10,
          padding:10,
          font: {
            size:15
          },
          borderRadius:1 ,
        },
        position: 'left',
          
      },
      title: {
        display: true,
        text: '100%',
        position: 'center',
        color: ' #ffffff',
      },

    },
  },

};
// </block:config>
if(document.getElementById('pieCharts2') != null ){
  var myChart = new Chart( document.getElementById('pieCharts2'), config, data );
}


//world maps
if(document.getElementById('chartdivMap') != null ){

  // Data
  var groupData = [
    {
      "name": "Blocked country",
      "data": [
        { "id": "US","perct":"38%"},
        { "id": "CN","perct":"25%"},
        { "id": "AU", "perct":"12%"},
        { "id": "MX", "perct":"18%"},
        { "id": "UA", "perct":"11%"},
     ]
    },
  ];
  // Create root and chart
  var root = am5.Root.new("chartdivMap");
  
  // Create chart
  var chart = root.container.children.push(am5map.MapChart.new(root, {
    homeZoomLevel: 1,
    panX: false,
    panY: false,
    wheelX: "none",
    maxZoomLevel :1,
    homeGeoPoint: { longitude: 10, latitude: 52 }
  }));
  
  // Create world polygon series
  var worldSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_worldLow,
    exclude: ["AQ"]
  }));
  
  worldSeries.mapPolygons.template.setAll({
    fill: '#8F97B2'
  });
  
  worldSeries.events.on("datavalidated", () => {
    chart.goHome();
  });
  
  worldSeries.mapPolygons.template.setAll({
    tooltipText: "{name}",
    interactive: true,
    templateField: "polygonSettings"
  });
  
  // Create series for each group
  var colors = am5.ColorSet.new(root, {
    step: 2
  });
  colors.next();
  
  am5.array.each(groupData, function(group) {
    var countries = [];
    var color = colors.next();
  
    am5.array.each(group.data, function(country) {
      countries.push(country.id)
    });
  
    var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_worldLow,
      include: countries,
      name: group.name,
      fill: '#FE5C36'
    }));
  
  
    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "[bold]{name}[/]\nBlocked {perct}",
      interactive: true,
      fill: color,
      strokeWidth: 1
    });
  
    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: '#FE5C36'
    });
  
    polygonSeries.mapPolygons.template.events.on("pointerover", function(ev) {
      ev.target.series.mapPolygons.each(function(polygon) {
        polygon.states.applyAnimate("hover");
      });
    });
  
    polygonSeries.mapPolygons.template.events.on("pointerout", function(ev) {
      ev.target.series.mapPolygons.each(function(polygon) {
        polygon.states.applyAnimate("default");
      });
    });
    polygonSeries.data.setAll(group.data);
  
  });
}

