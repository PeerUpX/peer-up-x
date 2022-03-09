import React from 'react'
import { Button, Image, Table, Badge } from 'react-bootstrap';

const modalStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '300px',
    paddingLeft: '800px',
    zIndex: 1000,
    borderRadius: '10px',
}

const backgroundStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 1000
}

const buttonStyles = {
    position: 'absolute',
    bottom: '20px',
    left: '45%',
}

const titleStyles = {
    position: 'absolute',
    top: '50px',
    left: '300px',
}

const imageStyles = {
    position: 'absolute',
    width: '150px',
    height: '150px',
    top: '50px',
    left: '50px',
}
 
const bookNowStyles = {
    position: 'absolute',
    top: '70px',
    right: '10%',
}

export default function Modal({open, onClose, data}) {

    if(!open) return null

    return (
        <>
            <div style={backgroundStyles} />
            <div style={modalStyles}>
                <Image roundedCircle style={imageStyles} src='https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'/>
                <div style={titleStyles}>
                    <h1>
                        <b>{data.name}</b>
                    </h1>
                    <p><i>Languages: {data.languages}</i></p>
                </div>
                <Button style={bookNowStyles}>Book Now</Button>
                <div style={{position: "absolute", top: "220px", left: "50px"}}>
                    <h4><b>Future Availability</b></h4>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th> </th>
                                <th>Monday</th>
                                <th>Wednesday</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>8:00 PM</td>
                                <td>Available</td>
                                <td>Unavailable</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>10:00 PM</td>
                                <td>Available</td>
                                <td>Unavailable</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div style={{position: "absolute", top: "220px", left: "600px"}}>
                    <h4><b>Why I joined PeerUp</b></h4>
                    <p>
                    <small>
                    </small>
                    </p>
                    <h4><b>Personal Traits</b></h4>
                </div>
                <div>
                    <Button onClick={onClose} style={buttonStyles}>Close</Button>
                </div>
            </div>
        </>
    )
}
