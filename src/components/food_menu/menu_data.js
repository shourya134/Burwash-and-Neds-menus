class Breakast {
    constructor(eggs, eggs_specialty, sweet_breakfast, potato, protien, plant_based) {
        this.eggs = eggs;
        this.eggs_specialty = eggs_specialty;
        this.sweet_breakfast = sweet_breakfast;
        this.potato = potato;
        this.protien = protien;
        this.plant_based = plant_based;
    }
}

const monday_breakfast = new Breakast(
    ['Scrambled Eggs (VEG)(GF)',<br />, ' Soft-Boiled Eggs (VEG)(GF)']// eggs
    , ['Fried Eggs (VEG)(GF)'] //eggs_specialty
    , ['Pancakes (VEG)'] //sweet_breakfast
    , ['Plain home fries (VEG)(GF)'] //potato
    , ['Bacon (GF)',<br />,' Beef Sausage Patty (H)(GF)(DF)'] //protien
    , ['Roasted Sweet Potato,Black Beans, & Poblano (VEG)(GF)',<br />,' Spiced Tofu Scramble (GF)(VGN)'] //plant_based
)

const tuesday_breakfast = new Breakast(
    ['Scrambled Eggs (VEG)(GF)',<br />, ' Soft-Boiled Eggs (VEG)(GF)']//eggs
    , ['Mexican Omelette (VEG)(GF)'] //eggs_specialty
    , ['Belgian Waffels (VEG)']//sweet_breakfast
    , ['Potato Tots (VEG)(GF)'] //potato
    , ['Bacon (GF)',<br />,' Chicken Sausage Patty(H)']//protien
    , ['Baked Beans (VEG)(GF)',<br />,' Spiced Tofu Scramble (GF)(VGN)'] //plant_based
)

const wednesday_breakfast = new Breakast(
    ['Scrambled Eggs (VEG)(GF)',<br />, 'Soft-Boiled Eggs (VEG)(GF)']//eggs
    , ['Fried Eggs (VEG)(GF)'] //eggs_specialty
    , ['Pancakes (VEG)']//sweet_breakfast
    , ['Potato cakes (VEG)(GF)'] //potato
    , ['Bacon (GF)',<br />,' Beef Sausage Patty (H)(GF)(DF)']//protien
    , ['Beyond Meat Sausage (VEG)(GF)',<br />,' Spiced Tofu Scramble (GF)(VGN)'] //plant_based
)

const thursday_breakfast = new Breakast(
    ['Scrambled Eggs (VEG)(GF)',<br />, 'Soft-Boiled Eggs (VEG)(GF)']//eggs
    , ['Eggs Benedict (VEG)(GF)'] //eggs_specialty
    , ['Belgian Waffels (VEG)']//sweet_breakfast
    , ['Sweet Potato Tots (VEG)(GF)'] //potato
    , ['Bacon (GF)',<br />,'Chicken Sausage Patty(H)']//protien
    , ['Roasted Sweet Potato,Black Beans, & Poblano (VEG)(GF)',<br />,'Spiced Tofu Scramble (GF)(VGN)'] //plant_based
)

const friday_breakfast = new Breakast(
    ['Scrambled Eggs (VEG)(GF)',<br />, 'Soft-Boiled Eggs (VEG)(GF)']//eggs
    , ['Fried Eggs (VEG)(GF)'] //eggs_specialty
    , ['Pancakes (VEG)']//sweet_breakfast
    , ['Plain Home Fries (VEG)(GF)'] //potato
    , ['Bacon (GF)',<br />,'Beef Sausage Patty (H)(GF)(DF)']//protien
    , ['Baked Beans (VEG)(GF)',<br />,'Spiced Tofu Scramble (GF)(VGN)'] //plant_based
)

const saturday_breakfast = new Breakast(
    ['Scrambled Eggs (VEG)(GF)',<br />, 'Soft-Boiled Eggs (VEG)(GF)']//eggs
    , -1 //eggs_specialty
    , ['Waffle Bar']//sweet_breakfast
    , ['Potato Tots (VEG)(GF)'] //potato
    , ['Bacon (GF)',<br />,'Chicken Sausage Patty (H)']//protien
    , ['Beyond Meat Sausage (VEG)(GF)',<br />,'Spiced Tofu Scramble (GF)(VGN)'] //plant_based
)

