// Import React
import React from "react";

// Import Spectacle Core tags
//add future Feature Slide
//add roadblock slide
//add redux tech stack x
//dont forget to invite back to booth
//increase size of everything
//MA says red on grey no good
//put my name first

import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Code,
  Appear,
  Layout
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  reduxlogo: require('../assets/reduximg.png'),
  historyFeature: require('../assets/history-feature.gif'),
  slideshowFeature: require('../assets/slideshow-feature.gif'),
  updateEntry: require('../assets/update-entry.gif'),
  addEntry: require('../assets/add-entry.gif'),
  shannonimg: require('../assets/shannonimg.png'),
  michaelimg: require('../assets/michaelimg.png'),
  sammieimg: require('../assets/sammieimg.png'),
  cloudinarylogo: require('../assets/cloudinaryimg.png'),
  jslogo: require('../assets/javascriptimg.png'),
  mongodblogo: require('../assets/mongodbimg.png'),
  nodelogo: require('../assets/nodejsimg.png'),
  reactlogo: require('../assets/reactimg.png'),
  herokulogo: require('../assets/herokuimg.png'),
  jllogo: require('../assets/jl-logo.png'),
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: 'white',
  //primary: "#9932CC",
  secondary: '#929599',
  //secondary: "#1F2022",
  tertiary: '#dedfe0',
  //tertiary: "#03A9FC",
  quartenary: "#ffffff"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    const stylerow1 = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'left',
      justifyContent: 'space-between'
    }
    const stylerow2 = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex',
      alignItems: 'right',
      justifyContent: 'space-between'
    }
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="quartenary">
            <Image src={images.jllogo} height='200px' />
            <Heading size={5}>
              https://capstone-journal-dpl.herokuapp.com/
            </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary" caps>Our Team</Heading>
          <Layout>
          <List fontWeight='bold' textAlign="center">
            <ListItem padding='5px'>Sammie Worthen<Image src={images.sammieimg} height='105px' /></ListItem>
            <ListItem padding='5px'>Michael Demerjian<Image src={images.michaelimg} height='105px'  /></ListItem>
            <ListItem padding='5px'>Shannon<Image src={images.shannonimg} height='105px' /> </ListItem>
            <ListItem padding='5px'>Justin<Image src={images.michaelimg} height='105px' /></ListItem>
          </List>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="black">
          <Heading size={3} textColor='black'>Why you need it</Heading>
            <Appear>
            <Text fontWeight='bold' textColor='primary'>Arent you tired of losing your journal in every fire or natural disaster?</Text>
            </Appear>
            <List textAlign="center">
              <Appear><ListItem>Cloud based</ListItem></Appear>
              <Appear><ListItem>Fire Proof</ListItem></Appear>
              <Appear><ListItem>Secure</ListItem></Appear>
              <Appear><ListItem>Weather Proof</ListItem></Appear>
            </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={3} textColor='primary' justifyContent='left'>Adding a Entry</Heading>
              <Image src={images.addEntry} height='525px' />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor='primary' align="flex-start flex-start" textAlign="left">Editing a Entry</Heading>
            <Image src={images.updateEntry} height='525px' />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={3} textColor='primary'>Full Journal History</Heading>
            <Image src={images.historyFeature} height='525px' />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor='primary'>Slideshow Feature</Heading>
            <Image src={images.slideshowFeature} height='525px' />
        </Slide>


        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
        <Heading size={3} textColor='primary'>Technology Used</Heading>
          <Image src={images.herokulogo} height='140px' margin='20px'/>
          <Image src={images.reactlogo} height='140px' margin='20px'/>
          <Image src={images.nodelogo} height='140px' margin='20px'/>
          <Image src={images.mongodblogo} height='140px' margin='20px'/>
          <Image src={images.jslogo} height='140px' margin='20px'/>
          <Image src={images.cloudinarylogo} height='140px' margin='20px'/>
          <Image src={images.reduxlogo} height='140px' margin='20px'/>
        </Slide>

        <Slide transition={["zoom"]} bgColor="quartenary">
            <Image src={images.jllogo} height='200px' />
            <Heading size={4}>
              https://capstone-journal-dpl.herokuapp.com/
            </Heading>
        </Slide>

      </Deck>
    );
  }
}
