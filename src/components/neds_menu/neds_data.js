class Breakast {
    constructor(all_day,breakfast_sandwich, soup, deli_sandwich, salad, ) {
        this.all_day = all_day;
        this.breakfast_sandwich = breakfast_sandwich;
        this.soup = soup;
        this.deli_sandwich = deli_sandwich;
        this.salad = salad;
    }
}
class lunch_and_dinner{
    constructor(all_day,entree,veg_entree,side,hot_sandwich,hot_veg_sandwich){
        this.all_day = all_day;
        this.entree = entree;
        this.veg_entree = veg_entree;
        this.side = side;
        this.hot_sandwich = hot_sandwich;
        this.hot_veg_sandwich = hot_veg_sandwich;

    }
}

//------------------------------------------------------------week1--------------------------------------------------------------------
//breakfast-------------------------------------

const w1_monday_breakfast = new Breakast(
    ['Pastries',<br/>, 'Hot & ColdBeverages',<br/>, ' Yogurt, Milk',<br/>, ' Whole Fruits',<br/>, ' Snacks and Desserts']//all_day
    ,['Egg and Cheese on Bagel or English Muffin',<br/>,'Toasted Bagel with Cream Cheese']//breakfast_sandwich
    ,['Harvest Vegetable Barley (VGN)',<br/>,'Turkey Noodle (H) (DF)']//soup
    ,['Classic Egg Salad (VEG) / Hummus and Roast Vegetables (VGN) / Tuna Salad / Roast Turkey and Cheddar Cheese (H)']//deli_sandwich
    ,['Garden Salad / Crudités / Salad Bowl with Meat or Vegetable Protein']//salad
)

const w1_tuesday_breakfast = new Breakast(
    ['Pastries, Hot & ColdBeverages, Yogurt, Milk, Whole Fruits, Snacks and Desserts']//all_day
    ,['Egg and Cheese on Bagel or English Muffin',<br/>,'Toasted Bagel with Cream Cheese']//breakfast_sandwich
    ,['Broccoli & Cheddar (GF) (VEG)',<br/>,'Hearty Chicken Minestrone (H) (DF)']//soup
    ,['Classic Egg Salad (VEG) / Hummus and Roast Vegetables (VGN) / Tuna Salad / Roast Turkey and Cheddar Cheese (H)']//deli_sandwich
    ,['Garden Salad / Crudités / Salad Bowl with Meat or Vegetable Protein']//salad
)

const w1_wednesday_breakfast = new Breakast(
    ['Pastries, Hot & ColdBeverages, Yogurt, Milk, Whole Fruits, Snacks and Desserts']//all_day
    ,['Egg and Cheese on Bagel or English Muffin',<br/>,'Toasted Bagel with Cream Cheese']//breakfast_sandwich
    ,['Lentil Spinach (GF)(VGN)',<br/>,'Woodland Mushroom (DF)']//soup
    ,['Classic Egg Salad (VEG) / Hummus and Roast Vegetables (VGN) / Tuna Salad / Roast Turkey and Cheddar Cheese (H)']//deli_sandwich
    ,['Garden Salad / Crudités / Salad Bowl with Meat or Vegetable Protein']//salad
)

const w1_thursday_breakfast = new Breakast(
    ['Pastries, Hot & ColdBeverages, Yogurt, Milk, Whole Fruits, Snacks and Desserts']//all_day
    ,['Egg and Cheese on Bagel or English Muffin',<br/>,'Toasted Bagel with Cream Cheese']//breakfast_sandwich
    ,['Spanish and Kale (GF)(VGN)',<br/>,'Chicken Tortilla Soup (GF)']//soup
    ,['Classic Egg Salad (VEG) / Hummus and Roast Vegetables (VGN) / Tuna Salad / Roast Turkey and Cheddar Cheese (H)']//deli_sandwich
    ,['Garden Salad / Crudités / Salad Bowl with Meat or Vegetable Protein']//salad
)

