"use client";

/* Core */
import { useState } from "react";
const theme = personalTheme();

/* Instruments */
import { selectCount, useDispatch, useSelector } from "@/lib/redux";
import { ThemeProvider, Typography } from "@material-ui/core";
import { TextDetailsSection } from "../TextDetailsSection/TextDetailsSection";
import { personalTheme } from "./styles";
import { ProfileDetailsCard } from "../ProfileDetailsCard/ProfileDetailsCard";
import { ListOfEvents } from "../ListOfEvents/ListOfEvents";
import { ReadPublicationsSection } from "../ReadPublicationsSection/ReadPublicationsSection";
import { TimelineSection } from "../TimelineSection/TimelineSection";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState(2);

  return (
    <div style={{ maxWidth: "100vw" }}>
      <ThemeProvider theme={theme}>
        <TextDetailsSection
          headerText={"Presentation"}
          headerVariant="h3"
          detailText={
            "Find the CV at the bottom, or take a look at some other dynamic components in this website built with React.js"
          }
          modalTitle="Details"
          modalText="These card-like components will take information from my portfolio and CV and scatter them through this application. No constraint based layout algorithm is implemented though, because I didn't invest that much time in it."
        />
        <ProfileDetailsCard
          fullEmail={"tbodica@gmail.com"}
          fullLocation={""}
          fullName={"Bodică Septimiu-Călin"}
          fullTitle={
            "Trainee @EIB, Certified in Data Science, Cybersecurity analyst, Azure"
          }
        />
        <TextDetailsSection
          headerText={"About me"}
          headerVariant="h5"
          detailText={
            "I am a graduate in Computer Science (BSc) focused on Python, Java and Spring and React. My thesis touches on aspects of artificial intelligence \
            applied on spectral data and signals, user interfaces as well as mathematics."
          }
          modalTitle="Details"
          modalText="Do I know any other technologies than the ones listed? Yes, I have lots of tables with detailed figures of books I read, courses I took, and things I used profesionally or not. Check some of the other pages as I update the site."
        />
        <TextDetailsSection
          headerText={"Events"}
          headerVariant="h5"
          detailText={""}
          modalTitle="Details"
          modalText="The list of events below is ideally updated in real time from my database that I always run locally on my Windows or Linux installation or in a VM or container. However, unless I have enough funds to keep a cloud DB running, it will fallback to this static data store, and be updated a few times every year."
        />
        <ListOfEvents />
        <TextDetailsSection
          headerText={"Read papers"}
          headerVariant="h5"
          detailText={""}
          modalTitle="Details"
          modalText="This is one of my favourite activities. In 2020 I had a database of thousands of papers that I was reading consistently. As I moved on with my studies, I had less time to read them so I stopped logging them. But I continue to like papers I find extraordinary on Twitter, so check out the Twitter page for info! (at the top navigation in this site) If I have enough funds to keep the database running, you can see them updated in real time here, along with a *Live* indicator."
        />
        <ReadPublicationsSection />
        <Typography variant="h5" style={{ textAlign: "center" }}>
          CV
        </Typography>
        <TimelineSection />
      </ThemeProvider>
    </div>
  );
};