const sunday_breakfast = new Breakast(
    ['Scrambled Eggs (VEG)(GF)',<br />, 'Soft-Boiled Eggs (VEG)(GF)']//eggs
    , -1 //eggs_specialty
    , ['Waffle Bar']//sweet_breakfast
    , ['Potato Cakes (VEG)(GF)'] //potato
    , ['Bacon (GF)',<br />,'Beef Sausage Patty (H)(GF)(DF)']//protien
    , ['Beyond Meat Sausage (VEG)(GF)',<br />,'Spiced Tofu Scramble(GF)(VGN)'] //plant_based
)

const breakfast_menus = [monday_breakfast,tuesday_breakfast,wednesday_breakfast,thursday_breakfast,friday_breakfast,saturday_breakfast,sunday_breakfast];
//export {breakfast_menus};
//--------------------------------------------------------------------------------------------------------------------------//

class lunch{
    constructor(entree, veg_entree, sides){
        this.entree = entree;
        this.veg_entree = veg_entree;
        this.sides = sides;
    }
}

class dinner{
    constructor(entree, veg_entree, sides){
        this.entree = entree;
        this.veg_entree = veg_entree;
        this.sides = sides;
    }
}

class dinner_and_lunch{
    constructor(gluten_free, soup, food_bar){
        this.gluten_free = gluten_free;
        this.soup = soup;
        this.food_bar = food_bar;
    }
}

// ----------------------------------------------------------- week1 -----------------------------------------------------//
const w1_monday_lunch = new lunch(
    ['Pesto Chicken (H)(GF)(DF)']// entree
    ,['Pesto Plant-Based Strips (GF)(VGN)'] //veg_entree
    ,['Mushroom Tetrazzini Bake (VEG)',<br />,'Roasted Vegetable Medley (GF)(VGN)',<br />,'Garlic Bread (VGN)']//sides
)

const w1_tuesday_lunch = new lunch(
    ['Sweet Italian Sausage/Buns (H)(DF)']// entree
    ,['Sausage/Buns (VGN)']//veg_entree
    ,['Skin-On French Fries (GF)(VGN) ',<br />,'Sauteed Onions & Peppers (GF)(VGN)',<br />,'Roasted Broccoli & Carrots (GF)(VGN)']//sides
)

const w1_wednesday_lunch = new lunch(
    ['Greek Style Grilled Chicken (H)(GF)(DF)']// entree
    ,['Falafel (GF)(VGN)']//veg_entree
    ,['Greek Lemon Rice (GF)(VGN) ',<br />,'Chunky Vegetable Souvlaki No stick (GF)(VGN)',<br />,'Greek Pita/Tzatziki (VEG)']//sides
)

const w1_thursday_lunch = new lunch(
    ['Lasagna in Marinara Sauce (H)']// entree
    ,['Spinach/Cheese Lasagna(VGN)',<br />, 'Bake Pasta with Tempeh (VGN)']//veg_entree
    ,['Fresh Mix Vegetable (GF)(VGN) ',<br />,'Marinara Sauce (GF)(VGN)',<br />,'Garlic Bread (VGN)']//sides
)

const w1_friday_lunch = new lunch(
    ['Cedar Spiced Atlantic Salmon on Wilted Greens (H)(GF)(DF) ']// entree
    ,['Vegetable Beans Cacciatore (GF)(VGN)']//veg_entree
    ,['Wild Rice Pilaf (GF)(VGN) ',<br />,'Crispy Brussel Sprouts with Tzatziki Sauce (VGN)',<br />,'Winter Vegetable Mix (GF)(VGN)']//sides
)

const w1_saturday_lunch = new lunch(
    ['Szechuan Chicken Stir-Fry (H)(GF)(DF) ']// entree
    ,['Szechuan Tofu Stir-Fry  (GF)(VGN)']//veg_entree
    ,['Vegetable Chow Mein (VGN) ',<br />,'Spring Rolls (VGN)',<br />,'Asian Vegetable Medley (GF)(VGN)']//sides
)

const w1_sunday_lunch = new lunch(
    ['Meatballs in Marinara (H)(DF)']// entree
    ,['Plant Based balls in Marinara (VGN)']//veg_entree
    ,['Rigatoni Pasta (VGN) ',<br />,'Italian Blend (GF)(VGN)',<br />,'Garlic Bread (VGN)']//sides
)

const w1_lunch = [w1_monday_lunch, w1_tuesday_lunch, w1_wednesday_lunch, w1_thursday_lunch, w1_friday_lunch, w1_saturday_lunch, w1_sunday_lunch];
//-------------------------------------------------------------------------------------------------------------------------------
const w1_monday_dinner = new dinner(
    ['Asian BBQ Beef Brisket (H)(GF)(DF)']// entree
    ,['Thai Sweet Chili Tofu and Vegetable Stir-Fry (GF)(VGN)']//veg_entree
    ,['Vegetable Rice vermicelli (GF)(VGN)',<br />,'Garlic Sautéed Gai Lan Vegetable Mix (GF)(VGN)',<br />,'Vegetable Spring Rolls (VGN)']//sides
)