const w1_friday_breakfast = new Breakast(
    ['Pastries, Hot & ColdBeverages, Yogurt, Milk, Whole Fruits, Snacks and Desserts']//all_day
    ,['Egg and Cheese on Bagel or English Muffin',<br/>,'Toasted Bagel with Cream Cheese']//breakfast_sandwich
    ,['Cream Of Roasted Squash (GF)(VGN)',<br/>,'New England Clam Chowder (H)(GF)']//soup
    ,['Classic Egg Salad (VEG) / Hummus and Roast Vegetables (VGN) / Tuna Salad / Roast Turkey and Cheddar Cheese (H)']//deli_sandwich
    ,['Garden Salad / Crudités / Salad Bowl with Meat or Vegetable Protein']//salad
)

//lunch

const w1_monday_hot_food = new lunch_and_dinner(
    ['Pastries, Hot & ColdBeverages, Yogurt, Milk, Whole Fruits, Snacks and Desserts']//all_day
    ,['Beef Lasagna']//entree
    ,['Vegetable Lasagna (VEG)']//veg_entree
    ,['Garlic Bread - 2 pcs (VEG)',<br/>,'Balsamic Glazed Zucchini (GF)(VGN)']//side
    ,['Chicken Quesadilla (H)']//hot_sandwich
    ,['Vegetable and Bean Quesadilla (VGN)']//veg_hot_sandwich
)

const w1_tuesday_hot_food = new lunch_and_dinner(
    ['Pastries, Hot & ColdBeverages, Yogurt, Milk, Whole Fruits, Snacks and Desserts']//all_day
    ,['Orange Ginger Teriyaki Chicken (H)(GF)']//entree
    ,['Orange Ginger Teriyaki Chicken (GF)(VGN)']//veg_entree
    ,['Fluffy Rice (GF)(VGN)',<br/>,'Steamed Green Vegetable Blend (GF)(VGN)',<br/>,'Vegetable Spring Rolls (GF)(VGN)']//side
    ,['Meatball Sub (H)']//hot_sandwich
    ,['Vegetable Meatball Sub (VGN)']//veg_hot_sandwich
)


const w1_wednesday_hot_food = new lunch_and_dinner(
    ['Pastries, Hot & ColdBeverages, Yogurt, Milk, Whole Fruits, Snacks and Desserts']//all_day
    ,['Tuscan Style Sausage (H)(DF)']//entree
    ,['Tuscan Style Vegan Sausage (GF)(VGN)']//veg_entree
    ,['Mac & Cheese or Veggie Chilli (VEG)',<br/>,'Vegetable Medley (GF)(VGN)',<br/>,'Garlic Bread (VGN)']//side
    ,['Southern Chicken (H)']//hot_sandwich
    ,['Meatless Tenders  (VGN)']//veg_hot_sandwich
)


const w1_thursday_hot_food = new lunch_and_dinner(
    ['Pastries, Hot & ColdBeverages, Yogurt, Milk, Whole Fruits, Snacks and Desserts']//all_day
    ,['Butter Chicken – 6oz (H)(GF)']//entree
    ,['Butter Paneer and Cauliflower (GF)(VEG)']//veg_entree
    ,['Basmati Rice (GF)(VGN)',<br/>,'Steamed Vegetable Blend (GF)(VGN)',<br/>,'Vegetable Mini Samosas – 3pcs (VGN)']//side
    ,['Southern Chicken (H)']//hot_sandwich
    ,['Veggie Burger  (VGN)']//veg_hot_sandwich
)


const w1_friday_hot_food = new lunch_and_dinner(
    ['Pastries, Hot & ColdBeverages, Yogurt, Milk, Whole Fruits, Snacks and Desserts']//all_day
    ,['Breaded Haddock']//entree
    ,['Plant Based Nuggets (GF)(VGN)']//veg_entree
    ,['Coleslaw (GF)(VEG)',<br/>,'Tartar sauce (VGN)']//side
    ,['Deluxe Personal Pizza Pepperoni / Chicken (H)']//hot_sandwich
    ,['Garden Vegetable Personal Pizza (VEG)']//veg_hot_sandwich
)

//----------------------------------------------------------------------------------week2----------------------------------------------
//breakfast-------------------------------------------------

