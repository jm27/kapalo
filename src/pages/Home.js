import Layout from "../Components/Layout";
import Button from "../Components/Button";
import Card from "../Components/Card";
import CardGroup from "../Components/CardGroup";
import Rating from "../Components/Rating";
import Carousel from "../Components/Carousel";
//Import imgs
import maxiRef from "../utilities/imgs/max-refund.png";
import expTax from "../utilities/imgs/exp-tax.png";
import waysTax from "../utilities/imgs/ways-to-file.png";
import max from "../utilities/imgs/max.png";
import check from "../utilities/imgs/check.png";
import accurate from "../utilities/imgs/accurate.png";

function Home() {
  return (
    <div className="Home container-flex">
      <Layout className="container">
        <Button></Button>
        <CardGroup cardGroupTitle="Why Kapalo Tax Services?">
          {" "}
          <Card
            imgSrc={maxiRef}
            imgAlt="max refund kapalo tax services"
            title="Maximum refunds"
            cardText="Our goal is to get you the biggest refund you deserve. We find everything possible."
          ></Card>
          <Card
            imgSrc={expTax}
            imgAlt="experienced kapalo tax services"
            title="Experienced tax pros"
            cardText="We are knowledgeable tax pros, with an average of 15 years' experience."
          ></Card>
          <Card
            imgSrc={waysTax}
            imgAlt="guidance kapalo tax services"
            title="Guidance in case of an audit"
            cardText="One-on-one
          audit guidance
          from a trained
          tax professional."
          ></Card>
        </CardGroup>
        <CardGroup cardGroupTitle="Your satisfaction Guaranted!">
          {" "}
          <Card
            imgSrc={accurate}
            imgAlt="accurate kapalo tax services"
            title="Accurate
            calculations"
            cardText="100% accurate so your tax return will be done right, You receive excellent value for every dollar spent."
            imgClassName="card-img-top mx-auto d-block badge-img"
          ></Card>
          <Card
            imgSrc={max}
            imgAlt="max kapalo tax services"
            title="We search all
            tax deductions"
            cardText="We’ll find every tax deduction and credit you qualify for to get you the biggest tax refund."
            imgClassName="card-img-top mx-auto d-block badge-img"
          ></Card>
          <Card
            imgSrc={check}
            imgAlt="check kapalo tax services"
            title="Every detail
            reviewed"
            cardText="Get a comprehensive review of your tax return before you file so you can be confident nothing gets missed."
            imgClassName="card-img-top mx-auto d-block badge-img"
          ></Card>
        </CardGroup>
        <Rating></Rating>
        <Carousel></Carousel>
      </Layout>
    </div>
  );
}

export default Home;
