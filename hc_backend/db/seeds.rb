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

#cat1 = Category.create(name: "Plumbing")
#cat2 = Category.create(name: "Housekeeping")
# cat8 = Category.create(name: "Air Conditioning/Heating")
# cat4 = Category.create(name: "Carpeting/Flooring")
# cat5 = Category.create(name: "Electricity")
# cat6 = Category.create(name: "Landscaping")
# cat7 = Category.create(name: "Roofing")
name_array = ["Harry", "Frank Lancaster", "Noel Rice", "Bo Stafford", "Yusuf Tobi"]

p_img_array = ["https://ehmsolutions.org/wp-content/uploads/2018/04/construction-worker-200x374.png",
	"http://streatcrete.co.uk/wp-content/uploads/2015/12/worker.png",
	"http://freepngdownload.com/image/thumb/industrial-worker-png-free-download-26.png",
	"https://media.beliefnet.com/~/media/photos-with-attribution/inspiration/002/peoplemiddleagedmansmilingjpg.jpg?as=1&w=400",
	"https://secure.gravatar.com/avatar/9f7337a4421bb3ac3d9a2890f956ec57?s=400&d=mm&r=g",
	"https://cdn10.bigcommerce.com/s-9x46yrfk/product_images/uploaded_images/seraphina300.jpg",
	"https://www.thebalancecareers.com/thmb/_aDuzn7q-qo_lzFAyOHzpTklizg=/400x0/463028425-56b098cd5f9b58b7d024486b.jpg",
	"https://www.euspray.com/wp-content/uploads/2017/09/handyman.png",
	"https://i.pinimg.com/236x/3c/b8/d7/3cb8d77747c1c7e4255a488e70560dad--handyman-service-dad-daughter.jpg",
	"https://www.serviceandsolution.ae/wp-content/uploads/2017/12/contractor.png",
	"https://638019d22b19116de0d4-1d4b8e1ee4fc68b037e808a7ff8e61df.ssl.cf2.rackcdn.com/2018/09/Construction-Supervisor.png",
	"http://www.sharrockinsurance.co.uk/wp-content/uploads/2015/05/Build-To-Suit.jpg",
	"https://www.constructionpartner.com/images/general-contractor-sm.jpg",
	"https://www.fbc.ca/sites/default/files/2017-11/tax%20tip%20contractor%20canada.jpg",
	"https://philippiqualityconstruction.com/wp-content/uploads/2012/04/52_callout.jpg.mxw396.mxh298.jpeg",
	"https://www.epa.gov/sites/production/files/styles/medium/public/2016-05/contractor.jpg",
	"http://freepngdownload.com/image/thumb/industrial-worker-png-free-download-3.png",
	"https://turn2ushandyman.com/wp-content/uploads/2017/08/handyman.png",
	"https://i.dlpng.com/static/png/5089911_thumb.png"

]

20.times {
	Contractor.create(name: name_array[rand(name_array.length)], price: rand(5..30), work: "", 
		img: p_img_array[rand(p_img_array.length)], intro: "Hi!", category_id: cat1.id)
} 

hk_names_array = ["Abigail", "Camille", "Daisy", "Gabrielle", "Edith", "Berenice", 
	"Bernice", "Bernie", "Bertha", "Berta", "Bertie"]

hk_img_array = ["http://montrealmascleaning.com/wp-content/uploads/2018/01/Maid-Cleaning-Services-Montreal-1.jpg",
	"https://static.wixstatic.com/media/6a8f54_e276bd72e91640a09281d45adbf8f89b~mv2.jpg/v1/fill/w_568%2Ch_514%2Cal_c%2Cq_90/file.jpg",
	"https://www.booktoclean.com/wp-content/uploads/2014/04/FairOaksMaid.png",
	"https://maidsandmoore.com/wp-content/uploads/2012/10/Cleaning-Service-Austin-TX.jpg",
	"https://www.trzcacak.rs/myfile/detail/44-447087_why-leesburg-home-cleaning-cleaning-maid-png.png",
	"https://maidfortodayofsouthflorida.com/images/bann_rgt.png",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbm6Z6hONglCSRo1p2BAfzQ2P8_8GURZ-B8Tp2MGve-_KCgO0G",
	"https://thumbs.dreamstime.com/b/cleaner-maid-woman-janitor-cart-isolated-white-background-32541804.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDnOreEkdpFvVz23qIhIFN2rtWxn_TrUiSLyADwWg_ZthMA13z",
	"https://whitemaidcleaning.com/wp-content/uploads/2017/01/wmc-maid-03.png"
]
20.times {
	Contractor.create(name: hk_names_array[rand(hk_names_array.length)], price: rand(5..30), work: "", 
		img: hk_img_array[rand(hk_img_array.length)], intro: "Hi!", category_id: cat2.id)
}