const w1_tuesday_dinner = new dinner(
    ['Peruvian Chicken in Green Sauce (H)(GF)(DF)']// entree
    ,['Peruvian Grilled Tofu/ Lima Bean in Green Sauce (GF)(VGN)']//veg_entree
    ,['Cilantro Chaufa Rice (GF)(VGN)',<br />,'Green Beans with Red Onions and Tomatoes (GF)(VGN)',<br />,'Battered Yam (GF)(VGN)']//sides
)

const w1_wednesday_dinner = new dinner(
    ['Beef Fajita (H)(GF)(DF)']// entree
    ,['Ground Soy, Bean Fajita with Bell Pepper (GF)(VGN)']//veg_entree
    ,['Spanish Rice with Corn (GF)(VGN)',<br />,'Warm Flour Tortilla (VEG)',<br />,'California Roast Vegetable (GF)(VGN)']//sides
)

const w1_thursday_dinner = new dinner(
    ['Chicken Fingers Fried (H)']// entree
    ,['NotCo Plant-Based Fingers (VGN)']//veg_entree
    ,['Mac and Cheese (VEG)',<br />,'Daya Cheese Macaroni (GF)(VGN)',<br />,'Maple Glazed Carrot & French Beans (GF)(VGN)',<br />,'Vinegar Coleslaw (GF)(VGN)']//sides
)

const w1_friday_dinner = new dinner(
    ['Beef Tajine (H)(GF)(DF)']// entree
    ,['Root Vegetable and Chickpea Tajine (GF)(VGN)']//veg_entree
    ,['Indian Style Saffron Rice (GF)(VGN)',<br />,'Sabzi Indian Mixed Vegetable (GF)(VGN)',<br />,'Naan Bread  (GF)(VGN)']//sides
)

const w1_saturday_dinner = new dinner(
    ['Breaded Veal Cutlets on a Bun Creole Sauce  (H)(DF)']// entree
    ,['Malibu Garden burger Veggie Creole Sauce on a Bun (VGN)']//veg_entree
    ,['Herb Red Skin Potato Wedges (GF)(VGN)',<br />,'Sautéed Zucchini (GF)(VGN)',<br />,'Kale Crunch Slaw (GF)(VGN)']//sides
)

const w1_sunday_dinner = new dinner(
    ['BBQ Quarter Chicken - Dark / White (H)(GF)(DF)']// entree
    ,['Impossible Nuggets with BBQ sauce on the side (VGN)']//veg_entree
    ,['Roasted Butternut Squash and Root Vegetable Blend (GF)(VGN)',<br />,'Mashed Potato (GF)(VGN)',<br />,'Creamy Coleslaw (GF)(VGN)']//sides
)

const w1_dinner = [w1_monday_dinner,w1_tuesday_dinner,w1_wednesday_dinner, w1_thursday_dinner, w1_friday_dinner, w1_saturday_dinner, w1_sunday_dinner];
//-------------------------------------------------------------------------------------------------------------------------------------------------

const w1_monday_common_items = new dinner_and_lunch(
    ['Baked Potato Bar',<br />, 'Roasted Mushrooms/Onion & Peppers/Bacon']//gluten_free
    ,['Harvest Tomato Vegetable (VGN)',<br />,'Turkey Noodle (H)(DF)']//Soup
    ,['Panini',<br />,'Buffalo Chicken','Grilled BLT','Crispy Tofu','Grilled Cheese']//foodbar
)

const w1_tuesday_common_items = new dinner_and_lunch(
    ['Nacho Bar',<br />, 'Meat/Three Bean Chili']//gluten_free
    ,['Broccoli & Cheddar (VGN)',<br />,'Hearty Chicken Crockpot (GF)(DF)']//Soup
    ,['Pizza',<br />,'Pepperoni (H), ','BBQ Chicken, ','Garden Veggie ']//foodbar
)

const w1_wednesday_common_items = new dinner_and_lunch(
    ['Gluten-Free Pasta Bar',<br />, 'Meat/Arabiata Sauce/Toasted Chickpeas']//gluten_free
    ,['Lentil Spinach (GF)(VGN)',<br />,'Woodland Mushroom (GF)(VEG)']//Soup
    ,['Quesadilla',<br />,'Marinated Chicken Strips','Roasted Vegetable','Roasted Corn, Black Beans','Monterey Jack Cheese']//foodbar
)

