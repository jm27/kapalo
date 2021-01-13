import Layout from "../Components/Layout";
import Button from "../Components/Button";
import Image from "../Components/Image";
// Import images
import comSoon from "../utilities/imgs/coming-soon.png";

function About() {
  return (
    <div className="About container-flex">
      <Layout className="container">
        <Button></Button>
        <Image
          imgClassName='img-about-soon'
          imgSrc={comSoon}
          imgAlt="Coming soon kapalo tax about us page"
        ></Image>
      </Layout>
    </div>
  );
}

export default About;
