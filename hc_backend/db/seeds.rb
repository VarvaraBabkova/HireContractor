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

cat1 = Category.create(name: "Plumbers")
cat2 = Category.create(name: "Housekeepers")
cat3 = Category.create(name: "Gardeners")



c1 = Contractor.create(name: "Harry", price: 30, work: "Chris gets it Done.", 
	img:"https://ehmsolutions.org/wp-content/uploads/2018/04/construction-worker-200x374.png", 
	intro:" I believe that every client should be 100% satisfied with the work I complete for them. 
	If this is not the case I am always willing to go out and make changes to meet their expectations. 
		I treat every project like it was being done in my own home.", category_id: cat1.id )

c3 = Contractor.create(name: "Barry", price: 30, work: "Chris gets it Done.", 
	img:"http://streatcrete.co.uk/wp-content/uploads/2015/12/worker.png", 
	intro:" I hanges to ", category_id: cat1.id )

c4 = Contractor.create(name: "Larry", price: 30, work: "Chris gets it Done.", 
	img:"http://freepngdownload.com/image/thumb/industrial-worker-png-free-download-26.png", 
	intro:" I hanges to ", category_id: cat1.id )

c5 = Contractor.create(name: "Varry", price: 30, work: "Chris gets it Done.", 
	img:"https://www.euspray.com/wp-content/uploads/2017/09/handyman.png", 
	intro:" I hanges to ", category_id: cat1.id )
c6 = Contractor.create(name: "Varry", price: 30, work: "Chris gets it Done.", 
	img:"https://i.pinimg.com/236x/3c/b8/d7/3cb8d77747c1c7e4255a488e70560dad--handyman-service-dad-daughter.jpg", 
	intro:" I hanges to ", category_id: cat1.id )
c7 = Contractor.create(name: "Varry", price: 30, work: "Chris gets it Done.", 
	img:"https://www.serviceandsolution.ae/wp-content/uploads/2017/12/contractor.png", 
	intro:" I hanges to ", category_id: cat1.id )

h1 = Contractor.create(name: "Mary", price: 20, work: "Houston's cleaning, packing,unpacking", 
	img:"https://cdn.app.compendium.com/uploads/user/e7c690e8-6ff9-102a-ac6d-e4aebca50425/e475f86d-5568-441a-99ce-4f2af15c3623/File/f4386af2ca1ee6ac9e96f05e33cd5221/shutterstock_654521407.jpg",
	intro: "", category_id: cat2.id )
h2 = Contractor.create(name: "Ann", price: 20, work: "Houston's cleaning, packing,unpacking", 
	img:"https://i.pinimg.com/originals/5e/e3/30/5ee330ae4ea47113f26efcfab61c1bca.jpg",
	intro: "", category_id: cat2.id )
h3 = Contractor.create(name: "Clair", price: 20, work: "Houston's cleaning, packing,unpacking", 
	img:"https://img-aws.ehowcdn.com/340x221p/photos.demandstudios.com/getty/article/181/165/161146656.jpg",
	intro: "", category_id: cat2.id )
h4 = Contractor.create(name: "Dorris", price: 20, work: "Houston's cleaning, packing,unpacking", 
	img:"http://daewonthuduc.com/uploadwb/hinhanh/12d62b8_1_79872018125213_b_.jpg",
	intro: "", category_id: cat2.id )

g1 = Contractor.create(name: "Bob", price: 10, work: "Houston's gardening", 
	img:"https://www.allianz.com.au/business/business-insurance/news/small-business-insurance-for-gardeners-and-landscapers/local-image/small-business-insurance-for-gardeners-and-landscapers-01_360x240.jpg",
	intro: "", category_id: cat3.id )
g2 = Contractor.create(name: "Joe", price: 10, work: "Houston's gardenin", 
	img:"https://q7i2y6d5.stackpathcdn.com/wp-content/uploads/2014/11/gardener1-400x266.jpg",
	intro: "", category_id: cat3.id )
g3 = Contractor.create(name: "Bob", price: 10, work: "Houston's gardenin", 
	img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbHdWK9mNA-j_a7p9nsl9SMuGwtzretZpcxFwdRxvM-ACS39qx8A",
	intro: "", category_id: cat3.id )
# a1 = Appointment.create(client_id: cl1.id,contractor_id: c1.id)
# a2 = Appointment.create(client_id: cl1.id,contractor_id: c2.id)
# a3 = Appointment.create(client_id: cl2.id,contractor_id: c1.id)


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