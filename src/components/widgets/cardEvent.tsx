import { Card, Col, Row, Text, Badge, Dropdown } from "@nextui-org/react";
import { DeleteIcon, EditIcon, CopyIcon, CalendarIcon, MinusIcon } from '@chakra-ui/icons'
import Link from "next/link";


export default function cardEvent({ data, user, eventId }: any) {

    return (
        <Card isHoverable css={{ w: "100%", h: "100%" }}>
            
            <Link href={`/${encodeURIComponent(user)}/${encodeURIComponent(eventId)}`}>
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
            </Link>
            
            <Card.Footer
                isBlurred
                css={{
                    position: "absolute",
                    // bgBlur: "#ffffff66",
                    bgBlur: "#00066",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                }}
            >
                <Row>
                    {/* <Col>
                        <Row justify="flex-start">
                            {data.eventName}
                        </Row> 
                    </Col> */}

                    <Col>
                        <Text color="#000" size={12}>
                            Sala Cool - Madrid
                        </Text>
                        <Text color="#000" size={10}>
                            {data.startDate} : {data.startTime} <MinusIcon/> {data.startDate} : {data.startTime}
                        </Text>
                    </Col>

                    <Col>
                        <Dropdown>
                            <Dropdown.Button flat>Actions</Dropdown.Button>
                            <Dropdown.Menu aria-label="Actions" variant="light">
                                <Dropdown.Section title="Actions">
                                    <Dropdown.Item key="repeat" icon={<EditIcon />}>
                                        Edit Event
                                    </Dropdown.Item>
                                    <Dropdown.Item key="repeat" description="Repeat this event" icon={<CopyIcon />}>
                                        Duplicate
                                    </Dropdown.Item>
                                    <Dropdown.Item key="duplicate" description="Select days for repeat the event" icon={<CalendarIcon />}>
                                        Repeat
                                    </Dropdown.Item>
                                    <Dropdown.Item key="delete" withDivider color="error" description="Delete event. This action is irreversable!" icon={<DeleteIcon />}>
                                        Delete
                                    </Dropdown.Item>
                                </Dropdown.Section>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}