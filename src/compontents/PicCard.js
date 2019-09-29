import React from "react";
import PicTitle from "./PicTitle";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

export default function PicCard({ title, expl, url }) {
  return (
    <div>
      <div className="pic-card">
        <Card>
          <CardImg top width="100%" src={url} alt="NASA photo of the day" />
          <CardBody>
            <CardTitle>
              <PicTitle title={title} />
            </CardTitle>
            <CardText>{expl}</CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
