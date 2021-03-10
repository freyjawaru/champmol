# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Item.destroy_all
Location.destroy_all
User.destroy_all
@ben = User.create!(username: 'ben', email: 'ben@ben.io', password: '123456')
@bob = User.create!(username: 'bob', email: 'bob@bob.io', password: '123456')
@billy =  User.create!(username: 'billy', email: 'billy@billy.io', password: '123456')
@barbara =  User.create!(username: 'barbara', email: 'barbara@barbara.io', password: '123456'
  )
puts "#{User.count} user created."
@standard = Location.create!(repository: 'New York: Morgan Library', user: @ben)
@modern = Location.create!(repository: 'Philadelphia: Free Library', user: @barbara)
@pioneer = Location.create!(repository: 'Dijon: Municipal Library', user: @billy)
@vintage = Location.create!(repository: 'South Africa: Gray Collection', user: @bob)
puts "#{Location.count} Location created."
Item.create!(
  title: 'MS M115',
  description: 'Gradual',
  image_url: 'https://i.imgur.com/6ujGYoG.jpg',
  user: User.all.sample,
  location: @standard,
  DateCreated: '1470'
)
Item.create!(
  title: 'Lewis E 8',
  description: 'Fragments, gradual',
  image_url: 'https://i.imgur.com/Zu2TAwV.jpg',
  user: User.all.sample,
  location: @modern,
  DateCreated: '1470'
)
Item.create!(
  title: 'MS617',
  description: 'liturgical',
  image_url: 'https://i.imgur.com/oqJ63hg.jpg',
  user: User.all.sample,
  location: @pioneer,
  DateCreated: '15th century'
)
Item.create!(
  title: 'MS223',
  description: 'liturgical',
  image_url: 'https://i.imgur.com/fhdguoj.png?1',
  user: User.all.sample,
  location: @pioneer,
  DateCreated: '15th century'
)
Item.create!(
  title: 'MS1646',
  description: 'Gradual',
  image_url: 'https://imgur.com/fhdguoj',
  user: User.all.sample,
  location: @pioneer,
  DateCreated: '15th century'
)
Item.create!(
  title: 'This is a title',
  description: Faker::Lorem.paragraphs(number: 4),
  image_url: 'https://source.unsplash.com/random',
  user: User.all.sample,
  location: @vintage,
  DateCreated: 'TBD'
)
Item.create!(
  title: 'This is a title',
  description: Faker::Lorem.paragraphs(number: 4),
  image_url: 'https://source.unsplash.com/random',
  user: User.all.sample,
  location: @vintage,
  DateCreated:'TBD'
)
Item.create!(
  title: 'This is a title',
  description: Faker::Lorem.paragraphs(number: 4),
  image_url: 'https://source.unsplash.com/random',
  user: User.all.sample,
  location: @vintage,
  DateCreated:'TBD'
)
Item.create!(
  title: 'This is a title',
  description: Faker::Lorem.paragraphs(number: 4),
  image_url: 'https://source.unsplash.com/random',
  user: User.all.sample,
  location:  @vintage,
  DateCreated:'TBD'
)
Item.create!(
  title: 'This is a title',
  description: Faker::Lorem.paragraphs(number: 4),
  image_url: 'https://source.unsplash.com/random',
  user: User.all.sample,
  location:  @vintage,
  DateCreated:'TBD'
)
Item.create!(
  title: 'This is a title',
  description: Faker::Lorem.paragraphs(number: 4),
  image_url: 'https://source.unsplash.com/random',
  user: User.all.sample,
  location:  @vintage,
  DateCreated:'TBD'
)
puts "#{Item.count} Items created."