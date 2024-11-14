const express = require("express");
const app = express();
const port = process.env.port 

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why don't skeletons fight each other? They don't have the guts.",
  "What do you call fake spaghetti? An impasta!",
  "Why did the bicycle fall over? Because it was two-tired!",
  "Why don't some couples go to the gym? Because some relationships don't work out.",
  "Why did the math book look sad? Because it had too many problems.",
  "What do you call cheese that isn't yours? Nacho cheese!",
  "Why couldn't the leopard play hide and seek? Because he was always spotted.",
  "What do you call a bear with no teeth? A gummy bear!",
  "What do you get when you cross a snowman with a vampire? Frostbite.",
  "Why don’t some couples go to the gym? Because some relationships don’t work out.",
  "Did you hear about the mathematician who’s afraid of negative numbers? Hell stop at nothing to avoid them.",
  "Why don’t scientists trust atoms? Because they make up everything!",
  "How do you organize a space party? You planet.",
  "What’s orange and sounds like a parrot? A carrot.",
  "Why was the math book sad? Because it had too many problems.",
  "What did the left eye say to the right eye? Between you and me, something smells.",
  "Why don’t skeletons fight each other? They don’t have the guts.",
  "What do you call fake spaghetti? An impasta.",
  "How does a penguin build its house? Igloos it together.",
  "What do you get when you cross a snowman with a dog? Frostbite.",
  "Why do cows have hooves instead of feet? Because they lactose.",
  "Why did the bicycle fall over? It was two-tired.",
  "Why don’t eggs tell jokes? They’d crack each other up.",
  "How many tickles does it take to make an octopus laugh? Ten tickles.",
  "What’s a skeleton’s least favorite room in the house? The living room.",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
  "What do you call an alligator in a vest? An investigator.",
  "Why did the chicken join a band? Because it had the drumsticks!",
  // Add more jokes here, up to 100
];

