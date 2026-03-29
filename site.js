const siteData = {
  snapshotDate: "March 29, 2026",
  stats: [
    { value: "23", label: "stadium dates on the 2026 Still The Problem Tour" },
    { value: "20", label: "No. 1 country radio singles on the official site" },
    { value: "19", label: "Billboard Music Awards listed on the official bio" },
    { value: "37", label: "tracks on I'm The Problem" }
  ],
  videos: [
    {
      title: "20 Cigarettes",
      kicker: "Official Music Video",
      description: "One of the current visuals featured on the official homepage video rail.",
      meta: "Current album cycle",
      href: "https://www.youtube.com/results?search_query=Morgan+Wallen+20+Cigarettes+Official+Music+Video",
      cta: "Watch video"
    },
    {
      title: "I Got Better",
      kicker: "Official Music Video",
      description: "A lead single in the new era and a strong hero candidate for the refreshed site.",
      meta: "Featured on the official site",
      href: "https://www.youtube.com/results?search_query=Morgan+Wallen+I+Got+Better+Official+Music+Video",
      cta: "Play now"
    },
    {
      title: "Smile",
      kicker: "Official Music Video",
      description: "Another current visual from the official roll-out and a useful entry point for the media section.",
      meta: "Official release",
      href: "https://www.youtube.com/results?search_query=Morgan+Wallen+Smile+Official+Music+Video",
      cta: "View release"
    }
  ],
  music: [
    {
      title: "I'm The Problem",
      kicker: "Fourth Studio Album",
      description: "37-track album featuring the songs \"Lies, Lies, Lies,\" \"Love Somebody,\" and \"I'm The Problem.\"",
      meta: "$14.99 digital album",
      href: "https://shop.morganwallen.com/products/im-the-problem-digital-album",
      cta: "Buy digital"
    },
    {
      title: "Love Somebody",
      kicker: "Current Era Single",
      description: "A No. 1 single from the current album run and one of the strongest catalog hooks to surface here.",
      meta: "Official site highlight",
      href: "https://morganwallen.com/",
      cta: "Listen"
    },
    {
      title: "One Thing At A Time",
      kicker: "Catalog Anchor",
      description: "Still a major part of the artist story and a natural bridge between old favorites and the new tour cycle.",
      meta: "3LP available in the official store",
      href: "https://shop.morganwallen.com/",
      cta: "Explore music"
    }
  ],
  merch: [
    {
      title: "Still The Problem Tour T-Shirt",
      kicker: "$50.00",
      description: "Denim garment dyed tee with front and back tour graphics.",
      meta: "Official store item",
      href: "https://shop.morganwallen.com/products/still-the-problem-tour-t-shirt",
      cta: "Shop tee"
    },
    {
      title: "I'm The Problem Tour Crewneck",
      kicker: "$75.00",
      description: "Birch garment dyed crewneck with current tour graphics.",
      meta: "Official store item",
      href: "https://shop.morganwallen.com/products/i-m-the-problem-tour-crewneck",
      cta: "Shop crewneck"
    },
    {
      title: "Morgan Wallen Tan Hat",
      kicker: "$50.00",
      description: "Clean headwear option from the current official store rotation.",
      meta: "Official store item",
      href: "https://shop.morganwallen.com/",
      cta: "Shop hat"
    },
    {
      title: "I'm The Problem Limited Edition CD Zine",
      kicker: "$49.99",
      description: "100-page collectible zine paired with the 2-disc edition of the album.",
      meta: "Official store item",
      href: "https://shop.morganwallen.com/products/im-the-problem-limited-edition-cd-zine",
      cta: "Shop collectible"
    }
  ],
  events: [
    {
      id: "apr-10-minneapolis",
      date: "2026-04-10",
      dateLabel: "Apr 10, 2026",
      weekday: "Fri",
      time: "5:30 PM",
      venue: "U.S. Bank Stadium",
      city: "Minneapolis, MN",
      location: "Minneapolis, Minnesota",
      address: "900 South 5th Street, Minneapolis, MN 55415",
      support: ["Thomas Rhett", "Gavin Adcock", "Vincent Mason"],
      priceFrom: 173,
      averagePrice: 388,
      availableTickets: 1784,
      capacity: 73000,
      deliveryTypes: ["Mobile transfer", "Instant download"],
      note: "Upper-bowl inventory is the fastest-moving tier on opening weekend.",
      tags: ["Opening night", "VIP packages", "Hot ticket"]
    },
    {
      id: "apr-11-minneapolis",
      date: "2026-04-11",
      dateLabel: "Apr 11, 2026",
      weekday: "Sat",
      time: "5:30 PM",
      venue: "U.S. Bank Stadium",
      city: "Minneapolis, MN",
      location: "Minneapolis, Minnesota",
      address: "900 South 5th Street, Minneapolis, MN 55415",
      support: ["HARDY", "Gavin Adcock", "Vincent Mason"],
      priceFrom: 166,
      averagePrice: 399,
      availableTickets: 2750,
      capacity: 73000,
      deliveryTypes: ["Mobile transfer", "Instant download"],
      note: "Saturday inventory is deeper than night one, but floor demand is stronger.",
      tags: ["Weekend date", "Marketplace inventory", "Lower bowl value"]
    },
    {
      id: "apr-18-tuscaloosa",
      date: "2026-04-18",
      dateLabel: "Apr 18, 2026",
      weekday: "Sat",
      time: "3:30 PM",
      venue: "Bryant-Denny Stadium",
      city: "Tuscaloosa, AL",
      location: "Tuscaloosa, Alabama",
      address: "920 Paul W. Bryant Drive, Tuscaloosa, AL 35401",
      support: ["Ella Langley", "Vincent Mason", "Zach John King"],
      priceFrom: 206,
      averagePrice: 498,
      availableTickets: 4220,
      capacity: 101821,
      deliveryTypes: ["Mobile transfer", "Instant download"],
      note: "Heavy stadium inventory keeps upper decks available, but premium floor rows are climbing.",
      tags: ["One-night stop", "College stadium", "High demand"]
    },
    {
      id: "may-01-las-vegas",
      date: "2026-05-01",
      dateLabel: "May 1, 2026",
      weekday: "Fri",
      time: "5:30 PM",
      venue: "Allegiant Stadium",
      city: "Las Vegas, NV",
      location: "Las Vegas, Nevada",
      address: "3333 Al Davis Way, Las Vegas, NV 89118",
      support: ["Brooks & Dunn", "Gavin Adcock", "Vincent Mason"],
      priceFrom: 185,
      averagePrice: 699,
      availableTickets: 5121,
      capacity: 65000,
      deliveryTypes: ["Mobile transfer", "Instant download"],
      note: "Vegas is premium-heavy right now, with strong competition for club and floor inventory.",
      tags: ["Premium market", "VIP inventory", "Weekend travel stop"]
    },
    {
      id: "may-02-las-vegas",
      date: "2026-05-02",
      dateLabel: "May 2, 2026",
      weekday: "Sat",
      time: "5:30 PM",
      venue: "Allegiant Stadium",
      city: "Las Vegas, NV",
      location: "Las Vegas, Nevada",
      address: "3333 Al Davis Way, Las Vegas, NV 89118",
      support: ["Thomas Rhett", "Gavin Adcock", "Vincent Mason"],
      priceFrom: 178,
      averagePrice: 758,
      availableTickets: 5552,
      capacity: 65000,
      deliveryTypes: ["Mobile transfer", "Instant download"],
      note: "Saturday pricing runs hotter than Friday, especially on the floor and club levels.",
      tags: ["Saturday date", "Premium market", "High floor demand"]
    },
    {
      id: "may-08-indianapolis",
      date: "2026-05-08",
      dateLabel: "May 8, 2026",
      weekday: "Fri",
      time: "5:30 PM",
      venue: "Lucas Oil Stadium",
      city: "Indianapolis, IN",
      location: "Indianapolis, Indiana",
      address: "500 South Capitol Avenue, Indianapolis, IN 46225",
      support: ["Brooks & Dunn", "Hudson Westbrook", "Zach John King"],
      priceFrom: 133,
      averagePrice: 607,
      availableTickets: 2956,
      capacity: 70000,
      deliveryTypes: ["Mobile transfer", "Instant download"],
      note: "Strong Friday value compared with nearby premium markets.",
      tags: ["Best value", "Indoor stadium", "Pairs available"]
    },
    {
      id: "may-09-indianapolis",
      date: "2026-05-09",
      dateLabel: "May 9, 2026",
      weekday: "Sat",
      time: "5:30 PM",
      venue: "Lucas Oil Stadium",
      city: "Indianapolis, IN",
      location: "Indianapolis, Indiana",
      address: "500 South Capitol Avenue, Indianapolis, IN 46225",
      support: ["Ella Langley", "Flatland Cavalry", "Zach John King"],
      priceFrom: 119,
      averagePrice: 635,
      availableTickets: 3804,
      capacity: 70000,
      deliveryTypes: ["Mobile transfer", "Instant download"],
      note: "Currently the lowest starting price in the featured set, with broad inventory spread.",
      tags: ["Lowest entry price", "Weekend date", "Great for groups"]
    },
    {
      id: "may-15-gainesville",
      date: "2026-05-15",
      dateLabel: "May 15, 2026",
      weekday: "Fri",
      time: "5:30 PM",
      venue: "Ben Hill Griffin Stadium",
      city: "Gainesville, FL",
      location: "Gainesville, Florida",
      address: "157 Gale Lemerand Drive, Gainesville, FL 32601",
      support: ["Thomas Rhett", "Gavin Adcock", "Zach John King"],
      priceFrom: 147,
      averagePrice: 824,
      availableTickets: 4492,
      capacity: 90916,
      deliveryTypes: ["Mobile transfer", "Instant download"],
      note: "Prices spike sharply near the stage, but there is still broad upper-deck availability.",
      tags: ["Large-capacity venue", "Travel weekend", "Club demand"]
    },
    {
      id: "may-30-denver",
      date: "2026-05-30",
      dateLabel: "May 30, 2026",
      weekday: "Sat",
      time: "5:30 PM",
      venue: "Empower Field at Mile High",
      city: "Denver, CO",
      location: "Denver, Colorado",
      address: "1701 Bryant Street, Denver, CO 80204",
      support: ["Ella Langley", "Gavin Adcock", "Vincent Mason"],
      priceFrom: 139,
      averagePrice: 727,
      availableTickets: 3781,
      capacity: 76125,
      deliveryTypes: ["Mobile transfer", "Instant download"],
      note: "Good mid-bowl value right now, with better supply than most mountain-west stops.",
      tags: ["Saturday date", "Altitude market", "Balanced inventory"]
    },
    {
      id: "jun-06-pittsburgh",
      date: "2026-06-06",
      dateLabel: "Jun 6, 2026",
      weekday: "Sat",
      time: "5:00 PM",
      venue: "Acrisure Stadium",
      city: "Pittsburgh, PA",
      location: "Pittsburgh, Pennsylvania",
      address: "100 Art Rooney Avenue, Pittsburgh, PA 15212",
      support: ["Ella Langley", "Gavin Adcock", "Zach John King"],
      priceFrom: 150,
      averagePrice: 743,
      availableTickets: 3359,
      capacity: 68400,
      deliveryTypes: ["Mobile transfer", "Instant download"],
      note: "Saturday demand is strong, but still under Philadelphia's later-tour pricing.",
      tags: ["Steel city stop", "Saturday date", "Popular floor sections"]
    },
    {
      id: "jul-24-ann-arbor",
      date: "2026-07-24",
      dateLabel: "Jul 24, 2026",
      weekday: "Fri",
      time: "5:30 PM",
      venue: "Michigan Stadium",
      city: "Ann Arbor, MI",
      location: "Ann Arbor, Michigan",
      address: "1201 South Main Street, Ann Arbor, MI 48104",
      support: ["Thomas Rhett", "Hudson Westbrook", "Blake Whiten"],
      priceFrom: 179,
      averagePrice: 459,
      availableTickets: 5389,
      capacity: 107601,
      deliveryTypes: ["Mobile transfer", "Instant download"],
      note: "Massive capacity keeps inventory flowing, especially in the upper bowl.",
      tags: ["Big House", "Large inventory", "Weekend opener"]
    },
    {
      id: "aug-01-philadelphia",
      date: "2026-08-01",
      dateLabel: "Aug 1, 2026",
      weekday: "Sat",
      time: "5:30 PM",
      venue: "Lincoln Financial Field",
      city: "Philadelphia, PA",
      location: "Philadelphia, Pennsylvania",
      address: "1 Lincoln Financial Field Way, Philadelphia, PA 19147",
      support: ["Ella Langley", "Hudson Westbrook", "Blake Whiten"],
      priceFrom: 232,
      averagePrice: 761,
      availableTickets: 4357,
      capacity: 69176,
      deliveryTypes: ["Mobile transfer", "Instant download"],
      note: "One of the priciest later-tour dates, with premium sections moving fastest.",
      tags: ["Final weekend", "Premium market", "Strong lower bowl demand"]
    }
  ]
};

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(value);
}