const w1_thursday_common_items = new dinner_and_lunch(
    ['Poutine Bar',<br />, 'Meat/Arabiata Sauce/Toasted Chickpeas']//gluten_free
    ,['Spanish and Kale (GF)(VGN)',<br />,'Chicken Tortilla Soup (H)(GF)(DF)']//Soup
    ,['Pizza',<br />,'Hawaiian/Ham','Greek Chicken','Pesto Mushroom','Cheese Pizza ']//foodbar
)

const w1_friday_common_items = new dinner_and_lunch(
    ['Soba Noodle Bowl',<br />, 'Chicken/Tofu Teriyaki']//gluten_free
    ,['Cream Of Roasted Squash  (GF)(VGN)',<br />,'New England Clam Chowder (H)(GF)']//Soup
    ,['Panini',<br />,'Tuna Melt','Philly Beef','Plant Based Philly','Grilled Cheese']//foodbar
)

const w1_saturday_common_items = new dinner_and_lunch(
    ['Indian Basmati Rice Bowl',<br />, 'Chicken/ Chickpea Curry']//gluten_free
    ,['Hot and Sour with Tofu (GF)(VGN)',<br />,'Spicy Thai Chicken (H)(GF)(DF)']//Soup
    ,['Pizza',<br />,'Pepperoni - Halal','Jerk Chicken','Garden Veggie','Cheese Pizza']//foodbar
)

const w1_sunday_common_items = new dinner_and_lunch(
    ['Wild Rice Burrito Bowl',<br />, 'Shrimp/Brown lentils ']//gluten_free
    ,['Moroccan Chickpea (GF)(VGN)',<br />,'Herb Chicken Rice (H)(GF)(DF)']//Soup
    ,['Pizza',<br />,'Pepperoni - Halal','Tuscan Chicken','Garden Veggie','Cheese Pizza']//foodbar
)

const w1_common_items = [w1_monday_common_items, w1_tuesday_common_items, w1_wednesday_common_items, w1_thursday_common_items, w1_friday_common_items, w1_saturday_common_items, w1_sunday_common_items ];

//--------------------------------------------------------week 2------------------------------------------------------

const w2_monday_lunch = new lunch(
    ['Butter Chicken (H)(GF)']// entree
    ,['Paneer Tikka Masala (GF)(VEG)'] //veg_entree
    ,['Basmati Rice (GF)(VGN)',<br />,'Naan Bread/Raita (VEG)',<br />,'Steamed Vegetable Mix (GF)(VGN)',<br />,'Vegetable Samosas (VGN)']//sides
)

const w2_tuesday_lunch = new lunch(
    ['Cheesy Beef Penne Pasta (H)']// entree
    ,['Cheesy Vegetarian Strips Penne Pasta (GF)(VEG)']//veg_entree
    ,['Fried Pickle (VEG) ',<br />,'Sautéed Green & Yellow Beans (GF)(VGN)',<br />,'Garlic Butter Roll (GF)(VGN)']//sides
)

const w2_wednesday_lunch = new lunch(
    ['Skewer less Chicken & Vegetable Souvlaki (H)(GF)(DF)']// entree
    ,['Skewer less Tofu Vegetable Souvlaki  (GF)(VGN)']//veg_entree
    ,['Yahni Potatoes (GF)(VGN) ',<br />,'Garlic Sauteed Rapini (GF)(VGN)',<br />,'Spanakopita/Tzatziki (VEG)']//sides
)

const w2_thursday_lunch = new lunch(
    ['BBQ Beef Burgers/Buns Bacon Jam (H)(GF)(DF)']// entree
    ,['Impossible Burger/Buns Onion Jam (GF)(VGN)']//veg_entree
    ,['Sautéed Yellow and Green Zucchini with Tomatoes (GF)(VGN) ',<br />,'French Fries (GF)(VGN)',<br />,'Poutine with Gravy (VGN)']//sides
)

const w2_friday_lunch = new lunch(
    ['Fish Taco Shell (H)(DF) ']// entree
    ,['Crispy Tofu Baton Taco Shell (GF)(VGN)']//veg_entree
    ,['Spicey Mexican Rice N peas (GF)(VGN) ',<br />,'Sauteed Sugar Snap Peas and Baby Corn (GF)(VGN)',<br />,'Cole Slaw (GF)(VGN)']//sides
)

