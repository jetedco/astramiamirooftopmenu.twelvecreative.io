/* =====================================================================
   ASTRA ROOFTOP — MENU CONTENT
   ---------------------------------------------------------------------
   Everything the page shows lives in this file. To change a price or a
   dish, edit it here and push; the site rebuilds itself in the browser.

   Each menu  = { id, label (button text), title, subtitle?, note?, pdf?,
                  hero? (photo at the top of the menu), sections[] }
   Each section = { title, note?, footnote?, kind? ("items" | "chips"),
                    boxed? (draw the double frame), items[] }
   Each item  = { name, price?, desc?, sub? (small text after the name),
                  featured? (draw the frame), img? (photo path) }

   PHOTOS: drop the file in /images and set  img: "images/astra-burger.jpg"
   on the item. Square-ish photos (e.g. 800×800) look best; the page shows
   a thumbnail and opens the full photo on tap.
   ===================================================================== */

window.ASTRA_SITE = {
  name: "Astra Rooftop",
  tagline: "Greek Soul · Bohemian Spirit",
  eventsEmail: "events@ikhospitalitygroup.com",
  phone: "305-783-7226",
  disclaimer: "*Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness. Please note that there is a risk associated with consuming raw oysters. Additionally, a 21% service charge will be added to your final bill."
};

