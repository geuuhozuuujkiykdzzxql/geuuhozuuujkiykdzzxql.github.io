import "@mantine/core/styles.css";
import { Carousel } from '@mantine/carousel';
import { MantineProvider, Group, Image, HoverCard, Anchor } from "@mantine/core";
import { theme } from "./theme";


interface ImageWithCreditProps{
    URL: string;
    creditURL: string;
    creditStr: string;
}

function ImageWithCredit(props: ImageWithCreditProps) {
  return (
  <HoverCard shadow="md" openDelay={2000}>
    <HoverCard.Target>
      <Image h={500} w="auto" src={props.URL} radius="lg" />
    </HoverCard.Target>
    <HoverCard.Dropdown>
      <Anchor href={props.creditURL} size="sm" c="violet">
        {props.creditStr}
      </Anchor>
    </HoverCard.Dropdown>
  </HoverCard>
  );
}


function Demo() {
  return (
    <Group>
      Roar!
      <Carousel withIndicators height={500}>
      <Carousel.Slide>    
        <ImageWithCredit 
          URL ="/tigerCubs.jpg" 
          creditURL="https://taronga.org.au/media-release/2019-04-01/three-rare-tiger-cubs-debut-taronga-zoo-sydney"
          creditStr="Taronga Zoo (Sydney)"
          />
      </Carousel.Slide>
      <Carousel.Slide> 
        <ImageWithCredit 
          URL ="/babyTiger.jpg"
          creditURL="https://pngtree.com/freebackground/baby-tiger-cub-is-walking-on-rocks_2663035.html"
          creditStr="Pngtree"
        />
      </Carousel.Slide>
      <Carousel.Slide>  
        <ImageWithCredit 
          URL ="/basketOfCubs.jpg"
          creditURL="https://fox17.com/news/local/gallery/nashville-zoo-celebrates-birth-of-three-sumatran-tiger-cubs-marking-joyful-milestone?photo=14"
          creditStr="Nashville Zoo"
        />
      </Carousel.Slide>
      </Carousel>
    </Group>
  );
}



export default function App() {
  return <MantineProvider theme={theme}><Demo/></MantineProvider>;
}
