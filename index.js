let express = require("express")
let app = express()
let PORT = 3000
app.listen(PORT , ()=>{
  console.log("The server is running")
})

// Question 1: Create an endpoint that returns a welcome message.

function getWelcomeMessage(){
  return "Welcome to our service"
}
app.get("/welcome" , (req , res)=>{
  res.send(getWelcomeMessage())
})

// Question 2: Create an endpoint that takes a username as a query parameter and returns a greeting message.

function getGreetingMessage(username){
  return "Hello, " + username + "!"
}
app.get("/greet" , (req ,res)=>{
  let username = req.query.username
  res.send(getGreetingMessage(username))
})

// Question 3: Create an endpoint that takes a password as a query parameter and returns if it is strong (length > 15) or weak.

function checkPasswordStrength(password){
  if(password.length>15){return "Password is strong"}
  else{return "Password is weak"}
}
app.get("/check-password" , (req ,res)=>{
  let password = req.query.password
  res.send(checkPasswordStrength(password))
})

// Question 4: Create an endpoint that takes two numbers as query parameters and returns their sum.

function getSum(num1 , num2){
  return num1 + num2
}
app.get("/sum" , (req ,res)=>{
  let num1 = parseFloat(req.query.num1)
  let num2 = parseFloat(req.query.num2)
  res.send(getSum(num1 , num2).toString())
})

// Question 5: Create an endpoint that takes a username and a boolean isSubscribed indicating subscription status, and returns a message if the user is subscribed or not.

function getSubscriptionStatus(username , isSubscribed){
  if(isSubscribed==="true"){return username + " is subscribed"}
  else{return username + " is not subscribed"}
}
app.get("/subscription-status" , (req , res)=>{
  let username = req.query.username
  let isSubscribed = req.query.isSubscribed
  res.send(getSubscriptionStatus(username,isSubscribed))
})

// Question 6: Create an endpoint that takes a product price and a discount percentage, and returns the final price after discount.

function getDiscountedPrice(price , discount){
  price = price - ((price *discount))/100
  return price
}
app.get("/discounted-price" , (req , res)=>{
  let price = req.query.price
  let discount = req .query.discount
  res.send((getDiscountedPrice(price , discount)).toString())
})

// Question 7: Create an endpoint that takes a user's age, gender, and name, and returns a personalized greeting message.

function getPersonalizedGreeting(age , gender , name){
  return "Hello " + name + "! " + "You are a " + age +" year old " + gender
}
app.get("/personalized-greeting" , (req , res)=>{
  let age = req.query.age
  let gender = req.query.gender
  let name = req.query.name
  res.send(getPersonalizedGreeting(age , gender , name))
})

// Question 8: Create an endpoint that takes a product price, discount percentage, and tax rate, and returns the final price after applying discount and tax.

function getFinalPrice(price , discount , tax){
  let discountedPrice = price - (price * (discount/100))
  let finalPrice = discountedPrice - (discountedPrice *(tax/100))
  return finalPrice
}
app.get("/final-price" ,(req ,res)=>{
 let  price = req.query.price
  let discount = req.query.discount
  let tax = req.query.tax
  res.send((getFinalPrice(price , discount , tax)).toString())
})

// Question 9: Create an endpoint that takes three fitness activity durations (running, cycling, swimming) and returns the total exercise time.

function getTotalExerciseTime(running , cycling , swimming){
  let totalExercieTime = running + cycling + swimming
  return totalExercieTime
}
app.get("/total-exercise-time" , (req , res)=>{
  running = parseFloat(req.query.running)
  cycling = parseFloat(req.query.cycling)
  swimming = parseFloat(req.query.swimming)
  res.send((getTotalExerciseTime(running , cycling , swimming)).toString())
})