function roundToNearestFive(value) {
  return Math.round(value / 5) * 5;
}

function buildTicketUrl(eventId) {
  return `tickets.html?event=${encodeURIComponent(eventId)}`;
}

function buildCheckoutUrl(eventId, listingId, quantity) {
  return `checkout.html?event=${encodeURIComponent(eventId)}&listing=${encodeURIComponent(listingId)}&qty=${encodeURIComponent(quantity)}`;
}

function getEventById(eventId) {
  return siteData.events.find((event) => event.id === eventId) || siteData.events[0];
}

function getCheapestEvent() {
  return [...siteData.events].sort((left, right) => left.priceFrom - right.priceFrom)[0];
}

function buildZones(event) {
  return [
    {
      label: "Upper Bowl",
      description: "Lowest market entry with full-stage sightlines.",
      price: roundToNearestFive(event.priceFrom),
      urgency: "Best budget lane"
    },
    {
      label: "Lower Bowl",
      description: "Balanced angle and atmosphere for most buyers.",
      price: roundToNearestFive(event.averagePrice * 0.82),
      urgency: "Popular value tier"
    },
    {
      label: "Club Level",
      description: "Premium concourse access and shorter lines.",
      price: roundToNearestFive(event.averagePrice * 0.98),
      urgency: "Comfort upgrade"
    },
    {
      label: "Floor",
      description: "Reserved floor rows with the strongest stage proximity.",
      price: roundToNearestFive(event.averagePrice * 1.2),
      urgency: "Stage-facing demand"
    },
    {
      label: "VIP / Pit",
      description: "Highest-demand access close to the barricade.",
      price: roundToNearestFive(event.averagePrice * 1.48),
      urgency: "Fastest-moving premium"
    }
  ];
}

