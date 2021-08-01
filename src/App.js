import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImageGallery from "react-image-gallery";

export default function App() {
    const images = [
        {
            original: "https://picsum.photos/id/317/1000/600",
            thumbnail: "https://picsum.photos/id/317/250/150"
        },
        {
            original: "https://picsum.photos/id/900/1000/600",
            thumbnail: "https://picsum.photos/id/900/250/150"
        }
    ];

    return (
            <Container>
                <Row>
                    <Col>
                        <div>
                            <ImageGallery items={images} autoPlay={true} showBullets={true} />
                        </div>
                    </Col>
                </Row>
            </Container>
    );
}