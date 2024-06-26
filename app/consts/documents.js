const DEFAULT_DOCUMENTS = [
  {
    id: 0,
    title: "Video: How China and India Help Russia’s Economy by Buying Oil",
    body: "Russia is making as much as $20 billion in average monthly oil sales this year, compared to $14.6 billion last year ",
    url: "https://www.wsj.com/video/series/news-explainers/how-china-and-india-help-russias-economy-by-buying-oil/1DFAFAD1-8AAF-44B7-B265-599DD90D1C97",
  },
  {
    id: 1,
    title:
      "Chinese Investment Bank CICC Plans Large Capital Raise to Bolster Business",
    body: "Chinese Investment Bank CICC Plans Large Capital Raise to Bolster Business Bank shares fell after it said it wants to raise as much as $3.9 billion amid competition from foreign rivals",
    url: "https://www.wsj.com/articles/chinese-investment-bank-cicc-plans-large-capital-raise-to-bolster-business-11663156089",
  },
  {
    id: 2,
    title: "US Senate to Wrestle With Bill That Would Boost Taiwan Ties",
    body: "US lawmakers will debate a bill Wednesday to boost ties with Taiwan and give it more military hardware to deter a Chinese invasion. In Washington, where politicians often jockey to show who’s toughest on Beijing, the legislation is making the White House queasy.",
    url: "https://www.bloomberg.com/news/articles/2022-09-14/us-senate-to-wrestle-with-bill-that-would-boost-ties-with-taiwan?leadSource=uverify%20wall",
  },
  {
    id: 3,
    title: "Bank of East Asia China Executive Detained on Bribe Charge",
    body: "A senior executive of Bank of East Asia Ltd.’s China unit has been detained on suspicion of accepting bribes, according to a report",
    url: "https://www.bloomberg.com/news/articles/2022-09-14/bank-of-east-asia-executive-in-china-detained-on-bribery-charge?leadSource=uverify%20wall",
  },
  {
    id: 4,
    title: "How China became big business for Twitter",
    body: "A Reuters review of publicly available government tenders, budget documents and promoted tweets from 2020 to 2022 shows local government authorities and Chinese Communist Party propaganda offices for cities, provinces and even districts across the country have flocked to Twitter to buy ads.",
    url: "https://www.reuters.com/technology/block-blue-ticks-how-china-became-big-business-twitter-2022-09-13/",
  },
  {
    id: 5,
    title:
      "U.S. weighs China sanctions to deter Taiwan action, Taiwan presses EU",
    body: "The United States is considering options for a sanctions package against China to deter it from invading Taiwan, with the European Union coming under diplomatic pressure from Taipei to do the same.",
    url: "https://www.reuters.com/world/asia-pacific/exclusive-us-considers-china-sanctions-deter-taiwan-action-taiwan-presses-eu-2022-09-13/",
  },
  {
    id: 6,
    title: "Germany drawing up new China trade policy, vows 'no more naivety'",
    body: "Germany's economy minister said on Tuesday the government was working on a new trade policy with China to reduce dependence on Chinese raw materials, batteries and semiconductors.",
    url: "https://www.reuters.com/world/europe/germanys-new-china-policy-will-not-be-naive-economy-minister-2022-09-13/",
  },
  {
    id: 7,
    title: "China’s EV Battery Runner-Up is Worth a Look",
    body: "The public listing of CALB, China’s third largest EV battery maker, could be a bright spot in a tough year for Hong Kong.",
    url: "https://www.wsj.com/articles/chinas-ev-battery-runner-up-is-worth-a-look-11663071162",
  },
  {
    id: 8,
    title: "US Chip Curbs Will Highlight Cracks in China’s AI Strategy",
    body: "Computing power is critical to artificial intelligence, and Washington is taking that away from its fiercest rival.",
    url: "https://www.bloomberg.com/opinion/articles/2022-09-12/us-chip-curbs-will-highlight-cracks-in-china-s-ai-strategy?leadSource=uverify%20wall",
  },
  {
    id: 9,
    title: "Biden to Boost US Biomanufacturing to Compete with China",
    body: "President Joe Biden is poised to sign an executive order on Monday to help expand US biomanufacturing and reduce reliance on China.",
    url: "https://www.bloomberg.com/news/articles/2022-09-10/biden-seeks-boost-for-us-biomanufacturing-to-compete-with-china?leadSource=uverify%20wall",
  },
  {
    id: 10,
    title:
      "The Guardian: Imperial College to shut joint research ventures with Chinese defence firms",
    body: "Exclusive: two Chinese-sponsored aerospace research centres to close after warnings of ‘sleepwalking’ into aiding Chinese military.",
    url: "https://www.theguardian.com/world/2022/sep/11/imperial-college-to-shut-joint-research-ventures-with-chinese-defence-firms",
  },
  {
    id: 11,
    title: "Video: How China and India Help Russia’s Economy by Buying Oil",
    body: "Russia is making as much as $20 billion in average monthly oil sales this year, compared to $14.6 billion last year ",
    url: "https://www.wsj.com/video/series/news-explainers/how-china-and-india-help-russias-economy-by-buying-oil/1DFAFAD1-8AAF-44B7-B265-599DD90D1C97",
  },
  {
    id: 12,
    title:
      "Chinese Investment Bank CICC Plans Large Capital Raise to Bolster Business",
    body: "Chinese Investment Bank CICC Plans Large Capital Raise to Bolster Business Bank shares fell after it said it wants to raise as much as $3.9 billion amid competition from foreign rivals",
    url: "https://www.wsj.com/articles/chinese-investment-bank-cicc-plans-large-capital-raise-to-bolster-business-11663156089",
  },
  {
    id: 13,
    title: "US Senate to Wrestle With Bill That Would Boost Taiwan Ties",
    body: "US lawmakers will debate a bill Wednesday to boost ties with Taiwan and give it more military hardware to deter a Chinese invasion. In Washington, where politicians often jockey to show who’s toughest on Beijing, the legislation is making the White House queasy.",
    url: "https://www.bloomberg.com/news/articles/2022-09-14/us-senate-to-wrestle-with-bill-that-would-boost-ties-with-taiwan?leadSource=uverify%20wall",
  },
  {
    id: 14,
    title: "Bank of East Asia China Executive Detained on Bribe Charge",
    body: "A senior executive of Bank of East Asia Ltd.’s China unit has been detained on suspicion of accepting bribes, according to a report",
    url: "https://www.bloomberg.com/news/articles/2022-09-14/bank-of-east-asia-executive-in-china-detained-on-bribery-charge?leadSource=uverify%20wall",
  },
  {
    id: 15,
    title: "How China became big business for Twitter",
    body: "A Reuters review of publicly available government tenders, budget documents and promoted tweets from 2020 to 2022 shows local government authorities and Chinese Communist Party propaganda offices for cities, provinces and even districts across the country have flocked to Twitter to buy ads.",
    url: "https://www.reuters.com/technology/block-blue-ticks-how-china-became-big-business-twitter-2022-09-13/",
  },
  {
    id: 16,
    title:
      "U.S. weighs China sanctions to deter Taiwan action, Taiwan presses EU",
    body: "The United States is considering options for a sanctions package against China to deter it from invading Taiwan, with the European Union coming under diplomatic pressure from Taipei to do the same.",
    url: "https://www.reuters.com/world/asia-pacific/exclusive-us-considers-china-sanctions-deter-taiwan-action-taiwan-presses-eu-2022-09-13/",
  },
  {
    id: 17,
    title: "Germany drawing up new China trade policy, vows 'no more naivety'",
    body: "Germany's economy minister said on Tuesday the government was working on a new trade policy with China to reduce dependence on Chinese raw materials, batteries and semiconductors.",
    url: "https://www.reuters.com/world/europe/germanys-new-china-policy-will-not-be-naive-economy-minister-2022-09-13/",
  },
  {
    id: 18,
    title: "China’s EV Battery Runner-Up is Worth a Look",
    body: "The public listing of CALB, China’s third largest EV battery maker, could be a bright spot in a tough year for Hong Kong.",
    url: "https://www.wsj.com/articles/chinas-ev-battery-runner-up-is-worth-a-look-11663071162",
  },
  {
    id: 19,
    title: "US Chip Curbs Will Highlight Cracks in China’s AI Strategy",
    body: "Computing power is critical to artificial intelligence, and Washington is taking that away from its fiercest rival.",
    url: "https://www.bloomberg.com/opinion/articles/2022-09-12/us-chip-curbs-will-highlight-cracks-in-china-s-ai-strategy?leadSource=uverify%20wall",
  },
  {
    id: 20,
    title: "Biden to Boost US Biomanufacturing to Compete with China",
    body: "President Joe Biden is poised to sign an executive order on Monday to help expand US biomanufacturing and reduce reliance on China.",
    url: "https://www.bloomberg.com/news/articles/2022-09-10/biden-seeks-boost-for-us-biomanufacturing-to-compete-with-china?leadSource=uverify%20wall",
  },
  {
    id: 21,
    title:
      "The Guardian: Imperial College to shut joint research ventures with Chinese defence firms",
    body: "Exclusive: two Chinese-sponsored aerospace research centres to close after warnings of ‘sleepwalking’ into aiding Chinese military.",
    url: "https://www.theguardian.com/world/2022/sep/11/imperial-college-to-shut-joint-research-ventures-with-chinese-defence-firms",
  },
  {
    id: 22,
    title: "Video: How China and India Help Russia’s Economy by Buying Oil",
    body: "Russia is making as much as $20 billion in average monthly oil sales this year, compared to $14.6 billion last year ",
    url: "https://www.wsj.com/video/series/news-explainers/how-china-and-india-help-russias-economy-by-buying-oil/1DFAFAD1-8AAF-44B7-B265-599DD90D1C97",
  },
  {
    id: 23,
    title:
      "Chinese Investment Bank CICC Plans Large Capital Raise to Bolster Business",
    body: "Chinese Investment Bank CICC Plans Large Capital Raise to Bolster Business Bank shares fell after it said it wants to raise as much as $3.9 billion amid competition from foreign rivals",
    url: "https://www.wsj.com/articles/chinese-investment-bank-cicc-plans-large-capital-raise-to-bolster-business-11663156089",
  },
  {
    id: 24,
    title: "US Senate to Wrestle With Bill That Would Boost Taiwan Ties",
    body: "US lawmakers will debate a bill Wednesday to boost ties with Taiwan and give it more military hardware to deter a Chinese invasion. In Washington, where politicians often jockey to show who’s toughest on Beijing, the legislation is making the White House queasy.",
    url: "https://www.bloomberg.com/news/articles/2022-09-14/us-senate-to-wrestle-with-bill-that-would-boost-ties-with-taiwan?leadSource=uverify%20wall",
  },
  {
    id: 25,
    title: "Bank of East Asia China Executive Detained on Bribe Charge",
    body: "A senior executive of Bank of East Asia Ltd.’s China unit has been detained on suspicion of accepting bribes, according to a report",
    url: "https://www.bloomberg.com/news/articles/2022-09-14/bank-of-east-asia-executive-in-china-detained-on-bribery-charge?leadSource=uverify%20wall",
  },
  {
    id: 26,
    title: "How China became big business for Twitter",
    body: "A Reuters review of publicly available government tenders, budget documents and promoted tweets from 2020 to 2022 shows local government authorities and Chinese Communist Party propaganda offices for cities, provinces and even districts across the country have flocked to Twitter to buy ads.",
    url: "https://www.reuters.com/technology/block-blue-ticks-how-china-became-big-business-twitter-2022-09-13/",
  },
  {
    id: 27,
    title:
      "U.S. weighs China sanctions to deter Taiwan action, Taiwan presses EU",
    body: "The United States is considering options for a sanctions package against China to deter it from invading Taiwan, with the European Union coming under diplomatic pressure from Taipei to do the same.",
    url: "https://www.reuters.com/world/asia-pacific/exclusive-us-considers-china-sanctions-deter-taiwan-action-taiwan-presses-eu-2022-09-13/",
  },
  {
    id: 28,
    title: "Germany drawing up new China trade policy, vows 'no more naivety'",
    body: "Germany's economy minister said on Tuesday the government was working on a new trade policy with China to reduce dependence on Chinese raw materials, batteries and semiconductors.",
    url: "https://www.reuters.com/world/europe/germanys-new-china-policy-will-not-be-naive-economy-minister-2022-09-13/",
  },
  {
    id: 29,
    title: "China’s EV Battery Runner-Up is Worth a Look",
    body: "The public listing of CALB, China’s third largest EV battery maker, could be a bright spot in a tough year for Hong Kong.",
    url: "https://www.wsj.com/articles/chinas-ev-battery-runner-up-is-worth-a-look-11663071162",
  },
  {
    id: 30,
    title: "US Chip Curbs Will Highlight Cracks in China’s AI Strategy",
    body: "Computing power is critical to artificial intelligence, and Washington is taking that away from its fiercest rival.",
    url: "https://www.bloomberg.com/opinion/articles/2022-09-12/us-chip-curbs-will-highlight-cracks-in-china-s-ai-strategy?leadSource=uverify%20wall",
  },
  {
    id: 31,
    title: "Biden to Boost US Biomanufacturing to Compete with China",
    body: "President Joe Biden is poised to sign an executive order on Monday to help expand US biomanufacturing and reduce reliance on China.",
    url: "https://www.bloomberg.com/news/articles/2022-09-10/biden-seeks-boost-for-us-biomanufacturing-to-compete-with-china?leadSource=uverify%20wall",
  },
  {
    id: 32,
    title:
      "The Guardian: Imperial College to shut joint research ventures with Chinese defence firms",
    body: "Exclusive: two Chinese-sponsored aerospace research centres to close after warnings of ‘sleepwalking’ into aiding Chinese military.",
    url: "https://www.theguardian.com/world/2022/sep/11/imperial-college-to-shut-joint-research-ventures-with-chinese-defence-firms",
  },
  {
    id: 33,
    title: "Video: How China and India Help Russia’s Economy by Buying Oil",
    body: "Russia is making as much as $20 billion in average monthly oil sales this year, compared to $14.6 billion last year ",
    url: "https://www.wsj.com/video/series/news-explainers/how-china-and-india-help-russias-economy-by-buying-oil/1DFAFAD1-8AAF-44B7-B265-599DD90D1C97",
  },
  {
    id: 34,
    title:
      "Chinese Investment Bank CICC Plans Large Capital Raise to Bolster Business",
    body: "Chinese Investment Bank CICC Plans Large Capital Raise to Bolster Business Bank shares fell after it said it wants to raise as much as $3.9 billion amid competition from foreign rivals",
    url: "https://www.wsj.com/articles/chinese-investment-bank-cicc-plans-large-capital-raise-to-bolster-business-11663156089",
  },
  {
    id: 35,
    title: "US Senate to Wrestle With Bill That Would Boost Taiwan Ties",
    body: "US lawmakers will debate a bill Wednesday to boost ties with Taiwan and give it more military hardware to deter a Chinese invasion. In Washington, where politicians often jockey to show who’s toughest on Beijing, the legislation is making the White House queasy.",
    url: "https://www.bloomberg.com/news/articles/2022-09-14/us-senate-to-wrestle-with-bill-that-would-boost-ties-with-taiwan?leadSource=uverify%20wall",
  },
  {
    id: 36,
    title: "Bank of East Asia China Executive Detained on Bribe Charge",
    body: "A senior executive of Bank of East Asia Ltd.’s China unit has been detained on suspicion of accepting bribes, according to a report",
    url: "https://www.bloomberg.com/news/articles/2022-09-14/bank-of-east-asia-executive-in-china-detained-on-bribery-charge?leadSource=uverify%20wall",
  },
  {
    id: 37,
    title: "How China became big business for Twitter",
    body: "A Reuters review of publicly available government tenders, budget documents and promoted tweets from 2020 to 2022 shows local government authorities and Chinese Communist Party propaganda offices for cities, provinces and even districts across the country have flocked to Twitter to buy ads.",
    url: "https://www.reuters.com/technology/block-blue-ticks-how-china-became-big-business-twitter-2022-09-13/",
  },
  {
    id: 38,
    title:
      "U.S. weighs China sanctions to deter Taiwan action, Taiwan presses EU",
    body: "The United States is considering options for a sanctions package against China to deter it from invading Taiwan, with the European Union coming under diplomatic pressure from Taipei to do the same.",
    url: "https://www.reuters.com/world/asia-pacific/exclusive-us-considers-china-sanctions-deter-taiwan-action-taiwan-presses-eu-2022-09-13/",
  },
  {
    id: 39,
    title: "Germany drawing up new China trade policy, vows 'no more naivety'",
    body: "Germany's economy minister said on Tuesday the government was working on a new trade policy with China to reduce dependence on Chinese raw materials, batteries and semiconductors.",
    url: "https://www.reuters.com/world/europe/germanys-new-china-policy-will-not-be-naive-economy-minister-2022-09-13/",
  },
  {
    id: 40,
    title: "China’s EV Battery Runner-Up is Worth a Look",
    body: "The public listing of CALB, China’s third largest EV battery maker, could be a bright spot in a tough year for Hong Kong.",
    url: "https://www.wsj.com/articles/chinas-ev-battery-runner-up-is-worth-a-look-11663071162",
  },
  {
    id: 41,
    title: "US Chip Curbs Will Highlight Cracks in China’s AI Strategy",
    body: "Computing power is critical to artificial intelligence, and Washington is taking that away from its fiercest rival.",
    url: "https://www.bloomberg.com/opinion/articles/2022-09-12/us-chip-curbs-will-highlight-cracks-in-china-s-ai-strategy?leadSource=uverify%20wall",
  },
  {
    id: 42,
    title: "Biden to Boost US Biomanufacturing to Compete with China",
    body: "President Joe Biden is poised to sign an executive order on Monday to help expand US biomanufacturing and reduce reliance on China.",
    url: "https://www.bloomberg.com/news/articles/2022-09-10/biden-seeks-boost-for-us-biomanufacturing-to-compete-with-china?leadSource=uverify%20wall",
  },
  {
    id: 43,
    title:
      "The Guardian: Imperial College to shut joint research ventures with Chinese defence firms",
    body: "Exclusive: two Chinese-sponsored aerospace research centres to close after warnings of ‘sleepwalking’ into aiding Chinese military.",
    url: "https://www.theguardian.com/world/2022/sep/11/imperial-college-to-shut-joint-research-ventures-with-chinese-defence-firms",
  },
  {
    id: 44,
    title: "Video: How China and India Help Russia’s Economy by Buying Oil",
    body: "Russia is making as much as $20 billion in average monthly oil sales this year, compared to $14.6 billion last year ",
    url: "https://www.wsj.com/video/series/news-explainers/how-china-and-india-help-russias-economy-by-buying-oil/1DFAFAD1-8AAF-44B7-B265-599DD90D1C97",
  },
  {
    id: 45,
    title:
      "Chinese Investment Bank CICC Plans Large Capital Raise to Bolster Business",
    body: "Chinese Investment Bank CICC Plans Large Capital Raise to Bolster Business Bank shares fell after it said it wants to raise as much as $3.9 billion amid competition from foreign rivals",
    url: "https://www.wsj.com/articles/chinese-investment-bank-cicc-plans-large-capital-raise-to-bolster-business-11663156089",
  },
  {
    id: 46,
    title: "US Senate to Wrestle With Bill That Would Boost Taiwan Ties",
    body: "US lawmakers will debate a bill Wednesday to boost ties with Taiwan and give it more military hardware to deter a Chinese invasion. In Washington, where politicians often jockey to show who’s toughest on Beijing, the legislation is making the White House queasy.",
    url: "https://www.bloomberg.com/news/articles/2022-09-14/us-senate-to-wrestle-with-bill-that-would-boost-ties-with-taiwan?leadSource=uverify%20wall",
  },
  {
    id: 47,
    title: "Bank of East Asia China Executive Detained on Bribe Charge",
    body: "A senior executive of Bank of East Asia Ltd.’s China unit has been detained on suspicion of accepting bribes, according to a report",
    url: "https://www.bloomberg.com/news/articles/2022-09-14/bank-of-east-asia-executive-in-china-detained-on-bribery-charge?leadSource=uverify%20wall",
  },
  {
    id: 48,
    title: "How China became big business for Twitter",
    body: "A Reuters review of publicly available government tenders, budget documents and promoted tweets from 2020 to 2022 shows local government authorities and Chinese Communist Party propaganda offices for cities, provinces and even districts across the country have flocked to Twitter to buy ads.",
    url: "https://www.reuters.com/technology/block-blue-ticks-how-china-became-big-business-twitter-2022-09-13/",
  },
  {
    id: 49,
    title:
      "U.S. weighs China sanctions to deter Taiwan action, Taiwan presses EU",
    body: "The United States is considering options for a sanctions package against China to deter it from invading Taiwan, with the European Union coming under diplomatic pressure from Taipei to do the same.",
    url: "https://www.reuters.com/world/asia-pacific/exclusive-us-considers-china-sanctions-deter-taiwan-action-taiwan-presses-eu-2022-09-13/",
  },
  {
    id: 50,
    title: "Germany drawing up new China trade policy, vows 'no more naivety'",
    body: "Germany's economy minister said on Tuesday the government was working on a new trade policy with China to reduce dependence on Chinese raw materials, batteries and semiconductors.",
    url: "https://www.reuters.com/world/europe/germanys-new-china-policy-will-not-be-naive-economy-minister-2022-09-13/",
  },
  {
    id: 51,
    title: "China’s EV Battery Runner-Up is Worth a Look",
    body: "The public listing of CALB, China’s third largest EV battery maker, could be a bright spot in a tough year for Hong Kong.",
    url: "https://www.wsj.com/articles/chinas-ev-battery-runner-up-is-worth-a-look-11663071162",
  },
  {
    id: 52,
    title: "US Chip Curbs Will Highlight Cracks in China’s AI Strategy",
    body: "Computing power is critical to artificial intelligence, and Washington is taking that away from its fiercest rival.",
    url: "https://www.bloomberg.com/opinion/articles/2022-09-12/us-chip-curbs-will-highlight-cracks-in-china-s-ai-strategy?leadSource=uverify%20wall",
  },
  {
    id: 53,
    title: "Biden to Boost US Biomanufacturing to Compete with China",
    body: "President Joe Biden is poised to sign an executive order on Monday to help expand US biomanufacturing and reduce reliance on China.",
    url: "https://www.bloomberg.com/news/articles/2022-09-10/biden-seeks-boost-for-us-biomanufacturing-to-compete-with-china?leadSource=uverify%20wall",
  },
  {
    id: 54,
    title:
      "The Guardian: Imperial College to shut joint research ventures with Chinese defence firms",
    body: "Exclusive: two Chinese-sponsored aerospace research centres to close after warnings of ‘sleepwalking’ into aiding Chinese military.",
    url: "https://www.theguardian.com/world/2022/sep/11/imperial-college-to-shut-joint-research-ventures-with-chinese-defence-firms",
  },
  {
    id: 55,
    title: "Video: How China and India Help Russia’s Economy by Buying Oil",
    body: "Russia is making as much as $20 billion in average monthly oil sales this year, compared to $14.6 billion last year ",
    url: "https://www.wsj.com/video/series/news-explainers/how-china-and-india-help-russias-economy-by-buying-oil/1DFAFAD1-8AAF-44B7-B265-599DD90D1C97",
  },
  {
    id: 56,
    title:
      "Chinese Investment Bank CICC Plans Large Capital Raise to Bolster Business",
    body: "Chinese Investment Bank CICC Plans Large Capital Raise to Bolster Business Bank shares fell after it said it wants to raise as much as $3.9 billion amid competition from foreign rivals",
    url: "https://www.wsj.com/articles/chinese-investment-bank-cicc-plans-large-capital-raise-to-bolster-business-11663156089",
  },
  {
    id: 57,
    title: "US Senate to Wrestle With Bill That Would Boost Taiwan Ties",
    body: "US lawmakers will debate a bill Wednesday to boost ties with Taiwan and give it more military hardware to deter a Chinese invasion. In Washington, where politicians often jockey to show who’s toughest on Beijing, the legislation is making the White House queasy.",
    url: "https://www.bloomberg.com/news/articles/2022-09-14/us-senate-to-wrestle-with-bill-that-would-boost-ties-with-taiwan?leadSource=uverify%20wall",
  },
  {
    id: 58,
    title: "Bank of East Asia China Executive Detained on Bribe Charge",
    body: "A senior executive of Bank of East Asia Ltd.’s China unit has been detained on suspicion of accepting bribes, according to a report",
    url: "https://www.bloomberg.com/news/articles/2022-09-14/bank-of-east-asia-executive-in-china-detained-on-bribery-charge?leadSource=uverify%20wall",
  },
  {
    id: 59,
    title: "How China became big business for Twitter",
    body: "A Reuters review of publicly available government tenders, budget documents and promoted tweets from 2020 to 2022 shows local government authorities and Chinese Communist Party propaganda offices for cities, provinces and even districts across the country have flocked to Twitter to buy ads.",
    url: "https://www.reuters.com/technology/block-blue-ticks-how-china-became-big-business-twitter-2022-09-13/",
  },
  {
    id: 60,
    title:
      "U.S. weighs China sanctions to deter Taiwan action, Taiwan presses EU",
    body: "The United States is considering options for a sanctions package against China to deter it from invading Taiwan, with the European Union coming under diplomatic pressure from Taipei to do the same.",
    url: "https://www.reuters.com/world/asia-pacific/exclusive-us-considers-china-sanctions-deter-taiwan-action-taiwan-presses-eu-2022-09-13/",
  },
  {
    id: 61,
    title: "Germany drawing up new China trade policy, vows 'no more naivety'",
    body: "Germany's economy minister said on Tuesday the government was working on a new trade policy with China to reduce dependence on Chinese raw materials, batteries and semiconductors.",
    url: "https://www.reuters.com/world/europe/germanys-new-china-policy-will-not-be-naive-economy-minister-2022-09-13/",
  },
  {
    id: 62,
    title: "China’s EV Battery Runner-Up is Worth a Look",
    body: "The public listing of CALB, China’s third largest EV battery maker, could be a bright spot in a tough year for Hong Kong.",
    url: "https://www.wsj.com/articles/chinas-ev-battery-runner-up-is-worth-a-look-11663071162",
  },
  {
    id: 63,
    title: "US Chip Curbs Will Highlight Cracks in China’s AI Strategy",
    body: "Computing power is critical to artificial intelligence, and Washington is taking that away from its fiercest rival.",
    url: "https://www.bloomberg.com/opinion/articles/2022-09-12/us-chip-curbs-will-highlight-cracks-in-china-s-ai-strategy?leadSource=uverify%20wall",
  },
  {
    id: 64,
    title: "Biden to Boost US Biomanufacturing to Compete with China",
    body: "President Joe Biden is poised to sign an executive order on Monday to help expand US biomanufacturing and reduce reliance on China.",
    url: "https://www.bloomberg.com/news/articles/2022-09-10/biden-seeks-boost-for-us-biomanufacturing-to-compete-with-china?leadSource=uverify%20wall",
  },
  {
    id: 65,
    title:
      "The Guardian: Imperial College to shut joint research ventures with Chinese defence firms",
    body: "Exclusive: two Chinese-sponsored aerospace research centres to close after warnings of ‘sleepwalking’ into aiding Chinese military.",
    url: "https://www.theguardian.com/world/2022/sep/11/imperial-college-to-shut-joint-research-ventures-with-chinese-defence-firms",
  },
];

module.exports = DEFAULT_DOCUMENTS;
