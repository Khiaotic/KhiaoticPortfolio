import Container from "react-bootstrap/esm/Container"

export const Hero = () => {
    return (
        <section className="hero" id='home'>
            <Container>
                <row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"></span>
                        <h1>{"Hej Hej! I'm Khiaotic"}
                        <span className="wrap">Animator and Web Developer</span>
                        <p></p>
                        </h1>
                    </Col>
                </row>
            </Container>

        </section>
    )
}