function buildListings(event) {
  const zones = buildZones(event);
  const templates = [
    {
      zone: zones[0].label,
      section: "Upper 338",
      row: "14",
      price: zones[0].price,
      quantities: [2, 4],
      delivery: "Instant download",
      flag: "Lowest price",
      note: "Seated together with a full-stage angle.",
      closeness: 1
    },
    {
      zone: zones[0].label,
      section: "Upper 315",
      row: "8",
      price: roundToNearestFive(zones[0].price + 22),
      quantities: [1, 2, 3, 4],
      delivery: "Mobile transfer",
      flag: "Fast transfer",
      note: "Better angle and quicker mobile release.",
      closeness: 2
    },
    {
      zone: zones[1].label,
      section: "Lower 124",
      row: "18",
      price: zones[1].price,
      quantities: [2, 4],
      delivery: "Mobile transfer",
      flag: "Best value",
      note: "Lower-bowl corner section with strong crowd energy.",
      closeness: 3
    },
    {
      zone: zones[2].label,
      section: "Club 216",
      row: "6",
      price: zones[2].price,
      quantities: [2, 4, 6],
      delivery: "Instant download",
      flag: "Premium comfort",
      note: "Club access and shorter concourse lines.",
      closeness: 4
    },
    {
      zone: zones[3].label,
      section: "Floor B3",
      row: "11",
      price: zones[3].price,
      quantities: [2, 4],
      delivery: "Mobile transfer",
      flag: "Closer to stage",
      note: "Reserved floor seating with direct stage view.",
      closeness: 5
    },
    {
      zone: zones[4].label,
      section: "Pit GA",
      row: "GA",
      price: zones[4].price,
      quantities: [1, 2],
      delivery: "Mobile transfer",
      flag: "Highest demand",
      note: "Standing-room access nearest to the barricade.",
      closeness: 6
    }
  ];

  return templates.map((template, index) => ({
    ...template,
    id: `${event.id}-listing-${index + 1}`,
    fees: roundToNearestFive(template.price * 0.22),
    rating: 4.7 + (index % 3) * 0.1
  }));
}

