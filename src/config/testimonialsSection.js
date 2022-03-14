export const testimonialsSection = {
  title: "Testimonials",
  subtitle: "Hear From Our Users",
  testimonial1: {
    include: true,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus ullamcorper mi vel varius. Nulla vulputate enim quis ligula ultrices vulputate.",
    image: process.env.PUBLIC_URL + "/images/customers/benten.jpg",
    name: "Dave Bryson",
    rating: 5.0,
  },
  testimonial2: {
    include: true,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus ullamcorper mi vel varius. Nulla vulputate enim quis ligula ultrices vulputate.",
    image: process.env.PUBLIC_URL + "/images/customers/benten.jpg",
    name: "Dave Bryson",
    rating: 5.0,
  },
  brands: {
    include: true,
    title: "As Featured In",
    images: [
      process.env.PUBLIC_URL + "/images/brands/businessInsider.png",
      process.env.PUBLIC_URL + "/images/brands/forbes.png",
      process.env.PUBLIC_URL + "/images/brands/newYorkTimes.png",
      process.env.PUBLIC_URL + "/images/brands/techcrunch.png",
      process.env.PUBLIC_URL + "/images/brands/usaToday.png",
    ],
  },
};

/*
  DOCUMENTATION
  
  --title 
      This is the primary title
  
  --subtitle
      This is the secondary title

  --testimonial1
    You can only add two testimonials to the entire section. What you edit here is the first testimonial.
    --include
    Make this true if you want this testimonial to be visible. Make it false if you want it hidden.
    --text
    What the customer had to say about your app.
    --image
    The avatar image of the customer. The preferable size of this image should be square at 128 px x 128 px. Add the 
    image to the public/images/customers directory. Change the image name only, for example, change benten.jpg to cat.png if this is the name of your image.
    --name
    The name of the customer
    --rating
    The rating the customer gave you on a scale of 1 to 5.

    --testimonial2
    You can only add two testimonials to the entire section. What you edit here is the second testimonial.
    --include
    Make this true if you want this testimonial to be visible. Make it false if you want it hidden.
    --text
    What the customer had to say about your app.
    --image
    The avatar image of the customer. The preferable size of this image should be square at 128 px x 128 px. Add the 
    image to the public/images/customers directory. Change the image name only, for example, change benten.jpg to cat.png if this is the name of your image.
    --name
    The name of the customer
    --rating
    The rating the customer gave you on a scale of 1 to 5.

  --brands
    --include
    The brands part is optional. This will display the images of the brands you have worked with or that use your app.
    --include 
    Make this true if you want to include brands. Make this false if you want brands hidden.
    --title
    The title of the brands section
    --images
    The images to show. Add the images to the public/images/brands directory. They can be any color, the template will add a filter to make them grayscale. Preferably make them .png with transparency for the background (if possible).
    You can add as many brands as you like but 3 to 5 is best. Change the image name only, for example, businessInsider.png would be cat.png if your image name is cat.png.
    Try to give images a fairly consistent height.

*/
