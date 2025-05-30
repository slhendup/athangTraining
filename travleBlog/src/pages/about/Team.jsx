import Nav from "../../components/Nav";

const About = () => {
  const user = {
    name: "",
    imageUrl:
      "https://th.bing.com/th/id/OIP.GCPbaIj7JXFzTilqHpQQiAHaEK?w=279&amp;h=180&amp;c=7&amp;r=0&amp;o=5&amp;dpr=1.3&amp;pid=1.7",
    imageSize: 100,
  };
  return (
    <div>
      <Nav />
      <br />
      <div>
        At Horizon Trails, we believe that travel isn’t just about reaching a
        destination—it’s about the experiences, the people you meet, and the
        memories you create along the way. Whether you're dreaming of tropical
        beaches, historic cities, mountain adventures, or cultural escapes, we
        tailor every journey to fit your unique travel style. From expertly
        planned tours and luxury vacations to custom itineraries and
        off-the-beaten-path adventures, we’re here to make travel effortless and
        unforgettable. With a passionate team, 24/7 support, and a global
        network of trusted partners, Horizon Trails takes you where your heart
        wants to go.
      </div>

      <h2>Teams in our company</h2>
      <div className="team">
        <div>
          <>
            <h1>{user.name}</h1>
            <img
              src={user.imageUrl}
              alt={"Photo of " + user.name}
              style={{
                width: user.imageSize,
                height: user.imageSize,
              }}
            />
          </>

          <p>
            Alex Rivera is a passionate and innovative coder with a knack for
            solving complex problems through elegant code. With a background in
            computer science and a love for technology that started in
            childhood, Alex has built everything from mobile apps and websites
            to machine learning models and automation tools.
          </p>
        </div>
        <div>
          <>
            <h1>{user.name}</h1>
            <img
              src={user.imageUrl}
              alt={"Photo of " + user.name}
              style={{
                width: user.imageSize,
                height: user.imageSize,
              }}
            />
          </>
          <p>
            Alex Rivera is a passionate and innovative coder with a knack for
            solving complex problems through elegant code. With a background in
            computer science and a love for technology that started in
            childhood, Alex has built everything from mobile apps and websites
            to machine learning models and automation tools.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
