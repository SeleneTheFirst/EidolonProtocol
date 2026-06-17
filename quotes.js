/*
  DEFAULT_QUOTE_IMAGE is used whenever a quote does not provide its own image.

  Each quote requires:
    lines: one or more displayed lines

  Optional:
    image.src
    image.alt
    attribution.author
    attribution.source
    attribution.year
*/

const DEFAULT_QUOTE_IMAGE = {
  src: "assets/images/Logo_Eidolon_Systems_Wide-Name_Only.PNG",
  alt: "Eidolon Systems"
};

const QUOTES = [
  {
    lines: [
      "Welcome to The Library of Chaos.",
      "Please do not reshelve reality yourself."
    ],
    image: {
      src: "assets/images/The_Library_of_Chaos.png",
      alt: "A misty symbolic landscape of history, technology, and CHAOS."
    },
    attribution: {
      author: "SeleneTheFirst",
      year: "2026"
    }
  }

  /*
  Future quote using the default image:

  ,{
    lines: [
      "A short quote."
    ]
  }

  Future quote with a custom image:

  ,{
    lines: [
      "Another short quote."
    ],
    image: {
      src: "assets/images/Another_Banner.png",
      alt: "A concise description of the banner."
    }
  }
  */
];