window.ASTRA_MENUS = [

  /* ------------------------------------------------------------ FOOD */
  {
    id: "food", label: "Food", title: "Food Menu", pdf: "menus/food-menu.pdf",
    sections: [
      { title: "Appetizers", items: [
        { name: "Oysters*", price: "½ Dozen $24 / 1 Dozen $48", desc: "Served with lemon, mignonette & cocktail sauce" },
        { name: "Tuna Tartare*", price: "$26", desc: "Ahi tuna, crispy shallots, avocado, orange, ponzu sauce" },
        { name: "Sashimi*", price: "$26", desc: "Salmon, tuna, soy sauce, jalapeños" },
        { name: "Wild Caught Salmon Tartare*", price: "$22", desc: "Fresh salmon, mango, lemon, lime, avocado" },
        { name: "Oktapodi Sharas", price: "$26", desc: "Mediterranean grilled octopus, onions, capers, lemon" },
        { name: "Ceviche*", price: "$26", desc: "Fresh fish, coconut milk, white corn, sweet chili juice", img: "images/ceviche.jpg", thumb: "images/ceviche-thumb.jpg" },
        { name: "Garides Stin Sxara", price: "$28", desc: "5 grilled black tiger shrimp, cilantro lemon oil" },
        { name: "Calamarakia", price: "$22", desc: "Crispy fried calamari, lemon aioli, parsley oil" },
        { name: "Cheese Saganaki", price: "$22", desc: "Pan fried kefalograviera cheese, grilled country bread, tableside flambé with ouzo", img: "images/cheese-saganaki.jpg", thumb: "images/cheese-saganaki-thumb.jpg" },
        { name: "Spanakopita", price: "$20", desc: "Greek spinach pie, feta" },
        { name: "Pikilia Spread", price: "Three $24 / Five $34", desc: "Choice of hummus, melitzanosalata, spicy feta, tzatziki, taramosalata, pita bread", img: "images/pikilia-spread.jpg", thumb: "images/pikilia-spread-thumb.jpg" },
        { name: "Saganaki with Sesame & Honey", price: "$22", desc: "Crispy sesame, crusted feta, Cretan thyme honey" },
        { name: "Astra Chips", price: "$22", desc: "Crispy zucchini & eggplant chips, tzatziki sauce" },
        { name: "Lamb Meatballs", price: "$20", desc: "Colorado ground lamb, parsley, oregano, tzatziki sauce" },
        { name: "Beef Carpaccio*", price: "$26", desc: "Thinly sliced beef tenderloin, soy sauce, green apple, arugula, Parmesan, jalapeños" },
        { name: "Astra Tower", price: "$99", desc: "1 whole Maine lobster (1.25 to 1.5 lbs), 8 tiger shrimp, 8 oysters", featured: true }
      ]},
      { title: "Salates", items: [
        { name: "Arugula & Gorgonzola", price: "$18", desc: "Baby arugula, Gorgonzola cheese, dry fruits, cherries, grapes, prunes, orange vinaigrette", img: "images/arugula-gorgonzola.jpg", thumb: "images/arugula-gorgonzola-thumb.jpg" },
        { name: "Little Gem Caesar Salad", price: "$16", desc: "Baby gem hearts, Caesar dressing, shaved Parmesan cheese, golden herb croutons" },
        { name: "Burrata", price: "$24", desc: "Fresh creamy burrata cheese, heirloom tomatoes, glazed balsamic vinaigrette" },
        { name: "Horiatiki", price: "$22", desc: "Classic Greek salad, tomatoes, cucumbers, peppers, onions, olives, feta, extra virgin olive oil", img: "images/horiatiki.jpg", thumb: "images/horiatiki-thumb.jpg" },
        { name: "Astra Salad", price: "$29", desc: "Tuna, baby lettuce, cherry tomatoes, green beans, boiled eggs, Kalamata olives, and Parmigiano Reggiano dressing", featured: true }
      ]},
      { title: "From the Sea", items: [
        { name: "Grilled Ahi Tuna Steak", price: "$42", desc: "Grilled ahi tuna, asparagus, Maldon, extra virgin olive oil" },
        { name: "Lobster Pasta", price: "$48", desc: "Spaghetti, fresh Maine lobster, tomato sauce, parsley" },
        { name: "Grilled Lobster (1.25 lb)", price: "$54", desc: "Grilled Maine lobster" },
        { name: "Alaskan Salmon Filet", price: "$38", desc: "Grilled wild caught fresh salmon filet, sautéed spinach, tarama" },
        { name: "Shrimp Orzo", price: "$36", desc: "Wild shrimp, orzo, tomato sauce" },
        { name: "Seafood Pasta", price: "$39", desc: "Linguine, shrimp, octopus, calamari, house-made marinara, lobster bisque, heirloom cherry tomatoes, sun-dried tomatoes" },
        { name: "Branzino or Red Snapper", price: "1.25–1.5\u00a0lbs\u00a0$44 / 2.25–2.5\u00a0lbs\u00a0$88 / 3.25–3.5\u00a0lbs\u00a0mkt\u00a0price", desc: "Choice of grilled whole Mediterranean fish (tableside deboning)", featured: true }
      ]},
      { title: "From the Land", items: [
        { name: "Filet Mignon (8 oz.)", price: "$49", desc: "8 oz. charcoal grilled beef tenderloin, grilled asparagus, mushroom sauce" },
        { name: "Brizola (12 oz.)", price: "$46", desc: "Charcoal grilled rib-eye steak, wild mushroom sauce, tzatziki sauce, hand cut fries", img: "images/brizola.jpg", thumb: "images/brizola-thumb.jpg" },
        { name: "Short Ribs (8 oz.)", price: "$48", desc: "Slow braised beef short ribs, orzo, tomato sauce" },
        { name: "NY Strip (12 oz.)", price: "$49", desc: "Center cut short loin, tzatziki sauce, hand cut fries" },
        { name: "Astra Burger (10 oz.)", price: "$28", desc: "Angus beef patty, caramelized onions, sharp cheddar cheese, lettuce, tomatoes, onions, hand cut fries" },
        { name: "Grilled Vegetarian Plate", price: "$28", desc: "Eggplant, zucchini, peppers, yellow squash, shiitake mushrooms, fava bean puree" },
        { name: "Mixed Grill", price: "$48", desc: "3 skewers of marinated organic chicken, pita, lamb & beef kebab, hand cut fries, tzatziki sauce", img: "images/mixed-grill.jpg", thumb: "images/mixed-grill-thumb.jpg" },
        { name: "Kotopoulo", price: "$32", desc: "2 skewers of grilled marinated organic chicken, pita bread, tzatziki sauce" },
        { name: "Paidakia", price: "$48", desc: "Charcoal grilled baby lamb chops, spinach and mint chimichurri sauce", img: "images/paidakia.jpg", thumb: "images/paidakia-thumb.jpg" },
        { name: "Lamb Kebab", price: "$34", desc: "Colorado ground lamb, tzatziki sauce, tomatoes, onions, pita bread" },
        { name: "Steak Kebabs", price: "$36", desc: "Served with pita bread, tzatziki, and fries" }
      ]},
      { title: "Sides", items: [
        { name: "Fries & Tzatziki", price: "$10" },
        { name: "Olives & Pita / Feta Cheese", price: "$10" },
        { name: "Sautéed Spinach", price: "$10" },
        { name: "Grilled Asparagus", price: "$10" },
        { name: "Tarama Salata", price: "$10" },
        { name: "Classic Mashed Potatoes", price: "$10" },
        { name: "Pita Bread Basket", price: "$6" }
      ]}
    ],
    story: {
      title: "Greek Soul, Bohemian Spirit",
      paragraphs: [
        "In ancient Greek mythology, Astra was the goddess of the stars and constellations, a cosmic being of radiant beauty and celestial power. Like the goddess herself, Astra Miami is a beacon of light and energy in the heart of Wynwood.",
        "Perched atop a Bohemian paradise, Astra is not just a rooftop restaurant and bar, but a culinary journey that brings the vibrant flavors of the Mediterranean and Greece to Miami's most creative neighborhood. The eclectic and bold Greek-inspired cuisine of Astra is a perfect match for the artistic vibe that surrounds it.",
        "Step onto the rooftop terrace, and you'll be transported to a lush oasis of greenery, breathtaking city views, and spectacular sunsets. The terrace is a space where people gather to celebrate life, love, and the arts. From intimate dinners, engagements, romantic proposals, and private corporate events to vibrant Friday, Saturday, and Sunday lunches and brunches, Astra is a place where good food and great company come together.",
        "But Astra is more than just a restaurant. It reflects the vibrant and diverse community that surrounds it. Wynwood is a place where artists, musicians, and dreamers converge to create magic. Astra, at the heart of it all, is not just a restaurant but a cultural epicenter that inspires and uplifts everyone who steps through its doors. It's where the best vibes come alive nightly with international DJs, making it a must-visit destination for anyone who appreciates art and music.",
        "So whether you are a free spirit, a dreamer, or someone who loves good food and great company, Astra Miami welcomes you with open arms. Come and discover the magic of Wynwood and experience the celestial beauty of Astra for yourself."
      ]
    }
  },

  /* -------------------------------------------------- DAILY SPECIALS */
  {
    id: "specials", label: "Daily Specials", title: "Daily Specials", subtitle: "Dining Under the Stars", pdf: "menus/daily-specials.pdf", columns: 1,
    sections: [
      { title: "Today's Specials", items: [
        { name: "Astra Shrimps Saganaki", price: "$26", desc: "Bruschetta, heirloom cherry tomatoes, feta cheese, house-made marinara sauce" },
        { name: "Branzino Filet Medallion", price: "$44", desc: "Prosecco lemon white sauce, veggie sticks with spinach, saffron rice" },
        { name: "Wagyu Beef Moussaka", price: "$32", desc: "Eggplants, potatoes, Wagyu beef Bolognese, béchamel cream, feta mousse topping" },
        { name: "Meatball Pasta", price: "$26", desc: "Linguine, house-made marinara, heirloom cherry tomatoes, Parmesan cheese, feta cheese topping" },
        { name: "Astra Special Mussels", price: "$24", desc: "Bruschetta, heirloom cherry tomatoes, feta cheese, olives, capers, sun-dried tomatoes, fresh garlic, green peppers" },
        { name: "Fried Red Snapper", price: "$44", desc: "Served with house salad and saffron rice" },
        { name: "Lentil Salad", price: "$22", desc: "Citrus, fresh herbs, sundried tomatoes, orange vinaigrette", img: "images/lentil-salad.jpg", thumb: "images/lentil-salad-thumb.jpg" },
        { name: "Stracciatella Salad", price: "$22", desc: "Infused strawberries, chili oil, spring onions, whipped honey", img: "images/stracciatella-salad.jpg", thumb: "images/stracciatella-salad-thumb.jpg" },
        { name: "Lamb Shank", price: "$44", desc: "Tri-color fingerling roasted potatoes and asparagus" },
        { name: "Porterhouse (32 oz.)", price: "$138", desc: "32 oz. Porterhouse steak (ideal for two) served with hand-cut fries", featured: true }
      ]}
    ]
  },

  /* ---------------------------------------------------------- BRUNCH */
  {
    id: "brunch", label: "Brunch", title: "Brunch Menu", pdf: "menus/brunch-menu.pdf",
    sections: [
      { title: "Appetizers", items: [
        { name: "Mama's Meatballs", price: "$16", desc: "Marinara sauce, pita bread, feta topping" },
        { name: "Spanakopita", price: "$18", desc: "Greek spinach pie, feta cheese" },
        { name: "Horiatiki", price: "$16", desc: "Authentic Greek salad with tomatoes, red onions, green peppers, Kalamata olives, feta cheese", img: "images/horiatiki.jpg", thumb: "images/horiatiki-thumb.jpg" },
        { name: "Shrimp Saganaki", price: "$16", desc: "Grilled shrimp, tomato sauce, garlic, herbs, feta cheese" },
        { name: "Caesar Salad", price: "$14", desc: "Romaine lettuce, croutons, Parmesan flakes, applewood crispy bacon, Caesar dressing" },
        { name: "Astra Spread", price: "$14", desc: "Spicy feta, tzatziki, hummus" },
        { name: "Tuna Tartare", price: "$16", desc: "Fresh tuna tartare served with country bread" },
        { name: "Calamari", price: "$16", desc: "Crispy calamari, marinara sauce, tzatziki" },
        { name: "Guac N Chips", price: "$14", desc: "Homemade guacamole, tortillas, sour cream sauce" },
        { name: "Astra Salad", price: "$29", desc: "Tuna, baby lettuce, cherry tomatoes, green beans, boiled eggs, Kalamata olives, and Parmigiano Reggiano dressing" },
        { name: "Quinoa Salad", price: "$18", desc: "Baby kale, cucumber, heirloom cherry tomatoes, Kalamata olives, quinoa, feta, chickpeas, avocado, lemon vinaigrette" }
      ]},
      { title: "Mains", items: [
        { name: "Steak & Eggs", price: "$38", desc: "Rib-eye steak, eggs any style, house potatoes" },
        { name: "Greek Omelette", price: "$20", desc: "Feta, olives, cherry tomatoes, onion, feta mousse topping" },
        { name: "Spinach Pie Omelette", price: "$18", desc: "Spinach, feta, onion" },
        { name: "Avocado Toast", price: "$20", desc: "Whole grain toast, sliced avocado, soft boiled egg" },
        { name: "Salmon Avocado Toast", price: "$24", desc: "Whole grain toast, sliced avocado, smoked salmon" },
        { name: "Corvina Taco", price: "$16", desc: "Three tacos, delicate corvina fish in a taco shell" },
        { name: "Mini Burgers", price: "$20", desc: "Patty burgers, cheddar, caramelized onion, tomato, lettuce" },
        { name: "Crab Benedict", price: "$22", desc: "Two English muffins, jumbo lump crab, poached eggs, hollandaise sauce, micro greens" },
        { name: "Smoked Salmon Benedict", price: "$24", desc: "English muffin, smoked salmon, poached egg, hollandaise sauce" },
        { name: "Beef Souvlaki", price: "$20", desc: "Beef skewer with bell peppers, red onion, and tzatziki, pita" },
        { name: "Lamb Kebab", price: "$16", desc: "Lamb meat, tzatziki sauce, and pita bread" },
        { name: "Short Rib Taco", price: "$18", desc: "Tender short rib in a taco shell" },
        { name: "Chicken Skewer", price: "$16", desc: "Chicken skewer, tzatziki, pita bread" },
        { name: "Shrimp Bao Bun", price: "$18", desc: "Shrimps, guacamole, soft bao bun" },
        { name: "Greek Parfait", price: "$14", desc: "Greek yogurt, Greek honey, granola, coconut flakes, blueberries" },
        { name: "Pancakes", price: "$20", desc: "Nutella, biscuit, blueberries, strawberries, whipped cream" },
        { name: "French Toast", price: "$12", desc: "Whipped cream, Nutella / maple syrup / honey, blueberries, granola" }
      ]},
      { title: "Sparklings", note: "Wine by the glass · Glass / Bottle", items: [
        { name: "Brut Champagne", sub: "Veuve Clicquot, France", price: "$22 / $135" },
        { name: "Franciacorta Rosé", sub: "Ca' Del Bosco, Italy", price: "$19 / $74" },
        { name: "Prosecco", sub: "Gambino, Italy", price: "$14 / $56" },
        { name: "Franciacorta", sub: "Ca' Del Bosco, Italy", price: "$18 / $72" }
      ]},
      { title: "White", note: "Glass / Bottle", items: [
        { name: "Chardonnay", sub: "Chalk Hill, Sonoma, California", price: "$16 / $68" },
        { name: "Sauvignon Blanc", sub: "Drylands, Marlborough, New Zealand", price: "$16 / $56" },
        { name: "Pinot Grigio", sub: "Il Masso, Veneto, Italy", price: "$14 / $56" },
        { name: "Albariño", sub: "Abadia, Rias Baixas, Spain", price: "$14 / $56" }
      ]},
      { title: "Red", note: "Glass / Bottle", items: [
        { name: "Pinot Noir", sub: "Hahn, Monterey County, California", price: "$14 / $56" },
        { name: "Cabernet Sauvignon", sub: "Daou, Paso Robles, California", price: "$16 / $64" },
        { name: "Malbec", sub: "Terrazas, Argentina", price: "$14 / $58" },
        { name: "Tempranillo", sub: "Finca Nueva Crianza, Rioja, Spain", price: "$16 / $62" }
      ]},
      { title: "Rosé", note: "Glass / Bottle", items: [
        { name: "Whispering Angel", price: "$18 / $70" }
      ]},
      { title: "Crafted Cocktails", items: [
        { name: "Astra To The Moon", price: "$18", desc: "Grey Goose vodka, St. Germain, lemon juice, lychee & butterfly pea syrup" },
        { name: "Berry Margarita", price: "$18", desc: "Casamigos Blanco, fresh mixed berries, agave, lime" },
        { name: "Astra Bloody Mary", price: "$16", desc: "Pegasus vodka, Amaras mezcal, bacon, guajillo chile, house Bloody Mary mix" },
        { name: "Lili-Koi Spice", price: "$18", desc: "Jalapeño chili-infused 400 Conejos mezcal and passion fruit" },
        { name: "Rosé Thalassa", price: "$19", desc: "Union mezcal, fresh lime juice, hibiscus tea, rosemary, and sal de gusano" },
        { name: "Santorini Sunset", price: "$21", desc: "Altos Reposado tequila, fresh lime juice, watermelon juice, and agave", img: "images/santorini-sunset.jpg", thumb: "images/santorini-sunset-thumb.jpg" }
      ]},
      { title: "Beers", items: [
        { name: "Stella Artois", price: "$8", desc: "Lager" },
        { name: "Estrella Inedit Damm", price: "$10", desc: "Lager" },
        { name: "Monopolio Clara", price: "$9", desc: "Lager" },
        { name: "Juan Please", price: "$9", desc: "Iced tea lemonade tequila seltzer" },
        { name: "Pernicious", price: "$10", desc: "IPA" }
      ]}
    ]
  },

  /* ------------------------------------------------------ HAPPY HOUR */
  {
    id: "happy-hour", label: "Happy Hour", title: "Happy Hour", note: "5:00 PM to 8:00 PM daily. Bar and Bar Deck only.", pdf: "menus/happy-hour-menu.pdf",
    sections: [
      { title: "Bar Bites", items: [
        { name: "Oysters (Each)*", price: "$2.25", desc: "Fresh lime, cocktail sauce" },
        { name: "Lamb Meatballs", price: "$12", desc: "Mini kebab meatballs, tzatziki" },
        { name: "Pikilia Spread", price: "$12", desc: "Eggplant melitzanosalata, hummus, spicy feta, pita bread", img: "images/pikilia-spread.jpg", thumb: "images/pikilia-spread-thumb.jpg" },
        { name: "Classic Greek Salad", price: "$12", desc: "Tomatoes, cucumber, green peppers, olives, red onions, Kalamata olives, feta cheese, virgin olive oil, romaine hearts lettuce" },
        { name: "Classic Caesar Salad", price: "$12", desc: "Romaine lettuce, Caesar dressing, Parmesan, croutons + applewood crispy bacon" },
        { name: "Chicken Kebab", price: "$14", desc: "Grilled chicken kebab skewer with BBQ sauce and saffron rice" },
        { name: "Steak Kebab", price: "$16", desc: "Grilled steak kebab, ladolemono sauce, saffron rice" },
        { name: "Crispy Brussels Sprout", price: "$12", desc: "Golden fried sprouts with a savory glaze" },
        { name: "Spanakopita", price: "$12", desc: "Flaky pastry filled with spinach, herbs and feta cheese" },
        { name: "Astra Plate", price: "$15", desc: "Astra potato chips with short ribs and sour cream, guacamole, arugula" },
        { name: "Kalamarakia", price: "$12", desc: "Fried calamari, tzatziki" },
        { name: "House Potato Chips", price: "$10", desc: "Homemade crispy Idaho chips" },
        { name: "Tuna Tartare*", price: "$12", desc: "Crispy shallots, avocado, orange, ponzu sauce" },
        { name: "Ceviche*", price: "$12", desc: "Fresh corvina, lime juice, red onions, cilantro, side of crispy Idaho chips" },
        { name: "Greek Mamas Meatballs", price: "$12", desc: "Beef meatballs, cooked in homemade marinara sauce, crumbled feta topping + pita bread" },
        { name: "Mini Burgers Astra Specials", price: "$18", desc: "Juicy bite-sized burgers with signature toppings, fries" },
        { name: "Mediterranean Plate", price: "$14", desc: "Falafel, hummus, pita, crudité, tahina sauce" }
      ]},
      { title: "Crafted Cocktails", items: [
        { name: "Astra to the Moon", price: "$9", desc: "Grey Goose vodka, St-Germain, lemon juice, lychee, and butterfly pea syrup" },
        { name: "Astra Mule", price: "$9", desc: "E11EVEN vodka, muddled raspberries and mint, topped with ginger beer" },
        { name: "Lili-Koi Spice", price: "$9", desc: "Jalapeño chili-infused 400 Conejos mezcal and passion fruit" },
        { name: "Passion Rum", price: "$9", desc: "Santa Teresa rum, ginger liqueur, lemon juice, strawberry, passion fruit and ginger ale" },
        { name: "Espresso Martini", price: "$10", desc: "Absolut Vanilla vodka, Town Coffee espresso, and Luxardo espresso liqueur" },
        { name: "Paloma", price: "$9", desc: "Don Julio Blanco, fresh lime juice, Q Mixers premium grapefruit soda, Tajín" },
        { name: "Berry Margarita", price: "$9", desc: "Casamigos Blanco tequila, fresh mixed berries, agave and lime" },
        { name: "Summer in Mykonos", price: "$9", desc: "Orion gin, mastiha, mint, lime, Pathfinder liqueur" },
        { name: "Rosé Sangria", price: "$9", desc: "Galea organic rosé, cranberry, fresh fruit" },
        { name: "Gin & Tonic", price: "$8", desc: "Canaïma gin, Q Mixers premium tonic water" },
        { name: "Jack & Coke", price: "$8", desc: "Jack Daniel's whiskey, Coca-Cola" }
      ]},
      { title: "Wine & Beer", items: [
        { name: "Red of the Day", price: "$9", desc: "Red wine" },
        { name: "White of the Day", price: "$9", desc: "White wine" },
        { name: "Prosecco", price: "$8", desc: "Gambino" },
        { name: "Casalú", price: "$6", desc: "Rum seltzer" },
        { name: "Stella Artois — Belgium", price: "$6", desc: "Lager" },
        { name: "Pernicious — United States", price: "$7", desc: "IPA" },
        { name: "Estrella Inedit Damm — Spain", price: "$7", desc: "Malt & wheat" },
        { name: "Juan Please", price: "$6", desc: "Iced tea lemonade tequila seltzer" }
      ]},
      { title: "Hookah", items: [
        { name: "Classic Hookah", price: "$60" },
        { name: "Fresh Fruit Hookah", price: "$70" },
        { name: "Refill", sub: "extra", price: "$50" },
        { name: "Disposable Pipe", sub: "extra", price: "$5" }
      ]}
    ]
  },

  /* ------------------------------------------------------- COCKTAILS */
  {
    id: "cocktails", label: "Cocktails", title: "Cocktails & Beer", pdf: "menus/beverage-menu.pdf", hero: "images/cocktails-hero.jpg",
    sections: [
      { title: "Crafted Cocktails", items: [
        { name: "Astra to the Moon", price: "$18", desc: "Grey Goose vodka, St-Germain, lemon juice, lychee, and butterfly pea syrup" },
        { name: "Berry Margarita", price: "$18", desc: "Casamigos Blanco tequila, fresh mixed berries, agave, and lime" },
        { name: "Astra Mule", price: "$18", desc: "E11EVEN vodka, muddled raspberries and mint, topped with ginger beer" },
        { name: "Lili-Koi Spice", price: "$18", desc: "Jalapeño chili-infused 400 Conejos mezcal and passion fruit" },
        { name: "Passion Rum", price: "$18", desc: "Santa Teresa rum, ginger liqueur, lemon juice, strawberry, passion fruit, and ginger ale" },
        { name: "Berry Mojito", price: "$16", desc: "Fresh berries infused with Bacardí 8 rum, mint, and a splash of soda water" },
        { name: "Espresso Martini", price: "$18", desc: "Absolut Vanilla vodka, Town Coffee espresso, and Luxardo espresso liqueur" },
        { name: "Astra Old Fashioned", price: "$19", desc: "Jefferson's whiskey, Carpano Antica, bitters, and Luxardo cherry liqueur" },
        { name: "Summer in Mykonos", price: "$18", desc: "Hendrick's gin, Kleos mastiha, lime, and Pathfinder liqueur" },
        { name: "Rosé Thalassa", price: "$19", desc: "Union mezcal, fresh lime juice, hibiscus tea, rosemary, and sal de gusano" },
        { name: "Feelin' Peachy", price: "$18", desc: "Sonrisa Platino, Juliette liqueur, peach purée, topped with Prosecco" },
        { name: "Santorini Sunset", price: "$21", desc: "Altos Reposado tequila, fresh lime juice, watermelon juice, and agave", img: "images/santorini-sunset.jpg", thumb: "images/santorini-sunset-thumb.jpg" },
        { name: "Rosé Sangria", price: "$16 / $49", desc: "Galea organic rosé sangria", featured: true }
      ]},
      { title: "Beers & Seltzers", items: [
        { name: "Stella Artois", sub: "Belgium", price: "$8", desc: "Lager" },
        { name: "Monopolio Clara", sub: "San Luis, Mexico", price: "$9", desc: "Lager" },
        { name: "Estrella Inedit Damm", sub: "Spain", price: "$10", desc: "Malt & wheat" },
        { name: "Pernicious", sub: "United States", price: "$10", desc: "IPA" },
        { name: "Casalú", price: "$8", desc: "Rum seltzer" },
        { name: "Juan Please", price: "$9", desc: "Iced tea lemonade tequila seltzer" }
      ]},
      { title: "Weekly Features", boxed: true, items: [
        { name: "Music Programming", desc: "Monday–Thursday 9PM–1AM · Friday 10PM–2AM · Saturday 7:30PM–2AM · Sunday 7PM–1AM. Live DJs every night!" },
        { name: "Happy Hour", desc: "Daily 5PM–8PM · Bar & Bar Deck only. Daily food & drink specials, including weekends!" },
        { name: "Monday · All Day Happy Hour" },
        { name: "Cheers on Tuesday · Wine Night", desc: "50% off select wine bottles. Inspired by our sunset evenings on the rooftop, enjoy half off select wine bottles every Tuesday." },
        { name: "Ladies' Night · Every Wednesday", desc: "8PM–12AM · Bar & Bar Deck only. Ladies enjoy complimentary cocktails." },
        { name: "Tequila Night · Thursday", desc: "$9 tequila cocktails" },
        { name: "Sundaze · Sunday Party", desc: "Join us this Sunday for a lively happy hour, 5PM to 8PM" },
        { name: "Private Events", desc: "Celebrate any occasion with us! Email events@ikhospitalitygroup.com or call 305-783-7226" }
      ]}
    ]
  },

  /* ------------------------------------------------------------ WINE */
  {
    id: "wine", label: "Wine", title: "Astra Wine List", pdf: "menus/beverage-menu.pdf",
    sections: [
      { title: "NV Champagne", note: "Bottle / Magnum", items: [
        { name: 'Ruinart "Blanc de Blanc"', sub: "Reims", price: "$225" },
        { name: "Krug", sub: "Grand Cuvée, Brut", price: "$300" },
        { name: "Veuve Clicquot Brut", sub: "Reims", price: "$225 / $395" },
        { name: "Moët & Chandon Brut", sub: "Épernay", price: "$145" },
        { name: 'Moët & Chandon "Ice"', sub: "Épernay", price: "$175" },
        { name: 'Ace of Spades "Prestige Cuvée"', price: "$675" },
        { name: "Perrier-Jouët", sub: "Brut", price: "$22 / $135" }
      ]},
      { title: "Sparkling", note: "Bottle", items: [
        { name: "Prosecco", sub: "Santa Maria, Veneto", price: "$14 / $58" }
      ]},
      { title: "Vintage Champagne", note: "Bottle / Magnum", items: [
        { name: 'Perrier-Jouët "Belle Époque"', sub: "Brut, 2014", price: "$495" },
        { name: "Dom Pérignon", sub: "Brut 2012", price: "$600 / $1,250" },
        { name: "Dom Pérignon", sub: "Rosé 2006", price: "$900 / $2,950" },
        { name: "Louis Roederer Cristal", sub: '"Vintage Cuvée" 2014', price: "$825" }
      ]},
      { title: "Champagne Rosé", note: "Bottle / Magnum", items: [
        { name: "Ruinart Rosé", sub: "Reims", price: "$275" },
        { name: "Veuve Clicquot Rosé Brut", sub: "Épernay", price: "$198" },
        { name: "Moët & Chandon Rosé", sub: '"Nectar Impérial", Épernay', price: "$175" },
        { name: "G.H. Mumm Grand Cordon Rosé", sub: "Brut", price: "$130" }
      ]},
      { title: "White Wines", note: "Greek Selection · Bottle", items: [
        { name: "Sauvignon Blanc", sub: "Alpha Estate, Amyndeon, Greece", price: "$66" },
        { name: "Sauvignon Blanc", sub: "Buketo, Macedonia, Greece", price: "$58" },
        { name: "Chardonnay", sub: "Marmarias, Tselepos, Greece", price: "$68" },
        { name: "Assyrtiko", sub: "Sigalas, Santorini, Greece", price: "$110" },
        { name: "Malagousia", sub: "Ktima Gerovassiliou, Macedonia", price: "$72" }
      ]},
      { title: "White Wines", note: "Rest of the World · Bottle", items: [
        { name: "Pinot Grigio", sub: "Gabbiano, Veneto, Italy", price: "$56" },
        { name: "Gavi dei Gavi", sub: "La Scolca White Label, Piemonte, Italy", price: "$15 / $70" },
        { name: "Sauvignon Blanc", sub: "Vincent Delaporte, Sancerre", price: "$110" },
        { name: "Sauvignon Blanc", sub: "Frenzy, Marlborough, New Zealand", price: "$15 / $70" },
        { name: "Sauvignon Blanc", sub: "Groth, Napa Valley, California", price: "$95" },
        { name: "Chardonnay", sub: "Domaine Vocoret & Fils, Chablis", price: "$160" },
        { name: "Chardonnay", sub: 'Olivier Leflaive "Les Sétilles", Burgundy', price: "$160" },
        { name: "Chardonnay", sub: "Frank Family, Carneros-Sonoma, California", price: "$16 / $68" },
        { name: "Chardonnay", sub: "Stag's Leap, Napa Valley, California", price: "$98" },
        { name: "Albariño", sub: "Abadia de San Campio, Galicia, Spain", price: "$56" }
      ]},
      { title: "Rosé Wines", note: "Bottle / Magnum", items: [
        { name: "Minuty", sub: "Côtes de Provence, France", price: "$120" },
        { name: "Miraval", sub: "Côtes de Provence, France", price: "$78 / $148" },
        { name: "Whispering Angel", sub: "Côtes de Provence, France", price: "$18 / $70" }
      ]},
      { title: "Red Wines", note: "Greek Selection · Bottle", items: [
        { name: "Agiorgitiko", sub: "Boutari, Nemea, Greece", price: "$70" },
        { name: "Xinomavro", sub: "Kir-Yianni Ramnista, Naousa, Greece", price: "$120" },
        { name: "Mavrotragano", sub: "Avaton Gerovassiliou, Macedonia, Greece", price: "$140" },
        { name: "Merlot", sub: "Kokkinomylos, Tselepos, Greece", price: "$110" }
      ]},
      { title: "Red Wines", note: "Rest of the World · Bottle", items: [
        { name: "Pinot Noir Ponzi", sub: "Willamette Valley, Oregon", price: "$100" },
        { name: "Pinot Noir Hahn", sub: "Monterey County, California", price: "$60" },
        { name: "Merlot Drumheller", sub: "Columbia Valley, Oregon", price: "$66" },
        { name: "Cabernet Sauvignon", sub: "Daou, Paso Robles, California", price: "$16 / $65" },
        { name: "Cabernet Sauvignon Opus One", sub: "Napa Valley, California", price: "$900" },
        { name: "Cabernet Sauvignon", sub: 'Stag\'s Leap "Artemis", Napa Valley, California', price: "$150" },
        { name: "Cabernet Sauvignon Caymus", sub: "Napa Valley, California", price: "$295" },
        { name: "Red Blend", sub: "Prisoner, Rutherford, California", price: "$118" },
        { name: "Amarone della Valpolicella Classico", sub: "Bertani, Veneto", price: "$220" },
        { name: 'Barolo, Marchesi Antinori "Prunotto"', sub: "Piemonte", price: "$148" },
        { name: "Super Tuscan Antinori", sub: '"Tignanello", Tuscany', price: "$450" },
        { name: "Super Tuscan Antinori", sub: '"Bruciato", Tuscany', price: "$98" },
        { name: "Brunello di Montalcino", sub: '"Pian delle Vigne", Tuscany', price: "$150" },
        { name: "Malbec", sub: "Kaipen, Mendoza, Argentina", price: "$58" }
      ]}
    ]
  },

  /* -------------------------------------------------------- DESSERTS */
  {
    id: "desserts", label: "Desserts", title: "Desserts", pdf: "menus/dessert-menu.pdf",
    sections: [
      { title: "Desserts", items: [
        { name: "Baklava", price: "$16", desc: "Layers of warm dessert: phyllo dough filled with pistachios & vanilla ice cream", img: "images/baklava.jpg", thumb: "images/baklava-thumb.jpg" },
        { name: "Classic Tiramisu", price: "$14", desc: "Espresso coffee tiramisu", img: "images/tiramisu.jpg", thumb: "images/tiramisu-thumb.jpg" },
        { name: "Crème Brûlée", price: "$14", desc: "Classic baked cream aromatized with Madagascar vanilla beans" },
        { name: "Greek Yogurt", price: "$14", desc: "Authentic Greek yogurt with Crete thyme honey" },
        { name: 'Chocolate "Lava" Cake', price: "$14", desc: "Served with vanilla ice cream", img: "images/lava-cake.jpg", thumb: "images/lava-cake-thumb.jpg" },
        { name: "Ice Cream", price: "$12", desc: "2 scoops: choice of vanilla, pistachio, or chocolate", featured: true }
      ]},
      { title: "After Dinner Drinks", items: [
        { name: "Carajillo", price: "$18", desc: "Licor 43, cold brew coffee, cane sugar" },
        { name: "Mastiha", price: "$18", desc: "Neat / rocks" },
        { name: "Midnight Gang", price: "$25", desc: "Pegasus vodka, Cafeto coffee liqueur, cold brew coffee, Fernet, vanilla" },
        { name: "Limoncello", price: "1 oz. $9 / 2 oz. $16", desc: "Neat / rocks" },
        { name: "Fernet Branca", price: "1 oz. $9 / 2 oz. $16", desc: "Neat / rocks" }
      ]}
    ]
  },

  /* ---------------------------------------------------------- HOOKAH */
  {
    id: "hookah", label: "Hookah", title: "Astra Hookah Menu", pdf: "menus/hookah-menu.pdf", columns: 1,
    sections: [
      { title: "Hookah", items: [
        { name: "Classic Hookah", price: "$100" },
        { name: "Premium Fresh Fruit Hookah", price: "$120" },
        { name: "Unlimited Hookah", price: "$180" }
      ]},
      { title: "Happy Hour", note: "Every day 5PM – 8PM", boxed: true, items: [
        { name: "Classic Hookah", price: "$60" },
        { name: "Fresh Fruit Hookah", price: "$70" }
      ]},
      { title: "Extras", items: [
        { name: "Refill", price: "$50" },
        { name: "Disposable Pipe", price: "$5" }
      ]},
      { title: "Choose Your Flavour", kind: "chips", footnote: "*More flavours available — ask your hookah specialist.", items: [
        "Double Apple", "Lemon Mint", "Love 66", "Mint", "Watermelon", "Blueberry", "Tropical Mix", "Hawaii", "Lady Killer"
      ]}
    ]
  },

  /* ---------------------------------------------------------- LIQUOR */
  {
    id: "liquor", label: "Liquor", title: "Liquor", subtitle: "Bottles", pdf: "menus/liquor-menu.pdf",
    sections: [
      { title: "Tequila", items: [
        { name: "José Cuervo Tradicional", price: "$300" },
        { name: "Don Julio Blanco", price: "$350" },
        { name: "Casamigos Blanco", price: "$375" },
        { name: "Don Julio Reposado", price: "$400" },
        { name: "Casamigos Reposado", price: "$450" },
        { name: "Don Julio 70", price: "$525" },
        { name: "Don Julio Rosado", price: "$500" },
        { name: "Clase Azul Reposado", price: "$700" },
        { name: "Don Julio 1942", price: "$750" },
        { name: "Clase Azul Añejo", price: "$900" },
        { name: "Don Julio 1942 Magnum", price: "$1,500" }
      ]},
      { title: "Vodka", items: [
        { name: "Absolut", price: "$300" },
        { name: "E11EVEN", price: "$325" },
        { name: "Tito's", price: "$350" },
        { name: "Ketel One", price: "$375" },
        { name: "Grey Goose", price: "$400" },
        { name: "Belvedere", price: "$450" },
        { name: "Amnesia", price: "$500" },
        { name: "Grey Goose Magnum", price: "$800" }
      ]},
      { title: "Whisky", items: [
        { name: "Johnnie Walker Black Label", price: "$400" },
        { name: "Buchanan's 12", price: "$450" },
        { name: "The Macallan 12", price: "$500" },
        { name: "Johnnie Walker Blue Label", price: "$850" },
        { name: "Buchanan's 18", price: "$700" },
        { name: "The Macallan 18", price: "$900" }
      ]},
      { title: "Rum / Gin", items: [
        { name: "Sonrisa Platino", price: "$300" },
        { name: "Bacardi 8", price: "$375" },
        { name: "Santa Teresa", price: "$400" },
        { name: "Zacapa 23", price: "$450" },
        { name: "Canaima", price: "$300" },
        { name: "Hendrick's", price: "$425" }
      ]},
      { title: "Champagne", items: [
        { name: "Perrier-Jouët Brut", price: "$300" },
        { name: "Veuve Clicquot", price: "$400" },
        { name: "Veuve Clicquot Magnum", price: "$750" },
        { name: "Moët Ice", price: "$350" },
        { name: "Moët Ice Rosé", price: "$400" },
        { name: "Moët Ice Magnum", price: "$700" },
        { name: "Moët Ice Magnum 3L", price: "$1,300" },
        { name: "Dom Pérignon Brut", price: "$550" },
        { name: "Dom Pérignon Rosé", price: "$950" },
        { name: "Dom Pérignon Magnum", price: "$1,200" },
        { name: "Dom Pérignon Rosé Magnum", price: "$2,000" },
        { name: "Cristal", price: "$850" },
        { name: "Ace of Spades", price: "$900" }
      ]}
    ]
  }
];
