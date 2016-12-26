document.addEventListener("DOMContentLoaded", function() {
  function e(e) {
    var t = new FormData;
    t.append("email", document.querySelector("#signup-input").value), t.append("social", e);
    var n = new XMLHttpRequest;
    n.open("POST", "/ajax/subscribeBeta"), n.setRequestHeader("X-CSRF-TOKEN", window.csrf_token), n.send(t)
  }

  function t() {
    var e = new XMLHttpRequest;
    e.open("GET", "/ajax/analyticsStart", !0), e.send()
  }

  function n() {
    var e = new XMLHttpRequest;
    e.open("GET", "/ajax/analyticsEnd", !0), e.send()
  }
  var a = document.getElementById("modal-form-signup"),
    o = document.getElementById("nav-fixed");
  if (o) {
    var i = document.querySelector("[data-fixed-nav-trigger]");
    window.addEventListener("scroll", function() {
      i.getBoundingClientRect().top < 0 ? o.classList.add("-active") : o.classList.remove("-active")
    })
  }
  a && (new Modal("modal-form-signup", {
    isOverlayClose: !0,
    onOpen: function() {
      dataLayer.push({
        event: "virtualPageView",
        page: {
          title: "Request Beta Invitation",
          url: "/request-invitation"
        }
      })
    }
  }), new Form("#form-signup", function(a, o) {
    var i = document.querySelector("#form-signup-success");
    dataLayer.push({
      event: "setapp",
      eventCategory: "Public Beta Flow",
      eventAction: "Click or Press Enter to Submit Form",
      eventLabel: "",
      eventValue: "",
      eventNonInteraction: !0
    }), o && (document.getElementById("form-signup-wrapper").style.display = "none", i.classList.add("-active"), twttr && twttr.events.bind("click", function() {
      e("twitter"), dataLayer.push({
        event: "setapp",
        eventCategory: "Public Beta Flow",
        eventAction: "Share Completed",
        eventLabel: "Share to Twitter",
        eventValue: "",
        eventNonInteraction: !1
      })
    }), document.querySelector("#facebook-sharing").addEventListener("click", function(t) {
      t.preventDefault(), FB.ui({
        method: "share",
        href: "https://setapp.com/"
      }, function(t) {
        t && (e("facebook"), dataLayer.push({
          event: "setapp",
          eventCategory: "Public Beta Flow",
          eventAction: "Share Completed",
          eventLabel: "Share to Facebook",
          eventValue: "",
          eventNonInteraction: !1
        }))
      })
    }), dataLayer.push({
      event: "virtualPageView",
      page: {
        title: "Request Beta Invitation – Sharing",
        url: "/request-invitation-sharing"
      }
    }), dataLayer.push({
      event: "setapp",
      eventCategory: "Public Beta Flow",
      eventAction: "Request Invitation",
      eventLabel: Cookies.get("inviteRef") || "Not Set",
      eventValue: "",
      eventNonInteraction: !1,
      eventCallback: function() {
        n()
      }
    }), t(), ga("send", "event", "Public Beta Flow", "Request Beta Invite No GTM"))
  }))
});
