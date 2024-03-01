/* Introduction to OOP :
 - In Object Oriented Programming we follow a mechnaism of blueprinting.
 - We actually prepare a blue print which is nothing but a mental model
   of how real-life entities will look like.
 - For example, Let's say I want to prepare a model, we know every product
   will have "name", "price", "rating". This is not actual model, this is
   only to understand how does the architecture will look like (property)
 - And then every product is going to show some behavior, for example,
   we can -
            (a) Buy the product
            (b) Wishlist the product
            (c) Add product to cart
    There are some actions we can perform on the product (behavior).

Q) Why is this going to help us?
 - Let's say we are building an E-Commerce, we have to deal with lot of
   products and all of them got some common ideas, ideologies, behaviors
   in between them.
 - So, how about we can prior decide a lot of things that products can do
   and products can have, so that we can generalize the behavior of the
   product.
 - Think about like this, we are separately maintaining a IPhone Product
    and it has a Name with Capital 'N' and then there is macbook by
    mistake we kept the name as small 'n'. 
 - We can see now it will be conflicting because we are representing the
   similar product, their values are only different but we have to write
   separate logic for it. But with this generalization it becomes easy.
 - With generalization, we can decide that what can be a common pattern
   to build, what is the behavior that we can build in the common pattern
   and this is what Object-Oriented Programming do.
 - With OOP, we will be able to make complex blue printing/architecture 
   all together.
   
 - Now in technical term this blueprint is called as "class". 
 - Preparing the blueprint of the mental model of whatever real-life 
   entity we have is called as "class".
 - If we ask a builder where is the class of this flat, means technically
   we are asking where is the blue print of this class.
 - And once we have the blue-print ready, using the blue print we can
   create multiple products -
   (a) iphone, 5000, 4.8, IPHONE 
   (b) Macbook, 8000, 4.9, MACBOOK
 - We actually created two real-life entities - IPhone, Macbook. This is
   an actual data which is going to exist in our web app/mobile app. And
   people can come and buy that IPhone, Macbook. So, we are actually
   referring to a real-life entity.
 - So, whenever we are going to refer a real-life entity, these real-life
   entities are called as "Objects". These objects are the same objects
   of JavaScript also.
*/ 