g_img_array = [
	"https://3.imimg.com/data3/WK/HG/MY-9219602/gardeners-manpower-supply-500x500.png",
	"https://i.dlpng.com/static/png/68160_preview.png",
	"https://img.pngio.com/gardener-png-94-images-in-collection-page-1-png-of-woman-gardening-210_323.png",
	"https://img.pngio.com/gardener-png-94-images-in-collection-page-2-png-of-woman-gardening-500_600.png",
	"https://images.freeimages.com/images/premium/previews/1290/12909968-gardener-woman-with-garden-hose-isolated-on-white-background.jpg",
	"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4602828.jpg"
]

20.times {
	Contractor.create(name: name_array[rand(name_array.length)], price: rand(5..30), work: "", 
		img: g_img_array[rand(g_img_array.length)], intro: "Hi!", category_id: cat3.id)
}


c1 = Contractor.create(name: "Harry", price: rand(5..30), work: "Chris gets it Done.", 

	img:"https://ehmsolutions.org/wp-content/uploads/2018/04/construction-worker-200x374.png", 
	intro:" I believe that every client should be 100% satisfied with the work I complete for them. 
	If this is not the case I am always willing to go out and make changes to meet their expectations. 
		I treat every project like it was being done in my own home.", category_id: cat1.id )

c3 = Contractor.create(name: "Barry", price: rand(5..30), work: "Chris gets it Done.", 
	img:"http://streatcrete.co.uk/wp-content/uploads/2015/12/worker.png", 
	intro:" I hanges to ", category_id: cat1.id )

c4 = Contractor.create(name: "Larry", price: rand(5..30), work: "Chris gets it Done.", 
	img:"http://freepngdownload.com/image/thumb/industrial-worker-png-free-download-26.png", 
	intro:" I hanges to ", category_id: cat1.id )

c04 = Contractor.create(name: "Frank Lancaster", price: rand(5..30), work: "Job done right and pronto", 
		img:"https://media.beliefnet.com/~/media/photos-with-attribution/inspiration/002/peoplemiddleagedmansmilingjpg.jpg?as=1&w=400", 
		intro:"Been providing high quality Air Conditioning/Heating services. I have been serving Houston and neighboring areas for more than 12 years.", category_id: cat3.id )

c05 = Contractor.create(name: "Bo Stafford", price: rand(5..30), work: "Removes and install carpeting and all general flooring", 
		img:"http://makeup-crematory.weebly.com/uploads/4/7/7/4/47744545/1311677_orig.jpg", 
		intro:"Stop stressing and let Bo address it.", category_id: cat1.id )

c06 = Contractor.create(name: "Cheyenne Whitaker", price: rand(5..30), work: "Over 10 years experience installing electrical units", 
		img:"https://secure.gravatar.com/avatar/9f7337a4421bb3ac3d9a2890f956ec57?s=400&d=mm&r=g", 
		intro:"Experienced electrician you can count on.", category_id: cat1.id )

c07 = Contractor.create(name: "Daphne Scott", price: rand(5..30), work: "Whether it's lawn or garden, I can conform it to your standard", 
		img:"https://cdn10.bigcommerce.com/s-9x46yrfk/product_images/uploaded_images/seraphina300.jpg", 
		intro:"Less is more. For all the overgrown grass, weeds and fallen leaves, you need somebody who can resolve this issue. Due to my excellent service, 
		my business is one of the highest rated landscaping business.", category_id: cat1.id )

c08 = Contractor.create(name: "Noel Rice", price: rand(5..30), work: "Fixes leaking, repairs and construction of roofs", 
		img:"https://i.pinimg.com/236x/3c/b8/d7/3cb8d77747c1c7e4255a488e70560dad--handyman-service-dad-daughter.jpg", 
		intro:"All around roof master.", category_id: cat1.id )

c09 = Contractor.create(name: "Alaina Sherman", price: rand(5..30), work: "HVAC reapairing, maitenance and installation", 
		img:"https://www.thebalancecareers.com/thmb/_aDuzn7q-qo_lzFAyOHzpTklizg=/400x0/463028425-56b098cd5f9b58b7d024486b.jpg", 
		intro:"Don't get burnt in this Houston weather. Call Alaina!", category_id: cat3.id )



c5 = Contractor.create(name: "Varry", price: rand(5..30), work: "Chris gets it Done.", 
	img:"https://www.euspray.com/wp-content/uploads/2017/09/handyman.png", 
	intro:" I hanges to ", category_id: cat1.id )
c6 = Contractor.create(name: "Varry", price: rand(5..30), work: "Chris gets it Done.", 
	img:"https://i.pinimg.com/236x/3c/b8/d7/3cb8d77747c1c7e4255a488e70560dad--handyman-service-dad-daughter.jpg", 
	intro:" I hanges to ", category_id: cat1.id )
c2 = Contractor.create(name: "Varry", price: rand(5..30), work: "Chris gets it Done.", 
	img:"https://www.serviceandsolution.ae/wp-content/uploads/2017/12/contractor.png", 
	intro:" I hanges to ", category_id: cat1.id )

h1 = Contractor.create(name: "Mary", price: rand(5..30), work: "Houston's cleaning, packing,unpacking", 
	img:"https://cdn.app.compendium.com/uploads/user/e7c690e8-6ff9-102a-ac6d-e4aebca50425/e475f86d-5568-441a-99ce-4f2af15c3623/File/f4386af2ca1ee6ac9e96f05e33cd5221/shutterstock_654521407.jpg",
	intro: "", category_id: cat2.id )
h2 = Contractor.create(name: "Ann", price: rand(5..30), work: "Houston's cleaning, packing,unpacking", 
	img:"https://i.pinimg.com/originals/5e/e3/30/5ee330ae4ea47113f26efcfab61c1bca.jpg",
	intro: "", category_id: cat2.id )
h3 = Contractor.create(name: "Clair", price: rand(5..30), work: "Houston's cleaning, packing,unpacking", 
	img:"https://img-aws.ehowcdn.com/340x221p/photos.demandstudios.com/getty/article/181/165/161146656.jpg",
	intro: "", category_id: cat2.id )
h4 = Contractor.create(name: "Dorris", price: rand(5..30), work: "Houston's cleaning, packing,unpacking", 
	img:"http://daewonthuduc.com/uploadwb/hinhanh/12d62b8_1_79872018125213_b_.jpg",
	intro: "", category_id: cat2.id )

g1 = Contractor.create(name: "Bob", price: rand(5..30), work: "Houston's gardening", 
	img:"https://www.allianz.com.au/business/business-insurance/news/small-business-insurance-for-gardeners-and-landscapers/local-image/small-business-insurance-for-gardeners-and-landscapers-01_360x240.jpg",
	intro: "", category_id: cat3.id )
g2 = Contractor.create(name: "Joe", price: rand(5..30), work: "Houston's gardenin", 
	img:"https://q7i2y6d5.stackpathcdn.com/wp-content/uploads/2014/11/gardener1-400x266.jpg",
	intro: "", category_id: cat3.id )

# a1 = Appointment.create(client_id: cl1.id,contractor_id: c1.id)
# a2 = Appointment.create(client_id: cl1.id,contractor_id: c2.id)
# a3 = Appointment.create(client_id: cl2.id,contractor_id: c1.id)

cl1 = Client.create(name: "Ryan Bell")
cl2 = Client.create(name: "Chris Ryan")
cl3 = Client.create(name: "Travis Stokely")
cl4 = Client.create(name: "Steffi Bailey")
cl5 = Client.create(name: "Yusuf Tobi")


# a1 = Appointment.create(client_id: cl1.id,contractor_id: c1.id)
# a2 = Appointment.create(client_id: cl1.id,contractor_id: c2.id)
# a3 = Appointment.create(client_id: cl2.id,contractor_id: c1.id)
# a4 = Appointment.create(client_id: cl3.id,contractor_id: c3.id)
# a5 = Appointment.create(client_id: cl2.id,contractor_id: c4.id)
# a6 = Appointment.create(client_id: cl5.id,contractor_id: c5.id)
# a7 = Appointment.create(client_id: cl4.id,contractor_id: c6.id)
# a8 = Appointment.create(client_id: cl5.id,contractor_id: c7.id)
# a9 = Appointment.create(client_id: cl5.id,contractor_id: c1.id)




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