const w2_saturday_lunch = new lunch(
    ['Sweet & Sour Chicken balls (H)']// entree
    ,['Sweet & Sour Vegan balls (VGN)']//veg_entree
    ,['Vegetable Fried Rice (GF)(VGN) ',<br />,'Spring Rolls (VGN)',<br />,'Asian Vegetable Medley (GF)(VGN)']//sides
)

const w2_sunday_lunch = new lunch(
    ['Beef Sausage in Basil Tomato (H)(DF)']// entree
    ,['Romano Bean Primavera (GF)(VGN)']//veg_entree
    ,['Rigatoni Pasta (VGN) ',<br />,'Italian Blend (GF)(VGN)',<br />,'Garlic Bread (VGN)']//sides
)

const w2_lunch = [w2_monday_lunch, w2_tuesday_lunch, w2_wednesday_lunch, w2_thursday_lunch, w2_friday_lunch, w2_saturday_lunch, w2_sunday_lunch];
//-------------------------------------------------------------------------------------------------------------------------------

const w2_monday_dinner = new dinner(
    ['Korean BBQ Bulgogi Beef (H)(GF)(DF)']// entree
    ,['Korean Spicy BBQ Tofu Steak and Broccoli (GF)(VGN)']//veg_entree
    ,['Fluffy Rice (GF)(VGN)',<br />,'Sautéed Bok Choy and Asian vegetable (GF)(VGN)',<br />,'Mushroom Dumpling (VEG)']//sides
)

const w2_tuesday_dinner = new dinner(
    ['Chicken A la King (H)(GF)']// entree
    ,['Shepherd’s Pie with Plant Based Gravy (GF)(VGN)']//veg_entree
    ,['Onion Rice Pilaf (GF)(VGN)',<br />,'Roasted Heirloom Carrot & Peppers (GF)(VGN)',<br />,'Vol Au Vent Pastry Puffs (VEG)']//sides
)

const w2_wednesday_dinner = new dinner(
    ['BBQ Pork Ribs (GF)(DF)']// entree
    ,['Spicy BBQ Grilled Tofu (GF)(VGN)']//veg_entree
    ,['Bake Mini Potato (GF)(VGN)',<br />,'Creamy Coleslaw (GF)(VGN)',<br />,'Garlic Parmesan Brussel Sprouts (GF)(VGN)']//sides
)

const w2_thursday_dinner = new dinner(
    ['Jerk Chicken Legs (H)(GF)(DF)']// entree
    ,['Jamaican Vegetable and Chickpea Curry (GF)(VGN)']//veg_entree
    ,['Rice and Red Kidney Bean (GF)(VGN)',<br />,'Roasted Okra and Tomato Medley (GF)(VGN)',<br />,'Aloo Tikki (VEG)']//sides
)

const w2_friday_dinner = new dinner(
    ['Beef Easy Enchilada (H)']// entree
    ,['Ground Soy, Bean Easy Enchilada (VEG)']//veg_entree
    ,['Mexican Rice with Corn (GF)(VGN)',<br />,'California Roast vegetable Mix (GF)(VGN)',<br />,'Jalapeno Poppers (VEG)']//sides
)

const w2_saturday_dinner = new dinner(
    ['Glazed Pork Char Siu (GF)(DF)']// entree
    ,['Tofu and Mushroom Satay (GF)(VGN)']//veg_entree
    ,['Honey Garlic String Beans and Root Vegetable Blend (GF)(VGN)',<br />,'Jasmine Rice (GF)(VGN)',<br />,'Tempura Vegetable (VGN)']//sides
)

const w2_sunday_dinner = new dinner(
    ['Chicken Vindaloo (H)(GF)(DF)']// entree
    ,['Mattar Paneer Curry (GF)(VEG)',<br />, 'Chana Masala (GF)(VGN)']//veg_entree
    ,['Cumin Basmati Rice (GF)(VGN)',<br />,'Roasted Button Mushroom, Bell Peppers & Cauliflower (GF)(VGN)',<br />,'Mini Vegetable Samosa (VGN)']//sides
)
const w2_dinner = [w2_monday_dinner,w2_tuesday_dinner,w2_wednesday_dinner, w2_thursday_dinner, w2_friday_dinner, w2_saturday_dinner, w2_sunday_dinner];
// -------------------------------------------------------------------------------------------------------------------------------

const w2_monday_common_items = new dinner_and_lunch(
    ['Tater Tot Bar',<br />, 'Spicy Vegan Strips/Pulled Pork']//gluten_free
    ,['Mexican Bean (GF)(VGN)',<br />,'Lemon Turkey Orzo (H)(DF)']//Soup
    ,['Panini',<br />,'Buffalo Chicken','Grilled BLT','Crispy Tofu','Grilled Cheese']//foodbar
)