function createCardAction(item) {
  return `
    <div class="card-actions">
      <a class="button-small" href="${item.href}" target="_blank" rel="noreferrer">${item.cta}</a>
    </div>
  `;
}

function renderHeroStats() {
  const heroStats = document.getElementById("heroStats");
  if (!heroStats) {
    return;
  }

  const totalTickets = siteData.events.reduce((sum, event) => sum + event.availableTickets, 0);
  const cheapest = getCheapestEvent();
  const averageFloor = Math.round(siteData.events.reduce((sum, event) => sum + event.averagePrice, 0) / siteData.events.length);

  const items = [
    { value: `${siteData.events.length}`, label: "featured event pages" },
    { value: formatCurrency(cheapest.priceFrom), label: "lowest current entry price" },
    { value: formatNumber(totalTickets), label: "tickets across featured dates" },
    { value: formatCurrency(averageFloor), label: "average market midpoint" }
  ];

  heroStats.innerHTML = items
    .map(
      (item) => `
        <article class="stat-card">
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </article>
      `
    )
    .join("");
}

function renderOfficialStats() {
  const statsRibbon = document.getElementById("officialStats");
  if (!statsRibbon) {
    return;
  }

  statsRibbon.innerHTML = siteData.stats
    .map(
      (item) => `
        <article class="stat-card">
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </article>
      `
    )
    .join("");
}

