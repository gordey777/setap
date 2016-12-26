! function() {
  function e(e) {
    var a = window.scrollY || document.documentElement.scrollTop,
      o = (r.mac.getBoundingClientRect().top + a) / 4,
      t = r.mac.getBoundingClientRect().top + a,
      n = 1 / (t - o) * (a - o),
      i = r.mac_video.getBoundingClientRect();
    n >= 0 && n <= 1 ? e.progress(n) : n < 0 ? e.progress(0) : n > 1 && e.progress(1), 4 === r.mac_video.readyState && (i.top >= i.height / -2 && i.bottom <= window.innerHeight + i.height / 2 ? l || (r.mac_video.play(), l = !0) : l || (r.mac_video.play(), l = !0))
  }

  function a() {
    var e = document.querySelector("#animation-mac");
    if (e) {
      var a = new TimelineMax({
        paused: !0
      });
      return a.append(TweenMax.to(e, 2, {
        css: {
          opacity: .99,
          y: 0,
          rotationY: 0,
          scale: 1
        }
      })), a
    }
  }

  function o() {
    if (!d.lines) {
      d.lines = !0;
      var e = document.getElementById("animation-lines"),
        a = [463, 550, 656, 443, 566, 661, 520, 438, 633, 484, 677, 441, 629, 171, 551, 11, 438, 212, 532, 356, 594, 371],
        o = e.querySelectorAll("[data-animations-line]");
      o.length && TweenMax.to(o, 2.2, {
        y: function(e) {
          return a[e]
        },
        ease: Power2.easeOut
      })
    }
  }

  function t() {
    if (!d.upgrade) {
      d.upgrade = !0;
      var e = document.getElementById("animation-upgrade"),
        a = e.querySelectorAll("[data-slider='upgrade-slide']"),
        o = e.querySelectorAll("[data-slider='upgrade-icon']"),
        t = e.querySelectorAll("[data-slider='upgrade-icon'] > div"),
        n = e.querySelectorAll("[data-slider='upgrade-click']"),
        i = new TimelineMax({
          paused: !0
        });
      return [].forEach.call(n, function(e, a) {
        e.addEventListener("click", function() {
          i.seek("start-" + a)
        })
      }), [].forEach.call(a, function(e, n) {
        var l = "start-" + n,
          d = l + "+=1";
        i.add(l).to(e, 1, {
          display: "block",
          opacity: 1,
          ease: Expo.easeOut,
          scale: 1
        }, l).from(o[n], 1, {
          scale: 1,
          rotation: 0
        }, l).to(o[n], 1, {
          scale: 2,
          rotation: 45,
          backgroundColor: "rgba(174, 131, 255, 1)",
          ease: Expo.easeOut
        }, l).to(t[n], 1, {
          opacity: 0,
          width: 0,
          height: 0,
          ease: Expo.easeOut
        }, l), n != a.length - 1 && i.to(e, 1, {
          display: "none",
          opacity: 0,
          ease: Expo.easeIn,
          delay: .75,
          scale: .8
        }, d).to(o[n], 1, {
          scale: 1,
          rotation: 90,
          delay: .75,
          backgroundColor: "rgba(91, 117, 242, 1)",
          ease: Expo.easeIn
        }, d).to(t[n], 1, {
          opacity: 1,
          width: "100%",
          height: "100%",
          delay: .75,
          ease: Expo.easeIn
        }, d)
      }), i
    }
  }

  function n() {
    if (!d.billboard) {
      d.billboard = !0;
      var e = document.querySelector("#animation-billboard"),
        a = e.querySelector('[data-animation-shadow="2"]'),
        o = e.querySelector('[data-animation-shadow="5"]'),
        t = new TimelineMax({
          repeat: -1
        });
      return t.pause(), t.to(a, 1, {
        display: "block",
        delay: .7
      }).to(a, 0, {
        display: "none",
        delay: .05
      }).to(a, 0, {
        display: "block",
        delay: .05
      }).to(a, 0, {
        display: "none",
        delay: .05
      }).to(a, 0, {
        display: "block",
        delay: .05
      }).to(a, 1.5, {
        display: "none",
        delay: .05
      }).to(a, 0, {
        display: "block",
        delay: .05
      }).to(a, 0, {
        display: "none",
        delay: .05
      }).to(a, 0, {
        display: "none",
        delay: .05
      }).to(o, 2, {
        display: "block",
        delay: .1
      }, 1.65).to(o, 0, {
        display: "none",
        delay: .05
      }).to(o, 0, {
        display: "block",
        delay: .1
      }).to(o, 1, {
        display: "none",
        delay: .05
      }).to(o, 0, {
        display: "block",
        delay: .1
      }).to(o, 0, {
        display: "none",
        delay: .05
      }).to(o, 0, {
        display: "block",
        delay: 2.05
      }).to(o, 0, {
        display: "none",
        delay: .05
      }), t
    }
  }

  function i(e) {
    var a = e.getBoundingClientRect().top,
      o = e.offsetHeight;
    return a >= 0 && a + o / 2 <= window.innerHeight
  }
  var l = !1,
    d = {
      lines: !1,
      upgrade: !1,
      billboard: !1,
      coffee: !1
    },
    r = {
      mac: document.querySelector("#animation-mac-image"),
      mac_video: document.querySelector("#animation-mac-video"),
      lines: document.querySelector("#animation-lines"),
      upgrade: document.querySelector("#animation-upgrade"),
      billboard: document.querySelector('#animation-billboard [data-animation-shadow="2"]'),
      coffee: document.querySelector("#animation-coffee")
    };
  document.addEventListener("DOMContentLoaded", function() {
    var l = t(),
      d = n(),
      c = a();
    window.addEventListener("scroll", function() {
      c && r.mac && e(c), i(r.lines) && o(), i(r.upgrade) && l.play(), i(r.billboard) ? d.play() : d.pause()
    }), new Modal("modal-video", {
      isFullScreen: !0,
      videoUrl: "https://www.youtube.com/embed/LJBZ8dwTJoM?autoplay=1&rel=0&controls=0&showinfo=0",
      onOpen: function() {
        dataLayer.push({
          event: "virtualPageView",
          page: {
            title: "Watch Setapp Product Video",
            url: "/watch-video"
          }
        })
      }
    })
  })
}();
