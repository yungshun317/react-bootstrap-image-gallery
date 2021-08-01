import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImageGallery from "react-image-gallery";

export default function App() {
    const images = [
        {
            original: "https://picsum.photos/1000/600",
            thumbnail: "https://picsum.photos/250/150"
        }
    ];

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <ImageGallery items={images} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}