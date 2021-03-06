import styles from './SupporterProfile.module.css';
import SideBar from '../Layouts/SideBar';
import SupporterEditor from './SupporterEditor';
import './SupporterProfile.css'
import moment from 'moment';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import React, { useState, useEffect } from "react"
import { Navigate } from 'react-router-dom';

export default function SupporterProfile(props) {
  console.log('inside profile');
  const today = moment();
  const firstMon = today.startOf('week').add(1, 'days').format('LL');
  const firstWed = today.startOf('week').add(3, 'days').format('LL');
  const secondMon = today.startOf('week').add(8, 'days').format('LL');
  const secondWed = today.startOf('week').add(10, 'days').format('LL');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [supporterInfo, setSupporterInfo] = useState(undefined);

  async function fetchSupporterInfo(e) {
    const result = await fetch("http://localhost:4000/supporters/fetch",
      {
        method: 'GET',
        headers: {
          'Content-Type': "application/json; charset=utf-8",
        },
        credentials: 'include',
      })
    const res = await result.json();  /* this is the res sent by the backend */
    console.log('inside fetch supporter');
    console.log('res:', res);
    setSupporterInfo(res);
  }

  useEffect(() => {
    fetchSupporterInfo();
  }, []);

  if(supporterInfo === undefined){
    return(<></>)
  }

  return (
    <>
      <div className={styles.pageContainer}>
        <SideBar profile={true} dashboard={false} />
        <div className={styles.rightContentContainer}>
          <SupporterEditor supporterInfo={supporterInfo}/>
          <h1 className={styles.textMedium}>Availability</h1>
          <div className="time-table">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Mon., {firstMon.toString()}</th>
                  <th scope="col">Wed., {firstWed.toString()}</th>
                  <th scope="col">Mon., {secondMon.toString()}</th>
                  <th scope="col">Wed., {secondWed.toString()}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">8-9 PM</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">9-10 PM</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <>
            <div className={styles.timeBtn}>
              <Button variant="primary" onClick={handleShow}>
                Edit time table
              </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Select times</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <h2>Monday</h2>
                      <p>{firstMon.toString()}</p>
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={'8-9PM'}
                      />

                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={'9-10PM'}
                      />
                    </div>
                  ))}
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <h2>Wednesday</h2>
                      <p>{firstWed.toString()}</p>
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={'8-9PM'}
                      />

                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={'9-10PM'}
                      />
                    </div>
                  ))}
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        </div>
      </div>
    </>
  );
}


