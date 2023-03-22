import { Card, Col, Row, Text, Button, Badge } from "@nextui-org/react";


export default function cardEvent({ data }: any) {

    return (
        <Card isHoverable isPressable css={{ w: "100%", h: "100%" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                    <Text h3 weight="bold" transform="uppercase" color="#ffffffAA">
                        <Badge css={{ marginRight: 5 }} size="xs" variant="dot" enableShadow disableOutline color="success">
                        </Badge>
                        {data.eventName}
                    </Text>
                </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src="https://s4x9x8w4.stackpathcdn.com/sites/default/files/styles/auto_1500_width/public/venue-images/69835/slideshow-1668004416.jpg"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt="Card example background"
                />
            </Card.Body>
            <Card.Footer
                isBlurred
                css={{
                    position: "absolute",
                    bgBlur: "#ffffff66",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                }}
            >
                <Row>
                    <Col>
                        <Text color="#000" size={12}>
                            Sala Cool - Madrid
                        </Text>
                        <Text color="#000" size={12}>
                            13/04/23
                        </Text>
                    </Col>
                    <Col>
                        {/* <Row justify="flex-end">
                        <Badge size="xs" enableShadow disableOutline color="success">
                            Publish
                        </Badge>
                        </Row> */}
                        {/* <Row justify="flex-end">
                        <Button flat auto rounded color="secondary">
                            <Text
                                css={{ color: "inherit" }}
                                size={10}
                                weight="bold"
                                transform="uppercase"
                            >
                                Publish
                            </Text>
                        </Button>
                        </Row> */}
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}