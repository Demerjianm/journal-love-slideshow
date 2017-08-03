// Import React
import React from "react";

// Import Spectacle Core tags
//add future Feature Slide
//add roadblock slide
//dont forget to invite back to booth



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
  Layout,
  Grid,
  Table,
  TableBody,
  TableRow,
  TableItem
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
  markdown: require("../assets/markdown.png"),
  justinimg: require("../assets/justin.png")
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
            <Image src={images.jllogo} height='400px' />
            <Heading size={5}>
              tinyurl.com/journal-love-capstone
            </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} textColor="primary" caps padding={6}>Our Team</Heading>
          <Table>
              <TableBody>
                <TableRow>
                  <Appear fid="1">
                    <TableItem>
                      <Image src={images.michaelimg} height='175px'  />
                      <Text size={1}>Michael Demerjian</Text>
                    </TableItem>
                  </Appear>
                  <Appear fid="2">
                    <TableItem>
                      <Image src={images.sammieimg} height='175px' />
                      <Text size={1}>Sammie Worthen</Text>
                    </TableItem>
                  </Appear>
                </TableRow>
                <TableRow>
                  <Appear fid="1">
                    <TableItem>
                      <Image src={images.shannonimg} height='175px' />
                      <Text size={1}>Shannon</Text>
                    </TableItem>
                  </Appear>
                  <Appear fid="2">
                <TableItem>
                      <Image src={images.justinimg} height='175px' />
                      <Text size={1}>Justin</Text>
                    </TableItem>
                  </Appear>
                </TableRow>
              </TableBody>
            </Table>
          </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="black">
          <Heading size={2} textColor='black'>Why you need it</Heading>
            <Appear>
            <Text fontWeight='bold' textColor='primary' textSize='40px'>Arent you tired of losing your journal in every fire or natural disaster?</Text>
            </Appear>
            <List textAlign="center">
              <Appear><ListItem textSize='70px'>Cloud based</ListItem></Appear>
              <Appear><ListItem textSize='70px'>Fire Proof</ListItem></Appear>
              <Appear><ListItem textSize='70px'>Secure</ListItem></Appear>
              <Appear><ListItem textSize='70px'>Weather Proof</ListItem></Appear>
              <Appear><ListItem textSize='70px'>Personable</ListItem></Appear>
            </List>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.addEntry}>
          
        </Slide>

        <Slide transition={["fade"]} bgImage={images.updateEntry}>
            
        </Slide>

        <Slide transition={["fade"]} bgImage={images.historyFeature}>
          
        </Slide>

        <Slide transition={["fade"]} bgImage={images.slideshowFeature}>
          
        </Slide>


        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
        <Heading size={2} textColor='black'>Technology Used</Heading>
          <Image src={images.herokulogo} height='160px' margin='20px'/>
          <Image src={images.reactlogo} height='160px' margin='20px'/>
          <Image src={images.nodelogo} height='160px' margin='20px'/>
          <Image src={images.mongodblogo} height='160px' margin='20px'/>
          <Image src={images.jslogo} height='160px' margin='20px'/>
          <Image src={images.cloudinarylogo} height='160px' margin='20px'/>
          <Image src={images.reduxlogo} height='160px' margin='20px'/>
        </Slide>

        <Slide transition={["zoom"]} bgColor="quartenary">
            <Image src={images.jllogo} height='200px' />
            <Heading size={5}>
              tinyurl.com/journal-love-capstone
            </Heading>
        </Slide>

      </Deck>
    );
  }
}
