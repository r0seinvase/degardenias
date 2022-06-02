puts "creating muggle shopping wizards"

User.create(firstname: "Hermione", lastname: "Granger", email: "user1@gmail.com", password: "password", current_order: "null")
User.create(firstname: "Harry", lastname: "Potter", email: "user2@gmail.com", password: "password", current_order: "null")
User.create(firstname: "Ron", lastname: "Weasley", email: "user3@gmail.com", password: "password", current_order: "null")
User.create(firstname: "Serious", lastname: "Black", email: "user4@gmail.com", password: "password", current_order: "null")
User.create(firstname: "Lily", lastname: "Potter", email: "user5@gmail.com", password: "password", current_order: "null")

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

item4= Item.create(name:"Art Deco Flower Pot", category:"Shelf Decor", object_type:"Flower Pot", decade:"'80s", sold:"false", price:"40.00", picture:"https://i.etsystatic.com/8494428/r/il/6b359c/3119591406/il_1588xN.3119591406_1rv2.jpg", aisle_id:"3")
item5= Item.create(name:"Tufted Rainbow Pillow", category:"Bedding", object_type:"Pillow", decade:"'70s", sold:"false", price:"12.00", picture:"https://live.staticflickr.com/65535/52116467764_f7a439d68a_k.jpg", aisle_id:"1")
item6= Item.create(name:"Art Deco Flower Vase", category:"Table Decor", object_type:"Flower Vase", decade:"'80s", sold:"false", price:"32.00", picture:"https://i.etsystatic.com/17462155/r/il/e3e0fc/3765617307/il_1588xN.3765617307_e0ix.jpg", aisle_id:"4")
item7= Item.create(name:"Crystal Cube Candelabras", category:"Table Decor", object_type:"Candelabra", decade:"'80s", sold:"false", price:"12.00", picture:"https://live.staticflickr.com/65535/52115193772_ff6847a3e5_k.jpg", aisle_id:"4")
item8= Item.create(name:"Crystal Lily Candelabras", category:"Table Decor", object_type:"Candelabra", decade:"'90s", sold:"false", price:"12.00", picture:"https://live.staticflickr.com/65535/52116467259_7288ea3fd0_k.jpg", aisle_id:"4")
item9= Item.create(name:"Onyx Candelabra", category:"Table Decor", object_type:"Candelabra", decade:"'70s", sold:"false", price:"12.00", picture:"https://live.staticflickr.com/65535/52115193597_c99a7b0e0d_k.jpg", aisle_id:"4")
item10= Item.create(name:"Cow Print Landline", category:"Table Decor", object_type:"Telephone", decade:"'90s", sold:"false", price:"50.00", picture:"https://live.staticflickr.com/65535/52116259703_fa08fca02f_k.jpg", aisle_id:"4")
item11= Item.create(name:"Space Age Fruit Bowl", category:"Kitchen", object_type:"Fruitbowl", decade:"'60s", sold:"false", price:"48.00", picture:"https://live.staticflickr.com/65535/52116259373_ebedf3e64f_k.jpg", aisle_id:"2")
item12= Item.create(name:"Cow Creamer Jar", category:"Kitchen", object_type:"Glassware", decade:"'90s", sold:"false", price:"48.00", picture:"https://live.staticflickr.com/65535/52116727215_9ef68175c4_k.jpg", aisle_id:"2")
item13= Item.create(name:"S/5 Frosted Libbey Sunday dishes", category:"Kitchen", object_type:"Kitchenware", decade:"'90s", sold:"false", price:"35.00", picture:"https://i.etsystatic.com/29716078/r/il/20ca4c/3576173485/il_1588xN.3576173485_gldy.jpg", aisle_id:"2")
item14= Item.create(name:"Mondarian Pillow Covers", category:"Bedding", object_type:"Pillow", decade:"2020s", sold:"false", price:"28.00", picture:"https://i.etsystatic.com/29716078/r/il/0f0f09/3497555822/il_1588xN.3497555822_2j5k.jpg", aisle_id:"1")
item15= Item.create(name:"Tufted Cherry Pillow", category:"Bedding", object_type:"Pillow", decade:"'70s", sold:"false", price:"12.00", picture:"https://live.staticflickr.com/65535/52116218846_8bc92d9a6e_k.jpg", aisle_id:"1")
item16= Item.create(name:"Tray", category:"Table Decor", object_type:"organizer", decade:"'70s", sold:"false", price:"18.00", picture:"https://live.staticflickr.com/65535/52116467639_a2f2eeeff7_k.jpg", aisle_id:"4")
item17= Item.create(name:"Retractable Wine Holder", category:"Kitchen", object_type:"Kitchenware", decade:"'60s", sold:"false", price:"45.00", picture:"https://i.etsystatic.com/6691905/r/il/cf959a/3792435231/il_1588xN.3792435231_456c.jpg", aisle_id:"2")
item18= Item.create(name:"Bust of David", category:"Shelf Decor", object_type:"Bust", decade:"'60s", sold:"false", price:"80.00", picture:"https://live.staticflickr.com/65535/52116467589_6940263eb9_k.jpg", aisle_id:"3")
item19= Item.create(name:"Cheetah Book Ends", category:"Shelf Decor", object_type:"Bookends", decade:"'50s", sold:"false", price:"210.00", picture:"https://live.staticflickr.com/65535/52115194157_8f5783573a_k.jpg", aisle_id:"3")
item20= Item.create(name:"Acrylic Magazine Holder", category:"Shelf Decor", object_type:"Magazine Holder", decade:"'60s", sold:"false", price:"48.00", picture:"https://live.staticflickr.com/65535/52116727100_47a4130d6c_h.jpg", aisle_id:"3")
item21= Item.create(name:"S/5 Curated Green Books", category:"Shelf Decor", object_type:"Books", decade:"'60s-'90s", sold:"false", price:"16.00", picture:"https://live.staticflickr.com/65535/52116259328_a1240d57d3_c.jpg", aisle_id:"3")
item16= Item.create(name:"Tissue Box Cover", category:"Table Decor", object_type:"Organizer", decade:"'70s", sold:"false", price:"32.00", picture:"https://live.staticflickr.com/65535/52116218551_2c3b31dfa7_h.jpg", aisle_id:"4")

puts "stocked shelves ☺"

puts "next in line? Your total is..."



puts "have a nice day!"