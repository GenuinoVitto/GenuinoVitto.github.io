import { Link } from 'react-router-dom';
import { Badge, Box, Button, Card, HStack, Image, Heading, Stack, Text, Timeline } from "@chakra-ui/react"
import { LuCheck, LuPackage, LuNotebook, LuLinkedin, LuInstagram } from "react-icons/lu"
function Home() {
  return (
    <div className="content">
      <section className="hero">
        <div className="home-image">
          <img className="vitto-img" src="\DSCF0100.jpg" alt="Vitto Genuino" />
        </div>

        <div className="content-greeting">
          <h1 className="greeting">Hello, I'm Vitto</h1>
          <p className="sub-greeting">Get a copy of my resume to see my credentials</p>
          <a href="\Resume - Genuino, Jose Mari Victorio G..pdf" download className="download-btn">Download resume 👨‍💻</a>
        </div>
      </section>

      <section className="about-me">
        <h2>About Me</h2>
        <p>
          I'm Vitto Genuino, a passionate developer with experience in data pipelines and building web applications.
        </p>
        
        <div className="timeline-container">
          <Timeline.Root maxW="600px">
            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <LuCheck />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>Entered College at De La Salle University - Manila</Timeline.Title>
                <Timeline.Description>September 2019</Timeline.Description>
                <Text textStyle="sm">
                  Pursued a Bachelor's degree in Industrial Economics
                </Text>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <LuCheck />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title textStyle="sm">Shifted to Computer Science Majoring in Software Technology</Timeline.Title>
                <Timeline.Description>May 2020</Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <LuCheck />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title textStyle="sm">Entered the Dr. Andrew L. Tan Data Science Institute</Timeline.Title>
                <Timeline.Description>January 2023</Timeline.Description>
                <Text textStyle="sm">Employed as a Research Assistant</Text>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <LuCheck />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title textStyle="sm">Entered Senti AI</Timeline.Title>
                <Timeline.Description>March 2023</Timeline.Description>
                <Text textStyle="sm">Employed as a Web Developer</Text>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <LuCheck />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title textStyle="sm">Exited the Dr. Andrew L. Tan Data Science Institute</Timeline.Title>
                <Timeline.Description>April 2023</Timeline.Description>
                <Text textStyle="sm">Project Finished</Text>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <LuCheck />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title textStyle="sm">Exited Senti AI</Timeline.Title>
                <Timeline.Description>August 2023</Timeline.Description>
                <Text textStyle="sm">Project Finished</Text>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <LuCheck />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title textStyle="sm">Entered LENA - Lately, Everything Needs Analytics</Timeline.Title>
                <Timeline.Description>May 2024</Timeline.Description>
                <Text textStyle="sm">Employed as Data Engineer Intern</Text>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <LuCheck />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title textStyle="sm">Finished College</Timeline.Title>
                <Timeline.Description>December 2025</Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <LuCheck />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title textStyle="sm">Graduation Day</Timeline.Title>
                <Timeline.Description>February 2026</Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline.Root>
        </div>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <h3>Adding Soon...</h3>
        {/* <Stack className="project-cards">
          <Card.Root flexDirection="row" overflow="hidden" maxW="xl">
            <Image
              objectFit="cover"
              maxW="200px"
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Caffe Latte"
            />
            <Box>
              <Card.Body>
                <Card.Title mb="2">The perfect latte</Card.Title>
                <Card.Description>
                  Caffè latte is a coffee beverage of Italian origin made with espresso
                  and steamed milk.
                </Card.Description>
                <HStack mt="4">
                  <Badge>Hot</Badge>
                  <Badge>Caffeine</Badge>
                </HStack>
              </Card.Body>
              <Card.Footer>
                <Button>Buy Latte</Button>
              </Card.Footer>
            </Box>
          </Card.Root>
        </Stack> */}
        {/* <Link to="/projects" className="see-more">See more</Link> */}
      </section>

    <hr></hr>

      <section className="contact">
          <h2>Contact Me</h2>
          <p>If you'd like to get in touch, feel free to reach out via email or social media.</p>
          <p>email: vitto.g.genuino@gmail.com</p>
          <p>mobile: +63 917 867 9172</p>
        <div className="contact-socials">
          <a href='https://www.linkedin.com/in/genuinovitto/'>
            <LuLinkedin size={30} />
          </a>
          <a href='https://www.instagram.com/GenuinoVitto/'>
            <LuInstagram size={30} />
          </a>
        </div>    
      </section>
    </div>
  )
}

export default Home