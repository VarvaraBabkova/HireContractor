# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Category.destroy_all
Contractor.destroy_all
Client.destroy_all
Appointment.destroy_all

cat1 = Category.create(name: "Plumbing")
cat2 = Category.create(name: "Housekeeping")
cat3 = Category.create(name: "Air Conditioning/Heating")
cat4 = Category.create(name: "Carpeting/Flooring")
cat5 = Category.create(name: "Electricity")
cat6 = Category.create(name: "Landscaping")
cat7 = Category.create(name: "Roofing")



c1 = Contractor.create(name: "Joe Shmoe", price: 20, work: "Chris gets it Done.", 
	img:"https://ehmsolutions.org/wp-content/uploads/2018/04/construction-worker-200x374.png", 
	intro:" I believe that every client should be 100% satisfied with the work I complete for them. 
	If this is not the case I am always willing to go out and make changes to meet their expectations. 
		I treat every project like it was being done in my own home.", category_id: cat1.id )
c2 = Contractor.create(name: "Mary Leal", price: 10, work: "Houston's cleaning, packing,unpacking", 
	img:"https://image.shutterstock.com/image-photo/attractive-beautiful-asian-woman-maid-260nw-704724562.jpg",
intro: "$31 per hr. + tax. $30 off your 1st visit! You're in control of the time and duties.
 3 hour minimum. Over 540 excellent, verified reviews online available on request. 
 Insured. Bonded. 30 years in business! Text or call me! Ginger, Abso Clean, Inc.", category_id: cat2.id )


c3 = Contractor.create(name: "Joe Shmoe", price: 20, work: "Chris gets it Done.", 
	img:"https://ehmsolutions.org/wp-content/uploads/2018/04/construction-worker-200x374.png", 
	intro:" I believe that every client should be 100% satisfied with the work I complete for them. 
	If this is not the case I am always willing to go out and make changes to meet their expectations. 
		I treat every project like it was being done in my own home.", category_id: cat1.id )

c4 = Contractor.create(name: "Frank Lancaster", price: 50, work: "Job done right and pronto", 
		img:"https://media.beliefnet.com/~/media/photos-with-attribution/inspiration/002/peoplemiddleagedmansmilingjpg.jpg?as=1&w=400", 
		intro:"Been providing high quality Air Conditioning/Heating services. I have been serving Houston and neighboring areas for more than 12 years.", category_id: cat3.id )

c5 = Contractor.create(name: "Bo Stafford", price: 54, work: "Removes and install carpeting and all general flooring", 
		img:"http://makeup-crematory.weebly.com/uploads/4/7/7/4/47744545/1311677_orig.jpg", 
		intro:"Stop stressing and let Bo address it.", category_id: cat4.id )

c6 = Contractor.create(name: "Cheyenne Whitaker", price: 48, work: "Over 10 years experience installing electrical units", 
		img:"https://secure.gravatar.com/avatar/9f7337a4421bb3ac3d9a2890f956ec57?s=400&d=mm&r=g", 
		intro:"Experienced electrician you can count on.", category_id: cat5.id )

c7 = Contractor.create(name: "Daphne Scott", price: 62, work: "Whether it's lawn or garden, I can conform it to your standard", 
		img:"https://cdn10.bigcommerce.com/s-9x46yrfk/product_images/uploaded_images/seraphina300.jpg", 
		intro:"Less is more. For all the overgrown grass, weeds and fallen leaves, you need somebody who can resolve this issue. Due to my excellent service, 
		my business is one of the highest rated landscaping business.", category_id: cat6.id )

c8 = Contractor.create(name: "Noel Rice", price: 53, work: "Fixes leaking, repairs and construction of roofs", 
		img:"https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/VGqRaYUogil0szy2p/videoblocks-sad-middle-aged-man-feeling-upset-tears-in-eyes_rwg84vtve_thumbnail-full04.png", 
		intro:"All around roof master.", category_id: cat7.id )

c9 = Contractor.create(name: "Alaina Sherman", price: 46, work: "HVAC reapairing, maitenance and installation", 
		img:"https://www.thebalancecareers.com/thmb/_aDuzn7q-qo_lzFAyOHzpTklizg=/400x0/463028425-56b098cd5f9b58b7d024486b.jpg", 
		intro:"Don't get burnt in this Houston weather. Call Alaina!", category_id: cat3.id )




cl1 = Client.create(name: "Ryan Bell")
cl2 = Client.create(name: "Chris Ryan")
cl3 = Client.create(name: "Travis Stokely")
cl4 = Client.create(name: "Steffi Bailey")
cl5 = Client.create(name: "Yusuf Tobi")


a1 = Appointment.create(client_id: cl1.id,contractor_id: c1.id)
a2 = Appointment.create(client_id: cl1.id,contractor_id: c2.id)
a3 = Appointment.create(client_id: cl2.id,contractor_id: c1.id)
a4 = Appointment.create(client_id: cl3.id,contractor_id: c3.id)
a5 = Appointment.create(client_id: cl2.id,contractor_id: c4.id)
a6 = Appointment.create(client_id: cl5.id,contractor_id: c5.id)
a7 = Appointment.create(client_id: cl4.id,contractor_id: c6.id)
a8 = Appointment.create(client_id: cl5.id,contractor_id: c7.id)
a9 = Appointment.create(client_id: cl5.id,contractor_id: c1.id)




# t.string :name
#     	t.integer :price
#     	t.string :work
#     	t.string :img
#     	t.string :intro
#     	t.integer :category_id


# t.integer :client_id
#     	t.integer :contractor_id
#     	t.datetime :date
#     	t.string :review
#     	t.integer :rating