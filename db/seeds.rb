# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.create({title: "Running the Half Marathon", description: "The half marathon may immediately seem very daunting. But even you can run it! Learn how to prepare for your first Half Marathon", user_id: 1, content: "Anyone can run it!", image_url: "http://enlightetech.com/wp-content/uploads/2019/02/Landscapes-1.jpg"});
Post.create({title: "Facing Your Injuries From Your Runs", description: "I experience many injuries myself. It's very important to keep yourself in good condition, but when you can't, you have to learn how to prevent further damage. Click more to learn how from professional advice!", user_id: 3, content: "OUCH!", image_url: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/video/wibbitz/wbz-runners-knee.jpg"});
Post.create({title: "Finding the Right Shoes", description: "Find the right pair of shoes to prevent injuries and run at the peak of your potential.", user_id: 2, content: "Everybody's feet are different!", image_url: "https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"});