function renderTourRows() {
  const tourTable = document.getElementById("tourTable");
  if (!tourTable) {
    return;
  }

  tourTable.innerHTML = siteData.events
    .map(
      (event) => `
        <article class="tour-row">
          <div class="tour-main">
            <div class="tour-date-line">
              <span>${event.dateLabel}</span>
              <span class="sep">|</span>
              <span>${event.venue}</span>
            </div>
            <p class="tour-support">${event.support.join(", ")}</p>
            <p class="tour-market">From ${formatCurrency(event.priceFrom)} | Avg ${formatCurrency(event.averagePrice)} | ${formatNumber(event.availableTickets)} tickets</p>
          </div>

          <div class="tour-city">
            <strong>${event.city}</strong>
            <small>${event.weekday} | ${event.time}</small>
          </div>

          <div class="tour-ticket">
            <a class="ticket-link" href="${buildTicketUrl(event.id)}">
              <span>Tickets</span>
              <small>From ${formatCurrency(event.priceFrom)}</small>
            </a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderCardGrid(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }

  const cardClass = {
    videoGrid: "media-card",
    musicGrid: "music-card",
    merchGrid: "merch-card"
  }[containerId];

  container.innerHTML = items
    .map(
      (item) => `
        <article class="${cardClass}">
          <span class="card-kicker">${item.kicker}</span>
          <h3>${item.title}</h3>
          <p class="card-copy">${item.description}</p>
          <p class="card-meta">${item.meta}</p>
          ${createCardAction(item)}
        </article>
      `
    )
    .join("");
}

function setupSignupForm() {
  const form = document.getElementById("signupForm");
  const message = document.getElementById("signupMessage");
  if (!form || !message) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const email = formData.get("email");
    const city = formData.get("city");
    message.textContent = `${email} is now queued for ${city} alerts in this site flow.`;
    message.classList.add("is-success");
    form.reset();
  });
}

function renderHomePage() {
  renderHeroStats();
  renderOfficialStats();
  renderTourRows();
  renderCardGrid("videoGrid", siteData.videos);
  renderCardGrid("musicGrid", siteData.music);
  renderCardGrid("merchGrid", siteData.merch);
  setupSignupForm();

  const heroTicketLink = document.getElementById("heroTicketLink");
  if (heroTicketLink) {
    heroTicketLink.href = buildTicketUrl(getCheapestEvent().id);
  }
}

function sortListings(listings, sortMode) {
  const sortable = [...listings];
  if (sortMode === "lowest") {
    return sortable.sort((left, right) => left.price - right.price);
  }
  if (sortMode === "highest") {
    return sortable.sort((left, right) => right.price - left.price);
  }
  if (sortMode === "closest") {
    return sortable.sort((left, right) => right.closeness - left.closeness);
  }
  return sortable.sort((left, right) => left.price + left.fees - (right.price + right.fees));
}

function buildSummaryTicketMarkup(event, listing) {
  if (!listing) {
    return `
      <div class="summary-kicker">No listing selected</div>
      <p class="order-note">Adjust the filters or choose a listing to populate the order summary.</p>
    `;
  }

  return `
    <div class="summary-kicker">${listing.flag}</div>
    <h3>${event.city}</h3>
    <p class="order-note">${event.dateLabel} | ${event.venue}</p>
    <p class="order-note">${listing.section} | Row ${listing.row} | ${listing.zone}</p>
    <p class="order-note">${listing.delivery} | Seller rating ${listing.rating.toFixed(1)}/5</p>
  `;
}

function renderTicketPage() {
  const eventTitle = document.getElementById("ticketEventTitle");
  if (!eventTitle) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const eventSelect = document.getElementById("eventSelect");
  const quantitySelect = document.getElementById("quantitySelect");
  const deliverySelect = document.getElementById("deliverySelect");
  const sortSelect = document.getElementById("sortSelect");
  const listingSearch = document.getElementById("listingSearch");
  const priceRange = document.getElementById("priceRange");
  const priceRangeLabel = document.getElementById("priceRangeLabel");
  const marketGrid = document.getElementById("marketGrid");
  const zoneList = document.getElementById("zoneList");
  const listingGrid = document.getElementById("listingGrid");
  const resultsCount = document.getElementById("resultsCount");
  const ticketMeta = document.getElementById("ticketEventMeta");
  const ticketHeroChips = document.getElementById("ticketHeroChips");
  const summaryEventTitle = document.getElementById("summaryEventTitle");
  const summaryTicket = document.getElementById("summaryTicket");
  const summaryQuantity = document.getElementById("summaryQuantity");
  const summarySubtotal = document.getElementById("summarySubtotal");
  const summaryFees = document.getElementById("summaryFees");
  const summaryTotal = document.getElementById("summaryTotal");
  const checkoutLink = document.getElementById("checkoutLink");
  const relatedGrid = document.getElementById("relatedGrid");

  let currentEvent = getEventById(params.get("event"));
  let currentListings = buildListings(currentEvent);
  let selectedQuantity = Number.parseInt(quantitySelect.value, 10) || 2;
  let selectedListingId = currentListings[0].id;
  let activeZone = "all";

  function syncUrl() {
    const nextParams = new URLSearchParams(window.location.search);
    nextParams.set("event", currentEvent.id);
    const nextUrl = `${window.location.pathname.split("/").pop()}?${nextParams.toString()}`;
    window.history.replaceState({}, "", nextUrl);
  }

  function updateHero() {
    document.title = `${currentEvent.city} Tickets | Morgan Wallen`;
    eventTitle.textContent = `${currentEvent.city} | ${currentEvent.venue}`;
    ticketMeta.textContent = `${currentEvent.dateLabel} | ${currentEvent.weekday} | ${currentEvent.time} | ${currentEvent.support.join(", ")}. Market snapshot updated ${siteData.snapshotDate}.`;
    ticketHeroChips.innerHTML = [
      `${formatCurrency(currentEvent.priceFrom)} lowest entry`,
      `${formatCurrency(currentEvent.averagePrice)} average market price`,
      `${formatNumber(currentEvent.availableTickets)} tickets available`,
      `${currentEvent.capacity.toLocaleString("en-US")} venue capacity`
    ]
      .map((chip) => `<span class="ticket-chip">${chip}</span>`)
      .join("");
  }

  function updateMarketStats() {
    marketGrid.innerHTML = [
      { value: formatCurrency(currentEvent.priceFrom), label: "Lowest ticket price" },
      { value: formatCurrency(currentEvent.averagePrice), label: "Average market price" },
      { value: formatNumber(currentEvent.availableTickets), label: "Current tickets listed" },
      { value: currentEvent.deliveryTypes.join(" / "), label: "Delivery methods" }
    ]
      .map(
        (item) => `
          <article class="market-card">
            <strong>${item.value}</strong>
            <span>${item.label}</span>
          </article>
        `
      )
      .join("");
  }

  function updateZones() {
    zoneList.innerHTML = buildZones(currentEvent)
      .map(
        (zone) => {
          const isActive = activeZone === zone.label;
          return `
          <button class="zone-item ${isActive ? "is-active" : ""}" type="button" data-zone="${zone.label}" aria-pressed="${isActive}">
            <div>
              <span class="zone-label">${zone.urgency}</span>
              <h3>${zone.label}</h3>
              <p>${zone.description}</p>
            </div>
            <div class="zone-price">
              <strong>${formatCurrency(zone.price)}</strong>
              <span>from</span>
            </div>
          </button>
        `;
        }
      )
      .join("");

    zoneList.querySelectorAll("[data-zone]").forEach((button) => {
      button.addEventListener("click", () => {
        const nextZone = button.getAttribute("data-zone");
        activeZone = activeZone === nextZone ? "all" : nextZone;
        updateZones();
        renderListings();
        listingGrid.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function updateRelated() {
    relatedGrid.innerHTML = siteData.events
      .filter((event) => event.id !== currentEvent.id)
      .slice(0, 4)
      .map(
        (event) => `
          <article class="related-card">
            <span class="card-kicker">${event.dateLabel}</span>
            <h3>${event.city}</h3>
            <p>${event.venue}</p>
            <p class="related-meta">From ${formatCurrency(event.priceFrom)} | ${formatNumber(event.availableTickets)} tickets</p>
            <a class="button-small" href="${buildTicketUrl(event.id)}">Open Event</a>
          </article>
        `
      )
      .join("");
  }

  function renderListings() {
    const maxPrice = Number.parseInt(priceRange.value, 10);
    const filtered = sortListings(
      currentListings.filter((listing) => {
        const matchesQuantity = listing.quantities.includes(selectedQuantity);
        const matchesDelivery = deliverySelect.value === "all" || listing.delivery === deliverySelect.value;
        const matchesSearch = `${listing.section} ${listing.zone} ${listing.note}`.toLowerCase().includes(listingSearch.value.trim().toLowerCase());
        const matchesPrice = listing.price <= maxPrice;
        const matchesZone = activeZone === "all" || listing.zone === activeZone;
        return matchesQuantity && matchesDelivery && matchesSearch && matchesPrice && matchesZone;
      }),
      sortSelect.value
    );

    if (!filtered.some((listing) => listing.id === selectedListingId)) {
      selectedListingId = filtered[0] ? filtered[0].id : "";
    }

    const zoneSuffix = activeZone === "all" ? "" : ` in ${activeZone.toLowerCase()}`;
    resultsCount.textContent = `${filtered.length} listing${filtered.length === 1 ? "" : "s"} match your filters${zoneSuffix}`;
    summaryQuantity.textContent = `${selectedQuantity} ticket${selectedQuantity === 1 ? "" : "s"}`;

    if (!filtered.length) {
      listingGrid.innerHTML = `
        <div class="empty-state">
          <p class="order-note">No listings match the current filters.</p>
          <button class="empty-button" type="button" id="resetFiltersButton">Reset filters</button>
        </div>
      `;

      summaryEventTitle.textContent = currentEvent.city;
      summaryTicket.innerHTML = buildSummaryTicketMarkup(currentEvent, null);
      summarySubtotal.textContent = formatCurrency(0);
      summaryFees.textContent = formatCurrency(0);
      summaryTotal.textContent = formatCurrency(0);
      checkoutLink.href = buildCheckoutUrl(currentEvent.id, currentListings[0].id, selectedQuantity);

      const resetButton = document.getElementById("resetFiltersButton");
      if (resetButton) {
        resetButton.addEventListener("click", () => {
          quantitySelect.value = "2";
          selectedQuantity = 2;
          deliverySelect.value = "all";
          sortSelect.value = "recommended";
          listingSearch.value = "";
          priceRange.value = priceRange.max;
          activeZone = "all";
          updateZones();
          renderListings();
        });
      }
      return;
    }

    listingGrid.innerHTML = filtered
      .map(
        (listing) => {
          const isSelected = listing.id === selectedListingId;
          return `
          <article class="listing-card ${isSelected ? "is-selected" : ""}">
            <div class="listing-copy">
              <span class="listing-flag">${listing.flag}</span>
              <h3>${listing.section} | Row ${listing.row}</h3>
              <p class="listing-meta">${listing.zone} | ${listing.delivery} | ${listing.quantities.join(", ")} ticket options</p>
              <p class="listing-note">${listing.note}</p>
            </div>

            <div class="listing-price">
              <strong>${formatCurrency(listing.price)}</strong>
              <p class="listing-meta">+ ${formatCurrency(listing.fees)} est. fees each</p>
              <button class="listing-button ${isSelected ? "is-selected" : ""}" type="button" data-listing-id="${listing.id}">
                ${isSelected ? "Selected" : "Select tickets"}
              </button>
            </div>
          </article>
        `;
        }
      )
      .join("");

    const selectedListing = filtered.find((listing) => listing.id === selectedListingId) || filtered[0];
    const subtotal = selectedListing.price * selectedQuantity;
    const fees = selectedListing.fees * selectedQuantity;
    const total = subtotal + fees;

    summaryEventTitle.textContent = `${currentEvent.city} | ${currentEvent.dateLabel}`;
    summaryTicket.innerHTML = buildSummaryTicketMarkup(currentEvent, selectedListing);
    summarySubtotal.textContent = formatCurrency(subtotal);
    summaryFees.textContent = formatCurrency(fees);
    summaryTotal.textContent = formatCurrency(total);
    checkoutLink.href = buildCheckoutUrl(currentEvent.id, selectedListing.id, selectedQuantity);

    listingGrid.querySelectorAll("[data-listing-id]").forEach((button) => {
      button.addEventListener("click", () => {
        selectedListingId = button.getAttribute("data-listing-id");
        renderListings();
      });
    });
  }

  function refreshEvent() {
    currentListings = buildListings(currentEvent);
    const minListingPrice = Math.min(...currentListings.map((listing) => listing.price));
    const maxListingPrice = Math.max(...currentListings.map((listing) => listing.price));

    priceRange.min = String(minListingPrice);
    priceRange.max = String(maxListingPrice);
    priceRange.value = String(maxListingPrice);
    priceRangeLabel.textContent = `Max price per ticket | ${formatCurrency(maxListingPrice)}`;
    selectedListingId = currentListings[0].id;
    activeZone = "all";

    updateHero();
    updateMarketStats();
    updateZones();
    updateRelated();
    renderListings();
  }

  eventSelect.innerHTML = siteData.events
    .map(
      (event) => `<option value="${event.id}" ${event.id === currentEvent.id ? "selected" : ""}>${event.dateLabel} | ${event.city}</option>`
    )
    .join("");

  eventSelect.addEventListener("change", () => {
    currentEvent = getEventById(eventSelect.value);
    syncUrl();
    refreshEvent();
  });

  quantitySelect.addEventListener("change", () => {
    selectedQuantity = Number.parseInt(quantitySelect.value, 10) || 2;
    renderListings();
  });

  deliverySelect.addEventListener("change", renderListings);
  sortSelect.addEventListener("change", renderListings);
  listingSearch.addEventListener("input", renderListings);
  priceRange.addEventListener("input", () => {
    priceRangeLabel.textContent = `Max price per ticket | ${formatCurrency(Number.parseInt(priceRange.value, 10))}`;
    renderListings();
  });

  refreshEvent();
}

function renderCheckoutPage() {
  const checkoutEventTitle = document.getElementById("checkoutEventTitle");
  if (!checkoutEventTitle) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const currentEvent = getEventById(params.get("event"));
  const listings = buildListings(currentEvent);
  const listing = listings.find((item) => item.id === params.get("listing")) || listings[0];
  const requestedQuantity = Number.parseInt(params.get("qty"), 10) || 2;
  const quantity = listing.quantities.includes(requestedQuantity) ? requestedQuantity : listing.quantities[0];
  const subtotal = listing.price * quantity;
  const fees = listing.fees * quantity;
  const total = subtotal + fees;

  document.title = `${currentEvent.city} Checkout | Morgan Wallen`;

  const checkoutBackLink = document.getElementById("checkoutBackLink");
  const checkoutEventMeta = document.getElementById("checkoutEventMeta");
  const checkoutTicketCard = document.getElementById("checkoutTicketCard");
  const checkoutSubtotal = document.getElementById("checkoutSubtotal");
  const checkoutFees = document.getElementById("checkoutFees");
  const checkoutDeliveryValue = document.getElementById("checkoutDeliveryValue");
  const checkoutTotal = document.getElementById("checkoutTotal");
  const checkoutForm = document.getElementById("checkoutForm");
  const checkoutMessage = document.getElementById("checkoutMessage");

  checkoutBackLink.href = buildTicketUrl(currentEvent.id);
  checkoutEventTitle.textContent = `${currentEvent.city} | ${currentEvent.dateLabel}`;
  checkoutEventMeta.textContent = `${currentEvent.venue} | ${currentEvent.support.join(", ")} | Market snapshot ${siteData.snapshotDate}`;
  checkoutTicketCard.innerHTML = `
    <span class="summary-kicker">${listing.flag}</span>
    <h3>${listing.section} | Row ${listing.row}</h3>
    <p class="order-note">${listing.zone} | ${listing.delivery}</p>
    <p class="order-note">${quantity} ticket${quantity === 1 ? "" : "s"} selected | ${formatCurrency(listing.price)} each</p>
  `;
  checkoutSubtotal.textContent = formatCurrency(subtotal);
  checkoutFees.textContent = formatCurrency(fees);
  checkoutDeliveryValue.textContent = listing.delivery;
  checkoutTotal.textContent = formatCurrency(total);

  checkoutForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!checkoutForm.reportValidity()) {
      return;
    }

    const formData = new FormData(checkoutForm);
    checkoutMessage.textContent = `Order request saved for ${formData.get("firstName")} ${formData.get("lastName")} at ${formData.get("email")} for ${currentEvent.city}. Total preview: ${formatCurrency(total)}.`;
    checkoutMessage.classList.add("is-success");
    checkoutForm.reset();
  });
}

function init() {
  const page = document.body.dataset.page;
  if (page === "home") {
    renderHomePage();
  }
  if (page === "tickets") {
    renderTicketPage();
  }
  if (page === "checkout") {
    renderCheckoutPage();
  }
}

document.addEventListener("DOMContentLoaded", init);
