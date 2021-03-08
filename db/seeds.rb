# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Location.destroy_all
Item.destroy_all
User.destroy_all
@ben = User.create!(user_name: 'ben', email: 'ben@ben.io', password: '123456')
@bob = User.create!(user_name: 'bob', email: 'bob@bob.io', password: '123456')
@billy =
  User.create!(user_name: 'billy', email: 'billy@billy.io', password: '123456')
@barbara =
  User.create!(
    user_name: 'barbara',
    email: 'barbara@barbara.io',
    password: '123456',
  )
puts "#{User.count} users created."
@standard = Location.create!(repository: 'New York: Morgan Library')
@modern = Location.create!(repository: 'Philadelphia: Free Library')
@pioneer = Location.create!(repository: 'Dijon: Municipal Library')
@vintage = Location.create!(repository: 'South Africa: Gray Collection')

puts "#{Location.count} Location created."
Item.create!(
  title: 'MS M115',
  description: 'Gradual',
  image_url: 'https://imgur.com/6ujGYoG',
  users: User.all.sample,
  locations: [@standard],
  DateCreated: 1470,
)
Item.create!(
  title: 'Lewis E 8',
  description: 'Fragments, gradual',
  image_url: 'https://imgur.com/Zu2TAwV',
  users: User.all.sample,
  locations: [@modern],
  DateCreated: 1470,
)
Item.create!(
  title: 'MS617',
  description: 'liturgical',
  image_url: 'https://imgur.com/oqJ63hg',
  users: User.all.sample,
  locations: [@pioneer],
  DateCreated: '15th century',
)
Item.create!(
  title: 'MS223',
  description: 'liturgical',
  image_url: 'https://imgur.com/0GHe8oo',
  users: User.all.sample,
  locations: [@pioneer],
  DateCreated: '15th century',
)
Item.create!(
  title: 'MS1646',
  description: 'Gradual',
  image_url: 'https://imgur.com/fhdguoj',
  users: User.all.sample,
  locations: [@pioneer],
  DateCreated: '15th century',
)
Item.create!(
  title: 'This is a title',
  description: Faker::Lorem.paragraphs(number: 4),
  image_url: 'https://source.unsplash.com/random',
  users: User.all.sample,
  locations: [@standard, @budget],
  DateCreated: 'TBD',
)
Item.create!(
  title: 'This is a title',
  description: Faker::Lorem.paragraphs(number: 4),
  image_url: 'https://source.unsplash.com/random',
  users: User.all.sample,
  locations: [@standard, @budget],
  DateCreated:'TBD',
)
Item.create!(
  title: 'This is a title',
  description: Faker::Lorem.paragraphs(number: 4),
  image_url: 'https://source.unsplash.com/random',
  users: User.all.sample,
  locations: [@standard, @budget],
  DateCreated:'TBD',
)
Item.create!(
  title: 'This is a title',
  description: Faker::Lorem.paragraphs(number: 4),
  image_url: 'https://source.unsplash.com/random',
  users: User.all.sample,
  locations: [@standard, @budget],
  DateCreated:'TBD',
)
Item.create!(
  title: 'This is a title',
  description: Faker::Lorem.paragraphs(number: 4),
  image_url: 'https://source.unsplash.com/random',
  users: User.all.sample,
  locations: [@standard, @budget],
  DateCreated:'TBD',
)
Item.create!(
  title: 'This is a title',
  description: Faker::Lorem.paragraphs(number: 4),
  image_url: 'https://source.unsplash.com/random',
  users: User.all.sample,
  locations: [@standard, @budget],
  DateCreated:'TBD',
)
puts "#{Item.count} Items created."