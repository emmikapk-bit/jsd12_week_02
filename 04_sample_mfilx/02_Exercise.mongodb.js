use('sample_mflix');

//What is an example of  type “movie” and rated “TV-G” look like? ()ตัวอย่างของประเภท "ภาพยนตร์" และเรท "TV-G" มีลักษณะอย่างไร?
//มีภาพยนตร์กี่เรื่องในประเภท "ภาพยนตร์" และเรท "TV-G"?
db.movies.findOne({ type: "movie", rated: "TV-G" })

//How many movies are there in “movie” type and “TV-G” rated? (มีภาพยนตร์กี่เรื่องในประเภท "ภาพยนตร์" และเรท "TV-G"?)
db.movies.find ({ type: "movie", rated: "TV-G" }) .count()