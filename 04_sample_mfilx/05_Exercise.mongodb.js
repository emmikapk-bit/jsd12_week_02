use('sample_mflix');

//What are top 5 runtime movies?
//db.movies.find ({}).sort ({runtime: -1}).limit(5)

//What are top 5 runtime movies that less than 60 minutes?
db.movies.find({ runtime: { $lt: 60 } }).sort({ runtime: -1 }).limit(5)

//I was born in 1955, which 3 movies should I watch in next 10 years?
db.movies.find ({year: $gte: 1955, $lt: 1966}) .sort

//How many movies were released during 1990 - 2000?
//db.movies.find({ year: { $gte: 1990, $lt: 2000} }).count()
