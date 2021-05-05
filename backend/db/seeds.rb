# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Task.destroy_all
Day.destroy_all

u1 = User.create(name: 'Sara')

d1 = Day.create(date: '2021/05/05')

t1 = Task.create(description: 'Write Weekly Blog', reminder: '2021/05/10 12:00:00', day_id: d1.id, user_id: u1.id)
t2 = Task.create(description: 'Pay Car Insurance', reminder: '2021/05/15 08:00:00', day_id: d1.id, user_id: u1.id)
t3 = Task.create(description: "Buy Mother's Day Gift", reminder: '2021/05/09 08:00:00', day_id: d1.id, user_id: u1.id)


