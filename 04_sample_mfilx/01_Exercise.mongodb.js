use('sample_mflix');

//Exercise 1
//Fetch all documents from comments collection.(ดึงเอกสารทั้งหมดจากคอลเลกชันความคิดเห็น)
db.comments.find({})

//Fetch only one user from comments collection by _id = ObjectId(“5a9427648b0beebeb69579f5”). (ดึงผู้ใช้เพียงคนเดียวจากคอลเลกชันความคิดเห็นโดยใช้ _id = ObjectId(“5a9427648b0beebeb69579f5”))
db.comments.findOne({ _id: ObjectId("5a9427648b0beebeb69579f5") })

//Fetch only one user from comments collection by email = “john_bishop@fakegmail.com”.(ดึงผู้ใช้เพียงคนเดียวจากคอลเลกชันความคิดเห็นโดยใช้อีเมล = “john_bishop@fakegmail.com”)
db.comments.findOne({ email: ("john_bishop@fakegmail.com") })

//Fetch only one user from comments collection by name = “John Bishop”. (ดึงผู้ใช้เพียงคนเดียวจากคอลเลกชันความคิดเห็นโดยใช้ชื่อ = “John Bishop”)
db.comments.findOne({ name : ("John Bishop") })

