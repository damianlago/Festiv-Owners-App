import { Card, Grid, Text } from "@nextui-org/react";
import Link from "next/link";


export default function cardSettings({ src, name, descrip, link }:any) {

  return (
    <Card isHoverable isPressable css={{ p: "$6", mH: "80%",mw: "100%" }}>
      <Link href={link}>
      <Card.Header>
        <img
          alt="logo"
          src={src}
          width="24px"
          height="24px"
        />
        <Grid.Container css={{ pl: "$6" }}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              {name}
            </Text>
        </Grid.Container> 
      </Card.Header>
      <Card.Body css={{ py: "$1" }}>
        <Text>
          {descrip}
        </Text>
      </Card.Body>
      </Link>
    </Card>
  );
}