const w2_monday_breakfast = new Breakast(
    ['Pastries, Hot & ColdBeverages, Yogurt, Milk, Whole Fruits, Snacks and Desserts']//all_day
    ,['Egg and Cheese on Bagel or English Muffin',<br/>,'Toasted Bagel with Cream Cheese']//breakfast_sandwich
    ,['Mexican Bean (GF)(VGN)',<br/>,'Lemon Turkey Orzo (H)(GF)(DF)']//soup
    ,['Classic Egg Salad (VEG) / Hummus and Roast Vegetables (VGN) / Tuna Salad / Roast Turkey and Cheddar Cheese (H)']//deli_sandwich
    ,['Garden Salad / Crudités / Salad Bowl with Meat or Vegetable Protein']//salad
)

const w2_tuesday_breakfast = new Breakast(
    ['Pastries, Hot & ColdBeverages, Yogurt, Milk, Whole Fruits, Snacks and Desserts']//all_day
    ,['Egg and Cheese on Bagel or English Muffin',<br/>,'Toasted Bagel with Cream Cheese']//breakfast_sandwich
    ,['Lentil Dahl (GF)(VGN)',<br/>,'Italian Wedding (H)(DF)']//soup
    ,['Classic Egg Salad (VEG) / Hummus and Roast Vegetables (VGN) / Tuna Salad / Roast Turkey and Cheddar Cheese (H)']//deli_sandwich
    ,['Garden Salad / Crudités / Salad Bowl with Meat or Vegetable Protein']//salad
)

const w2_wednesday_breakfast = new Breakast(
    ['Pastries, Hot & ColdBeverages, Yogurt, Milk, Whole Fruits, Snacks and Desserts']//all_day
    ,['Egg and Cheese on Bagel or English Muffin',<br/>,'Toasted Bagel with Cream Cheese']//breakfast_sandwich
    ,['Roasted Curry Cauliflower (GF)(VGN)',<br/>,'Tom Yum Chicken (H)(GF)(DF)']//soup
    ,['Classic Egg Salad (VEG) / Hummus and Roast Vegetables (VGN) / Tuna Salad / Roast Turkey and Cheddar Cheese (H)']//deli_sandwich
    ,['Garden Salad / Crudités / Salad Bowl with Meat or Vegetable Protein']//salad
)

const w2_thursday_breakfast = new Breakast(
    ['Pastries, Hot & ColdBeverages, Yogurt, Milk, Whole Fruits, Snacks and Desserts']//all_day
    ,['Egg and Cheese on Bagel or English Muffin',<br/>,'Toasted Bagel with Cream Cheese']//breakfast_sandwich
    ,['Miso- Mushroom (GF)(VGN)',<br/>,'Chicken Mulligatawny (H)(DF)']//soup
    ,['Classic Egg Salad (VEG) / Hummus and Roast Vegetables (VGN) / Tuna Salad / Roast Turkey and Cheddar Cheese (H)']//deli_sandwich
    ,['Garden Salad / Crudités / Salad Bowl with Meat or Vegetable Protein']//salad
)

const w2_friday_breakfast = new Breakast(
    ['Pastries, Hot & ColdBeverages, Yogurt, Milk, Whole Fruits, Snacks and Desserts']//all_day
    ,['Egg and Cheese on Bagel or English Muffin',<br/>,'Toasted Bagel with Cream Cheese']//breakfast_sandwich
    ,['Tomato Roasted Pepper (GF)(VGN)',<br/>,'Seafood Creole (H)(GF)']//soup
    ,['Classic Egg Salad (VEG) / Hummus and Roast Vegetables (VGN) / Tuna Salad / Roast Turkey and Cheddar Cheese (H)']//deli_sandwich
    ,['Garden Salad / Crudités / Salad Bowl with Meat or Vegetable Protein']//salad
)

//lunch------------------------------------------------------

