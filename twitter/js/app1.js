
if (!!window.EventSource) {

// var twitterJSON = "http://emojitrack-gostreamer.herokuapp.com/subscribe/details/1F602";
var twitterJSON ="http://emojitrack-gostreamer.herokuapp.com/subscribe/eps";
var countnow,countori,thr,tm,ts;
countnow=10000;

countori=0;

// var source = new EventSource('/dates');


// if (!!window.EventSource) {
  var source = new EventSource(twitterJSON);
  // source.onmessage = function(event) {
  // var data = event.data;
  // var origin = event.origin;
  // var lastEventId = event.lastEventId;


  source.addEventListener("message", function(event) {
  // source.addEventListener("stream.tweet_updates.1F602", function(event) {
  var data = event.data;
  var origin = event.origin;
  var lastEventId = event.lastEventId;

    countnow++;
    ts=countnow*2;
    tm=ts/60;
    thr=tm/60*5;
    // console.log(countnow);
$(".minute").css("transform","rotate("+tm+"deg)");
$(".second").css("transform","rotate("+ts+"deg)");
$(".hour").css("transform","rotate("+thr+"deg)");
$("#thr").html(Math.floor(thr/30));
$("#tm").html(Math.floor((tm/6)%60));
$("#ts").html(Math.floor((ts/360)*60)%60);
var key;

	// $.parseJSON(data)
//       value = scores[key];
//       _results.push(incrementScore(key, value));
//     }
var dataarry= JSON.parse(data);
// dataarry=event.data[9];
 console.log(dataarry);


  //   var container_selector, new_container, score_selector, _ref;
  //   if (incrby == null) {
  //     incrby = 1;
  //   }
  //   if (this.use_cached_selectors) {
  //     _ref = get_cached_selectors(id), score_selector = _ref[0], container_selector = _ref[1];
  //   } else {
  //     score_selector = document.getElementById("score-" + id);
  //     container_selector = document.getElementById(id);
  //   }
  //   score_selector.innerHTML = (this.score_cache[id] += incrby);
  //   if (css_animation) {
  //     if (replace_technique) {
  //       new_container = container_selector.cloneNode(true);
  //       new_container.classList.add('highlight_score_update_anim');
  //       container_selector.parentNode.replaceChild(new_container, container_selector);
  //       if (use_cached_selectors) {
  //         return selector_cache[id] = [new_container.childNodes[3], new_container];
  //       }
  //     } else if (reflow_technique) {
  //       container_selector.classList.remove('highlight_score_update_anim');
  //       container_selector.focus();
  //       return container_selector.classList.add('highlight_score_update_anim');
  //     } else if (timeout_technique) {
  //       container_selector.classList.add('highlight_score_update_trans');
  //       return setTimeout(function() {
  //         return container_selector.classList.remove('highlight_score_update_trans');
  //       });
  //     }
  //   }


  // handle message
}, false);
  // handle message
// };
// }
// var key, scores, value, _results;
//     scores = $.parseJSON(data);
//     _results = [];
//     for (key in scores) {
//       value = scores[key];
//       _results.push(incrementScore(key, value));
//     }
//     return _results;
//   };


// function opeen(){


// source.addEventListener("open", function(event) {
// // console.log(source);
// console.log(event.onmessage);
// source.onmessage = function(event) {
// var datta = event.stream.tweet_updates;
//   var data = event.data;
//   var origin = event.origin;
//   var lastEventId = event.lastEventId;
//   // handle message
// function ad(event){
// var datta = event.stream.tweet_updates;
//   var data = event.data;
//   var origin = event.origin;
//   var lastEventId = event.lastEventId;
//   // handle message
//   console.log(event);
// };
//   console.log(data);
// };
// console.log(event.event-stream);

// this.startRefreshTimer = function() {
//     return this.refreshTimer = setInterval(refreshUIFromServer, 3000);
//   };
// source.addEventListener("stream.tweet_updates." + id, processDetailTweetUpdate, false)

// console.log(1);
// setTimeout(opeen, 1000);
// }, false);}

// setInterval("opeen()",50);

// this.source.onmessage = function (event) {
//   var data = event.data;
//   // console.log(2);
//   // handle message
// };
// source.addEventListener("message", function(event) {
//   var data = event.data;
//   var origin = event.origin;
//   var lastEventId = event.lastEventId;
//   console.log(2);
//   // handle message
// }, 3000

 // (function worker() {
 //        $.ajax({
 //          url: twitterJSON,
 //          success: function(data) {

 //    // this.startDetailStreaming = function(id) {
 //  //   console.log("Subscribing to detail stream for ");
 //  //   // this.detail_id = id;
 //  // var detail_source = new EventSource("" + STREAMER + "/subscribe/details/" + id);
 //  console.log(source.addEventListener("stream.tweet_updates." + id, processDetailTweetUpdate, false));
 //  // // };

 //            // console.log(data);
 //    //    var source = new EventSource(twitterJSON);
      
 //    //    // var source = new EventSource("http://emojitrack-gostreamer.herokuapp.com/subscribe/details/1F602", { withCredentials: true });
 //    //     // console.log(source.readyState);// var onmessage = function(event) {
 //    //     // return incrementScore(event.data);}
         
 //    //      source.onmessage=function(event)
 //    // {
 //    //    $("#clock").append(incrementScore(event.data))
 //    // };


 //  //   this.startDetailStreaming = function(id) {
 //  //   console.log("Subscribing to detail stream for " + id);
 //  //   this.detail_id = id;
 //  //   this.detail_source = new EventSource(twitterJSON);
 //  //   console.log( this.detail_source.addEventListener("stream.tweet_updates." + id, processDetailTweetUpdate, false));
 //  //   // $("#clock").append(incrementScore(event.data))
 //  // };
 //            //if results are search results
 //            // if ('statuses' in data)
 //            //   data = data.statuses
 //            //  console.log(data);
 //            // // data.reverse();
            
 //            // l = data.recent_tweets.length;
            
 //            // for( var i=0;i<l;i++){
 //            //   if(data.recent_tweets[i].id == lastid){
 //            //    l=i;
 //            //    break;
 //            //   }
 //            // }


 //            // countori=countnow;
 //            // countnow=l;
 //            // tweetsLoop:
 //            //   for (i = 0; i < l; i++) {
 //            //     //console.log(i);

 //            //     var tweet = data[i];

 //            //     //console.log("This Tweet: "+tweet.id_str);

 //            //     //Tweet is new!
 //            //     if (loadedTweets.indexOf(tweet.id_str) == -1) {
 //            //       loadedTweets.push(tweet.id_str);
 //            //       var html = liveTweets.toHTML(tweet, i);
 //            //       $html = $(html);

 //            //       if (html !== false) {
 //            //         $list.prepend($html)
 //            //           .masonry('prepended', $html);
 //            //       }

 //            //     } else { //Tweet is old, Skip!
 //            //       //continue tweetsLoop;
 //            //     }

 //            //   }
 //            // for( var i=0;i<countnow;i++){
 //            //   $("#clock").append("I")
 //            // }
 //         // lastid=data.recent_tweets[0].id;
            
 //          },
 //          complete: function() {
 //            // Schedule the next request when the current one's complete
 //            setTimeout(worker, 3000);
 //          }
 //        });
 //      })(); // incrementScore = function(id, incrby) {
 //    var container_selector, new_container, score_selector, _ref;
 //    if (incrby == null) {
 //      incrby = 1;
 //    }
 //    if (this.use_cached_selectors) {
 //      _ref = get_cached_selectors(id), score_selector = _ref[0], container_selector = _ref[1];
 //    } else {
 //      score_selector = document.getElementById("score-" + id);
 //      container_selector = document.getElementById(id);
 //    }
 //    score_selector.innerHTML = (this.score_cache[id] += incrby);
 //    if (css_animation) {
 //      if (replace_technique) {
 //        new_container = container_selector.cloneNode(true);
 //        new_container.classList.add('highlight_score_update_anim');
 //        container_selector.parentNode.replaceChild(new_container, container_selector);
 //        if (use_cached_selectors) {
 //          return selector_cache[id] = [new_container.childNodes[3], new_container];
 //        }
 //      } else if (reflow_technique) {
 //        container_selector.classList.remove('highlight_score_update_anim');
 //        container_selector.focus();
 //        return container_selector.classList.add('highlight_score_update_anim');
 //      } else if (timeout_technique) {
 //        container_selector.classList.add('highlight_score_update_trans');
 //        return setTimeout(function() {
 //          return container_selector.classList.remove('highlight_score_update_trans');
 //        });
 //      }
 //    }
 //  };

}