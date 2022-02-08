import { Box, Text, Stack, theme, Image, Divider } from "@chakra-ui/react";

import nft from "./assets/nft.jpg";
import eth from './assets/icon-ethereum.svg';
import clock from './assets/icon-clock.svg';
import avatar from './assets/image-avatar.png'

function App() {

  return (
    <Stack maxWidth={332} spacing={4} padding={4} backgroundColor='primary.800' borderRadius="lg" boxShadow="xl">
      <Image width={300} height={300} src={nft} />
      <Stack spacing={2}>
        <Text fontSize="xl" color="white" fontWeight={600}>
          Equilibrium #3429
        </Text>
        <Text color="primary.400" fontWeight={300}>
          Our Equilibrium collection promotes balance and calm.
        </Text>
      </Stack>
      <Stack direction='row' color='white' fontSize='sm' justifyContent='space-between'>
        <Stack direction='row' spacing={1.5} alignItems='center' color='primary.500'>
          <Image width={3} height={4} src={eth}/>
          <Text>0.041 ETH</Text>
        </Stack>
        <Stack direction='row' spacing={1.5} alignItems='center' color='primary.400'>
          <Image width={4} height={4} src={clock}/>
          <Text>3 days left</Text>
        </Stack>
      </Stack>
      <Divider borderColor="whiteAlpha.300" />
      <Stack direction="row" alignItems="center" spacing={3}>
        <Box borderWidth={1} borderColor='white' borderRadius={9999} width={8} height={8} >
          <Image width="100%" height="100%"  src={avatar}/>
        </Box>
        <Text color='primary.400'>
          Creation of {" "}
          <Text as="span" color="white">
            Jules Wyvern
          </Text>
        </Text>
      </Stack>
    </Stack>
  )
};

export default App;