const w2_tuesday_common_items = new dinner_and_lunch(
    ['Taco Bar ',<br />, 'Meat/Vegan Stuffing']//gluten_free
    ,['Lentil Dahl (GF)(VGN)',<br />,'Italian Wedding (H)(DF)']//Soup
    ,['Pizza',<br />,'Pepperoni – Halal','BBQ Chicken','Garden Veggie','Cheese Pizza']//foodbar
)

const w2_wednesday_common_items = new dinner_and_lunch(
    ['Dips and Chips Tapas',<br />, 'Hummaus, Babaganoush, Tzatzki , Pickled Vegetables']//gluten_free
    ,['Roasted Curry Cauliflower (GF)(VGN)',<br />,'Tom Yum Chicken (H)(GF)(DF)']//Soup
    ,['Quesadilla',<br />,'Marinated Chicken Strips','Roasted Vegetable','Roasted Corn, Black Beans','Monterey Jack Cheese']//foodbar
)

const w2_thursday_common_items = new dinner_and_lunch(
    ['Rice Vermicelli Bar',<br />, 'Tofu Strips/Edamame/Ginger Soy Pork']//gluten_free
    ,['Miso-Mushroom (GF)(VGN)',<br />,'Chicken Mulligatawny (H)(DF)']//Soup
    ,['Pizza',<br />,'Hawaiian/Ham','Greek Chicken','Pesto Mushroom','Cheese Pizza ']//foodbar
)

const w2_friday_common_items = new dinner_and_lunch(
    ['Quinoa Bowl',<br />, 'Chimichurri Chicken/Tempeh']//gluten_free
    ,['Tomato Roasted Pepper (GF)(VGN)',<br />,'Seafood Creole (H)(GF)']//Soup
    ,['Panini',<br />,'Tuna Melt','Philly Beef','Plant Based Philly','Grilled Cheese']//foodbar
)

const w2_saturday_common_items = new dinner_and_lunch(
    ['GF Pasta Bar',<br />, 'Meat /Arabiata Sauce/Beans']//gluten_free
    ,['Moroccan Chickpea (GF)(VGN)',<br />,'Spicy Thai Chicken (H)(GF)(DF)']//Soup
    ,['Pizza',<br />,'Pepperoni - Halal','Jerk Chicken','Garden Veggie','Cheese Pizza']//foodbar
)

const w2_sunday_common_items = new dinner_and_lunch(
    ['Baked Potato Bar',<br />, 'Mushrooms/Bacon']//gluten_free
    ,['Hot and Sour with Tofu (GF)(VGN)',<br />,'Beef & Red Bean (H)(GF)(DF)']//Soup
    ,['Pizza',<br />,'Pepperoni - Halal','Tuscan Chicken','Garden Veggie','Cheese Pizza']//foodbar
)

const w2_common_items = [w2_monday_common_items, w2_tuesday_common_items, w2_wednesday_common_items, w2_thursday_common_items, w2_friday_common_items, w2_saturday_common_items, w2_sunday_common_items ];

// -----------------------------------------------week3-----------------------------------------------------------------------------

const w3_monday_lunch = new lunch(
    ['Creamy Chicken/Spinach with Parmesan Sauce (H)(GF)']// entree
    ,['Creamy Cauliflower and Chickpea with Parmesan Sauce (GF)(VEG)'] //veg_entree
    ,['Onion Rice Pilaf (GF)(VGN)',<br />,'Balsamic Roast Tomatoes (VEG)',<br />,'Garlic Sautéed Purple and Green Kale (GF)(VGN)',<br />,'Vegetable Samosas (VGN)']//sides
)

const w3_tuesday_lunch = new lunch(
    ['Texas Style Pulled Pork/ Bao Bun (H)(GF)(DF)']// entree
    ,['Spicy Pull Cauliflower & Jackfruit/ Bao Bun (GF)(VEG)']//veg_entree
    ,['Southwest Fried Rice (GF)(VGN)',<br />,'Sautéed Corn Succotash (GF)(VGN)',<br />,'Vegetable Spring Rolls  (VGN)']//sides
)

const w3_wednesday_lunch = new lunch(
    ['Southern Fried Chicken/ White Gravy (H)']// entree
    ,['Portobello Stuffed with Spinach and Havarti (GF)(VEG)']//veg_entree
    ,['Red Skin Potato Wedges (GF)(VGN) ',<br />,'Corn on the Cob (GF)(VGN)',<br />,'Kale Slaw (GF)(VGN)']//sides
)