const jokes_hi = [
  "बिल्ली साइकिल क्यों नहीं चला सकती? क्योंकि उसके पास लाइसेंस नहीं है!",
  "दोस्त: तुम इतने खुश क्यों हो? दोस्त: मैंने काम का बोझ अपने बॉस से शेयर किया है। अब वो भी परेशान हैं।",
  "क्या होता है जब आप स्पेस में गाड़ी चलाते हैं? आपको पता नहीं चलता कि आप किसे ओवरटेक कर रहे हैं!",
  "डॉक्टर: आप कौन सी समस्या से परेशान हैं? मरीज: डॉक्टर साहब, जब मैं सोता हूँ तो बर्फ की तरह ठंडा हो जाता हूँ।",
  "टीचर: बच्चों, अब मैं तुमसे एक आसान सवाल पूछूंगा। बताओ, कौन सी चीज पानी में भीगती नहीं है? छात्र: सर, पानी!",
  "डॉक्टर: ये दवाई रोजाना दो बार लेना। मरीज: लेकिन डॉक्टर, ये तो गोली है।",
  "दादी: क्या कर रहे हो, बेटा? पोता: दादी, मैं अपनी जिंदगी को बर्बाद कर रहा हूँ। दादी: ये क्या होता है? पोता: कुछ नहीं, दादी, सोशल मीडिया पर पोस्ट डाल रहा हूँ।",
  "पिता: बेटा, इतना मोबाइल मत चलाओ, आंखें खराब हो जाएंगी। बेटा: पापा, आंखें तो आपके जमाने में खराब होती थीं, अब तो सिर्फ मोबाइल की बैटरी खत्म होती है!",
  "बच्चा: मम्मी, तुम कितनी स्मार्ट हो! मम्मी: क्यों बेटा? बच्चा: क्योंकि तुमने पापा से शादी कर ली।",
  "डॉक्टर: आपकी जांच रिपोर्ट्स आ गई हैं। मरीज: ठीक है, डॉक्टर साहब, जरा मेरी बीवी को बता दीजिये, ताकि मैं चैन से सो सकूँ!",
  "चिंटू: भाई, मुझे कुछ पैसे चाहिए। मिंटू: क्यों? चिंटू: मैं शादी करने जा रहा हूँ। मिंटू: शादी के बाद मांग लेना, तब पैसे की ज्यादा जरूरत पड़ेगी!",
  "पत्नी: आप हमेशा अपने पुराने दिनों की बात क्यों करते रहते हो? पति: क्योंकि उन दिनों मैं जवान और खूबसूरत था!",
  "बच्चा: पापा, आप हमेशा कंप्यूटर पर क्या करते हो? पिता: बेटा, मैं इंटरनेट पर दुनिया देखता हूँ। बच्चा: तो फिर मम्मी हमेशा कहती हैं कि आप तो बस टाइम पास करते रहते हो!",
  "मास्टर जी: तुम्हारे पास दिमाग है या मिट्टी? छात्र: सर, अब तो मेरे पास दो हैं, एक असली और एक आपकी क्लास का!",
  "बॉस: तुम लेट क्यों आए हो? कर्मचारी: सर, अपनी घड़ी देख कर आया हूँ। बॉस: तो क्या हुआ? कर्मचारी: सर, मेरी घड़ी भी लेट चलती है!",
  "बच्चा: मम्मी, जब मैं बड़ा हो जाऊंगा तो क्या करूँगा? मम्मी: बेटा, तुम भी वही करोगे, जो तुम्हारे पापा करते हैं। बच्चा: तो फिर मुझे सोफे पर बैठकर टीवी देखने की प्रैक्टिस करनी चाहिए!",
  "डॉक्टर: आपको सिगरेट छोड़नी होगी। मरीज: ठीक है, डॉक्टर साहब, किसके पास छोड़ दूं?",
  "पत्नी: सुनिए, हमारी शादी को 10 साल हो गए, एक गिफ्ट नहीं दिया। पति: अरे, तुम तो गिफ्ट हो, अब दो गिफ्ट थोड़ी दूंगा!",
  "टीचर: किसी ने अपने दिमाग का पूरा इस्तेमाल किया है? पप्पू: हां, सर, मैंने। टीचर: कैसे? पप्पू: सर, मैंने तो दिमाग का इस्तेमाल करके इसे आराम दिया!",
  "पत्नी: आपने कभी सोचा है कि शादी क्यों की? पति: हां, सोचा तो था, पर आज तक समझ नहीं पाया!",
  "मित्र: तुम हमेशा हंसते रहते हो, कोई टेंशन नहीं होती क्या? दोस्त: होती है, पर हंसने से टेंशन भाग जाती है!",
  "टीचर: बच्चो, इन्सान की कुल कितनी हड्डियां होती हैं? छात्र: सर, इन्सान की कुल 206 हड्डियां होती हैं। टीचर: और गधे की? छात्र: सर, गिन कर देख लो!",
  "डॉक्टर: ये चोट कैसे लगी? मरीज: डॉक्टर साहब, मेरी बीवी ने मुझे कुर्सी से मारा। डॉक्टर: क्यों? मरीज: डॉक्टर साहब, मैंने कह दिया था कि मैं उसे बहुत प्यार करता हूँ, लेकिन वो तो मुसीबत है!",
  "दोस्त: यार, तुम इतने मोटे क्यों हो गए हो? दोस्त: यार, ये तो शरीर की मरम्मत है, और इसमें थोड़ा वजन बढ़ जाता है।",
  "बच्चा: पापा, आपने बचपन में कौन-सा खेल खेला था? पिता: बेटा, हम तो गिल्ली-डंडा खेलते थे। बच्चा: क्या पापा, आपके पास प्ले स्टोर नहीं था?",
  "पत्नी: अगर तुम्हें घर के सारे काम करने पड़ें तो तुम क्या करोगे? पति: मैं किसी से भी ज्यादा काम करने के लिए तैयार हूँ, पर मुझे घर के काम मत देना!",
  "डॉक्टर: आपको ज्यादा सोना मत चाहिए। मरीज: ठीक है, डॉक्टर साहब, मैं सोने का एक नया तरीका ढूंढ लूंगा!",
  "पत्नी: अगर तुम्हें पता चले कि मैं किसी और से प्यार करती हूँ, तो तुम क्या करोगे? पति: मैं उससे हाथ जोड़कर कहूंगा, 'भाई, इसे संभालना मुश्किल है!'",
  "बच्चा: मम्मी, अगर बिच्छू काट ले तो क्या होगा? मम्मी: कुछ नहीं, बेटा। बच्चा: तो बिच्छू की इतनी बदनामी क्यों है?",
  "बच्चा: मम्मी, परीक्षाओं में फेल होने के लिए भी पढ़ाई करनी पड़ती है? मम्मी: नहीं बेटा, फेल होने के लिए बस सोचना पड़ता है!",
  "डॉक्टर: क्या हाल है? मरीज: डॉक्टर साहब, हाल तो ठीक है, पर नाम ही खराब कर दिया!",
];

app.get("/random-jokes", (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const randomjokes = jokes[randomIndex];
  res.json({ Joke: randomjokes });
});
app.get("/random-jokes-hi", (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes_hi.length);
  const randomjokes = jokes_hi[randomIndex];
  res.json({ Joke: randomjokes });
});

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file
app.get("/", function (req, res) {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