const w2_monday_hot_food = new lunch_and_dinner(
    ['Pastries, Hot & ColdBeverages, Yogurt, Milk, Whole Fruits, Snacks and Desserts']//all_day
    ,['Meatballs in Marinara Sauce - 5pcs (H)(DF)']//entree
    ,['Vegan Meatballs in Marinara Sauce - 5pcs (VGN)']//veg_entree
    ,['Primavera Pasta Casserole (VGN)',<br/>,'Roasted Vegetables',<br/>,'Garlic Bread – 2pcs (VEG)',<br/>,'Parmesan Cheese']//side
    ,['Southern Chicken (H)']//hot_sandwich
    ,['Meatless Tenders (VGN)']//veg_hot_sandwich
)

const w2_tuesday_hot_food = new lunch_and_dinner(
    ['Pastries, Hot & ColdBeverages, Yogurt, Milk, Whole Fruits, Snacks and Desserts']//all_day
    ,['Beef Chili (H)']//entree
    ,['Veggie Chili (VGN)']//veg_entree
    ,['Steamed Vegetables (VGN)',<br/>,'Garlic Bread (VGN)']//side
    ,['Hawaiian Personal Pizza (H)']//hot_sandwich
    ,['Hawaiian Vegetable Personal Pizza (VEG)']//veg_hot_sandwich
)


const w2_wednesday_hot_food = new lunch_and_dinner(
    ['Pastries, Hot & ColdBeverages, Yogurt, Milk, Whole Fruits, Snacks and Desserts']//all_day
    ,['Spinach and Cheese Cannelloni – 2pcs (VEG)']//entree
    ,['Spinach and Cheese Cannelloni – 2pcs (VEG)']//veg_entree
    ,['Marinara Sauce (GF)(VGN)',<br/>,'Caesar Salad (GF)(VGN)',<br/>,'Garlic Bread (VEG)',<br/>,'Parmesan Cheese (ON SIDE)']//side
    ,['Southern Chicken (H)']//hot_sandwich
    ,['Meatless Tenders  (VGN)']//veg_hot_sandwich
)


const w2_thursday_hot_food = new lunch_and_dinner(
    ['Pastries, Hot & ColdBeverages, Yogurt, Milk, Whole Fruits, Snacks and Desserts']//all_day
    ,['Creamy Peppercorn Chicken Breast -1pc (H)(GF)']//entree
    ,['Bean and Vegetable Ratatouille (GF)(VGN)']//veg_entree
    ,['Lemon Rice (GF)(VGN)',<br/>,'Steamed Green Beans – 4oz (GF)(VGN)',<br/>,'Spanakopita – 2pcs (VEG)']//side
    ,['Beef Burger (H)']//hot_sandwich
    ,['Veggie Burger (VGN)']//veg_hot_sandwich
)


const w2_friday_hot_food = new lunch_and_dinner(
    ['Pastries, Hot & ColdBeverages, Yogurt, Milk, Whole Fruits, Snacks and Desserts']//all_day
    ,['Baked Salmon with Mango Ginger Salsa (GF)(DF)']//entree
    ,['Four Cheese & Spinach Manicotti Pasta (VEG)']//veg_entree
    ,['Herb Scented Wild rice (GF)(VGN)',<br/>,'Yellow n Green Beans (GF)(VGN)',<br/>,'Dinner Roll (VEG)']//side
    ,['Meatball Sub (H)']//hot_sandwich
    ,['Vegetable meatball Sub (VGN)']//veg_hot_sandwich
)

//------------------------week3--------------------------------------------------------------------------------
//breakfast-------------------------------------------------

const w3_monday_breakfast = new Breakast(
    ['Pastries, Hot & ColdBeverages, Yogurt, Milk, Whole Fruits, Snacks and Desserts']//all_day
    ,['Egg and Cheese on Bagel or English Muffin',<br/>,'Toasted Bagel with Cream Cheese']//breakfast_sandwich
    ,['Split Pea and Roasted pepper (GF)(VGN)',<br/>,'Roasted Corn Chowder (GF)(VEG)']//soup
    ,['Classic Egg Salad (VEG) / Hummus and Roast Vegetables (VGN) / Tuna Salad / Roast Turkey and Cheddar Cheese (H)']//deli_sandwich
    ,['Garden Salad / Crudités / Salad Bowl with Meat or Vegetable Protein']//salad
)

