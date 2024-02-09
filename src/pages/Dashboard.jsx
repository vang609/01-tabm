import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  SimpleGrid,
  Text,
  Flex,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  HStack,
  Divider,
  Button,
  Image,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

const tasks = [
  {
    id: 1,
    title: "Medalla 1er Lugar",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, ex voluptate optio adipisci.",
    author: "ABM",
    img: "/assets/img/example.jpg",
  },
  {
    id: 2,
    title: "Medalla 1er Lugar",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, ex voluptate optio adipisci.",
    author: "ABM",
    img: "/assets/img/example.jpg",
  },
  {
    id: 3,
    title: "Medalla 1er Lugar",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, ex voluptate optio adipisci.",
    author: "ABM",
    img: "/assets/img/example.jpg",
  },
  {
    id: 4,
    title: "Medalla 1er Lugar",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, ex voluptate optio adipisci.",
    author: "ABM",
    img: "/assets/img/example.jpg",
  },
  {
    id: 5,
    title: "Medalla 1er Lugar",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, ex voluptate optio adipisci.",
    author: "ABM",
    img: "/assets/img/example.jpg",
  },
  {
    id: 6,
    title: "Medalla 1er Lugar",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, ex voluptate optio adipisci.",
    author: "ABM",
    img: "/assets/img/example.jpg",
  },
  {
    id: 7,
    title: "Medalla 1er Lugar",
    description:
      "The site's layout is not responsive. It does not look good on mobile devices. We need to make sure the site looks good on all devices.",
    author: "ABM",
    img: "/assets/img/example.jpg",
  },
  {
    id: 8,
    title: "Medalla 1er Lugar",
    description:
      "We do not have a way for users to sign up for our newsletter. We need to add a newsletter signup form in the footer that allows users to enter their email address.",
    author: "ABM",
    img: "/assets/img/example.jpg",
  },
  {
    id: 9,
    title: "Medalla 1er Lugar",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, ex voluptate optio adipisci.",
    author: "ABM",
    img: "/assets/img/example.jpg",
  },
  {
    id: 10,
    title: "Medalla 1er Lugar",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, ex voluptate optio adipisci.",
    author: "ABM",
    img: "/assets/img/example.jpg",
  },
];

export default function Dashboard() {
  // const tasks = useLoaderData();
  console.log(tasks);

  return (
    <SimpleGrid spacing={10} minChildWidth={300}>
      {tasks &&
        tasks.map((task) => (
          <Card key={task.id} borderTop="8px" borderColor="#40C4B4" bg="white">
            <CardHeader color="gray.700">
              <Flex gap={5}>
                <Box w="50px" h="50px">
                  <Text>{task.id}</Text>
                </Box>
                <Box>
                  <Heading as="h3" size="sm">
                    {task.title}
                  </Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>

            <CardBody color="gray.500">
              <Image
                src={task.img}
                alt={`Image for ${task.title}`}
              />
              <Text>{task.description}</Text>
            </CardBody>

            <Divider borderColor="gray.200" />

            <CardFooter>
              <HStack>
                <Button variant="ghost" rightIcon={<ViewIcon />}>
                  ... Detalle
                </Button>
                {/* <Button variant="ghost" leftIcon={<EditIcon />}>
                  Comment
                </Button> */}
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}

export const tasksLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks");
  console.log({ res });

  return res.json();
};
