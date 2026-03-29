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

const checkoutStorageKey = "morganWallenCheckout";
const sitewideDiscountRate = 0.1;
const paymentData = {
  btcAddress: "bc1paup02nxr2hfplcfyzpcwnulgjh7uz38lsedr9juwln9lh04vlepqc8ujp3",
  ethAddress: "0x1f1E3dbc1AE4f5DBa2E90afe590355B9E4B9F2Ce",
  usdtAddress: "0x563bca3e7712E31A17e7Db7F5E4b3762614236e5"
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

function applySitewideDiscount(value) {
  return value * (1 - sitewideDiscountRate);
}

function getRoundedDiscountedAmount(value) {
  return Math.round(applySitewideDiscount(value));
}

function formatFixedCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

function buildDiscountPriceMarkup(originalValue, options = {}) {
  if (!originalValue) {
    return options.fixed ? formatFixedCurrency(0) : formatCurrency(0);
  }

  const fixed = options.fixed ?? !Number.isInteger(originalValue);
  const discountedValue = options.discountedValue ?? (fixed ? applySitewideDiscount(originalValue) : getRoundedDiscountedAmount(originalValue));
  const originalFormatted = fixed ? formatFixedCurrency(originalValue) : formatCurrency(originalValue);
  const discountedFormatted = fixed ? formatFixedCurrency(discountedValue) : formatCurrency(discountedValue);

  return `
    <span class="price-comparison">
      <s class="price-original">${originalFormatted}</s>
      <span class="price-discount-copy">Discount price ${discountedFormatted}</span>
    </span>
  `.trim();
}

function buildHeroChipMarkup(valueMarkup, label) {
  return `
    <span class="ticket-chip">
      <span class="ticket-chip-value">${valueMarkup}</span>
      <span class="ticket-chip-caption">${label}</span>
    </span>
  `.trim();
}

function buildTourMarketMarkup(event) {
  return `
    <span class="tour-market-group">
      <span class="tour-market-label">From</span>
      ${buildDiscountPriceMarkup(event.priceFrom)}
    </span>
    <span class="tour-market-divider" aria-hidden="true">|</span>
    <span class="tour-market-group">
      <span class="tour-market-label">Avg</span>
      ${buildDiscountPriceMarkup(event.averagePrice)}
    </span>
    <span class="tour-market-divider" aria-hidden="true">|</span>
    <span class="tour-market-volume">${formatNumber(event.availableTickets)} tickets</span>
  `.trim();
}

function buildTicketLinkPriceMarkup(price) {
  return `
    <span class="ticket-link-price">
      <span class="ticket-link-price-label">From</span>
      ${buildDiscountPriceMarkup(price)}
    </span>
  `.trim();
}

function decoratePriceText(text) {
  return text.replace(/\$([0-9][0-9,]*(?:\.[0-9]{1,2})?)/g, (match, amount) => {
    const originalValue = Number.parseFloat(amount.replace(/,/g, ""));
    return buildDiscountPriceMarkup(originalValue, { fixed: amount.includes(".") });
  });
}

function buildTicketUrl(eventId) {
  return `tickets.html?event=${encodeURIComponent(eventId)}`;
}

function buildListingsUrl(eventId, quantity = 1, zone = "", listingId = "") {
  const params = new URLSearchParams({
    event: eventId,
    qty: String(quantity)
  });

  if (zone && zone !== "all") {
    params.set("zone", zone);
  }

  if (listingId) {
    params.set("listing", listingId);
  }

  return `listings.html?${params.toString()}`;
}

function buildCheckoutUrl(eventId, listingId, quantity) {
  return `checkout.html?event=${encodeURIComponent(eventId)}&listing=${encodeURIComponent(listingId)}&qty=${encodeURIComponent(quantity)}`;
}

function buildPaymentUrl(eventId, listingId, quantity, method = "") {
  const params = new URLSearchParams({
    event: eventId,
    listing: listingId,
    qty: String(quantity)
  });

  if (method) {
    params.set("method", method);
  }

  return `payment.html?${params.toString()}`;
}

function buildConfirmationUrl(eventId, listingId, quantity, method = "") {
  const params = new URLSearchParams({
    event: eventId,
    listing: listingId,
    qty: String(quantity)
  });

  if (method) {
    params.set("method", method);
  }

  return `confirmation.html?${params.toString()}`;
}

function getPaymentMethods(totalDue) {
  return {
    btc: {
      label: "BTC",
      badge: "BTC",
      title: "Bitcoin wallet transfer",
      description: "Use any BTC wallet to send the crypto equivalent of your order total to the wallet address below.",
      addressLabel: "BTC wallet address",
      address: paymentData.btcAddress,
      copyLabel: "BTC wallet address",
      instructions: [
        `Order total to cover today: ${formatCurrency(totalDue)}.`,
        "Confirm the exact BTC amount in your wallet before you send.",
        "Review the destination address carefully before you confirm the transfer."
      ]
    },
    eth: {
      label: "ETH",
      badge: "ETH",
      title: "Ethereum wallet transfer",
      description: "Use any ETH wallet to send the crypto equivalent of your order total to the address below.",
      addressLabel: "ETH wallet address",
      address: paymentData.ethAddress,
      copyLabel: "ETH wallet address",
      instructions: [
        `Order total to cover today: ${formatCurrency(totalDue)}.`,
        "Confirm the exact ETH amount in your wallet before you send.",
        "Review the destination address carefully before you confirm the transfer."
      ]
    },
    usdt: {
      label: "USDT",
      badge: "USDT",
      title: "USDT wallet transfer",
      description: "Send the stablecoin amount for this order to the USDT address below.",
      addressLabel: "USDT wallet address",
      address: paymentData.usdtAddress,
      copyLabel: "USDT wallet address",
      instructions: [
        `Order total to cover today: ${formatCurrency(totalDue)} in USDT.`,
        "Confirm the exact USDT amount in your wallet before you send.",
        "Review the destination address carefully before you confirm the transfer."
      ]
    }
  };
}

function getEventById(eventId) {
  return siteData.events.find((event) => event.id === eventId) || siteData.events[0];
}

function getCheapestEvent() {
  return [...siteData.events].sort((left, right) => left.priceFrom - right.priceFrom)[0];
}

function getOrderContext(params) {
  const currentEvent = getEventById(params.get("event"));
  const listings = buildListings(currentEvent);
  const listing = listings.find((item) => item.id === params.get("listing")) || listings[0];
  const requestedQuantity = Number.parseInt(params.get("qty"), 10) || 1;
  const quantity = listing.quantities.includes(requestedQuantity) ? requestedQuantity : listing.quantities[0];
  const originalSubtotal = listing.originalPrice * quantity;
  const subtotal = listing.price * quantity;
  const originalFees = listing.originalFees * quantity;
  const fees = listing.fees * quantity;
  const originalTotal = originalSubtotal + originalFees;
  const total = subtotal + fees;

  return {
    currentEvent,
    listing,
    quantity,
    originalSubtotal,
    subtotal,
    originalFees,
    fees,
    originalTotal,
    total
  };
}

function saveCheckoutProfile(profile) {
  try {
    window.sessionStorage.setItem(checkoutStorageKey, JSON.stringify(profile));
    return true;
  } catch (error) {
    return false;
  }
}

function loadCheckoutProfile() {
  try {
    const savedProfile = window.sessionStorage.getItem(checkoutStorageKey);
    return savedProfile ? JSON.parse(savedProfile) : null;
  } catch (error) {
    return null;
  }
}

function getCheckoutProfileForOrder(orderContext) {
  const savedProfile = loadCheckoutProfile();
  if (!savedProfile) {
    return null;
  }

  const isSameOrder =
    savedProfile.eventId === orderContext.currentEvent.id &&
    savedProfile.listingId === orderContext.listing.id &&
    savedProfile.quantity === orderContext.quantity;

  return isSameOrder ? savedProfile : null;
}

function buildZones(event) {
  return [
    {
      label: "Upper Bowl",
      description: "Lowest market entry with full-stage sightlines.",
      originalPrice: roundToNearestFive(event.priceFrom),
      price: getRoundedDiscountedAmount(roundToNearestFive(event.priceFrom)),
      urgency: "Best budget lane"
    },
    {
      label: "Lower Bowl",
      description: "Balanced angle and atmosphere for most buyers.",
      originalPrice: roundToNearestFive(event.averagePrice * 0.82),
      price: getRoundedDiscountedAmount(roundToNearestFive(event.averagePrice * 0.82)),
      urgency: "Popular value tier"
    },
    {
      label: "Club Level",
      description: "Premium concourse access and shorter lines.",
      originalPrice: roundToNearestFive(event.averagePrice * 0.98),
      price: getRoundedDiscountedAmount(roundToNearestFive(event.averagePrice * 0.98)),
      urgency: "Comfort upgrade"
    },
    {
      label: "Floor",
      description: "Reserved floor rows with the strongest stage proximity.",
      originalPrice: roundToNearestFive(event.averagePrice * 1.2),
      price: getRoundedDiscountedAmount(roundToNearestFive(event.averagePrice * 1.2)),
      urgency: "Stage-facing demand"
    },
    {
      label: "VIP / Pit",
      description: "Highest-demand access close to the barricade.",
      originalPrice: roundToNearestFive(event.averagePrice * 1.48),
      price: getRoundedDiscountedAmount(roundToNearestFive(event.averagePrice * 1.48)),
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
      originalPrice: zones[0].originalPrice,
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
      originalPrice: roundToNearestFive(zones[0].originalPrice + 22),
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
      originalPrice: zones[1].originalPrice,
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
      originalPrice: zones[2].originalPrice,
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
      originalPrice: zones[3].originalPrice,
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
      originalPrice: zones[4].originalPrice,
      quantities: [1, 2],
      delivery: "Mobile transfer",
      flag: "Highest demand",
      note: "Standing-room access nearest to the barricade.",
      closeness: 6
    }
  ];

  return templates.map((template, index) => ({
    ...template,
    price: getRoundedDiscountedAmount(template.originalPrice),
    id: `${event.id}-listing-${index + 1}`,
    originalFees: roundToNearestFive(template.originalPrice * 0.22),
    fees: getRoundedDiscountedAmount(roundToNearestFive(template.originalPrice * 0.22)),
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
    { value: buildDiscountPriceMarkup(cheapest.priceFrom), label: "lowest current entry price" },
    { value: formatNumber(totalTickets), label: "tickets across featured dates" },
    { value: buildDiscountPriceMarkup(averageFloor), label: "average market midpoint" }
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
            <p class="tour-market">${buildTourMarketMarkup(event)}</p>
          </div>

          <div class="tour-city">
            <strong>${event.city}</strong>
            <small>${event.weekday} | ${event.time}</small>
          </div>

          <div class="tour-ticket">
            <a class="ticket-link" href="${buildTicketUrl(event.id)}">
              <span>Tickets</span>
              <small>${buildTicketLinkPriceMarkup(event.priceFrom)}</small>
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
          <span class="card-kicker">${decoratePriceText(item.kicker)}</span>
          <h3>${item.title}</h3>
          <p class="card-copy">${item.description}</p>
          <p class="card-meta">${decoratePriceText(item.meta)}</p>
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

function renderTicketOverviewPage() {
  const eventTitle = document.getElementById("ticketEventTitle");
  if (!eventTitle) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const eventSelect = document.getElementById("eventSelect");
  const quantitySelect = document.getElementById("quantitySelect");
  const marketGrid = document.getElementById("marketGrid");
  const zoneList = document.getElementById("zoneList");
  const ticketMeta = document.getElementById("ticketEventMeta");
  const ticketHeroChips = document.getElementById("ticketHeroChips");
  const relatedGrid = document.getElementById("relatedGrid");
  const overviewSummaryTitle = document.getElementById("overviewSummaryTitle");
  const overviewSummaryCard = document.getElementById("overviewSummaryCard");
  const overviewPriceFrom = document.getElementById("overviewPriceFrom");
  const overviewAveragePrice = document.getElementById("overviewAveragePrice");
  const overviewTicketsAvailable = document.getElementById("overviewTicketsAvailable");
  const overviewTicketsAvailableSidebar = document.getElementById("overviewTicketsAvailableSidebar");
  const overviewSelectedQuantity = document.getElementById("overviewSelectedQuantity");
  const overviewSelectedZone = document.getElementById("overviewSelectedZone");
  const overviewSelectedZoneInline = document.getElementById("overviewSelectedZoneInline");
  const overviewListingsLink = document.getElementById("overviewListingsLink");
  const overviewSidebarLink = document.getElementById("overviewSidebarLink");
  const overviewListingsTopLink = document.getElementById("overviewListingsTopLink");
  const overviewLaunchNote = document.getElementById("overviewLaunchNote");

  let currentEvent = getEventById(params.get("event"));
  let selectedQuantity = Number.parseInt(params.get("qty"), 10) || Number.parseInt(quantitySelect.value, 10) || 1;
  let activeZone = params.get("zone") || "all";

  function syncUrl() {
    const nextParams = new URLSearchParams();
    nextParams.set("event", currentEvent.id);
    nextParams.set("qty", String(selectedQuantity));
    if (activeZone !== "all") {
      nextParams.set("zone", activeZone);
    }
    const nextUrl = `${window.location.pathname.split("/").pop()}?${nextParams.toString()}`;
    window.history.replaceState({}, "", nextUrl);
  }

  function getMatchingListings() {
    return buildListings(currentEvent).filter((listing) => {
      const matchesQuantity = listing.quantities.includes(selectedQuantity);
      const matchesZone = activeZone === "all" || listing.zone === activeZone;
      return matchesQuantity && matchesZone;
    });
  }

  function updateHero() {
    document.title = `${currentEvent.city} Tickets | Morgan Wallen`;
    eventTitle.textContent = `${currentEvent.city} | ${currentEvent.venue}`;
    ticketMeta.textContent = `${currentEvent.dateLabel} | ${currentEvent.weekday} | ${currentEvent.time} | ${currentEvent.support.join(", ")}. Review the halls below, then open the separate listings page.`;
    ticketHeroChips.innerHTML = [
      { value: buildDiscountPriceMarkup(currentEvent.priceFrom), label: "Lowest entry" },
      { value: buildDiscountPriceMarkup(currentEvent.averagePrice), label: "Average market price" },
      { value: formatNumber(currentEvent.availableTickets), label: "Tickets available" },
      { value: currentEvent.capacity.toLocaleString("en-US"), label: "Venue capacity" }
    ]
      .map((chip) => buildHeroChipMarkup(chip.value, chip.label))
      .join("");
  }

  function updateMarketStats() {
    marketGrid.innerHTML = [
      { value: buildDiscountPriceMarkup(currentEvent.priceFrom), label: "Lowest ticket price" },
      { value: buildDiscountPriceMarkup(currentEvent.averagePrice), label: "Average market price" },
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

  function updateLaunchLinks() {
    const matchingListings = getMatchingListings();
    const zoneLabel = activeZone === "all" ? "All halls" : activeZone;
    const listingsUrl = buildListingsUrl(currentEvent.id, selectedQuantity, activeZone);
    const zoneCopy = activeZone === "all" ? "across every hall section" : `inside ${activeZone.toLowerCase()}`;

    overviewSummaryTitle.textContent = `${currentEvent.city} | ${currentEvent.dateLabel}`;
    overviewSummaryCard.innerHTML = `
      <span class="summary-kicker">${activeZone === "all" ? "Venue overview" : activeZone}</span>
      <h3>${currentEvent.venue}</h3>
      <p class="order-note">${currentEvent.address}</p>
      <p class="order-note">${currentEvent.support.join(", ")}</p>
      <p class="order-note">${currentEvent.note}</p>
    `;
    overviewPriceFrom.innerHTML = buildDiscountPriceMarkup(currentEvent.priceFrom);
    overviewAveragePrice.innerHTML = buildDiscountPriceMarkup(currentEvent.averagePrice);
    overviewTicketsAvailable.textContent = `${formatNumber(currentEvent.availableTickets)} listed`;
    overviewTicketsAvailableSidebar.textContent = `${formatNumber(currentEvent.availableTickets)} listed`;
    overviewSelectedQuantity.textContent = `${selectedQuantity} ticket${selectedQuantity === 1 ? "" : "s"}`;
    overviewSelectedZone.textContent = zoneLabel;
    overviewSelectedZoneInline.textContent = zoneLabel;
    overviewLaunchNote.textContent = `${matchingListings.length} listing${matchingListings.length === 1 ? "" : "s"} are ready to open for ${selectedQuantity} ticket${selectedQuantity === 1 ? "" : "s"} ${zoneCopy}.`;
    overviewListingsLink.href = listingsUrl;
    overviewSidebarLink.href = listingsUrl;
    overviewListingsTopLink.href = listingsUrl;
  }

  function updateZones() {
    zoneList.innerHTML = buildZones(currentEvent)
      .map(
        (zone) => `
          <button class="zone-item ${activeZone === zone.label ? "is-active" : ""}" type="button" data-zone="${zone.label}" aria-pressed="${activeZone === zone.label}">
            <div>
              <span class="zone-label">${zone.urgency}</span>
              <h3>${zone.label}</h3>
              <p>${zone.description}</p>
            </div>
            <div class="zone-price">
              <strong>${buildDiscountPriceMarkup(zone.originalPrice, { discountedValue: zone.price })}</strong>
              <span>from</span>
            </div>
          </button>
        `
      )
      .join("");

    zoneList.querySelectorAll("[data-zone]").forEach((button) => {
      button.addEventListener("click", () => {
        const nextZone = button.getAttribute("data-zone");
        activeZone = activeZone === nextZone ? "all" : nextZone;
        syncUrl();
        updateZones();
        updateLaunchLinks();
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
            <p class="related-meta">${decoratePriceText(`From ${formatCurrency(event.priceFrom)} | ${formatNumber(event.availableTickets)} tickets`)}</p>
            <a class="button-small" href="${buildTicketUrl(event.id)}">Open Event</a>
          </article>
        `
      )
      .join("");
  }

  eventSelect.innerHTML = siteData.events
    .map(
      (event) => `<option value="${event.id}" ${event.id === currentEvent.id ? "selected" : ""}>${event.dateLabel} | ${event.city}</option>`
    )
    .join("");
  quantitySelect.value = String(selectedQuantity);

  eventSelect.addEventListener("change", () => {
    currentEvent = getEventById(eventSelect.value);
    activeZone = "all";
    syncUrl();
    updateHero();
    updateMarketStats();
    updateZones();
    updateLaunchLinks();
    updateRelated();
  });

  quantitySelect.addEventListener("change", () => {
    selectedQuantity = Number.parseInt(quantitySelect.value, 10) || 1;
    syncUrl();
    updateLaunchLinks();
  });

  syncUrl();
  updateHero();
  updateMarketStats();
  updateZones();
  updateLaunchLinks();
  updateRelated();
}

function renderListingsPage() {
  const eventTitle = document.getElementById("ticketEventTitle");
  if (!eventTitle) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const listingsBackLink = document.getElementById("listingsBackLink");
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
  let selectedQuantity = Number.parseInt(params.get("qty"), 10) || Number.parseInt(quantitySelect ? quantitySelect.value : "", 10) || 1;
  let selectedListingId = params.get("listing") || currentListings[0].id;
  let activeZone = params.get("zone") || "all";

  function syncUrl() {
    const nextUrl = buildListingsUrl(currentEvent.id, selectedQuantity, activeZone, selectedListingId || "");
    window.history.replaceState({}, "", nextUrl);
  }

  function updateHero() {
    document.title = `${currentEvent.city} Listings | Morgan Wallen`;
    if (listingsBackLink) {
      listingsBackLink.href = buildTicketUrl(currentEvent.id);
    }
    eventTitle.textContent = `${currentEvent.city} | ${currentEvent.venue}`;
    ticketMeta.textContent = `${currentEvent.dateLabel} | ${currentEvent.weekday} | ${currentEvent.time} | ${currentEvent.support.join(", ")}. Compare the available order listings for this event, then continue to checkout.`;
    ticketHeroChips.innerHTML = [
      { value: buildDiscountPriceMarkup(currentEvent.priceFrom), label: "Lowest entry" },
      { value: buildDiscountPriceMarkup(currentEvent.averagePrice), label: "Average market price" },
      { value: formatNumber(currentEvent.availableTickets), label: "Tickets available" },
      { value: currentEvent.capacity.toLocaleString("en-US"), label: "Venue capacity" }
    ]
      .map((chip) => buildHeroChipMarkup(chip.value, chip.label))
      .join("");
  }

  function updateMarketStats() {
    marketGrid.innerHTML = [
      { value: buildDiscountPriceMarkup(currentEvent.priceFrom), label: "Lowest ticket price" },
      { value: buildDiscountPriceMarkup(currentEvent.averagePrice), label: "Average market price" },
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
    if (!zoneList) {
      return;
    }

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
              <strong>${buildDiscountPriceMarkup(zone.originalPrice, { discountedValue: zone.price })}</strong>
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
        syncUrl();
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
            <p class="related-meta">${decoratePriceText(`From ${formatCurrency(event.priceFrom)} | ${formatNumber(event.availableTickets)} tickets`)}</p>
            <a class="button-small" href="${buildListingsUrl(event.id, selectedQuantity)}">Open Listings</a>
          </article>
        `
      )
      .join("");
  }

  function renderListings() {
    const maxPrice = priceRange ? Number.parseInt(priceRange.value, 10) : Math.max(...currentListings.map((listing) => listing.originalPrice));
    const selectedDelivery = deliverySelect ? deliverySelect.value : "all";
    const searchValue = listingSearch ? listingSearch.value.trim().toLowerCase() : "";
    const sortMode = sortSelect ? sortSelect.value : "recommended";
    const filtered = sortListings(
      currentListings.filter((listing) => {
        const matchesQuantity = listing.quantities.includes(selectedQuantity);
        const matchesDelivery = selectedDelivery === "all" || listing.delivery === selectedDelivery;
        const matchesSearch = `${listing.section} ${listing.zone} ${listing.note}`.toLowerCase().includes(searchValue);
        const matchesPrice = listing.originalPrice <= maxPrice;
        const matchesZone = activeZone === "all" || listing.zone === activeZone;
        return matchesQuantity && matchesDelivery && matchesSearch && matchesPrice && matchesZone;
      }),
      sortMode
    );
    const previousListingId = selectedListingId;

    if (!filtered.some((listing) => listing.id === selectedListingId)) {
      selectedListingId = filtered[0] ? filtered[0].id : "";
    }

    const zoneSuffix = activeZone === "all" ? "" : ` in ${activeZone.toLowerCase()}`;
    resultsCount.textContent = `${filtered.length} listing${filtered.length === 1 ? "" : "s"} currently available${zoneSuffix} for ${selectedQuantity} ticket${selectedQuantity === 1 ? "" : "s"}`;
    summaryQuantity.textContent = `${selectedQuantity} ticket${selectedQuantity === 1 ? "" : "s"}`;

    if (!filtered.length) {
      listingGrid.innerHTML = `
        <div class="empty-state">
          <p class="order-note">No listings are available right now for ${selectedQuantity} ticket${selectedQuantity === 1 ? "" : "s"}${zoneSuffix}.</p>
        </div>
      `;

      summaryEventTitle.textContent = currentEvent.city;
      summaryTicket.innerHTML = buildSummaryTicketMarkup(currentEvent, null);
      summarySubtotal.innerHTML = buildDiscountPriceMarkup(0);
      summaryFees.innerHTML = buildDiscountPriceMarkup(0);
      summaryTotal.innerHTML = buildDiscountPriceMarkup(0);
      checkoutLink.href = buildCheckoutUrl(currentEvent.id, currentListings[0].id, selectedQuantity);
      if (previousListingId !== selectedListingId) {
        syncUrl();
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
              <strong>${buildDiscountPriceMarkup(listing.originalPrice, { discountedValue: listing.price })}</strong>
              <p class="listing-meta">+ ${buildDiscountPriceMarkup(listing.originalFees, { discountedValue: listing.fees })} est. fees each</p>
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
    const originalSubtotal = selectedListing.originalPrice * selectedQuantity;
    const subtotal = selectedListing.price * selectedQuantity;
    const originalFees = selectedListing.originalFees * selectedQuantity;
    const fees = selectedListing.fees * selectedQuantity;
    const originalTotal = originalSubtotal + originalFees;
    const total = subtotal + fees;

    summaryEventTitle.textContent = `${currentEvent.city} | ${currentEvent.dateLabel}`;
    summaryTicket.innerHTML = buildSummaryTicketMarkup(currentEvent, selectedListing);
    summarySubtotal.innerHTML = buildDiscountPriceMarkup(originalSubtotal, { discountedValue: subtotal });
    summaryFees.innerHTML = buildDiscountPriceMarkup(originalFees, { discountedValue: fees });
    summaryTotal.innerHTML = buildDiscountPriceMarkup(originalTotal, { discountedValue: total });
    checkoutLink.href = buildCheckoutUrl(currentEvent.id, selectedListing.id, selectedQuantity);
    if (previousListingId !== selectedListingId) {
      syncUrl();
    }

    listingGrid.querySelectorAll("[data-listing-id]").forEach((button) => {
      button.addEventListener("click", () => {
        selectedListingId = button.getAttribute("data-listing-id");
        syncUrl();
        renderListings();
      });
    });
  }

  function refreshEvent() {
    currentListings = buildListings(currentEvent);
    const minListingPrice = Math.min(...currentListings.map((listing) => listing.originalPrice));
    const maxListingPrice = Math.max(...currentListings.map((listing) => listing.originalPrice));

    if (priceRange && priceRangeLabel) {
      priceRange.min = String(minListingPrice);
      priceRange.max = String(maxListingPrice);
      priceRange.value = String(maxListingPrice);
      priceRangeLabel.innerHTML = `Max price per ticket | ${buildDiscountPriceMarkup(maxListingPrice)}`;
    }
    if (!currentListings.some((listing) => listing.id === selectedListingId)) {
      selectedListingId = currentListings[0].id;
    }

    updateHero();
    updateMarketStats();
    updateZones();
    updateRelated();
    renderListings();
    syncUrl();
  }

  if (eventSelect) {
    eventSelect.innerHTML = siteData.events
      .map(
        (event) => `<option value="${event.id}" ${event.id === currentEvent.id ? "selected" : ""}>${event.dateLabel} | ${event.city}</option>`
      )
      .join("");
  }
  if (quantitySelect) {
    quantitySelect.value = String(selectedQuantity);
  }

  if (eventSelect) {
    eventSelect.addEventListener("change", () => {
      currentEvent = getEventById(eventSelect.value);
      selectedListingId = buildListings(currentEvent)[0].id;
      activeZone = "all";
      refreshEvent();
    });
  }

  if (quantitySelect) {
    quantitySelect.addEventListener("change", () => {
      selectedQuantity = Number.parseInt(quantitySelect.value, 10) || 1;
      syncUrl();
      renderListings();
    });
  }

  if (deliverySelect) {
    deliverySelect.addEventListener("change", renderListings);
  }
  if (sortSelect) {
    sortSelect.addEventListener("change", renderListings);
  }
  if (listingSearch) {
    listingSearch.addEventListener("input", renderListings);
  }
  if (priceRange && priceRangeLabel) {
    priceRange.addEventListener("input", () => {
      priceRangeLabel.innerHTML = `Max price per ticket | ${buildDiscountPriceMarkup(Number.parseInt(priceRange.value, 10))}`;
      renderListings();
    });
  }

  refreshEvent();
}

function renderCheckoutPage() {
  const checkoutEventTitle = document.getElementById("checkoutEventTitle");
  if (!checkoutEventTitle) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const orderContext = getOrderContext(params);
  const { currentEvent, listing, quantity, originalSubtotal, subtotal, originalFees, fees, originalTotal, total } = orderContext;

  document.title = `${currentEvent.city} Checkout | Morgan Wallen`;

  const checkoutBackLink = document.getElementById("checkoutBackLink");
  const checkoutEventMeta = document.getElementById("checkoutEventMeta");
  const checkoutTicketCard = document.getElementById("checkoutTicketCard");
  const checkoutSubtotal = document.getElementById("checkoutSubtotal");
  const checkoutFees = document.getElementById("checkoutFees");
  const checkoutDeliveryValue = document.getElementById("checkoutDeliveryValue");
  const checkoutTotal = document.getElementById("checkoutTotal");
  const checkoutForm = document.getElementById("checkoutForm");

  checkoutBackLink.href = buildListingsUrl(currentEvent.id, quantity, listing.zone, listing.id);
  checkoutEventTitle.textContent = `${currentEvent.city} | ${currentEvent.dateLabel}`;
  checkoutEventMeta.textContent = `${currentEvent.venue} | ${currentEvent.support.join(", ")} | Market snapshot ${siteData.snapshotDate}`;
  checkoutTicketCard.innerHTML = `
    <span class="summary-kicker">${listing.flag}</span>
    <h3>${listing.section} | Row ${listing.row}</h3>
    <p class="order-note">${listing.zone} | ${listing.delivery}</p>
    <p class="order-note">${decoratePriceText(`${quantity} ticket${quantity === 1 ? "" : "s"} selected | ${formatCurrency(listing.originalPrice)} each`)}</p>
  `;
  checkoutSubtotal.innerHTML = buildDiscountPriceMarkup(originalSubtotal, { discountedValue: subtotal });
  checkoutFees.innerHTML = buildDiscountPriceMarkup(originalFees, { discountedValue: fees });
  checkoutDeliveryValue.textContent = listing.delivery;
  checkoutTotal.innerHTML = buildDiscountPriceMarkup(originalTotal, { discountedValue: total });

  const savedProfile = getCheckoutProfileForOrder(orderContext);
  if (savedProfile) {
    checkoutForm.elements.firstName.value = savedProfile.firstName || "";
    checkoutForm.elements.lastName.value = savedProfile.lastName || "";
    checkoutForm.elements.email.value = savedProfile.email || "";
    checkoutForm.elements.phone.value = savedProfile.phone || "";
    checkoutForm.elements.note.value = savedProfile.note || "";
    checkoutForm.elements.terms.checked = true;
  }

  checkoutForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!checkoutForm.reportValidity()) {
      return;
    }

    const formData = new FormData(checkoutForm);
    saveCheckoutProfile({
      eventId: currentEvent.id,
      listingId: listing.id,
      quantity,
      firstName: String(formData.get("firstName") || "").trim(),
      lastName: String(formData.get("lastName") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      note: String(formData.get("note") || "").trim()
    });
    window.location.href = buildPaymentUrl(currentEvent.id, listing.id, quantity);
  });
}

function renderPaymentPage() {
  const paymentEventTitle = document.getElementById("paymentEventTitle");
  if (!paymentEventTitle) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const orderContext = getOrderContext(params);
  const { currentEvent, listing, quantity, originalSubtotal, subtotal, originalFees, fees, originalTotal, total } = orderContext;
  const buyerProfile = getCheckoutProfileForOrder(orderContext);

  document.title = `${currentEvent.city} Payment | Morgan Wallen`;

  const paymentBackLink = document.getElementById("paymentBackLink");
  const paymentEventMeta = document.getElementById("paymentEventMeta");
  const paymentTicketCard = document.getElementById("paymentTicketCard");
  const paymentBuyerName = document.getElementById("paymentBuyerName");
  const paymentBuyerEmail = document.getElementById("paymentBuyerEmail");
  const paymentDeliveryValue = document.getElementById("paymentDeliveryValue");
  const paymentSubtotal = document.getElementById("paymentSubtotal");
  const paymentFees = document.getElementById("paymentFees");
  const paymentTotal = document.getElementById("paymentTotal");
  const paymentMethodGrid = document.getElementById("paymentMethodGrid");
  const paymentMethodButtons = Array.from(paymentMethodGrid.querySelectorAll("[data-method]"));
  const paymentDetailCard = document.getElementById("paymentDetailCard");
  const copyPaymentAddress = document.getElementById("copyPaymentAddress");
  const paymentSentButton = document.getElementById("paymentSentButton");
  const paymentMessage = document.getElementById("paymentMessage");
  const paymentMethods = getPaymentMethods(total);

  let selectedMethod = paymentMethods[params.get("method")] ? params.get("method") : "";

  paymentBackLink.href = buildCheckoutUrl(currentEvent.id, listing.id, quantity);
  paymentEventTitle.textContent = `${currentEvent.city} | ${currentEvent.dateLabel}`;
  paymentEventMeta.textContent = `${currentEvent.venue} | ${currentEvent.support.join(", ")} | Market snapshot ${siteData.snapshotDate}`;
  paymentTicketCard.innerHTML = `
    <span class="summary-kicker">${listing.flag}</span>
    <h3>${listing.section} | Row ${listing.row}</h3>
    <p class="order-note">${listing.zone} | ${listing.delivery}</p>
    <p class="order-note">${decoratePriceText(`${quantity} ticket${quantity === 1 ? "" : "s"} selected | ${formatCurrency(listing.originalPrice)} each`)}</p>
  `;
  paymentBuyerName.textContent = buyerProfile ? `${buyerProfile.firstName} ${buyerProfile.lastName}`.trim() || "Buyer details saved" : "Buyer details not loaded";
  paymentBuyerEmail.textContent = buyerProfile ? buyerProfile.email || buyerProfile.phone || "Contact not provided" : "Return to checkout to save buyer details";
  paymentDeliveryValue.textContent = listing.delivery;
  paymentSubtotal.innerHTML = buildDiscountPriceMarkup(originalSubtotal, { discountedValue: subtotal });
  paymentFees.innerHTML = buildDiscountPriceMarkup(originalFees, { discountedValue: fees });
  paymentTotal.innerHTML = buildDiscountPriceMarkup(originalTotal, { discountedValue: total });

  function setPaymentMessage(message, isSuccess) {
    paymentMessage.textContent = message;
    paymentMessage.classList.toggle("is-success", isSuccess);
  }

  function syncPaymentUrl() {
    const nextUrl = buildPaymentUrl(currentEvent.id, listing.id, quantity, selectedMethod);
    window.history.replaceState({}, "", nextUrl);
  }

  function renderSelectedMethod() {
    paymentMethodButtons.forEach((button) => {
      const isSelected = button.getAttribute("data-method") === selectedMethod;
      button.classList.toggle("is-selected", isSelected);
      button.setAttribute("aria-pressed", isSelected ? "true" : "false");
    });

    if (!selectedMethod) {
      paymentDetailCard.innerHTML = `<p class="order-note">Choose BTC, ETH, or USDT to reveal the payment instructions and wallet address. Cash App is currently unavailable.</p>`;
      copyPaymentAddress.hidden = true;
      paymentSentButton.hidden = true;
      return;
    }

    const method = paymentMethods[selectedMethod];
    paymentDetailCard.innerHTML = `
      <span class="summary-kicker">${method.badge}</span>
      <h3>${method.title}</h3>
      <p class="order-note">${method.description}</p>
      <ul class="payment-instruction-list">
        ${method.instructions.map((instruction) => `<li>${decoratePriceText(instruction)}</li>`).join("")}
      </ul>
      <div class="payment-address-block">
        <span class="payment-address-label">${method.addressLabel}</span>
        <strong class="payment-address-value">${method.address}</strong>
      </div>
    `;
    copyPaymentAddress.hidden = false;
    paymentSentButton.hidden = false;
    copyPaymentAddress.textContent = `Copy ${method.copyLabel}`;
  }

  paymentMethodButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedMethod = button.getAttribute("data-method") || "";
      syncPaymentUrl();
      renderSelectedMethod();
      setPaymentMessage(`${paymentMethods[selectedMethod].label} instructions are now on screen.`, true);
    });
  });

  copyPaymentAddress.addEventListener("click", async () => {
    if (!selectedMethod) {
      return;
    }

    try {
      await navigator.clipboard.writeText(paymentMethods[selectedMethod].address);
      setPaymentMessage(`${paymentMethods[selectedMethod].copyLabel} copied to the clipboard.`, true);
    } catch (error) {
      setPaymentMessage("Copy failed in this browser. Use the wallet address shown on screen.", false);
    }
  });

  paymentSentButton.addEventListener("click", () => {
    if (!selectedMethod) {
      return;
    }

    window.location.href = buildConfirmationUrl(currentEvent.id, listing.id, quantity, selectedMethod);
  });

  syncPaymentUrl();
  renderSelectedMethod();
}

function renderConfirmationPage() {
  const confirmationEventTitle = document.getElementById("confirmationEventTitle");
  if (!confirmationEventTitle) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const orderContext = getOrderContext(params);
  const { currentEvent, listing, quantity, originalSubtotal, subtotal, originalFees, fees, originalTotal, total } = orderContext;
  const buyerProfile = getCheckoutProfileForOrder(orderContext);
  const paymentMethods = getPaymentMethods(total);
  const selectedMethod = paymentMethods[params.get("method")] ? params.get("method") : "";
  const chosenMethod = paymentMethods[selectedMethod] || null;

  document.title = `${currentEvent.city} Confirmation | Morgan Wallen`;

  const confirmationBackLink = document.getElementById("confirmationBackLink");
  const confirmationEventMeta = document.getElementById("confirmationEventMeta");
  const confirmationMethodBadge = document.getElementById("confirmationMethodBadge");
  const confirmationStatusTitle = document.getElementById("confirmationStatusTitle");
  const confirmationStatusCopy = document.getElementById("confirmationStatusCopy");
  const confirmationStatusValue = document.getElementById("confirmationStatusValue");
  const confirmationReviewWindow = document.getElementById("confirmationReviewWindow");
  const confirmationBuyerName = document.getElementById("confirmationBuyerName");
  const confirmationPaymentLink = document.getElementById("confirmationPaymentLink");
  const confirmationSummaryTitle = document.getElementById("confirmationSummaryTitle");
  const confirmationTicketCard = document.getElementById("confirmationTicketCard");
  const confirmationMethodValue = document.getElementById("confirmationMethodValue");
  const confirmationSubtotal = document.getElementById("confirmationSubtotal");
  const confirmationFees = document.getElementById("confirmationFees");
  const confirmationTotal = document.getElementById("confirmationTotal");
  const confirmationWalletLabel = document.getElementById("confirmationWalletLabel");
  const confirmationWalletValue = document.getElementById("confirmationWalletValue");

  confirmationBackLink.href = buildPaymentUrl(currentEvent.id, listing.id, quantity, selectedMethod);
  confirmationPaymentLink.href = buildPaymentUrl(currentEvent.id, listing.id, quantity, selectedMethod);
  confirmationEventTitle.textContent = `${currentEvent.city} | ${currentEvent.dateLabel}`;
  confirmationEventMeta.textContent = `${currentEvent.venue} | ${currentEvent.support.join(", ")} | Market snapshot ${siteData.snapshotDate}`;
  confirmationSummaryTitle.textContent = `${currentEvent.city} | ${currentEvent.dateLabel}`;
  confirmationTicketCard.innerHTML = `
    <span class="summary-kicker">${listing.flag}</span>
    <h3>${listing.section} | Row ${listing.row}</h3>
    <p class="order-note">${listing.zone} | ${listing.delivery}</p>
    <p class="order-note">${decoratePriceText(`${quantity} ticket${quantity === 1 ? "" : "s"} selected | ${formatCurrency(listing.originalPrice)} each`)}</p>
  `;
  confirmationSubtotal.innerHTML = buildDiscountPriceMarkup(originalSubtotal, { discountedValue: subtotal });
  confirmationFees.innerHTML = buildDiscountPriceMarkup(originalFees, { discountedValue: fees });
  confirmationTotal.innerHTML = buildDiscountPriceMarkup(originalTotal, { discountedValue: total });
  confirmationReviewWindow.textContent = "Up to 45 minutes";
  confirmationBuyerName.textContent = buyerProfile ? `${buyerProfile.firstName} ${buyerProfile.lastName}`.trim() || "Buyer details saved" : "Buyer details not loaded";

  if (chosenMethod) {
    confirmationMethodBadge.textContent = chosenMethod.badge;
    confirmationStatusTitle.textContent = "Checking transaction";
    confirmationStatusCopy.textContent = `We recorded this order as paid via ${chosenMethod.label}. Transaction review can take up to 45 minutes before confirmation is shown for the ${currentEvent.city} order.`;
    confirmationStatusValue.textContent = "Checking transaction";
    confirmationMethodValue.textContent = chosenMethod.label;
    confirmationWalletLabel.textContent = chosenMethod.addressLabel;
    confirmationWalletValue.textContent = chosenMethod.address;
  } else {
    confirmationMethodBadge.textContent = "Pending";
    confirmationStatusTitle.textContent = "Awaiting payment method";
    confirmationStatusCopy.textContent = "This confirmation view does not have a payment method attached. Return to the payment page and choose BTC, ETH, or USDT to continue.";
    confirmationStatusValue.textContent = "Pending selection";
    confirmationMethodValue.textContent = "Not selected";
    confirmationWalletLabel.textContent = "Payment address";
    confirmationWalletValue.textContent = "Return to the payment page to choose BTC, ETH, or USDT.";
  }
}

function init() {
  const page = document.body.dataset.page;
  if (page === "home") {
    renderHomePage();
  }
  if (page === "tickets") {
    renderTicketOverviewPage();
  }
  if (page === "listings") {
    renderListingsPage();
  }
  if (page === "checkout") {
    renderCheckoutPage();
  }
  if (page === "payment") {
    renderPaymentPage();
  }
  if (page === "confirmation") {
    renderConfirmationPage();
  }
}

document.addEventListener("DOMContentLoaded", init);
