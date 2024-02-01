function loadAboutUsContent() {
    const aboutUsContent = `
      <h2>About Us</h2>
      <p>Welcome to WearHouse, your go-to destination for trendy and affordable fashion!</p>
      <p>Our journey began with a passion for providing stylish clothing options for everyone, and we have expanded to over 100 locations across Indonesia.</p>
      <p>At WearHouse, we believe in the importance of expressing yourself through fashion. Our diverse range of products caters to various styles and preferences, ensuring there's something for everyone.</p>
      <p>Customer satisfaction is our priority, and we are dedicated to delivering high-quality products and an exceptional shopping experience.</p>
      <p>Contact us for any inquiries or assistance. We're here to make your fashion journey enjoyable and memorable!</p>
      <p>Thank you for choosing WearHouse.</p>
      <h3>Contact Us</h3>
      <p>If you have any questions or need assistance, please feel free to contact our customer service:</p>
      <p>Email: support@wearhouse.com</p>
      <p>Phone: (021) 12345 </p>
    `;
    document.querySelector('.content').innerHTML = aboutUsContent;
  }
  document.addEventListener('DOMContentLoaded', loadAboutUsContent);
  