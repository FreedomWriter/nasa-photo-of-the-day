import React, { useState, useEffect } from "react";
import axios from "axios";
import PicCard from "./PicCard";
import { TabContent, TabPane, Card, CardTitle, Row, Col } from "reactstrap";
import { InputGroup, Input } from "reactstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: auto;
  height: 30%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background: dodgerblue;
`;

export default function PicList() {
  const [pics, setPics] = useState([]);

  const [userDate, setUserDate] = useState(null);

  function handleChange(e) {
    setUserDate(e.target.value);
  }

  useEffect(() => {
    let api =
      "https://api.nasa.gov/planetary/apod?api_key=Ou2QnLFt6enMC3ntomdPBUX0QMVoai9YRZvJTqlV";
    let apiQuery = `https://api.nasa.gov/planetary/apod?api_key=Ou2QnLFt6enMC3ntomdPBUX0QMVoai9YRZvJTqlV&date=${userDate}`;
    function formatUserDate() {
      var d = new Date(userDate),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      setUserDate([year, month, day].join("/"));
      return (apiQuery = apiQuery + userDate);
    }
    axios
      .get(userDate !== null ? apiQuery : api)
      .then(result => {
        setPics(result.data);
      })
      .catch(err => {
        console.log(err);
      });
    formatUserDate();
  }, [userDate]);
  return (
    <div>
      <Wrapper>
        <div>
          <TabContent>
            <TabPane>
              <Row>
                <Col sm="12">
                  <h1>Astronomy Picture of the Day</h1>
                </Col>
              </Row>
            </TabPane>
            <TabPane>
              <Row>
                <Card body>
                  <CardTitle>Select A Date</CardTitle>
                  <InputGroup>
                    <Input
                      type="date"
                      data-date-format="YYYY MMMM DD"
                      placeholder="2015-08-09"
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Card>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </Wrapper>

      {userDate && pics.date ? (
        <div>
          <PicCard
            title={pics.title}
            date={pics.date}
            expl={pics.explanation}
            url={pics.url}
          />
        </div>
      ) : null}

      {!userDate ? (
        <div>
          <PicCard
            title={pics.title}
            date={pics.date}
            expl={pics.explanation}
            url={pics.url}
          />
        </div>
      ) : null}
    </div>
  );
}
