// =================== REAL-WORLD EXAMPLES + NARRATION TEXT ===================
// Keyed by chapter ID.  Each entry has:
//   learn.speakText  — read aloud on the Learn step
//   intro.speakText  — read aloud on the Intro step
//   learn.realWorld  — displayed as a real-life card in the Learn step

const REALWORLD = {

  1: {
    intro: { speakText: "Welcome to Chapter 1 — Hello Python! Python is one of the most popular programming languages in the world. It's used by NASA, by Google, by Instagram, and even to control robots on Mars. Today you'll write your very first Python program. Let's go!" },
    learn: {
      speakText: "In this lesson you'll learn about the print function. Think of print as giving your computer a voice. You write print, then open a bracket, then put your message inside speech marks, close the bracket — and Python says it on screen! It's the very first thing every Python programmer learns. Even the engineers at Google and NASA use print to check their code is working correctly.",
      realWorld: {
        heading: "Where is print() used in the real world?",
        examples: [
          { icon: "🌐", app: "Web Servers", desc: "When you visit a website, the server uses print-like logging to record every visit, error, and action — helping engineers spot problems." },
          { icon: "🤖", app: "AI & ChatGPT", desc: "AI systems print thousands of log messages every second so engineers can monitor what the AI is doing and fix any bugs." },
          { icon: "🎮", app: "Video Games", desc: "Game developers use print during development to track player health, scores, and events — it's how they debug before the game is released." },
        ],
        tip: "Professional developers call this 'logging'. The print() function is the simplest form of logging — it's used every single day in real codebases!"
      }
    }
  },

  2: {
    intro: { speakText: "Welcome to Chapter 2 — Variables! This is one of the most important ideas in all of programming. Once you understand variables, you'll see them everywhere — in every app, every website, every game. Let's discover what they are!" },
    learn: {
      speakText: "A variable is like a labelled jar in your kitchen. You put something inside the jar, stick a label on it, and whenever you need it you just call its name. In Python you create a variable by writing the name, then equals, then the value. When you log into Netflix, your username, your subscription type, and your watch history are all stored as variables. When you play a game, your score, your health, and your level are all variables.",
      realWorld: {
        heading: "Where are variables used in the real world?",
        examples: [
          { icon: "📺", app: "Netflix", desc: "When you sign in, variables store your name, subscription level, watch history, and even which episode you left off on." },
          { icon: "🛒", app: "Amazon", desc: "Your shopping cart, delivery address, payment method and order status are all stored as variables behind the scenes." },
          { icon: "🎮", app: "Fortnite & Minecraft", desc: "Every player's health points, position, inventory, and score are variables that update hundreds of times per second during gameplay." },
        ],
        tip: "In a typical large app like WhatsApp, there are millions of variables storing every user's messages, contacts, and settings — all running simultaneously!"
      }
    }
  },

  3: {
    intro: { speakText: "Welcome to Chapter 3 — Numbers and Maths! Numbers are the language of science and technology. Python is an incredibly powerful calculator that can do maths instantly — from simple addition to calculating the distance between galaxies. Let's explore!" },
    learn: {
      speakText: "Python knows all the maths operators you've learned at school — plus, minus, multiply, divide — and much more powerful ones too. The double star means to the power of, which is incredibly useful in science. Google Maps uses maths exactly like this to calculate your driving distance and travel time. Shopping websites calculate your total, discount, and tax using maths operations. Even the physics engine in video games — which makes things fall and bounce realistically — uses Python maths.",
      realWorld: {
        heading: "Where is maths code used in the real world?",
        examples: [
          { icon: "🗺️", app: "Google Maps", desc: "Calculates distances, travel times, and the fastest route using thousands of mathematical operations every time you search." },
          { icon: "💳", app: "Online Shops", desc: "Every checkout page uses maths to calculate subtotals, apply discount codes, add VAT, and compute delivery costs." },
          { icon: "🚀", app: "SpaceX Rockets", desc: "Rocket trajectory, fuel consumption, and landing burn timing are all calculated using Python maths — lives depend on getting it right!" },
        ],
        tip: "Python's ** (power) operator is used everywhere in physics and engineering. E = mc² uses a power of 2 — and Python can calculate it in one line!"
      }
    }
  },

  4: {
    intro: { speakText: "Welcome to Chapter 4 — Strings and Text! Strings are everywhere on the internet. Every name, every tweet, every product description, every email is a string. Learning to work with strings is one of the most useful skills in all of programming." },
    learn: {
      speakText: "A string is any piece of text that Python can store and work with. You create a string by wrapping text in quotation marks. F-strings are a modern and very powerful way to mix variables and text together — you put an f before the opening quote, then write your variable names inside curly braces. When Twitter shows you a tweet, every word in that tweet is a string. When Google shows you search results, each title and description is a string built using exactly this kind of text formatting.",
      realWorld: {
        heading: "Where are strings used in the real world?",
        examples: [
          { icon: "📧", app: "Gmail", desc: "Every email subject, body, and sender name is a string. Gmail searches through millions of strings in milliseconds to find your emails." },
          { icon: "📱", app: "WhatsApp", desc: "Every message you send is a string stored on a server. WhatsApp uses f-strings to build personalised notifications like 'John sent you a message'." },
          { icon: "🛍️", app: "Amazon Product Pages", desc: "Product names, descriptions, reviews, and seller names are all strings formatted and displayed using techniques just like the ones you're learning." },
        ],
        tip: "F-strings (formatted strings) were added to Python in 2016 and are now used in virtually every modern Python codebase. Real engineers love them because they're so clean and readable!"
      }
    }
  },

  5: {
    intro: { speakText: "Welcome to Chapter 5 — User Input! So far your programs do the same thing every time. But real apps are interactive — they respond to YOU. In this chapter you'll learn how to make Python ask questions and use the answers. This is how almost every app works!" },
    learn: {
      speakText: "The input function pauses your program and waits for the user to type something and press Enter. It then stores whatever they typed as a string. If you want to use it as a number, you need to convert it using int for whole numbers or float for decimals. Think about when you search on Google — you type something and press Enter. Your search term is captured exactly like this, with something very similar to Python's input function. Every sign-up form, every search bar, every calculator app uses this same idea.",
      realWorld: {
        heading: "Where is user input used in the real world?",
        examples: [
          { icon: "🔍", app: "Google Search", desc: "When you type in the search bar and press Enter, your words are captured as input, sent to Google's servers, and used to find matching results." },
          { icon: "🏦", app: "Banking Apps", desc: "When you type in an amount to transfer, that's user input being captured, converted to a number, and validated before the transaction happens." },
          { icon: "🎮", app: "Game Settings", desc: "When you enter your player name or choose difficulty in a game, that's the input() equivalent collecting your choice and storing it as a variable." },
        ],
        tip: "Always convert input() to the right type! One of the most common bugs beginners make is forgetting to do int() or float() and then wondering why their maths doesn't work."
      }
    }
  },

  6: {
    intro: { speakText: "Welcome to Chapter 6 — If and Else! This might be the most important concept in all of programming. The ability for code to make decisions and take different paths based on conditions is what makes apps intelligent and useful. You'll see this idea in every piece of software ever written." },
    learn: {
      speakText: "An if statement says: if this condition is true, do this thing — otherwise, do something else. The code inside the if block only runs when the condition is true. The else block runs when it's false. Instagram uses if and else to decide whether to show you an ad or a friend's post. Your banking app uses if and else to check whether you have enough money before letting you make a payment. Every time you tap a button in an app, an if statement somewhere is checking what should happen next.",
      realWorld: {
        heading: "Where is if/else used in the real world?",
        examples: [
          { icon: "🔐", app: "Login Systems", desc: "If username exists AND password is correct → grant access. Else → show error. Every login screen in the world is built on if/else." },
          { icon: "📱", app: "Instagram Feed", desc: "If you've been shown this ad before → skip it. If this friend posts often → show it higher. Hundreds of if/else decisions shape your feed." },
          { icon: "🚦", app: "Smart Traffic Lights", desc: "If sensor detects cars waiting → turn green. If emergency vehicle approaching → clear the road. Real traffic systems run on if/else logic." },
        ],
        tip: "The if/else pattern is sometimes called 'conditional logic' or 'branching'. A typical large app like Facebook makes millions of if/else decisions every second!"
      }
    }
  },

  7: {
    intro: { speakText: "Welcome to Chapter 7 — Elif! Real life rarely has just two choices. Scientists classify results into many categories. Apps need to handle many different situations. That's where elif comes in — it lets you check multiple conditions one by one and pick the right path." },
    learn: {
      speakText: "Elif is short for else-if. You can chain as many elif blocks as you need between your if and your else. Python checks them in order from top to bottom and runs the very first one that is true — then skips all the rest. Amazon uses elif chains to categorize millions of products. Spotify uses them to pick which type of recommendation to show you based on your listening history. Weather apps use them to choose which icon to display based on temperature and conditions.",
      realWorld: {
        heading: "Where is elif used in the real world?",
        examples: [
          { icon: "📦", app: "Amazon Delivery", desc: "If order placed before 2pm → same-day delivery. Elif placed before 6pm → next-day. Elif placed on weekend → Monday. Else → standard 3-5 days." },
          { icon: "🎵", app: "Spotify", desc: "If you haven't listened in a week → play your top songs. Elif you're in discover mode → show new artists. Elif it's morning → show your daily mix." },
          { icon: "✈️", app: "Airline Booking", desc: "If premium member → show business class first. Elif economy plus member → show extra legroom. Elif standard → show basic economy. Else → show budget options." },
        ],
        tip: "In real apps, you might have 10 or even 20 elif blocks for complex business rules. This is sometimes called a 'decision tree' — and elif is Python's way of building one!"
      }
    }
  },

  8: {
    intro: { speakText: "Welcome to Chapter 8 — Comparisons and Logic! This is where Python gets truly powerful. Combining conditions with and, or, and not lets you express complex real-world rules in just one line of code. Every secure website in the world relies on exactly this." },
    learn: {
      speakText: "Comparison operators let you check if values are equal, greater, or less than each other. Logical operators let you combine multiple conditions. And means both must be true. Or means at least one must be true. Not flips true to false. The most important use of this in the real world is login security — if the username matches AND the password matches, grant access. Otherwise, reject. Two-factor authentication adds another condition — if username matches AND password matches AND verification code is correct, then allow entry.",
      realWorld: {
        heading: "Where are comparisons and logic used in real life?",
        examples: [
          { icon: "🔒", app: "Cybersecurity", desc: "Every password check uses == to compare. Two-factor authentication uses 'and' to require multiple correct conditions before granting access." },
          { icon: "✈️", app: "Flight Booking", desc: "A seat shows as available only if: seatNumber is not in bookedSeats AND seatClass matches your ticket AND the flight is not cancelled." },
          { icon: "🏥", app: "Hospital Systems", desc: "A patient gets priority treatment if: condition is critical OR waiting time is over 4 hours OR patient is under 5 years old. Logic saves lives!" },
        ],
        tip: "The and, or, not operators come directly from formal logic and electrical circuit design. The very first computers were built using physical 'and gates' and 'or gates' — now you're using their software equivalent!"
      }
    }
  },

  9: {
    intro: { speakText: "Welcome to Chapter 9 — While Loops! Repetition is the secret superpower of computers. A computer never gets tired of doing the same thing over and over. While loops let you harness this power. They keep running as long as a condition is true, and stop when it becomes false." },
    learn: {
      speakText: "A while loop repeats its code block again and again as long as the condition at the top stays true. It's critical to make sure the condition eventually becomes false — otherwise your loop runs forever! Chat apps use while loops to constantly check for new messages. Games use them to keep the game running, checking every fraction of a second for player input. Download managers use while loops to keep downloading until the file is complete.",
      realWorld: {
        heading: "Where are while loops used in the real world?",
        examples: [
          { icon: "💬", app: "WhatsApp & iMessage", desc: "A while loop runs constantly on your phone checking: 'while connected to internet, check for new messages every few seconds'." },
          { icon: "⬇️", app: "Download Managers", desc: "While bytes_downloaded < total_file_size → keep downloading. The download progress bar is updated inside a while loop." },
          { icon: "🎮", app: "Every Video Game", desc: "The core 'game loop' is a while loop: while game_is_running → check input → update game state → draw screen → repeat 60 times per second." },
        ],
        tip: "The 'game loop' — a while True loop at the heart of every video game — runs 60 or even 120 times per second. Without while loops, no video games would exist!"
      }
    }
  },

  10: {
    intro: { speakText: "Welcome to Chapter 10 — For Loops! If while loops repeat until a condition changes, for loops repeat a set number of times or through every item in a collection. For loops are probably the most used loop in all of Python programming." },
    learn: {
      speakText: "A for loop goes through each item in a sequence — one by one — and runs the same code for each one. The range function creates a sequence of numbers. When you open your Gmail inbox, a for loop goes through each of your emails and displays them one by one. When Spotify builds your playlist screen, a for loop goes through each song and draws its title, artist, and album art. Every list you see on any website was built using a for loop.",
      realWorld: {
        heading: "Where are for loops used in the real world?",
        examples: [
          { icon: "📧", app: "Gmail Inbox", desc: "When Gmail loads your inbox, a for loop goes through every email in your mailbox and renders it on screen — one by one." },
          { icon: "🛒", app: "Shopping Cart", desc: "When calculating your order total, a for loop goes through every item in your cart, adds up the prices, and applies discounts." },
          { icon: "📊", app: "Data Science & AI", desc: "Training an AI model means running a for loop over millions of data examples. Every image recognition AI was trained using massive for loops." },
        ],
        tip: "The range() function is used constantly. range(len(myList)) is one of the most written Python patterns in the world — you'll use it in almost every program!"
      }
    }
  },

  11: {
    intro: { speakText: "Welcome to Chapter 11 — Lists! Single variables are great for one value. But what if you have 1000 values? Or a million? That's where lists come in. Lists are collections — ordered, flexible, and incredibly powerful. They're used absolutely everywhere in programming." },
    learn: {
      speakText: "A list is an ordered collection of items, created with square brackets and items separated by commas. Each item has a position number called an index, starting from zero. You access items using their index in square brackets. Your Spotify playlist is literally a list of song objects. Your Instagram feed is a list of posts. Your phone's contact list is a list of people. The Google search results page is a list of web pages, displayed one by one using a for loop.",
      realWorld: {
        heading: "Where are lists used in the real world?",
        examples: [
          { icon: "🎵", app: "Spotify Playlists", desc: "A Spotify playlist is a Python-style list of song IDs. When you add, remove or reorder songs, the app modifies this list." },
          { icon: "📸", app: "Instagram Feed", desc: "Your Instagram feed is a list of post objects. The app loops through the list and renders each post — photo, caption, likes — one at a time." },
          { icon: "🗺️", app: "Google Maps Directions", desc: "Turn-by-turn directions are stored as a list of steps. The app reads through them in order: turn left, go straight, turn right, arrive." },
        ],
        tip: "Lists in Python are called 'arrays' or 'ArrayLists' in other languages. They are the most fundamental data structure in computer science — almost every program uses them!"
      }
    }
  },

  12: {
    intro: { speakText: "Welcome to Chapter 12 — List Operations! Collecting data is just the start. The real power comes from analysing it — finding the highest, lowest, average, sorting it, searching through it. These are the skills of a data scientist, and Python makes them incredibly easy." },
    learn: {
      speakText: "Python lists come with powerful built-in methods. Append adds a new item to the end. Sort rearranges items in order. Max, min, and sum give you statistics instantly. These are used constantly in data science and web development. When you sort Amazon search results by price or rating, that's the sort method in action. When YouTube shows you the most viewed video, that's max in action. When your banking app shows your total spending, that's sum in action.",
      realWorld: {
        heading: "Where are list operations used in the real world?",
        examples: [
          { icon: "⭐", app: "Amazon Reviews", desc: "When you sort by 'highest rated', Amazon calls list.sort() on the reviews list. The star rating displayed is an average — sum divided by length." },
          { icon: "📈", app: "Stock Market Apps", desc: "Finance apps use max() and min() to find daily high and low prices, and sum() to calculate portfolio total value — updated every second." },
          { icon: "🏥", app: "NHS Health Records", desc: "Doctors use list operations to find a patient's highest blood pressure reading, average heart rate over a week, or to sort results by date." },
        ],
        tip: "The combination of sum(list) / len(list) to calculate an average is one of the most written Python expressions in data science. Data scientists do this thousands of times a day!"
      }
    }
  },

  13: {
    intro: { speakText: "Welcome to Chapter 13 — Dictionaries! Lists are great for ordered collections, but what if you want to look something up by name rather than by position? That's what dictionaries are for. They're one of the most used data structures in all of Python." },
    learn: {
      speakText: "A dictionary stores data as key-value pairs — like a real dictionary where you look up a word and find its definition. You create one with curly braces, and separate keys from values with colons. To look up a value, you use its key in square brackets. JSON — the most widely used data format on the internet — is essentially a dictionary. Every time your app talks to a server, it sends and receives dictionaries. Your entire Google profile — name, email, age, preferences — is stored as a dictionary.",
      realWorld: {
        heading: "Where are dictionaries used in the real world?",
        examples: [
          { icon: "🌐", app: "Web APIs & JSON", desc: "Every API on the internet — Twitter, Google Maps, weather services — sends data as JSON, which is exactly a Python dictionary. Every app uses this." },
          { icon: "👤", app: "User Profiles", desc: "Your profile on any website is a dictionary: {name: 'AJ', email: '...', age: 10, settings: {...}}. Millions of these are stored in databases." },
          { icon: "🗺️", app: "Google Maps Places", desc: "Each location on Google Maps is a dictionary: {name: 'Big Ben', lat: 51.5, lng: -0.1, rating: 4.6, reviews: [...], hours: {...}}." },
        ],
        tip: "JSON (JavaScript Object Notation) — the universal language of the internet — is just dictionaries inside dictionaries. Learning Python dictionaries means you understand how the entire web communicates!"
      }
    }
  },

  14: {
    intro: { speakText: "Welcome to Chapter 14 — Functions! Functions are one of the greatest ideas in the history of computing. Instead of writing the same code over and over, you write it once, give it a name, and reuse it forever. Every program is built from functions." },
    learn: {
      speakText: "A function is a named, reusable block of code. You define it once with the def keyword, and then call it by name whenever you need it. Every button click on every website calls a function. When you press Like on Facebook, it calls a likePost function. When you tap Pay Now in an app, it calls a processPayment function. When you search on Google, your query is passed to a search function. Without functions, software would be impossibly long and impossible to maintain.",
      realWorld: {
        heading: "Where are functions used in the real world?",
        examples: [
          { icon: "❤️", app: "Facebook/Instagram Like Button", desc: "Every time you tap Like, it calls a function: like_post(post_id, user_id). This function updates the database, sends notifications, and updates the UI." },
          { icon: "🔐", app: "Every Login Page", desc: "Login systems have a function called something like authenticate_user(email, password) that checks credentials and returns whether access is granted." },
          { icon: "📦", app: "Amazon Checkout", desc: "The checkout process calls dozens of functions: validate_cart(), apply_discount(), calculate_shipping(), charge_payment(), send_confirmation_email() — each doing one job." },
        ],
        tip: "Good programmers follow the 'single responsibility principle' — each function should do exactly ONE thing. Real codebases can have thousands of small, focused functions all working together!"
      }
    }
  },

  15: {
    intro: { speakText: "Welcome to Chapter 15 — Return Values! Functions become truly powerful when they can take inputs and give back outputs. Think of a function as a machine: raw materials go in, finished product comes out. This is the pattern behind every calculation in every app." },
    learn: {
      speakText: "The return statement sends a value back to whoever called the function. This lets you use the function's result in other calculations or decisions. A payment function returns True or False to say if the payment went through. A search function returns a list of matching results. A weather function returns the current temperature. Functions that take inputs (parameters) and give back outputs (return values) are the building blocks of all software — they're how code is organised into clean, testable, reusable pieces.",
      realWorld: {
        heading: "Where are return values used in the real world?",
        examples: [
          { icon: "💳", app: "Payment Systems", desc: "process_payment(amount, card) returns True if payment succeeded, False if declined. The app uses this return value to decide what to show you next." },
          { icon: "🔍", app: "Google Search Algorithm", desc: "The search function returns a ranked list of results. The ranking algorithm returns a score for each page. Each step returns a value to the next." },
          { icon: "🏥", app: "Medical Diagnosis AI", desc: "An AI function takes a scan image and returns a confidence score. If it returns above 0.95, the system flags it for a doctor to review." },
        ],
        tip: "Functions with return values are often called 'pure functions' when they always give the same output for the same input. This makes them easy to test — which is why professional developers love them!"
      }
    }
  },

  16: {
    intro: { speakText: "Welcome to Chapter 16 — String Methods! Raw data is almost always messy. Extra spaces, inconsistent capitalisation, mixed formats. Data scientists call cleaning data one of the most important — and time-consuming — parts of their job. Python's string methods make it much faster!" },
    learn: {
      speakText: "String methods are built-in functions that every string object has. You call them with a dot after the string or variable name. Upper and lower change capitalisation. Strip removes extra whitespace. Split breaks a string into a list at a separator character. Join does the opposite — joins a list into a string. Replace swaps one bit of text for another. When you create an account anywhere, the website uses string methods to validate your email address — checking it contains an at sign, stripping spaces you might have accidentally added, and converting it to lowercase so it works consistently.",
      realWorld: {
        heading: "Where are string methods used in the real world?",
        examples: [
          { icon: "📧", app: "Email Validation", desc: "When you type your email to sign up, code does email.strip().lower() to clean it, then checks '@' in email to validate it — all string methods!" },
          { icon: "🔍", app: "Search Engines", desc: "Google converts your search to lowercase, strips extra spaces, and splits it into individual words — all in milliseconds using string methods." },
          { icon: "🤖", app: "Chatbots & AI", desc: "When you chat with a bot, it strips your message, converts to lowercase, and splits into words to understand what you're asking. String methods power NLP!" },
        ],
        tip: "The combination of .strip().lower() is so common in professional code that you'll see it in almost every web app that handles user text input. It's practically a reflex for experienced developers!"
      }
    }
  },

  17: {
    intro: { speakText: "Welcome to Chapter 17 — Nested Loops! Sometimes data isn't just a simple list — it's a grid, a table, a matrix. Photos are grids of pixels. Spreadsheets are grids of cells. Maps are grids of tiles. Nested loops let you work with any 2D structure, row by row and column by column." },
    learn: {
      speakText: "A nested loop is simply a loop inside another loop. The outer loop handles rows, the inner loop handles columns. For every one step of the outer loop, the inner loop runs completely. This is how your computer draws your screen — it goes through every row of pixels, and for each row it goes through every column, painting each pixel the right colour. Photo filters in Instagram process every pixel using nested loops. Spreadsheet software like Excel recalculates every cell using nested loops.",
      realWorld: {
        heading: "Where are nested loops used in the real world?",
        examples: [
          { icon: "🖥️", app: "Screen Rendering", desc: "Your screen is drawn using nested loops: for each row of pixels, for each column of pixels, draw the right colour. Your 1080p screen = 2 million pixels per frame!" },
          { icon: "📸", app: "Instagram Filters", desc: "Applying a filter to a photo uses nested loops to visit every pixel: for each row, for each column, adjust the colour values by the filter formula." },
          { icon: "♟️", app: "Chess & Board Games", desc: "A chess AI checks every possible move using nested loops — for each piece, for each possible destination square — evaluating millions of combinations." },
        ],
        tip: "When you have n rows and m columns, nested loops run n × m times total. This is called O(n²) complexity — something every software engineer learns about. You're thinking like a computer scientist!"
      }
    }
  },

  18: {
    intro: { speakText: "Welcome to Chapter 18 — Error Handling! Real software breaks. Networks fail, users type the wrong thing, files go missing, servers crash. What separates professional code from beginner code is how gracefully it handles these situations. Try and except is your safety net." },
    learn: {
      speakText: "The try block contains code that might fail. If it fails, Python immediately jumps to the except block instead of crashing. You can catch specific error types — like ValueError when someone types text instead of a number, or ZeroDivisionError when dividing by zero. Without error handling, every bug causes a crash and the user sees an ugly error screen. With error handling, the app shows a friendly message, logs the problem, and keeps running. Every professional app wraps risky operations in try-except.",
      realWorld: {
        heading: "Where is error handling used in the real world?",
        examples: [
          { icon: "💳", app: "Payment Processing", desc: "If the bank declines a card, try/except catches the error and shows 'Payment failed, please try another card' — instead of the whole checkout crashing." },
          { icon: "🌐", app: "Web Browsers", desc: "When a website fails to load, the browser's try/except shows 'Page not found' instead of the whole browser crashing and losing your other tabs." },
          { icon: "✈️", app: "Flight Control Systems", desc: "Aviation software has multiple layers of try/except for every sensor reading. If one sensor fails, the backup takes over — error handling literally saves lives." },
        ],
        tip: "In professional development, unhandled errors (crashes) are called 'exceptions'. Companies like Google have entire teams whose job is to monitor exceptions and fix them before users notice. Error handling is serious business!"
      }
    }
  },

  19: {
    intro: { speakText: "Welcome to Chapter 19 — Modules and Libraries! You don't need to build everything from scratch. Python has thousands of ready-made tools — called modules — that you can import and use instantly. This is one of the biggest reasons Python is so popular. There's a module for almost everything!" },
    learn: {
      speakText: "A module is a collection of useful functions and tools that someone else has written. You import it at the top of your file, and then you can use everything inside it. The math module gives you pi, square roots, trigonometry — everything a scientist needs. The random module lets you generate random numbers — essential for games and simulations. Real companies use thousands of modules. A typical web application might import 50 or more modules — for handling the web, talking to databases, sending emails, processing images, and much more.",
      realWorld: {
        heading: "Where are modules and libraries used in the real world?",
        examples: [
          { icon: "🤖", app: "Machine Learning & AI", desc: "The TensorFlow and PyTorch modules let data scientists build AI systems with just a few lines — instead of writing millions of lines of maths from scratch." },
          { icon: "🌐", app: "Web Development", desc: "The Django and Flask modules let Python developers build entire websites in hours. Instagram was built with Django — the same module you can install in seconds!" },
          { icon: "📊", app: "Data Science", desc: "Pandas, NumPy, and Matplotlib modules let scientists analyse millions of data points and create beautiful charts — the backbone of modern data science." },
        ],
        tip: "PyPI (the Python Package Index) has over 500,000 free modules you can install and use. This is why the Python motto is 'batteries included' — you almost never have to build something from scratch!"
      }
    }
  },

  20: {
    intro: { speakText: "Welcome to Chapter 20 — your Capstone Project! You've made it all the way through 19 chapters and learned the most important concepts in Python. Now it's time to put everything together and build something real. You are officially a Python Scientist!" },
    learn: {
      speakText: "In this final chapter, you'll see how all 20 concepts work together in a real program. Variables store your data. Functions organise your code into reusable pieces. Loops process collections of data. If and else make decisions. Dictionaries and lists store structured information. Modules provide extra power. Error handling keeps it robust. This is exactly how real applications are built — not by using one concept in isolation, but by combining them all. Every app on your phone, every website you visit, every AI system — they all use these same building blocks you now know!",
      realWorld: {
        heading: "You now know the fundamentals that power the real world!",
        examples: [
          { icon: "🏆", app: "You can build Web Apps", desc: "Python with the Flask module powers websites used by millions. Pinterest, Reddit, and Dropbox all started with Python web apps." },
          { icon: "🤖", app: "You can build AI", desc: "Every AI and machine learning system — from ChatGPT to self-driving cars — is built on the same Python fundamentals you've just learned." },
          { icon: "🚀", app: "You can do Real Science", desc: "NASA, CERN, and SpaceX all use Python. The code that helped photograph a black hole for the first time was written in Python by a scientist just like you." },
        ],
        tip: "You've learned the hardest part — the fundamentals. Every professional programmer uses exactly what you've learned every single day. The next step is to keep building things! Every project teaches you more than any lesson."
      }
    }
  }

}; // end REALWORLD
