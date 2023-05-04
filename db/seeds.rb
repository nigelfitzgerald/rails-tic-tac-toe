# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


Game.destroy_all
User.destroy_all

puts "Creating"

user = User.new(email: "user@live.com", password: "userpwd")
user.save

game = Game.new(user: user, win: 1)
game.save
game2 = Game.new(user: user, win: 1)
game2.save
game3 = Game.new(user: user, win: 0)
game3.save
game4 = Game.new(user: user, win: 0)
game4.save
game5 = Game.new(user: user, win: 0)
game5.save
game6 = Game.new(user: user, win: 0)
game6.save

puts "Done"
