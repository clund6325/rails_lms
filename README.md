user has_many courses
courses has_many users

has many through
user has_many courses, through enrollments
courses has_many users, through enrollments

has many, one to many relationship
  one video has many comments
  all comments belong to the video
has one, one to one relationship
  one person has single address
  address belongs to one person
has many through, many to many relationship
  billboard has many songs, through artists
  songs has many billboards, through artists