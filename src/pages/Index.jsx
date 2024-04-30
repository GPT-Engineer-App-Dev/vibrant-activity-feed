import { Box, Flex, Text, Button, Image, VStack, HStack } from '@chakra-ui/react';
import { FaCheckCircle, FaShoppingCart } from 'react-icons/fa';

const activities = [
  {
    username: "User1",
    timestamp: "2023-09-15T12:34:56",
    description: "Reserved a new pack!",
    imageUrl: "/images/product1.jpg",
    price: "$19.99"
  },
  {
    username: "User2",
    timestamp: "2023-09-15T13:00:00",
    description: "Achieved new rank: Gold!",
    imageUrl: "/images/leaderboard.jpg",
    price: ""
  },
  {
    username: "User3",
    timestamp: "2023-09-15T14:45:22",
    description: "Purchased a promotional pack.",
    imageUrl: "/images/product2.jpg",
    price: "$29.99"
  }
];

const Index = () => {
  return (
    <Box bg="gray.900" minH="100vh" p={5}>
      <VStack spacing={4}>
        {activities.map((activity, index) => (
          <Box key={index} p={5} bg="gray.700" borderRadius="lg" shadow="md" w="full" maxW="md">
            <HStack justifyContent="space-between">
              <Text color="white" fontWeight="bold">{activity.username}</Text>
              <Text color="gray.400">{activity.timestamp}</Text>
            </HStack>
            <Text color="white" fontSize="lg" my={2}>{activity.description}</Text>
            {activity.imageUrl && (
              <Image borderRadius="md" src={activity.imageUrl} alt="Activity Image" />
            )}
            {activity.price && (
              <Text color="yellow.400" fontWeight="bold" fontSize="lg">{activity.price}</Text>
            )}
            <Flex mt={3} justifyContent="space-between">
              <Button leftIcon={<FaCheckCircle />} colorScheme="blue">Check it out!</Button>
              <Button leftIcon={<FaShoppingCart />} colorScheme="green">Reserve Now!</Button>
            </Flex>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;