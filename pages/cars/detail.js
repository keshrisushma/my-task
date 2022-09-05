import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Detail.module.css'
import styles2 from '../../styles/Detail.module.css'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// tab
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Nav from 'react-bootstrap/Nav';

// form
import Form from 'react-bootstrap/Form';


export default function Chat() {

    return (
        
            <div className={styles2.answers}>
                <Container>
                    <Row>
                        <Col md={9} sm={12} xs={12}>
                            <div className={styles2.answers_left}>
                                <div className={styles2.up}>
                                    <p>Classic 350 (2012-2021)</p>
                                    <p>Comfort</p>
                                </div>
                                <div className={styles.tab_box}>
                                    <h3>Q. What's the Minimum height of a person required to drive a classic 350 ?</h3>
                                    <p className={styles.follow}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16"><path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/></svg>
                                            16.1K Views 
                                        <span>|</span> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/></svg>
                                             Add Answer
                                    </p>
                                </div>
                              
                                <div className={styles2.answers_box}>
                                    <p>31 Answers</p>
                                    <Row>
                                        <Col sm={1} md={1} xs={2}>
                                            <div className={styles.ans_box}>
                                                <img src="/logo.jpg" />
                                            </div>
                                        </Col>
                                        <Col sm={11} md={11} xs={10}>
                                            <div className={styles.ans_box}>
                                                <h5><span>Sushma</span> | 1 month ago</h5>
                                                <div class={styles.trapezoid}></div>
                                                <div className={styles.ans_details}>
                                                    <p><span>@ Aakash</span> | 5.5 inches is perfect minimum height for RE 350 </p>
                                                    <h6>Are you mad bro if you were riding bullet with 1 or 2 guy.. being leg not touches the ground you are gonna suffer too much... If there will be some holes like dig on the road.. You are gone.. 5.8 is enough.. Read More</h6>
                                               </div>
                                                <div className={styles.reply}>
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16"><path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/></svg>  0 <span> | </span> Reply</p>
                                                </div>

                                                <div className={styles.line}>
                                                <div className={styles.box33}>    <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>         </p></div>

                                                </div>
                                                <div className={styles.btn}>
                                                <Button className={styles.btnsub}>submit</Button>
                                                <Button>cancel</Button>
                                                </div>

                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles2.answers_box2}>
                                    <Row>
                                        <Col sm={1} md={1} xs={2}>
                                            <div className={styles.ans_box}>
                                                <img src="/logo.jpg" />
                                            </div>
                                        </Col>
                                        <Col sm={11} md={11} xs={10}>
                                            <div className={styles.ans_box}>
                                                <h5><span>Sushma </span> | 1 month ago</h5>
                                                <h6>Are you mad bro if you were riding bullet with 1 or 2 guy.. being leg not touches the ground you are gonna suffer too much... If there will be some holes like dig on the road.. You are gone.. 5.8 is enough.. Read More</h6>
                                                <div className={styles.reply}>
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16"><path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/></svg>  0 <span> | </span> Reply</p>
                                                    <div className={styles.line}>
                                                <div className={styles.box33}>    <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>         </p></div>

                                                </div>
                                                <div className={styles.btn}>
                                                <Button className={styles.btnsub}>submit</Button>
                                                <Button>cancel</Button>
                                                </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles2.answers_box2}>
                                    <Row>
                                        <Col sm={1} md={1} xs={2}>
                                            <div className={styles.ans_box}>
                                                <img src="/logo.jpg" />
                                            </div>
                                        </Col>
                                        <Col sm={11} md={11} xs={10}>
                                            <div className={styles.ans_box}>
                                                <h5><span>Sushma </span> | 1 month ago</h5>
                                                <h6>Are you mad bro if you were riding bullet with 1 or 2 guy.. being leg not touches the ground you are gonna suffer too much... If there will be some holes like dig on the road.. You are gone.. 5.8 is enough.. Read More</h6>
                                                <div className={styles.reply}>
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16"><path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/></svg>  0 <span> | </span> Reply</p>
                                                    <div className={styles.line}>
                                                <div className={styles.box33}>    <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>         </p></div>

                                                </div>
                                                <div className={styles.btn}>
                                                <Button className={styles.btnsub}>submit</Button>
                                                <Button>cancel</Button>
                                                </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                            </div>  
                        </Col>
                        <Col md={3} sm={12} xs={12}>
                            <div className={styles2.answers_right}>
                                <div className={styles2.trending}>
                                    <h3>Trending Royal Enfield Bikes</h3>
                                    <h3><a href="#">View All</a></h3>
                                </div>
                                <div className={styles2.trending_box}>
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <img src="/b1.jpg" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4>Bullet 350</h4>
                                                    <p>Rs. 1.47 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <img src="/b2.jpg" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4>Interceptor 650</h4>
                                                    <p>Rs. 2.88 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <img src="/b3.jpg" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4>Continental GT 650</h4>
                                                    <p>Rs. 3.05 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <img src="/b4.jpg" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4>Classic 350</h4>
                                                    <p>Rs. 1.90 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <img src="/b5.jpg" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4>Meteor 350</h4>
                                                    <p>Rs. 1.47 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <img src="/b6.jpg" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4>Bullet 350</h4>
                                                    <p>Rs. 1.47 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <img src="/b7.jpg" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4>Interceptor 650</h4>
                                                    <p>Rs. 2.88 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <img src="/b8.jpg" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4>Continental GT 650</h4>
                                                    <p>Rs. 3.05 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>


    )
}