const w3_tuesday_breakfast = new Breakast(
    ['Pastries, Hot & ColdBeverages, Yogurt, Milk, Whole Fruits, Snacks and Desserts']//all_day
    ,['Egg and Cheese on Bagel or English Muffin',<br/>,'Toasted Bagel with Cream Cheese']//breakfast_sandwich
    ,['Navy Bean & Garden Vegetable (GF)(VGN)',<br/>,'Chicken Noodle (H)(DF)']//soup
    ,['Classic Egg Salad (VEG) / Hummus and Roast Vegetables (VGN) / Tuna Salad / Roast Turkey and Cheddar Cheese (H)']//deli_sandwich
    ,['Garden Salad / Crudités / Salad Bowl with Meat or Vegetable Protein']//salad
)

const w3_wednesday_breakfast = new Breakast(
    ['Pastries, Hot & ColdBeverages, Yogurt, Milk, Whole Fruits, Snacks and Desserts']//all_day
    ,['Egg and Cheese on Bagel or English Muffin',<br/>,'Toasted Bagel with Cream Cheese']//breakfast_sandwich
    ,['Wild Mushroom (GF)(VGN)',<br/>,'Hearty Beef vegetable (H)(GF)(DF)']//soup
    ,['Classic Egg Salad (VEG) / Hummus and Roast Vegetables (VGN) / Tuna Salad / Roast Turkey and Cheddar Cheese (H)']//deli_sandwich
    ,['Garden Salad / Crudités / Salad Bowl with Meat or Vegetable Protein']//salad
)

const w3_thursday_breakfast = new Breakast(
    ['Pastries, Hot & ColdBeverages, Yogurt, Milk, Whole Fruits, Snacks and Desserts']//all_day
    ,['Egg and Cheese on Bagel or English Muffin',<br/>,'Toasted Bagel with Cream Cheese']//breakfast_sandwich
    ,['Brown Lentil & Spinach (GF)(VGN)',<br/>,'Tom Yum Chicken (H)(GF)(DF)']//soup
    ,['Classic Egg Salad (VEG) / Hummus and Roast Vegetables (VGN) / Tuna Salad / Roast Turkey and Cheddar Cheese (H)']//deli_sandwich
    ,['Garden Salad / Crudités / Salad Bowl with Meat or Vegetable Protein']//salad
)

const w3_friday_breakfast = new Breakast(
    ['Pastries, Hot & ColdBeverages, Yogurt, Milk, Whole Fruits, Snacks and Desserts']//all_day
    ,['Egg and Cheese on Bagel or English Muffin',<br/>,'Toasted Bagel with Cream Cheese']//breakfast_sandwich
    ,['Spicy Black Bean (GF)(VGN)',<br/>,'Potato Leek (GF) (VEG)']//soup
    ,['Classic Egg Salad (VEG) / Hummus and Roast Vegetables (VGN) / Tuna Salad / Roast Turkey and Cheddar Cheese (H)']//deli_sandwich
    ,['Garden Salad / Crudités / Salad Bowl with Meat or Vegetable Protein']//salad
)

//lunch------------------------------------------------------

const w3_monday_hot_food = new lunch_and_dinner(
    ['Pastries, Hot & ColdBeverages, Yogurt, Milk, Whole Fruits, Snacks and Desserts']//all_day
    ,['Beef Lasagna (H)']//entree
    ,['Vegetable Lasagna (VEG)']//veg_entree
    ,['Balsamic Glazed Zucchini (GF)(VGN)',<br/>,'Garlic Bread – 2 pcs (VGN)']
    ,['Chicken Quesadilla (H)']//hot_sandwich
    ,['Vegetable and Corn / Bean Quesadilla (VGN)']//veg_hot_sandwich
)

const w3_tuesday_hot_food = new lunch_and_dinner(
    ['Pastries, Hot & ColdBeverages, Yogurt, Milk, Whole Fruits, Snacks and Desserts']//all_day
    ,['Chicken Souvlaki Off stick (H)(GF)']//entree
    ,['Vegetable & Tofu Souvlaki Off stick (GF)(VGN)']//veg_entree
    ,['Lemon Rice (GF)(VGN)',<br/>,'Greek Salad (GF)(VGN)',<br/>,'Vegetable Spanakopita (VEG)']//side
    ,['Meatball Sub (H)']//hot_sandwich
    ,['Vegetable meatball Sub (VGN)']//veg_hot_sandwich
)


