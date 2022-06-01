puts "creating muggle shopping wizards"

User.create(firstname: "Hermione", lastname: "Granger", email: "user1@gmail.com", password: "password")
User.create(firstname: "Harry", lastname: "Potter", email: "user2@gmail.com", password: "password")
User.create(firstname: "Ron", lastname: "Weasley", email: "user3@gmail.com", password: "password")
User.create(firstname: "Serious", lastname: "Black", email: "user4@gmail.com", password: "password")
User.create(firstname: "Lily", lastname: "Potter", email: "user5@gmail.com", password: "password")

puts "done ☺"



puts "creating aisles"
Aisle.create(name:"Bedding")
Aisle.create(name:"Kitchen")
Aisle.create(name:"Shelf Decor")
Aisle.create(name:"Table Decor")
puts "systems ready for shipments!"



puts "importing inventory "

item1 = Item.create(name:"Z-Stem Martini Glasses", category:"Kitchen", object_type:"Glassware", decade:"'90s", sold:"false", price:"60.00", picture:"https://live.staticflickr.com/65535/52113659799_27023b8d70_k.jpg", aisle_id:"2")
# item1.image.attach(io: File.open(Rails.root.join('app/assets/images/b_1.JPG')),
# filename: 'b_1.JPG')

item2 = Item.create(name:"Crystal Bag Flower Vase", category: "table_decor", object_type:"Flower Vase", decade:"2000s", sold:"false", price:"40.00", picture:"https://live.staticflickr.com/65535/52112387472_9b4694d64d_k.jpg", aisle_id:"4" )
# item2.image.attach(io: File.open(Rails.root.join('app/assets/images/a_1.JPG')),
# filename: 'a_1.JPG')

item3 = Item.create(name:"Crystal Candelabra", category:"Table Decor", object_type:"Candelabra", decade:"'90s", sold:"false", price:"35.00", picture:"https://live.staticflickr.com/65535/52113448578_2ea4a63610_k.jpg", aisle_id:"4" )

item4= Item.create(name:"Art Deco Flower Pot", category:"Shelf Decor", object_type:"Flower Pot", decade:"'80s", sold:"false", price:"40.00", picture:"", aisle_id:"3")
item5= Item.create(name:"S/6 Ceramic Coffee Mugs", category:"Kitchen", object_type:"Mugs", decade:"'60s", sold:"false", price:"45.00", picture:"", aisle_id:"2")
item6= Item.create(name:"Art Deco Flower Vase", category:"Table Decor", object_type:"Flower Vase", decade:"'80s", sold:"false", price:"32.00", picture:"", aisle_id:"4")
item7= Item.create(name:"Crystal Cube Candelabras", category:"Table Decor", object_type:"Candelabra", decade:"'80s", sold:"false", price:"12.00", picture:"", aisle_id:"4")
item8= Item.create(name:"Crystal Lily Candelabras", category:"Table Decor", object_type:"Candelabra", decade:"'90s", sold:"false", price:"12.00", picture:"", aisle_id:"4")
item9= Item.create(name:"S/2 Table Place Mats", category:"Kitchen", object_type:"Dining", decade:"'90s", sold:"false", price:"10.00", picture:"", aisle_id:"2")
item10= Item.create(name:"Ceramic Blue Flower Vase", category:"Table Decor", object_type:"Flower Vase", decade:"'80s", sold:"false", price:"28.00", picture:"", aisle_id:"4")
item11= Item.create(name:"S/4 Functional Champagne Flutes", category:"Kitchen", object_type:"Glassware", decade:"'90s", sold:"false", price:"24.00", picture:"", aisle_id:"2")
item12= Item.create(name:"S/4 Whiskey Tumblrs", category:"Kitchen", object_type:"Glassware", decade:"'70s", sold:"false", price:"48.00", picture:"", aisle_id:"2")
item13= Item.create(name:"Soul Mate Salt and Pepper Shakers", category:"Kitchen", object_type:"Kitchenware", decade:"'90s", sold:"false", price:"13.00", picture:"", aisle_id:"2")
item14= Item.create(name:"Tufted Leopard Pillow", category:"Bedding", object_type:"Pillow", decade:"2020s", sold:"false", price:"28.00", picture:"", aisle_id:"1")
item15= Item.create(name:"Blue Frill Pillow", category:"Bedding", object_type:"Pillow", decade:"'90s", sold:"false", price:"12.00", picture:"", aisle_id:"1")
item16= Item.create(name:"Tray", category:"Table Decor", object_type:"organizer", decade:"'70s", sold:"false", price:"18.00", picture:"", aisle_id:"4")
item17= Item.create(name:"Retractable Wine Holder", category:"Kitchen", object_type:"Kitchenware", decade:"'60s", sold:"false", price:"45.00", picture:"", aisle_id:"2")


puts "stocked shelves ☺"