const w3_thursday_lunch = new lunch(
    ['Korean Beef Stir Fry (H)(GF)']// entree
    ,['Gochujang Tofu Stir Fry (GF)(VGN)']//veg_entree
    ,['Jasmine Rice (GF)(VGN) ',<br />,'Stir-Fried Choy Sum Vegetable and Broccoli  (GF)(VGN)',<br />,'Pot Sticker (VGN)']//sides
)

const w3_friday_lunch = new lunch(
    ['Homemade Tempura Haddock Fish (H)(DF) ']// entree
    ,['Mediterranean Chickpeas Button Mushroom Pasta Bake (VEG)']//veg_entree
    ,['French Fries (GF)(VGN) ',<br />,'Steamed Broccoli, Carrots, Cauliflower and Green Peas (GF)(VGN)',<br />,'ColeSlaw (GF)(VGN)']//sides
)

const w3_saturday_lunch = new lunch(
    ['Lemongrass Chicken (H)(GF)(DF)']// entree
    ,['Lemongrass Tofu (GF)(VGN)']//veg_entree
    ,['Steamed Lo-mein (VGN) ',<br />,'Spring Rolls (VGN)',<br />,'Asian Vegetable Medley (GF)(VGN)']//sides
)

const w3_sunday_lunch = new lunch(
    ['Beef Tips with Marinara (H)(GF)(DF)']// entree
    ,['Edamame Primavera (GF)(VGN)']//veg_entree
    ,['Rigatoni Pasta (VGN) ',<br />,'Italian Blend (GF)(VGN)',<br />,'Garlic Bread (VGN)']//sides
)

const w3_lunch = [w3_monday_lunch, w3_tuesday_lunch, w3_wednesday_lunch, w3_thursday_lunch, w3_friday_lunch, w3_saturday_lunch, w3_sunday_lunch];
//-------------------------------------------------------------------------------------------------------------------------------

const w3_monday_dinner = new dinner(
    ['Hungarian Goulash (H)(GF)(DF)']// entree
    ,['Vegetable Goulash (GF)(VGN)']//veg_entree
    ,['Herb Egg Noodles (VGN)',<br />,'Sautéed Green & Yellow Beans (GF)(VGN)',<br />,'Fried Pickle (VEG)']//sides
)

const w3_tuesday_dinner = new dinner(
    ['Roasted Turkey/ Gravy (H)(GF)(DF)']// entree
    ,['Spinach & Cheese Cannelloni/Marinara Sauce (VEG)']//veg_entree
    ,['Garlic Mashed Potato (GF)(VGN)',<br />,'Sautéed Seasonal Vegetables (GF)(VGN)',<br />,'Cranberry Stuffing (GF)(VGN)']//sides
)

const w3_wednesday_dinner = new dinner(
    ['Salmon Steaks with Orange Ginger Sauce (H)(GF)(DF)']// entree
    ,['Vegetable Orange Ginger Tofu (GF)(VGN)']//veg_entree
    ,['Vegetable Fried Rice (GF)(VGN)',<br />,'Yellow & Green Beans Sauté (GF)(VGN)',<br />,'Vegetable Egg Roll (VEG)']//sides
)

const w3_thursday_dinner = new dinner(
    ['Dry Rub Chicken Wings (H)(GF)(DF)']// entree
    ,['Beyond Burger and Buns (GF)(VGN)']//veg_entree
    ,['Mac ‘n’ Cheese (VEG)',<br />,'Garlic Sautéed Yellow and Green Zucchini and Tomatoes (GF)(VGN)',<br />,'Assortment of Sauces']//sides
)

const w3_friday_dinner = new dinner(
    ['Beef Tips with Mushroom Gravy (H)(GF)(DF)']// entree
    ,['Plant Based Sausage Mushroom Gravy (GF)(VGN)']//veg_entree
    ,['Sauteed Perogies (VEG)',<br />,'Stir fried Red &Green Cabbage (GF)(VGN)',<br />,'Breaded Spear Dill (VEG)']//sides
)

const w3_saturday_dinner = new dinner(
    ['Maple Balsamic Glaze Grilled Baked Pork Chop (GF)(DF)']// entree
    ,['Maple Balsamic Glaze Impossible Meatless Patty (GF)(VGN)']//veg_entree
    ,['Scalloped Potatoes (GF)(VEG)',<br />,'Roasted Heirloom Carrots and Green Beans (GF)(VGN) (DF)',<br />,'Battered Onion Rings (VGN)']//sides
)

