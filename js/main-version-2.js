(function () {
  var S = window.SITE,
    P = S.profile;
  var MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var $ = function (id) {
    return document.getElementById(id);
  };

  function h(tag, attrs, kids) {
    var e = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") e.textContent = attrs[k];
      else e.setAttribute(k, attrs[k]);
    });
    [].concat(kids || []).forEach(function (c) {
      if (c) e.appendChild(c);
    });
    return e;
  }
  function fmt(d) {
    if (!d) return "";
    var p = d.split("-"),
      y = p[0],
      m = MONTHS[+p[1] - 1];
    return p[2] ? m + " " + +p[2] + ", " + y : (m ? m + " " : "") + y;
  }
  function byDate(key) {
    return function (a, b) {
      return (b[key] || "").localeCompare(a[key] || "");
    };
  }
  function safe(u) {
    return /^(https?:|mailto:|assets\/)/.test(u || "") ? u : "";
  }
  function linkRow(obj, labels) {
    var row = h("div", { class: "ln" });
    Object.keys(labels).forEach(function (k) {
      var u = safe(obj && obj[k]);
      if (u)
        row.appendChild(
          h("a", {
            href: u,
            target: "_blank",
            rel: "noopener",
            text: labels[k],
          }),
        );
    });
    return row.children.length ? row : null;
  }
  function list(el, items, empty, build) {
    el.textContent = "";
    if (!items.length) {
      el.appendChild(h("p", { class: "empty", text: empty }));
      return;
    }
    items.forEach(function (i) {
      el.appendChild(build(i));
    });
  }
  function kw(a) {
    return a && a.length
      ? h(
          "div",
          { class: "kw" },
          a.map(function (t) {
            return h("span", { text: t });
          }),
        )
      : null;
  }
  function badge(t, cls) {
    return h("span", { class: "badge " + (cls || ""), text: t });
  }
  /* Renders [text](url) as links. tag = element to create (default p). */
  function rich(text, tag) {
    var p = h(tag || "p"),
      re = /\[([^\]]+)\]\(([^)\s]+)\)/g,
      last = 0,
      m;
    while ((m = re.exec(text))) {
      if (m.index > last)
        p.appendChild(document.createTextNode(text.slice(last, m.index)));
      var u = safe(m[2]);
      p.appendChild(
        u
          ? h("a", { href: u, target: "_blank", rel: "noopener", text: m[1] })
          : document.createTextNode(m[1]),
      );
      last = re.lastIndex;
    }
    if (last < text.length)
      p.appendChild(document.createTextNode(text.slice(last)));
    return p;
  }
  /* Builds year filter buttons into `box`. Returns nothing; calls onPick(year). */
  function yearFilter(box, dates, getCur, onPick) {
    var years = ["All"];
    dates
      .slice()
      .sort()
      .reverse()
      .forEach(function (d) {
        var y = (d || "").slice(0, 4);
        if (y && years.indexOf(y) < 0) years.push(y);
      });
    box.textContent = "";
    if (years.length < 2) return; // hide only when there are no entries
    years.forEach(function (y) {
      var b = h("button", {
        type: "button",
        "aria-pressed": String(y === getCur()),
        text: y,
      });
      b.onclick = function () {
        onPick(y);
      };
      box.appendChild(b);
    });
  }

  /* Sidebar */
  var photo = $("photo");
  photo.src = P.photo;
  photo.onerror = function () {
    photo.onerror = null;
    var ini = P.name
      .split(" ")
      .map(function (w) {
        return w[0];
      })
      .join("");
    photo.src =
      "data:image/svg+xml," +
      encodeURIComponent(
        "<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><rect width='180' height='180' fill='#f8f8f8'/><text x='90' y='108' font-family='sans-serif' font-size='40' text-anchor='middle' fill='#777'>" +
          ini +
          "</text></svg>",
      );
  };
  $("name").textContent = P.name;
  // $("handle").textContent = "@" + P.username + " · " + P.pronouns; This is for username and gender
  $("tagline").textContent = P.tagline;
  $("intro").textContent = P.intro;
  $("location").textContent = P.location;
  $("cv").href = P.cv;
  $("cv").setAttribute("download", "");
  S.interests.forEach(function (i) {
    $("side-interests").appendChild(h("li", { text: i.name }));
  });
  var links = P.links.slice();
  if (P.email) links.push({ label: "Email", url: "mailto:" + P.email });
  links
    .filter(function (l) {
      return safe(l.url);
    })
    .forEach(function (l) {
      $("profile-links").appendChild(
        h(
          "li",
          {},
          h("a", {
            href: l.url,
            target: "_blank",
            rel: "noopener",
            text: l.label,
          }),
        ),
      );
    });
  document.title = P.name + " · AI/ML Researcher";

  /* About */
  S.about
    .concat(S.aboutPosition ? [S.aboutPosition] : [])
    .forEach(function (t) {
      $("about-body").appendChild(rich(t));
    });

  /* Publications */
  list(
    $("pubs"),
    S.publications.slice().sort(byDate("date")),
    "No publications yet. Add entries to js/data.js.",
    function (p) {
      return h("article", { class: "entry" }, [
        h("h3", { text: p.title }),
        h("p", { class: "meta", text: (p.authors || []).join(", ") }),
        h("p", { class: "meta" }, [
          badge(p.status, p.status === "Published" ? "pub" : ""),
          h("span", {
            text: [p.venue, fmt(p.date)].filter(Boolean).join(", "),
          }),
        ]),
        p.abstract ? h("p", { text: p.abstract }) : null,
        kw(p.keywords),
        linkRow(p.links, {
          paper: "Paper",
          arxiv: "arXiv",
          doi: "DOI",
          code: "Code",
          project: "Project",
        }),
      ]);
    },
  );

  /* Highlights with year filter */
  var hYear = "All";
  var hBox = h("div", {
    class: "filters",
    role: "group",
    "aria-label": "Filter highlights by year",
  });
  $("highs").parentNode.insertBefore(hBox, $("highs"));
  function drawHighs() {
    var items = S.highlights
      .filter(function (x) {
        return hYear === "All" || x.date.slice(0, 4) === hYear;
      })
      .sort(byDate("date"));
    list($("highs"), items, "No highlights in this year.", function (x) {
      return h("article", { class: "entry" }, [
        rich(x.title, "h3"),
        h("p", {
          class: "meta",
          text: [fmt(x.date), x.org].filter(Boolean).join(", "),
        }),
        x.desc ? rich(x.desc) : null,
        linkRow(x, { url: "Link" }),
      ]);
    });
  }
  function drawHFilters() {
    yearFilter(
      hBox,
      S.highlights.map(function (x) {
        return x.date;
      }),
      function () {
        return hYear;
      },
      function (y) {
        hYear = y;
        drawHFilters();
        drawHighs();
      },
    );
  }
  drawHFilters();
  drawHighs();

  /* Activity with category filter */
  var cats = ["All"],
    cur = "All";
  S.activity.forEach(function (a) {
    if (cats.indexOf(a.category) < 0) cats.push(a.category);
  });
  function drawActs() {
    var items = S.activity
      .filter(function (a) {
        return cur === "All" || a.category === cur;
      })
      .sort(byDate("date"));
    list($("acts"), items, "No activity in this category.", function (a) {
      return h("article", { class: "entry" }, [
        rich(a.title, "h3"),
        h("p", { class: "meta" }, [
          a.placeholder ? badge("Placeholder", "ph") : null,
          h("span", {
            text: [a.category, a.platform, fmt(a.date)]
              .filter(Boolean)
              .join(", "),
          }),
        ]),
        a.desc ? rich(a.desc) : null,
        linkRow(a, { url: "Read article" }),
      ]);
    });
  }
  function drawFilters() {
    var box = $("filters");
    box.textContent = "";
    if (cats.length < 3) return;
    cats.forEach(function (c) {
      var b = h("button", {
        type: "button",
        "aria-pressed": String(c === cur),
        text: c,
      });
      b.onclick = function () {
        cur = c;
        drawFilters();
        drawActs();
      };
      box.appendChild(b);
    });
  }
  drawFilters();
  drawActs();

  /* Open source */
  var f = S.opensource.featured,
    oss = $("oss");
  var logo = h("img", { src: f.logo, alt: "", width: 48, height: 48 });
  logo.onerror = function () {
    logo.remove();
  };
  oss.appendChild(
    h("article", { class: "entry" }, [
      h("div", { class: "oss-head" }, [logo, h("h3", { text: f.name })]),
      h("p", { text: f.desc }),
      f.contributions && f.contributions.length
        ? h("p", {
            class: "meta",
            text: "Selected contributions: " + f.contributions.join("; "),
          })
        : null,
      linkRow(f, { github: "GitHub" }),
    ]),
  );
  (S.opensource.others || []).forEach(function (o) {
    oss.appendChild(
      h("article", { class: "entry" }, [
        h("h3", { text: o.name }),
        o.desc ? h("p", { text: o.desc }) : null,
        linkRow(o, { url: "Repository" }),
      ]),
    );
  });

  /* Collaborate */
  var c = $("collab");
  c.appendChild(
    h(
      "ul",
      { class: "plain" },
      S.collaboration.map(function (t) {
        return h("li", { text: "• " + t });
      }),
    ),
  );
  // c.appendChild(
  //   h("p", {
  //     text: "Interested in discussing research, collaborating on projects, or exploring ideas together? Feel free to reach out at [getabhi02@gmail.com](mailto:getabhi02@gmai.com).",
  //   }),
  // );
  c.appendChild(
    rich(
      "Interested in discussing research, collaborating on projects, or exploring ideas together? Feel free to reach out at [getabhi02@gmail.com](mailto:getabhi02@gmail.com).",
    ),
  );
  var want = ["Google Scholar", "LinkedIn", "GitHub"],
    row = h("div", { class: "ln" });
  if (P.email)
    row.appendChild(h("a", { href: "mailto:" + P.email, text: "Email" }));
  want.forEach(function (w) {
    var l = P.links.filter(function (x) {
      return x.label === w && safe(x.url);
    })[0];
    if (l)
      row.appendChild(
        h("a", { href: l.url, target: "_blank", rel: "noopener", text: w }),
      );
  });
  c.appendChild(
    row.children.length
      ? row
      : h("p", {
          class: "empty",
          text: "Add your email and profile links in js/data.js.",
        }),
  );
  $("foot").textContent = "© " + new Date().getFullYear() + " " + P.name;

  /* Navigation */
  var secs = [
    ["about", "About"],
    ["publications", "Publications"],
    ["highlights", "Highlights"],
    ["activity", "Research & Technical"],
    ["opensource", "Open Source"],
    ["contact", "Contact"],
  ];
  secs.forEach(function (s) {
    $("nav").appendChild(h("a", { href: "#" + s[0], text: s[1] }));
  });
  var anchors = $("nav").querySelectorAll("a");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting)
            anchors.forEach(function (a) {
              a.classList.toggle("on", a.hash === "#" + e.target.id);
            });
        });
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    secs.forEach(function (s) {
      var el = $(s[0]);
      if (el) io.observe(el);
    });
  }

  /* Theme (light by default) */
  var root = document.documentElement,
    tb = $("theme");
  try {
    if (localStorage.getItem("theme") === "dark") root.dataset.theme = "dark";
  } catch (e) {}
  tb.onclick = function () {
    var d = root.dataset.theme === "dark";
    if (d) root.removeAttribute("data-theme");
    else root.dataset.theme = "dark";
    try {
      localStorage.setItem("theme", d ? "light" : "dark");
    } catch (e) {}
  };
})();
