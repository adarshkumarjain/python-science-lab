// =================== CHAPTERS DATA ===================
// All 20 chapters of Python Science Lab

const CHAPTERS = [

// ─────────────────────────────────────────────
// CHAPTER 1: Hello Python
// ─────────────────────────────────────────────
{
  id: 1, emoji: '🔬', color: '#00d4ff',
  title: 'Hello, Python!',
  tagline: 'Write your very first Python program',
  steps: [
    {
      type: 'intro', title: 'Welcome to Python Science Lab!',
      subtitle: 'Your journey begins here',
      visual: '🚀',
      content: `
        <p>Welcome, future Python Scientist! 🎉 You're about to learn one of the world's most popular programming languages — used by NASA, scientists, game developers, and engineers every day.</p>
        <div class="callout science"><span class="callout-icon">🔬</span><div class="callout-text"><strong>What is Python?</strong> Python is a language that lets you give instructions to a computer. Like a recipe tells a chef what to cook, Python tells your computer what to do!</div></div>
        <p>In each chapter, you'll <strong>learn a concept</strong>, see a <strong>science example</strong>, do a <strong>lab experiment</strong>, and take a <strong>quick quiz</strong>. Let's go!</p>`,
      concepts: ['print()', 'programs', 'output', 'comments'],
    },
    {
      type: 'learn', title: 'Your First Command: print()',
      explanation: `
        <p>The very first thing every programmer learns is how to make the computer <strong>display a message</strong>. In Python, we use the <span class="inline-code">print()</span> function.</p>
        <div class="section-block yellow"><div class="section-title">📐 The Formula</div><code style="font-size:1.1rem">print("your message here")</code></div>
        <p>The text you want to show goes inside <strong>quotation marks</strong> <span class="inline-code">" "</span> and inside the parentheses <span class="inline-code">( )</span>.</p>
        <div class="callout tip"><span class="callout-icon">💡</span><div class="callout-text">Lines starting with <span class="inline-code">#</span> are <strong>comments</strong> — notes for humans, ignored by Python!</div></div>
        <p>Scientists at NASA use Python to print mission status reports. Let's print some space facts!</p>`,
      code: `# My first Python program!
# The print() function shows text on screen

print("Hello, Python Science Lab!")
print("The speed of light is 299,792,458 m/s")
print("There are 8 planets in our solar system")
print("Python is AWESOME! 🚀")`,
    },
    {
      type: 'lab', title: 'Lab 1: Your Science Fact Board',
      instructions: `<p>Scientists share their discoveries with the world! Your mission: use <span class="inline-code">print()</span> to share <strong>3 of your favourite science facts</strong>.</p>
        <p>Each fact should be on its own line, using a separate <span class="inline-code">print()</span> call.</p>`,
      starterCode: `# Lab 1: Share your favourite science facts!
# Use print() to display 3 facts

print("Fact 1: ")
print("Fact 2: ")
print("Fact 3: ")`,
      hints: ['Each line needs its own print()', 'Put your text inside "double quotes"', 'You can add emojis inside the quotes!'],
      checkKeywords: ['print('],
      successMessage: 'You wrote your first Python program! Scientists around the world share facts just like this! 🌍',
    },
    {
      type: 'quiz', title: 'Quick Quiz ⚡',
      question: 'What will this code display on screen?',
      codeBlock: 'print("Water boils at 100 degrees!")',
      options: ['Nothing', 'Water boils at 100 degrees!', 'print', '"Water boils at 100 degrees!"'],
      correct: 1,
      explanation: 'print() shows whatever is inside the quotes on the screen — without the quotes themselves!',
    }
  ]
},

// ─────────────────────────────────────────────
// CHAPTER 2: Variables
// ─────────────────────────────────────────────
{
  id: 2, emoji: '📦', color: '#a855f7',
  title: 'Variables',
  tagline: 'Store and label your data like a scientist',
  steps: [
    {
      type: 'intro', title: 'Labelled Test Tubes for Data!',
      visual: '🧪',
      content: `
        <p>Imagine you're a chemist. You have lots of test tubes with different chemicals — and you label each one so you know what's inside. <strong>Variables</strong> work exactly the same way in Python!</p>
        <div class="callout science"><span class="callout-icon">🔬</span><div class="callout-text"><strong>A variable</strong> is a labelled box that stores a piece of data. You give it a name, and Python remembers the value for you.</div></div>
        <p>Variables are one of the most important concepts in all of programming. Every program you'll ever write uses them!</p>`,
      concepts: ['variables', 'assignment (=)', 'names', 'values'],
    },
    {
      type: 'learn', title: 'Creating and Using Variables',
      explanation: `
        <p>To create a variable, you write the <strong>name</strong>, then an <strong>equals sign</strong>, then the <strong>value</strong>:</p>
        <div class="section-block yellow"><div class="section-title">📐 The Formula</div><code style="font-size:1.1rem">variable_name = value</code></div>
        <p>Variable names should be <strong>lowercase</strong>, use <strong>underscores</strong> between words (no spaces!), and describe what they hold.</p>
        <div class="callout tip"><span class="callout-icon">💡</span><div class="callout-text">Good names: <span class="inline-code">planet_name</span>, <span class="inline-code">temperature</span>. Bad names: <span class="inline-code">x</span>, <span class="inline-code">thing1</span></div></div>`,
      code: `# Variables — like labelled test tubes!

planet_name = "Mars"
distance_km = 225000000
gravity = 3.72
has_water = False

# Use f-strings to print variables nicely
print(f"Planet: {planet_name}")
print(f"Distance from Earth: {distance_km} km")
print(f"Surface gravity: {gravity} m/s²")
print(f"Has liquid water: {has_water}")`,
    },
    {
      type: 'lab', title: 'Lab 2: Experiment Data Card',
      instructions: `<p>Scientists record their experiment data carefully. Create variables to describe <strong>your own experiment</strong> — real or imaginary!</p>
        <p>Create at least 4 variables: an experiment name (text), a temperature (number), a duration in minutes (number), and whether it was successful (True or False).</p>`,
      starterCode: `# Lab 2: Set up your experiment data card

experiment_name = ""
temperature = 0
duration_minutes = 0
was_successful = False

# Now print them all out nicely
print(f"Experiment: {experiment_name}")
print(f"Temperature: {temperature} °C")
print(f"Duration: {duration_minutes} minutes")
print(f"Success: {was_successful}")`,
      hints: ['Put text values inside "quotes"', 'Numbers go without quotes: temperature = 25', 'True and False (capital T/F) are for yes/no values'],
      checkKeywords: ['=', 'print('],
      successMessage: 'You created your first experiment data card! Real scientists store data exactly like this! 📋',
    },
    {
      type: 'quiz', title: 'Quick Quiz ⚡',
      question: 'Which of these is the correct way to create a variable called "speed" with a value of 100?',
      options: ['speed == 100', 'variable speed = 100', 'speed = 100', '100 = speed'],
      correct: 2,
      explanation: 'We use a single = sign to assign a value to a variable. The name goes on the left, the value on the right!',
    }
  ]
},

// ─────────────────────────────────────────────
// CHAPTER 3: Numbers & Math
// ─────────────────────────────────────────────
{
  id: 3, emoji: '🔢', color: '#ffd700',
  title: 'Numbers & Math',
  tagline: 'Calculate like a scientist!',
  steps: [
    {
      type: 'intro', title: 'Numbers: The Language of Science!',
      visual: '⚛️',
      content: `
        <p>Science runs on numbers! Physicists calculate forces, chemists measure amounts, astronomers compute distances. Python is fantastic at maths — and it follows the same rules you learned at school.</p>
        <div class="callout science"><span class="callout-icon">🔬</span><div class="callout-text">Python can work with whole numbers called <strong>integers</strong> (like 42) and decimal numbers called <strong>floats</strong> (like 3.14). It can even handle numbers bigger than a billion instantly!</div></div>`,
      concepts: ['integers', 'floats', '+  -  *  /', '//', '%', '**', 'math operations'],
    },
    {
      type: 'learn', title: 'Python as a Science Calculator',
      explanation: `
        <p>Python has all the maths operators you need:</p>
        <div class="section-block"><div class="section-title">🔧 Operators</div>
          <div class="grid-2">
            <div><span class="inline-code">+</span>  addition<br><span class="inline-code">-</span>  subtraction<br><span class="inline-code">*</span>  multiplication<br><span class="inline-code">/</span>  division (gives decimal)</div>
            <div><span class="inline-code">//</span> floor division (whole number)<br><span class="inline-code">%</span>  remainder (modulo)<br><span class="inline-code">**</span> power / exponent</div>
          </div>
        </div>
        <div class="callout tip"><span class="callout-icon">💡</span><div class="callout-text">Order of operations works just like in maths! Brackets first, then powers, then × ÷, then + −</div></div>`,
      code: `# Python as a science calculator!

speed = 300000   # km/s (speed of light!)
time = 8.3       # minutes (light travel: Sun to Earth)

distance = speed * time * 60  # convert minutes to seconds
print(f"Distance Sun to Earth: {distance:,} km")

# Rocket science: kinetic energy = 0.5 * m * v²
mass = 500       # kg
velocity = 1000  # m/s
kinetic_energy = 0.5 * mass * velocity ** 2
print(f"Kinetic Energy: {kinetic_energy:,} Joules")

# Fun: How many minutes in a year?
mins_per_year = 365 * 24 * 60
print(f"Minutes in a year: {mins_per_year:,}")`,
    },
    {
      type: 'lab', title: 'Lab 3: Rocket Physics Calculator',
      instructions: `<p>Time to calculate some rocket science! 🚀</p>
        <p>Use the formula <strong>distance = speed × time</strong> to find out:</p>
        <p>1. How far does a rocket travelling at <strong>28,000 km/h</strong> go in <strong>24 hours</strong>?</p>
        <p>2. Then calculate its speed in <strong>km per minute</strong> (divide by 60).</p>
        <p>Print both results!</p>`,
      starterCode: `# Lab 3: Rocket distance calculator

speed_kmh = 28000   # km per hour
time_hours = 24     # hours

# Calculate total distance
distance =

# Calculate speed in km per minute
speed_per_minute =

print(f"Total distance: {distance} km")
print(f"Speed per minute: {speed_per_minute} km/min")`,
      hints: ['distance = speed_kmh * time_hours', 'speed_per_minute = speed_kmh / 60', 'Use * for multiply and / for divide'],
      checkKeywords: ['*', '/', 'print('],
      successMessage: 'You just did real aerospace calculations! 🚀 Engineers use exactly these formulas!',
    },
    {
      type: 'quiz', title: 'Quick Quiz ⚡',
      question: 'What does 2 ** 10 calculate in Python?',
      options: ['2 × 10 = 20', '2 to the power of 10 = 1024', '2 + 10 = 12', '10 ÷ 2 = 5'],
      correct: 1,
      explanation: '** is the exponent (power) operator. 2 ** 10 means 2¹⁰ = 1024. This is used constantly in computer science!',
    }
  ]
},

// ─────────────────────────────────────────────
// CHAPTER 4: Strings
// ─────────────────────────────────────────────
{
  id: 4, emoji: '📝', color: '#ec4899',
  title: 'Strings & Text',
  tagline: 'Work with text like a scientist writes reports',
  steps: [
    {
      type: 'intro', title: 'Text in Python: Strings!',
      visual: '📄',
      content: `
        <p>Scientists don't just work with numbers — they write experiment labels, reports, and observations. In Python, text is called a <strong>string</strong>.</p>
        <div class="callout science"><span class="callout-icon">🔬</span><div class="callout-text">A <strong>string</strong> is any sequence of characters — letters, numbers, spaces, symbols — wrapped in quotes. Think of it as a string of beads, each bead being one character!</div></div>
        <p>Strings are everywhere: element names, experiment results, messages, labels — all strings!</p>`,
      concepts: ['strings', 'f-strings', 'concatenation (+)', 'len()', 'quotes'],
    },
    {
      type: 'learn', title: 'Creating and Combining Strings',
      explanation: `
        <p>Strings can use <span class="inline-code">"double"</span> or <span class="inline-code">'single'</span> quotes. You can join strings with <span class="inline-code">+</span>, and embed variables using <strong>f-strings</strong>:</p>
        <div class="section-block yellow"><div class="section-title">📐 f-string formula</div><code>f"text {variable} more text"</code></div>
        <p>F-strings (formatted strings) are the modern, clean way to put variable values inside text.</p>`,
      code: `# Strings in Python!

element = "Hydrogen"
symbol = "H"
atomic_number = 1
atomic_mass = 1.008

# f-strings: put variables inside text
print(f"Element: {element}")
print(f"Symbol: {symbol}, Atomic Number: {atomic_number}")
print(f"Atomic Mass: {atomic_mass} g/mol")

# String length
print(f"'{element}' has {len(element)} letters")

# Concatenation (joining strings)
label = "Element " + symbol + " — discovered by scientists!"
print(label)

# Repeat a string
divider = "-" * 30
print(divider)
print("Periodic Table Entry")
print(divider)`,
    },
    {
      type: 'lab', title: 'Lab 4: Science Report Formatter',
      instructions: `<p>Create a neatly formatted science report for an experiment. Use <strong>variables</strong> and <strong>f-strings</strong> to fill in the details.</p>
        <p>Your report must include: scientist name, experiment title, temperature used, and result. Print it with a divider line (use <span class="inline-code">"-" * 30</span>) at the top and bottom.</p>`,
      starterCode: `# Lab 4: Science Report Formatter

scientist = "Your Name"
experiment = "Boiling Point Test"
temperature = 100
result = "Water turned to steam!"

divider = "=" * 35

# Print the formatted report
print(divider)
print("  SCIENCE EXPERIMENT REPORT")
print(divider)
# Add more print lines using f-strings here!
`,
      hints: ['Use f"Scientist: {scientist}" to embed variables', 'Add print() lines for each piece of info', 'Print divider at the end too!'],
      checkKeywords: ['f"', 'print('],
      successMessage: 'Your science report looks professional! Scientists write exactly like this in their lab notebooks! 📓',
    },
    {
      type: 'quiz', title: 'Quick Quiz ⚡',
      question: 'What does len("Python") return?',
      options: ['5', '6', '7', '"Python"'],
      correct: 1,
      explanation: 'len() counts the number of characters in a string. "Python" has 6 characters: P-y-t-h-o-n.',
    }
  ]
},

// ─────────────────────────────────────────────
// CHAPTER 5: User Input
// ─────────────────────────────────────────────
{
  id: 5, emoji: '⌨️', color: '#f97316',
  title: 'User Input',
  tagline: 'Make your programs interactive!',
  steps: [
    {
      type: 'intro', title: 'Your Program Can Ask Questions!',
      visual: '🎤',
      content: `
        <p>So far your programs always do the same thing. But real science tools are <strong>interactive</strong> — they take measurements from the user and calculate results!</p>
        <div class="callout science"><span class="callout-icon">🔬</span><div class="callout-text">A thermometer takes a temperature reading. A scale takes a weight. With <strong>input()</strong>, your Python program can take any measurement from the user!</div></div>`,
      concepts: ['input()', 'int()', 'float()', 'type conversion', 'interactive programs'],
    },
    {
      type: 'learn', title: 'Getting Input from the User',
      explanation: `
        <p><span class="inline-code">input()</span> pauses the program and waits for the user to type something and press Enter.</p>
        <div class="callout warning"><span class="callout-icon">⚠️</span><div class="callout-text"><strong>Important:</strong> input() always returns <em>text (a string)</em>. To use it as a number, you must convert it with <span class="inline-code">int()</span> or <span class="inline-code">float()</span>!</div></div>`,
      code: `# Interactive temperature converter!
# Try typing a temperature when it asks you

celsius_str = input("Enter temperature in Celsius: ")
celsius = float(celsius_str)

# Convert to Fahrenheit: F = (C × 9/5) + 32
fahrenheit = (celsius * 9/5) + 32

# Convert to Kelvin: K = C + 273.15
kelvin = celsius + 273.15

print(f"\\n{celsius}°C =")
print(f"  {fahrenheit:.1f}°F (Fahrenheit)")
print(f"  {kelvin:.2f} K (Kelvin)")`,
    },
    {
      type: 'lab', title: 'Lab 5: Speed Calculator',
      instructions: `<p>Build an interactive speed calculator! Ask the user for a <strong>distance in km</strong> and a <strong>time in hours</strong>, then calculate and print the <strong>speed in km/h</strong>.</p>
        <p>Formula: <strong>speed = distance ÷ time</strong></p>`,
      starterCode: `# Lab 5: Speed Calculator
# Ask the user for distance and time, then calculate speed

distance = float(input("Enter distance (km): "))
time = float(input("Enter time (hours): "))

# Calculate speed
speed =

print(f"Speed: {speed:.2f} km/h")`,
      hints: ['speed = distance / time', 'Use float() to convert the input to a number', ':.2f shows 2 decimal places'],
      checkKeywords: ['input(', 'float(', '/'],
      successMessage: 'Your speed calculator works! This is exactly how physics software works — taking inputs and computing results! ⚡',
    },
    {
      type: 'quiz', title: 'Quick Quiz ⚡',
      question: 'A user types "42" when your program runs input(). What type is the result?',
      options: ['An integer (int)', 'A decimal (float)', 'A string (str)', 'A boolean'],
      correct: 2,
      explanation: 'input() ALWAYS returns a string, even if the user types a number. You must use int() or float() to convert it!',
    }
  ]
},

// ─────────────────────────────────────────────
// CHAPTER 6: If / Else
// ─────────────────────────────────────────────
{
  id: 6, emoji: '🔀', color: '#10b981',
  title: 'If / Else',
  tagline: 'Help your program make decisions!',
  steps: [
    {
      type: 'intro', title: 'Programs That Make Decisions!',
      visual: '🧠',
      content: `
        <p>Every scientific experiment has decision points: <em>"If the temperature is above 100°C, the water boils. Otherwise, it stays liquid."</em></p>
        <div class="callout science"><span class="callout-icon">🔬</span><div class="callout-text">The <strong>if/else</strong> statement lets your program choose different paths based on conditions — exactly like a scientist deciding what to do with their results!</div></div>`,
      concepts: ['if', 'else', 'conditions', 'True/False', 'decision making'],
    },
    {
      type: 'learn', title: 'Making Decisions with if/else',
      explanation: `
        <div class="section-block yellow"><div class="section-title">📐 The Formula</div><pre style="font-family:monospace;font-size:0.9rem">if condition:
    # code if TRUE
else:
    # code if FALSE</pre></div>
        <div class="callout tip"><span class="callout-icon">💡</span><div class="callout-text">The <strong>indentation</strong> (4 spaces) is not optional — Python uses it to know which code belongs inside the if block!</div></div>`,
      code: `# Lab safety checker using if/else

temperature = float(input("Enter lab temperature (°C): "))

if temperature > 100:
    print("⚠️  DANGER: Temperature too high!")
    print("    Water is boiling — use heat-proof gloves!")
elif temperature > 50:
    print("⚡ WARNING: Temperature is hot.")
    print("   Handle with care.")
elif temperature < 0:
    print("🧊 COLD: Below freezing point of water.")
else:
    print("✅ SAFE: Temperature is in safe range.")

print(f"\\nTemperature recorded: {temperature}°C")`,
    },
    {
      type: 'lab', title: 'Lab 6: pH Level Classifier',
      instructions: `<p>In chemistry, pH measures how acidic or basic a substance is:</p>
        <p>• pH 0–6: <strong>Acidic</strong> 🍋 &nbsp;• pH 7: <strong>Neutral</strong> 💧 &nbsp;• pH 8–14: <strong>Basic/Alkaline</strong> 🧼</p>
        <p>Ask the user for a pH value, then print what type it is!</p>`,
      starterCode: `# Lab 6: pH Level Classifier

ph = float(input("Enter pH value (0-14): "))

if ph < 0 or ph > 14:
    print("Invalid pH! Must be between 0 and 14.")
elif ph < 7:
    print(f"pH {ph} is ACIDIC 🍋")
    # Add what happens at pH < 3 (very acidic)
else:
    # Add conditions for neutral and basic
    print("Complete this part!")`,
      hints: ['Use elif ph == 7 for neutral', 'Use else for basic (pH > 7)', 'Try adding: if ph < 3: print("Very acidic! ⚠️")'],
      checkKeywords: ['if', 'elif', 'else', 'print('],
      successMessage: 'Your pH classifier works! Chemists use exactly this kind of logic in their lab software! 🧪',
    },
    {
      type: 'quiz', title: 'Quick Quiz ⚡',
      question: 'What is the result if the condition in an if statement is False and there is an else block?',
      options: ['The if block runs', 'The else block runs', 'Both blocks run', 'Nothing runs'],
      correct: 1,
      explanation: 'When the if condition is False, Python skips the if block and runs the else block instead. Only one path runs!',
    }
  ]
},

// ─────────────────────────────────────────────
// CHAPTER 7: Elif
// ─────────────────────────────────────────────
{
  id: 7, emoji: '🌡️', color: '#f97316',
  title: 'Multiple Conditions (elif)',
  tagline: 'Handle many possible outcomes',
  steps: [
    {
      type: 'intro', title: 'More Than Two Outcomes!',
      visual: '📊',
      content: `
        <p>A thermometer doesn't just say "hot" or "cold" — it classifies temperature into many ranges. <strong>elif</strong> (short for "else if") lets you check multiple conditions in sequence.</p>
        <div class="callout science"><span class="callout-icon">🔬</span><div class="callout-text">Scientists classify results into categories: Grade A, B, C, D... or Excellent, Good, Average, Poor. <strong>elif</strong> chains let you do exactly this!</div></div>`,
      concepts: ['elif', 'chained conditions', 'classification', 'multiple branches'],
    },
    {
      type: 'learn', title: 'Chaining Conditions with elif',
      explanation: `
        <p>You can have as many <span class="inline-code">elif</span> blocks as you need between <span class="inline-code">if</span> and <span class="inline-code">else</span>. Python checks them in order and runs the <em>first</em> one that's True.</p>
        <div class="section-block yellow"><div class="section-title">📐 The Formula</div><pre style="font-family:monospace;font-size:0.9rem">if condition1:
    ...
elif condition2:
    ...
elif condition3:
    ...
else:
    ...</pre></div>`,
      code: `# Star classification by temperature!
# Stars are classified by their surface temperature

temp = int(input("Enter star surface temperature (K): "))

if temp >= 30000:
    star_class = "O"
    colour = "blue"
    example = "Rigel"
elif temp >= 10000:
    star_class = "B"
    colour = "blue-white"
    example = "Sirius"
elif temp >= 7500:
    star_class = "A"
    colour = "white"
    example = "Vega"
elif temp >= 6000:
    star_class = "F"
    colour = "yellow-white"
    example = "Procyon"
elif temp >= 5200:
    star_class = "G"
    colour = "yellow"
    example = "Our Sun! ☀️"
elif temp >= 3700:
    star_class = "K"
    colour = "orange"
    example = "Arcturus"
else:
    star_class = "M"
    colour = "red"
    example = "Proxima Centauri"

print(f"\\nClass {star_class} star — {colour}")
print(f"Famous example: {example}")`,
    },
    {
      type: 'lab', title: 'Lab 7: Experiment Grade Calculator',
      instructions: `<p>Grade your science experiment results! Ask for a score (0–100) and print the grade:</p>
        <p>• 90–100: A+ Excellent! &nbsp;• 80–89: A Good &nbsp;• 70–79: B Satisfactory &nbsp;• 60–69: C Needs work &nbsp;• Below 60: Redo experiment</p>`,
      starterCode: `# Lab 7: Experiment Grade Calculator

score = int(input("Enter your experiment score (0-100): "))

if score >= 90:
    print(f"Score {score}: A+ — Excellent experiment! 🏆")
elif score >= 80:
    print(f"Score {score}: A — Good work! ⭐")
# Add elif for B, C, and the "redo" case
`,
      hints: ['Continue the elif chain for 70, 60, and below', "Don't forget the final else for scores below 60", 'Use >= for "greater than or equal to"'],
      checkKeywords: ['if', 'elif', 'else'],
      successMessage: 'Your grade calculator works! This is exactly how school software grades assignments! 🎓',
    },
    {
      type: 'quiz', title: 'Quick Quiz ⚡',
      question: 'If score = 85, which block runs in: if score >= 90: ... elif score >= 80: ... else: ...',
      options: ['The if block', 'The elif block', 'The else block', 'Both if and elif'],
      correct: 1,
      explanation: 'Python checks conditions in order. 85 >= 90 is False, so it skips to elif. 85 >= 80 is True, so the elif block runs!',
    }
  ]
},

// ─────────────────────────────────────────────
// CHAPTER 8: Comparison & Logic
// ─────────────────────────────────────────────
{
  id: 8, emoji: '⚖️', color: '#00d4ff',
  title: 'Comparisons & Logic',
  tagline: 'Ask precise questions with and, or, not',
  steps: [
    {
      type: 'intro', title: 'Logic: The Language of Computers!',
      visual: '🔌',
      content: `
        <p>Logic gates are the building blocks of all computers and circuits. In Python, logical operators let you combine conditions just like electrical circuits combine signals!</p>
        <div class="callout science"><span class="callout-icon">🔬</span><div class="callout-text">A rocket launch requires <em>multiple</em> conditions to be met simultaneously — fuel loaded AND weather clear AND systems green. Python's <strong>and</strong>, <strong>or</strong>, <strong>not</strong> work exactly like this!</div></div>`,
      concepts: ['==', '!=', '>', '<', '>=', '<=', 'and', 'or', 'not'],
    },
    {
      type: 'learn', title: 'Comparison and Logical Operators',
      explanation: `
        <div class="grid-2">
          <div class="section-block"><div class="section-title">⚖️ Comparison</div>
            <code>==</code> equal to<br><code>!=</code> not equal<br><code>&gt;</code> greater than<br><code>&lt;</code> less than<br><code>&gt;=</code> greater or equal<br><code>&lt;=</code> less or equal
          </div>
          <div class="section-block purple"><div class="section-title">🧠 Logical</div>
            <code>and</code> — both must be True<br><code>or</code> — at least one True<br><code>not</code> — flips True/False
          </div>
        </div>`,
      code: `# Rocket launch safety system!

fuel_loaded = True
weather_clear = True
all_systems_go = True
wind_speed = 25  # km/h (max allowed: 30)

# ALL conditions must be met
safe_to_launch = (fuel_loaded and
                  weather_clear and
                  all_systems_go and
                  wind_speed <= 30)

print(f"Fuel loaded: {fuel_loaded}")
print(f"Weather clear: {weather_clear}")
print(f"Systems go: {all_systems_go}")
print(f"Wind speed: {wind_speed} km/h")
print(f"\\nSAFE TO LAUNCH: {safe_to_launch}")

if safe_to_launch:
    print("🚀 Launch sequence initiated!")
else:
    print("⛔ Launch ABORTED — check conditions!")`,
    },
    {
      type: 'lab', title: 'Lab 8: Experiment Condition Checker',
      instructions: `<p>Your experiment needs <em>all</em> of these conditions to be right:</p>
        <p>• Temperature between 20°C and 30°C<br>• Humidity below 60%<br>• No vibrations (vibration = False)</p>
        <p>Ask for each value, check all conditions with <span class="inline-code">and</span>, and print whether the experiment can proceed!</p>`,
      starterCode: `# Lab 8: Experiment Condition Checker

temp = float(input("Temperature (°C): "))
humidity = float(input("Humidity (%): "))
vibration = input("Any vibrations? (yes/no): ").lower()

no_vibration = (vibration == "no")
temp_ok = (temp >= 20 and temp <= 30)
humidity_ok = (humidity < 60)

# Check all conditions together
all_good =

if all_good:
    print("\\n✅ All conditions met! Proceed with experiment.")
else:
    print("\\n⚠️ Conditions not met!")
    if not temp_ok:
        print(f"  - Temperature {temp}°C is out of range (20-30°C)")`,
      hints: ['all_good = temp_ok and humidity_ok and no_vibration', 'vibration == "no" checks if user typed "no"', '.lower() makes it work whether they type "NO" or "no"'],
      checkKeywords: ['and', 'if'],
      successMessage: 'Your condition checker works! Real lab automation systems use exactly this kind of logic! 🤖',
    },
    {
      type: 'quiz', title: 'Quick Quiz ⚡',
      question: 'What is the result of: (True and False) or (not False)?',
      options: ['False', 'True', 'Error', 'None'],
      correct: 1,
      explanation: '(True and False) = False. (not False) = True. False or True = True! Logic works step by step.',
    }
  ]
},

// ─────────────────────────────────────────────
// CHAPTER 9: While Loops
// ─────────────────────────────────────────────
{
  id: 9, emoji: '🔄', color: '#a855f7',
  title: 'While Loops',
  tagline: 'Repeat until the job is done!',
  steps: [
    {
      type: 'intro', title: 'Repeating Until You\'re Done!',
      visual: '⏱️',
      content: `
        <p>Scientists take repeated measurements — checking every second until an experiment is complete. Doing this by hand would take forever. <strong>While loops</strong> make your computer repeat things automatically!</p>
        <div class="callout science"><span class="callout-icon">🔬</span><div class="callout-text">A <strong>while loop</strong> keeps running its code as long as a condition is True — just like a scientist keeps stirring a mixture until it reaches the right temperature!</div></div>`,
      concepts: ['while', 'loop', 'break', 'continue', 'infinite loops'],
    },
    {
      type: 'learn', title: 'The while Loop',
      explanation: `
        <div class="section-block yellow"><div class="section-title">📐 Formula</div><pre style="font-family:monospace;font-size:0.9rem">while condition:
    # repeat this code</pre></div>
        <div class="callout warning"><span class="callout-icon">⚠️</span><div class="callout-text">Make sure the condition eventually becomes False — otherwise your loop runs forever! Use <span class="inline-code">break</span> to exit early.</div></div>`,
      code: `# Rocket launch countdown!

countdown = 10

print("🚀 Launch sequence started!")
while countdown > 0:
    print(f"  T-{countdown}...")
    countdown = countdown - 1  # or: countdown -= 1

print("🔥 IGNITION!")
print("🚀 Lift-off!")

# Simulate heating water
print("\\n--- Heating water ---")
temperature = 20
while temperature < 100:
    temperature += 10
    print(f"Temperature: {temperature}°C", end="")
    if temperature >= 100:
        print(" 💨 Boiling!")
    else:
        print(" (heating...)")`,
    },
    {
      type: 'lab', title: 'Lab 9: Scientific Measurement Loop',
      instructions: `<p>Simulate taking temperature readings every 5 seconds during an experiment.</p>
        <p>Start at 20°C, add 5°C each iteration, and keep looping until temperature reaches 80°C. Print each reading. At the end, print "Experiment complete!"</p>`,
      starterCode: `# Lab 9: Temperature measurement simulation

temperature = 20
reading_number = 1

print("Starting temperature readings...")
print("-" * 30)

while temperature < 80:
    print(f"Reading {reading_number}: {temperature}°C")
    temperature += 5
    reading_number += 1

print("-" * 30)
print("Experiment complete!")
print(f"Final temperature: {temperature}°C")`,
      hints: ['temperature += 5 adds 5 to temperature each loop', 'The loop runs while temperature < 80', 'reading_number += 1 increments the counter'],
      checkKeywords: ['while', '+=', 'print('],
      successMessage: 'Excellent! Your measurement loop works perfectly! This is how data loggers in real labs work! 📊',
    },
    {
      type: 'quiz', title: 'Quick Quiz ⚡',
      question: 'What does this code print?\n\nx = 0\nwhile x < 3:\n    print(x)\n    x += 1',
      options: ['0 1 2 3', '0 1 2', '1 2 3', 'Nothing'],
      correct: 1,
      explanation: 'x starts at 0. The loop prints 0, 1, 2. When x becomes 3, the condition (x < 3) is False, so the loop stops.',
    }
  ]
},

// ─────────────────────────────────────────────
// CHAPTER 10: For Loops
// ─────────────────────────────────────────────
{
  id: 10, emoji: '🔁', color: '#10b981',
  title: 'For Loops',
  tagline: 'Iterate through data like a scientist!',
  steps: [
    {
      type: 'intro', title: 'Looping Through Collections!',
      visual: '📋',
      content: `
        <p>Scientists analyse many data points — temperature readings, measurements, observations. The <strong>for loop</strong> is perfect for going through each item one by one, automatically!</p>
        <div class="callout science"><span class="callout-icon">🔬</span><div class="callout-text">A <strong>for loop</strong> goes through a sequence (like a range of numbers or a list) and does something with each item. It's like reading through your lab notebook line by line!</div></div>`,
      concepts: ['for', 'range()', 'iteration', 'sequences'],
    },
    {
      type: 'learn', title: 'The for Loop and range()',
      explanation: `
        <div class="section-block yellow"><div class="section-title">📐 Formulas</div><pre style="font-family:monospace;font-size:0.9rem">for item in sequence:
    # code for each item

range(stop)           # 0, 1, ..., stop-1
range(start, stop)    # start, ..., stop-1
range(start, stop, step)  # with step size</pre></div>`,
      code: `# Physics: distance fallen under gravity

print("Falling object: distance per second")
print("(gravity = 9.8 m/s²)")
print("-" * 35)

for second in range(1, 9):
    # d = 0.5 × g × t²
    distance = 0.5 * 9.8 * second ** 2
    print(f"At t={second}s: {distance:.1f} metres fallen")

# Calculate squares (useful in many physics formulas)
print("\\nPerfect squares:")
squares = [n**2 for n in range(1, 11)]
for i, sq in enumerate(squares, 1):
    print(f"  {i}² = {sq}")`,
    },
    {
      type: 'lab', title: 'Lab 10: Multiplication Science Table',
      instructions: `<p>Generate a multiplication table for the number 7 (like the speed of light divided by 10⁷). Print each result like: <strong>"7 × 1 = 7"</strong></p>
        <p>Use a <span class="inline-code">for</span> loop with <span class="inline-code">range(1, 13)</span> to go from 1 to 12.</p>`,
      starterCode: `# Lab 10: Multiplication table generator

number = 7
print(f"Multiplication Table for {number}")
print("=" * 25)

for i in range(1, 13):
    result = number * i
    print(f"{number} × {i:2} = {result:3}")`,
      hints: ['The loop variable i goes from 1 to 12', 'result = number * i calculates each product', ':2 and :3 in f-strings align numbers neatly'],
      checkKeywords: ['for', 'range(', 'print('],
      successMessage: 'Your multiplication table is perfect! For loops are one of the most useful tools in all of programming! 🏆',
    },
    {
      type: 'quiz', title: 'Quick Quiz ⚡',
      question: 'How many times does the loop body run: for i in range(2, 10, 2)?',
      options: ['10 times', '5 times', '4 times', '8 times'],
      correct: 2,
      explanation: 'range(2, 10, 2) gives: 2, 4, 6, 8 — that\'s 4 numbers (step of 2, stops before 10). The loop runs 4 times!',
    }
  ]
},

// ─────────────────────────────────────────────
// CHAPTER 11: Lists
// ─────────────────────────────────────────────
{
  id: 11, emoji: '📋', color: '#ffd700',
  title: 'Lists',
  tagline: 'Collect and organise data!',
  steps: [
    {
      type: 'intro', title: 'Collections of Data!',
      visual: '🗂️',
      content: `
        <p>A scientist measuring daily temperatures doesn't create 365 separate variables — they use a <strong>list</strong>! Lists hold many values in one organised collection.</p>
        <div class="callout science"><span class="callout-icon">🔬</span><div class="callout-text">A <strong>list</strong> is like a numbered column in a spreadsheet. Each item has a position called an <strong>index</strong>, starting from 0.</div></div>`,
      concepts: ['lists [ ]', 'indexing', 'slicing', 'len()', 'in operator'],
    },
    {
      type: 'learn', title: 'Creating and Accessing Lists',
      explanation: `
        <div class="section-block yellow"><div class="section-title">📐 Creating a List</div><code>my_list = [item1, item2, item3]</code></div>
        <div class="callout warning"><span class="callout-icon">⚠️</span><div class="callout-text">Indexing starts at <strong>0</strong>! The first item is at index [0], the second at [1], etc. The last item is at [-1].</div></div>`,
      code: `# Temperature readings from a science experiment
readings = [18.5, 22.0, 25.3, 27.1, 26.8, 24.5, 21.2]

print(f"All readings: {readings}")
print(f"Number of readings: {len(readings)}")
print(f"First reading: {readings[0]}°C")
print(f"Last reading: {readings[-1]}°C")

# Slicing: get a portion of the list
morning = readings[0:3]    # first 3
afternoon = readings[3:6]  # items 3,4,5
print(f"Morning: {morning}")
print(f"Afternoon: {afternoon}")

# Loop through all readings
print("\\nAll readings:")
for i, temp in enumerate(readings):
    print(f"  Hour {i+1}: {temp}°C")`,
    },
    {
      type: 'lab', title: 'Lab 11: Planet Distance Tracker',
      instructions: `<p>Create a list of the 8 planets and their distances from the Sun in AU (Astronomical Units):</p>
        <p>Mercury 0.39, Venus 0.72, Earth 1.0, Mars 1.52, Jupiter 5.2, Saturn 9.58, Uranus 19.2, Neptune 30.05</p>
        <p>Print the first planet, the last planet, and loop through all of them!</p>`,
      starterCode: `# Lab 11: Planet distance tracker

planets = ["Mercury", "Venus", "Earth", "Mars",
           "Jupiter", "Saturn", "Uranus", "Neptune"]

distances_au = [0.39, 0.72, 1.0, 1.52,
                5.2, 9.58, 19.2, 30.05]

print(f"Closest to Sun: {planets[0]} ({distances_au[0]} AU)")
print(f"Farthest from Sun: {planets[-1]} ({distances_au[-1]} AU)")

print("\\nAll planets:")
for i in range(len(planets)):
    print(f"  {i+1}. {planets[i]:8} — {distances_au[i]} AU from Sun")`,
      hints: ['planets[0] gives the first planet', 'planets[-1] gives the last planet', 'Use range(len(planets)) to loop with an index'],
      checkKeywords: ['[', 'for', 'print('],
      successMessage: 'You tracked all 8 planets! Real astronomical databases store data in lists just like this! 🪐',
    },
    {
      type: 'quiz', title: 'Quick Quiz ⚡',
      question: 'Given data = [10, 20, 30, 40, 50], what does data[2] return?',
      options: ['20', '30', '40', 'Error'],
      correct: 1,
      explanation: 'Remember, indexing starts at 0! data[0]=10, data[1]=20, data[2]=30. So data[2] returns 30.',
    }
  ]
},

// ─────────────────────────────────────────────
// CHAPTER 12: List Operations
// ─────────────────────────────────────────────
{
  id: 12, emoji: '📊', color: '#ec4899',
  title: 'List Operations',
  tagline: 'Analyse your data like a scientist!',
  steps: [
    {
      type: 'intro', title: 'Analysing Data Collections!',
      visual: '📈',
      content: `
        <p>Collecting data is just the start — scientists analyse it! Finding the average, highest, lowest, sorting results — these are everyday tasks in data science.</p>
        <div class="callout science"><span class="callout-icon">🔬</span><div class="callout-text">Python lists come with powerful built-in tools: add items, remove them, sort them, and calculate statistics — all in one line!</div></div>`,
      concepts: ['append()', 'remove()', 'sort()', 'sum()', 'max()', 'min()', 'average'],
    },
    {
      type: 'learn', title: 'List Methods and Statistics',
      explanation: `
        <div class="section-block"><div class="section-title">🔧 Essential List Methods</div>
          <code>list.append(x)</code> — add x to end<br>
          <code>list.remove(x)</code> — remove first x<br>
          <code>list.sort()</code> — sort in place<br>
          <code>sorted(list)</code> — returns sorted copy<br>
          <code>sum(list)</code> — total of all numbers<br>
          <code>max(list)</code> / <code>min(list)</code> — largest / smallest
        </div>`,
      code: `# Analysing experiment temperature data
readings = [22.5, 18.1, 25.3, 19.8, 27.6, 21.4, 24.0]

print(f"Raw data: {readings}")
print(f"Count: {len(readings)} readings")
print(f"Highest: {max(readings):.1f}°C")
print(f"Lowest: {min(readings):.1f}°C")
print(f"Range: {max(readings)-min(readings):.1f}°C")

# Calculate average (mean)
average = sum(readings) / len(readings)
print(f"Average: {average:.2f}°C")

# Add a new reading
readings.append(23.9)
print(f"\\nAfter new reading: {readings}")

# Sort the data
readings.sort()
print(f"Sorted: {readings}")`,
    },
    {
      type: 'lab', title: 'Lab 12: Exam Score Analyser',
      instructions: `<p>Analyse a class of students' science exam scores. Start with these scores: [78, 92, 65, 88, 71, 95, 83, 60, 77, 89]</p>
        <p>Calculate and print: average score, highest score, lowest score, and whether the class average is above 75 (pass/fail).</p>`,
      starterCode: `# Lab 12: Class score analyser

scores = [78, 92, 65, 88, 71, 95, 83, 60, 77, 89]

print(f"Scores: {scores}")
print(f"Number of students: {len(scores)}")

highest = max(scores)
lowest = min(scores)
average = sum(scores) / len(scores)

print(f"Highest score: {highest}")
print(f"Lowest score: {lowest}")
print(f"Class average: {average:.1f}")

if average >= 75:
    print("Result: ✅ Class PASSED overall!")
else:
    print("Result: ❌ Class needs improvement.")`,
      hints: ['max(scores) gives the highest', 'sum(scores) / len(scores) gives the average', 'Use :.1f to show one decimal place'],
      checkKeywords: ['max(', 'min(', 'sum(', 'len('],
      successMessage: 'Your data analyser works! Data scientists do exactly this with massive datasets every day! 📊',
    },
    {
      type: 'quiz', title: 'Quick Quiz ⚡',
      question: 'What does list.append(42) do?',
      options: ['Removes 42 from the list', 'Adds 42 to the beginning', 'Adds 42 to the end', 'Replaces the list with 42'],
      correct: 2,
      explanation: 'append() adds a new item to the END of the list. Use insert(0, 42) if you want to add to the beginning!',
    }
  ]
},

// ─────────────────────────────────────────────
// CHAPTER 13: Dictionaries
// ─────────────────────────────────────────────
{
  id: 13, emoji: '📖', color: '#00d4ff',
  title: 'Dictionaries',
  tagline: 'Store data with labels, like an encyclopedia!',
  steps: [
    {
      type: 'intro', title: 'Organised Data with Keys!',
      visual: '⚗️',
      content: `
        <p>The periodic table doesn't just list elements in a column — it stores multiple properties for each one: name, symbol, atomic number, mass... A Python <strong>dictionary</strong> stores data exactly like this!</p>
        <div class="callout science"><span class="callout-icon">🔬</span><div class="callout-text">A <strong>dictionary</strong> stores data as <strong>key: value</strong> pairs — like a real dictionary where you look up a word (key) to find its definition (value)!</div></div>`,
      concepts: ['dict {}', 'keys', 'values', 'key:value pairs', '.get()', 'updating'],
    },
    {
      type: 'learn', title: 'Creating and Using Dictionaries',
      explanation: `
        <div class="section-block yellow"><div class="section-title">📐 Creating a Dictionary</div><pre style="font-family:monospace;font-size:0.9rem">my_dict = {
    "key1": value1,
    "key2": value2
}
# Access: my_dict["key1"]</pre></div>`,
      code: `# Mini Periodic Table with dictionaries!

hydrogen = {
    "name": "Hydrogen",
    "symbol": "H",
    "atomic_number": 1,
    "atomic_mass": 1.008,
    "state": "gas",
    "discovered": 1766
}

print(f"Element: {hydrogen['name']}")
print(f"Symbol: {hydrogen['symbol']}")
print(f"Atomic Number: {hydrogen['atomic_number']}")
print(f"State at room temp: {hydrogen['state']}")

# Add a new key
hydrogen["fun_fact"] = "Makes up 75% of all matter!"
print(f"Fun fact: {hydrogen['fun_fact']}")

# Loop through all key-value pairs
print("\\nFull entry:")
for key, value in hydrogen.items():
    print(f"  {key}: {value}")`,
    },
    {
      type: 'lab', title: 'Lab 13: Planet Encyclopedia',
      instructions: `<p>Create a dictionary for planet <strong>Mars</strong> with these keys: name, diameter_km, distance_from_sun_km, moons, has_atmosphere, average_temp_c.</p>
        <p>Then print each property in a nice format!</p>`,
      starterCode: `# Lab 13: Planet Encyclopedia

mars = {
    "name": "Mars",
    "diameter_km": 6779,
    "distance_from_sun_km": 227900000,
    "moons": 2,
    "has_atmosphere": True,
    "average_temp_c": -60
}

print("🔴 MARS - Planet Profile")
print("=" * 30)

# Loop through and print all properties
for key, value in mars.items():
    # Make the key more readable
    label = key.replace("_", " ").title()
    print(f"  {label}: {value}")`,
      hints: ['dict["key"] accesses a value', 'Use .items() to loop through key-value pairs', '.replace("_", " ").title() makes keys look nice'],
      checkKeywords: ['{', ':', 'for', '.items()'],
      successMessage: 'Your planet encyclopedia is live! Space agencies store planet data in structures exactly like this! 🚀',
    },
    {
      type: 'quiz', title: 'Quick Quiz ⚡',
      question: 'Given data = {"temp": 25, "ph": 7}, how do you access the temperature?',
      options: ['data.temp', 'data[0]', 'data["temp"]', 'data.get[temp]'],
      correct: 2,
      explanation: 'Dictionary values are accessed using their key in square brackets: data["temp"]. The key must exactly match (including case)!',
    }
  ]
},

// ─────────────────────────────────────────────
// CHAPTER 14: Functions
// ─────────────────────────────────────────────
{
  id: 14, emoji: '⚙️', color: '#a855f7',
  title: 'Functions',
  tagline: 'Write reusable experiment procedures!',
  steps: [
    {
      type: 'intro', title: 'Reusable Procedures!',
      visual: '🔧',
      content: `
        <p>A scientist doesn't rewrite their entire experimental procedure every time — they write it once and follow it repeatedly. <strong>Functions</strong> work the same way: write the code once, use it as many times as you need!</p>
        <div class="callout science"><span class="callout-icon">🔬</span><div class="callout-text">A <strong>function</strong> is a named, reusable block of code. Think of it like a machine in a factory: feed it inputs, it performs an operation, and produces an output!</div></div>`,
      concepts: ['def', 'function name', 'calling a function', 'code reuse'],
    },
    {
      type: 'learn', title: 'Defining and Calling Functions',
      explanation: `
        <div class="section-block yellow"><div class="section-title">📐 The Formula</div><pre style="font-family:monospace;font-size:0.9rem">def function_name():
    # code inside the function
    # indented 4 spaces

# Call it:
function_name()</pre></div>
        <div class="callout tip"><span class="callout-icon">💡</span><div class="callout-text">Always define the function BEFORE you call it. Python reads top to bottom!</div></div>`,
      code: `# Science functions!

def print_separator():
    print("=" * 35)

def print_experiment_header():
    print_separator()
    print("  🔬 PYTHON SCIENCE LAB")
    print_separator()

def display_element(name, symbol, number):
    print(f"  {name:12} | {symbol:3} | #{number}")

# Use the functions
print_experiment_header()
print("  Periodic Table Elements:")
print_separator()
display_element("Hydrogen", "H", 1)
display_element("Helium", "He", 2)
display_element("Carbon", "C", 6)
display_element("Oxygen", "O", 8)
print_separator()`,
    },
    {
      type: 'lab', title: 'Lab 14: Unit Converter Functions',
      instructions: `<p>Write two functions scientists use all the time:</p>
        <p>1. <strong>celsius_to_fahrenheit(c)</strong> — formula: F = (C × 9/5) + 32</p>
        <p>2. <strong>km_to_miles(km)</strong> — formula: miles = km × 0.621371</p>
        <p>Then call each function with a few different values!</p>`,
      starterCode: `# Lab 14: Unit converter functions

def celsius_to_fahrenheit(celsius):
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit

def km_to_miles(km):
    # Write the formula here!
    miles =
    return miles

# Test your functions!
print("Temperature Conversions:")
print(f"  0°C = {celsius_to_fahrenheit(0):.1f}°F")
print(f"  100°C = {celsius_to_fahrenheit(100):.1f}°F")
print(f"  -40°C = {celsius_to_fahrenheit(-40):.1f}°F")

print("\\nDistance Conversions:")
print(f"  1 km = {km_to_miles(1):.3f} miles")
print(f"  100 km = {km_to_miles(100):.1f} miles")`,
      hints: ['miles = km * 0.621371', 'The return keyword sends the result back', 'Call the function: celsius_to_fahrenheit(25)'],
      checkKeywords: ['def ', 'return'],
      successMessage: 'Your unit converter functions work! Engineers use conversion functions like these in every project! ⚙️',
    },
    {
      type: 'quiz', title: 'Quick Quiz ⚡',
      question: 'What keyword is used to define a function in Python?',
      options: ['function', 'define', 'def', 'func'],
      correct: 2,
      explanation: '"def" (short for define) starts a function definition in Python. After def comes the function name and parentheses!',
    }
  ]
},

// ─────────────────────────────────────────────
// CHAPTER 15: Return Values & Parameters
// ─────────────────────────────────────────────
{
  id: 15, emoji: '📤', color: '#10b981',
  title: 'Return Values',
  tagline: 'Functions that compute and send back results!',
  steps: [
    {
      type: 'intro', title: 'Functions as Scientific Instruments!',
      visual: '🔭',
      content: `
        <p>A thermometer takes in a physical temperature and returns a reading. A weighing scale takes in an object and returns its mass. Functions with <strong>return values</strong> work the same way — they take inputs (parameters) and return outputs!</p>
        <div class="callout science"><span class="callout-icon">🔬</span><div class="callout-text"><strong>Parameters</strong> are the inputs a function expects. The <strong>return</strong> statement sends the result back to whoever called the function.</div></div>`,
      concepts: ['parameters', 'arguments', 'return', 'default values'],
    },
    {
      type: 'learn', title: 'Parameters and return',
      explanation: `
        <div class="section-block yellow"><div class="section-title">📐 Formula</div><pre style="font-family:monospace;font-size:0.9rem">def function_name(param1, param2):
    result = # do something with params
    return result

# Capture the returned value:
answer = function_name(5, 10)</pre></div>`,
      code: `# Physics formula functions!

def kinetic_energy(mass, velocity):
    """Calculate kinetic energy: KE = 0.5 * m * v²"""
    return 0.5 * mass * velocity ** 2

def gravitational_force(mass1, mass2, distance):
    """Newton's Law of Gravitation: F = G * m1 * m2 / r²"""
    G = 6.674e-11  # gravitational constant
    return G * mass1 * mass2 / distance ** 2

def circle_area(radius):
    """Area of a circle: A = π * r²"""
    pi = 3.14159265
    return pi * radius ** 2

# Use the functions
ke = kinetic_energy(1000, 200)  # 1000 kg at 200 m/s
print(f"Kinetic Energy: {ke:,.0f} Joules")

force = gravitational_force(5.97e24, 7.34e22, 384400000)
print(f"Earth-Moon gravity: {force:.2e} N")

area = circle_area(5)
print(f"Circle area (r=5): {area:.2f} m²")`,
    },
    {
      type: 'lab', title: "Lab 15: Newton's Science Calculator",
      instructions: `<p>Build a force calculator! Write a function called <strong>calculate_force(mass, acceleration)</strong> using Newton's 2nd Law: <strong>F = m × a</strong></p>
        <p>Then call it with at least 3 different scenarios and print the results.</p>`,
      starterCode: `# Lab 15: Newton's Second Law Calculator
# F = m × a  (Force = mass × acceleration)

def calculate_force(mass, acceleration):
    force = mass * acceleration
    return force

# Test with different scenarios
car_mass = 1200      # kg
car_accel = 3.5      # m/s²
car_force = calculate_force(car_mass, car_accel)
print(f"Car: {car_force:.1f} Newtons")

# Add 2 more scenarios here!
# (try a rocket, or a person running)
`,
      hints: ['force = mass * acceleration inside the function', 'Call it: calculate_force(100, 9.8)', 'Try: rocket mass = 550000 kg, accel = 30 m/s²'],
      checkKeywords: ['def ', 'return', 'calculate_force('],
      successMessage: "You implemented Newton's Laws in Python! This is exactly what physics simulation software does! 🚀",
    },
    {
      type: 'quiz', title: 'Quick Quiz ⚡',
      question: 'What does the return statement do in a function?',
      options: ['Repeats the function', 'Sends a value back to the caller and exits the function', 'Prints the result', 'Starts the function over'],
      correct: 1,
      explanation: 'return sends a value back to wherever the function was called. After return, the function stops running immediately.',
    }
  ]
},

// ─────────────────────────────────────────────
// CHAPTER 16: String Methods
// ─────────────────────────────────────────────
{
  id: 16, emoji: '🔡', color: '#ffd700',
  title: 'String Methods',
  tagline: 'Clean and manipulate text data!',
  steps: [
    {
      type: 'intro', title: 'Cleaning and Formatting Text!',
      visual: '🧹',
      content: `
        <p>Real scientific data is messy — inconsistent capitalisation, extra spaces, mixed formats. Data scientists spend much of their time <strong>cleaning text data</strong>. Python strings come with powerful built-in tools for this!</p>
        <div class="callout science"><span class="callout-icon">🔬</span><div class="callout-text">String methods let you transform, search, split, and clean text — essential skills for any data scientist!</div></div>`,
      concepts: ['.upper()', '.lower()', '.strip()', '.split()', '.join()', '.replace()', '.find()'],
    },
    {
      type: 'learn', title: 'Essential String Methods',
      explanation: `
        <div class="section-block"><div class="section-title">🔧 String Methods</div>
          <code>"text".upper()</code> → ALL CAPS<br>
          <code>"TEXT".lower()</code> → all lowercase<br>
          <code>" text ".strip()</code> → removes spaces<br>
          <code>"a,b,c".split(",")</code> → ["a","b","c"]<br>
          <code>",".join(["a","b"])</code> → "a,b"<br>
          <code>"abc".replace("a","x")</code> → "xbc"<br>
          <code>"abc".find("b")</code> → 1 (index)
        </div>`,
      code: `# Cleaning science data!

raw_data = "  hydrogen , HELIUM , Carbon , OXYGEN  "

# Split by comma and clean each element
elements = raw_data.split(",")
print(f"Raw split: {elements}")

# Clean each element: strip spaces, title case
cleaned = [e.strip().title() for e in elements]
print(f"Cleaned: {cleaned}")

# Join them back nicely
result = " | ".join(cleaned)
print(f"Formatted: {result}")

# String searching
text = "The boiling point of water is 100 degrees Celsius"
print(f"\\nContains 'boiling': {'boiling' in text}")
print(f"Position of 'water': {text.find('water')}")
print(f"Upper: {text.upper()[:30]}...")

# Replace
corrected = text.replace("Celsius", "°C")
print(f"Corrected: {corrected}")`,
    },
    {
      type: 'lab', title: 'Lab 16: Data Cleaner',
      instructions: `<p>You received messy experiment data as a string: <span class="inline-code">"  25.5 , 22.1 , 28.9 , 19.3 , 31.0  "</span></p>
        <p>Your job: split it, strip whitespace from each value, convert to floats, and find the average temperature!</p>`,
      starterCode: `# Lab 16: Clean the messy data!

messy_data = "  25.5 , 22.1 , 28.9 , 19.3 , 31.0  "

# Step 1: Split by comma
parts = messy_data.split(",")
print(f"After split: {parts}")

# Step 2: Strip and convert to float
temperatures = []
for part in parts:
    temp = float(part.strip())
    temperatures.append(temp)

print(f"Cleaned: {temperatures}")

# Step 3: Calculate average
average = sum(temperatures) / len(temperatures)
print(f"Average temperature: {average:.2f}°C")`,
      hints: ['.split(",") splits at each comma', '.strip() removes leading/trailing spaces', 'float() converts string to decimal number'],
      checkKeywords: ['.split(', '.strip(', 'float('],
      successMessage: 'Your data cleaner works! Data scientists spend 80% of their time cleaning data just like this! 🧹',
    },
    {
      type: 'quiz', title: 'Quick Quiz ⚡',
      question: 'What does "Hello World".split(" ") return?',
      options: ['"Hello", "World"', '["Hello", "World"]', '["Hello World"]', 'Error'],
      correct: 1,
      explanation: 'split() breaks a string into a LIST at every occurrence of the separator. "Hello World".split(" ") gives ["Hello", "World"].',
    }
  ]
},

// ─────────────────────────────────────────────
// CHAPTER 17: Nested Loops
// ─────────────────────────────────────────────
{
  id: 17, emoji: '🔁', color: '#a855f7',
  title: 'Nested Loops',
  tagline: 'Loops inside loops for grid data!',
  steps: [
    {
      type: 'intro', title: 'Loops Inside Loops!',
      visual: '📐',
      content: `
        <p>Scientists work with grids, matrices, and tables — like a 10×10 spreadsheet of temperature measurements, or a multiplication table. <strong>Nested loops</strong> (a loop inside a loop) let you work with any 2D structure!</p>
        <div class="callout science"><span class="callout-icon">🔬</span><div class="callout-text">Think of nested loops like a grid: the outer loop goes through rows, the inner loop goes through columns. Together they visit every single cell!</div></div>`,
      concepts: ['nested loops', 'outer loop', 'inner loop', '2D patterns', 'grids'],
    },
    {
      type: 'learn', title: 'Loops Inside Loops',
      explanation: `
        <div class="section-block yellow"><div class="section-title">📐 Structure</div><pre style="font-family:monospace;font-size:0.9rem">for row in range(3):       # outer loop
    for col in range(3):   # inner loop
        print(row, col)    # runs 3×3 = 9 times!</pre></div>
        <p>For every ONE iteration of the outer loop, the inner loop runs <em>completely</em>.</p>`,
      code: `# Multiplication table using nested loops!

print("Multiplication Table:")
print("    ", end="")
for i in range(1, 11):
    print(f"{i:4}", end="")
print()
print("    " + "----" * 10)

for row in range(1, 11):
    print(f"{row:3}|", end="")
    for col in range(1, 11):
        print(f"{row * col:4}", end="")
    print()  # newline after each row

# Pattern: triangle of stars
print("\\nStar triangle:")
for i in range(1, 6):
    for j in range(i):
        print("⭐", end=" ")
    print()`,
    },
    {
      type: 'lab', title: 'Lab 17: Distance-Time Table',
      instructions: `<p>Generate a distance-time table for 3 different speeds: 60, 80, 100 km/h. Show distances for hours 1, 2, 3, 4, 5.</p>
        <p>Formula: <strong>distance = speed × time</strong></p>`,
      starterCode: `# Lab 17: Distance-Time Table

speeds = [60, 80, 100]
hours = [1, 2, 3, 4, 5]

# Print header
print("Distance (km) by speed and time")
print(f"{'Speed':<10}", end="")
for h in hours:
    print(f"{h}h{'':<5}", end="")
print()
print("-" * 45)

# Nested loop to fill the table
for speed in speeds:
    print(f"{speed} km/h  ", end="")
    for time in hours:
        distance = speed * time
        print(f"{distance:<8}", end="")
    print()`,
      hints: ['Outer loop: for speed in speeds', 'Inner loop: for time in hours', 'distance = speed * time inside the inner loop'],
      checkKeywords: ['for', 'for', '*'],
      successMessage: 'Your distance-time table is perfect! Scientists use these kinds of lookup tables all the time! 📊',
    },
    {
      type: 'quiz', title: 'Quick Quiz ⚡',
      question: 'How many total times does print() run in: for i in range(3): for j in range(4): print(i,j)',
      options: ['3 times', '4 times', '7 times', '12 times'],
      correct: 3,
      explanation: 'The outer loop runs 3 times, and for each outer iteration, the inner loop runs 4 times. Total: 3 × 4 = 12 times!',
    }
  ]
},

// ─────────────────────────────────────────────
// CHAPTER 18: Error Handling
// ─────────────────────────────────────────────
{
  id: 18, emoji: '⚠️', color: '#ef4444',
  title: 'Error Handling',
  tagline: 'Handle mistakes like a pro scientist!',
  steps: [
    {
      type: 'intro', title: 'Experiments Sometimes Fail!',
      visual: '🛡️',
      content: `
        <p>Every scientist knows: experiments don't always go as planned. Equipment fails, data is wrong, conditions change. A good scientist handles these situations gracefully. In Python, <strong>try/except</strong> does exactly this!</p>
        <div class="callout science"><span class="callout-icon">🔬</span><div class="callout-text"><strong>Error handling</strong> lets your program deal with unexpected situations without crashing — like a scientist having a backup plan when an experiment goes wrong!</div></div>`,
      concepts: ['try', 'except', 'ValueError', 'ZeroDivisionError', 'error types'],
    },
    {
      type: 'learn', title: 'try / except Blocks',
      explanation: `
        <div class="section-block yellow"><div class="section-title">📐 Formula</div><pre style="font-family:monospace;font-size:0.9rem">try:
    # code that might fail
except ValueError:
    # handle value errors
except ZeroDivisionError:
    # handle division by zero
except Exception as e:
    # catch anything else
    print(f"Error: {e}")</pre></div>`,
      code: `# Safe science calculator with error handling

def safe_divide(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError:
        return "Error: Can't divide by zero! ⚠️"

def get_measurement():
    try:
        value = float(input("Enter measurement: "))
        if value < 0:
            raise ValueError("Measurement can't be negative!")
        return value
    except ValueError as e:
        print(f"Invalid input: {e}")
        return None

# Test safe_divide
print(safe_divide(100, 4))     # works fine
print(safe_divide(100, 0))     # handles error!
print(safe_divide(355, 113))   # approximation of π

# Test get_measurement
reading = get_measurement()
if reading is not None:
    print(f"Recorded: {reading}")`,
    },
    {
      type: 'lab', title: 'Lab 18: Robust Temperature Converter',
      instructions: `<p>Build a temperature converter that handles bad input gracefully. If the user types something that's not a number, catch the error and print a friendly message instead of crashing!</p>`,
      starterCode: `# Lab 18: Robust temperature converter

def convert_temperature(input_str):
    try:
        celsius = float(input_str)
        fahrenheit = (celsius * 9/5) + 32
        kelvin = celsius + 273.15
        print(f"✅ {celsius}°C = {fahrenheit:.1f}°F = {kelvin:.2f}K")
    except ValueError:
        print(f"❌ '{input_str}' is not a valid number!")

# Test with valid and invalid inputs
print("Testing temperature converter:")
convert_temperature("100")      # should work
convert_temperature("abc")      # should handle gracefully
convert_temperature("-40")      # should work
convert_temperature("hot!")     # should handle gracefully`,
      hints: ['try: contains the code that might fail', 'except ValueError: handles non-number inputs', 'float("abc") raises a ValueError'],
      checkKeywords: ['try:', 'except'],
      successMessage: 'Your error-resistant program is solid! Professional software always handles errors gracefully! 🛡️',
    },
    {
      type: 'quiz', title: 'Quick Quiz ⚡',
      question: 'What happens when an error occurs inside a try block?',
      options: ['The program crashes', 'Python jumps to the matching except block', 'The error is ignored', 'The try block restarts'],
      correct: 1,
      explanation: 'When an error occurs in a try block, Python immediately jumps to the except block. This prevents crashes and lets you handle the problem!',
    }
  ]
},

// ─────────────────────────────────────────────
// CHAPTER 19: Modules
// ─────────────────────────────────────────────
{
  id: 19, emoji: '📦', color: '#00d4ff',
  title: 'Modules & Libraries',
  tagline: 'Use Python\'s scientific toolkit!',
  steps: [
    {
      type: 'intro', title: 'Python\'s Toolbox of Power!',
      visual: '🧰',
      content: `
        <p>A scientist doesn't build all their equipment from scratch — they use specialised instruments. Python has thousands of ready-made <strong>modules</strong> (toolboxes) full of powerful functions!</p>
        <div class="callout science"><span class="callout-icon">🔬</span><div class="callout-text">The <strong>math</strong> module gives you π, square roots, trigonometry. The <strong>random</strong> module lets you simulate random experiments. Just <span class="inline-code">import</span> them!</div></div>`,
      concepts: ['import', 'math module', 'random module', 'math.pi', 'math.sqrt()', 'random.random()'],
    },
    {
      type: 'learn', title: 'Importing and Using Modules',
      explanation: `
        <div class="section-block yellow"><div class="section-title">📐 How to Import</div><pre style="font-family:monospace;font-size:0.9rem">import math            # import the whole module
from math import pi    # import just one thing
import math as m       # give it a nickname</pre></div>`,
      code: `import math
import random

# math module: scientific calculations
print("=== MATH MODULE ===")
print(f"π = {math.pi:.10f}")
print(f"e = {math.e:.10f}")
print(f"√144 = {math.sqrt(144)}")
print(f"sin(90°) = {math.sin(math.radians(90)):.1f}")
print(f"log₁₀(1000) = {math.log10(1000)}")

# Geometry
radius = 7
area = math.pi * radius ** 2
circumference = 2 * math.pi * radius
print(f"\\nCircle (r={radius}): area={area:.2f}, C={circumference:.2f}")

# random module: simulate experiments
print("\\n=== RANDOM EXPERIMENT ===")
print("Simulating 5 coin flips:")
for i in range(5):
    flip = random.choice(["Heads 🪙", "Tails 🪙"])
    print(f"  Flip {i+1}: {flip}")

temp_variation = random.uniform(-5, 5)
print(f"\\nRandom temperature variation: {temp_variation:.2f}°C")`,
    },
    {
      type: 'lab', title: 'Lab 19: Science Geometry Calculator',
      instructions: `<p>Use the <strong>math</strong> module to build a geometry calculator. Calculate:</p>
        <p>1. Area of a circle with radius = 8 m</p>
        <p>2. Volume of a sphere: V = (4/3) × π × r³</p>
        <p>3. Hypotenuse of a right triangle: c = √(a² + b²) where a=3, b=4</p>`,
      starterCode: `# Lab 19: Geometry Calculator using math module

import math

radius = 8

# Circle area: A = π × r²
circle_area = math.pi * radius ** 2
print(f"Circle area (r={radius}): {circle_area:.2f} m²")

# Sphere volume: V = (4/3) × π × r³
sphere_volume = (4/3) * math.pi * radius ** 3
print(f"Sphere volume (r={radius}): {sphere_volume:.2f} m³")

# Hypotenuse: c = √(a² + b²)
a, b = 3, 4
hypotenuse = math.sqrt(a**2 + b**2)
print(f"Hypotenuse (a={a}, b={b}): {hypotenuse:.1f} m")`,
      hints: ['import math goes at the very top', 'math.pi gives you π (3.14159...)', 'math.sqrt() calculates square roots'],
      checkKeywords: ['import math', 'math.pi', 'math.sqrt('],
      successMessage: 'You used real scientific Python libraries! The math module is used by engineers and scientists worldwide! 🔬',
    },
    {
      type: 'quiz', title: 'Quick Quiz ⚡',
      question: 'What does "import math" do?',
      options: ['Creates a new math function', 'Loads the math module so you can use its functions', 'Runs a math calculation', 'Imports numbers from a file'],
      correct: 1,
      explanation: 'import loads a module (toolbox) into your program. After "import math", you can use math.pi, math.sqrt() and all other math functions!',
    }
  ]
},

// ─────────────────────────────────────────────
// CHAPTER 20: Capstone Project
// ─────────────────────────────────────────────
{
  id: 20, emoji: '🏆', color: '#ffd700',
  title: 'Capstone: Science Lab Simulator!',
  tagline: 'Build your own science lab program!',
  steps: [
    {
      type: 'intro', title: 'You\'ve Made It! 🎉',
      visual: '🏆',
      content: `
        <p>Congratulations, Python Scientist! You've learned 19 powerful concepts. Now it's time to put them ALL together and build a real science lab simulator!</p>
        <div class="callout success"><span class="callout-icon">⭐</span><div class="callout-text">This final chapter brings together: <strong>variables, functions, loops, lists, dictionaries, if/else, error handling, and modules</strong> — everything you've learned!</div></div>
        <p>You'll build a <strong>Science Lab Simulator</strong> that can perform multiple experiments through a menu system!</p>`,
      concepts: ['all previous concepts', 'program design', 'menus', 'combining skills'],
    },
    {
      type: 'learn', title: 'The Science Lab Simulator — Full Example',
      explanation: `<p>Here is a complete Science Lab Simulator that uses everything you've learned. Read through it carefully — see how all the concepts work together!</p>`,
      code: `import math
import random

# ── Data ──────────────────────────────────────
elements = {
    "H": {"name": "Hydrogen", "mass": 1.008},
    "O": {"name": "Oxygen",   "mass": 15.999},
    "C": {"name": "Carbon",   "mass": 12.011},
    "N": {"name": "Nitrogen", "mass": 14.007},
}
experiment_log = []

# ── Functions ─────────────────────────────────
def separator():
    print("─" * 40)

def log_result(experiment, result):
    experiment_log.append(f"{experiment}: {result}")

def celsius_to_fahrenheit(c):
    return (c * 9/5) + 32

def run_temperature_lab():
    separator()
    print("🌡️  Temperature Conversion Lab")
    separator()
    try:
        c = float(input("Enter temperature in °C: "))
        f = celsius_to_fahrenheit(c)
        k = c + 273.15
        print(f"  {c}°C = {f:.1f}°F = {k:.2f} K")
        log_result("Temperature", f"{c}°C → {f:.1f}°F")
    except ValueError:
        print("❌ Please enter a valid number!")

def run_geometry_lab():
    separator()
    print("📐  Geometry Lab")
    separator()
    try:
        r = float(input("Enter radius (m): "))
        area = math.pi * r**2
        vol  = (4/3) * math.pi * r**3
        print(f"  Circle area: {area:.2f} m²")
        print(f"  Sphere volume: {vol:.2f} m³")
        log_result("Geometry", f"r={r}, area={area:.2f}")
    except ValueError:
        print("❌ Please enter a valid number!")

def run_random_experiment():
    separator()
    print("🎲  Random Experiment Simulator")
    separator()
    readings = [round(20 + random.uniform(-5, 5), 2) for _ in range(5)]
    print(f"  5 random temperature readings:")
    for i, t in enumerate(readings, 1):
        print(f"  Reading {i}: {t}°C")
    avg = sum(readings) / len(readings)
    print(f"  Average: {avg:.2f}°C")
    log_result("Random", f"avg={avg:.2f}°C")

# ── Main Menu ─────────────────────────────────
separator()
print("  🔬 PYTHON SCIENCE LAB SIMULATOR")
separator()
print("  1. Temperature Conversion Lab")
print("  2. Geometry Lab")
print("  3. Random Experiment")
print("  4. Show Experiment Log")
separator()

choice = input("Choose experiment (1-4): ")

if choice == "1":
    run_temperature_lab()
elif choice == "2":
    run_geometry_lab()
elif choice == "3":
    run_random_experiment()
elif choice == "4":
    separator()
    print("📋 Experiment Log")
    if experiment_log:
        for entry in experiment_log:
            print(f"  • {entry}")
    else:
        print("  No experiments yet!")
else:
    print("❌ Invalid choice!")`,
    },
    {
      type: 'lab', title: '🏆 Final Project: Your Own Experiment!',
      instructions: `<p>This is your final challenge! Add a <strong>new experiment</strong> to the science lab simulator.</p>
        <p>Your experiment must:</p>
        <p>• Use at least one <strong>function</strong> with a <strong>return value</strong></p>
        <p>• Use a <strong>loop</strong> (for or while)</p>
        <p>• Use <strong>try/except</strong> for error handling</p>
        <p>• Print results with <strong>f-strings</strong></p>
        <p>Ideas: speed calculator, falling distance calculator, body mass index, sound wave calculator...</p>`,
      starterCode: `import math

# Your Final Project!
# Add your own science experiment below

def my_experiment():
    print("=" * 40)
    print("  🔬 My Science Experiment")
    print("=" * 40)

    # Use input() to get values from the user
    # Use a loop to show multiple results
    # Use try/except to handle bad inputs
    # Use a function with return to do the calculation

    print("Design your experiment here!")

# Run your experiment
my_experiment()

# Bonus: Use math module for something cool!
print(f"\\n(Bonus) π ≈ {math.pi:.5f}")`,
      hints: ['Try a speed calculator: distance/time', 'Or a falling distance: 0.5 * 9.8 * t²', 'Wrap your main code in try/except ValueError'],
      checkKeywords: ['def ', 'print('],
      successMessage: '🏆 AMAZING! You completed all 20 chapters of Python Science Lab! You are officially a Python Scientist! Share your experiment with the world!',
    },
    {
      type: 'quiz', title: '🏆 Final Knowledge Check!',
      question: 'Which Python concept lets you reuse a block of code by giving it a name and calling it multiple times?',
      options: ['A variable', 'A loop', 'A function', 'A list'],
      correct: 2,
      explanation: 'Functions (defined with def) let you write code once and call it many times. This is one of the most powerful ideas in all of programming!',
    }
  ]
}

]; // END OF CHAPTERS