const w3_sunday_dinner = new dinner(
    ['Brazilian BBQ Chicken (H)(GF)(DF)']// entree
    ,['Brazilian Roasted Vegetable Feijoada (GF)(VGN)']//veg_entree
    ,['Cilantro Rice (GF)(VGN)',<br />,'Sauteed Garlic Collard Greens (GF)(VGN)',<br />,'Brazilian Fried Pastel Eggroll (VEG)']//sides
)
const w3_dinner = [w3_monday_dinner, w3_tuesday_dinner, w3_wednesday_dinner, w3_thursday_dinner, w3_friday_dinner, w3_saturday_dinner, w3_sunday_dinner];
// -------------------------------------------------------------------------------------------------------------------------------

const w3_monday_common_items = new dinner_and_lunch(
    ['Nacho Bar ',<br />, 'Five Bean Chili/Meat']//gluten_free
    ,['Split Pea and Roasted Pepper (GF)(VGN)',<br />,'Roasted Corn Chowder (GF)(VEG)']//Soup
    ,['Panini',<br />,'Buffalo Chicken','Grilled BLT','Crispy Tofu','Grilled Cheese']//foodbar
)

const w3_tuesday_common_items = new dinner_and_lunch(
    ['Shawarma Bar',<br />, 'Falafel with Flatbread/Chicken Shawarma']//gluten_free
    ,['Navy Bean & Garden Vegetable (GF)(VGN)',<br />,'Chicken Noodle (H)(DF)']//Soup
    ,['Pizza',<br />,'Pepperoni – Halal','BBQ Chicken','Garden Veggie','Cheese Pizza']//foodbar
)

const w3_wednesday_common_items = new dinner_and_lunch(
    ['Pasta Bar',<br />, 'Arabiata Sauce/Meat']//gluten_free
    ,['Wild Mushroom (GF)(VGN)',<br />,'Hearty Beef vegetable (H)(GF)(DF)']//Soup
    ,['Quesadilla',<br />,'Marinated Chicken Strips','Roasted Vegetable','Roasted Corn, Black Beans','Monterey Jack Cheese']//foodbar
)

const w3_thursday_common_items = new dinner_and_lunch(
    ['Poke Bowl',<br />, 'Edamame/Shrimp Ceviche']//gluten_free
    ,['Brown Lentil & Spinach (GF)(VGN)',<br />,'Tom Yum Chicken (H)(GF)(DF)']//Soup
    ,['Pizza',<br />,'Hawaiian/Ham','Greek Chicken','Pesto Mushroom','Cheese Pizza ']//foodbar
)

const w3_friday_common_items = new dinner_and_lunch(
    ['Greek Pasta Salad',<br />, 'Plant Based Strips/Chicken']//gluten_free
    ,['Spicy Black Bean (GF)(VGN)',<br />,'Potato Leek (GF)(VEG)']//Soup
    ,['Panini',<br />,'Tuna Melt','Philly Beef','Plant Based Philly','Grilled Cheese']//foodbar
)

const w3_saturday_common_items = new dinner_and_lunch(
    ['Indian Basmati Rice Bowl',<br />, 'Vegan/Beef Curry']//gluten_free
    ,['Moroccan Chickpea (GF)(VGN)',<br />,'Beef Barley Vegetable (H)(DF)']//Soup
    ,['Pizza',<br />,'Pepperoni - Halal','Jerk Chicken','Garden Veggie','Cheese Pizza']//foodbar
)

const w3_sunday_common_items = new dinner_and_lunch(
    ['Rice Vermicelli Bowl',<br />, 'Thai Tofu / Shrimp Curry']//gluten_free
    ,['Hot and Sour with Tofu (GF)(VGN)',<br />,'Chicken Orzo (H)(DF)']//Soup
    ,['Pizza',<br />,'Pepperoni - Halal','Tuscan Chicken','Garden Veggie','Cheese Pizza']//foodbar
)

const w3_common_items = [w3_monday_common_items, w3_tuesday_common_items, w3_wednesday_common_items, w3_thursday_common_items, w3_friday_common_items, w3_saturday_common_items, w3_sunday_common_items ];
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const week_1 = [breakfast_menus, w1_lunch, w1_dinner, w1_common_items];
const week_2 = [breakfast_menus, w2_lunch, w2_dinner, w2_common_items];
const week_3 = [breakfast_menus, w3_lunch, w3_dinner, w3_common_items];
const weeks = [week_1, week_2, week_3];

export{weeks};