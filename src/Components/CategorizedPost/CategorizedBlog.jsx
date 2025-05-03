import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

const CategorizedBlog = (data) => {
  return (
    <>
      <div className="container cards">
        <div className="row">
          <div className="col-12">
            <Card className="card" style={{ width: "18rem" }}>
              <div>
                <CardImg
                  alt={data.name || "Blog post image"}
                  src={data.image}
                  style={{ maxHeight: "300px", objectFit: "cover" }}
                />
              </div>
              <div>
                <CardBody>
                  <CardTitle tag="h5">{data.name}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {data.date}
                  </CardSubtitle>
                  <CardText>{data.cardText}</CardText>
                  <Link to={`${data.id}`}>
                    <Button className="btn">Read More</Button>
                  </Link>
                </CardBody>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategorizedBlog;
