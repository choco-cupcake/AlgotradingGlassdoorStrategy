const fs = require('fs');

let data = [
    {
        "s": "NASDAQ:AAPL",
        "d": [
            "apple",
            "AAPL",
            "Apple Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MSFT",
        "d": [
            "microsoft",
            "MSFT",
            "Microsoft Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:GOOG",
        "d": [
            "alphabet",
            "GOOG",
            "Alphabet Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:AMZN",
        "d": [
            "amazon",
            "AMZN",
            "Amazon.com, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:TSLA",
        "d": [
            "tesla",
            "TSLA",
            "Tesla, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:UNH",
        "d": [
            "unitedhealth",
            "UNH",
            "UnitedHealth Group Incorporated",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:META",
        "d": [
            "meta-platforms",
            "META",
            "Meta Platforms, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:JNJ",
        "d": [
            "johnson-and-johnson",
            "JNJ",
            "Johnson & Johnson",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:V",
        "d": [
            "visa",
            "V",
            "Visa Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NVDA",
        "d": [
            "nvidia",
            "NVDA",
            "NVIDIA Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:XOM",
        "d": [
            "exxon",
            "XOM",
            "Exxon Mobil Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:WMT",
        "d": [
            "walmart",
            "WMT",
            "Walmart Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PG",
        "d": [
            "procter-and-gamble",
            "PG",
            "Procter & Gamble Company (The)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:JPM",
        "d": [
            "jpmorgan-chase",
            "JPM",
            "JP Morgan Chase & Co.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MA",
        "d": [
            "mastercard",
            "MA",
            "Mastercard Incorporated",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:HD",
        "d": [
            "home-depot",
            "HD",
            "Home Depot, Inc. (The)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CVX",
        "d": [
            "chevron",
            "CVX",
            "Chevron Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:LLY",
        "d": [
            "eli-lilly",
            "LLY",
            "Eli Lilly and Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PFE",
        "d": [
            "pfizer",
            "PFE",
            "Pfizer, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:KO",
        "d": [
            "coca-cola",
            "KO",
            "Coca-Cola Company (The)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BAC",
        "d": [
            "bank-of-america",
            "BAC",
            "Bank of America Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ABBV",
        "d": [
            "abbvie",
            "ABBV",
            "AbbVie Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PEP",
        "d": [
            "pepsico",
            "PEP",
            "PepsiCo, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:COST",
        "d": [
            "costco-wholesale",
            "COST",
            "Costco Wholesale Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MRK",
        "d": [
            "merck-and-co",
            "MRK",
            "Merck & Company, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TMO",
        "d": [
            "thermo-fisher-scientific",
            "TMO",
            "Thermo Fisher Scientific Inc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:AVGO",
        "d": [
            "broadcom",
            "AVGO",
            "Broadcom Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DHR",
        "d": [
            "danaher",
            "DHR",
            "Danaher Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ORCL",
        "d": [
            "oracle",
            "ORCL",
            "Oracle Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ADBE",
        "d": [
            "adobe",
            "ADBE",
            "Adobe Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ACN",
        "d": [
            "accenture",
            "ACN",
            "Accenture plc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DIS",
        "d": [
            "walt-disney",
            "DIS",
            "Walt Disney Company (The)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MCD",
        "d": [
            "mcdonalds",
            "MCD",
            "McDonald's Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ABT",
        "d": [
            "abbott",
            "ABT",
            "Abbott Laboratories",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:VZ",
        "d": [
            "verizon",
            "VZ",
            "Verizon Communications Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CSCO",
        "d": [
            "cisco",
            "CSCO",
            "Cisco Systems, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:TMUS",
        "d": [
            "t-mobile",
            "TMUS",
            "T-Mobile US, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CRM",
        "d": [
            "salesforce",
            "CRM",
            "Salesforce, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NEE",
        "d": [
            "nextera-energy",
            "NEE",
            "NextEra Energy, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:UPS",
        "d": [
            "united-parcel",
            "UPS",
            "United Parcel Service, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NKE",
        "d": [
            "nike",
            "NKE",
            "Nike, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CMCSA",
        "d": [
            "comcast",
            "CMCSA",
            "Comcast Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:WFC",
        "d": [
            "wells-fargo",
            "WFC",
            "Wells Fargo & Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:TXN",
        "d": [
            "texas-instruments",
            "TXN",
            "Texas Instruments Incorporated",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BMY",
        "d": [
            "bristol-myers-squibb",
            "BMY",
            "Bristol-Myers Squibb Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:QCOM",
        "d": [
            "qualcomm",
            "QCOM",
            "QUALCOMM Incorporated",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:AMD",
        "d": [
            "advanced-micro-devices",
            "AMD",
            "Advanced Micro Devices, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PM",
        "d": [
            "philip-morris",
            "PM",
            "Philip Morris International Inc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MS",
        "d": [
            "morgan-stanley",
            "MS",
            "Morgan Stanley",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:LIN",
        "d": [
            "linde",
            "LIN",
            "Linde plc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:UNP",
        "d": [
            "union-pacific",
            "UNP",
            "Union Pacific Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:INTC",
        "d": [
            "intel",
            "INTC",
            "Intel Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CVS",
        "d": [
            "cvs-health",
            "CVS",
            "CVS Health Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:RTX",
        "d": [
            "raytheon",
            "RTX",
            "Raytheon Technologies Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:AMGN",
        "d": [
            "amgen",
            "AMGN",
            "Amgen Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:HON",
        "d": [
            "honeywell",
            "HON",
            "Honeywell International Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:INTU",
        "d": [
            "intuit",
            "INTU",
            "Intuit Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SPGI",
        "d": [
            "s-and-p-global",
            "SPGI",
            "S&P Global Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SCHW",
        "d": [
            "schwab",
            "SCHW",
            "Charles Schwab Corporation (The)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:T",
        "d": [
            "at-and-t",
            "T",
            "AT&T Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MDT",
        "d": [
            "medtronic",
            "MDT",
            "Medtronic plc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:LOW",
        "d": [
            "lowe-s",
            "LOW",
            "Lowe's Companies, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:COP",
        "d": [
            "conocophillips",
            "COP",
            "ConocoPhillips",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BX",
        "d": [
            "blackstone",
            "BX",
            "Blackstone Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AXP",
        "d": [
            "american-express",
            "AXP",
            "American Express Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ELV",
        "d": [
            "anthem",
            "ELV",
            "Elevance Health, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:IBM",
        "d": [
            "international-bus-mach",
            "IBM",
            "International Business Machines Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:GS",
        "d": [
            "goldman-sachs",
            "GS",
            "Goldman Sachs Group, Inc. (The)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:LMT",
        "d": [
            "lockheed-martin",
            "LMT",
            "Lockheed Martin Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PYPL",
        "d": [
            "paypal",
            "PYPL",
            "PayPal Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DE",
        "d": [
            "deere",
            "DE",
            "Deere & Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BLK",
        "d": [
            "blackrock",
            "BLK",
            "BlackRock, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ADP",
        "d": [
            "automatic-data-processing",
            "ADP",
            "Automatic Data Processing, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NFLX",
        "d": [
            "netflix",
            "NFLX",
            "Netflix, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:C",
        "d": [
            "citigroup",
            "C",
            "Citigroup, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CAT",
        "d": [
            "caterpillar",
            "CAT",
            "Caterpillar, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BA",
        "d": [
            "boeing",
            "BA",
            "Boeing Company (The)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NOW",
        "d": [
            "servicenow",
            "NOW",
            "ServiceNow, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SBUX",
        "d": [
            "starbucks",
            "SBUX",
            "Starbucks Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:EL",
        "d": [
            "estee-lauder",
            "EL",
            "Estee Lauder Companies, Inc. (The)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CI",
        "d": [
            "cigna",
            "CI",
            "Cigna Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ADI",
        "d": [
            "analog-devices",
            "ADI",
            "Analog Devices, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MDLZ",
        "d": [
            "mondelez",
            "MDLZ",
            "Mondelez International, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:AMAT",
        "d": [
            "applied-materials",
            "AMAT",
            "Applied Materials, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SO",
        "d": [
            "southern",
            "SO",
            "Southern Company (The)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MMM",
        "d": [
            "3m",
            "MMM",
            "3M Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DUK",
        "d": [
            "duke-energy",
            "DUK",
            "Duke Energy Corporation (Holding Company)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ISRG",
        "d": [
            "intuitive-surgical",
            "ISRG",
            "Intuitive Surgical, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MMC",
        "d": [
            "marsh-and-mclennan",
            "MMC",
            "Marsh & McLennan Companies, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:GE",
        "d": [
            "general-electric",
            "GE",
            "General Electric Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SYK",
        "d": [
            "stryker",
            "SYK",
            "Stryker Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BAM",
        "d": [
            "brookfield",
            "BAM",
            "Brookfield Asset Management Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ZTS",
        "d": [
            "zoetis",
            "ZTS",
            "Zoetis Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MO",
        "d": [
            "altria",
            "MO",
            "Altria Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CB",
        "d": [
            "chubb",
            "CB",
            "Chubb Limited",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:GILD",
        "d": [
            "gilead",
            "GILD",
            "Gilead Sciences, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:VRTX",
        "d": [
            "vertex-pharmaceutical",
            "VRTX",
            "Vertex Pharmaceuticals Incorporated",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TGT",
        "d": [
            "target",
            "TGT",
            "Target Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BDX",
        "d": [
            "becton-dickinson",
            "BDX",
            "Becton, Dickinson and Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NOC",
        "d": [
            "northrop-grumman",
            "NOC",
            "Northrop Grumman Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TJX",
        "d": [
            "tjx-cos",
            "TJX",
            "TJX Companies, Inc. (The)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CME",
        "d": [
            "cme",
            "CME",
            "CME Group Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CHTR",
        "d": [
            "charter",
            "CHTR",
            "Charter Communications, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:TEAM",
        "d": [
            "atlassian",
            "TEAM",
            "Atlassian Corporation Plc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ABNB",
        "d": [
            "airbnb",
            "ABNB",
            "Airbnb, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:WM",
        "d": [
            "waste-management",
            "WM",
            "Waste Management, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CSX",
        "d": [
            "csx",
            "CSX",
            "CSX Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PGR",
        "d": [
            "progressive-ohio",
            "PGR",
            "Progressive Corporation (The)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:USB",
        "d": [
            "us-bancorp",
            "USB",
            "U.S. Bancorp",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PNC",
        "d": [
            "pnc-financial",
            "PNC",
            "PNC Financial Services Group, Inc. (The)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:D",
        "d": [
            "dominion-energy",
            "D",
            "Dominion Energy, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:REGN",
        "d": [
            "regeneron-pharmaceuticals",
            "REGN",
            "Regeneron Pharmaceuticals, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MRNA",
        "d": [
            "moderna",
            "MRNA",
            "Moderna, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:FISV",
        "d": [
            "fiserv",
            "FISV",
            "Fiserv, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CL",
        "d": [
            "colgate-palmolive",
            "CL",
            "Colgate-Palmolive Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TFC",
        "d": [
            "truist-financial",
            "TFC",
            "Truist Financial Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ITW",
        "d": [
            "illinois-tool-works",
            "ITW",
            "Illinois Tool Works Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:EW",
        "d": [
            "edwards",
            "EW",
            "Edwards Lifesciences Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MU",
        "d": [
            "micron-technology",
            "MU",
            "Micron Technology, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:EOG",
        "d": [
            "eog",
            "EOG",
            "EOG Resources, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:LRCX",
        "d": [
            "lam-research",
            "LRCX",
            "Lam Research Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ATVI",
        "d": [
            "activision-blizzard",
            "ATVI",
            "Activision Blizzard, Inc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:GD",
        "d": [
            "general-dynamics",
            "GD",
            "General Dynamics Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:HCA",
        "d": [
            "hca-healthcare",
            "HCA",
            "HCA Healthcare, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:HUM",
        "d": [
            "humana",
            "HUM",
            "Humana Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AON",
        "d": [
            "aon",
            "AON",
            "Aon plc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:F",
        "d": [
            "ford",
            "F",
            "Ford Motor Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:UBER",
        "d": [
            "uber",
            "UBER",
            "Uber Technologies, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SHW",
        "d": [
            "sherwin-williams",
            "SHW",
            "Sherwin-Williams Company (The)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:FIS",
        "d": [
            "fidelity-information-services",
            "FIS",
            "Fidelity National Information Services, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NSC",
        "d": [
            "norfolk-southern",
            "NSC",
            "Norfolk Southern Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BSX",
        "d": [
            "boston-scientific",
            "BSX",
            "Boston Scientific Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ETN",
        "d": [
            "eaton",
            "ETN",
            "Eaton Corporation, PLC",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:FDX",
        "d": [
            "fedex",
            "FDX",
            "FedEx Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ICE",
        "d": [
            "intercontinental-exchange",
            "ICE",
            "Intercontinental Exchange Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:OXY",
        "d": [
            "occidental-petroleum",
            "OXY",
            "Occidental Petroleum Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DG",
        "d": [
            "dollar-general",
            "DG",
            "Dollar General Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:APD",
        "d": [
            "air-products-and-chemicals",
            "APD",
            "Air Products and Chemicals, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:EPD",
        "d": [
            "enterprise-prods-partners",
            "EPD",
            "Enterprise Products Partners L.P.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MCO",
        "d": [
            "moodys",
            "MCO",
            "Moody's Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SNPS",
        "d": [
            "synopsys",
            "SNPS",
            "Synopsys, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:KDP",
        "d": [
            "keurig-dr-pepper",
            "KDP",
            "Keurig Dr Pepper Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CNC",
        "d": [
            "centene",
            "CNC",
            "Centene Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:KLAC",
        "d": [
            "kla-tencor",
            "KLAC",
            "KLA Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PXD",
        "d": [
            "pioneer-natural-resources",
            "PXD",
            "Pioneer Natural Resources Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:GM",
        "d": [
            "general-motors",
            "GM",
            "General Motors Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MAR",
        "d": [
            "marriott",
            "MAR",
            "Marriott International",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MET",
        "d": [
            "metlife",
            "MET",
            "MetLife, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:AEP",
        "d": [
            "american-electric-power",
            "AEP",
            "American Electric Power Company, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:EMR",
        "d": [
            "emerson",
            "EMR",
            "Emerson Electric Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SNOW",
        "d": [
            "snowflake",
            "SNOW",
            "Snowflake Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MCK",
        "d": [
            "mckesson",
            "MCK",
            "McKesson Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SRE",
        "d": [
            "sempra-energy",
            "SRE",
            "DBA Sempra",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CDNS",
        "d": [
            "cadence-design-systems",
            "CDNS",
            "Cadence Design Systems, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MPC",
        "d": [
            "marathon-petroleum",
            "MPC",
            "Marathon Petroleum Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MELI",
        "d": [
            "mercadolibre",
            "MELI",
            "MercadoLibre, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PANW",
        "d": [
            "palo-alto-networks",
            "PANW",
            "Palo Alto Networks, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SLB",
        "d": [
            "schlumberger",
            "SLB",
            "Schlumberger N.V.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:VMW",
        "d": [
            "vmware",
            "VMW",
            "Vmware, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SQ",
        "d": [
            "block",
            "SQ",
            "Block, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PAYX",
        "d": [
            "paychex",
            "PAYX",
            "Paychex, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ADSK",
        "d": [
            "autodesk",
            "ADSK",
            "Autodesk, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:HSY",
        "d": [
            "hershey",
            "HSY",
            "The Hershey Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:KHC",
        "d": [
            "kraft-heinz",
            "KHC",
            "The Kraft Heinz Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ADM",
        "d": [
            "archer-daniels-midland",
            "ADM",
            "Archer-Daniels-Midland Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ECL",
        "d": [
            "ecolab",
            "ECL",
            "Ecolab Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MNST",
        "d": [
            "monster-beverage",
            "MNST",
            "Monster Beverage Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SHOP",
        "d": [
            "shopify",
            "SHOP",
            "Shopify Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:GIS",
        "d": [
            "general-mills",
            "GIS",
            "General Mills, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:STZ",
        "d": [
            "constellation-brands",
            "STZ",
            "Constellation Brands, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:APH",
        "d": [
            "amphenol",
            "APH",
            "Amphenol Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:KMB",
        "d": [
            "kimberly-clark",
            "KMB",
            "Kimberly-Clark Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:RSG",
        "d": [
            "republic-services",
            "RSG",
            "Republic Services, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:LHX",
        "d": [
            "l3-harris",
            "LHX",
            "L3Harris Technologies, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NXPI",
        "d": [
            "nxp-semiconductors",
            "NXPI",
            "NXP Semiconductors N.V.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:EXC",
        "d": [
            "exelon",
            "EXC",
            "Exelon Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:IQV",
        "d": [
            "iqvia",
            "IQV",
            "IQVIA Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:FCX",
        "d": [
            "freeport-mcmoran",
            "FCX",
            "Freeport-McMoRan, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MRVL",
        "d": [
            "marvell-tech",
            "MRVL",
            "Marvell Technology, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CRWD",
        "d": [
            "crowdstrike",
            "CRWD",
            "CrowdStrike Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CTVA",
        "d": [
            "corteva",
            "CTVA",
            "Corteva, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:VLO",
        "d": [
            "valero-energy",
            "VLO",
            "Valero Energy Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TEL",
        "d": [
            "te-connectivity",
            "TEL",
            "TE Connectivity Ltd. New Switzerland Registered Shares",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SYY",
        "d": [
            "sysco",
            "SYY",
            "Sysco Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:WDAY",
        "d": [
            "workday",
            "WDAY",
            "Workday, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MSI",
        "d": [
            "motorola-solutions",
            "MSI",
            "Motorola Solutions, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:FTNT",
        "d": [
            "fortinet",
            "FTNT",
            "Fortinet, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AIG",
        "d": [
            "american-international-group",
            "AIG",
            "American International Group, Inc. New",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:XEL",
        "d": [
            "xcel-energy",
            "XEL",
            "Xcel Energy Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PSX",
        "d": [
            "phillips-66",
            "PSX",
            "Phillips 66",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:KMI",
        "d": [
            "kinder-morgan",
            "KMI",
            "Kinder Morgan, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:COF",
        "d": [
            "capital-one",
            "COF",
            "Capital One Financial Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:LULU",
        "d": [
            "lululemon-athletica",
            "LULU",
            "lululemon athletica inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:WMB",
        "d": [
            "williams",
            "WMB",
            "Williams Companies, Inc. (The)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ENPH",
        "d": [
            "enphase-energy",
            "ENPH",
            "Enphase Energy, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DVN",
        "d": [
            "devon-energy",
            "DVN",
            "Devon Energy Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AFL",
        "d": [
            "aflac",
            "AFL",
            "AFLAC Incorporated",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:A",
        "d": [
            "agilent-technologies",
            "A",
            "Agilent Technologies, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TRV",
        "d": [
            "travelers",
            "TRV",
            "The Travelers Companies, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AJG",
        "d": [
            "gallagher",
            "AJG",
            "Arthur J. Gallagher & Co.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:DLTR",
        "d": [
            "dollar-tree",
            "DLTR",
            "Dollar Tree, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:JCI",
        "d": [
            "johnson-controls",
            "JCI",
            "Johnson Controls International plc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DOW",
        "d": [
            "dow",
            "DOW",
            "Dow Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "AMEX:LNG",
        "d": [
            "cheniere-energy-partners",
            "LNG",
            "Cheniere Energy, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ANET",
        "d": [
            "arista-networks",
            "ANET",
            "Arista Networks, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PH",
        "d": [
            "parker-hannifin",
            "PH",
            "Parker-Hannifin Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MCHP",
        "d": [
            "microchip-technology",
            "MCHP",
            "Microchip Technology Incorporated",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PRU",
        "d": [
            "prudential",
            "PRU",
            "Prudential Financial, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:GPN",
        "d": [
            "global-payments",
            "GPN",
            "Global Payments Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NUE",
        "d": [
            "nucor",
            "NUE",
            "Nucor Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SCCO",
        "d": [
            "southern-copper",
            "SCCO",
            "Southern Copper Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TT",
        "d": [
            "trane-technologies",
            "TT",
            "Trane Technologies plc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:EA",
        "d": [
            "electronic-arts",
            "EA",
            "Electronic Arts Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:HLT",
        "d": [
            "hilton-worldwide",
            "HLT",
            "Hilton Worldwide Holdings Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CTSH",
        "d": [
            "cognizant",
            "CTSH",
            "Cognizant Technology Solutions Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NEM",
        "d": [
            "newmont",
            "NEM",
            "Newmont Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ED",
        "d": [
            "consolidated-edison",
            "ED",
            "Consolidated Edison, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CARR",
        "d": [
            "carrier-global-corporation",
            "CARR",
            "Carrier Global Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BK",
        "d": [
            "bank-of-new-york-mellon",
            "BK",
            "The Bank of New York Mellon Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:DXCM",
        "d": [
            "dexcom",
            "DXCM",
            "DexCom, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ODFL",
        "d": [
            "old-dominion",
            "ODFL",
            "Old Dominion Freight Line, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:VEEV",
        "d": [
            "veeva-systems",
            "VEEV",
            "Veeva Systems Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:DDOG",
        "d": [
            "datadog",
            "DDOG",
            "Datadog, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:WBA",
        "d": [
            "walgreens-boots-alliance",
            "WBA",
            "Walgreens Boots Alliance, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ILMN",
        "d": [
            "illumina",
            "ILMN",
            "Illumina, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ET",
        "d": [
            "energy-transfer",
            "ET",
            "Energy Transfer LP",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:KR",
        "d": [
            "kroger",
            "KR",
            "Kroger Company (The)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:HPQ",
        "d": [
            "hp",
            "HPQ",
            "HP Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:YUM",
        "d": [
            "yum-brands",
            "YUM",
            "Yum! Brands, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CPNG",
        "d": [
            "coupang",
            "CPNG",
            "Coupang, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:OTIS",
        "d": [
            "otis-worldwide",
            "OTIS",
            "Otis Worldwide Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:HES",
        "d": [
            "hess",
            "HES",
            "Hess Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:WEC",
        "d": [
            "wec-energy",
            "WEC",
            "WEC Energy Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DELL",
        "d": [
            "dell",
            "DELL",
            "Dell Technologies Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:IDXX",
        "d": [
            "idexx-laboratories",
            "IDXX",
            "IDEXX Laboratories, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:APO",
        "d": [
            "apollo",
            "APO",
            "Apollo Global Management, Inc. (New)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PEG",
        "d": [
            "public-service-enterprise",
            "PEG",
            "Public Service Enterprise Group Incorporated",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TWTR",
        "d": [
            "twitter",
            "TWTR",
            "Twitter, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:RIVN",
        "d": [
            "rivian",
            "RIVN",
            "Rivian Automotive, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SGEN",
        "d": [
            "seattle-genetics",
            "SGEN",
            "Seagen Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ALL",
        "d": [
            "allstate",
            "ALL",
            "Allstate Corporation (The)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MTB",
        "d": [
            "m-and-t-bank",
            "MTB",
            "M&T Bank Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:WBD",
        "d": [
            "warner-bros-discovery",
            "WBD",
            "Warner Bros. Discovery, Inc. - Series A",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MPLX",
        "d": [
            "mplx-lp",
            "MPLX",
            "MPLX LP",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PCAR",
        "d": [
            "paccar",
            "PCAR",
            "PACCAR Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ES",
        "d": [
            "eversource-energy",
            "ES",
            "Eversource Energy (D/B/A)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ZM",
        "d": [
            "zoom-video-communications",
            "ZM",
            "Zoom Video Communications, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:BIIB",
        "d": [
            "biogen",
            "BIIB",
            "Biogen Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:VRSK",
        "d": [
            "verisk-analytics",
            "VRSK",
            "Verisk Analytics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:IBKR",
        "d": [
            "interactive-brokers-group",
            "IBKR",
            "Interactive Brokers Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:IFF",
        "d": [
            "international-flavors-and-fragrances",
            "IFF",
            "International Flavors & Fragrances, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CMI",
        "d": [
            "cummins",
            "CMI",
            "Cummins Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:FAST",
        "d": [
            "fastenal",
            "FAST",
            "Fastenal Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:KKR",
        "d": [
            "kkr",
            "KKR",
            "KKR & Co. Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ABC",
        "d": [
            "amerisourcebergen",
            "ABC",
            "AmerisourceBergen Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NDAQ",
        "d": [
            "nasdaq",
            "NDAQ",
            "Nasdaq, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:GLW",
        "d": [
            "corning",
            "GLW",
            "Corning Incorporated",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CPRT",
        "d": [
            "copart",
            "CPRT",
            "Copart, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BAX",
        "d": [
            "baxter",
            "BAX",
            "Baxter International Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DD",
        "d": [
            "dupont-de-nemours",
            "DD",
            "DuPont de Nemours, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PPG",
        "d": [
            "ppg-industries",
            "PPG",
            "PPG Industries, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:GFS",
        "d": [
            "globalfoundries",
            "GFS",
            "GlobalFoundries Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ROST",
        "d": [
            "ross-stores",
            "ROST",
            "Ross Stores, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:KEYS",
        "d": [
            "keysight-technologies",
            "KEYS",
            "Keysight Technologies Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AMP",
        "d": [
            "ameriprise-financial",
            "AMP",
            "Ameriprise Financial, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:FRC",
        "d": [
            "first-republic-bank-san-francisco",
            "FRC",
            "FIRST REPUBLIC BANK",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:LCID",
        "d": [
            "lucid-group",
            "LCID",
            "Lucid Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ALB",
        "d": [
            "albemarle",
            "ALB",
            "Albemarle Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AME",
        "d": [
            "ametek",
            "AME",
            "AMETEK, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TSN",
        "d": [
            "tyson-foods",
            "TSN",
            "Tyson Foods, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CSGP",
        "d": [
            "costar-group",
            "CSGP",
            "CoStar Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DASH",
        "d": [
            "doordash",
            "DASH",
            "DoorDash, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:RBLX",
        "d": [
            "roblox",
            "RBLX",
            "Roblox Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ROK",
        "d": [
            "rockwell-automation",
            "ROK",
            "Rockwell Automation, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AWK",
        "d": [
            "american-water-works",
            "AWK",
            "American Water Works Company, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:TROW",
        "d": [
            "holdings",
            "TROW",
            "T. Rowe Price Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:LYB",
        "d": [
            "lyondellbasell",
            "LYB",
            "LyondellBasell Industries NV",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:LVS",
        "d": [
            "las-vegas-sands",
            "LVS",
            "Las Vegas Sands Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DFS",
        "d": [
            "discover-financial-services",
            "DFS",
            "Discover Financial Services",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ALNY",
        "d": [
            "alnylam-pharmaceuticals",
            "ALNY",
            "Alnylam Pharmaceuticals, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CBRE",
        "d": [
            "cbre-group",
            "CBRE",
            "CBRE Group Inc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:OKE",
        "d": [
            "oneok",
            "OKE",
            "ONEOK, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:HRL",
        "d": [
            "hormel-foods",
            "HRL",
            "Hormel Foods Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ON",
        "d": [
            "on-semiconductor",
            "ON",
            "ON Semiconductor Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:APTV",
        "d": [
            "aptiv",
            "APTV",
            "Aptiv PLC",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:EBAY",
        "d": [
            "ebay",
            "EBAY",
            "eBay Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:RPRX",
        "d": [
            "royalty-pharma",
            "RPRX",
            "Royalty Pharma plc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:TTD",
        "d": [
            "the-trade-desk",
            "TTD",
            "The Trade Desk, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DHI",
        "d": [
            "dr-horton",
            "DHI",
            "D.R. Horton, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SIRI",
        "d": [
            "sirius-xm",
            "SIRI",
            "Sirius XM Holdings Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:EFX",
        "d": [
            "equifax",
            "EFX",
            "Equifax, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:EIX",
        "d": [
            "edison-international",
            "EIX",
            "Edison International",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:STT",
        "d": [
            "state-street",
            "STT",
            "State Street Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:HAL",
        "d": [
            "halliburton",
            "HAL",
            "Halliburton Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DTE",
        "d": [
            "dte-energy",
            "DTE",
            "DTE Energy Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:K",
        "d": [
            "kellogg",
            "K",
            "Kellogg Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CEG",
        "d": [
            "constellation-energy",
            "CEG",
            "Constellation Energy Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:BKR",
        "d": [
            "baker-hughes",
            "BKR",
            "Baker Hughes Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CLR",
        "d": [
            "continental-resources",
            "CLR",
            "Continental Resources, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MDB",
        "d": [
            "mongodb",
            "MDB",
            "MongoDB, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ETR",
        "d": [
            "entergy",
            "ETR",
            "Entergy Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:EPAM",
        "d": [
            "epam-sys",
            "EPAM",
            "EPAM Systems, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MKC",
        "d": [
            "mccormick",
            "MKC",
            "McCormick & Company, Incorporated",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:LEN",
        "d": [
            "lennar",
            "LEN",
            "Lennar Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AEE",
        "d": [
            "ameren",
            "AEE",
            "Ameren Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ZBH",
        "d": [
            "zimmer-biomet",
            "ZBH",
            "Zimmer Biomet Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:FITB",
        "d": [
            "fifth-third-bancorp",
            "FITB",
            "Fifth Third Bancorp",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CCEP",
        "d": [
            "coca-cola",
            "CCEP",
            "Coca-Cola Europacific Partners plc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CDW",
        "d": [
            "cdw",
            "CDW",
            "CDW Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NET",
        "d": [
            "cloudflare-inc",
            "NET",
            "Cloudflare, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:LH",
        "d": [
            "laboratory-amer",
            "LH",
            "Laboratory Corporation of America Holdings",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:WTW",
        "d": [
            "willis-towers-watson",
            "WTW",
            "Willis Towers Watson Public Limited Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:FTV",
        "d": [
            "fortive",
            "FTV",
            "Fortive Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ZS",
        "d": [
            "zscaler",
            "ZS",
            "Zscaler, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CTRA",
        "d": [
            "alpha-metallurgical-resources",
            "CTRA",
            "Coterra Energy Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:VMC",
        "d": [
            "vulcan-materials",
            "VMC",
            "Vulcan Materials Company (Holding Company)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:LUV",
        "d": [
            "southwest",
            "LUV",
            "Southwest Airlines Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:URI",
        "d": [
            "united-rentals",
            "URI",
            "United Rentals, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PCG",
        "d": [
            "pg-and-e",
            "PCG",
            "Pacific Gas & Electric Co.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:FANG",
        "d": [
            "diamondback",
            "FANG",
            "Diamondback Energy, Inc. - Commmon Stock",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:RJF",
        "d": [
            "raymond-james",
            "RJF",
            "Raymond James Financial, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:FE",
        "d": [
            "firstenergy",
            "FE",
            "FirstEnergy Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ALGN",
        "d": [
            "align-technology",
            "ALGN",
            "Align Technology, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SPOT",
        "d": [
            "spotify-technology",
            "SPOT",
            "Spotify Technology S.A.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:LYV",
        "d": [
            "live-nation",
            "LYV",
            "Live Nation Entertainment, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:GPC",
        "d": [
            "gpc",
            "GPC",
            "Genuine Parts Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:VRSN",
        "d": [
            "verisign",
            "VRSN",
            "VeriSign, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CF",
        "d": [
            "cf-industries",
            "CF",
            "CF Industries Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CHD",
        "d": [
            "church-and-dwight",
            "CHD",
            "Church & Dwight Company, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:TSCO",
        "d": [
            "tractor-supply",
            "TSCO",
            "Tractor Supply Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:STE",
        "d": [
            "steris",
            "STE",
            "STERIS plc (Ireland)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:HIG",
        "d": [
            "hartford-financial-services-grp",
            "HIG",
            "Hartford Financial Services Group, Inc. (The)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DAL",
        "d": [
            "delta-air-lines",
            "DAL",
            "Delta Air Lines, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PPL",
        "d": [
            "ppl",
            "PPL",
            "PPL Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NTRS",
        "d": [
            "northern-trust",
            "NTRS",
            "Northern Trust Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:YUMC",
        "d": [
            "yum-china-holdings",
            "YUMC",
            "Yum China Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:IR",
        "d": [
            "ingersoll-rand",
            "IR",
            "Ingersoll Rand Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CNP",
        "d": [
            "centerpoint-energy",
            "CNP",
            "CenterPoint Energy, Inc (Holding Co)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CMS",
        "d": [
            "cms-energy",
            "CMS",
            "CMS Energy Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NU",
        "d": [
            "nu-holdings",
            "NU",
            "Nu Holdings Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:RF",
        "d": [
            "regions-financial",
            "RF",
            "Regions Financial Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:TTWO",
        "d": [
            "take-two-interactive-software",
            "TTWO",
            "Take-Two Interactive Software, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CHWY",
        "d": [
            "chewy",
            "CHWY",
            "Chewy, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:COIN",
        "d": [
            "coinbase",
            "COIN",
            "Coinbase Global, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CTLT",
        "d": [
            "catalent",
            "CTLT",
            "Catalent, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PWR",
        "d": [
            "quanta-services",
            "PWR",
            "Quanta Services, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MOS",
        "d": [
            "mosaic",
            "MOS",
            "Mosaic Company (The)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:HBAN",
        "d": [
            "huntington-bancshares",
            "HBAN",
            "Huntington Bancshares Incorporated",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ULTA",
        "d": [
            "ulta-beauty",
            "ULTA",
            "Ulta Beauty, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AGR",
        "d": [
            "avangrid",
            "AGR",
            "Avangrid, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PKI",
        "d": [
            "perkinelmer",
            "PKI",
            "PerkinElmer, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:RKT",
        "d": [
            "rocket-companies",
            "RKT",
            "Rocket Companies, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DOV",
        "d": [
            "dover",
            "DOV",
            "Dover Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AVTR",
        "d": [
            "avantor",
            "AVTR",
            "Avantor, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AMCR",
        "d": [
            "amcor",
            "AMCR",
            "Amcor plc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PFG",
        "d": [
            "principal",
            "PFG",
            "Principal Financial Group Inc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PLTR",
        "d": [
            "palantir",
            "PLTR",
            "Palantir Technologies Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MTCH",
        "d": [
            "match-group-inc",
            "MTCH",
            "Match Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ZI",
        "d": [
            "zoominfo",
            "ZI",
            "ZoomInfo Technologies Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BRO",
        "d": [
            "brown-and-brown",
            "BRO",
            "Brown & Brown, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:GRMN",
        "d": [
            "garmin-ltd",
            "GRMN",
            "Garmin Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CFG",
        "d": [
            "citizens-financial-group",
            "CFG",
            "Citizens Financial Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ROL",
        "d": [
            "rollins",
            "ROL",
            "Rollins, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:FOX",
        "d": [
            "fox",
            "FOX",
            "Fox Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:QSR",
        "d": [
            "restaurant-brands-international",
            "QSR",
            "Restaurant Brands International Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:HPE",
        "d": [
            "hewlett-packard-enterprise",
            "HPE",
            "Hewlett Packard Enterprise Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:LPLA",
        "d": [
            "lpl-finl",
            "LPLA",
            "LPL Financial Holdings Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SPLK",
        "d": [
            "splunk",
            "SPLK",
            "Splunk Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:BMRN",
        "d": [
            "biomarin-pharmaceutical",
            "BMRN",
            "BioMarin Pharmaceutical Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:HOLX",
        "d": [
            "hologic",
            "HOLX",
            "Hologic, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CLX",
        "d": [
            "clorox",
            "CLX",
            "Clorox Company (The)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:XYL",
        "d": [
            "xylem",
            "XYL",
            "Xylem Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BALL",
        "d": [
            "ball",
            "BALL",
            "Ball Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:HUBS",
        "d": [
            "hubspot",
            "HUBS",
            "HubSpot, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:OWL",
        "d": [
            "blue-owl",
            "OWL",
            "Blue Owl Capital Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:VFC",
        "d": [
            "v-f",
            "VFC",
            "V.F. Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:EXPD",
        "d": [
            "expeditors",
            "EXPD",
            "Expeditors International of Washington, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BBY",
        "d": [
            "best-buy",
            "BBY",
            "Best Buy Co., Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:WAB",
        "d": [
            "wabtec",
            "WAB",
            "Westinghouse Air Brake Technologies Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SWKS",
        "d": [
            "skyworks-solutions",
            "SWKS",
            "Skyworks Solutions, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SEDG",
        "d": [
            "solaredge-technologies",
            "SEDG",
            "SolarEdge Technologies, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:TRMB",
        "d": [
            "trimble",
            "TRMB",
            "Trimble Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CAH",
        "d": [
            "cardinal-health",
            "CAH",
            "Cardinal Health, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:KEY",
        "d": [
            "keycorp",
            "KEY",
            "KeyCorp",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ACGL",
        "d": [
            "arch-capital",
            "ACGL",
            "Arch Capital Group Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:WRB",
        "d": [
            "berkley-w-r-corp",
            "WRB",
            "W.R. Berkley Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TECK",
        "d": [
            "teck-resources",
            "TECK",
            "Teck Resources Ltd",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SNAP",
        "d": [
            "snap",
            "SNAP",
            "Snap Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CAG",
        "d": [
            "conagra-brands",
            "CAG",
            "ConAgra Brands, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:EDR",
        "d": [
            "endeavor",
            "EDR",
            "Endeavor Group Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:TW",
        "d": [
            "tradeweb",
            "TW",
            "Tradeweb Markets Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DGX",
        "d": [
            "quest-diagnostics",
            "DGX",
            "Quest Diagnostics Incorporated",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PARA",
        "d": [
            "viacomcbs",
            "PARA",
            "Paramount Global",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:INCY",
        "d": [
            "incyte",
            "INCY",
            "Incyte Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:STX",
        "d": [
            "seagate",
            "STX",
            "Seagate Technology Holdings PLC",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SYF",
        "d": [
            "synchrony",
            "SYF",
            "Synchrony Financial",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:J",
        "d": [
            "jacobs-engineering",
            "J",
            "Jacobs Engineering Group Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:EXPE",
        "d": [
            "expedia",
            "EXPE",
            "Expedia Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AES",
        "d": [
            "aes",
            "AES",
            "The AES Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ATO",
        "d": [
            "atmos-energy",
            "ATO",
            "Atmos Energy Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:EQT",
        "d": [
            "eqt",
            "EQT",
            "EQT Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:EVRG",
        "d": [
            "evergy",
            "EVRG",
            "Evergy, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:OKTA",
        "d": [
            "okta",
            "OKTA",
            "Okta, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AVY",
        "d": [
            "avery-dennison",
            "AVY",
            "Avery Dennison Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CINF",
        "d": [
            "cincinnati-financial",
            "CINF",
            "Cincinnati Financial Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:GNRC",
        "d": [
            "generac",
            "GNRC",
            "Generac Holdlings Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:HWM",
        "d": [
            "howmet-aerospace",
            "HWM",
            "Howmet Aerospace Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NTAP",
        "d": [
            "netapp",
            "NTAP",
            "NetApp, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MRO",
        "d": [
            "marathon-oil",
            "MRO",
            "Marathon Oil Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DRI",
        "d": [
            "darden",
            "DRI",
            "Darden Restaurants, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:LNT",
        "d": [
            "alliant-energy",
            "LNT",
            "Alliant Energy Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:HZNP",
        "d": [
            "horizon-pharma",
            "HZNP",
            "Horizon Therapeutics Public Limited Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:LKQ",
        "d": [
            "lkq",
            "LKQ",
            "LKQ Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SSNC",
        "d": [
            "ss-and-c",
            "SSNC",
            "SS&C Technologies Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:IP",
        "d": [
            "international-paper",
            "IP",
            "International Paper Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:KMX",
        "d": [
            "carmax",
            "KMX",
            "CarMax Inc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:AKAM",
        "d": [
            "akamai",
            "AKAM",
            "Akamai Technologies, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TRGP",
        "d": [
            "targa-resources",
            "TRGP",
            "Targa Resources, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TRU",
        "d": [
            "transunion",
            "TRU",
            "TransUnion",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:STLD",
        "d": [
            "steel-dynamics",
            "STLD",
            "Steel Dynamics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BILL",
        "d": [
            "bill-com",
            "BILL",
            "Bill.com Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CPB",
        "d": [
            "campbell-soup",
            "CPB",
            "Campbell Soup Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PINS",
        "d": [
            "pinterest",
            "PINS",
            "Pinterest, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ACI",
        "d": [
            "albertsons",
            "ACI",
            "Albertsons Companies, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CHKP",
        "d": [
            "check-point-software-technologies",
            "CHKP",
            "Check Point Software Technologies Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:WMG",
        "d": [
            "wmg",
            "WMG",
            "Warner Music Group Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BG",
        "d": [
            "bunge",
            "BG",
            "Bunge Limited Bunge Limited",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TWLO",
        "d": [
            "twilio",
            "TWLO",
            "Twilio Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:U",
        "d": [
            "unity",
            "U",
            "Unity Software Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:TER",
        "d": [
            "teradyne",
            "TER",
            "Teradyne, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:OMC",
        "d": [
            "omnicom-group",
            "OMC",
            "Omnicom Group Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MGM",
        "d": [
            "mgm-resorts",
            "MGM",
            "MGM Resorts International",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PLUG",
        "d": [
            "plug-power",
            "PLUG",
            "Plug Power, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SJM",
        "d": [
            "smucker",
            "SJM",
            "J.M. Smucker Company (The) New",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:WDC",
        "d": [
            "western-digital",
            "WDC",
            "Western Digital Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NLOK",
        "d": [
            "nortonlifelock",
            "NLOK",
            "NortonLifeLock Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ENTG",
        "d": [
            "entegris",
            "ENTG",
            "Entegris, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DPZ",
        "d": [
            "dominos-pizza",
            "DPZ",
            "Domino's Pizza Inc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CHRW",
        "d": [
            "ch-robinson",
            "CHRW",
            "C.H. Robinson Worldwide, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PGY",
        "d": [
            "",
            "PGY",
            "Pagaya Technologies Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PTC",
        "d": [
            "ptc",
            "PTC",
            "PTC Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:DOCU",
        "d": [
            "docusign",
            "DOCU",
            "DocuSign, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ETSY",
        "d": [
            "etsy",
            "ETSY",
            "Etsy, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:GRAB",
        "d": [
            "grab",
            "GRAB",
            "Grab Holdings Limited",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BEN",
        "d": [
            "franklin-resources",
            "BEN",
            "Franklin Resources, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:RGEN",
        "d": [
            "repligen",
            "RGEN",
            "Repligen Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TXT",
        "d": [
            "textron",
            "TXT",
            "Textron Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SWK",
        "d": [
            "stanley-black-and-decker",
            "SWK",
            "Stanley Black & Decker, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:LDOS",
        "d": [
            "leidos-holdings",
            "LDOS",
            "Leidos Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:L",
        "d": [
            "loews",
            "L",
            "Loews Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:FMC",
        "d": [
            "fmc",
            "FMC",
            "FMC Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:WTRG",
        "d": [
            "essential-utilities",
            "WTRG",
            "Essential Utilities, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:APP",
        "d": [
            "applovin",
            "APP",
            "Applovin Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:XP",
        "d": [
            "xp",
            "XP",
            "XP Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CTXS",
        "d": [
            "citrix-systems",
            "CTXS",
            "Citrix Systems, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PKG",
        "d": [
            "packaging-of-america",
            "PKG",
            "Packaging Corporation of America",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:GDDY",
        "d": [
            "godaddy",
            "GDDY",
            "GoDaddy Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BAH",
        "d": [
            "booz-allen",
            "BAH",
            "Booz Allen Hamilton Holding Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "AMEX:CBOE",
        "d": [
            "cboe-global-markets",
            "CBOE",
            "Cboe Global Markets, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:VTRS",
        "d": [
            "viatris",
            "VTRS",
            "Viatris Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ARES",
        "d": [
            "ares-management",
            "ARES",
            "Ares Management Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NI",
        "d": [
            "nisource",
            "NI",
            "NiSource Inc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:FHN",
        "d": [
            "first-horizon",
            "FHN",
            "First Horizon Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CG",
        "d": [
            "the-carlyle-group",
            "CG",
            "The Carlyle Group Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:EMN",
        "d": [
            "eastman",
            "EMN",
            "Eastman Chemical Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:UAL",
        "d": [
            "united-airlines",
            "UAL",
            "United Airlines Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:GME",
        "d": [
            "gamestop",
            "GME",
            "GameStop Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:WLK",
        "d": [
            "westlake-chemical",
            "WLK",
            "Westlake Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:OVV",
        "d": [
            "ovintiv",
            "OVV",
            "Ovintiv Inc. (DE)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CHK",
        "d": [
            "chesapeake-energy",
            "CHK",
            "Chesapeake Energy Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CE",
        "d": [
            "celanese",
            "CE",
            "Celanese Corporation Celanese Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TAP",
        "d": [
            "molson-coors",
            "TAP",
            "Molson Coors Beverage Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:WMS",
        "d": [
            "advanced-drainage-system",
            "WMS",
            "Advanced Drainage Systems, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DT",
        "d": [
            "dynatrace",
            "DT",
            "Dynatrace, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AAP",
        "d": [
            "advance-auto-parts",
            "AAP",
            "Advance Auto Parts Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DAR",
        "d": [
            "darling-ingredients",
            "DAR",
            "Darling Ingredients Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:FSLR",
        "d": [
            "first-solar",
            "FSLR",
            "First Solar, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SBNY",
        "d": [
            "signature-bank",
            "SBNY",
            "Signature Bank",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BLDR",
        "d": [
            "builders-firstsource",
            "BLDR",
            "Builders FirstSource, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:BSY",
        "d": [
            "bentley-systems",
            "BSY",
            "Bentley Systems, Incorporated",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:RYAN",
        "d": [
            "ryan-specialty-group",
            "RYAN",
            "Ryan Specialty Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MAS",
        "d": [
            "masco",
            "MAS",
            "Masco Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AMC",
        "d": [
            "amc-entertainment-holdings",
            "AMC",
            "AMC Entertainment Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:LW",
        "d": [
            "lamb-weston-hldgs",
            "LW",
            "Lamb Weston Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CCL",
        "d": [
            "carnival",
            "CCL",
            "Carnival Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:RPM",
        "d": [
            "rpm-international",
            "RPM",
            "RPM International Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AR",
        "d": [
            "antero-resources",
            "AR",
            "Antero Resources Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:GGG",
        "d": [
            "graco",
            "GGG",
            "Graco Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:IPG",
        "d": [
            "interpublic-group-cos",
            "IPG",
            "Interpublic Group of Companies, Inc. (The)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NFE",
        "d": [
            "new-fortress-energy-llc",
            "NFE",
            "New Fortress Energy Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AER",
        "d": [
            "aercap",
            "AER",
            "AerCap Holdings N.V.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CCK",
        "d": [
            "crown-holdings",
            "CCK",
            "Crown Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:LUMN",
        "d": [
            "lumen",
            "LUMN",
            "Lumen Technologies, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:APA",
        "d": [
            "apa-corporation",
            "APA",
            "APA Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PATH",
        "d": [
            "uipath",
            "PATH",
            "UiPath, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:QGEN",
        "d": [
            "qiagen-nv",
            "QGEN",
            "Qiagen N.V.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:LBTYA",
        "d": [
            "liberty-global",
            "LBTYA",
            "Liberty Global plc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:WES",
        "d": [
            "western-midstream-partners",
            "WES",
            "Western Midstream Partners, LP",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:EQH",
        "d": [
            "axa-equitable-hldgs",
            "EQH",
            "Equitable Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DINO",
        "d": [
            "",
            "DINO",
            "HF Sinclair Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:DOX",
        "d": [
            "amdocs",
            "DOX",
            "Amdocs Limited",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:FNF",
        "d": [
            "fidelity",
            "FNF",
            "FNF Group of Fidelity National Financial, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AGL",
        "d": [
            "agilon-health",
            "AGL",
            "agilon health, inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NWS",
        "d": [
            "news-corporation",
            "NWS",
            "News Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:HAS",
        "d": [
            "hasbro",
            "HAS",
            "Hasbro, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:RCM",
        "d": [
            "r1-rcm",
            "RCM",
            "R1 RCM Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ROKU",
        "d": [
            "roku",
            "ROKU",
            "Roku, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:VST",
        "d": [
            "vistra-energy",
            "VST",
            "Vistra Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ALLY",
        "d": [
            "ally",
            "ALLY",
            "Ally Financial Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:HSIC",
        "d": [
            "henry-schein",
            "HSIC",
            "Henry Schein, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BHVN",
        "d": [
            "biohaven-pharmaceutical",
            "BHVN",
            "Biohaven Pharmaceutical Holding Company Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ACM",
        "d": [
            "aecom",
            "ACM",
            "AECOM",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:QRVO",
        "d": [
            "qorvo",
            "QRVO",
            "Qorvo, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SCI",
        "d": [
            "service-international",
            "SCI",
            "Service Corporation International",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MMP",
        "d": [
            "magellanlp",
            "MMP",
            "Magellan Midstream Partners L.P. Limited Partnership",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:WRK",
        "d": [
            "westrock",
            "WRK",
            "Westrock Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CMA",
        "d": [
            "comerica",
            "CMA",
            "Comerica Incorporated",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NBIX",
        "d": [
            "neurocrine-biosciences",
            "NBIX",
            "Neurocrine Biosciences, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:WSM",
        "d": [
            "williams-sonoma",
            "WSM",
            "Williams-Sonoma, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BURL",
        "d": [
            "burlington",
            "BURL",
            "Burlington Stores, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CDAY",
        "d": [
            "ceridian-hcm",
            "CDAY",
            "Ceridian HCM Holding Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:WOLF",
        "d": [
            "wolfspeed",
            "WOLF",
            "Wolfspeed, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CZR",
        "d": [
            "caesars",
            "CZR",
            "Caesars Entertainment, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BKI",
        "d": [
            "black-knight",
            "BKI",
            "Black Knight, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NLSN",
        "d": [
            "nielsen-hldgs-plc",
            "NLSN",
            "Nielsen N.V.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:FFIV",
        "d": [
            "f5-network",
            "FFIV",
            "F5, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:DISH",
        "d": [
            "dish-network",
            "DISH",
            "DISH Network Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:EWBC",
        "d": [
            "east-west-bancorp",
            "EWBC",
            "East West Bancorp, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PHM",
        "d": [
            "pulte-group",
            "PHM",
            "PulteGroup, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:JAZZ",
        "d": [
            "jazz-pharmaceuticals",
            "JAZZ",
            "Jazz Pharmaceuticals plc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CLF",
        "d": [
            "cleveland-cliffs",
            "CLF",
            "Cleveland-Cliffs Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:OLPX",
        "d": [
            "olaplex",
            "OLPX",
            "Olaplex Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SRPT",
        "d": [
            "sarepta-therapeutics",
            "SRPT",
            "Sarepta Therapeutics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:RCL",
        "d": [
            "royal-caribbean-cruises",
            "RCL",
            "D/B/A Royal Caribbean Cruises Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:H",
        "d": [
            "hyatt-hotels",
            "H",
            "Hyatt Hotels Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BJ",
        "d": [
            "bjs-whsl-club-hldgs",
            "BJ",
            "BJ's Wholesale Club Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ZEN",
        "d": [
            "zendesk",
            "ZEN",
            "Zendesk, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SWAV",
        "d": [
            "shockwave-medical",
            "SWAV",
            "ShockWave Medical, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:AAL",
        "d": [
            "american-airlines-group",
            "AAL",
            "American Airlines Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:GTLB",
        "d": [
            "gitlab",
            "GTLB",
            "GitLab Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AOS",
        "d": [
            "smith-a-o",
            "AOS",
            "A.O. Smith Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:AFRM",
        "d": [
            "affirm",
            "AFRM",
            "Affirm Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ARMK",
        "d": [
            "aramark",
            "ARMK",
            "Aramark",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:WSC",
        "d": [
            "willscot-mobile-mini",
            "WSC",
            "WillScot Mobile Mini Holdings Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:FND",
        "d": [
            "floor-and-decor",
            "FND",
            "Floor & Decor Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BWA",
        "d": [
            "borg-warner",
            "BWA",
            "BorgWarner Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:BRKR",
        "d": [
            "bruker",
            "BRKR",
            "Bruker Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ELAN",
        "d": [
            "elanco-animal-health",
            "ELAN",
            "Elanco Animal Health Incorporated",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NRG",
        "d": [
            "nrg-energy",
            "NRG",
            "NRG Energy, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:DBX",
        "d": [
            "dropbox",
            "DBX",
            "Dropbox, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:HTZ",
        "d": [
            "hertz",
            "HTZ",
            "Hertz Global Holdings, Inc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:JNPR",
        "d": [
            "juniper-networks",
            "JNPR",
            "Juniper Networks, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:Z",
        "d": [
            "zillow-group",
            "Z",
            "Zillow Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AA",
        "d": [
            "alcoa",
            "AA",
            "Alcoa Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TOST",
        "d": [
            "toast",
            "TOST",
            "Toast, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:KNX",
        "d": [
            "knight-swift",
            "KNX",
            "Knight-Swift Transportation Holdings Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:HOOD",
        "d": [
            "robinhood",
            "HOOD",
            "Robinhood Markets, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CAR",
        "d": [
            "avis-budget-group",
            "CAR",
            "Avis Budget Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ALLE",
        "d": [
            "allegion-plc",
            "ALLE",
            "Allegion plc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:G",
        "d": [
            "genpact",
            "G",
            "Genpact Limited",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:WHR",
        "d": [
            "whirlpool",
            "WHR",
            "Whirlpool Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:DLO",
        "d": [
            "dlocal",
            "DLO",
            "DLocal Limited",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PSTG",
        "d": [
            "pure-storage",
            "PSTG",
            "Pure Storage, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DVA",
        "d": [
            "davita",
            "DVA",
            "DaVita Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:LEA",
        "d": [
            "lear",
            "LEA",
            "Lear Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PNW",
        "d": [
            "pinnacle-west-capital",
            "PNW",
            "Pinnacle West Capital Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:RHI",
        "d": [
            "robert-half-international",
            "RHI",
            "Robert Half International Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CLVT",
        "d": [
            "",
            "CLVT",
            "Clarivate Plc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PCOR",
        "d": [
            "procore",
            "PCOR",
            "Procore Technologies, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:RRC",
        "d": [
            "range-resources",
            "RRC",
            "Range Resources Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:LSCC",
        "d": [
            "lattice-semiconductor",
            "LSCC",
            "Lattice Semiconductor Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:FBHS",
        "d": [
            "fortune-brands-home-and-security",
            "FBHS",
            "Fortune Brands Home & Security, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:IOT",
        "d": [
            "samsara",
            "IOT",
            "Samsara Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MASI",
        "d": [
            "masimo",
            "MASI",
            "Masimo Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:UGI",
        "d": [
            "ugi",
            "UGI",
            "UGI Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SWCH",
        "d": [
            "switch",
            "SWCH",
            "Switch, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:WAL",
        "d": [
            "western-alliance-bancorp",
            "WAL",
            "Western Alliance Bancorporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:OC",
        "d": [
            "owens-corning",
            "OC",
            "Owens Corning Inc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TPR",
        "d": [
            "tapestry",
            "TPR",
            "Tapestry, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NWL",
        "d": [
            "newell-brands",
            "NWL",
            "Newell Brands Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ZION",
        "d": [
            "zions-bancorporation",
            "ZION",
            "Zions Bancorporation N.A.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SEE",
        "d": [
            "sealed-air",
            "SEE",
            "Sealed Air Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:WBS",
        "d": [
            "webster-financial",
            "WBS",
            "Webster Financial Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:OGE",
        "d": [
            "oge-energy",
            "OGE",
            "OGE Energy Corp",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BBWI",
        "d": [
            "bath-and-body-works",
            "BBWI",
            "Bath & Body Works, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:IVZ",
        "d": [
            "invesco",
            "IVZ",
            "Invesco Ltd",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AVLR",
        "d": [
            "avalara",
            "AVLR",
            "Avalara, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CFLT",
        "d": [
            "confluent",
            "CFLT",
            "Confluent, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NVCR",
        "d": [
            "novocure",
            "NVCR",
            "NovoCure Limited",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:JBL",
        "d": [
            "jabil",
            "JBL",
            "Jabil Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PNR",
        "d": [
            "pentair",
            "PNR",
            "Pentair plc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:LNC",
        "d": [
            "lincoln-national",
            "LNC",
            "Lincoln National Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:OGN",
        "d": [
            "organon-and-co",
            "OGN",
            "Organon & Co.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MAT",
        "d": [
            "mattel",
            "MAT",
            "Mattel, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AGCO",
        "d": [
            "agco",
            "AGCO",
            "AGCO Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CGNX",
        "d": [
            "cognex",
            "CGNX",
            "Cognex Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:DKNG",
        "d": [
            "draftkings",
            "DKNG",
            "DraftKings Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:GETY",
        "d": [
            "",
            "GETY",
            "Getty Images Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DKS",
        "d": [
            "dicks-sporting-goods",
            "DKS",
            "Dick's Sporting Goods Inc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PAA",
        "d": [
            "plains-all-american-pipeline-lp",
            "PAA",
            "Plains All American Pipeline, L.P.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:XRAY",
        "d": [
            "dentsply-sirona",
            "XRAY",
            "DENTSPLY SIRONA Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:FLEX",
        "d": [
            "flex",
            "FLEX",
            "Flex Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:FIVN",
        "d": [
            "five9",
            "FIVN",
            "Five9, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CVNA",
        "d": [
            "carvana",
            "CVNA",
            "Carvana Co.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:XM",
        "d": [
            "qualtrics",
            "XM",
            "Qualtrics International Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CHNG",
        "d": [
            "change-healthcare",
            "CHNG",
            "Change Healthcare Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ESTC",
        "d": [
            "elastic-n-v",
            "ESTC",
            "Elastic N.V.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:OLN",
        "d": [
            "olin",
            "OLN",
            "Olin Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CIEN",
        "d": [
            "ciena",
            "CIEN",
            "Ciena Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:JEF",
        "d": [
            "jefferies-financial",
            "JEF",
            "Jefferies Financial Group Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MHK",
        "d": [
            "mohawk-industries",
            "MHK",
            "Mohawk Industries, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SWN",
        "d": [
            "southwestern-energy",
            "SWN",
            "Southwestern Energy Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PFGC",
        "d": [
            "performance-food",
            "PFGC",
            "Performance Food Group Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:EXAS",
        "d": [
            "exact-sciences",
            "EXAS",
            "Exact Sciences Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:FIVE",
        "d": [
            "five-below",
            "FIVE",
            "Five Below, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:WYNN",
        "d": [
            "wynn-resorts",
            "WYNN",
            "Wynn Resorts, Limited",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CWEN",
        "d": [
            "clearway-energy",
            "CWEN",
            "Clearway Energy, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:UNM",
        "d": [
            "unum-group",
            "UNM",
            "Unum Group",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PPC",
        "d": [
            "pilgrims",
            "PPC",
            "Pilgrim's Pride Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:LEVI",
        "d": [
            "levi-strauss-and-co",
            "LEVI",
            "Levi Strauss & Co",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ACHC",
        "d": [
            "acadia-healthcare",
            "ACHC",
            "Acadia Healthcare Company, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BERY",
        "d": [
            "berry-global",
            "BERY",
            "Berry Global Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CELH",
        "d": [
            "celsius-holdings",
            "CELH",
            "Celsius Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:USFD",
        "d": [
            "us-foods",
            "USFD",
            "US Foods Holding Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:RUN",
        "d": [
            "sunrun",
            "RUN",
            "Sunrun Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:OSH",
        "d": [
            "oak-street-health",
            "OSH",
            "Oak Street Health, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:S",
        "d": [
            "sentinelone",
            "S",
            "SentinelOne, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:KBR",
        "d": [
            "kbr",
            "KBR",
            "KBR, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ONON",
        "d": [
            "on-holding",
            "ONON",
            "On Holding AG",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:IAC",
        "d": [
            "iac-interactivecorp",
            "IAC",
            "IAC/InterActiveCorp",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DOCS",
        "d": [
            "doximity",
            "DOCS",
            "Doximity, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:GPK",
        "d": [
            "graphic-packaging",
            "GPK",
            "Graphic Packaging Holding Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ORI",
        "d": [
            "old-republic-international",
            "ORI",
            "Old Republic International Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SYNH",
        "d": [
            "syneos-health",
            "SYNH",
            "Syneos Health, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NOV",
        "d": [
            "national-oilwell-varco",
            "NOV",
            "NOV Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:HCP",
        "d": [
            "hashicorp",
            "HCP",
            "HashiCorp, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NEP",
        "d": [
            "nextera-energy",
            "NEP",
            "NextEra Energy Partners, LP",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BROS",
        "d": [
            "dutch-bros",
            "BROS",
            "Dutch Bros Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ALV",
        "d": [
            "autoliv",
            "ALV",
            "Autoliv, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CPRI",
        "d": [
            "capri-holdings",
            "CPRI",
            "Capri Holdings Limited",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PII",
        "d": [
            "polaris",
            "PII",
            "Polaris Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ST",
        "d": [
            "sensata-technologies-holding-plc",
            "ST",
            "Sensata Technologies Holding plc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:RH",
        "d": [
            "rh",
            "RH",
            "RH",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:THC",
        "d": [
            "tenet-healthcare",
            "THC",
            "Tenet Healthcare Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DNB",
        "d": [
            "dun-and-bradstreet",
            "DNB",
            "Dun & Bradstreet Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:RGLD",
        "d": [
            "royal-gold",
            "RGLD",
            "Royal Gold, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:EXEL",
        "d": [
            "exelixis",
            "EXEL",
            "Exelixis, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PLNT",
        "d": [
            "planet-fitness",
            "PLNT",
            "Planet Fitness, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PB",
        "d": [
            "prosperity-bancshares",
            "PB",
            "Prosperity Bancshares, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:APLS",
        "d": [
            "apellis-pharmaceuticals",
            "APLS",
            "Apellis Pharmaceuticals, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AN",
        "d": [
            "autonation",
            "AN",
            "AutoNation, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SOFI",
        "d": [
            "sofi",
            "SOFI",
            "SoFi Technologies, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:BMBL",
        "d": [
            "bumble",
            "BMBL",
            "Bumble Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ADT",
        "d": [
            "adt",
            "ADT",
            "ADT Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MP",
        "d": [
            "mp-materials",
            "MP",
            "MP Materials Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:RL",
        "d": [
            "ralph-lauren",
            "RL",
            "Ralph Lauren Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:IIVI",
        "d": [
            "ii-vi",
            "IIVI",
            "II-VI Incorporated",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:LYFT",
        "d": [
            "lyft",
            "LYFT",
            "Lyft, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NVST",
        "d": [
            "envista-holdings",
            "NVST",
            "Envista Holdings Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:GMED",
        "d": [
            "globus-med",
            "GMED",
            "Globus Medical, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:HRB",
        "d": [
            "block-h-and-r",
            "HRB",
            "H&R Block, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:W",
        "d": [
            "wayfair",
            "W",
            "Wayfair Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SF",
        "d": [
            "stifel-financial",
            "SF",
            "Stifel Financial Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MTDR",
        "d": [
            "matador-resources-company",
            "MTDR",
            "Matador Resources Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:GNTX",
        "d": [
            "gentex",
            "GNTX",
            "Gentex Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MRVI",
        "d": [
            "maravai-lifesciences",
            "MRVI",
            "Maravai LifeSciences Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:XPO",
        "d": [
            "xpo-logistics",
            "XPO",
            "XPO Logistics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NFG",
        "d": [
            "national-fuel-gas",
            "NFG",
            "National Fuel Gas Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:FYBR",
        "d": [
            "frontier-communications",
            "FYBR",
            "Frontier Communications Parent, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MNDY",
        "d": [
            "monday-com",
            "MNDY",
            "monday.com Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:UWMC",
        "d": [
            "uwm-holdings",
            "UWMC",
            "UWM Holdings Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:OPCH",
        "d": [
            "option-care",
            "OPCH",
            "Option Care Health, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:FSK",
        "d": [
            "",
            "FSK",
            "FS KKR Capital Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:IONS",
        "d": [
            "ionis-pharmaceuticals",
            "IONS",
            "Ionis Pharmaceuticals, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SHLX",
        "d": [
            "shell",
            "SHLX",
            "Shell Midstream Partners, L.P.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:WU",
        "d": [
            "western-union-company",
            "WU",
            "Western Union Company (The)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ZIM",
        "d": [
            "zim-integrated-shipping",
            "ZIM",
            "ZIM Integrated Shipping Services Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TREX",
        "d": [
            "trex-company",
            "TREX",
            "Trex Company, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:LITE",
        "d": [
            "lumentum-hldgs",
            "LITE",
            "Lumentum Holdings Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:WH",
        "d": [
            "wyndham-hotels",
            "WH",
            "Wyndham Hotels & Resorts, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:HUN",
        "d": [
            "huntsman",
            "HUN",
            "Huntsman Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:COTY",
        "d": [
            "coty",
            "COTY",
            "Coty Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:TXRH",
        "d": [
            "texas-roadhouse",
            "TXRH",
            "Texas Roadhouse, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MTZ",
        "d": [
            "mastec",
            "MTZ",
            "MasTec, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SAIL",
        "d": [
            "sailpoint-technologies-holdings",
            "SAIL",
            "SailPoint Technologies Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MKSI",
        "d": [
            "mks-instruments",
            "MKSI",
            "MKS Instruments, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MDU",
        "d": [
            "mdu-resources",
            "MDU",
            "MDU Resources Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BC",
        "d": [
            "brunswick",
            "BC",
            "Brunswick Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BYD",
        "d": [
            "boyd-gaming",
            "BYD",
            "Boyd Gaming Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:VLY",
        "d": [
            "valley-national-bancorp",
            "VLY",
            "Valley National Bancorp",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:VOYA",
        "d": [
            "voya-financial",
            "VOYA",
            "Voya Financial, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:HALO",
        "d": [
            "halozyme-therapeutics",
            "HALO",
            "Halozyme Therapeutics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CCCS",
        "d": [
            "",
            "CCCS",
            "CCC Intelligent Solutions Holdings Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SKX",
        "d": [
            "skechers-usa",
            "SKX",
            "Skechers U.S.A., Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DXC",
        "d": [
            "dxc-technology-company",
            "DXC",
            "DXC Technology Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CRSP",
        "d": [
            "crispr-therapeutics-ag",
            "CRSP",
            "CRISPR Therapeutics AG",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:FLO",
        "d": [
            "flowers-foods",
            "FLO",
            "Flowers Foods, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:BPOP",
        "d": [
            "popular",
            "BPOP",
            "Popular, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SNV",
        "d": [
            "synovus",
            "SNV",
            "Synovus Financial Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:QDEL",
        "d": [
            "quidel",
            "QDEL",
            "QuidelOrtho Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ALK",
        "d": [
            "alaska-air",
            "ALK",
            "Alaska Air Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:FAF",
        "d": [
            "first-american",
            "FAF",
            "First American Corporation (New)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CERE",
        "d": [
            "cerevel-therapeutics",
            "CERE",
            "Cerevel Therapeutics Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NVT",
        "d": [
            "nvent-electric",
            "NVT",
            "nVent Electric plc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MQ",
        "d": [
            "marqeta",
            "MQ",
            "Marqeta, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TDOC",
        "d": [
            "teladoc-health",
            "TDOC",
            "Teladoc Health, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:X",
        "d": [
            "united-states-steel",
            "X",
            "United States Steel Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PENN",
        "d": [
            "penn-national-gaming",
            "PENN",
            "PENN Entertainment, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:COUP",
        "d": [
            "coupa",
            "COUP",
            "Coupa Software Incorporated",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PRGO",
        "d": [
            "perrigo",
            "PRGO",
            "Perrigo Company plc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:HOG",
        "d": [
            "harley-davidson",
            "HOG",
            "Harley-Davidson, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AXTA",
        "d": [
            "axalta-coating-systems",
            "AXTA",
            "Axalta Coating Systems Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PDCE",
        "d": [
            "pdc-energy",
            "PDCE",
            "PDC Energy, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ITCI",
        "d": [
            "intra-celluar-therapies",
            "ITCI",
            "Intra-Cellular Therapies Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:LNTH",
        "d": [
            "lantheus",
            "LNTH",
            "Lantheus Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TMX",
        "d": [
            "terminix",
            "TMX",
            "Terminix Global Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:GXO",
        "d": [
            "gxo",
            "GXO",
            "GXO Logistics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:UA",
        "d": [
            "under-armour",
            "UA",
            "Under Armour, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BLCO",
        "d": [
            "bausch-and-lomb-corp",
            "BLCO",
            "Bausch + Lomb Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:OSK",
        "d": [
            "oshkosh",
            "OSK",
            "Oshkosh Corporation (Holding Company)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TOL",
        "d": [
            "toll-bros",
            "TOL",
            "Toll Brothers, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SHC",
        "d": [
            "",
            "SHC",
            "Sotera Health Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DTM",
        "d": [
            "dt-midstream",
            "DTM",
            "DT Midstream, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MNDT",
        "d": [
            "mandiant",
            "MNDT",
            "Mandiant, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:WWE",
        "d": [
            "world-wrestling-entertainment",
            "WWE",
            "World Wrestling Entertainment, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:LEG",
        "d": [
            "legget-platt",
            "LEG",
            "Leggett & Platt, Incorporated",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CC",
        "d": [
            "the-chemours",
            "CC",
            "Chemours Company (The)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ORCC",
        "d": [
            "owl-rock-capital",
            "ORCC",
            "Owl Rock Capital Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SGFY",
        "d": [
            "signify-health",
            "SGFY",
            "Signify Health, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CHPT",
        "d": [
            "chargepoint",
            "CHPT",
            "ChargePoint Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:EHC",
        "d": [
            "encompass-health",
            "EHC",
            "Encompass Health Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DNA",
        "d": [
            "ginkgo-bioworks",
            "DNA",
            "Ginkgo Bioworks Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:TSEM",
        "d": [
            "tower-semiconductor",
            "TSEM",
            "Tower Semiconductor Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AMN",
        "d": [
            "amn-healthcare-services",
            "AMN",
            "AMN Healthcare Services Inc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:UBSI",
        "d": [
            "united-bankshares",
            "UBSI",
            "United Bankshares, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NATI",
        "d": [
            "national-instruments",
            "NATI",
            "National Instruments Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:TXG",
        "d": [
            "10x-genomics",
            "TXG",
            "10x Genomics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ZWS",
        "d": [
            "zurn-water-solutions",
            "ZWS",
            "Zurn Elkay Water Solutions Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:HQY",
        "d": [
            "healthequity",
            "HQY",
            "HealthEquity, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NYT",
        "d": [
            "new-york-times",
            "NYT",
            "New York Times Company (The)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MUR",
        "d": [
            "murphy-oil",
            "MUR",
            "Murphy Oil Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BWXT",
        "d": [
            "bwx-technologies",
            "BWXT",
            "BWX Technologies, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:GH",
        "d": [
            "guardant-health",
            "GH",
            "Guardant Health, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ORA",
        "d": [
            "ormat-technologies",
            "ORA",
            "Ormat Technologies, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:QS",
        "d": [
            "quantumscape",
            "QS",
            "QuantumScape Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ONB",
        "d": [
            "old-national-bancorp-indiana",
            "ONB",
            "Old National Bancorp",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:VVV",
        "d": [
            "valvoline",
            "VVV",
            "Valvoline Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CIVI",
        "d": [
            "civitas-resources",
            "CIVI",
            "Civitas Resources, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MSPR",
        "d": [
            "",
            "MSPR",
            "MSP Recovery, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:AMKR",
        "d": [
            "amkor-technology",
            "AMKR",
            "Amkor Technology, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NCLH",
        "d": [
            "norwegian-cruise-line",
            "NCLH",
            "Norwegian Cruise Line Holdings Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ATUS",
        "d": [
            "altice-usa",
            "ATUS",
            "Altice USA, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:VNOM",
        "d": [
            "viper-energy-partners",
            "VNOM",
            "Viper Energy Partners LP",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:HOMB",
        "d": [
            "home-bancshares",
            "HOMB",
            "Home BancShares, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PAGS",
        "d": [
            "pagseguro-digital",
            "PAGS",
            "PagSeguro Digital Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CMC",
        "d": [
            "commercial-metals",
            "CMC",
            "Commercial Metals Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:OZK",
        "d": [
            "bank-ozk",
            "OZK",
            "Bank OZK",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SLGN",
        "d": [
            "silgan-holdings",
            "SLGN",
            "Silgan Holdings Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NTRA",
        "d": [
            "natera",
            "NTRA",
            "Natera, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DOCN",
        "d": [
            "digitalocean",
            "DOCN",
            "DigitalOcean Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CADE",
        "d": [
            "cadence-bancorporation",
            "CADE",
            "Cadence Bank",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ARWR",
        "d": [
            "arrowhead-pharmaceuticals",
            "ARWR",
            "Arrowhead Pharmaceuticals, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NYCB",
        "d": [
            "new-york-community",
            "NYCB",
            "New York Community Bancorp, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PLTK",
        "d": [
            "playtika",
            "PLTK",
            "Playtika Holding Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:IAA",
        "d": [
            "iaa",
            "IAA",
            "IAA, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:LPX",
        "d": [
            "louisiana-pacific",
            "LPX",
            "Louisiana-Pacific Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:POR",
        "d": [
            "portland-general-electric",
            "POR",
            "Portland General Electric Co",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MGY",
        "d": [
            "magnolia-oil-and-gas-corporation",
            "MGY",
            "Magnolia Oil & Gas Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:LTHM",
        "d": [
            "livent",
            "LTHM",
            "Livent Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:M",
        "d": [
            "macy-s",
            "M",
            "Macy's Inc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TGNA",
        "d": [
            "tegna",
            "TGNA",
            "TEGNA Inc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AM",
        "d": [
            "antero-midstream",
            "AM",
            "Antero Midstream Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:TENB",
        "d": [
            "tenable-holdings",
            "TENB",
            "Tenable Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ALGM",
        "d": [
            "allegro-microsystems",
            "ALGM",
            "Allegro MicroSystems, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TPX",
        "d": [
            "tempur-sealy-international",
            "TPX",
            "Tempur Sealy International, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:THO",
        "d": [
            "thor-industries",
            "THO",
            "Thor Industries, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ASAN",
        "d": [
            "asana",
            "ASAN",
            "Asana, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NCR",
        "d": [
            "ncr",
            "NCR",
            "NCR Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ESI",
        "d": [
            "element-solutions",
            "ESI",
            "Element Solutions Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AQUA",
        "d": [
            "evoqua-water-technologies",
            "AQUA",
            "Evoqua Water Technologies Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BFAM",
        "d": [
            "bright-horizons",
            "BFAM",
            "Bright Horizons Family Solutions Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SM",
        "d": [
            "sm-energy-company",
            "SM",
            "SM Energy Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:RNG",
        "d": [
            "ringcentral",
            "RNG",
            "RingCentral, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:DNLI",
        "d": [
            "denali-therapeutics-inc",
            "DNLI",
            "Denali Therapeutics Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MRTX",
        "d": [
            "mirati-therapeutics",
            "MRTX",
            "Mirati Therapeutics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SMAR",
        "d": [
            "smartsheet",
            "SMAR",
            "Smartsheet Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ALIT",
        "d": [
            "alight",
            "ALIT",
            "Alight, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ENLC",
        "d": [
            "enlink-midstream",
            "ENLC",
            "EnLink Midstream, LLC",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NTLA",
        "d": [
            "intellia-therapeutics",
            "NTLA",
            "Intellia Therapeutics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:VRT",
        "d": [
            "vertiv-holdings",
            "VRT",
            "Vertiv Holdings, LLC",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:WEN",
        "d": [
            "wendys-company",
            "WEN",
            "Wendy's Company (The)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CYTK",
        "d": [
            "cytokinetics",
            "CYTK",
            "Cytokinetics, Incorporated",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:OMF",
        "d": [
            "onemain",
            "OMF",
            "OneMain Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MTG",
        "d": [
            "mgic-investment",
            "MTG",
            "MGIC Investment Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BE",
        "d": [
            "bloom-energy",
            "BE",
            "Bloom Energy Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:FIBK",
        "d": [
            "first-interstate-bancsystem",
            "FIBK",
            "First Interstate BancSystem, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:AVT",
        "d": [
            "avnet",
            "AVT",
            "Avnet, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:FLS",
        "d": [
            "flowserve",
            "FLS",
            "Flowserve Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NEWR",
        "d": [
            "new-relic",
            "NEWR",
            "New Relic, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NARI",
        "d": [
            "inari-medical",
            "NARI",
            "Inari Medical, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:FRSH",
        "d": [
            "freshworks",
            "FRSH",
            "Freshworks Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:HP",
        "d": [
            "helmerich-payne",
            "HP",
            "Helmerich & Payne, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:IS",
        "d": [
            "ironsource",
            "IS",
            "ironSource Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:GBT",
        "d": [
            "global-blood-therapeutics",
            "GBT",
            "Global Blood Therapeutics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CROX",
        "d": [
            "crocs",
            "CROX",
            "Crocs, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:UNVR",
        "d": [
            "univar",
            "UNVR",
            "Univar Solutions Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ATC",
        "d": [
            "",
            "ATC",
            "Atotech Limited",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:GO",
        "d": [
            "grocery-outlet",
            "GO",
            "Grocery Outlet Holding Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BOX",
        "d": [
            "box",
            "BOX",
            "Box, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CHX",
        "d": [
            "championx",
            "CHX",
            "ChampionX Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AYX",
        "d": [
            "alteryx",
            "AYX",
            "Alteryx, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SPWR",
        "d": [
            "sunpower",
            "SPWR",
            "SunPower Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:FNB",
        "d": [
            "fnb-pa",
            "FNB",
            "F.N.B. Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:GLBE",
        "d": [
            "global-e-online",
            "GLBE",
            "Global-E Online Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:IGT",
        "d": [
            "international-game-technology",
            "IGT",
            "International Game Technology",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SMG",
        "d": [
            "scotts-miracle-gro-company",
            "SMG",
            "Scotts Miracle-Gro Company (The)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:VIRT",
        "d": [
            "virtu-financial",
            "VIRT",
            "Virtu Financial, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DV",
        "d": [
            "doubleverify",
            "DV",
            "DoubleVerify Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ALKS",
        "d": [
            "alkermes",
            "ALKS",
            "Alkermes plc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:LAZ",
        "d": [
            "lazard",
            "LAZ",
            "Lazard LTD. Lazard, LTD.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:BEAM",
        "d": [
            "beam-therapeutics",
            "BEAM",
            "Beam Therapeutics Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PVH",
        "d": [
            "pvh",
            "PVH",
            "PVH Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:JHG",
        "d": [
            "janus-henderson",
            "JHG",
            "Janus Henderson Group plc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SJI",
        "d": [
            "south-jersey-industries",
            "SJI",
            "South Jersey Industries, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AL",
        "d": [
            "air-lease",
            "AL",
            "Air Lease Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:BPMC",
        "d": [
            "blueprint-medicines",
            "BPMC",
            "Blueprint Medicines Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PRVA",
        "d": [
            "",
            "PRVA",
            "Privia Health Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ELY",
        "d": [
            "callaway-golf-company",
            "ELY",
            "Callaway Golf Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:BECN",
        "d": [
            "beacon-roofing-supply",
            "BECN",
            "Beacon Roofing Supply, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:APG",
        "d": [
            "api-group",
            "APG",
            "APi Group Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:YOU",
        "d": [
            "clear-secure",
            "YOU",
            "Clear Secure, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:WOOF",
        "d": [
            "petco-health-and-wellness",
            "WOOF",
            "Petco Health and Wellness Company, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DEN",
        "d": [
            "denbury",
            "DEN",
            "Denbury Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:WING",
        "d": [
            "wingstop",
            "WING",
            "Wingstop Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AMBP",
        "d": [
            "",
            "AMBP",
            "Ardagh Metal Packaging S.A.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:WIX",
        "d": [
            "wix",
            "WIX",
            "Wix.com Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SHLS",
        "d": [
            "shoals-technologies-group",
            "SHLS",
            "Shoals Technologies Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:HBI",
        "d": [
            "hanesbrands",
            "HBI",
            "Hanesbrands Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:UMPQ",
        "d": [
            "umpqua",
            "UMPQ",
            "Umpqua Holdings Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:FOUR",
        "d": [
            "shift4-payments",
            "FOUR",
            "Shift4 Payments, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:OLLI",
        "d": [
            "ollies-bargain-outlet",
            "OLLI",
            "Ollie's Bargain Outlet Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:KSS",
        "d": [
            "kohls",
            "KSS",
            "Kohl's Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:DUOL",
        "d": [
            "duolingo",
            "DUOL",
            "Duolingo, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PGNY",
        "d": [
            "progyny",
            "PGNY",
            "Progyny, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:RDN",
        "d": [
            "radian",
            "RDN",
            "Radian Group Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:VNT",
        "d": [
            "vontier",
            "VNT",
            "Vontier Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SEAS",
        "d": [
            "seaworld-entertainment",
            "SEAS",
            "SeaWorld Entertainment, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:FTI",
        "d": [
            "technipfmc",
            "FTI",
            "TechnipFMC plc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:FLNC",
        "d": [
            "fluence-energy",
            "FLNC",
            "Fluence Energy, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PBF",
        "d": [
            "pbf-energy",
            "PBF",
            "PBF Energy Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SLM",
        "d": [
            "slm",
            "SLM",
            "SLM Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:VIR",
        "d": [
            "vir-biotechnology",
            "VIR",
            "Vir Biotechnology, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ETRN",
        "d": [
            "equitrans-midstream",
            "ETRN",
            "Equitrans Midstream Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:GT",
        "d": [
            "goodyear-tire-and-rubber",
            "GT",
            "The Goodyear Tire & Rubber Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CRK",
        "d": [
            "comstock-resources",
            "CRK",
            "Comstock Resources, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NTNX",
        "d": [
            "nutanix",
            "NTNX",
            "Nutanix, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:RPD",
        "d": [
            "rapid7",
            "RPD",
            "Rapid7, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:YETI",
        "d": [
            "yeti",
            "YETI",
            "YETI Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:TPTX",
        "d": [
            "turning-point-therapeutics",
            "TPTX",
            "Turning Point Therapeutics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PTON",
        "d": [
            "peloton-interactive-inc",
            "PTON",
            "Peloton Interactive, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CVBF",
        "d": [
            "cvb-financial",
            "CVBF",
            "CVB Financial Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CALX",
        "d": [
            "calix",
            "CALX",
            "Calix, Inc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ALSN",
        "d": [
            "allison-transmission",
            "ALSN",
            "Allison Transmission Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:JOBY",
        "d": [
            "joby-aviation",
            "JOBY",
            "Joby Aviation, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TNL",
        "d": [
            "travel-leisure-co",
            "TNL",
            "Travel  Leisure Co.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ATI",
        "d": [
            "allegheny-technologies",
            "ATI",
            "ATI Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PTCT",
        "d": [
            "ptc-therapeutics",
            "PTCT",
            "PTC Therapeutics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MSTR",
        "d": [
            "microstrategy",
            "MSTR",
            "MicroStrategy Incorporated",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TDC",
        "d": [
            "teradata",
            "TDC",
            "Teradata Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:VAL",
        "d": [
            "valaris",
            "VAL",
            "Valaris Limited",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ASO",
        "d": [
            "academy-sports-and-outdoors",
            "ASO",
            "Academy Sports and Outdoors, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CCXI",
        "d": [
            "chemocentryx",
            "CCXI",
            "ChemoCentryx, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:RARE",
        "d": [
            "ultragenyx-pharmaceutical",
            "RARE",
            "Ultragenyx Pharmaceutical Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SUM",
        "d": [
            "summit-materials",
            "SUM",
            "Summit Materials, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MCW",
        "d": [
            "mister-car-wash",
            "MCW",
            "Mister Car Wash, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:JWN",
        "d": [
            "nordstrom",
            "JWN",
            "Nordstrom, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:FLR",
        "d": [
            "fluor",
            "FLR",
            "Fluor Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:DH",
        "d": [
            "definitive-healthcare",
            "DH",
            "Definitive Healthcare Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CWK",
        "d": [
            "cushman-and-wakefield",
            "CWK",
            "Cushman & Wakefield plc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:GPS",
        "d": [
            "gap",
            "GPS",
            "Gap, Inc. (The)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SEM",
        "d": [
            "select-medical-holdings-corp",
            "SEM",
            "Select Medical Holdings Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:TNDM",
        "d": [
            "tandem-diabetes-care",
            "TNDM",
            "Tandem Diabetes Care, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:STNE",
        "d": [
            "stoneco",
            "STNE",
            "StoneCo Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:BHF",
        "d": [
            "brighthouse-finl",
            "BHF",
            "Brighthouse Financial, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:TRIP",
        "d": [
            "tripadvisor",
            "TRIP",
            "TripAdvisor, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ATCO",
        "d": [
            "atlas",
            "ATCO",
            "Atlas Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DBRG",
        "d": [
            "",
            "DBRG",
            "DigitalBridge Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CRC",
        "d": [
            "california-resources-corporation",
            "CRC",
            "California Resources Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:AXNX",
        "d": [
            "axonics",
            "AXNX",
            "Axonics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:FOLD",
        "d": [
            "amicus-therapeutics",
            "FOLD",
            "Amicus Therapeutics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:FTCH",
        "d": [
            "farfetch-ltd",
            "FTCH",
            "Farfetch Limited",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:VIAV",
        "d": [
            "viavi-solutions",
            "VIAV",
            "Viavi Solutions Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:FHB",
        "d": [
            "first-hawaiian",
            "FHB",
            "First Hawaiian, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:WE",
        "d": [
            "wework",
            "WE",
            "WeWork Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SSRM",
        "d": [
            "ssr-mining",
            "SSRM",
            "SSR Mining Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:OPEN",
        "d": [
            "opendoor",
            "OPEN",
            "Opendoor Technologies Inc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PACW",
        "d": [
            "pacwest-bancorp",
            "PACW",
            "PacWest Bancorp",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SPT",
        "d": [
            "sprout-social",
            "SPT",
            "Sprout Social, Inc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SMPL",
        "d": [
            "simply-good-foods-company",
            "SMPL",
            "The Simply Good Foods Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SMR",
        "d": [
            "",
            "SMR",
            "NuScale Power Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BRBR",
        "d": [
            "",
            "BRBR",
            "BellRing Brands, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AJRD",
        "d": [
            "aerojet-rocketdyne-hldgs",
            "AJRD",
            "Aerojet Rocketdyne Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SFM",
        "d": [
            "sprouts-farmers-markets",
            "SFM",
            "Sprouts Farmers Market, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:INSM",
        "d": [
            "insmed",
            "INSM",
            "Insmed, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ONEM",
        "d": [
            "one-medical",
            "ONEM",
            "1Life Healthcare, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CVI",
        "d": [
            "cvr-energy",
            "CVI",
            "CVR Energy Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SMTC",
        "d": [
            "semtech",
            "SMTC",
            "Semtech Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TMHC",
        "d": [
            "taylor-morrison-home",
            "TMHC",
            "Taylor Morrison Home Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ADNT",
        "d": [
            "adient",
            "ADNT",
            "Adient plc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:VRNS",
        "d": [
            "varonis-systems",
            "VRNS",
            "Varonis Systems, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:GDRX",
        "d": [
            "goodrx",
            "GDRX",
            "GoodRx Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:EVH",
        "d": [
            "evolent-health",
            "EVH",
            "Evolent Health, Inc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SI",
        "d": [
            "silvergate-capital",
            "SI",
            "Silvergate Capital Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:KNBE",
        "d": [
            "knowbe4",
            "KNBE",
            "KnowBe4, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:COOP",
        "d": [
            "mr-cooper-group",
            "COOP",
            "Mr. Cooper Group Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SPR",
        "d": [
            "spirit-aerosystems-holdings",
            "SPR",
            "Spirit Aerosystems Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PEGA",
        "d": [
            "pegasystems",
            "PEGA",
            "Pegasystems Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PTEN",
        "d": [
            "patterson-uti-energy",
            "PTEN",
            "Patterson-UTI Energy, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NOVA",
        "d": [
            "sunnova-energy",
            "NOVA",
            "Sunnova Energy International Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BKU",
        "d": [
            "bankunited",
            "BKU",
            "BankUnited, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SFNC",
        "d": [
            "simmons-first-national",
            "SFNC",
            "Simmons First National Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ABCL",
        "d": [
            "abcellera-biologics",
            "ABCL",
            "AbCellera Biologics Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NVAX",
        "d": [
            "novavax",
            "NVAX",
            "Novavax, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:FATE",
        "d": [
            "fate-therapeutics",
            "FATE",
            "Fate Therapeutics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MC",
        "d": [
            "moelis-and-company",
            "MC",
            "Moelis & Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BSM",
        "d": [
            "black-stone-minerals",
            "BSM",
            "Black Stone Minerals, L.P.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:TWNK",
        "d": [
            "hostess-brands",
            "TWNK",
            "Hostess Brands, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NKLA",
        "d": [
            "nikolamotor",
            "NKLA",
            "Nikola Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CNX",
        "d": [
            "cnx-resources-corporation",
            "CNX",
            "CNX Resources Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CRI",
        "d": [
            "carters",
            "CRI",
            "Carter's, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:AHCO",
        "d": [
            "adapthealth",
            "AHCO",
            "AdaptHealth Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ASB",
        "d": [
            "associated-banc-corp",
            "ASB",
            "Associated Banc-Corp",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ANGI",
        "d": [
            "angi-homeservices",
            "ANGI",
            "Angi Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ULCC",
        "d": [
            "frontier",
            "ULCC",
            "Frontier Group Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:FHI",
        "d": [
            "federated-hermes",
            "FHI",
            "Federated Hermes, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AZEK",
        "d": [
            "the-azek-company",
            "AZEK",
            "The AZEK Company Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CORT",
        "d": [
            "corcept-therapeutics",
            "CORT",
            "Corcept Therapeutics Incorporated",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:INMD",
        "d": [
            "inmode",
            "INMD",
            "InMode Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:VSCO",
        "d": [
            "victorias-secret",
            "VSCO",
            "Victorias Secret & Co.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:HRMY",
        "d": [
            "harmony-biosciences",
            "HRMY",
            "Harmony Biosciences Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:LAZR",
        "d": [
            "luminar",
            "LAZR",
            "Luminar Technologies, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PDCO",
        "d": [
            "patterson-companies-inc",
            "PDCO",
            "Patterson Companies, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ACIW",
        "d": [
            "aci-worldwide",
            "ACIW",
            "ACI Worldwide, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SQSP",
        "d": [
            "squarespace",
            "SQSP",
            "Squarespace, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BTU",
        "d": [
            "peabody-energy",
            "BTU",
            "Peabody Energy Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MXL",
        "d": [
            "maxlinear",
            "MXL",
            "MaxLinear, Inc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CVET",
        "d": [
            "covetrus",
            "CVET",
            "Covetrus, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:AUR",
        "d": [
            "aurora-innovation",
            "AUR",
            "Aurora Innovation, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:FBP",
        "d": [
            "first-bancorp-puerto-rico",
            "FBP",
            "First BanCorp. New",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ROIV",
        "d": [
            "roivant-sciences",
            "ROIV",
            "Roivant Sciences Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:FSR",
        "d": [
            "fisker",
            "FSR",
            "Fisker Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ARNC",
        "d": [
            "arconic",
            "ARNC",
            "Arconic Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:VSH",
        "d": [
            "vishay-intertechnology",
            "VSH",
            "Vishay Intertechnology, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CANO",
        "d": [
            "cano-health",
            "CANO",
            "Cano Health, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:RNW",
        "d": [
            "renew-energy-global-plc",
            "RNW",
            "ReNew Energy Global plc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:TWST",
        "d": [
            "twist-bioscience",
            "TWST",
            "Twist Bioscience Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CEQP",
        "d": [
            "crestwood-equity-partners",
            "CEQP",
            "Crestwood Equity Partners LP",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:AAWW",
        "d": [
            "atlas-air-worldwide",
            "AAWW",
            "Atlas Air Worldwide Holdings",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:EQRX",
        "d": [
            "",
            "EQRX",
            "EQRx, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:RMBS",
        "d": [
            "rambus",
            "RMBS",
            "Rambus, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:LESL",
        "d": [
            "leslie-s",
            "LESL",
            "Leslie's, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MPLN",
        "d": [
            "multiplan",
            "MPLN",
            "MultiPlan Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "AMEX:GSAT",
        "d": [
            "globalstar",
            "GSAT",
            "Globalstar, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:KOS",
        "d": [
            "kosmos-energy",
            "KOS",
            "Kosmos Energy Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:FULT",
        "d": [
            "fulton-financial-corp",
            "FULT",
            "Fulton Financial Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SONO",
        "d": [
            "sonos",
            "SONO",
            "Sonos, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:FL",
        "d": [
            "foot-locker",
            "FL",
            "Foot Locker, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ARLP",
        "d": [
            "alliance-resource-partners-lp",
            "ARLP",
            "Alliance Resource Partners, L.P.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:KBH",
        "d": [
            "kb-home",
            "KBH",
            "KB Home",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SIG",
        "d": [
            "signet-jewelers",
            "SIG",
            "Signet Jewelers Limited",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ARRY",
        "d": [
            "array-technologies",
            "ARRY",
            "Array Technologies, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CHGG",
        "d": [
            "chegg",
            "CHGG",
            "Chegg, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:XRX",
        "d": [
            "xerox",
            "XRX",
            "Xerox Holdings Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:JBLU",
        "d": [
            "jetblue",
            "JBLU",
            "JetBlue Airways Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:WERN",
        "d": [
            "werner-enterprises",
            "WERN",
            "Werner Enterprises, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SBLK",
        "d": [
            "star-bulk-carriers",
            "SBLK",
            "Star Bulk Carriers Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SAVE",
        "d": [
            "spirit-airlines",
            "SAVE",
            "Spirit Airlines, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:BCRX",
        "d": [
            "biocryst",
            "BCRX",
            "BioCryst Pharmaceuticals, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:YELP",
        "d": [
            "yelp",
            "YELP",
            "Yelp Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:KLIC",
        "d": [
            "kulicke-and-soffa-industries",
            "KLIC",
            "Kulicke and Soffa Industries, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:OMI",
        "d": [
            "owens-and-minor",
            "OMI",
            "Owens & Minor, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ACAD",
        "d": [
            "acadia-pharmaceuticals",
            "ACAD",
            "ACADIA Pharmaceuticals Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CALM",
        "d": [
            "cal-maine-foods",
            "CALM",
            "Cal-Maine Foods, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:GLNG",
        "d": [
            "golar-lng-limited",
            "GLNG",
            "Golar LNG Limited",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CSIQ",
        "d": [
            "canadian-solar",
            "CSIQ",
            "Canadian Solar Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:UPWK",
        "d": [
            "upwork",
            "UPWK",
            "Upwork Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:FLYW",
        "d": [
            "flywire",
            "FLYW",
            "Flywire Corporation - Voting",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SHOO",
        "d": [
            "madden-steven",
            "SHOO",
            "Steven Madden, Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:EYE",
        "d": [
            "national-vision-holdings",
            "EYE",
            "National Vision Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NUTX",
        "d": [
            "nutex-health",
            "NUTX",
            "Nutex Health Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ETWO",
        "d": [
            "e2open",
            "ETWO",
            "E2open Parent Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:VRRM",
        "d": [
            "verra-mobility",
            "VRRM",
            "Verra Mobility Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:RKLB",
        "d": [
            "rocket-lab",
            "RKLB",
            "Rocket Lab USA, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:LBRT",
        "d": [
            "liberty-oilfield-services",
            "LBRT",
            "Liberty Energy Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:STNG",
        "d": [
            "scorpio-tankers",
            "STNG",
            "Scorpio Tankers Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SAGE",
        "d": [
            "sage-therapeutics",
            "SAGE",
            "Sage Therapeutics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:UPST",
        "d": [
            "upstart",
            "UPST",
            "Upstart Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:KD",
        "d": [
            "kyndryl",
            "KD",
            "Kyndryl Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:JXN",
        "d": [
            "jackson-financial",
            "JXN",
            "Jackson Financial Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:HL",
        "d": [
            "hecla-mining",
            "HL",
            "Hecla Mining Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:HAYW",
        "d": [
            "hayward-holdings",
            "HAYW",
            "Hayward Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:FROG",
        "d": [
            "jfrog",
            "FROG",
            "JFrog Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CWH",
        "d": [
            "camping-world",
            "CWH",
            "Camping World Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SABR",
        "d": [
            "sabre",
            "SABR",
            "Sabre Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:EXPI",
        "d": [
            "exp-world",
            "EXPI",
            "eXp World Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:DNUT",
        "d": [
            "krispy-kreme",
            "DNUT",
            "Krispy Kreme, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MDC",
        "d": [
            "m-d-c-hldgs",
            "MDC",
            "M.D.C. Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PD",
        "d": [
            "pagerduty",
            "PD",
            "PagerDuty, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:EVGO",
        "d": [
            "evgo",
            "EVGO",
            "EVgo Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:COLB",
        "d": [
            "columbia-banking-systems",
            "COLB",
            "Columbia Banking System, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PING",
        "d": [
            "ping-identity",
            "PING",
            "Ping Identity Holding Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CARG",
        "d": [
            "cargurus",
            "CARG",
            "CarGurus, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:RIG",
        "d": [
            "transocean-limited",
            "RIG",
            "Transocean Ltd (Switzerland)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:BYND",
        "d": [
            "beyond-meat",
            "BYND",
            "Beyond Meat, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NAVI",
        "d": [
            "navient",
            "NAVI",
            "Navient Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TROX",
        "d": [
            "tronox",
            "TROX",
            "Tronox Holdings plc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ZIP",
        "d": [
            "ziprecruiter",
            "ZIP",
            "ZipRecruiter, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:STEM",
        "d": [
            "stem",
            "STEM",
            "Stem, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NEOG",
        "d": [
            "neogen",
            "NEOG",
            "Neogen Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ENVX",
        "d": [
            "enovix",
            "ENVX",
            "Enovix Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:FRPT",
        "d": [
            "freshpet",
            "FRPT",
            "Freshpet, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CPE",
        "d": [
            "callon-petroleum",
            "CPE",
            "Callon Petroleum Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DAN",
        "d": [
            "dana-incorporated",
            "DAN",
            "Dana Incorporated",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CRDO",
        "d": [
            "credo-technology-ltd",
            "CRDO",
            "Credo Technology Group Holding Ltd",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:GOGL",
        "d": [
            "golden-ocean-group",
            "GOGL",
            "Golden Ocean Group Limited",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SDGR",
        "d": [
            "schrodinger",
            "SDGR",
            "Schrodinger, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:GNW",
        "d": [
            "genworth-financial",
            "GNW",
            "Genworth Financial Inc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ENR",
        "d": [
            "energizer-holdings",
            "ENR",
            "Energizer Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PAGP",
        "d": [
            "plains-gp",
            "PAGP",
            "Plains GP Holdings, L.P.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AI",
        "d": [
            "c3-ai",
            "AI",
            "C3.ai, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:APPS",
        "d": [
            "digital-turbine",
            "APPS",
            "Digital Turbine, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TRN",
        "d": [
            "trinity-industries",
            "TRN",
            "Trinity Industries, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CNO",
        "d": [
            "cno-financial-group",
            "CNO",
            "CNO Financial Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ALLO",
        "d": [
            "allogene-therapeutics",
            "ALLO",
            "Allogene Therapeutics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:LFG",
        "d": [
            "archaea-energy",
            "LFG",
            "Archaea Energy Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CEIX",
        "d": [
            "consol-energy",
            "CEIX",
            "CONSOL Energy Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:KMT",
        "d": [
            "kennametal",
            "KMT",
            "Kennametal Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NEX",
        "d": [
            "nextier-oilfield",
            "NEX",
            "NexTier Oilfield Solutions Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NOG",
        "d": [
            "northern-oil-and-gas",
            "NOG",
            "Northern Oil and Gas, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:DVAX",
        "d": [
            "dynavax",
            "DVAX",
            "Dynavax Technologies Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:OI",
        "d": [
            "owens-illinois",
            "OI",
            "O-I Glass, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MYGN",
        "d": [
            "myriad-genetics",
            "MYGN",
            "Myriad Genetics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SHAK",
        "d": [
            "shake-shack",
            "SHAK",
            "Shake Shack, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:TLRY",
        "d": [
            "tilray",
            "TLRY",
            "Tilray Brands, Inc. - Class 2",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SIX",
        "d": [
            "six-flags",
            "SIX",
            "Six Flags Entertainment Corporation New",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:DSEY",
        "d": [
            "",
            "DSEY",
            "Diversey Holdings, Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:LZ",
        "d": [
            "legalzoom",
            "LZ",
            "LegalZoom.com, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:RTLR",
        "d": [
            "rattler-midstream-lp",
            "RTLR",
            "Rattler Midstream LP",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:RVMD",
        "d": [
            "revolution-medicines",
            "RVMD",
            "Revolution Medicines, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:TSP",
        "d": [
            "tusimple",
            "TSP",
            "TuSimple Holdings Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:FTDR",
        "d": [
            "frontdoor",
            "FTDR",
            "Frontdoor, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CNK",
        "d": [
            "cinemark",
            "CNK",
            "Cinemark Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:RLAY",
        "d": [
            "",
            "RLAY",
            "Relay Therapeutics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:OLO",
        "d": [
            "olo",
            "OLO",
            "Olo Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:HAIN",
        "d": [
            "hain-celestial",
            "HAIN",
            "The Hain Celestial Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NE",
        "d": [
            "noble-plc",
            "NE",
            "Noble Corporation plc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SKIN",
        "d": [
            "the-beauty-health",
            "SKIN",
            "The Beauty Health Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "AMEX:TELL",
        "d": [
            "tellurian",
            "TELL",
            "Tellurian Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MDRX",
        "d": [
            "allscripts-healthcare-solutions",
            "MDRX",
            "Allscripts Healthcare Solutions, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:KAR",
        "d": [
            "kar-global",
            "KAR",
            "KAR Auction Services, Inc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:GPRE",
        "d": [
            "green-plains",
            "GPRE",
            "Green Plains, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:FIGS",
        "d": [
            "figs",
            "FIGS",
            "FIGS, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:RVLV",
        "d": [
            "revolve",
            "RVLV",
            "Revolve Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:WEBR",
        "d": [
            "weber",
            "WEBR",
            "Weber Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PLAY",
        "d": [
            "dave-and-buster-s-entertainment",
            "PLAY",
            "Dave & Buster's Entertainment, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AEO",
        "d": [
            "american-eagle-outfitters",
            "AEO",
            "American Eagle Outfitters, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ARCH",
        "d": [
            "arch-coal",
            "ARCH",
            "Arch Resources, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:LMND",
        "d": [
            "lemonade",
            "LMND",
            "Lemonade, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:COMM",
        "d": [
            "commscope",
            "COMM",
            "CommScope Holding Company, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NMRK",
        "d": [
            "newmark-group",
            "NMRK",
            "Newmark Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:UDMY",
        "d": [
            "udemy",
            "UDMY",
            "Udemy, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ESTE",
        "d": [
            "earthstone-energy",
            "ESTE",
            "Earthstone Energy, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:LAUR",
        "d": [
            "laureate-education",
            "LAUR",
            "Laureate Education, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ASZ",
        "d": [
            "",
            "ASZ",
            "Austerlitz Acquisition Corporation II",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CSTM",
        "d": [
            "constellium-nv",
            "CSTM",
            "Constellium SE",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:WGO",
        "d": [
            "winnebago-industries",
            "WGO",
            "Winnebago Industries, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:HTGC",
        "d": [
            "hercules-capital",
            "HTGC",
            "Hercules Capital, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:VZIO",
        "d": [
            "vizio",
            "VZIO",
            "VIZIO Holding Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:COMP",
        "d": [
            "compass",
            "COMP",
            "Compass, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ELF",
        "d": [
            "e-l-f-beauty",
            "ELF",
            "e.l.f. Beauty, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:RELY",
        "d": [
            "remitly-global",
            "RELY",
            "Remitly Global, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:BLMN",
        "d": [
            "bloomin-brands",
            "BLMN",
            "Bloomin' Brands, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:OPK",
        "d": [
            "opko-health",
            "OPK",
            "Opko Health, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:URBN",
        "d": [
            "urban-outfitters",
            "URBN",
            "Urban Outfitters, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CDEV",
        "d": [
            "centennial-resource-development",
            "CDEV",
            "Centennial Resource Development, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PAYO",
        "d": [
            "payoneer",
            "PAYO",
            "Payoneer Global Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:IOVA",
        "d": [
            "iovance-biotherapeutics",
            "IOVA",
            "Iovance Biotherapeutics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:LYEL",
        "d": [
            "",
            "LYEL",
            "Lyell Immunopharma, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BFH",
        "d": [
            "alliance-data-system",
            "BFH",
            "Bread Financial Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:COUR",
        "d": [
            "coursera",
            "COUR",
            "Coursera, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BOOT",
        "d": [
            "boot-barn",
            "BOOT",
            "Boot Barn Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SG",
        "d": [
            "sweetgreen",
            "SG",
            "Sweetgreen, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TDS",
        "d": [
            "telephone-and-data-systems",
            "TDS",
            "Telephone and Data Systems, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SWTX",
        "d": [
            "",
            "SWTX",
            "SpringWorks Therapeutics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:GOGO",
        "d": [
            "gogo",
            "GOGO",
            "Gogo Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:KTOS",
        "d": [
            "kratos-defense-and-security-solutions",
            "KTOS",
            "Kratos Defense & Security Solutions, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TPH",
        "d": [
            "tri-pointe",
            "TPH",
            "Tri Pointe Homes, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MWA",
        "d": [
            "mueller-water-products",
            "MWA",
            "MUELLER WATER PRODUCTS",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:HLMN",
        "d": [
            "",
            "HLMN",
            "Hillman Solutions Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DK",
        "d": [
            "delek-us-holdings",
            "DK",
            "Delek US Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:RCUS",
        "d": [
            "arcus-biosciences",
            "RCUS",
            "Arcus Biosciences, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:IRWD",
        "d": [
            "ironwood-pharmaceuticals",
            "IRWD",
            "Ironwood Pharmaceuticals, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NWBI",
        "d": [
            "northwest-bancshares",
            "NWBI",
            "Northwest Bancshares, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:AMPL",
        "d": [
            "amplitude",
            "AMPL",
            "Amplitude, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:DCT",
        "d": [
            "duck-creek-technologies",
            "DCT",
            "Duck Creek Technologies, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:TVTX",
        "d": [
            "",
            "TVTX",
            "Travere Therapeutics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MD",
        "d": [
            "mednax",
            "MD",
            "Pediatrix Medical Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PTLO",
        "d": [
            "portillo-s",
            "PTLO",
            "Portillo's Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PRM",
        "d": [
            "",
            "PRM",
            "Perimeter Solutions, SA",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:GTN",
        "d": [
            "gray-television",
            "GTN",
            "Gray Television, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CLNE",
        "d": [
            "clean-energy-fuels",
            "CLNE",
            "Clean Energy Fuels Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:EVOP",
        "d": [
            "evo-payments-inc",
            "EVOP",
            "EVO Payments, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SIGA",
        "d": [
            "siga-technologies",
            "SIGA",
            "SIGA Technologies Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PSFE",
        "d": [
            "paysafe",
            "PSFE",
            "Paysafe Limited",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:EXTR",
        "d": [
            "extreme-networks",
            "EXTR",
            "Extreme Networks, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:VCYT",
        "d": [
            "veracyte",
            "VCYT",
            "Veracyte, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:WOW",
        "d": [
            "wideopenwest",
            "WOW",
            "WideOpenWest, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:IBRX",
        "d": [
            "immunitybio",
            "IBRX",
            "ImmunityBio, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:FTAI",
        "d": [
            "fortress-transn-and-infras-invs-llc",
            "FTAI",
            "Fortress Transportation and Infrastructure Investors LLC",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:AXSM",
        "d": [
            "axsome-therapeutics",
            "AXSM",
            "Axsome Therapeutics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SPCE",
        "d": [
            "virgin-galactic",
            "SPCE",
            "Virgin Galactic Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CVII",
        "d": [
            "churchill-capital",
            "CVII",
            "Churchill Capital Corp VII",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:RCII",
        "d": [
            "rent-a-center",
            "RCII",
            "Rent-A-Center Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ZNTL",
        "d": [
            "",
            "ZNTL",
            "Zentalis Pharmaceuticals, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ARCO",
        "d": [
            "arcos-dorados",
            "ARCO",
            "Arcos Dorados Holdings Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ME",
        "d": [
            "23andme-holding",
            "ME",
            "23andMe Holding Co.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:EAF",
        "d": [
            "graftech-international",
            "EAF",
            "GrafTech International Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:EVTL",
        "d": [
            "vertical-aerospace",
            "EVTL",
            "Vertical Aerospace Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CLDX",
        "d": [
            "celldex-therapeutics",
            "CLDX",
            "Celldex Therapeutics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:AVDX",
        "d": [
            "avidxchange-holdings",
            "AVDX",
            "AvidXchange Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:VSTO",
        "d": [
            "vista-outdoor",
            "VSTO",
            "Vista Outdoor Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:FCEL",
        "d": [
            "fuelcell-energy",
            "FCEL",
            "FuelCell Energy, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SBGI",
        "d": [
            "sinclair-broadcast-group",
            "SBGI",
            "Sinclair Broadcast Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:VGR",
        "d": [
            "rocket-lab",
            "VGR",
            "Vector Group Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:BBIO",
        "d": [
            "bridgebio-pharma",
            "BBIO",
            "BridgeBio Pharma, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MNRL",
        "d": [
            "brigham-minerals",
            "MNRL",
            "Brigham Minerals, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:IRBT",
        "d": [
            "irobot",
            "IRBT",
            "iRobot Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:RES",
        "d": [
            "rpc",
            "RES",
            "RPC, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ASTS",
        "d": [
            "ast-spacemobile",
            "ASTS",
            "AST SpaceMobile, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:TTMI",
        "d": [
            "ttm-technologies",
            "TTMI",
            "TTM Technologies, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BGS",
        "d": [
            "b-and-g-foods",
            "BGS",
            "B&G Foods, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "AMEX:NG",
        "d": [
            "novagold-resources",
            "NG",
            "Novagold Resources Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NS",
        "d": [
            "nustar-energy",
            "NS",
            "Nustar Energy L.P.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CAKE",
        "d": [
            "cheesecake-factory",
            "CAKE",
            "The Cheesecake Factory Incorporated",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:VERV",
        "d": [
            "verve-therapeutics",
            "VERV",
            "Verve Therapeutics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PL",
        "d": [
            "planet-labs",
            "PL",
            "Planet Labs PBC",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:KYMR",
        "d": [
            "kymera-therapeutics",
            "KYMR",
            "Kymera Therapeutics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ADPT",
        "d": [
            "adaptive-biotechnologies",
            "ADPT",
            "Adaptive Biotechnologies Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:RFP",
        "d": [
            "resolute-forest-products",
            "RFP",
            "Resolute Forest Products Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MYOV",
        "d": [
            "myovant-sciences",
            "MYOV",
            "Myovant Sciences Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CRSR",
        "d": [
            "corsair",
            "CRSR",
            "Corsair Gaming, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TEN",
        "d": [
            "tenneco",
            "TEN",
            "Tenneco Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ISEE",
        "d": [
            "iveric-bio",
            "ISEE",
            "IVERIC bio, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SANA",
        "d": [
            "sana-biotechnology",
            "SANA",
            "Sana Biotechnology, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MARA",
        "d": [
            "marathon-patent",
            "MARA",
            "Marathon Digital Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:RAMP",
        "d": [
            "liveramp-holdings",
            "RAMP",
            "LiveRamp Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MIR",
        "d": [
            "mirion-technologies",
            "MIR",
            "Mirion Technologies, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TALO",
        "d": [
            "talos-energy",
            "TALO",
            "Talos Energy, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:WRBY",
        "d": [
            "warby-parker",
            "WRBY",
            "Warby Parker Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:AGIO",
        "d": [
            "agios-pharmaceuticals",
            "AGIO",
            "Agios Pharmaceuticals, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:RXRX",
        "d": [
            "recursion",
            "RXRX",
            "Recursion Pharmaceuticals, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:BGCP",
        "d": [
            "bgc-partners",
            "BGCP",
            "BGC Partners, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ARQT",
        "d": [
            "",
            "ARQT",
            "Arcutis Biotherapeutics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:EBS",
        "d": [
            "emergent-biosolutions",
            "EBS",
            "Emergent Biosolutions, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DDD",
        "d": [
            "3-d-systems",
            "DDD",
            "3D Systems Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:AMLX",
        "d": [
            "amylyx-pharmaceuticals",
            "AMLX",
            "Amylyx Pharmaceuticals, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:LC",
        "d": [
            "lending-club",
            "LC",
            "LendingClub Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SBH",
        "d": [
            "sally-beauty",
            "SBH",
            "Sally Beauty Holdings, Inc. (Name to be changed from Sally Holdings, Inc.)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:KN",
        "d": [
            "knowles",
            "KN",
            "Knowles Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:FVRR",
        "d": [
            "fiverr",
            "FVRR",
            "Fiverr International Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:KRNT",
        "d": [
            "kornit-digital",
            "KRNT",
            "Kornit Digital Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NEO",
        "d": [
            "neogenomics",
            "NEO",
            "NeoGenomics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:FAZE",
        "d": [
            "",
            "FAZE",
            "FaZe Holdings Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PTRA",
        "d": [
            "proterra",
            "PTRA",
            "Proterra Inc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:IPOF",
        "d": [
            "social-capital-hedosophia",
            "IPOF",
            "Social Capital Hedosophia Holdings Corp. VI",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CMRE",
        "d": [
            "costamare",
            "CMRE",
            "Costamare Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:VIVO",
        "d": [
            "meridian-bioscience",
            "VIVO",
            "Meridian Bioscience Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PACB",
        "d": [
            "pacific-biosciences",
            "PACB",
            "Pacific Biosciences of California, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:KIND",
        "d": [
            "nextdoor-holdings",
            "KIND",
            "Nextdoor Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SFL",
        "d": [
            "ship-finance-international",
            "SFL",
            "SFL Corporation Ltd",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:QRTEA",
        "d": [
            "qurate-retail",
            "QRTEA",
            "Liberty Interactive Corporation - Series A QVC Group Common Stock",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PCT",
        "d": [
            "purecycle-technologies",
            "PCT",
            "PureCycle Technologies, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:BIGC",
        "d": [
            "bigcommerce",
            "BIGC",
            "BigCommerce Holdings, Inc. - Series 1",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SNDX",
        "d": [
            "syndax-pharmaceuticals",
            "SNDX",
            "Syndax Pharmaceuticals, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:FSLY",
        "d": [
            "fastly-inc",
            "FSLY",
            "Fastly, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:OSTK",
        "d": [
            "overstock",
            "OSTK",
            "Overstock.com, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:LXU",
        "d": [
            "lsb-industries",
            "LXU",
            "LSB Industries, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PLAB",
        "d": [
            "photronics",
            "PLAB",
            "Photronics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ZETA",
        "d": [
            "zeta",
            "ZETA",
            "Zeta Global Holdings Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:LPRO",
        "d": [
            "open-lending",
            "LPRO",
            "Open Lending Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:VCSA",
        "d": [
            "vacasa",
            "VCSA",
            "Vacasa, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MTTR",
        "d": [
            "matterport",
            "MTTR",
            "Matterport, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:RADI",
        "d": [
            "radius-global-infrastructure",
            "RADI",
            "Radius Global Infrastructure, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:GRBK",
        "d": [
            "green-brick-partners",
            "GRBK",
            "Green Brick Partners, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NEGG",
        "d": [
            "newegg-commerce",
            "NEGG",
            "Newegg Commerce, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:FREY",
        "d": [
            "freyr-battery",
            "FREY",
            "FREYR Battery",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CLOV",
        "d": [
            "clover-health",
            "CLOV",
            "Clover Health Investments, Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:FGEN",
        "d": [
            "fibrogen",
            "FGEN",
            "FibroGen, Inc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:LICY",
        "d": [
            "li-cycle",
            "LICY",
            "Li-Cycle Holdings Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AMWL",
        "d": [
            "amwell",
            "AMWL",
            "American Well Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:OCSL",
        "d": [
            "",
            "OCSL",
            "Oaktree Specialty Lending Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SCS",
        "d": [
            "steelcase",
            "SCS",
            "Steelcase Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:HIMS",
        "d": [
            "hims-and-hers-health",
            "HIMS",
            "Hims & Hers Health, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:EAT",
        "d": [
            "brinker-international",
            "EAT",
            "Brinker International, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ECVT",
        "d": [
            "",
            "ECVT",
            "Ecovyst Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "AMEX:EQX",
        "d": [
            "equinox-gold",
            "EQX",
            "Equinox Gold Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DHT",
        "d": [
            "dht",
            "DHT",
            "DHT Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:RVNC",
        "d": [
            "revance-therapeutics",
            "RVNC",
            "Revance Therapeutics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:GEL",
        "d": [
            "genesis-energy-lp",
            "GEL",
            "Genesis Energy, L.P.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DNOW",
        "d": [
            "now",
            "DNOW",
            "NOW Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BALY",
        "d": [
            "bally-s-corporation",
            "BALY",
            "Bally's Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SSYS",
        "d": [
            "stratasys",
            "SSYS",
            "Stratasys, Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BHG",
        "d": [
            "bright-health",
            "BHG",
            "Bright Health Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MGNI",
        "d": [
            "magnite",
            "MGNI",
            "Magnite, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:EVBG",
        "d": [
            "everbridge",
            "EVBG",
            "Everbridge, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ZUO",
        "d": [
            "zuora",
            "ZUO",
            "Zuora, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:EDIT",
        "d": [
            "editas-medicine",
            "EDIT",
            "Editas Medicine, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CDNA",
        "d": [
            "caredx",
            "CDNA",
            "CareDx, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:TH",
        "d": [
            "target-hospitality",
            "TH",
            "Target Hospitality Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SWIR",
        "d": [
            "sierra-wireless",
            "SWIR",
            "Sierra Wireless, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:JELD",
        "d": [
            "jeld-wen",
            "JELD",
            "JELD-WEN Holding, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "AMEX:UEC",
        "d": [
            "uranium-energy",
            "UEC",
            "Uranium Energy Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AROC",
        "d": [
            "archrock",
            "AROC",
            "Archrock, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:GSM",
        "d": [
            "ferroglobe",
            "GSM",
            "Ferroglobe PLC",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SLDP",
        "d": [
            "solid-power",
            "SLDP",
            "Solid Power, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PLYA",
        "d": [
            "",
            "PLYA",
            "Playa Hotels & Resorts N.V.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MNTV",
        "d": [
            "",
            "MNTV",
            "Momentive Global Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ADTN",
        "d": [
            "adtran",
            "ADTN",
            "ADTRAN Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:IMGN",
        "d": [
            "immunogen",
            "IMGN",
            "ImmunoGen, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:RDFN",
        "d": [
            "redfin",
            "RDFN",
            "Redfin Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PUBM",
        "d": [
            "pubmatic",
            "PUBM",
            "PubMatic, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:HLIT",
        "d": [
            "harmonic",
            "HLIT",
            "Harmonic Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:DCPH",
        "d": [
            "deciphera-pharmaceuticals",
            "DCPH",
            "Deciphera Pharmaceuticals, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ATEN",
        "d": [
            "a10-networks",
            "ATEN",
            "A10 Networks, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:AUPH",
        "d": [
            "aurinia",
            "AUPH",
            "Aurinia Pharmaceuticals Inc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DBI",
        "d": [
            "designer-brands",
            "DBI",
            "Designer Brands Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:RYTM",
        "d": [
            "rhythm-pharmaceuticals",
            "RYTM",
            "Rhythm Pharmaceuticals, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:VMEO",
        "d": [
            "vimeo",
            "VMEO",
            "Vimeo, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:BTRS",
        "d": [
            "",
            "BTRS",
            "BTRS Holdings Inc. - Class 1",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:WISH",
        "d": [
            "contextlogic",
            "WISH",
            "ContextLogic Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:IONQ",
        "d": [
            "ionq",
            "IONQ",
            "IonQ, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ACVA",
        "d": [
            "acv-auctions",
            "ACVA",
            "ACV Auctions Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:LWLG",
        "d": [
            "lightwave-logic",
            "LWLG",
            "Lightwave Logic, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AXL",
        "d": [
            "american-axle-manufacturing",
            "AXL",
            "American Axle & Manufacturing Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:OSCR",
        "d": [
            "oscar-health",
            "OSCR",
            "Oscar Health, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:INFN",
        "d": [
            "infinera",
            "INFN",
            "Infinera Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:DWAC",
        "d": [
            "digital-world-acquisition-corp",
            "DWAC",
            "Digital World Acquisition Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:BLNK",
        "d": [
            "blink-charging",
            "BLNK",
            "Blink Charging Co.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:RIOT",
        "d": [
            "riot-blockchain",
            "RIOT",
            "Riot Blockchain, Inc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:LPI",
        "d": [
            "laredo-petroleum",
            "LPI",
            "Laredo Petroleum, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CPRX",
        "d": [
            "catalyst-pharmaceuticals",
            "CPRX",
            "Catalyst Pharmaceuticals, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ARVL",
        "d": [
            "arrival",
            "ARVL",
            "Arrival",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:INDI",
        "d": [
            "indie-semiconductor",
            "INDI",
            "indie Semiconductor, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "AMEX:UUUU",
        "d": [
            "energy-fuels",
            "UUUU",
            "Energy Fuels Inc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:COWN",
        "d": [
            "cowen",
            "COWN",
            "Cowen Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PARR",
        "d": [
            "",
            "PARR",
            "Par Pacific Holdings, Inc. Common Stock",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ACMR",
        "d": [
            "acm-research",
            "ACMR",
            "ACM Research, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:TGTX",
        "d": [
            "tg-therapeutics",
            "TGTX",
            "TG Therapeutics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:IHRT",
        "d": [
            "iheartmedia",
            "IHRT",
            "iHeartMedia, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:FNKO",
        "d": [
            "funko",
            "FNKO",
            "Funko, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:RCKT",
        "d": [
            "",
            "RCKT",
            "Rocket Pharmaceuticals, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:GPRO",
        "d": [
            "gopro",
            "GPRO",
            "GoPro, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SLCA",
        "d": [
            "u-s-silica",
            "SLCA",
            "U.S. Silica Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MNKD",
        "d": [
            "mannkind",
            "MNKD",
            "MannKind Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:HCSG",
        "d": [
            "healthcare-services-group",
            "HCSG",
            "Healthcare Services Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ACHR",
        "d": [
            "archer-aviation",
            "ACHR",
            "Archer Aviation Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BFLY",
        "d": [
            "butterfly-network",
            "BFLY",
            "Butterfly Network, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:INVA",
        "d": [
            "innoviva",
            "INVA",
            "Innoviva, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PRG",
        "d": [
            "prog",
            "PRG",
            "PROG Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SMRT",
        "d": [
            "smartrent",
            "SMRT",
            "SmartRent, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MGI",
        "d": [
            "moneygram-international",
            "MGI",
            "Moneygram International, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SRNE",
        "d": [
            "sorrento-therapeutics",
            "SRNE",
            "Sorrento Therapeutics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:LEV",
        "d": [
            "the-lion-electric",
            "LEV",
            "The Lion Electric Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:KURA",
        "d": [
            "kura-oncology",
            "KURA",
            "Kura Oncology, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:GOSS",
        "d": [
            "gossamer-bio",
            "GOSS",
            "Gossamer Bio, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PLRX",
        "d": [
            "",
            "PLRX",
            "Pliant Therapeutics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ORGN",
        "d": [
            "origin-materials",
            "ORGN",
            "Origin Materials, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:LPSN",
        "d": [
            "liveperson",
            "LPSN",
            "LivePerson, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AUS",
        "d": [
            "",
            "AUS",
            "Austerlitz Acquisition Corporation I",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SNBR",
        "d": [
            "sleep-number",
            "SNBR",
            "Sleep Number Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NEXT",
        "d": [
            "nextdecade",
            "NEXT",
            "NextDecade Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SUMO",
        "d": [
            "sumo-logic",
            "SUMO",
            "Sumo Logic, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CNDT",
        "d": [
            "conduent",
            "CNDT",
            "Conduent Incorporated",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:OM",
        "d": [
            "outset-medical",
            "OM",
            "Outset Medical, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BKD",
        "d": [
            "brookdale-senior-living",
            "BKD",
            "Brookdale Senior Living Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PAYA",
        "d": [
            "",
            "PAYA",
            "Paya Holdings Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ASTL",
        "d": [
            "",
            "ASTL",
            "Algoma Steel Group Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:POSH",
        "d": [
            "poshmark",
            "POSH",
            "Poshmark, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AMRX",
        "d": [
            "amneal-pharmaceuticals",
            "AMRX",
            "Amneal Pharmaceuticals, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TWI",
        "d": [
            "titan-international",
            "TWI",
            "Titan International, Inc. (DE)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:VERU",
        "d": [
            "veru",
            "VERU",
            "Veru Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TGI",
        "d": [
            "triumph-group",
            "TGI",
            "Triumph Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CORZ",
        "d": [
            "core-scientific",
            "CORZ",
            "Core Scientific, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:IMAX",
        "d": [
            "imax",
            "IMAX",
            "Imax Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:OII",
        "d": [
            "oceaneering-international",
            "OII",
            "Oceaneering International, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:QURE",
        "d": [
            "uniqure-n-v",
            "QURE",
            "uniQure N.V.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ANF",
        "d": [
            "abercrombie-and-fitch",
            "ANF",
            "Abercrombie & Fitch Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:DCGO",
        "d": [
            "docgo",
            "DCGO",
            "DocGo Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NKTR",
        "d": [
            "nektar-therapeutics",
            "NKTR",
            "Nektar Therapeutics",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CERS",
        "d": [
            "cerus-corporation",
            "CERS",
            "Cerus Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:GOEV",
        "d": [
            "canoo",
            "GOEV",
            "Canoo Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AEVA",
        "d": [
            "aeva",
            "AEVA",
            "Aeva Technologies, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CDE",
        "d": [
            "coeur-mining",
            "CDE",
            "Coeur Mining, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ARIS",
        "d": [
            "",
            "ARIS",
            "Aris Water Solutions, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CCRN",
        "d": [
            "cross-country-healthcare",
            "CCRN",
            "Cross Country Healthcare, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PUMP",
        "d": [
            "propetro",
            "PUMP",
            "ProPetro Holding Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MVIS",
        "d": [
            "microvision",
            "MVIS",
            "MicroVision, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CHRS",
        "d": [
            "coherus-biosciences",
            "CHRS",
            "Coherus BioSciences, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:AVXL",
        "d": [
            "anavex-life-sciences",
            "AVXL",
            "Anavex Life Sciences Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DM",
        "d": [
            "desktop-metal",
            "DM",
            "Desktop Metal, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MRC",
        "d": [
            "mrc-global",
            "MRC",
            "MRC Global Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:GENI",
        "d": [
            "genius-sports",
            "GENI",
            "Genius Sports Limited",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "AMEX:SENS",
        "d": [
            "senseonics",
            "SENS",
            "Senseonics Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:TPIC",
        "d": [
            "tpi-composites",
            "TPIC",
            "TPI Composites, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:HA",
        "d": [
            "hawaiian",
            "HA",
            "Hawaiian Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BKKT",
        "d": [
            "bakkt",
            "BKKT",
            "Bakkt Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MVST",
        "d": [
            "microvast",
            "MVST",
            "Microvast Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:LILM",
        "d": [
            "lilium",
            "LILM",
            "Lilium N.V.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ATEC",
        "d": [
            "alphatec",
            "ATEC",
            "Alphatec Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:GEVO",
        "d": [
            "gevo",
            "GEVO",
            "Gevo, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SAVA",
        "d": [
            "cassava-sciences",
            "SAVA",
            "Cassava Sciences, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:COGT",
        "d": [
            "cogent-biosciences",
            "COGT",
            "Cogent Biosciences, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:TMST",
        "d": [
            "timkensteel",
            "TMST",
            "TimkenSteel Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:WETF",
        "d": [
            "",
            "WETF",
            "WisdomTree Investments, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:GERN",
        "d": [
            "geron",
            "GERN",
            "Geron Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CLAR",
        "d": [
            "",
            "CLAR",
            "Clarus Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ACCD",
        "d": [
            "accolade",
            "ACCD",
            "Accolade, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ORGO",
        "d": [
            "organogenesis",
            "ORGO",
            "Organogenesis Holdings Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:EB",
        "d": [
            "eventbrite",
            "EB",
            "Eventbrite, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:WTI",
        "d": [
            "w-and-t-offshore",
            "WTI",
            "W&T Offshore, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:FFIE",
        "d": [
            "faraday-future",
            "FFIE",
            "Faraday Future Intelligent Electric Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NKTX",
        "d": [
            "nkarta",
            "NKTX",
            "Nkarta, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:BBBY",
        "d": [
            "bed-bath-and-beyond",
            "BBBY",
            "Bed Bath & Beyond Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:HYLN",
        "d": [
            "hyliion",
            "HYLN",
            "Hyliion Holdings Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CHS",
        "d": [
            "chico-s",
            "CHS",
            "Chico's FAS, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:BRY",
        "d": [
            "berry-corporation",
            "BRY",
            "Berry Corporation (bry)",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SGMO",
        "d": [
            "sangamo-therapeutics",
            "SGMO",
            "Sangamo Therapeutics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:FRGE",
        "d": [
            "",
            "FRGE",
            "Forge Global Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SPNT",
        "d": [
            "",
            "SPNT",
            "SiriusPoint Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:EGIO",
        "d": [
            "limelight-networks",
            "EGIO",
            "Edgio, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:GNK",
        "d": [
            "genco-shipping-and-trading",
            "GNK",
            "Genco Shipping & Trading Limited",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SLGC",
        "d": [
            "",
            "SLGC",
            "SomaLogic, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:HNGR",
        "d": [
            "",
            "HNGR",
            "Hanger, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:HLLY",
        "d": [
            "",
            "HLLY",
            "Holley Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ATAI",
        "d": [
            "atai-life-sciences",
            "ATAI",
            "ATAI Life Sciences N.V.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:GSL",
        "d": [
            "global-ship-lease",
            "GSL",
            "Global Ship Lease Inc New",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CENX",
        "d": [
            "century-aluminum",
            "CENX",
            "Century Aluminum Company",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:RBAC",
        "d": [
            "",
            "RBAC",
            "RedBall Acquisition Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SFIX",
        "d": [
            "stitch-fix",
            "SFIX",
            "Stitch Fix, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BHIL",
        "d": [
            "",
            "BHIL",
            "Benson Hill, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:INVZ",
        "d": [
            "innoviz-technologies",
            "INVZ",
            "Innoviz Technologies Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CZOO",
        "d": [
            "cazoo",
            "CZOO",
            "Cazoo Group Ltd",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SMFR",
        "d": [
            "sema4",
            "SMFR",
            "Sema4 Holdings Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BLND",
        "d": [
            "blend",
            "BLND",
            "Blend Labs, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SWIM",
        "d": [
            "latham",
            "SWIM",
            "Latham Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:TBPH",
        "d": [
            "theravance-biopharma",
            "TBPH",
            "Theravance Biopharma, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:AGEN",
        "d": [
            "agenus",
            "AGEN",
            "Agenus Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:IEA",
        "d": [
            "infrastructure-and-energy-alternatives",
            "IEA",
            "Infrastructure and Energy Alternatives, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DO",
        "d": [
            "",
            "DO",
            "Diamond Offshore Drilling, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:TWOU",
        "d": [
            "2u",
            "TWOU",
            "2U, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MRSN",
        "d": [
            "mersana-therapeutics",
            "MRSN",
            "Mersana Therapeutics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PMVP",
        "d": [
            "",
            "PMVP",
            "PMV Pharmaceuticals, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:AMRS",
        "d": [
            "amyris",
            "AMRS",
            "Amyris, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:FUBO",
        "d": [
            "fubotv",
            "FUBO",
            "fuboTV Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:BIRD",
        "d": [
            "allbirds",
            "BIRD",
            "Allbirds, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:LPG",
        "d": [
            "dorian-lpg",
            "LPG",
            "Dorian LPG Ltd.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:VLD",
        "d": [
            "velo3d",
            "VLD",
            "Velo3D, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:BNGO",
        "d": [
            "bionano-genomics",
            "BNGO",
            "Bionano Genomics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SWBI",
        "d": [
            "smith-and-wesson",
            "SWBI",
            "Smith & Wesson Brands, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SKLZ",
        "d": [
            "skillz",
            "SKLZ",
            "Skillz Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NSTG",
        "d": [
            "",
            "NSTG",
            "NanoString Technologies, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:POWW",
        "d": [
            "ammo",
            "POWW",
            "AMMO, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:CCO",
        "d": [
            "clear-channel-outdoor",
            "CCO",
            "Clear Channel Outdoor Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SD",
        "d": [
            "sandridge-energy",
            "SD",
            "SandRidge Energy, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SNDL",
        "d": [
            "sundial-growers",
            "SNDL",
            "SNDL Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:BIG",
        "d": [
            "big-lots",
            "BIG",
            "Big Lots, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:HCAT",
        "d": [
            "health-catalyst",
            "HCAT",
            "Health Catalyst, Inc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:UP",
        "d": [
            "wheels-up",
            "UP",
            "Wheels Up Experience Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:HLX",
        "d": [
            "helix-energy-solutions",
            "HLX",
            "Helix Energy Solutions Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:GWH",
        "d": [
            "ess-tech",
            "GWH",
            "ESS Tech, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NRGV",
        "d": [
            "energy-vault",
            "NRGV",
            "Energy Vault Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:YEXT",
        "d": [
            "yext",
            "YEXT",
            "Yext, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CTIC",
        "d": [
            "cti-biopharma",
            "CTIC",
            "CTI BioPharma Corp.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:KZR",
        "d": [
            "kezar-life-sciences",
            "KZR",
            "Kezar Life Sciences, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:DENN",
        "d": [
            "denny-s",
            "DENN",
            "Denny's Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:MCRB",
        "d": [
            "seres-therapeutics",
            "MCRB",
            "Seres Therapeutics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:VRAY",
        "d": [
            "viewray",
            "VRAY",
            "ViewRay, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:KOD",
        "d": [
            "kodiak-sciences",
            "KOD",
            "Kodiak Sciences Inc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:WKHS",
        "d": [
            "workhorse",
            "WKHS",
            "Workhorse Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:AMBC",
        "d": [
            "",
            "AMBC",
            "Ambac Financial Group, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SUNL",
        "d": [
            "sunlight-financial",
            "SUNL",
            "Sunlight Financial Holdings, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:BGRY",
        "d": [
            "berkshire-grey",
            "BGRY",
            "Berkshire Grey, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:LMDX",
        "d": [
            "",
            "LMDX",
            "LumiraDx Limited",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:SXC",
        "d": [
            "suncoke-energy",
            "SXC",
            "SunCoke Energy, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:OCGN",
        "d": [
            "ocugen",
            "OCGN",
            "Ocugen, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NUVB",
        "d": [
            "nuvation-bio",
            "NUVB",
            "Nuvation Bio Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MX",
        "d": [
            "magnachip-semiconductor",
            "MX",
            "Magnachip Semiconductor Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:NVTS",
        "d": [
            "navitas-semiconductor",
            "NVTS",
            "Navitas Semiconductor Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:EGHT",
        "d": [
            "8x8-new",
            "EGHT",
            "8x8 Inc",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:AERI",
        "d": [
            "aerie-pharmaceuticals",
            "AERI",
            "Aerie Pharmaceuticals, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:PBI",
        "d": [
            "pitney-bowes",
            "PBI",
            "Pitney Bowes Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:HYZN",
        "d": [
            "hyzon-motors",
            "HYZN",
            "Hyzon Motors Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NAT",
        "d": [
            "nordic-american-tankers",
            "NAT",
            "Nordic American Tankers Limited",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:ALT",
        "d": [
            "altimmune",
            "ALT",
            "Altimmune, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:VUZI",
        "d": [
            "vuzix",
            "VUZI",
            "Vuzix Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:PTGX",
        "d": [
            "protagonist-therapeutics",
            "PTGX",
            "Protagonist Therapeutics, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:VXRT",
        "d": [
            "vaxart",
            "VXRT",
            "Vaxart, Inc. - Common Stock",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:SHCR",
        "d": [
            "",
            "SHCR",
            "Sharecare, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CDLX",
        "d": [
            "cardlytics",
            "CDLX",
            "Cardlytics, Inc. Common Stock",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CRGE",
        "d": [
            "",
            "CRGE",
            "Charge Enterprises, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:QSI",
        "d": [
            "quantum-si",
            "QSI",
            "Quantum-Si Incorporated",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:HLGN",
        "d": [
            "heliogen",
            "HLGN",
            "Heliogen, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:NVTA",
        "d": [
            "invitae",
            "NVTA",
            "Invitae Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:CDXS",
        "d": [
            "codexis",
            "CDXS",
            "Codexis, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DSX",
        "d": [
            "diana-shipping",
            "DSX",
            "Diana Shipping inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:EOLS",
        "d": [
            "",
            "EOLS",
            "Evolus, Inc. Common Stock",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:MKFG",
        "d": [
            "markforged",
            "MKFG",
            "Markforged Holding Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:RAD",
        "d": [
            "rite-aid",
            "RAD",
            "Rite Aid Corporation",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:DTC",
        "d": [
            "solo-brands",
            "DTC",
            "Solo Brands, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NYSE:ML",
        "d": [
            "moneylion",
            "ML",
            "MoneyLion Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    },
    {
        "s": "NASDAQ:VIEW",
        "d": [
            "view",
            "VIEW",
            "View, Inc.",
            "stock",
            "common",
            "delayed_streaming_900",
            "USD",
            "USD"
        ]
    }
]

console.log(data.length)
let formattedData = data.map(d => {return d.d[2].replaceAll(",","").replaceAll(".","").replaceAll("(The)","").replaceAll("&","and")})
console.log(formattedData)
fs.writeFileSync("./sourceData/tradingViewData.js", "const data = " + JSON.stringify(formattedData) + "\n\n module.exports = data")