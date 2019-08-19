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



cl1 = Client.create(name: "Ryan Bell")
cl2 = Client.create(name: "Chris Ryan")

a1 = Appointment.create(client_id: cl1.id,contractor_id: c1.id)
a2 = Appointment.create(client_id: cl1.id,contractor_id: c2.id)
a3 = Appointment.create(client_id: cl2.id,contractor_id: c1.id)


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