const ourTeam = [
    {
      "name": "John Smith",
      "title": "Manager",
      "image": "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1672450516.1680609389&semt=ais",
      "description": "John Smith is an experienced manager who ensures smooth operations and excellent team performance. His strategic leadership drives the company's success."
    },
    {
      "name": "Jane Doe",
      "title": "SEO Specialist",
      "image": "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg&ga=GA1.1.1672450516.1680609389&semt=ais",
      "description": "Jane Doe specializes in SEO strategies, driving online visibility and traffic for businesses. Her expertise helps clients reach their target audiences effectively."
    },
    {
      "name": "Michael Johnson",
      "title": "Web Developer",
      "image": "https://img.freepik.com/premium-photo/onfident-handsome-man-with-arms-crossed-body-smiling-looking-determined_911620-3113.jpg?size=626&ext=jpg&ga=GA1.1.1672450516.1680609389&semt=ais",
      "description": "Michael Johnson excels in web development, creating cutting-edge websites with innovative designs and robust functionality, giving clients a competitive edge."
    },
    {
      "name": "Emil Brown",
      "title": "Graphic Designer",
      "image": "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1672450516.1680609389&semt=ais",
      "description": "Emil Brown is a talented graphic designer who brings creativity to life through visually appealing and attention-grabbing designs, helping businesses stand out."
    },
    {
      "name": "David Wilson",
      "title": "Marketing Coordinator",
      "image": "https://img.freepik.com/free-photo/handsome-cheerful-young-man-with-stylish-haircut-dimpled-smile-posing-isolated-against-blank-yellow-wall-dressed-cozy-maroon-sweater-having-confident-look_343059-4609.jpg?size=626&ext=jpg&ga=GA1.1.1672450516.1680609389&semt=ais",
      "description": "David Wilson coordinates marketing campaigns to elevate brand awareness and engagement, driving business growth through targeted marketing strategies."
    },
    {
      "name": "Oliv Lee",
      "title": "Content Writer",
      "image": "https://img.freepik.com/free-photo/confident-handsome-guy-posing-against-white-wall_176420-32936.jpg?size=626&ext=jpg&ga=GA1.1.1672450516.1680609389&semt=ais",
      "description": "Oliv Lee crafts compelling and engaging content that resonates with target audiences, conveying compelling messages for businesses in the digital realm."
    },
    {
      "name": "William Taylor",
      "title": "Data Analyst",
      "image": "https://img.freepik.com/free-photo/portrait-handsome-young-man-with-crossed-arms_176420-15567.jpg?size=626&ext=jpg&ga=GA1.1.1672450516.1680609389&semt=ais",
      "description": "William Taylor analyzes data to derive valuable insights for informed decision-making, helping businesses optimize strategies for greater success."
    },
    {
      "name": "Ava Miller",
      "title": "Social Media Manager",
      "image": "https://img.freepik.com/free-photo/cute-smiling-young-man-with-bristle-looking-satisfied_176420-18989.jpg?size=626&ext=jpg&ga=GA1.1.1672450516.1680609389&semt=ais",
      "description": "Ava Miller manages social media platforms, enhancing brand presence and engaging with audiences, resulting in increased visibility and interaction."
    },
    {
      "name": "James Anderson",
      "title": "UI/UX Designer",
      "image": "https://img.freepik.com/free-photo/handsome-smiling-man-looking-with-disbelief_176420-19591.jpg?size=626&ext=jpg&ga=GA1.1.1672450516.1680609389&semt=ais",
      "description": "James Anderson designs user-friendly interfaces with stunning visuals and smooth user experiences, ensuring businesses provide an enjoyable online journey for their customers."
    },
    {
      "name": "Sophia Martin",
      "title": "Content Manager",
      "image": "https://img.freepik.com/free-photo/happy-man-with-earphones-smiling-camera_23-2148322120.jpg?size=626&ext=jpg&ga=GA1.1.1672450516.1680609389&semt=ais",
      "description": "Sophia Martin oversees content strategies that ensure high-quality and consistent messaging, maintaining brand integrity and relevance in the market."
    },
    {
      "name": "Daniel Clark",
      "title": "Sales Representative",
      "image": "https://img.freepik.com/free-photo/portrait-young-candid-man-student-boy-with-clean-face-relaxed-facial-expression-casual-smile-checked-shirt-t-shirt-summer-outfit-look-white-background_176420-45901.jpg?size=626&ext=jpg&ga=GA1.1.1672450516.1680609389&semt=ais",
      "description": "Daniel Clark is a dedicated sales representative, connecting customers with valuable products and ensuring customer satisfaction and business growth through successful sales strategies."
    },
    {
      "name": "Isabella White",
      "title": "HR Specialist",
      "image": "https://img.freepik.com/free-photo/confident-handsome-adult-man-with-bristle-cross-arms-chest_176420-18945.jpg?size=626&ext=jpg&ga=GA1.1.1672450516.1680609389&semt=ais",
      "description": "Isabella White excels in HR, fostering a positive workplace culture and talent management, ensuring a harmonious and productive work environment for all team members."
    }
  ]

  const pickRandomTeam = ()=> {
    const randomNum = Math.floor(Math.random() * ourTeam.length - 1);

    return ourTeam[randomNum];
  }

  module.exports = pickRandomTeam
  