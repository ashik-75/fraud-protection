  jQuery(document).ready(function() {
                if (jQuery("video").length > 0) {
                  jQuery("video").wrap("<div class='video-parent-class'></div>");
                  /*Add image just before to vedio  */
                    jQuery("<img class='pause-play-img' src='" +  "img/player.png' >").insertBefore("video");
    jQuery("video").each(function(index) {
        /*vedio parent div height width code*/
                        var vedio_width = jQuery(this).width();
                        var vedio_height = jQuery(this).height();
                        jQuery(".video-parent-class").css({
                            // "width": vedio_width + "px",
                            // "height": vedio_height + "px"
                        });

                        /*Pause Play image, middle width in vedio code*/
                        var half_width_vedio = vedio_width / 2;
                        var middle_object_width = half_width_vedio - 32;
                        jQuery(".pause-play-img").css({
                        });

                        /*Pause Play image middle height in vedio code*/
                        var half_height_vedio = vedio_height / 2;
                        var middle_object_heigh = half_height_vedio - 32;
                        jQuery(".pause-play-img").css({
                            
                        });

                        /*Pause play and image src change code*/
                        jQuery(this).on("click", function() {
                            if (this.paused) {
                                this.play();
                                jQuery(this).prev().attr("src",  "img/player.png");
                            } else {
                                this.pause();
                                jQuery(this).prev().attr("src",  "img/player.png");
                            }


                        });


                        /*pause play image click vedio on off functionlity code*/
                        jQuery(this).prev().on("click", function() {
                            var myVideo = jQuery(this).next()[0];
                            if (myVideo.paused) {

                                myVideo.play();
                                jQuery(this).attr("src",  "img/player.png");
                            } else {

                                myVideo.pause();
                                jQuery(this).attr("src",  "img/player.png");
                            }

                        });
                        /*Floating js for HTML Video Start*/
        var windows = jQuery(window);
                        var videoWrap = jQuery(this).parent();
                        var video = jQuery(this);
                        var videoHeight = video.outerHeight();
                        var videoElement = video.get(0);
                        windows.on('scroll', function() {
                            var windowScrollTop = windows.scrollTop();
                            var videoBottom = videoHeight + videoWrap.offset().top;
                            //alert(videoBottom);
                            
                                if ((windowScrollTop > videoBottom)) {
                                  if (!videoElement.paused) {
                                      videoWrap.height(videoHeight);
                                      video.addClass('stuck');
                                      if (video.hasClass('stuck')) {
                                        video.attr("controls","1");
                                      }
                                      video.prev().attr("src",   "img/player.png");
                          jQuery(".scrolldown").css({"display": "none"});          
                                  }
                                  else {
                                    //   videoWrap.height('auto');
                                      video.removeClass('stuck');
                                      video.removeAttr('controls');
                                      if (videoElement.paused) {
                                        video.prev().attr("src",   "img/player.png");
                                      }
                                  }

                                } 
                                else {
                                    // videoWrap.height('auto');
                                    video.removeClass('stuck');
                                    video.removeAttr('controls');
                                }
                            
                        });
                         /*Floating js for HTML Video End*/
    });
    /*After end vedio change image*/
//                     var video = document.getElementsByTagName('video')[0];

//                     video.onended = function(e) {
//                         jQuery(".pause-play-img").attr("src", plugin_url + "/img/img01.png");
//                     };
  }
  });