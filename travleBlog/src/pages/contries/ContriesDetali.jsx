import { useParams } from "react-router-dom";
import Nav from "../../components/Nav";

const BlogDetail = () => {
  const { id } = useParams();
  const user = {
    name: "Jakar Dzong",
    imageUrl:
      "https://th.bing.com/th/id/OSK.86520af1fc155c8e0c0175ab564418b8?w=224&amp;h=200&amp;c=12&amp;rs=1&amp;o=6&amp;dpr=1.3&amp;pid=SANGAM",
    imageSize: 400,
  };
  return ( 
    <div>
      <Nav />
      <div>Blogdetails Page{id}</div>
      <div>Bumthang</div> <br />
      <div>A place which have only two season, winter and super winter.</div>
      <>
        <h1>{user.name}</h1>
        <img
          src={user.imageUrl}
          alt={"Photo of " + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize,
            justifyContent:"center"
          }}
        />
      </>
    </div>
  );
};

export default BlogDetail;
