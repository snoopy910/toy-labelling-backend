const DEFAULT_DOCUMENTS = [
  {
    ID: 0,
    title: "Video: How China and India Help Russia’s Economy by Buying Oil",
    body: "Russia is making as much as $20 billion in average monthly oil sales this year, compared to $14.6 billion last year ",
    URL: "https://www.wsj.com/video/series/news-explainers/how-china-and-india-help-russias-economy-by-buying-oil/1DFAFAD1-8AAF-44B7-B265-599DD90D1C97",
  },
  {
    ID: 1,
    title:
      "Chinese Investment Bank CICC Plans Large Capital Raise to Bolster Business",
    body: "Chinese Investment Bank CICC Plans Large Capital Raise to Bolster Business Bank shares fell after it said it wants to raise as much as $3.9 billion amid competition from foreign rivals",
    URL: "https://www.wsj.com/articles/chinese-investment-bank-cicc-plans-large-capital-raise-to-bolster-business-11663156089",
  },
  {
    ID: 2,
    title: "US Senate to Wrestle With Bill That Would Boost Taiwan Ties",
    body: "US lawmakers will debate a bill Wednesday to boost ties with Taiwan and give it more military hardware to deter a Chinese invasion. In Washington, where politicians often jockey to show who’s toughest on Beijing, the legislation is making the White House queasy.",
    URL: "https://www.bloomberg.com/news/articles/2022-09-14/us-senate-to-wrestle-with-bill-that-would-boost-ties-with-taiwan?leadSource=uverify%20wall",
  },
  {
    ID: 3,
    title: "Bank of East Asia China Executive Detained on Bribe Charge",
    body: "A senior executive of Bank of East Asia Ltd.’s China unit has been detained on suspicion of accepting bribes, according to a report",
    URL: "https://www.bloomberg.com/news/articles/2022-09-14/bank-of-east-asia-executive-in-china-detained-on-bribery-charge?leadSource=uverify%20wall",
  },
  {
    ID: 4,
    title: "How China became big business for Twitter",
    body: "A Reuters review of publicly available government tenders, budget documents and promoted tweets from 2020 to 2022 shows local government authorities and Chinese Communist Party propaganda offices for cities, provinces and even districts across the country have flocked to Twitter to buy ads.",
    URL: "https://www.reuters.com/technology/block-blue-ticks-how-china-became-big-business-twitter-2022-09-13/",
  },
  {
    ID: 5,
    title:
      "U.S. weighs China sanctions to deter Taiwan action, Taiwan presses EU",
    body: "The United States is considering options for a sanctions package against China to deter it from invading Taiwan, with the European Union coming under diplomatic pressure from Taipei to do the same.",
    URL: "https://www.reuters.com/world/asia-pacific/exclusive-us-considers-china-sanctions-deter-taiwan-action-taiwan-presses-eu-2022-09-13/",
  },
  {
    ID: 6,
    title: "Germany drawing up new China trade policy, vows 'no more naivety'",
    body: "Germany's economy minister said on Tuesday the government was working on a new trade policy with China to reduce dependence on Chinese raw materials, batteries and semiconductors.",
    URL: "https://www.reuters.com/world/europe/germanys-new-china-policy-will-not-be-naive-economy-minister-2022-09-13/",
  },
  {
    ID: 7,
    title: "China’s EV Battery Runner-Up is Worth a Look",
    body: "The public listing of CALB, China’s third largest EV battery maker, could be a bright spot in a tough year for Hong Kong.",
    URL: "https://www.wsj.com/articles/chinas-ev-battery-runner-up-is-worth-a-look-11663071162",
  },
  {
    ID: 8,
    title: "US Chip Curbs Will Highlight Cracks in China’s AI Strategy",
    body: "Computing power is critical to artificial intelligence, and Washington is taking that away from its fiercest rival.",
    URL: "https://www.bloomberg.com/opinion/articles/2022-09-12/us-chip-curbs-will-highlight-cracks-in-china-s-ai-strategy?leadSource=uverify%20wall",
  },
  {
    ID: 9,
    title: "Biden to Boost US Biomanufacturing to Compete with China",
    body: "President Joe Biden is poised to sign an executive order on Monday to help expand US biomanufacturing and reduce reliance on China.",
    URL: "https://www.bloomberg.com/news/articles/2022-09-10/biden-seeks-boost-for-us-biomanufacturing-to-compete-with-china?leadSource=uverify%20wall",
  },
  {
    ID: 10,
    title:
      "The Guardian: Imperial College to shut joint research ventures with Chinese defence firms",
    body: "Exclusive: two Chinese-sponsored aerospace research centres to close after warnings of ‘sleepwalking’ into aiding Chinese military.",
    URL: "https://www.theguardian.com/world/2022/sep/11/imperial-college-to-shut-joint-research-ventures-with-chinese-defence-firms",
  },
  {
    ID: 11,
    title: "Video: How China and India Help Russia’s Economy by Buying Oil",
    body: "Russia is making as much as $20 billion in average monthly oil sales this year, compared to $14.6 billion last year ",
    URL: "https://www.wsj.com/video/series/news-explainers/how-china-and-india-help-russias-economy-by-buying-oil/1DFAFAD1-8AAF-44B7-B265-599DD90D1C97",
  },
  {
    ID: 12,
    title:
      "Chinese Investment Bank CICC Plans Large Capital Raise to Bolster Business",
    body: "Chinese Investment Bank CICC Plans Large Capital Raise to Bolster Business Bank shares fell after it said it wants to raise as much as $3.9 billion amid competition from foreign rivals",
    URL: "https://www.wsj.com/articles/chinese-investment-bank-cicc-plans-large-capital-raise-to-bolster-business-11663156089",
  },
  {
    ID: 13,
    title: "US Senate to Wrestle With Bill That Would Boost Taiwan Ties",
    body: "US lawmakers will debate a bill Wednesday to boost ties with Taiwan and give it more military hardware to deter a Chinese invasion. In Washington, where politicians often jockey to show who’s toughest on Beijing, the legislation is making the White House queasy.",
    URL: "https://www.bloomberg.com/news/articles/2022-09-14/us-senate-to-wrestle-with-bill-that-would-boost-ties-with-taiwan?leadSource=uverify%20wall",
  },
  {
    ID: 14,
    title: "Bank of East Asia China Executive Detained on Bribe Charge",
    body: "A senior executive of Bank of East Asia Ltd.’s China unit has been detained on suspicion of accepting bribes, according to a report",
    URL: "https://www.bloomberg.com/news/articles/2022-09-14/bank-of-east-asia-executive-in-china-detained-on-bribery-charge?leadSource=uverify%20wall",
  },
  {
    ID: 15,
    title: "How China became big business for Twitter",
    body: "A Reuters review of publicly available government tenders, budget documents and promoted tweets from 2020 to 2022 shows local government authorities and Chinese Communist Party propaganda offices for cities, provinces and even districts across the country have flocked to Twitter to buy ads.",
    URL: "https://www.reuters.com/technology/block-blue-ticks-how-china-became-big-business-twitter-2022-09-13/",
  },
  {
    ID: 16,
    title:
      "U.S. weighs China sanctions to deter Taiwan action, Taiwan presses EU",
    body: "The United States is considering options for a sanctions package against China to deter it from invading Taiwan, with the European Union coming under diplomatic pressure from Taipei to do the same.",
    URL: "https://www.reuters.com/world/asia-pacific/exclusive-us-considers-china-sanctions-deter-taiwan-action-taiwan-presses-eu-2022-09-13/",
  },
  {
    ID: 17,
    title: "Germany drawing up new China trade policy, vows 'no more naivety'",
    body: "Germany's economy minister said on Tuesday the government was working on a new trade policy with China to reduce dependence on Chinese raw materials, batteries and semiconductors.",
    URL: "https://www.reuters.com/world/europe/germanys-new-china-policy-will-not-be-naive-economy-minister-2022-09-13/",
  },
  {
    ID: 18,
    title: "China’s EV Battery Runner-Up is Worth a Look",
    body: "The public listing of CALB, China’s third largest EV battery maker, could be a bright spot in a tough year for Hong Kong.",
    URL: "https://www.wsj.com/articles/chinas-ev-battery-runner-up-is-worth-a-look-11663071162",
  },
  {
    ID: 19,
    title: "US Chip Curbs Will Highlight Cracks in China’s AI Strategy",
    body: "Computing power is critical to artificial intelligence, and Washington is taking that away from its fiercest rival.",
    URL: "https://www.bloomberg.com/opinion/articles/2022-09-12/us-chip-curbs-will-highlight-cracks-in-china-s-ai-strategy?leadSource=uverify%20wall",
  },
  {
    ID: 20,
    title: "Biden to Boost US Biomanufacturing to Compete with China",
    body: "President Joe Biden is poised to sign an executive order on Monday to help expand US biomanufacturing and reduce reliance on China.",
    URL: "https://www.bloomberg.com/news/articles/2022-09-10/biden-seeks-boost-for-us-biomanufacturing-to-compete-with-china?leadSource=uverify%20wall",
  },
  {
    ID: 21,
    title:
      "The Guardian: Imperial College to shut joint research ventures with Chinese defence firms",
    body: "Exclusive: two Chinese-sponsored aerospace research centres to close after warnings of ‘sleepwalking’ into aiding Chinese military.",
    URL: "https://www.theguardian.com/world/2022/sep/11/imperial-college-to-shut-joint-research-ventures-with-chinese-defence-firms",
  },
  {
    ID: 22,
    title: "Video: How China and India Help Russia’s Economy by Buying Oil",
    body: "Russia is making as much as $20 billion in average monthly oil sales this year, compared to $14.6 billion last year ",
    URL: "https://www.wsj.com/video/series/news-explainers/how-china-and-india-help-russias-economy-by-buying-oil/1DFAFAD1-8AAF-44B7-B265-599DD90D1C97",
  },
  {
    ID: 23,
    title:
      "Chinese Investment Bank CICC Plans Large Capital Raise to Bolster Business",
    body: "Chinese Investment Bank CICC Plans Large Capital Raise to Bolster Business Bank shares fell after it said it wants to raise as much as $3.9 billion amid competition from foreign rivals",
    URL: "https://www.wsj.com/articles/chinese-investment-bank-cicc-plans-large-capital-raise-to-bolster-business-11663156089",
  },
  {
    ID: 24,
    title: "US Senate to Wrestle With Bill That Would Boost Taiwan Ties",
    body: "US lawmakers will debate a bill Wednesday to boost ties with Taiwan and give it more military hardware to deter a Chinese invasion. In Washington, where politicians often jockey to show who’s toughest on Beijing, the legislation is making the White House queasy.",
    URL: "https://www.bloomberg.com/news/articles/2022-09-14/us-senate-to-wrestle-with-bill-that-would-boost-ties-with-taiwan?leadSource=uverify%20wall",
  },
  {
    ID: 25,
    title: "Bank of East Asia China Executive Detained on Bribe Charge",
    body: "A senior executive of Bank of East Asia Ltd.’s China unit has been detained on suspicion of accepting bribes, according to a report",
    URL: "https://www.bloomberg.com/news/articles/2022-09-14/bank-of-east-asia-executive-in-china-detained-on-bribery-charge?leadSource=uverify%20wall",
  },
  {
    ID: 26,
    title: "How China became big business for Twitter",
    body: "A Reuters review of publicly available government tenders, budget documents and promoted tweets from 2020 to 2022 shows local government authorities and Chinese Communist Party propaganda offices for cities, provinces and even districts across the country have flocked to Twitter to buy ads.",
    URL: "https://www.reuters.com/technology/block-blue-ticks-how-china-became-big-business-twitter-2022-09-13/",
  },
  {
    ID: 27,
    title:
      "U.S. weighs China sanctions to deter Taiwan action, Taiwan presses EU",
    body: "The United States is considering options for a sanctions package against China to deter it from invading Taiwan, with the European Union coming under diplomatic pressure from Taipei to do the same.",
    URL: "https://www.reuters.com/world/asia-pacific/exclusive-us-considers-china-sanctions-deter-taiwan-action-taiwan-presses-eu-2022-09-13/",
  },
  {
    ID: 28,
    title: "Germany drawing up new China trade policy, vows 'no more naivety'",
    body: "Germany's economy minister said on Tuesday the government was working on a new trade policy with China to reduce dependence on Chinese raw materials, batteries and semiconductors.",
    URL: "https://www.reuters.com/world/europe/germanys-new-china-policy-will-not-be-naive-economy-minister-2022-09-13/",
  },
  {
    ID: 29,
    title: "China’s EV Battery Runner-Up is Worth a Look",
    body: "The public listing of CALB, China’s third largest EV battery maker, could be a bright spot in a tough year for Hong Kong.",
    URL: "https://www.wsj.com/articles/chinas-ev-battery-runner-up-is-worth-a-look-11663071162",
  },
  {
    ID: 30,
    title: "US Chip Curbs Will Highlight Cracks in China’s AI Strategy",
    body: "Computing power is critical to artificial intelligence, and Washington is taking that away from its fiercest rival.",
    URL: "https://www.bloomberg.com/opinion/articles/2022-09-12/us-chip-curbs-will-highlight-cracks-in-china-s-ai-strategy?leadSource=uverify%20wall",
  },
  {
    ID: 31,
    title: "Biden to Boost US Biomanufacturing to Compete with China",
    body: "President Joe Biden is poised to sign an executive order on Monday to help expand US biomanufacturing and reduce reliance on China.",
    URL: "https://www.bloomberg.com/news/articles/2022-09-10/biden-seeks-boost-for-us-biomanufacturing-to-compete-with-china?leadSource=uverify%20wall",
  },
  {
    ID: 32,
    title:
      "The Guardian: Imperial College to shut joint research ventures with Chinese defence firms",
    body: "Exclusive: two Chinese-sponsored aerospace research centres to close after warnings of ‘sleepwalking’ into aiding Chinese military.",
    URL: "https://www.theguardian.com/world/2022/sep/11/imperial-college-to-shut-joint-research-ventures-with-chinese-defence-firms",
  },
  {
    ID: 33,
    title: "Video: How China and India Help Russia’s Economy by Buying Oil",
    body: "Russia is making as much as $20 billion in average monthly oil sales this year, compared to $14.6 billion last year ",
    URL: "https://www.wsj.com/video/series/news-explainers/how-china-and-india-help-russias-economy-by-buying-oil/1DFAFAD1-8AAF-44B7-B265-599DD90D1C97",
  },
  {
    ID: 34,
    title:
      "Chinese Investment Bank CICC Plans Large Capital Raise to Bolster Business",
    body: "Chinese Investment Bank CICC Plans Large Capital Raise to Bolster Business Bank shares fell after it said it wants to raise as much as $3.9 billion amid competition from foreign rivals",
    URL: "https://www.wsj.com/articles/chinese-investment-bank-cicc-plans-large-capital-raise-to-bolster-business-11663156089",
  },
  {
    ID: 35,
    title: "US Senate to Wrestle With Bill That Would Boost Taiwan Ties",
    body: "US lawmakers will debate a bill Wednesday to boost ties with Taiwan and give it more military hardware to deter a Chinese invasion. In Washington, where politicians often jockey to show who’s toughest on Beijing, the legislation is making the White House queasy.",
    URL: "https://www.bloomberg.com/news/articles/2022-09-14/us-senate-to-wrestle-with-bill-that-would-boost-ties-with-taiwan?leadSource=uverify%20wall",
  },
  {
    ID: 36,
    title: "Bank of East Asia China Executive Detained on Bribe Charge",
    body: "A senior executive of Bank of East Asia Ltd.’s China unit has been detained on suspicion of accepting bribes, according to a report",
    URL: "https://www.bloomberg.com/news/articles/2022-09-14/bank-of-east-asia-executive-in-china-detained-on-bribery-charge?leadSource=uverify%20wall",
  },
  {
    ID: 37,
    title: "How China became big business for Twitter",
    body: "A Reuters review of publicly available government tenders, budget documents and promoted tweets from 2020 to 2022 shows local government authorities and Chinese Communist Party propaganda offices for cities, provinces and even districts across the country have flocked to Twitter to buy ads.",
    URL: "https://www.reuters.com/technology/block-blue-ticks-how-china-became-big-business-twitter-2022-09-13/",
  },
  {
    ID: 38,
    title:
      "U.S. weighs China sanctions to deter Taiwan action, Taiwan presses EU",
    body: "The United States is considering options for a sanctions package against China to deter it from invading Taiwan, with the European Union coming under diplomatic pressure from Taipei to do the same.",
    URL: "https://www.reuters.com/world/asia-pacific/exclusive-us-considers-china-sanctions-deter-taiwan-action-taiwan-presses-eu-2022-09-13/",
  },
  {
    ID: 39,
    title: "Germany drawing up new China trade policy, vows 'no more naivety'",
    body: "Germany's economy minister said on Tuesday the government was working on a new trade policy with China to reduce dependence on Chinese raw materials, batteries and semiconductors.",
    URL: "https://www.reuters.com/world/europe/germanys-new-china-policy-will-not-be-naive-economy-minister-2022-09-13/",
  },
  {
    ID: 40,
    title: "China’s EV Battery Runner-Up is Worth a Look",
    body: "The public listing of CALB, China’s third largest EV battery maker, could be a bright spot in a tough year for Hong Kong.",
    URL: "https://www.wsj.com/articles/chinas-ev-battery-runner-up-is-worth-a-look-11663071162",
  },
  {
    ID: 41,
    title: "US Chip Curbs Will Highlight Cracks in China’s AI Strategy",
    body: "Computing power is critical to artificial intelligence, and Washington is taking that away from its fiercest rival.",
    URL: "https://www.bloomberg.com/opinion/articles/2022-09-12/us-chip-curbs-will-highlight-cracks-in-china-s-ai-strategy?leadSource=uverify%20wall",
  },
  {
    ID: 42,
    title: "Biden to Boost US Biomanufacturing to Compete with China",
    body: "President Joe Biden is poised to sign an executive order on Monday to help expand US biomanufacturing and reduce reliance on China.",
    URL: "https://www.bloomberg.com/news/articles/2022-09-10/biden-seeks-boost-for-us-biomanufacturing-to-compete-with-china?leadSource=uverify%20wall",
  },
  {
    ID: 43,
    title:
      "The Guardian: Imperial College to shut joint research ventures with Chinese defence firms",
    body: "Exclusive: two Chinese-sponsored aerospace research centres to close after warnings of ‘sleepwalking’ into aiding Chinese military.",
    URL: "https://www.theguardian.com/world/2022/sep/11/imperial-college-to-shut-joint-research-ventures-with-chinese-defence-firms",
  },
  {
    ID: 44,
    title: "Video: How China and India Help Russia’s Economy by Buying Oil",
    body: "Russia is making as much as $20 billion in average monthly oil sales this year, compared to $14.6 billion last year ",
    URL: "https://www.wsj.com/video/series/news-explainers/how-china-and-india-help-russias-economy-by-buying-oil/1DFAFAD1-8AAF-44B7-B265-599DD90D1C97",
  },
  {
    ID: 45,
    title:
      "Chinese Investment Bank CICC Plans Large Capital Raise to Bolster Business",
    body: "Chinese Investment Bank CICC Plans Large Capital Raise to Bolster Business Bank shares fell after it said it wants to raise as much as $3.9 billion amid competition from foreign rivals",
    URL: "https://www.wsj.com/articles/chinese-investment-bank-cicc-plans-large-capital-raise-to-bolster-business-11663156089",
  },
  {
    ID: 46,
    title: "US Senate to Wrestle With Bill That Would Boost Taiwan Ties",
    body: "US lawmakers will debate a bill Wednesday to boost ties with Taiwan and give it more military hardware to deter a Chinese invasion. In Washington, where politicians often jockey to show who’s toughest on Beijing, the legislation is making the White House queasy.",
    URL: "https://www.bloomberg.com/news/articles/2022-09-14/us-senate-to-wrestle-with-bill-that-would-boost-ties-with-taiwan?leadSource=uverify%20wall",
  },
  {
    ID: 47,
    title: "Bank of East Asia China Executive Detained on Bribe Charge",
    body: "A senior executive of Bank of East Asia Ltd.’s China unit has been detained on suspicion of accepting bribes, according to a report",
    URL: "https://www.bloomberg.com/news/articles/2022-09-14/bank-of-east-asia-executive-in-china-detained-on-bribery-charge?leadSource=uverify%20wall",
  },
  {
    ID: 48,
    title: "How China became big business for Twitter",
    body: "A Reuters review of publicly available government tenders, budget documents and promoted tweets from 2020 to 2022 shows local government authorities and Chinese Communist Party propaganda offices for cities, provinces and even districts across the country have flocked to Twitter to buy ads.",
    URL: "https://www.reuters.com/technology/block-blue-ticks-how-china-became-big-business-twitter-2022-09-13/",
  },
  {
    ID: 49,
    title:
      "U.S. weighs China sanctions to deter Taiwan action, Taiwan presses EU",
    body: "The United States is considering options for a sanctions package against China to deter it from invading Taiwan, with the European Union coming under diplomatic pressure from Taipei to do the same.",
    URL: "https://www.reuters.com/world/asia-pacific/exclusive-us-considers-china-sanctions-deter-taiwan-action-taiwan-presses-eu-2022-09-13/",
  },
  {
    ID: 50,
    title: "Germany drawing up new China trade policy, vows 'no more naivety'",
    body: "Germany's economy minister said on Tuesday the government was working on a new trade policy with China to reduce dependence on Chinese raw materials, batteries and semiconductors.",
    URL: "https://www.reuters.com/world/europe/germanys-new-china-policy-will-not-be-naive-economy-minister-2022-09-13/",
  },
  {
    ID: 51,
    title: "China’s EV Battery Runner-Up is Worth a Look",
    body: "The public listing of CALB, China’s third largest EV battery maker, could be a bright spot in a tough year for Hong Kong.",
    URL: "https://www.wsj.com/articles/chinas-ev-battery-runner-up-is-worth-a-look-11663071162",
  },
  {
    ID: 52,
    title: "US Chip Curbs Will Highlight Cracks in China’s AI Strategy",
    body: "Computing power is critical to artificial intelligence, and Washington is taking that away from its fiercest rival.",
    URL: "https://www.bloomberg.com/opinion/articles/2022-09-12/us-chip-curbs-will-highlight-cracks-in-china-s-ai-strategy?leadSource=uverify%20wall",
  },
  {
    ID: 53,
    title: "Biden to Boost US Biomanufacturing to Compete with China",
    body: "President Joe Biden is poised to sign an executive order on Monday to help expand US biomanufacturing and reduce reliance on China.",
    URL: "https://www.bloomberg.com/news/articles/2022-09-10/biden-seeks-boost-for-us-biomanufacturing-to-compete-with-china?leadSource=uverify%20wall",
  },
  {
    ID: 54,
    title:
      "The Guardian: Imperial College to shut joint research ventures with Chinese defence firms",
    body: "Exclusive: two Chinese-sponsored aerospace research centres to close after warnings of ‘sleepwalking’ into aiding Chinese military.",
    URL: "https://www.theguardian.com/world/2022/sep/11/imperial-college-to-shut-joint-research-ventures-with-chinese-defence-firms",
  },
  {
    ID: 55,
    title: "Video: How China and India Help Russia’s Economy by Buying Oil",
    body: "Russia is making as much as $20 billion in average monthly oil sales this year, compared to $14.6 billion last year ",
    URL: "https://www.wsj.com/video/series/news-explainers/how-china-and-india-help-russias-economy-by-buying-oil/1DFAFAD1-8AAF-44B7-B265-599DD90D1C97",
  },
  {
    ID: 56,
    title:
      "Chinese Investment Bank CICC Plans Large Capital Raise to Bolster Business",
    body: "Chinese Investment Bank CICC Plans Large Capital Raise to Bolster Business Bank shares fell after it said it wants to raise as much as $3.9 billion amid competition from foreign rivals",
    URL: "https://www.wsj.com/articles/chinese-investment-bank-cicc-plans-large-capital-raise-to-bolster-business-11663156089",
  },
  {
    ID: 57,
    title: "US Senate to Wrestle With Bill That Would Boost Taiwan Ties",
    body: "US lawmakers will debate a bill Wednesday to boost ties with Taiwan and give it more military hardware to deter a Chinese invasion. In Washington, where politicians often jockey to show who’s toughest on Beijing, the legislation is making the White House queasy.",
    URL: "https://www.bloomberg.com/news/articles/2022-09-14/us-senate-to-wrestle-with-bill-that-would-boost-ties-with-taiwan?leadSource=uverify%20wall",
  },
  {
    ID: 58,
    title: "Bank of East Asia China Executive Detained on Bribe Charge",
    body: "A senior executive of Bank of East Asia Ltd.’s China unit has been detained on suspicion of accepting bribes, according to a report",
    URL: "https://www.bloomberg.com/news/articles/2022-09-14/bank-of-east-asia-executive-in-china-detained-on-bribery-charge?leadSource=uverify%20wall",
  },
  {
    ID: 59,
    title: "How China became big business for Twitter",
    body: "A Reuters review of publicly available government tenders, budget documents and promoted tweets from 2020 to 2022 shows local government authorities and Chinese Communist Party propaganda offices for cities, provinces and even districts across the country have flocked to Twitter to buy ads.",
    URL: "https://www.reuters.com/technology/block-blue-ticks-how-china-became-big-business-twitter-2022-09-13/",
  },
  {
    ID: 60,
    title:
      "U.S. weighs China sanctions to deter Taiwan action, Taiwan presses EU",
    body: "The United States is considering options for a sanctions package against China to deter it from invading Taiwan, with the European Union coming under diplomatic pressure from Taipei to do the same.",
    URL: "https://www.reuters.com/world/asia-pacific/exclusive-us-considers-china-sanctions-deter-taiwan-action-taiwan-presses-eu-2022-09-13/",
  },
  {
    ID: 61,
    title: "Germany drawing up new China trade policy, vows 'no more naivety'",
    body: "Germany's economy minister said on Tuesday the government was working on a new trade policy with China to reduce dependence on Chinese raw materials, batteries and semiconductors.",
    URL: "https://www.reuters.com/world/europe/germanys-new-china-policy-will-not-be-naive-economy-minister-2022-09-13/",
  },
  {
    ID: 62,
    title: "China’s EV Battery Runner-Up is Worth a Look",
    body: "The public listing of CALB, China’s third largest EV battery maker, could be a bright spot in a tough year for Hong Kong.",
    URL: "https://www.wsj.com/articles/chinas-ev-battery-runner-up-is-worth-a-look-11663071162",
  },
  {
    ID: 63,
    title: "US Chip Curbs Will Highlight Cracks in China’s AI Strategy",
    body: "Computing power is critical to artificial intelligence, and Washington is taking that away from its fiercest rival.",
    URL: "https://www.bloomberg.com/opinion/articles/2022-09-12/us-chip-curbs-will-highlight-cracks-in-china-s-ai-strategy?leadSource=uverify%20wall",
  },
  {
    ID: 64,
    title: "Biden to Boost US Biomanufacturing to Compete with China",
    body: "President Joe Biden is poised to sign an executive order on Monday to help expand US biomanufacturing and reduce reliance on China.",
    URL: "https://www.bloomberg.com/news/articles/2022-09-10/biden-seeks-boost-for-us-biomanufacturing-to-compete-with-china?leadSource=uverify%20wall",
  },
  {
    ID: 65,
    title:
      "The Guardian: Imperial College to shut joint research ventures with Chinese defence firms",
    body: "Exclusive: two Chinese-sponsored aerospace research centres to close after warnings of ‘sleepwalking’ into aiding Chinese military.",
    URL: "https://www.theguardian.com/world/2022/sep/11/imperial-college-to-shut-joint-research-ventures-with-chinese-defence-firms",
  },
];

module.exports = DEFAULT_DOCUMENTS;