const w3_wednesday_hot_food = new lunch_and_dinner(
    ['Pastries, Hot & ColdBeverages, Yogurt, Milk, Whole Fruits, Snacks and Desserts']//all_day
    ,['Swedish Meatballs in Gravy (H)']//entree
    ,['Plant Based Swedish Meatballs (VEG)']//veg_entree
    ,['Herbed pasta (VGN)',<br/>,'Vegetable Medley (GF)(VGN)',<br/>,'Garlic Bread (VEG)']//side
    ,['Southern Chicken (H)']//hot_sandwich
    ,['Meatless Tenders  (VGN)']//veg_hot_sandwich
)


const w3_thursday_hot_food = new lunch_and_dinner(
    ['Pastries, Hot & ColdBeverages, Yogurt, Milk, Whole Fruits, Snacks and Desserts']//all_day
    ,['Jerk Chicken (H)(GF)']//entree
    ,['West Indian Vegetable Curry with Chickpeas (GF)(VEG)']//veg_entree
    ,['Rice and Peas (GF)(VGN)',<br/>,'Steamed Vegetable Blend (GF)(VGN)',<br/>,'Vegetable Jamaican Patty (GF)(VGN)']//side
    ,['Beef Burger (H)']//hot_sandwich
    ,['Veggie Burger (VGN)']//veg_hot_sandwich
)


const w3_friday_hot_food = new lunch_and_dinner(
    ['Pastries, Hot & ColdBeverages, Yogurt, Milk, Whole Fruits, Snacks and Desserts']//all_day
    ,['Chicken Fingers (H)']//entree
    ,['Impossible Chicken Nuggets (VGN)']//veg_entree
    ,['French Fries (GF)(VGN)',<br/>,'Coleslaw (VEG)',<br/>,'Plum Sauce (GF)(VGN)']//side
    ,['Deluxe Personal Pizza Chicken or Pepperoni (H)']//hot_sandwich
    ,['Garden Vegetable Personal Pizza (VEG)']//veg_hot_sandwich
)

//////--------------------------------weekends--------------
const weekend_breakfast  = new Breakast([],[],[],[])
const weekend_hot_food = new lunch_and_dinner([],[],[],[],[])


const w1_breakfast = [w1_monday_breakfast,w1_tuesday_breakfast,w1_wednesday_breakfast,w1_thursday_breakfast,w1_friday_breakfast,weekend_breakfast,weekend_breakfast];
const w2_breakfast = [w2_monday_breakfast,w2_tuesday_breakfast,w2_wednesday_breakfast,w2_thursday_breakfast,w2_friday_breakfast,weekend_breakfast,weekend_breakfast];
const w3_breakfast = [w3_monday_breakfast,w3_tuesday_breakfast,w3_wednesday_breakfast,w3_thursday_breakfast,w3_friday_breakfast,weekend_breakfast,weekend_breakfast];

const w1_hot_food = [w1_monday_hot_food,w1_tuesday_hot_food,w1_wednesday_hot_food,w1_thursday_hot_food,w1_friday_hot_food,weekend_hot_food,weekend_hot_food];
const w2_hot_food = [w2_monday_hot_food,w2_tuesday_hot_food,w2_wednesday_hot_food,w2_thursday_hot_food,w2_friday_hot_food,weekend_hot_food,weekend_hot_food];
const w3_hot_food = [w3_monday_hot_food,w3_tuesday_hot_food,w3_wednesday_hot_food,w3_thursday_hot_food,w3_friday_hot_food,weekend_hot_food,weekend_hot_food];

const week_1 = [w1_breakfast,w1_hot_food];
const week_2 = [w2_breakfast,w2_hot_food];
const week_3 = [w3_breakfast,w3_hot_food];

const weeks = [week_1,week_2,week_3];

export{weeks};
